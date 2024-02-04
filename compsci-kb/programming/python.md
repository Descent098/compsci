Python is a versatile and widely-used programming language that is used by developers, data scientists, and educators alike. Created by Guido van Rossum and first released in 1991, Python has steadily grown in popularity due to its simplicity and readability. Its design philosophy emphasizes code readability, making it an ideal choice for both beginners and experienced programmers. Python’s ease of use, combined with its robust libraries and frameworks, has made it a top choice for a wide range of applications, from web development and data analysis to artificial intelligence and scientific computing.

One of Python’s key strengths is its extensive standard library (largely housed on [PyPi](https://pypi.org/)), which provides a wide array of modules and packages that simplify tasks such as file handling, machine learning, networking, web development and even graphical user interface (GUI) development. Python’s versatility extends to its cross-platform compatibility, as it can be run on various operating systems, including Windows, macOS, and Linux. Furthermore, its open-source nature fosters a vibrant community of developers who continuously contribute to its growth, ensuring that Python remains at the forefront of programming languages.

Python’s reputation as a go-to language for data science and machine learning has skyrocketed in recent years. Libraries like [NumPy](https://numpy.org/), [pandas](https://pandas.pydata.org/), and [scikit-learn](https://scikit-learn.org/stable/) empower data scientists to efficiently manipulate and analyze data, while frameworks like [TensorFlow](https://www.tensorflow.org/) and [PyTorch](https://pytorch.org/) provide powerful tools for building and training machine learning models. Likewise [Flask](https://flask.palletsprojects.com/en/2.3.x/), [FastAPI](https://pypi.org/project/fastapi/), and [Django](https://www.djangoproject.com/) are web development frameworks that have become staples of modern web development. Python’s simplicity, combined with these libraries and frameworks, has made it a driving force in the rapidly evolving fields of artificial intelligence and data-driven decision-making. In summary, Python’s blend of simplicity, versatility, and a thriving ecosystem make it a language of choice for developers across a wide spectrum of disciplines, making it a timeless and invaluable tool in the world of programming.
## CREATING AND USING FILES

Creating and using Python files, also known as Python scripts, is the foundation of writing and running Python programs. Here’s a beginner-friendly explanation of how to get started:

### INSTALLING PYTHON

- Before you start creating Python files, you need to have Python installed on your computer. You can download it from the official Python website ([https://www.python.org/downloads/](https://www.python.org/downloads/)).
- Follow the installation instructions for your operating system.

### EDITING PYTHON CODE

- You can write Python code using a simple text editor (like Notepad on Windows or TextEdit on macOS) or use specialized Python IDEs (Integrated Development Environments) like Visual Studio Code, PyCharm, or IDLE.
- Choose the option that suits you best. IDEs provide additional features to make coding easier.

### CREATING A PYTHON FILE

- In your chosen text editor or IDE, create a new file. To do this, go to “File” > “New” or press `Ctrl`+`N` (Windows) or `Cmd`+`N` (macOS).
- Save the file with a `.py` extension, which indicates it’s a Python script. For example, you can save it as `my_script.py`.

### WRITING YOUR FIRST PYTHON CODE

- In your newly created Python file, you can start writing Python code. Here’s a simple “Hello, World!” example:

```python
print("Hello, World!")
```

- This code uses the `print()` function to display “Hello, World!” on the screen.

### RUNNING YOUR PYTHON SCRIPT

- To run your Python script, you need to open a terminal or command prompt.
- Navigate to the directory where your Python file is located using the `cd` command (e.g., `cd Documents` if your file is in the “Documents” folder).
- Then, type `python` followed by the name of your Python file and press Enter:

```undefined
python my_script.py
```

- Your Python script will execute, and you’ll see the output in the terminal.

### EDITING AND SAVING CHANGES

- You can make changes to your Python file by opening it in your text editor or IDE, editing the code, and saving the file (usually by pressing `Ctrl`+`S` or `Cmd`+`S`).
- After saving, you can rerun the script to see the updated results.

### LEARNING AND EXPERIMENTING

- Python is a versatile language with many features and libraries. You can learn by exploring Python tutorials, books, or online courses.
- As you learn, you can create more complex Python scripts to perform various tasks, from simple calculations to building web applications or analyzing data.

That’s the basic process of creating and using Python files. Start with simple scripts like “Hello, World!” and gradually build your skills by tackling more advanced projects. Python is known for its readability and simplicity, making it an excellent choice for beginners to start their coding journey.

## VARIABLES & TYPES

Python is a versatile programming language that can work with various types of data. Here’s a basic overview of three fundamental data types: `int`, `float`, and `str`. These 3 data types help to make up most of the basic operations you will do.

### INTEGERS (`INT`)

Integers are whole numbers, which means they don’t have any decimal points.

- You can use integers for counting, indexing, and performing arithmetic operations like addition and subtraction.
- For Example: `5`, `-10`, `1000`

```python
my_integer = 42
print(my_integer)  # Output: 42
```

### FLOATING-POINT NUMBERS (`FLOAT`)

- Floating-point numbers, or floats, are numbers that can have decimal points.
- You use floats when you need to represent values with precision, such as measurements or calculations involving fractions.
- Example: `3.14`, `-0.5`, `2.0`

```python
my_float = 3.14159
print(my_float)  # Output: 3.14159
```

### STRINGS (`STR`)

- Strings are sequences of characters, like text or words, enclosed in single (’ ‘), double (" “), or triple (’’’ ’’’ or "”" “”") quotes.
- You can manipulate strings, concatenate them (combine them), and perform various operations like searching for specific characters.
- Example: `'Hello, World!'`, `"Python is fun"`, `'''Triple-quoted strings'''`

```python
my_string = "Hello, World!"
print(my_string)  # Output: Hello, World!
```

These three basic data types are the building blocks for most Python programs. You can perform operations on them, combine them, and use them to represent different kinds of data in your code. As you continue to learn Python, you’ll discover more data types and ways to work with them, but these are the essential ones to get started.

### COLLECTIONS

If you are not familiar you can find details about what collections are [here](https://schulichignite.com/definitions/collections/).

Python provides two common collection types, lists, and tuples. These collection types allow you to store multiple values in a single variable.

#### Lists

- A list is an ordered collection of items.
- You can store various types of data in a list, such as numbers, strings, or even other lists.
- Lists are mutable, which means you can change their contents (add, remove, or modify elements).

**Creating a List:** To create a list, use square brackets `[]` and separate the items with commas.

```python
my_list = [1, 2, 3, "apple", "banana"]
```

**Accessing Elements:** You can access individual elements in a list by their position, called an index. Python uses zero-based indexing, so the first element is at index 0.

```python
first_item = my_list[0]  # Gets the first item (1)second_item = my_list[1]  # Gets the second item (2)
```

**Modifying a List:** You can change, add, or remove items from a list.

```python
my_list[3] = "cherry"  # Modifies an item (changes "apple" to "cherry")my_list.append(4)  # Adds an item to the end (appends 4)my_list.remove("banana")  # Removes an item (removes "banana")
```

#### Tuples

- A tuple is similar to a list, but it is immutable, meaning you cannot change its elements once it’s created.
- Tuples are typically used when you want to create a collection of items that should not be modified.

**Creating a Tuple:** To create a tuple, use parentheses `()` and separate the items with commas.

```python
my_tuple = (1, 2, 3, "apple", "banana")
```

**Accessing Elements:** You access tuple elements in the same way as with lists, using zero-based indexing.

```python
first_item = my_tuple[0]  # Gets the first item (1)second_item = my_tuple[1]  # Gets the second item (2)
```

**Immutable Nature:** You cannot change the elements of a tuple after creation. Attempting to do so will result in an error.

```python
my_tuple[3] = "cherry"  # This will raise an error (Tuples are immutable)
```

**When to Use Lists vs. Tuples:**

- Use lists when you need a collection of items that can change over time.
- Use tuples when you want to create a collection of items that should remain constant.

Here’s a simple summary: Lists are like dynamic containers where you can put different things and change them, while tuples are like sealed containers where you put things that won’t change. Both are valuable tools in Python, and your choice depends on your specific needs in a program.

## FUNCTIONS

If you are not familiar you can find details about what functions are [here](https://schulichignite.com/definitions/functions/).

Python functions are like mini-programs or reusable blocks of code that perform specific tasks. Think of them as functions in math, where you input something, and it gives you a result. In Python, you can create your own functions to perform tasks you need. Here’s a beginner-friendly explanation:

### DEFINING A FUNCTION

- To create a function, you use the `def` keyword, followed by the function name and parentheses `()`. You can also include parameters (input values) inside the parentheses.

```python
def greet(name):    
    print("Hello, " + name + "!")
```

- In this example, we defined a function called `greet` that takes one parameter, `name`.

### CALLING A FUNCTION

- Once you’ve defined a function, you can use it by calling it. To call a function, you simply write its name followed by parentheses and any necessary arguments (values for the parameters).

```python
greet("Alice")
```

- This line of code calls the `greet` function and passes `"Alice"` as the `name` parameter.

### RETURN VALUES

- Functions can also return a result using the `return` keyword. This is like the answer you get from a math function.

```python
def add(a, b):    
    result = a + b    
    return result
```

- In this example, the `add` function takes two parameters, `a` and `b`, adds them together, and returns the result.

```python
sum_result = add(5, 3)
print(sum_result)  # Output: 8
```

- Here, we call the `add` function with `5` and `3` as arguments and store the result in the `sum_result` variable.

### REUSABILITY

- Functions make your code more organized and reusable. You can use the same function multiple times throughout your program.

### SCOPE

- Variables defined inside a function have local scope, meaning they can only be accessed within that function. Variables outside the function have global scope, which means they can be used throughout your code.

### BUILT-IN FUNCTIONS

- Python also comes with many built-in functions, like `print()`, `len()`, and `input()`, which you can use without having to define them yourself.

Here’s a simple summary: Functions in Python allow you to define a set of instructions that can be used over and over again. They take input, perform actions, and can return results. Functions are like handy tools you create to make your coding tasks easier and more organized.

## CONTROL FLOWS

Python control flows, especially the `if` statement, help you make decisions in your code. Think of them as instructions to your program to perform certain actions based on conditions. Let’s break it down in a beginner-friendly way:

### THE `IF` STATEMENT

- The `if` statement is used to make decisions in Python.
- It allows your program to execute different code blocks depending on whether a condition is true or false.

### BASIC `IF` SYNTAX

- The basic structure of an `if` statement looks like this:

```python
if condition:    
    # Code to execute if the condition is True
```

- The `condition` is an expression that evaluates to either `True` or `False`.

### TRUTHINESS

- In Python, many things can be considered either “truthy” or “falsy.” This means that they can be evaluated as equivalent to `True` or `False` in a boolean context.
- Common truthy values include non-zero numbers, non-empty strings, and non-empty containers (like lists or dictionaries).
- Common falsy values include `0`, an empty string `""`, and empty containers.

### BOOLEAN LOGICAL COMPARISONS

- You can compare values using boolean logical operators to create conditions in your `if` statements.
    
- Common boolean operators are:
    
    - `==` (equal): Checks if two values are equal.
    - `!=` (not equal): Checks if two values are not equal.
    - `<` (less than): Checks if one value is less than another.
    - `>` (greater than): Checks if one value is greater than another.
    - `<=` (less than or equal to): Checks if one value is less than or equal to another.
    - `>=` (greater than or equal to): Checks if one value is greater than or equal to another.

**Example:**

```python
x = 5
y = 10 
if x < y:    
    print("x is less than y")
```

- In this example, the `if` statement checks if `x` is less than `y`. If it’s true, it prints “x is less than y.”

### `ELSE` AND `ELIF` (ELSE-IF) STATEMENTS

- You can extend `if` statements with `else` and `elif` (else-if) statements to handle multiple conditions.

**Example:**

```python
age = 20 
if age < 18:    
    print("You are underage.")
elif age >= 18 and age < 65:
    print("You are an adult.")
else:    
    print("You are a senior citizen.")
```

- In this example, the code checks different conditions based on the age variable and prints an appropriate message.

### NESTED `IF` STATEMENTS

- You can also nest `if` statements inside other `if` statements to handle more complex conditions.

**Example:**

```python
x = 5 
if x > 0:
	if x % 2 == 0:
	    print("x is a positive even number.")
	else:        print("x is a positive odd number.")
else:    
    print("x is not a positive number.")
```

- In this example, we have nested `if` statements to determine whether `x` is positive and even or positive and odd.

In summary, `if` statements allow your Python program to make decisions based on conditions. You can use boolean operators to create conditions, and you can include `else` and `elif` statements for more complex decision-making. This is a fundamental building block for creating dynamic and responsive code in Python.

### LOOPS

Python loops are used to repeatedly execute a block of code. They allow you to automate repetitive tasks by running the same code multiple times. Let’s explore Python loops in a beginner-friendly way:

#### The `for` Loop

- A `for` loop is used when you know how many times you want to repeat a certain action. It’s often used to iterate over a sequence, such as a list or a range of numbers.

**Basic `for` Loop Syntax:**

```python
for variable in sequence:    
    # Code to execute in each iteration
```

- `variable` represents an item from the sequence in each iteration, and `sequence` is the collection of items to loop through.

**Example:**

```python
fruits = ["apple", "banana", "cherry"] 
for fruit in fruits:
    print(fruit)
```

- In this example, the `for` loop iterates through the `fruits` list and prints each fruit one by one.

#### The `while` Loop

- A `while` loop is used when you want to repeat a block of code as long as a certain condition is true. It’s often used when you don’t know in advance how many times the loop will run.

**Basic `while` Loop Syntax:**

```python
while condition:    
    # Code to execute as long as the condition is True
```

- The loop will continue running as long as `condition` remains `True`.

**Example:**

```python
count = 0 
while count < 5:    
    print("Count: ", count)    
    count += 1
```

- In this example, the `while` loop prints the value of `count` as long as it’s less than `5`, incrementing `count` in each iteration.

#### Loop Control Statements

- You can control the flow of loops using special statements:
    - `break`: Terminates the loop prematurely.
    - `continue`: Skips the current iteration and moves to the next.

**Example (using `break`):**

```python
numbers = [1, 2, 3, 4, 5, 6] 
for num in numbers:    
    if num == 4:        
    break  # Exit the loop when num is 4    
print(num)
```

- In this example, the loop stops when `num` becomes `4`, and the code after the loop continues executing.

**Example (using `continue`):**

```python
numbers = [1, 2, 3, 4, 5, 6] 
for num in numbers:    
    if num % 2 == 0:        
        continue  # Skip even numbers    
	print(num)
```

- In this example, the loop skips even numbers and continues to the next iteration.

Python loops are powerful tools for automating repetitive tasks and processing data. By understanding `for` and `while` loops and how to control their flow, you can make your programs more dynamic and efficient.

## DEFINING YOUR OWN TYPES

In Python, classes are like blueprints for creating objects. Think of a class as a template that defines the properties (attributes) and behaviors (methods) that objects of that class will have. Let’s break down Python classes in a beginner-friendly way:

### CLASS DEFINITION

- To create a class, you use the `class` keyword, followed by the name of the class (usually starting with a capital letter).

```python
class Dog:    
    # Class definition goes here
```

- In this example, we’ve defined a class called `Dog`.

### ATTRIBUTES

- Attributes are variables that store data within a class. They represent the characteristics or properties of objects created from the class.

```python
class Dog:    
    breed = "Unknown"  # Attribute to store the dog's breed    
    age = 0            # Attribute to store the dog's age
```

- In this class, `breed` and `age` are attributes that every dog object will have.

### METHODS

- Methods are functions defined within a class. They represent the actions or behaviors that objects of the class can perform.

```python
class Dog:    
    breed = "Unknown"    
    age = 0     

    def bark(self):        
        print("Woof! Woof!")    
 
    def fetch(self):       
        print("Fetching the ball...")
```

- In this class, `bark()` and `fetch()` are methods that represent the actions a dog can do.

### CREATING OBJECTS (INSTANCES)

- To use a class, you create objects (instances) from it. An object is a specific instance of a class.

```python
my_dog = Dog()  # Creating an instance of the Dog class
```

- `my_dog` is now an object of the `Dog` class.

### ACCESSING ATTRIBUTES AND METHODS

- You can access attributes and methods of an object using dot notation (`object_name.attribute` or `object_name.method()`).

```python
my_dog.breed = "Golden Retriever"   # Setting the breed attribute
my_dog.age = 3                      # Setting the age attribute 
print("My dog is a", my_dog.breed)  # Accessing the breed attribute
my_dog.bark()                       # Calling the bark method
```

- Here, we’ve set the `breed` and `age` attributes and called the `bark()` method on `my_dog`.

### CONSTRUCTOR METHOD (`__INIT__`)

- The `__init__` method is a special method in Python classes. It’s called when you create an object from the class and is used to initialize attributes.

```python
class Dog:    
    def __init__(self, breed, age):        
        self.breed = breed        
        self.age = age     

    def bark(self):        
        print("Woof! Woof!")
```

- When you create a `Dog` object, you need to provide values for `breed` and `age`.

```python
my_dog = Dog("Golden Retriever", 3)
```

- This way, you can create a dog object with specific attributes during its creation.

That’s the basic idea of Python classes! Classes allow you to define a blueprint for creating objects with specific attributes and behaviors. They help you organize your code in a structured and reusable way, which is especially useful for building complex applications.


## Type hints

  

Type hints are a way in python to specify the **intended** type of a variable (not enforced just highly suggested). This works by having a colon, then the type declaration for each varaible/parameter/attribute. You can even include details about return types in functions with `def function_name(parameter) -> return_type` For example:

  

```python
age = 21

def greet(name):
   return f"Hello {name}"

  

class Animal:
   def __init__(self, name):
      self.name = name

```

  

Can be converted to:

  

```python
age:int = 21

def greet(name:str) -> str:
   return f"Hello {name}"

class Animal:
   def __init__(self, name:str):
      self.name:str = name

```

This gives an indication to people running your code which data types they should use. Along with this there are a few special types to keep in mind (most need to be imported from the typing module):

| Type | Usage | Example |
| ---- | ---- | ---- |
| Union | To indicate one type **OR** another | A variable called age which can be a string or int could be given as `age:Union[str,int] = "Twenty Three"` |
| Literal | The avlue for the variable is literally one of the subscripted values | x is 2, 4 or 6 **only** `x:Literal[2,4,6]` |
| Tuple | A tuple is an imutable data type similar to a list, this can mean a tuple, or is used to indicate multiple return values | The function `func()` returns an int and a bool in that order `def func() -> Tuple[int, bool` |
| List | A list is a collection. Collections can be subscripted to tell you what's inside | users is a list of list of strings `users:List[List[str]] = [["kieran"],["James"]]` |
| Callable | This means any object that has a `__call__()` method including functions (yes they are objects) | Passing the function `do_stuff()` to `time(func:Callable)` so it can run it and time it `time(do_stuff)` |
### Enforcing types
Python does not enforce types on function parameters. But you can make your own type enforcement by doing type comparisons. There are two ways to do this. The first is to use `type()` and compare to the class, for example:

  

```python

def greet(name:str) -> str:

  if not type(name) == str:

    raise ValueError(f"{name} is not a string")

  return f"Hello {name}"

  

class Animal:

  def __init__(self, name:str):

    self.name:str = name

  

def show_animal(animal:Animal):

  if not type(animal) == Animal:

    raise ValueError(f"{animal} is not an Animal")

  return f"This animal is a {animal.name}"

```

This method works **ok**, but it's not the best. For example let's say you have a class that extends the `str` class, it would fail that check:

```python

class MyString(str):
  def __init__(self,value:str):
    if not type(value) == str:
      raise ValueError(f"{value} is not a string")
    self.value = value

  def __str__(self) -> str:
    return self.value  

def greet(name:str) -> str:
  if not type(name) == str:
    raise ValueError(f"{name} is not a string")
  return f"Hello {name}"

greet(MyString("Kieran")) # ValueError: Kieran is not a string
```

  

If we want to include subclasses we should use `isinstance()`:

  

```python
class MyString(str):
  def __init__(self,value:str):
    if not type(value) == str:
      raise ValueError(f"{value} is not a string")
    self.value = value

  def __str__(self) -> str:
    return self.value  
  
def greet(name:str) -> str:
  if not isinstance(name, str):
    raise ValueError(f"{name} is not a string")
  return f"Hello {name}"

greet(MyString("Kieran")) # Hello Kieran
```

  

Here are some good types you can use with `isinstance()` that are more general:

  

|Type|Uses|package|
|----|----|-------|
| Number | All number types (int and float) work with it |[numbers](https://docs.python.org/3/library/numbers.html).Number|
| Iterable | Any type that can be iterated (a for loop works on it) | Iterable |
| Callable | Any type that can be called with parenthesis `()` (like function objects) | Callable |

  

For example:

  

```python

from numbers import Number

print(isinstance(1,Number)) # True

print(isinstance(1.2,Number)) # True

print(isinstance(1j,Number)) # True

  

from typing import Iterable

print(isinstance([],Iterable)) # True

print(isinstance("",Iterable)) # True

print(isinstance({},Iterable)) # True

  

from typing import Callable

  

def greet(name:str) -> str:

  if not isinstance(name, str):

    raise ValueError(f"{name} is not a string")

  return f"Hello {name}"

  

is_str = lambda s: isinstance(s, str) # Anonymous function

  

class SquareNum:

    def __init__(self, num:Number):

        if not isinstance(num, Number):

            raise ValueError(f"{num} is not a Number")

        self.num=num

    def __call__(self) -> Number:

        return self.num *self.num

  

print(isinstance(greet, Callable)) # True

print(isinstance(is_str, Callable)) # True

print(isinstance(SquareNum, Callable)) # True

  

```

  

While this works there are even better solutions. [Pydantic](https://docs.pydantic.dev/latest/) is a python package that's designed to help make data validation easy. The package helps with a few things, but mostly it helps solve a very annoying situation that happens constantly. When you get data from a server it will often come down as JSON, which will be converted to a python dictionary. These dictionaries can sometimes be very large. Here's an example from their website:

  

```python

  

from pydantic import BaseModel, PositiveInt

class User(BaseModel):

    id: int  

    name: str = 'John Doe'  

    signup_ts: datetime | None  

    tastes: dict[str, PositiveInt]  

  
  

external_data = {

    'id': 123,

    'signup_ts': '2019-06-01 12:22',  

    'tastes': {

        'wine': 9,

        b'cheese': 7,  

        'cabbage': '1',  

    },

}

  

user = User(**external_data)  # Valid data, creates without issue NOTE: cabbage will have int(1) as value not str("1")

  

external_data = {'id': 'not an int', 'tastes': {}}  

  

User(**external_data)  # Invalid data, raises ValidationError

```

There are some more strict systems you can use if you want to enforce static typing (checking before you run code). The most popular is [mypy](https://www.mypy-lang.org/), which throws errors if you try to run code that might have the wrong type. There's also a newer library called [pyre](https://pyre-check.org/) from meta (formerly facebook) which has a [playground you can test with](https://pyre-check.org/play?input=%23%20Pyre%20is%20being%20run%20in%20gradual%20typing%20mode%3A%20https%3A%2F%2Fpyre-check.org%2Fdocs%2Ftypes-in-python%2F%23gradual-typing%0A%23%20Use%20the%20%60%23%20pyre-strict%60%20header%20to%20run%20in%20strict%20mode%2C%20which%20requires%20annotations.%0A%0Afrom%20typing%20import%20*%0A%0A%23%20reveal_type%20will%20produce%20a%20type%20error%20that%20tells%20you%20the%20type%20Pyre%20has%0A%23%20computed%20for%20the%20argument%20(in%20this%20case%2C%20int)%0Aclass%20Animal%3A%0A%20%20%20%20def%20__init__(self)%3A%0A%20%20%20%20%20%20%20%20...%0A%20%20%20%20%20%20%20%20%0Aa%20%3D%20Animal()%0A%0Adef%20foo(a%3AAnimal)%20-%3E%20Animal%3A%0A%20%20%20%20return%20a%0A%0Afoo(a)%0Afoo(3)%0A).

There's a few others:

- [Google Pytype](https://google.github.io/pytype/)
- [Microsoft Pyright](https://github.com/Microsoft/pyright)

## Packing and Unpacking

  

When looking at collections you can "unpack" them. This basically allows you to break them up into peices. For example:

  

```python

shopping_list = ["eggs", "ham", "spam"]

  

item1, *remainders = shopping_list

  

print(item1) # 'eggs'

print(remainders) # ['ham', 'spam']

```

  

The `*remainder` will "unpack" values. This basically will "consume" collections. So `item1` will access the first item in the list, and `*remainders` will unpack the remaining values into it. This can be used in a ton of situations, one major one is to unpack variables as parameters for functions. So for example let's say someone has a tuple with coordinates `coords = (x, y, z)`, and a function `process_object(x, y, z)`, we can unpack the `coords` variable into the function:

  

```python

coords = (x, y, z)

process_object(*coords) # Same as process_object(x, y, z)

```

  

You can also use this to do the oposite and "pack" values to allow for any number of parameters in a function (they will be put into a tuple):

  

```python

def function(*parameters):

  print(parameters)

  

function(1, 2, 3, 4, 5) # Prints: (1, 2, 3, 4, 5)

```

  

You could then unpack them using `*`:

  

```python

def function(*parameters):

  print(*parameters)

  

function(1, 2, 3, 4, 5) # Prints: 1 2 3 4 5

```

  

You can also do this with dictionaries, but it's more complex. It will allow you to get the keys and values from a dictionary. So one useful case is combining two dictionaries. For example let's say you have some of your user info in one dict, and some in another that you want to combine:

  

```python

user_info_1 = {

  "id": 1,

  "first_name": "Dene",

  "last_name": "Atwill",

}

  

user_info_2 = {

  "first_name": "Dene",

  "email": "datwill0@wordpress.com",

  "gender": "Male",

  "ip_address": "38.119.114.174"

}

  

user_info = {**user_info_1, **user_info_2} # {'id': 1, 'first_name': 'Dene', 'last_name': 'Atwill', 'email': 'datwill0@wordpress.com', 'gender': 'Male', 'ip_address': '38.119.114.174'}

```

  

Additionally this can be used to capture keyword arguments:

  

```python

def function(**keyword_arguments):

  print(keyword_arguments)

  

function(first_name= "Dene", last_name="Atwill") # prints: {'first_name': 'Dene', 'last_name': 'Atwill'}

```

  

One great use for this is that it will allow you to write a function that allows you to pass config variables to a function, and you never have to change the function signatures to support new config variables!

  
  
  

## Magic/dunder methods

  

Magic/dunder methods are special types of methods that have some sort of special functionality in python. They're often called magic methods, but they're also called dunder (double underscore) methods because they all follow the patern `__<name>__()`. If you've created a class before you've actually used one before `__init__()`. Why can't you have an initialize method just called `init()` or `start()`? Because `__init__()` is reserved as a name and is invoked when the code that creates an instance is called, which is why it works at all.

  

There are tons of other existing dunder methods to interact with various aspects of python.

  

### Printing

  

For example let's say you have a `User` class, when you try to print it to the console you will get something like `<__main__.User object at 0x0000017CC4F90310>`. This isn't super useful, so how could we instead override what prints when we call print on an object? Let's say we have a `name` and `age` attribute, and we want to print `<name>: <age>`.

  

There is a built in magic method called `__repr__()` (I believe this is a short version of **repr**esentation), this allows you to override the representation of the object (which is what's printed). All we need to do is return a string with what we want to print, for example:

  

```python

class User:

    def __init__(self, name, age):

      self.name = name

      self.age = age

    def __repr__(self):

      return f"{self.name}: {self.age}"

  

print(User("Kieran", 24)) # Prints: "Kieran: 24"

```

  

### Conversions

  

There are tons of magic methods you can define to convert between types. These will also apply in *implicit conversions* (i.e. when printing something a call to convert the object into a string happens). These methods tend to follow this pattern when defined:

  

```python

def __<type>__(self):

  return value

```

  

Where type is some type (i.e. `str`, `int`, `float`), and `value` is some value of that type (i.e. `"Class"`, `12`, `3.14`). Let's say for example we have a class (`MyValue`), that class takes in an int or float, and then when casted to a string returns the word representation of a number (i.e. `1` would be `"One"`), and other number types (`int`,`float` return that type of data):

  

```python

# Define lists of words for numbers 1-19 and multiples of 10 up to 90 (used in string conversion)

ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]

tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

  

class MyValue:

    def __init__(self, value):

      if not type(value) in [float, int]:

        # Try to cast invalid values into a float

        value = float(value)

      self.value = value

  

    def __int__(self):

      # Returns a int representation of the object

      return int(self.value)

  

    def __float__(self):

      # Returns a float representation of the object

      return float(self.value)

    ###### Defining helper functions to help with the string conversion ######

  

    def convert_less_than_hundred(self, number):

        # Function to convert a number less than 100 to text

        if number < 20:

            return ones[number]

        else:

            return tens[number // 10] + " " + ones[number % 10]

  

    def convert_less_than_thousand(self, number):

        # Function to convert a number less than 1_000 to text

        if number < 100:

            return self.convert_less_than_hundred(number)

        else:

            if number % 100 == 0:

                return ones[number // 100] + " Hundred"

            else:

                return ones[number // 100] + " Hundred and " + self.convert_less_than_hundred(number % 100)

    def convert_less_than_million(self, number):

        # Function to convert a number less than 1_000_000 to text

        thousands = number // 1000

        remainder = number % 1000

        if remainder == 0:

            return self.convert_less_than_thousand(thousands) + " Thousand"

        else:

            return self.convert_less_than_thousand(thousands) + " Thousand " + self.convert_less_than_thousand(remainder)

    def convert_less_than_billion(self, number):

        # Function to convert a number less than 1_000_000_000 to text

        if number >= 1_000_000_000:

            raise ValueError(f"Number provided is too large (only up to billions accepted) recieved: {number}")

        millions = number // 1000000

        remainder = number % 1000000

        if remainder == 0:

            return self.convert_less_than_thousand(millions) + " Million"

        else:

            return self.convert_less_than_thousand(millions) + " Million " + self.convert_integer_to_text(remainder)

    def convert_integer_to_text(self, number):

        # Takes in an integer, and converts it to text

        if not isinstance(number, int): # Confirm value is an int

            raise ValueError(f"Value not an integer {number}")

        # Handle simple & edge cases cases

        if number == 0:

            return "Zero"

        elif number < 0:

            return "Negative " + self.convert_integer_to_text(-1 * number)

  

        # Handle 1-999

        elif number < 1000:

            return self.convert_less_than_thousand(number)

  

        # Handle 1000-999_999

        elif number < 1_000_000:

            return self.convert_less_than_million(number)

  

        # Handle 1_000_000-999_999_999

        else:

            return self.convert_less_than_billion(number)

  

    ###### End of Defining helper functions to help with the string conversion ######

  

    def __str__(self):

        # Returns a string representation of the object

        number = self.value

        # Handle float input

        if isinstance(number, float):

            # Split into part before decimal (integer_part) and after (fractional_part)

            integer_part, fractional_part = str(number).split('.')

  

            # Convert each part to a str

            integer_text = self.convert_integer_to_text(int(integer_part))

            fractional_text = " ".join([ones[int(n)] if int(n) > 0 else "Zero" for n in fractional_part])

            # Combine if fractional_text exists, else skip and return just integer part

            if fractional_text:

                return integer_text + " point " + fractional_text

            else:

                return integer_text

  

        # Handle integer input

        elif isinstance(number, int):

            return self.convert_integer_to_text(number)  

```

  

We can then test this with:

  

```python

# Test converting integers to strings

print(str(MyClass(1))) # Prints: 'One'

print(str(MyClass(10))) # Prints: 'Ten'

print(str(MyClass(20))) # Prints: 'Twenty Zero'

print(str(MyClass(12))) # Prints: 'Twelve'

print(str(MyClass(45))) # Prints: 'Forty Five'

print(str(MyClass(375))) # Prints: 'Three Hundred and Seventy Five'

print(str(MyClass(5_231))) # Prints: 'Five Thousand Two Hundred and Thirty One'

print(str(MyClass(25_231))) # Prints: 'Twenty Five Thousand Two Hundred and Thirty One'

print(str(MyClass(954_231))) # Prints: 'Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'

print(str(MyClass(8_954_231))) # Prints: 'Eight Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'

print(str(MyClass(85_954_231))) # Prints: 'Eighty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'

print(str(MyClass(345_954_231))) # Prints: 'Three Hundred and Forty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One'

print(str(MyClass(999_999_999))) # Prints: 'Nine Hundred and Ninety Nine Million Nine Hundred and Ninety Nine Thousand Nine Hundred and Ninety Nine'

  

# Test converting floats to strings

print(str(MyClass(1.0))) # Prints: 'One point Zero'

print(str(MyClass(10.15))) # Prints: 'Ten point One Five'

print(str(MyClass(20.2))) # Prints: 'Twenty Zero point Two'

print(str(MyClass(12.34))) # Prints: 'Twelve point Three Four'

print(str(MyClass(45.734))) # Prints: 'Forty Five point Seven Three Four'

print(str(MyClass(375.841))) # Prints: 'Three Hundred and Seventy Five point Eight Four One'

print(str(MyClass(5_231.9591))) # Prints: 'Five Thousand Two Hundred and Thirty One point Nine Five Nine One'

print(str(MyClass(25_231.12345))) # Prints: 'Twenty Five Thousand Two Hundred and Thirty One point One Two Three Four Five'

print(str(MyClass(954_231.324698))) # Prints: 'Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Three Two Four Six Nine Eight'

print(str(MyClass(8_954_231.5454654))) # Prints: 'Eight Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Five Four Five Four Six Five Four'

print(str(MyClass(85_954_231.45657988))) # Prints: 'Eighty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Four Five Six Five Seven Nine Eight Eight'

print(str(MyClass(345_954_231.5454654))) # Prints: 'Three Hundred and Forty Five Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Five Four Five Four Six Five Four'

print(str(MyClass(999_954_231.0567646))) # Prints: 'Nine Hundred and Ninety Nine Million Nine Hundred and Fifty Four Thousand Two Hundred and Thirty One point Zero Five Six Seven Six Four Six'

print(str(MyClass(999_999_999.9999999))) # Prints: 'Nine Hundred and Ninety Nine Million Nine Hundred and Ninety Nine Thousand Nine Hundred and Ninety Nine point Nine Nine Nine Nine Nine Nine Nine'

  

# Test converting floats to ints

print(int(MyClass(1.0)))    # Prints: 1

print(int(MyClass(10.15)))  # Prints: 10

print(int(MyClass(20.2)))   # Prints: 20

print(int(MyClass(12.34)))  # Prints: 12

print(int(MyClass(45.734))) # Prints: 45

  

# Test converting ints to floats

print(float(MyClass(1)))  # Prints: 1.0

print(float(MyClass(10))) # Prints: 10.0

print(float(MyClass(20))) # Prints: 20.0

print(float(MyClass(12))) # Prints: 12.0

print(float(MyClass(45))) # Prints: 45.0

```

### Operators

  

Operators allows you to do operator overloading. This allows you to overwrite what happens when you use an operator (+, -, /, //, % etc.). To do this you just use the pattern of using the operator name with one argument and a return:

  

```python

class DoMath:

  def __init__(self, value):

    self.value = value

  

  def __add__(self, value):

    return self.value + value

  
  

print(DoMath(5) + 3)

```

  

Other Operators:

  

| Function name | Operator |
| ---- | ---- |
| `-__sub__()` | `-` |
|`__mul__()`| `*`|
|`__floordiv__()`|  `//`|
|`__truediv__()`| `/`|
|`__mod__()`| `%`|
|`__pow__()`| `**`|

  

Keep in mind you can also add an `i` in front of the function name to change the behaviour with assignment operators. For example `__iadd__()` will override behaviour for `+=`

  

### Logical Comparisons

  

Logical operators allows you to do logical operator overloading. This allows you to overwrite what happens when you use an operator (`<`, `>`, `<=`, `>=`, `==` etc.). To do this you just use the pattern of using the operator name with one argument and a return (must be a `bool`):

  

```python

class CheckLessThan:

  def __init__(self, value):

    self.value = value

  

  def __lt__(self, value):

    return self.value < value

  

print(DoMath(5) < 3)

```

  

| Function name | Operator |
| ---- | ---- |
| `__lt__()` | `<` |
|`__le__()`|  `<=`|
|`__eq__()`|  `==`|
|`__ne__()`|  `!=`|
|`__ge__()`|  `>=`|

  

### Class/data-structure type magic methods

  

There are also several other dunder methods that exist for creating special types of objects including:

  

- `__call__()` for callable classes

  - Be careful with this

- `__getitem__()` & `__setitem__()` for key-value pairs (see example in [this post](https://schulichignite.com/blog/verifying-quickly/#hashtable))

  - hash-maps

  - dictionaries

  - etc.

- `__len__()` for container-like structures (what `len()` uses)

  - lists

  - arrays

  - linked-list

  - doubly-linked-lists

- `__enter__()` & `__exit__()` for [context managers](#context-managers)

  - files

  - sockets

- `__iter__()` & `__next__()` for [iterators](#iterators)

  

### Creating your own dunder methods

  

Why not create your own magic methods? If you're writing a program it seems "pythonic" to create your own magic methods that can be used by an API (I did this for [this project](https://github.com/Descent098/ezcv/blob/master/ezcv/content.py#L295-L313), where I created `__html__()` to turn a class into HTML). There is an implicit danger with doing this though.

  

The PSF (group that makes python) reserves the right to create whatever of these dunder methods they want. This means something like `__html__()` if it ever gets imlemented in python natively will break my app. So if you rely on this in your programs then python can completely break your program at any point, so you need to be careful.

  
  
  

Higher order functions

  

A higher order function will allow you to run code before and after a function executes. To explain how this works you need to understand that **EVERYTHING** in python is an object, including functions. If I look at this example:

  

```python

def foo(a, b):

  return b-a

  

print(type(foo)) # <class 'function'>

```

  

We can see the type of foo is the class function. Specifically it's a class that runs the function body when `__call__()` is called. Adding a parenthesis to the end of a class causes this `__call__()` to happen, so `foo()` is a shortform for `foo.__call__()`. So since it's a class we can pass it as an object the same way we could with other classes and call it later. This can help us solve some more awkward issues like timing functions.

  

Let's say we want a function we can use to measure how long a function takes to run, the basic code would look like this:

  

```python

import time

  

def foo(a, b):

  time.sleep(.3)

  return b-a

  

before = time.time()

foo(1,2)

after = time.time()

  

time_taken = after-before

  

print(f"foo() took {time_taken}") # foo() took 0.30090832710266113

```

  

So turning this approach into a function we get:

  

```python

import time

  

def foo(a, b):

  time.sleep(.3)

  return b-a

  

def time_function(function_to_time):

  before = time.time()

  function_to_time(1,2)

  after = time.time()

  time_taken = after-before

  return time_taken

  

print(f"foo() took {time_function(foo)}") # foo() took 0.30090832710266113

```

  

But, how do we allow for people to pass arguments to the function? We could hardcode passing in 2 parameters, but what if we want to time a function with 3, or 4 parameters? We can allow a function to accept an arbitrary number of arguments to a function using `*`:

  

```python

import time

  

def foo(a, b):

  time.sleep(.3)

  return b-a

  

def time_function(function_to_time, *args):

  before = time.time()

  function_to_time(*args)

  after = time.time()

  time_taken = after-before

  return time_taken

  

print(f"foo() took {time_function(foo, 1, 2)}") # foo() took 0.30090832710266113

```

  

`*args` in this case allows us to pass any number of arguments (see [Packing and Unpacking](#packing-and-unpacking) for details and details about using keyword/named arguments).

  

### Decorators

  

Decorators are an extra layer of syntactic sugar that allow you to make higher order functions easier to work with. If we take our example of a timing function like this:

  

```python

import time

  

def foo(a, b):

  time.sleep(.3)

  return b-a

  

def time_function(function_to_time, *args):

  before = time.time()

  function_to_time(*args)

  after = time.time()

  time_taken = after-before

  return time_taken

  

print(f"foo() took {time_function(foo, 1, 2)}") # foo() took 0.30090832710266113

```

  

From this lets say we want to **always** time the `foo()` function (for example if it was a [benchmark](https://asq.org/quality-resources/benchmarking#:~:text=Benchmarking%20is%20defined%20as%20the,more%20aspects%20of%20their%20operations.) function). We can do this by using an `@` and the function name we want to wrap, and put it before the definition. In order for this to work there is an awkward step, we need to create an inner function, which runs our function:

  

```python

import time

  

def time_function(function_to_time):

  def dummy_function(*args):

    before = time.time()

    function_to_time(*args)

    after = time.time()

    time_taken = after-before

    return time_taken

  return dummy_function

  

@time_function

def foo(a, b):

  time.sleep(.3)

  return b-a

  

print(f"foo() took {foo(1, 2)}") # foo() took 0.30090832710266113

```

  

So what just happened? When `foo()` runs `time_function` and passes itself as an instance to `time_function()`. Which is a fancy way to say `foo()` passes itself and it's arguments to `time_function()`. From there we must create a [closure]() to get our variables back. So `dummy_function()` exists to capture `*args` (positional arguments to the function [in our case `1, 2`]).

  

So all in all we are running `foo()` with it's arguments inside `dummy_function()`, we are then returning the time taken from the function, and with our decorator (the `time_function()`) we are returning the `dummy_function` to be called. So `foo(1,2)` calls `dummy_function(1,2)` and returns it's `time_taken`.

  

This works great... but keep in mind that when we called `foo()` we got the result of `time_function()` **NOT** the function call. If we wanted the value of the function call we need to capture it in `time_function()`, and return it instead:

  

```python

import time

  

def time_function(function_to_time):

  def dummy_function(*args):

    before = time.time()

    result = function_to_time(*args)

    after = time.time()

    time_taken = after-before

    print(f"{function_to_time.__name__}() took {time_taken}") # foo() took 0.30090832710266113

    return result

  return dummy_function

  

@time_function

def foo(a, b):

  time.sleep(.3)

  return b-a

  

foo(1,2) # Returns 1

```

  

If we wanted to return both, we could:

  

```python

import time

  

def time_function(function_to_time):

  def dummy_function(*args):

    before = time.time()

    result = function_to_time(*args)

    after = time.time()

    time_taken = after-before

    return result, time_taken

  return dummy_function

  

@time_function

def foo(a, b):

  time.sleep(.3)

  return b-a

  

result, time_taken = foo(1,2) # Returns (1, 0.30090832710266113)

print(f"foo() took {time_taken} and had a result of {result}") # foo() took 0.30090832710266113 and had a result of 1

```

  
  

## Properties (getters and setters)

  

Properties are a method in python to enforce the getter-setter pattern. This is more popular in languages like Java, but essentially instead of having tons of attributes that you access directly you have methods that control access to, and modification of certain attributes. This is useful for various scenarios such as:

  

- Ensuring a provided value is within a range when trying to set an attribute to the value

- If a value is taken from a remote service then ensuring it is up to date when accessing

- In asynchronus contexts it can be used to ensure locks and safe concurrent access/writes

  

Let's say for example you have an app that displays a dashboard about a city, this includes the name, population and temperature. When people access the population and temperature you want to access external services (like the city registry for population, and a weather monitor for remperature). So every time you want a bit of code to run to make sure the value being accessed is up to date. To do this you can make the attributes for temperature and population into properties. Then for each you will need a property declaration (the getter), and a setter. The getter will be used when people call `City.temperature` or `City.population`, and the setter will run when `City.temperature = value` or `City.population = value` is called.

  

```python

MINIMUM_TEMPERATURE_CELCIUS = -273 # Absolute zero in celcius

  

class City:

    def __init__(self, name, population, temperature=0):

        self.name = name

        self.population = population

        self.temperature = temperature

  

    @property

    def population(self) -> int:

        api_result = 1_000_000 # A fake call to the external API

        self._population = api_result

        return self._population

  

    @temperature.setter

    def population(self, value):

        # No special processing

        self._population = value

  

    @property

    def temperature(self):

        print("Getting value...")

        return self._temperature

  

    @temperature.setter

    def temperature(self, value):

        print("Setting value...")

        if value < MINIMUM_TEMPERATURE_CELCIUS:

            raise ValueError(f"Temperature below {MINIMUM_TEMPERATURE_CELCIUS} is not possible")

        self._temperature = value

```

  

So in this case `temperature()` and `population()` are the getters, which means that when you try to access `City.temperature` this function is called and the result is returned. Syntax wise you need to append an underscore to access the current value. Once you have declared a property, you can then create a setter as a decorator, which would be the functions that also take in `value` as a parameter.

  
  
  
  

## Iterators

  

When you use a for loop in python there is something interesting happening under the hood. Iterators are a special type of class that implements the iterator protocol. The protocol operates on classes that have two [magic methods](#magic/dunder-methods). This is what is used when you iterate. For example take this for loop:

  

```python

shopping_list = ["eggs", "ham", "spam"]

  

for item in shopping_list:

  print(item)

```

  

This can functionally be done the same with:

  

```python

index = 0

  

while index < len(shopping_list):

  print(shopping_list[index])

  index += 1

```

  

You will notice that essentially our loop calls the next item, until there are no more items. This is what the iterator is based on, it asks you to tell it what to call on each iteration (`__iter__()`), and then on each iteration it will call that `Iterable`'s `__next__()` function until a `StopIteration` exception is raised.

  

### Creating your own Iterator

  

With that knowledge let's create an iterator to understand how this works:

  

```python

from typing import List

  

class ShoppingList:

  def __init__(self, items:List[str]):

    self.items = items

    self.current_index = 0

  

  def __iter__(self):

    return self # Shopping list is an Iterator and an Iterable

  def __next__(self):

    if self.current_index < len(self.items):

        return_value = self.items[self.current_index]

        self.current_index += 1

        return return_value

    raise StopIteration

  

for item in ShoppingList(["Eggs", "Ham", "Spam"]):

  print(item)

```

  

This means you can also make `Iterator`s out of things that don't have a defined length. For example let's say you have a database you're looping through, but data is coming in while you're looping. Instead of storing the current state and iterating over that, you can continuously keep iterating until a `StopIteration` is raised!

  

### List comprehensions

  

A list comprehension syntactically shorter way to produce a list of values with a simple calculation. It is intended to replace the design pattern of:

  

1. instantiating an empty list

2. Iterate and store values in the list

3. return or use list values.

  

For example:

  

```python

result = [] # 1. Initialize empty list

  

# 2. Iterate and store values in the list

for number in range(10): # Square numbers from 0-9 and add them to the result list

    result.append(number**2)

  

print(result) # 3. Return or use list values

```

  

Can be shortened to:

  

```python

result = [number ** 2 for number in range(10)] # Steps 1-2

  

print(result) # 3. Return or use list values

```

  

which produces:

  

```python

[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

```

  

It does exactly the same as the above example, it is just shorter. The basic syntax is `[operation for variable in iterable]` Were operation is the calculation (or function) being run, variable is the name for the temporary iteration variable made, and iterable is some form of iterable (list, generator, set etc.). We can also do this conditionally, so for example if we wanted to only include even numbers we could do:

  

```python

evens = [number for number in range(10) if number %2 == 0]

print(evens) # [0, 2, 4, 6, 8]

```

  

And we can do an if-else statement using:

  

```python

evens = ["even" if number %2 == 0 else "odd" for number in range(10)]

print(evens) # ['even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd']

```

  

### Generators

  

A generator is a type of iterator. This will allow you to make an iterator out of results of functions. For example:

  

```python

def lots_of_numbers():

  for number in range(10_000_000):

    yield number

  

for number in lots_of_numbers:

  print(number)

```

  

Essentially you can iterate over results 1 at a time. The question is why? Efficiency.

  

In order to iterate over 10 million numbers you would normally need to put those numbers in a list, store that list and then iterate over it. This means that data needs to be stored somewhere while iterating. With a generator the value is generated **when it's needed**, and then is "paused" until `next()` is called on it again. So if instead of a full loop I did something like:

  

```python

def lots_of_numbers():

  for number in range(10_000_000):

    yield number

  

nums = lots_of_numbers()

  

print(next(nums)) # prints 0

print(next(nums)) # prints 1

```

  

Which we can run while using essentially 0 memory. We can also use generators to do memory efficient returns of different values. For example let's say we need to get a bunch of data from an API but don't want to have to store it all we could turn the response into a generator and only process the results one at a time. Lets say for example that `get_user_orders()` sends back a JSON string that we're storing in a file:

  

```python

def get_user_info():

  yield get_user_name() # "kieran"

  yield get_user_orders() # Returns a large JSON string

  yield get_user_age() # 24

  

user_info = get_user_info()

  

print(next(user_info)) # kieran

print(next(user_info)) # prints a large JSON string

print(next(user_info)) # 24

```

  

This means we only use the memory for `get_user_orders()` when the second `next()` is called, compared to something more traditional like this:

  
  

```python

def get_user_info():

  return {

    "name": get_user_name(),

    "orders": get_user_orders(),

    "age": get_user_age()

  }

  

user_info = get_user_info()

  

print(user_info) # prints a large JSON string

```

  

We need to store it in RAM the whole time!

  
  
  
  

## Dataclasses

  

Dataclasses are a special way to define classes in python. They help make classes more efficient, but have some caveats (that I find are positives), namely all your attributes must be defined with type hints. For example here is a `User` class the typical python way:

  

```python

class User:

   def __init__(self, name, age, birthday):

      self.name = name

      self.age = age

      self.birthday = birthday

```

  

Now here is the same class in a dataclass:

  

```python

from datetime import datetime

from dataclasses import dataclass

  

@dataclass

class User:

      name: str

      age:int

      birthday:datetime

```

  

The handy thing about this is that the birthday attribute was not clear in the original example. It could have been a 3 value tuple for year, month, day (`(1998,10,28)`), a formatted string `"28-10-1998"` or any other types. But now users know what type they **should use** (this is not enforced).

  
  

If you need to run code after a class instance is created you can use `__post_init__(self)`.

  

### \_\_post\_init\_\_()

  

This is a [magic method](#magic/dunder-methods) that runs after your dataclass instance is setup. So for example maybe you want to do some birthday checking to make sure someone's birthday matches their age, and they aren't saying they're over 200 years old:

  

```python

from datetime import datetime

from dataclasses import dataclass

  

@dataclass

class User:

    name: str

    age:int

    birthday:datetime

  

    def __post_init__(self):

      if self.age > 200:

        raise ValueError("You can't be over 200 years old >:(")

      if ((datetime.now().year - self.birthday.year) != self.age) and ((datetime.now().year - self.birthday.year) != self.age+1):

        raise ValueError("Your birthday doesn't match your age")

print(User("Kieran", 24, datetime(1998,10,29)))

  

# Invalid

print(User("Kieran", 24, datetime(1864,10,5)))

print(User("Kieran", 400, datetime(2023-400,10,5)))

```

  
  

### ClassVar's

  

A class variable is a variable that exists as part of a class **not part of an instance**. This means each instance has **the same value** because it comes from the class they come from. This is handy in many situations such as keeping track of isntances that are created:

  

```python

from __future__ import annotations

from typing import ClassVar, List

from dataclasses import dataclass

  

@dataclass

class Slide:

    content: str

    slides: ClassVar[List[Slide]] = []

  

    def __post_init__(self):

      Slide.slides.append(self)

  
  

Slide("Hello World")

Slide("World Hello")

Slide("HeLlO WoRlD")

  

print(Slide.slides) # [Slide(content='Hello World'), Slide(content='World Hello'), Slide(content='HeLlO WoRlD')]

```

  

`Slide.slides` will now have a list of every class instance that is created, but keep in mind this means that the instances will **NEVER** be deleted unless you clear them out. So you might end up wasting a ton of memory. You can resolve this by having some sort of `Slide.delete()` method to remove itself from the list when removed:

  

```python

from __future__ import annotations

from typing import ClassVar, List

from dataclasses import dataclass

@dataclass

class Slide:

    content: str

    slides: ClassVar[List[Slide]] = []

  

    def __post_init__(self):

      Slide.slides.append(self)

    def delete(self):

      Slide.slides.remove(self)

  

Slide("Hello World")

q = Slide("World Hello")

Slide("HeLlO WoRlD")

  

print(Slide.slides) # [Slide(content='Hello World'), Slide(content='World Hello'), Slide(content='HeLlO WoRlD')]

q.delete()

print(Slide.slides) # [Slide(content='Hello World'), Slide(content='HeLlO WoRlD')]

```

  

### Fields

  

Some types of attributes in dataclasses need to be instantiated in more complex ways. These types require you to use `field()`. For example most lists will need you to use a function to instantiate it:

  

```python

from typing import ClassVar, List, Any

from dataclasses import dataclass, field

  

@dataclass

class Student:

  name:str

  age:int

  student_id: str

  

def create_empty_list() -> List[Any]:

  return []

  

@dataclass

class School:

  students: List[Student] = field(default_factory=create_empty_list)

```

  

So in this case the `field()` function takes in a `default_factory` which is a `Callable`. This is a great case for using [anonymous functions/lambdas](#lambdas):

  

```python

from typing import ClassVar, List, Any

from dataclasses import dataclass, field

  

@dataclass

class Student:

  name:str

  age:int

  student_id: str

  

@dataclass

class School:

  students: List[Student] = field(default_factory=lambda: [])

```

  
  
  

## Context managers

  

There are many situations where you will want to have an object exist temporarily, and that object **must** run some code to "close" it. The most common case is files. Check out this python code:

  

```python

f = open("my_file.txt", "w+")

  

f.write("some content")

  

... # more code

  

f.write("some content")

  

... # more code

  

f.write("some content")

```

  

You will notice we opened the file, wrote to it a few times, and never closed it. Lets say the code between one of the writes took a while, and someone else wanted to write to the file, what happens? In the best case the won't be allowed to write to the file, in the worst case the changes will trample over each other, or just cause a file corruption in some cases (like if an error happens mid-write). This is why we have to close the file between writes:

  

```python

f = open("my_file.txt", "w+")

f.write("some content")

f.close()

  

... # more code

  

f = open("my_file.txt", "w+")

f.write("some content")

f.close()

  

... # more code

  

f = open("my_file.txt", "w+")

f.write("some content")

f.close()

```

  

This is very tedious, and doesn't guarentee you will always remember to close your file. This is where context managers come in. A context manager is an object that defines an "opening", and "close" and will even handle if an error is raised to make sure the file is still closed anyway. You can technically call these manually, but python has a `with` statement that makes this easier:

  

```python

with open("my_file.txt", "w+") as f:

  f.write("some content")

  

... # more code

  

with open("my_file.txt", "w+") as f:

  f.write("some content")

  

... # more code

  

with open("my_file.txt", "w+") as f:

  f.write("some content")

```

Now `f` only exists in the indentation level up from the `with` statement! Outside that indentation level it has either not yet been opened, or been closed!

  

These are implemented with [magic/dunder methods](#magic/dunder-methods).

  
  

### Creating your own context managers

  

To create a context manager you just need a `__enter__()` and `__exit__()` method. For example:

  

```python

class MyContextManager:

  def __init__(self):

    ...

  def __enter__(self):

    print('Opened')

    return self

  def __exit__(self, exc_type, exc_value, exc_traceback):

      print('Closed')

  

  def do_stuff(self):

    print("Hello")

  

with MyContextManager() as m:

  m.do_stuff()

```

  

`__enter__()` is self-explanatory, but `__exit__()` has some interesting parameters. Like I said the method will be called even if there is an error thrown. Those parameters tell you if an error occurred (if no error occurs all 3 are `None`):

  

- exc_type; The type of the error (i.e. `ValueError`)

- exc_value; The instance of the exception raised

- exc_traceback; The [traceback object](https://docs.python.org/3/library/traceback.html) related to the error

  
  
  

Lambdas

  

Lambdas are a way in python to declare anonymous functions. What this means is you can assign a function call to a variable. So for example let's take the simplest case, a function that takes in a name and returns a greeting string using the name:

  

```python

def generate_greeting(name: str):

   return f"Hello {name}"

```

  

We can make this a lambda like this:

  

```python

generate_greeting = lambda name: f"Hello {name}"

```

  

Lambdas follow the form of:

  

```python

lambda arguments: # Function body

```

  

Lambdas always return whatever value is evaluated in the function body. So since we evaluated the string, we get the string back at the end. We can then call it the same way:

  

```python

generate_greeting("Kieran") # "Hello Kieran"

```

  

This comes in handy in cases where something needs a `Callable` objet, but you don't need to call it more than once. One example of this is in dataclasses. For some data types (like `List`s) you need to provide a `Callable` object (object with a `__call__()` funtion) to initialize an attribute that is a list. So you can do this with a lambda that returns an empty list like so:

  

```python

from dataclasses import dataclass, field

  

empty_list = lambda : []

  

@dataclass

class Student:

   grades:List[int] = field(default_factory=empty_list) # Initialize Student.grades to an empty list

```

## Additional Resources 
- [Inside the Python GIL. (youtube.com)](https://www.youtube.com/watch?v=ph374fJqFPE)