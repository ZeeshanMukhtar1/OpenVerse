#  Banking Management System
#  Oracle Database SQL Language....

import cx_Oracle
cx_Oracle.init_oracle_client(lib_dir=r"C:\oracle\instantclient_21_8")
conn = cx_Oracle.connect('hr/12345678@//localhost:1521/xe')
print("Oracle is connected to", conn.version, "version of database.")
cur = conn.cursor()

# Login Function
login_status = False

def login():
    global login_status
    status = False
    username = input("Enter the username: ")
    password = input("Enter the password: ")
    query = f"SELECT username FROM login WHERE username = '{username}'"
    cur.execute(query)
    row = cur.fetchone()
    if row is not None:
        status = True
        query = f"SELECT password FROM login WHERE username = '{username}'"
        cur.execute(query)
        row = cur.fetchone()
        d_password = row[0]
        if password == d_password:
            login_status = True
        else:
            print("Incorrect password.")
    else:
        print("Incorrect username.")

# Function to Create / open  Account
def createAccount():
    accNo = int(input("Enter the account no: "))
    name = input("Enter the account holder name: ")
    email = input("Enter the Email Address: ")
    phone_Number = input("Enter the phone_Number: ")
    acc_type = input("Enter the type of account [Current /Saving]: ")
    deposit = int(input("Enter The Initial amount(>=2000 for Saving and >=1000 for current: "))
    query = f"insert into brms values ({accNo}, '{name}', '{email}', {phone_Number}, '{acc_type}', {deposit})"
    cur.execute(query)
    conn.commit()
    print("\n\nCongratulations! New Account has been Created")
    input()

# Function to display All Records
def displayAll():
    query1 = f"select * from brms"
    cur.execute(query1)
    Record = 1
    for row in cur:
        print(Record)
        print(f'Account number: {row[0]}')
        print(f'Account Holder Name: {row[1]}')
        print(f'Email: {row[2]}')
        print(f'Phone: {row[3]}')
        print(f'Account Type: {row[4]}')
        print(f'deposit: {row[5]}')
        Record +=1

# Function to update  the Record
def update():
    status = False
    accNo = int(input("Enter the account number you want to update: "))
    query = "select accno from brms"
    cur.execute(query)
    for row in cur:
        if accNo == row[0]:
            status = True
            print("True")
    if status == True:
        print("What do you want to update select from colums given and remember to write name spelling correctly")
        column_name = input("Enter your choice from here : NAME, EMAIL, PHONE_NUMBER, ACCOUNT_TYPE, DEPOSIT: ")
        column_name = column_name.upper()
        update_value = input("Enter the value you want to insert: ")
        datatype = input("Enter the data type of column from 'number or varchar': ")
        if datatype == 'varchar':
            query2 = f"update brms set {column_name} = '{update_value}' where accno = {accNo}"
        elif datatype == 'number':
            query2 = f"update brms set {column_name} = {update_value} where accno = {accNo}"
        cur.execute(query2)
        conn.commit()
        print("BRMS updated successfully")

# Function to check the balance/Amount
def balance_inquiry():
    accno = input("Enter the account number where you want to see the balance: ")
    query = f"select deposit from brms where accno = {accno}"
    cur.execute(query)
    Record = 1
    for row in cur:
        print(Record)
        print(f"Balance = {row[0]}")
        Record += 1

# Function to deposit Amount
def deposit():
    accno = int(input("Enter your account number where you want to deposit your money: "))
    balance = int(input(f"Enter the amount of money you want to add in this account number {accno}: "))
    query = f"update brms set deposit = deposit + {balance} where accno = {accno}"
    cur.execute(query)
    conn.commit()
    print(f"Balance added to account number : {accno}")

