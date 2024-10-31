# Imports
import logging
import unittest
import os
import sys

# Adding the parent directory to the path to access BankAccount if located elsewhere in a project
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

# Configuring logging to show info-level messages
logging.basicConfig(level=logging.INFO)

# Custom Exceptions
class BankAccountError(Exception):
    """Base class for exceptions in the bank account module."""
    pass

class NegativeAmountError(BankAccountError):
    """Exception raised for negative amounts in deposits or withdrawals."""
    pass

class InsufficientFundsError(BankAccountError):
    """Exception raised when attempting to withdraw more than the available balance."""
    pass

# BankAccount Class
class BankAccount:
    """A simple bank account class to manage deposits, withdrawals, and balance inquiries."""

    def __init__(self, account_holder: str, balance: float = 0.0) -> None:
        """
        Initializes a BankAccount with the account holder's name and an initial balance.
        """
        self.account_holder = account_holder
        self._balance = balance

    @property
    def balance(self) -> float:
        """Returns the current account balance."""
        return self._balance

    def deposit(self, amount: float) -> None:
        """
        Deposits a specified amount into the account.
        Raises:
            NegativeAmountError: If the deposit amount is negative or zero.
        """
        if amount <= 0:
            raise NegativeAmountError("Deposit amount must be positive")
        self._balance += amount
        logging.info(f"Deposited {amount}. New balance: {self.balance}")

    def withdraw(self, amount: float) -> None:
        """
        Withdraws a specified amount from the account.
        Raises:
            NegativeAmountError: If the withdrawal amount is negative or zero.
            InsufficientFundsError: If there are insufficient funds for the withdrawal.
        """
        if amount <= 0:
            raise NegativeAmountError("Withdrawal amount must be positive")
        if amount > self.balance:
            raise InsufficientFundsError("Insufficient funds")
        self._balance -= amount
        logging.info(f"Withdrew {amount}. New balance: {self.balance}")

    def __str__(self) -> str:
        """
        Returns a string representation of the account holder and current balance.
        """
        return f"Account holder: {self.account_holder}, Balance: {self.balance}"


# Instantiate BankAccount for standalone functionality verification
wallet = BankAccount("Josh", 25000)
wallet.withdraw(500)


# Unit Testing the BankAccount Class
class TestBankAccount(unittest.TestCase):
    """
    Unit tests for the BankAccount class to verify deposit, withdraw, and balance functionalities.
    """

    def setUp(self):
        """
        Set up a bank account instance before each test.
        """
        self.wallet = BankAccount("Josh", 1000.0)

    def test_initial_balance(self):
        """Test if the initial balance is set correctly."""
        self.assertEqual(self.wallet.balance, 1000.0)
        self.assertTrue(self.wallet.balance >= 0)

    def test_deposit(self):
        """Test deposit functionality with a valid positive amount."""
        self.wallet.deposit(500.0)
        self.assertEqual(self.wallet.balance, 1500.0)
        self.assertGreater(self.wallet.balance, 1000.0)

    def test_withdraw(self):
        """Test withdraw functionality with a valid amount within the balance limit."""
        old_balance = self.wallet.balance
        self.wallet.withdraw(100.0)
        self.assertEqual(self.wallet.balance, old_balance - 100.0)
        self.assertNotEqual(self.wallet.balance, old_balance)

    def test_insufficient_funds(self):
        """Test if InsufficientFundsError is raised for withdrawals greater than balance."""
        with self.assertRaises(InsufficientFundsError):
            self.wallet.withdraw(10000.0)

    def test_negative_deposit(self):
        """Test if NegativeAmountError is raised for a negative deposit."""
        with self.assertRaises(NegativeAmountError):
            self.wallet.deposit(-150.0)

    def test_negative_withdraw(self):
        """Test if NegativeAmountError is raised for a negative withdrawal."""
        with self.assertRaises(NegativeAmountError):
            self.wallet.withdraw(-100.0)

    def test_account_holder_name(self):
        """Test if the account holder's name is correctly assigned."""
        self.assertIsNotNone(self.wallet.account_holder)
        self.assertEqual(self.wallet.account_holder, "Josh")

    def test_string_representation(self):
        """Test the __str__ method's output."""
        expected_str = f"Account holder: Josh, Balance: {self.wallet.balance}"
        self.assertEqual(str(self.wallet), expected_str)

    def tearDown(self):
        """
        Clean up the BankAccount instance after each test.
        """
        self.wallet = None


# Boilerplate for direct execution
if __name__ == "__main__":
    unittest.main()
