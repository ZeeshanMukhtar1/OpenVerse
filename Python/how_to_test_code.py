"""
Guide: How to Test Python Code

This file introduces Python testing basics with examples using `unittest`.
"""
# Using the built-in `unittest` framework
import unittest

# This is the code we want to test
class Calculator:
  def add(self, a: float, b: float) -> float:
    return a + b
    
  def subtract(self, a: float, b: float) -> float:
    return a - b

  def multiply(self, a: float, b: float) -> float:
    return a * b

  def divide(self, a: float, b: float) -> float:
    if b == 0:
      raise ValueError('Cannot divide by zero!')
    return a / b

# Testing the above code
# Commonly used assertions:
# 1. assertEqual / assertNotEqual - Check equality or inequality.
# 2. assertTrue / assertFalse - Check if an expression is true or false.
# 3. assertIn / assertNotIn - Check if a value is (or isn’t) in a list or sequence.
# 4. assertRaises - Check if a specific exception is raised.
# 5. assertGreater / assertLess - Check if a value is greater than or less than another.

class TestCalc(unittest.TestCase):
  """Unit tests for Calculator methods"""
  
  def setUp(self) -> None:
        """Initialize a Calculator instance before each test"""
        self.calc = Calculator()

  def test_add(self):
    """Test the add method for correct addition"""
    result = self.calc.add(6, 6)  # Expected result: 12
    self.assertEqual(result, 12)

  def test_add_failure(self):
    """This is the example of failed test case"""
    result = self.calc.add(6, 6)  # Expected result: 12
    self.assertEqual(result, 20)

  def test_subtract(self):
    """Test the subtract method for correct subtraction"""
    result = self.calc.subtract(50, 10)  # Expected result: 40
    self.assertEqual(result, 40)

  def test_multiply(self):
    """Test the multiply method for correct multiplication"""
    result = self.calc.multiply(5, 5)  # Expected result: 25
    self.assertEqual(result, 25)

  def test_divide(self):
    """Test the divide method for correct division"""
    result = self.calc.divide(10, 2)  # Expected result: 5
    self.assertEqual(result, 5)

  def test_divide_zero(self):
    """Test that divide raises ValueError when dividing by zero"""
    with self.assertRaises(ValueError):
      self.calc.divide(10,0)
 
  def tearDown(self) -> None:  
    """Cleanup (if necessary) after each test"""
    pass 

if __name__ == '__main__':
  unittest.main()
    