# Function to withdraw the amount
def withdraw():
    accno = int(input("Enter your account number from where you want to withdraw your money: "))
    balance = int(input(f"Enter the amount of money you want to withdraw from this account number {accno}: "))
    query = f"update brms set deposit = deposit - {balance} where accno = {accno}"
    cur.execute(query)
    conn.commit()
    print(f"Balance Withdraw from account number : {accno}")

# Function to delete the data
def deleteAccount():
    print("You can only delete with primary key which is accNo")
    accno = int(input("Enter your account number you want to delete: "))
    query = f"delete from brms where accno = {accno}"
    cur.execute(query)
    conn.commit()
    print(f"Account with account number {accno} deleted Successfully")
    input()

# Function to transfer funds from one account to another account

def transfer_funds():
    src_acc = int(input("Enter the account number of the source account: "))
    dst_acc = int(input("Enter the account number of the destination account: "))
    amount = int(input("Enter the amount to transfer: "))

    # Check if source account has sufficient balance
    query = f"SELECT deposit FROM brms WHERE accno = {src_acc}"
    cur.execute(query)
    row = cur.fetchone()
    if row and row[0] >= amount:
        # Execute the transfer
        query1 = f"UPDATE brms SET deposit = deposit - {amount} WHERE accno = {src_acc}"
        query2 = f"UPDATE brms SET deposit = deposit + {amount} WHERE accno = {dst_acc}"
        cur.execute(query1)
        cur.execute(query2)
        conn.commit()
        print(f"{amount} transferred from account {src_acc} to account {dst_acc}")
    else:
        print("Insufficient balance or invalid account number")


# Function to search for accounts by account number or account holder name

def searchAccount():
    search_term = input("Enter the search term (account number): ")
    query = f"select * from brms where accno = '{search_term}'"
    cur.execute(query)
    Record = 1
    for row in cur:
        print(Record)
        print(f'Account number: {row[0]}')
        print(f'Account Holder Name: {row[1]}')
        print(f'Email: {row[2]}')
        print(f'Phone: {row[3]}')
        print(f'Account Type: {row[4]}')
        print(f'deposit: {row[5]}')
        Record +=1
    if Record == 1:
        print("No records found for the given account number Enter Valid Result to search.")

# Function to view the details of a single account

def viewAccountDetails():
    accno = input("Enter the account number to view details: ")
    query = f"select * from brms where accno = '{accno}'"
    cur.execute(query)
    Record = 1
    for row in cur:
        print(Record)
        print(f'Account number: {row[0]}')
        print(f'Account Holder Name: {row[1]}')
        print(f'Email: {row[2]}')
        print(f'Phone: {row[3]}')
        print(f'Account Type: {row[4]}')
        print(f'deposit: {row[5]}')
        Record +=1

# Function to help Customer Support
def customer_support():
    # Implement customer support functionality here
    print("Welcome to customer support.")
    # Prompt the user for their question or issue
    question = input("How can we assist you today? ")
    # Send the question or issue to the support team for assistance
    support_team_email = "support@bank.com"
    print("Your request has been sent to our customer support team. They will contact you shortly.")

def displayAccountSummary():
    query = "select count(*), sum(deposit), avg(deposit) from brms"
    cur.execute(query)
    row = cur.fetchone()
    print(f"Total number of accounts: {row[0]}")
    print(f"Total deposits: {row[1]}")
    print(f"Average deposit: {row[2]}")

def transactionHistory():
    accno = input("Enter the account number to view transaction history: ")
    query = f"select * from transactions where accno = '{accno}'"
    cur.execute(query)
    Record = 1
    for row in cur:
        print(Record)
        print(f'Transaction ID: {row[0]}')
        print(f'Account number: {row[1]}')
        print(f'Transaction Type: {row[2]}')
        print(f'Amount: {row[3]}')
        print(f'Date and Time: {row[4]}')
        Record +=1


def intro():
    print("\t\t\t\t**********************")
    print("\t\t\t\tBANKING RECORD MANAGEMENT SYSTEM")
    print("\t\t\t\t**********************")


def menu():
    while (True):
        intro()
        print()
        print("\t\t\t\t\t\t\t!!!!!!!!!!WELCOME TO THE BANK MANAGEMENT SYSTEM!!!!!!!!!!!")
        print("\t\t────────────────────────MAIN MENU───────────────────────")
        print("\t\t  ┌────────────────┐  ╭───────────────────────╮           ")
        print("\t\t  │  ╭┼┼╮          │  │ ▶︎ 1 • Create Account  │           ")
        print("\t\t  │  ╰┼┼╮          │  ├───────────────────────┴─────╮     ")
        print("\t\t  │  ╰┼┼╯          │  │ ▶︎ 2 • Deposit AMOUNT        │     ")
        print("\t\t  │                │  ├────────────────────────────┬╯     ")
        print("\t\t  │                │  │ ▶︎ 3 • WITHDRAW AMOUNT      │      ")
        print("\t\t  │   B A N K      │  ├───────────────────────┬────╯      ")
        print("\t\t  │                │  │ ▶︎ 4 • BALANCE ENQUIRY │           ")
        print("\t\t  │  Management    │  ├───────────────────────┴────────╮      ")
        print("\t\t  │                │  │ ▶︎ 5 • ALL ACCOUNT HOLDER LIST  │      ")
        print("\t\t  │   System       │  ├────────────────────────────┴────┴────╮     ")
        print("\t\t  │                │  │ ▶︎ 6 • CLOSE AN ACCOUNT/Delete        │     ")
        print("\t\t  │                │  │─────────────────────────────┬────────╯     ")
        print("\t\t  │                │  │ ▶︎ 7 •Modify AN ACCOUNT/Update       │      ")
        print("\t\t  |                |  ├───────────────────────────────────┬─╯        ")
        print("\t\t  │                │  │ ▶︎ 8 •Transfer Funds         │         ")
        print("\t\t  │                │  ╰────────────────────────────╮╯         ")
        print("\t\t  │                │  │ ▶︎  9. Search for Accounts  │     ")
        print("\t\t  │                │  │                             │        ")
        print("\t\t  │                │  ╰─────────────────────────────╯            ")
        print("\t\t  │                │  │▶︎  10. View Account Details  │     ")
        print("\t\t  │                │  ╰─────────────────────────────╯            ")
        print("\t\t  │                │  │                            │        ")
        print("\t\t  │                │  │▶︎  11. Customer Support     │ ")
        print("\t\t  │  ║│┃┃║║│┃║│║┃│ │  │────────────────────────────╯")
        print("\t\t  │  ║│┃┃║║│┃║│║┃│ │  │▶︎ 12. EXIT SYSTEM             │ ")
        print("\t\t  │                │  ╰──────────────────────────────╯   ")
        print("\t\t  │                │  │                              │         ")
        print("\t\t  │                │  │▶︎ 13 . display account summary│ ")
        print("\t\t  └────────────────┘  ╰──────────────────────────────╯              ")
        print("\tSelect Your Option (1-8) ")

        choice = input("Enter your choice from the above menu: ")
        if choice == '1':
            createAccount()
        elif choice == '2':
            deposit()
        elif choice == '3':
            withdraw()
        elif choice == '4':
            balance_inquiry()
        elif choice == '5':
            displayAll()
        elif choice == '6':
            deleteAccount()
        elif choice == '7':
            update()
        elif choice == '8':
            transfer_funds()
        elif choice == '9':
            searchAccount()
        elif choice == '10':
            viewAccountDetails()
        elif choice == '11':
            customer_support()

        elif choice == '12':
            print("\t\t THANKS FOR USING BANKING MANAGEMENT SYSTEM")

            exit()

        elif choice == '13':
            displayAccountSummary()

        else:
            print("Invalid choice Please Try Again Later!!!!!")
            menu()

login()
if login_status:
    menu()
else:
    print("You need login to continue")