

## Object oriented
...

### Important terms & Concepts
...
#### Classes & Objects
...
#### Methods
...
#### Attributes
...
#### Getters and Setters
...
#### Self-referencing
...
- self
- this

#### Abstract classes
...
- abstract methods
#### Static/Class Methods
...
#### Inheritance
...

### Simula
Simula was a language created in the 1960's based on ALGOL. It is considered the first object oriented language. It created the idea of classes and objects.

Huge thank you to Deus In Machina who's [post](https://www.deusinmachina.net/p/simula-the-forgotten-programming) made it possible to get simula running for me (all normal GNU variants were broken on WSL, linux and windows). Install the latest Java Open JDK then head to [the download link](https://portablesimula.github.io/github.io/#:~:text=and%20run%20Simula.-,Simula%20Download,-NOTE%3A%20If%20setup). From there open the `.jar` file it downloaded, and open your `.sim` file with the code. 

For example here is some code for an `Animal` class with two string attributes `Nam` (Name is reserved), and `Species` as well as a constructor (called `initialize` that you have to write yourself) and another method called `greet`:

```simula
BEGIN
  class Animal;
    BEGIN
      text Nam, Species; ! Instance Variables;
      procedure initialize(currentName, spec);
        text currentName, spec;
          BEGIN
            Nam:- currentName;
            Species:- spec;
          END; ! END of initialize();
      procedure greet;
        begin
          OutText("Hello ");
          OutText(Nam);
          OutText(" the ");
          OutText(Species);
        END; ! END of greet();
    end; ! END of Animal;


  ! Testing Animal Class;
  ref(Animal) Tiger; 

  Tiger:- new Animal;
  Tiger.initialize("Jody", "Tiger")
  Tiger.greet;

END
```

This code would print "Hello Jody the Tiger".

### Purely Object Oriented Languages

Some languages will only allow you to create and interface with objects. Other languages only use objects, but are a bit more sneaky about it. This section will talk about these languages as well as the things that are specific to each. Basic details about OO are not discussed, just how these different "flavors" of OO look in these languages
#### Squeak/Smalltalk
[Smalltalk](https://en.wikipedia.org/wiki/Smalltalk#:~:text=Smalltalk%20is%20a%20purely%20object,later%20found%20use%20in%20business.) was a language created in the 1970's. It was one of the first object-oriented languages, and influenced most other object oriented languages that came afterwards. Since then [Squeak](https://squeak.org/) is the more modern implementation of Smalltalk. Every piece of data in Smalltalk is an object (including the window of your environment). You cannot have functions, only methods! "methods" (attached to objects) are passed "messages" (objects) which carry out operations. 

Both are esoteric in how you use them. Your IDE is part of your program, and everything (including the IDE state) is saved to a file. I am using squeak in the examples and as a tip if you want to test the examples you see below, left-click inside the window and select `Worspace`, this is where you enter your code. From there left click again in the empty space and open `Transcript`. Type your code in the workspace window, highlight it and hit `alt/option + d` to run it, or hit `alt/option + p` to print the result inline.

For example here is hello world in squeak can be done a few ways:
```smalltalk
Transcript show: 'Hello World'.
```

![[squeak-hello-world-2.png]]
`Transcript` is an object representing the transcript window. We are then using the `show`  method with the string object `'Hello World'`. Alternatively we could also do:

```smalltalk
self inform: 'Hello World'.
```

![[squeak-hello-world.png]]
`self` is the object representing the window you type your code into, and `inform` is a method that creates a new dialogue box, which takes in a string message to show. 

This leaves us with some interesting consequences. For example there are no conditional statements, instead you create a Boolean object as the result of an expression, then check against it's `ifTrue` and `ifFalse` values:
```smalltalk
3 > 5
	ifTrue: Transcript show: 'It is Greater'
	ifFalse: Transcript show: 'It is Smaller'

```

It's more clear if we assign the Boolean to a variable `result`:

```smalltalk
t := 3 > 5.
	t ifTrue: [Transcript show: 'It is Greater'].
	t ifFalse: [Transcript show: 'It is Smaller'].
```

![[squeak-booleans.png]]
Because of this design there are a few ways to do loops that also feel a bit odd. For example in this case the integer 10 is getting a `timesRepeat` signal, which then executes the statements in `[]` that many times:
```smalltalk
10 timesRepeat: [Transcript show: 'hello' ]
```
So we would get `hellohellohellohellohellohellohellohellohellohello` as output. Alternatively we could send a `to` signal, which we can then send a message of another integer object, with a `do` signal in order to execute the statement in `[]`[^1]:

```smalltalk
result := String new.
1 to: 10 do: [:n | result := result , n , ' '].
Transcript show: result 
```

![[squeak-loops.png]]
This code assigns `n` the current value of the loop, then combines it to the `result` string with a space. This follows a similar convention to [set-builder notation](https://www.purplemath.com/modules/setnotn.htm#:~:text=In%20set%2Dbuilder%20notation%2C%20the%20previous%20set%20looks%20like%20this%3A) or [list comprehensions](https://en.wikipedia.org/wiki/List_comprehension) but the resulting data is thrown away after being serialized into `result`
#### Java

Another purely object-oriented language is Java. Created in 1995 as a general purpose language, largely used for enterprise applications today. I have included several examples for code, to run these I would highly recommend downloading an openJDK version. You can choose between [amazon's version (Corretto))](https://aws.amazon.com/corretto/?filtered-posts.sort-by=item.additionalFields.createdDate&filtered-posts.sort-order=desc) or [adoptJDK](https://adoptopenjdk.net/releases.html?variant=openjdk16&jvmVariant=hotspot). You can also install it via [ninite](https://ninite.com/) (which is what I do). Once installed just add the examples to a `.java` file and then compile using `javac *.java` then run the program with the entrypoint name (explained later), if it's a class called `Main` in a file called `Main.java` then you would run `javac *.java` then run `java Main`.

With Java you explicitly create a "[singleton](https://refactoring.guru/design-patterns/singleton)" (a class with only 1 instance), which is an object representing your program. Here is the "hello world" in Java:

```java
class HelloWorld{  
    public static void main(String []args){  
        System.out.println("Hello World");  
    }  
};
```
This code would live inside a file called `HelloWorld.java`, we would then compile and run it. From there Java will create an instance of the `HelloWorld` class and run it's `main` method. These singletons are always the entrypoint (where a program runs from) in a java program. 

Though it's not strictly enforced most java programs will have you create a single class per file, and usually the class name and file name will be the same. Your entrypoint file will then use your other files to do things. For example consider this file (`Greeter.java`):

```java
class Greeter{
  
	  private String name;
	  
	  public Greeter(String name) {
	    this.name = name;
	  }
	  
	  public void greet(){
	    System.out.println("Hello " + this.name);
	  }
}
```
We can then create a file in the same directory called `Main.java`, and use the class:

```java
public class Main {
  public static void main(String[] args) {
    Greeter me = new Greeter("Kieran");
    me.greet(); // Prints "Hello Kieran"
  }
}
```

Java also supports [abstract classes](https://www.w3schools.com/java/java_abstract.asp), [class methods](https://www.w3schools.com/java/java_class_methods.asp), [private/public](https://www.geeksforgeeks.org/public-vs-private-access-modifiers-in-java/) and other OO features. 

#### Python 
Python is another purely object oriented language, but people will often argue this point. You can write "procedural" code like this:

```python
print("Hello World")
```

However people don't realize that  they've instantiated a string object (the `"Hello World"`) and a function object `print`, which then calls `print.__call__("Hello World")` and executes the function body. So yes **everything** in python is an object, but you don't have to work with **object syntax** all the time. You can then create classes with this syntax:

```python
class User:
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def greet(self):
		return f"Hello {self.name}"
```

The `__init__()` method is a "magic method", this is just a fancy way to say it has a special behaviour in python. In this case `__init__()` is a constructor, but there are other "magic/dunder" (double underscore) methods. For example `__add__()` overrides what happens when you use `+` with the object. 

On top of this python is a truly dynamic language, where instances can have arbitrary attributes and methods added ad-hoc:

```python
class Animal:
	...

a = Animal()

a.name = "Tiger"
a.age = 5

a.greet = lambda self: f"Hello {self.name}"

a.greet(a)
```

Python offers 2 ways to cut off this functionality (which also improves memory performance), `__slots__` and the [dataclasses](https://docs.python.org/3/library/dataclasses.html) package:

```python
# Using __slots__ you define the attributes you want

class Animal:
	__slots__ = 'name', 'age'

a = Animal()

a.name = "Tiger"
a.age = 5

a.greet = lambda self: f"Hello {self.name}" # Raises an AttributeError

a.location = "texas" # Raises an AttributeError


# Dataclasses provide a fast way to define classes that do __slots__ for you

from dataclasses import dataclass

@dataclass(slots=True)
class Animal:
	name: str
	age: int

a = Animal("Tiger", 5)

a.greet = lambda self: f"Hello {self.name}" # Raises an AttributeError

a.location = "texas" # Raises an AttributeError


```

Like other languages python also has many of the other features of object oriented programming, however it's important to note there is no public/private. Everything is public, and you can [name mangle](https://www.geeksforgeeks.org/name-mangling-in-python/), but you **can't make anything private**.
#### Javascript
Many people believe javascript is purely object oriented, however this is not actually the case. **Most** things are objects, with a few important exceptions outlined [in this post](https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object/9110389#9110389). Though it has become less popular of a development style in recent years, Javascript does have deep support for objects:

```javascript

class Animal {
  constructor(name) {
    this.name = name
  }

  greet(){
	  return `Hello ${this.name}`
  }
}

a = new Animal("tiger")

a.greet() // Hello tiger


```

Javascript is also primarily a [prototype based](https://en.wikipedia.org/wiki/Prototype-based_programming) language, so subclassing is heavily encouraged. Javascript to my knowledge does not have any language-specific features for classes, but if you are interested in learning more, visit the [MDN guide for javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes).
### Critiques

The primary critiques of object oriented programming lie in the [[Abstraction (TODO)|abstraction]], in particular the hierarchical abstraction presented by inheritance. Because classes can inherit from other classes you can often get unexpected behaviour. Primarily this is because you pull all of the class properties from a previous class, you might pull things you weren't expecting. This problem is amplified as you add more classes in the inheritance chain. For example:

- **Mutability**: Object oriented code is often very mutable, and because objects can often live for a while this can lead to changes in your object state from places you weren't expecting. Imagine for example a game where at the end of the day you gain 450 gold, but this happens at the same time as you complete a quest that gives you 250 gold. Whichever executes last is what is stored ([race-condition](https://www.baeldung.com/cs/race-conditions) on the shared state):

```python
class Player:
	name: str
	health: int
	gold:int

	def end_of_day(self):
		# At the end of each day do these things
		# Runs every hour exactly for each "day" in game
		old_gold = self.gold
		old_health = self.health
		
		# NOTE: IN this example the quest finishes at this line
		self.health = old_health + 25
		self.gold = old_gold + 450 

	def complete_quest(self):
		# Run this code when a quest is completed
		old_gold = self.gold
		self.gold = old_gold + 250 


p = Player("kieran", 100, 0)

p.complete_quest()

# This check fails because end_of_day() ran 
# while complete_quest() ran, so player 
# actually has 450 gold when they should have 700
# but you think they should only have 250 because you
# only ran complete_quest()
assert p.gold == 250 
```

- **Re-used attributes**; Reusing an attribute name to mean something different in another context. For example on the `Animal` class the `name` was the species name, but later the class was used to model a dog owned by someone, and the name field was it's given name:

```python
class Animal:
	def __init__(self, name):
		self.name = name

	def get_species(self):
		return self.name

class Dog(Animal):
	def __init__(self, name):
		self.name = name

	def bork(self):
		return "woof"


class Poodle(Dog):
	def __init__(self, name):
		self.name = name

	def prance(self):
		return "I'm prancing"


a = Poodle("Jeremy")

if isinstance(a, Animal):
	print(f"Species is {a.get_species()}") # Print's Species is Jeremy
```


## Imperative
Imperative programming languages are any program that uses some sort of statement to modify state, and the program runs one step at a time. If that sounds vague it's because it is. Almost every programming language is at least partially imperative (except declarative languages). Programs in imperative languages are essentially recipes to complete the intended task.
### Procedural

Procedural languages are languages that require everything to be in a procedure (or function). So for example if you had a program that did 5 steps, a normal imperative program you could just have those steps in a file and run it, but a procedural language would require you to put them in functions, and have some sort of an entry point. For example consider this imperative program to play rock, paper, scissors against the computer :

```
valid_input = False

while not valid_input{
	
	user_choice = get_user_input("Select: 1) Rock 2) Paper 3)Scissors:")
	
	if validate(user_choice, [1,2,3]){ // Ensure choice is 1, 2 or 3
		valid_input = True
	}
}

computer_choice = choose_random([1,2,3]) // Choose 1, 2 or 3 randomly



if computer_choice == user_choice{
	print("Game is tied")
} else if (computer_choice == 1 and user_choice == 3) or (computer_choice == 2 and user_choice == 1) or (computer_choice == 3 and user_choice == 2){
	print("Computer wins")
} else{
	print("Player wins")
}
```

Now compare this to the procedural version:

```
function user_choice() int{
	valid_input = False

	while not valid_input{
		
		user_choice = get_user_input("Select: 1) Rock 2) Paper 3)Scissors:")
		
		if validate(user_choice, [1,2,3]){ // Ensure choice is 1, 2 or 3
			valid_input = True
		}
	}
	return user_choice
}

function determine_winner(user_choice:int, computer_choice:int):int{
	if computer_choice == user_choice{
		return 0
	} else if (computer_choice == 1 and user_choice == 3) or (computer_choice == 2 and user_choice == 1) or (computer_choice == 3 and user_choice == 2){
		return 1
	} else{
		return 2
	}
}

function main(){
	user_move = user_choice()
	
	computer_choice = choose_random([1,2,3]) // Choose 1, 2 or 3 randomly
	
	result = determine_winner(user_choice, computer_choice)

	if result == 0{
		print("Game is tied")
	} elif result == 1{
		print("Computer wins")
	} else {
		print("Player wins")
	}
}
```

As you can see **everything** is in a function, and then the `main()` function is implicitly run when the program starts. 
### Structs & Interfaces vs Objects

[[Data Structures (TODO)#Struct|Structs]] are a system for organizing data that allows you to define variables into a "package" that you can access more intuitively. For example consider the following struct that stores user data in go:

```go
type User struct {
    age int
    weight float64
    name string
}
```

This struct can then be used to store data in a labeled manner so you can operate on each field individually:

```go
package main

import (
	"fmt"
)

type User struct {
	name string
	age int
	weight float64
}

func main() {
	kieran := User{name: "Kieran", age: 25, weight: 102.00}
	fmt.Printf("%v\n", kieran) // {Kieran 25 102}
	
	fmt.Printf("%s\n", kieran.name) // Kieran
	fmt.Printf("%d\n", kieran.age) // 25
	fmt.Printf("%f.2\n", kieran.weight) // 102.00
}
```

This allows you to have separate instances per user, and work with them separately.

Interfaces allow you specify a set of functions that must be available for a given data type. For example consider an app where you need a `printSummary()` function, but you have multiple data types you want to get a summary for. You can create an interface with the function signature, and then use that to type your functions so that you guarentee whatever gets put into the function has the function available:

```go
package main

import (
	"fmt"
)

type Book struct {
	title string
	author string
	description string
	price float64
}

type Post struct {
	title string
	subtitle string
	author string
	description string
	url string
}

type Summary interface{	
	getSummary() string;
}

func (b Book) getSummary() string{
	return fmt.Sprintf("Description: %s\n%s,By %s", b.description,b.title, b.author)
}

func (p Post) getSummary() string{
	return fmt.Sprintf("Description: %s\n%s; %s,By %s", p.description,p.title, p.subtitle, p.author)
}

func printSummary(s Summary){
	fmt.Println(s.getSummary())
}

func main() {
	// Create some test data
	post := Post{ title:"Go", subtitle:"a simple language", author:"James", description:"Golang is a programming language" }
	book := Book{title: "Thus Spoke Zarathustra", author: "Fredriech Nietzsche", description: "Lorem Ipsum Dolor Sit Amet...", price: 15.99}
	
	printSummary(post)
	printSummary(book)
}
```

So now `printSummary` will work for any struct that implements the `Summary` interface.

Classes used in [[#Object oriented]] programs allow you to define attributes (variables) and methods (functions) that are attached to each instance of the class (called an object). This means your data, and your data processing are directly linked. It also allows you to do things like inheritance.

The primary differences between the two are the separation of concerns, and the ability to inherit. Structs + interfaces will allow you to separate your functional requirements (interfaces) from your data requirements (structs). This arguably allows you flexibility and re-usability across your application, for example in some languages you can specify that an argument must be a type that implements an interface. Meaning if you need an object that can be copied, you can have a "copyable" interface that makes sure the object can be copied. Languages like [rust](https://www.rust-lang.org/) take this further with [traits](https://doc.rust-lang.org/book/ch10-02-traits.html), which gives you some advantages outlined [here](https://medium.com/@d_toniolo/rust-traits-are-not-interfaces-85df449aa9d9). 

For inheritance, some Object oriented languages have interfaces, but often they want you to inherit to solve this problem. This carries with it all the baggage of inheritance such as if your inherited class contains attributes and methods, you inherit both. Worse if it contains classes and methods that have state set (class attributes) you also inherit that. Along with much of the weirdness around edge cases in object oriented programming and inheritance, for example in python:

```python
class Dog:
    def __init__(self):
            self.name = "buster"
            print("woof")
    def speak(self):
            return "woof"
    def bork(self):
		    return "bork bork"

class Cat:
    def __init__(self):
            self.retractable_claws = True
            print("meow")
    def speak(self):
            return "meow"

class Chimera(Cat, Dog):
	...

s = Chimera() # What prints here?
```

The answer to the question for people wondering is `meow` because only the `__init__()` method from `Cat` runs when a `Chimera` is instantiated even weirder:

```python

s = Chimera() # prints "meow"

isinstance(s, Cat) # True
isinstance(s, Dog) # True

s.bork() # 'bork bork'

s.name # AttributeError: 'Sphinx' object has no attribute 'name'
```

Whereas interfaces you can have as many of them on a struct as you want!
#### Fortran
Fortran is arguably the first (of the third generation or not assembly languages) to be imperative. Developed in the 1950's it was originally designed to be written on punch-cards. However it was originally closed source, and was opened in ~2003[^6]. It's original specification had a total of 32 statements[^5], making it incredibly compact. 

To run the following Fortran code you can either use [the playground](https://play.fortran-lang.org/) or install [gfortran](https://fortran-lang.org/learn/os_setup/install_gfortran/), store the code in a `.f90` file and then run it using `gfortran <filename>.g90 -o <filename>` and then run `./<filename>` (I used version `11.4.0`).

Here is a simple hello world in Fortran:

```fortran
program hello
  print *, 'Hello, World!'
end program hello
```

You can run this to print `Hello <name>`:

```fortran
program name
  implicit none
  character(6) :: fname

  fname = 'Kieran'

  print *, "Hello ", fname
end program name
```


The function version of this would be:

```fortran
PROGRAM name
  IMPLICIT NONE
  CHARACTER(LEN=100) :: full_name

  ! Read the name from the user
  PRINT *, "Enter your name:"
  READ(*, '(A)') full_name

  ! Call the function to print the greeting
  CALL PrintHello(full_name)

CONTAINS

  SUBROUTINE PrintHello(fname)
    CHARACTER(LEN=*) :: fname
    PRINT *, "Hello ", TRIM(ADJUSTL(fname))
  END SUBROUTINE PrintHello

END PROGRAM name

```

Once we call `PrintHello` with the name it will print `Hello Name`.
### Examples

Most languages are at least partially imperative, I have decided to include a few languages I have not yet talked about. 

#### ALGOL
ALGOL is a language created in the 1950's designed to do various types of computation. It is the inspiration for tons of languages that came after it, like C.

You can run the example using [ALGOL Genie](https://jmvdveer.home.xs4all.nl/en.download.algol-68-genie-current.html) (I used ALGOL 68 version 3), install or download an executable then add content to a `.a68` file and run using `a68g.exe <filename>.a68`. This is a program in ALGOL 68 that prints `"Hello <name>"` where the name is the name variable:

```algol
BEGIN
  COMMENT Define variables COMMENT

  STRING name;

  name := "Kieran";

  COMMENT Print result COMMENT

  print(("Hello, ", name, "!", newline))

END
```

You can then define procedures (functions), which can return or not. For example this code defines two procedures, greet which returns nothing, and prints the `name` provided to it, and `concat_with_spaces` which takes in a list of strings, and returns them concatenated together with spaces:

```algol
BEGIN
  # Takes in a name and prints "Hello <name>" #
  PROC greet = (STRING name) VOID:
  BEGIN
    print(( "Hello ", name, newline ))
  END;

  # Takes in a list of strings and concatenates the strings with spaces #
  PROC concat_with_spaces = (REF [] STRING strings) STRING:
  BEGIN
    STRING result := "";
    FOR i FROM LWB strings TO UPB strings DO
        result := result + strings[i];
        IF i < UPB strings THEN
          result := result + " "
        FI
    OD;
    result # Return result #
  END;

  # Test greet() #
  STRING name := "Kieran";
  greet(name); # Prints "Hello Kieran" #

  # Test concat_with_spaces() #
  [2] STRING array := ("Hello", "world!");
  STRING concatenated := concat_with_spaces(array);
  print((concatenated, newline)); # Prints "Hello World!" #

END
```

This prints:

```
Hello Kieran
Hello World!
```

#### C
...



```c
#include <stdio.h>

void greet(char* name){
  printf("Hello %s", name);
}


int main(void){
  greet("Kieran");
  return 0;
}
```

...

```c
#include <stdio.h>

void printList(char** strings, int size) {
    printf("Shopping List\n=============\n");
    for (int i = 0; i < size; i++) {
        printf("%d: %s\n", i+1, strings[i]);
    }
}

int main(void){
  char *items[] = {"Eggs", "Ham", "Spam"};
  printList(items, 3);
  return 0;
}
```

#### Julia
[Julia](https://julialang.org/) is a language developed in 2012 primarily for data science. It is mostly intended to be an amalgamation of existing data analysis languages (python, R, MATLAB etc.), with the intention of making it easy to do common data science tasks faster.

To run the examples install Julia based on the instructions [here](https://julialang.org/downloads/). Then add the code examples to a file ending in `.jl`, you can then run them using `julia <filename>.jl`, or you can run the examples interactively by running `julia` then typing in the examples.

Here is an example of a function that takes in a string and returns a string:

```julia
function greet(name::string) string
  return "Hello $(name)!"
end

greet("Kieran")
```

Here is another example of iterating over a list (Array):

```julia
function printShoppingList(shoppingList::Array{string})
  println("Your shopping list:")
  for (index,item) in enumerate(shoppingList)
      println("$(index). $(item)")
  end
end

printShoppingList(["Milk", "Eggs", "Bread"])
```

Typing is optional, so this is also valid:

```julia
function printShoppingList(shoppingList)
  println("Your shopping list:")
  for (index,item) in enumerate(shoppingList)
      println("$(index). $(item)")
  end
end

printShoppingList(["Milk", "Eggs", "Bread"])
```


#### Lua
...

## Declarative programming
Declarative programming is about describing what should happen, and laying out those descriptions instead of writing each step like you would in procedural programming. 
### Logical
Logical programming is a type of programming that is used to determine facts. Generally speaking logical programming is used to analyze a set of known facts using rules and queries to determine new facts. It is **not designed to be general purpose**. Instead it just focuses on the understanding of relationships, and logically concluding facts based on them.
#### Prolog
Prolog is the most famous logical programming language. It is used to validate statements of facts, and arrange relationships. You can run the examples by installing a prolog interpreter, copying the files into a `.pl` file, and running them. I use [swi prolog](https://www.swi-prolog.org/). 

Here is an example of a file that determines people's ancestors based on an inherited gene called `h` (All kids with gene h had at least 1 parent with gene `h`):

```prolog
% Define the gene inheritance rules
inherit(h, X, Y) :- parent(X, Y).
inherit(h, X, Y) :- parent(Z, Y), inherit(h, X, Z).

% Define the parent relationships
parent(alice, bob).
parent(bob, charlie).
parent(charlie, david).
parent(bob, eve).
parent(eve, fred).

% Query to find ancestors based on the gene inheritance
ancestors(X, Y) :- inherit(h, X, Y).
```

We can then use a query like `ancestors(X, david).` to get all ancestors of David, which in our case would return `X = charlie`.
#### Critiques
The main critique of these sorts of languages is that they are not very practical, and they are hard to use. Many people have to take a while to get used to the languages before they can be proficient, and mistakes are easily made.

### Functional

The idea behind this paradigm is that you want to try to get to pure functions. This means that for any input x, you **always** get output y (unless there is an error). This makes the code you write deterministic, where you should be able to **always** tell what will happen. This feature combined with the programs being mathematically defined provide the primary advantages to functional programming like [[#Lazy Evaluation]], [provable correctness](https://en.wikipedia.org/wiki/Curry%E2%80%93Howard_correspondence), etc...

*I want to put a warning here that **do not write functional code often** I have used it throughout a course and a few projects but not often. I would recommend looking at the other resources for more thorough explanations of these concepts*
#### Common concepts

Functional programming is achieved through multiple different concepts, however two of the biggest ones are recursion, and higher order functions.
##### Higher order functions
A High order function is a function that takes another function as an argument. You essentially treat the function itself as if it was a piece of data to use later. A good example of this  would be to imagine you want to create a timer that times how long a function takes to run. You can pass the function, and it's arguments to the timer function, and it will first start the clock, run the function with the arguments, then end the clock and return the resulting time difference:

```
function timer(func:function, arguments:any) float{

	start_time = get_time()
	
	func(arguments)
	
	end_time = get_time()

	return end_time - start_time
}
```

Something like this pseudocode above. These higher order functions are used to allow you to do things like loops without looping (via recursion).
##### Mapping

Mapping is a method of running a function over an [[#Iterators|iterator]]. In purely functional programming this is done through a [functor](https://en.wikipedia.org/wiki/Functor_(functional_programming)#:~:text=In%20functional%20programming%2C%20a%20functor,structure%20of%20the%20generic%20type.), which can be thought of as a type of interface that allows for mapping. As an example consider a list of integers that you want to double the values of, you can create a function to double the value of an input integer, and then map it over the list. For example:

```
my_list = [1,2,3,4,5,6,7,8,9,10]

function double(value:int) int{
	return value * 2
}

my_doubled_list = map(double, my_list) # [2,4,6,8,10,12,14,16,18,20]
```

It's important to note that in the functional paradigm most collection data structures (like lists) are **immutable** so you have to reassign a value to the output of the map function to get a result back out.
###### Filter
Filter is a special type of mapping function that removes values based on the Boolean value returned from a function. For example if I wanted to remove the odd numbers from a list I could create a function that returns true if an integer is even, and false otherwise, then use filter to map it over the list:

```

function isEven(value:int) bool{
	if remainder(value, 2) == 0{
		return True
	}
	return False
}

my_list = [1,2,3,4,5,6,7,8,9,10]

only_odds = filter(isEven, my_list) # [1,3,5,7,9]

```

###### Reduce
Reduce is a mapping function that returns a single value after running a function on the running result of the previous execution. For example to sum a list we take the current running sum, and the current value in the list and add them together. We run this function over the entire list, and return out the sum at the end:

```

function sum(current_sum:int, current_value:int) int{
	return current_sum += current_value
}

my_list = [1,2,3,4,5,6,7,8,9,10]

total = reduce(sum, my_list) # 1+2+3+4+5+6+7+8+9+10 == 55

```

###### Folding
...
##### Currying
...
##### Monads
...
##### Algebraic Types
...

##### Lazy Evaluation
...

##### No loops

Functional programming does not allow for arbitrary loops. In particular things like `while` loops are not allowed. A good rule of thumb is that anything that would typically be looped over in regular code must be [unrollable](https://en.wikipedia.org/wiki/Loop_unrolling) (and therefore deterministic).  For most use cases "looping" can be done in a few ways:

1. Iterators
2. Recursion

###### Iterators
Iterators are a data type that allow you to operate over them. These are implemented using a [functor](https://en.wikipedia.org/wiki/Functor_(functional_programming)#:~:text=In%20functional%20programming%2C%20a%20functor,structure%20of%20the%20generic%20type.) (allows people to map over it). For example consider a data type called Homeroom, which stores a list of students, and implements a functor. Here is an implementation in [[#Haskell]]:

```haskell
-- Define the Student data type
data Student = Student {
    studentId :: Int,
    studentName :: String
} deriving (Show)

-- Define the Homeroom data type which is a collection of Students (studentValues)
newtype Homeroom studentValues = Homeroom {
    students :: [studentValues]
} deriving (Show)

-- Enables mapping over a Homeroom instance
instance Functor Homeroom where
    fmap f (Homeroom students) = Homeroom (map f students)
```

We can then test the code:

```haskell
main :: IO ()
main = do
	-- Create students to test with
    let student1 = Student 1 "Alice"
    let student2 = Student 2 "Bob"
    let student3 = Student 3 "Charlie"

	-- Instantiate a Homeroom
    let homeroom = Homeroom [student1, student2, student3]

    -- Define a function to modify a Student and add "Jr." to it
    let updateStudentName student = student { studentName = studentName student ++ " Jr." }

    -- Use fmap to apply the function to each student in the homeroom
    let updatedHomeroom = fmap updateStudentName homeroom

    print updatedHomeroom -- Homeroom {students = [Student {studentId = 1, studentName = "Alice Jr."},Student {studentId = 2, studentName = "Bob Jr."},Student {studentId = 3, studentName = "Charlie Jr."}]}
```

#### Lisp

Lisp is a programming language developed in the 1960's. It supports multiple paradigms, but was the first to allow for higher order functions, recursion, and a ton of other computer science concepts[^4] including those that allow for functional programming. It is the language that inspired many other functional languages such as [scheme](https://www.scheme.org/) (which itself inspired [Idris](https://www.idris-lang.org/)), [clojure](https://clojure.org/) etc. 

There are other dialects to choose from, but for this example I will use [Common Lisp](https://lisp-lang.org/). You can install it following the instructions on [this page](https://lisp-lang.org/learn/getting-started/), lisp is designed to run in a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop), but you also put contents into a `.lisp` file. 

A tip for reading this code to make it easier is that statements in lisp are in [polish notation](https://en.wikipedia.org/wiki/Polish_notation). So for example `- n 1` is using the function `-` (subtract) over the arguments `n` and `1`. So `- n 1` would be the same as `n-1`. Here is an example of the recursive solution to the Fibonacci sequence:

```lisp
(defun fib (n)
  "Return the N-th Fibonacci number recursively"
  (if (<= n 1)
      n
      (+ (fib (- n 1)) (fib (- n 2)))))

;; Example of getting the 10th fibbonacci number
(format t "Fibonacci(10) = ~d~%" (fib 10))
```
This program would print:
```
Fibonacci(10) = 55
```

Another example below is a program to recursively solve the [towers of hanoi problem](https://en.wikipedia.org/wiki/Tower_of_Hanoi) (visualization [here](https://www.youtube.com/watch?v=rf6uf3jNjbo)) starting with all discs on tower A, moving to tower C: 

```lisp
(defun hanoi (n source target auxiliary)
  "Solve the Towers of Hanoi problem.
   Move N disks from SOURCE to TARGET using AUXILIARY as an intermediate."
  (if (> n 0)
      (progn
        (hanoi (1- n) source auxiliary target)
        (format t "Move disk from ~A to ~A~%" source target)
        (hanoi (1- n) auxiliary target source))))

(defun solve-hanoi (n)
  "Initiate the Towers of Hanoi solution for N disks."
  (hanoi n 'A 'C 'B))

;; Example of solving for 3 disks
(solve-hanoi 3)
```

Would print:

```
Move disk from A to C
Move disk from A to B
Move disk from C to B
Move disk from A to C
Move disk from B to A
Move disk from B to C
Move disk from A to C
```

This version has additional print statements to make it more clear:

```lisp
(defun print-towers (towers)
  "Print the current state of the towers."
  (format t "~%Tower A: ~A~%" (reverse (gethash 'A towers)))
  (format t "Tower B: ~A~%" (reverse (gethash 'B towers)))
  (format t "Tower C: ~A~%" (reverse (gethash 'C towers)))
  (format t "----------------------~%"))

(defun move-disk (from to towers)
  "Move the top disk from tower FROM to tower TO and update the state of the towers."
  (let ((disk (pop (gethash from towers))))
    (push disk (gethash to towers))
    (format t "Move disk from ~A to ~A~%" from to)
    (print-towers towers)))

(defun hanoi (n source target auxiliary towers)
  "Solve the Towers of Hanoi problem and update the state of the towers."
  (if (> n 0)
      (progn
        (hanoi (1- n) source auxiliary target towers)
        (move-disk source target towers)
        (hanoi (1- n) auxiliary target source towers))))

(defun solve-hanoi (n)
  "Initiate the Towers of Hanoi solution for N disks and print the initial state."
  (let ((towers (make-hash-table)))
    (setf (gethash 'A towers) (reverse (loop for i from 1 to n collect i)))
    (setf (gethash 'B towers) '())
    (setf (gethash 'C towers) '())
    (format t "Initial State of Towers:~%")
    (print-towers towers)
    (hanoi n 'A 'C 'B towers)))

;; Example of solving for 3 disks
(solve-hanoi 3)
```

Would print:

```
Tower A: (1 2 3)
Tower B: NIL
Tower C: NIL
----------------------
Move disk from A to C

Tower A: (1 2)
Tower B: NIL
Tower C: (3)
----------------------
Move disk from A to B

Tower A: (1)
Tower B: (2)
Tower C: (3)
----------------------
Move disk from C to B

Tower A: (1)
Tower B: (2 3)
Tower C: NIL
----------------------
Move disk from A to C

Tower A: NIL
Tower B: (2 3)
Tower C: (1)
----------------------
Move disk from B to A

Tower A: (3)
Tower B: (2)
Tower C: (1)
----------------------
Move disk from B to C

Tower A: (3)
Tower B: NIL
Tower C: (1 2)
----------------------
Move disk from A to C

Tower A: NIL
Tower B: NIL
Tower C: (1 2 3)
----------------------
```

###### Recursion
...


#### Purely functional languages
The definition of "purely functional" is somewhat hard to explain. There is a good outline on [the wikipedia article](https://en.wikipedia.org/wiki/Purely_functional_programming#:~:text=by%20Sabry%27s%20definition.-,Properties%20of%20purely%20functional%20programming,-%5Bedit%5D) about functional programming. The general definition is that all aspects of computing in a program are treated as mathematical functions. Which sounds similar to procedural programming, however there is a difference. The language tries to enforce functional purity as well, meaning that your functions should be deterministic. Meaning for any input x you will **always** get the same output **y** (unless there is an error). However it's important to note that what makes a language "purely functional" is heavily debated. For my list I have used that they rely on recursion instead of loops, they make heavy use of higher order functions, and they don't neatly fit into the other categories of language.
##### Haskell

Haskell is a purely functional language developed in 1990 developed by the  International Conference on Functional Programming committee to develop an open functional language. It is (besides all the various forms of [[#Lisp]]) the most popular purely functional language.

You can test Haskell code without installing it in the [Haskell Playground](https://play.haskell.org/). To install Haskell you should use [GHCup](https://www.haskell.org/ghcup/) which is a manager for your Haskell installation. It will install everything for you, and help you manage your Haskell versions. Follow the steps on the site to get everything you need setup. You can then copy the examples into `.hs` files and then run using `runghc <filename>.hs`, or you can compile and run using `ghc <filename>.hs` to compile, then `./<filename>` to run the binary.

Here is an example program that defines a function called `greet()` that takes in a string called name and returns that string with "Hello " placed before it:

```haskell
greet :: String -> String
greet name = "Hello " ++ name

-- Runs the program
main :: IO ()
main = do
    putStrLn (greet "Kieran")
```

Here is a program that prints a shopping list with it's index next to it:

```haskell
-- Takes in a list of strings in and print them with their index
printShoppingList :: [String] -> IO ()
printShoppingList items =
    mapM_ putStrLn [show idx ++ ". " ++ item | (idx, item) <- zip [1..] items]


-- Runs the program
main :: IO ()
main = do
    putStrLn "Shopping List"
    putStrLn "============="
    printShoppingList ["Eggs", "Ham", "Spam"]
```


##### Clojure
Clojure is a dialect of [[#Lisp|lisp]], and operates under the same basic principles. It is intended to be run interactively, but you can run files as well. To get started download and install following the suggestions [here](https://clojure.org/guides/getting_started). You can then take the examples and run them interactively or you can put them in a `.clj` or `.clojure` file. You can then run `clj <filename>.clj` or `clj <filename>.clojure`.

Here is an example program that defines a function called `greet()` that takes in a string called name and returns that string with "Hello " placed before it:

```clojure
(defn greet [name]
    (println (str "Hello " name)))

(greet "Kieran")
```

Here is a program that prints a shopping list with it's index next to it:

```clojure
(defn print_shopping_list [lst]
  (doseq [i (range (count lst))]
    (println (str (inc i) ". " (nth lst i)))))

(println "Shopping List")
(println "=============")

(print_shopping_list ["Eggs", "Ham", "Spam"])
```

##### Elixir

[Elixir](https://elixir-lang.org/) is a functional language developed in 2012 that runs on top of Erlang. It is often used in networking and web development. You can install elixir by following the steps [on their page](https://elixir-lang.org/install.html).
You can then take the examples and run them interactively or you can put them in a `.exs` file. If you do put them in a file you can't just run the file 

Here is an example program that defines a function called `greet()` that takes in a string called name and returns that string with "Hello " placed before it:

```elixir
defmodule Greeter do
  def greet(name) do
    IO.puts "Hello #{name}"
  end
end

# Example running function
if function_exported?(Greeter, :print_with_index, 1) do
  Greeter.greet("Kieran")
end
```

Here is a program that prints a shopping list with it's index next to it:

```elixir
defmodule ListPrinter do
  def print_with_index(list) when is_list(list) do
    list
    |> Enum.with_index()
    |> Enum.each(fn {item, index} ->
      IO.puts("#{index}: #{item}")
    end)
  end
end

# Example running function
if function_exported?(ListPrinter, :print_with_index, 1) do
  sample_list = ["apple", "banana", "cherry"]
  ListPrinter.print_with_index(sample_list)
end
```

#### Critiques
There are two primary critiques of functional programming, it's complexity, and it's performance. 

##### Performance

Some languages this better than others, but overall functional code tends to have performance hits. This is because many languages are not optimized for recursion, and include lots of metadata when a function is called. This makes repeated execution of functions incredibly memory intensive, and slower. This can be alleviated by using caches, and other methods but normal functional code suffers these recursion performance hits a lot because it uses it for much of it's implementation.

Additionally when implementing functional paradigms many people perform copies. For example when using `map()` in many languages it will actually copy your data, perform changes on the copy and then return the copy. This **can** be fine, but if the references to the data hang around you can end up with massive memory overheads for using functional code.
##### Complexity

Because functional programming is largely discussed in it's original mathematical definitions. As such many phrases like ["A monad is a monoid in the category of endofunctors, what's the problem?"](https://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html#:~:text=%22a%20monad%20is%20a%20monoid%20in%20the%20category%20of%20endofunctors%2C%20what%27s%20the%20problem%3F%22) (explained [here](https://www.reddit.com/r/math/comments/ap25mr/a_monad_is_a_monoid_in_the_category_of/)) have become jokes due to this inherent complexity. Often this also comes with some syntactical differences. For example consider the following Haskell function:

```haskell
f :: [[a]] -> [a] 
f = concat
```

This seems complicated to people from the outside looking in, but all this code does is flatten a list:

```haskell
main :: IO () 
main = do 
	let listOfLists = [[1, 2, 3], [4, 5], [6, 7, 8, 9]] 
	let flattenedList = flatten(listOfLists) 
	print flattenedList -- [1,2,3,4,5,6,7,8,9]
```

Another example would be that the approach to problems can seem foreign to programmers not used to the syntax. For example here is some haskell code:

```haskell
result :: [Int]
result = [[[if even i then 0 else 1 | i <- [0..99]] | _ <- [1..8]] | _ <- [1..10]]
```


This could be simplified by breaking out the individual array's being built, and adding comments:

```haskell
-- Define the innermost array with alternating 1s and 0s
innermost :: [Int]
innermost = [if even i then 0 else 1 | i <- [0..99]]

-- Define the middle array by replicating the innermost array 8 times
middle :: [[Int]]
middle = replicate 8 innermost

-- Define the outermost array by replicating the middle array 10 times
outermost :: [[[Int]]]
outermost = replicate 10 middle
```

However you will often see long comprehensions like the original in functional code because the authors often expect people to have read associated documentation with the code. Compare this to loops in a language like python:

```python
innermost = []

for i in range(100):
	if i%2 == 0:
		innermost.append(0)
	else:
		innermost.append(1)

middle = []

for _ in range(8):
	middle.append(innermost)

values = []

for _ in range(10):
	values.append(middle)

```

You could also do this with a list comprehension in python and it is equally as hard to read:

```python
values = [
	[
		[0 if i%2==0 else 1 for i in range(100)] for _ in range(8)
	] for _ in range (10)
]
```

This is exacerbated by the fact that many people who like functional programming tackle hard math problems that are conceptually complicated. For example consider the following code in Haskell:

```haskell
-- Compute the factorial of a number
factorial :: (Enum a, Num a) => a -> a
factorial n = product [1..n]

-- Compute the nth term of the Taylor series for e^x
taylorTerm :: (Floating a, Enum a) => a -> Int -> a
taylorTerm x n = (x^n) / fromIntegral (factorial n)

-- Compute the Taylor series approximation for e^x up to a specified number of terms
taylorSeries :: (Floating a, Enum a) => a -> Int -> a
taylorSeries x terms = sum [taylorTerm x n | n <- [0..(terms-1)]]
```

This code computes

$$e^{x}= {\sum^{\infty}_{n=0}} \frac{x^{n}}{n!}$$
Or the [Taylor series](https://en.wikipedia.org/wiki/Taylor_series) of an exponential function. However if you don't know what a Taylor series is, then this is just hard to read in general.

### DSL/Markup languages
Domain specific languages are languages that are designed to represent data for a specific domain. For example a language to represent database queries. These languages describe but do not execute. This makes them **not programming languages**. 

A very common type of DSL that exists is a markup language. A markup language describes what a user should see. From there a parser will parse that information, and a renderer will visualize that data to the user.

#### Examples
Here are some examples of DSL's and markup language.

##### Markdown

[Markdown](https://www.markdownguide.org/) is a human-readable markup language. This whole site is written in markdown. For example here is a document that has 2 chapters and some text:

```markdown
# My document

Vivamus ullamcorper sit amet nisl euismod lacinia. Proin venenatis consequat ultrices. Integer nulla ante, scelerisque sit amet egestas vel, aliquam vel sem.

## Chapter 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus malesuada quam, et tristique sem ornare sit amet. Aliquam porttitor nulla eu dui porttitor tincidunt.

### Subchapter 1

Suspendisse **finibus**, sem sit amet cursus auctor, quam ante auctor justo, nec dictum enim augue ut magna. Nullam at *ultricies* nisi. In ornare arcu eu libero malesuada gravida. Nunc vehicula cursus sollicitudin. Nunc suscipit lobortis dictum. Vestibulum sit amet ipsum nisi.


## Chapter 2

Phasellus fringilla consectetur velit et dictum. Vestibulum vitae erat felis. Integer bibendum turpis sem, ut viverra nibh dictum sit amet. Vestibulum sit amet pulvinar libero, sed luctus enim. Phasellus condimentum lobortis odio vitae aliquam. Aenean massa ipsum, malesuada et ultrices in, commodo sit amet mauris.

```

Each `#` represents a heading, and it's level. So `#` is a heading level 1 (largest), `##` is a heading level 2 (smaller than 1) and `###` is level 3 (the smallest in this example). Then the `**` indicates where to start and stop **bolding** text, while `*` indicates where to start and stop *italicizing* text.

##### JSON

JSON (JavaScript Object Notation) is a DSL designed for representing data. It is often used to pass data between applications (especially over a network), and as a general structured data language for data storage. For example here is a JSON object containing a list of user preferences:

```json
{
	"theme": "dark",
	"font-size": "XL",
	"avatar": "example.com/avatar.png"
}
```


Since it's creation JSON has also inspired many offshoots to replace it in it's various uses including [YAML](https://yaml.org/), [TOML](https://toml.io/en/), [Pkl](https://pkl-lang.org/blog/introducing-pkl.html), [Proto Buff](https://protobuf.dev/) and many more.

##### HTML

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (hyper-text markup language) is a markup language based off [XML](https://aws.amazon.com/what-is/xml/#:~:text=Extensible%20Markup%20Language%20(XML)%20lets,%2C%20and%20third%2Dparty%20applications.) to build web pages. HTML works with [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) to create the [DOM (document object model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). For example here is a blog post page:

```html

<html>
	<head>
		<title>My blog post</title>
	</head>
	<body>
	<h1>Blog post title</h1>
	<h3>Blog post subtitle</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae quam suscipit, posuere erat non, pretium lorem. Proin egestas in dui a porttitor. Aliquam rhoncus aliquet erat non imperdiet. Etiam id odio sit amet tortor tincidunt accumsan in vel neque. Nulla facilisi. Cras ipsum dui, varius vitae vestibulum eu, ultrices et ante. Etiam nec rhoncus neque, et semper dolor. Curabitur tempor non diam in imperdiet.</p>
	</body>
</html>

```

Many offshoot languages around HTML have been created such as [pug](https://pugjs.org/api/getting-started.html), [jsx](https://www.w3schools.com/react/react_jsx.asp), and additional templating languages like [handlebars](https://handlebarsjs.com/), [nunjucks](https://mozilla.github.io/nunjucks/) etc.
#### Critiques
There are lots of critiques of individual DSL/markup languages, however on the whole there are a few general critiques people levy. 

##### Variation
The first is that there are many different variants. At first this may sound trivial, but one often found problem is that people will introduce specifications with subtle differences constantly. For example when working with emails you will often use XHTML 1.0 Transitional. At first glance this seems like normal HTML 5, however it is very different. For example:

- the `<center>` element is deprecated in HTML 5, however it is commonplace in XHTML 1.0 Transitional
- Many of the modern features of CSS we enjoy are not possible in XHTML 1.0 Transitional
- The document is strictly enforced[^2] [^3], meaning it won't load when mistakes are made often, unlike HTML 5
This is not to mention just the general annoyance of having [multiple standards](https://xkcd.com/927/) to support.

##### Pedantry

The second issue is pedantry, many older standards will have seemingly arbitrary rules that cause lots of problems. For example JSON does not allow a trailing `,`. So for example this document would be invalid:

```json
{
    "name": "Kieran",
    "age": 25,
    "country": "Canada",
}
```

The `,` after Canada means that this entire document would fail to parse properly. There are other examples like only single quotes `'` working or only double quotes `"`. Some languages have reserved words that cause issues (like [the Norway problem](https://www.bram.us/2022/01/11/yaml-the-norway-problem/#:~:text=The%20reason%20to%20why%20this%20is%20problematic%20in%20some%20cases%2C%20is%20%E2%80%9CThe%20Norway%20Problem%E2%80%9D%20YAML%20has%3A%20when%20you%20abbreviate%20Norway%20to%20its%20ISO%203166%2D1%20ALPHA%2D2%20form%20NO%2C%20YAML%20will%20return%20false%20when%20parsing%20it%3A)).

##### Separation of concerns

Most common among these is that people will often break the separation of concerns. DSL/markup languages are meant to communicate data, not cause things to happen, however in many DSL/markup languages today there is a mix of data representation, and the ability to call functions. For example in HTML you can run Javascript code with event listeners. For example:

```html
<h1 onhover="alert('you hovered over me')">Hello world</h1>
```

This will open an alert box using Javacsript whenever someone hovers over the `h1` element. This decision has lead to [many](https://cheatsheetseries.owasp.org/cheatsheets/XSS_Filter_Evasion_Cheat_Sheet.html), [many](https://stackoverflow.com/questions/1798633/xss-attack-with-javascript-in-img-src-attribute) issues. It is practically the reason we require [sanitization](https://www.esecurityplanet.com/endpoint/prevent-web-attacks-using-input-sanitization/) for most inputs.

## Additional Resources

- Object oriented
	- [Fundamental Concepts of Object Oriented Programming (youtube.com)](https://www.youtube.com/watch?v=m_MQYyJpIjg)
	- Smalltalk
		- Intro to Smalltalk
			- RU Computer Science
				- [Programming Languages: Smalltalk - 1 - YouTube](https://www.youtube.com/watch?v=8GRwNM3hBDA)
				- [Programming Languages: Smalltalk - 2 (youtube.com)](https://www.youtube.com/watch?v=pFdWe2wSV2U)
			- [Smalltalk turned 50; A pure Object Oriented programming language with amazing ideas from 1972 (youtube.com)](https://www.youtube.com/watch?v=VSA_WFc1rl4)
			- [Smalltalk: Getting started with the language (youtube.com)](https://www.youtube.com/watch?v=WLoXXFxU8lw)
			- [Learn Smalltalk in Y Minutes (learnxinyminutes.com)](https://learnxinyminutes.com/docs/smalltalk/)
		- [Pharo Smalltalk as Universal Development Platform (youtube.com)](https://www.youtube.com/watch?v=2d2otdj66dw)
		- [Towards a different Smalltalk by Boris Shingarov - YouTube](https://www.youtube.com/watch?v=PiFg1gD8LNo)
		- [FAST - Fundación Argentina de Smalltalk - YouTube](https://www.youtube.com/@FASTFoundation/videos)
		- [Snap!Con 2021 - Smalltalk: Why all the fuss? (youtube.com)](https://www.youtube.com/watch?v=DlQSm6r3I_g)
		- [30 - Hernan Wilkinson - How Smalltalk Affects Thinking - YouTube](https://www.youtube.com/watch?v=brdx8YAVZag)
		- [The Early History of Smalltalk (youtube.com)](https://www.youtube.com/watch?v=9KuBmtEb8HI)
		- [Object Oriented Programming With Smalltalk – Objects & Messages (youtube.com)](https://www.youtube.com/watch?v=ThewgUBRods)
		- [GNU Smalltalk - GNU Project - Free Software Foundation (FSF)](https://www.gnu.org/software/smalltalk/)
	- Java
		- Intro
			- [Java in 100 Seconds (youtube.com)](https://www.youtube.com/watch?v=l9AzO1FMgM8)
			- [Learn Java in 14 Minutes (seriously) (youtube.com)](https://www.youtube.com/watch?v=RRubcjpTkks)
			- [Intro to Java Programming - Course for Absolute Beginners (youtube.com)](https://www.youtube.com/watch?v=GoXwIVyNvX0)
		- [Abstract Classes and Methods in Java Explained in 7 Minutes (youtube.com)](https://www.youtube.com/watch?v=HvPlEJ3LHgE)
		- [Static vs Non-Static Variables and Methods In Java - Full Simple Tutorial (youtube.com)](https://www.youtube.com/watch?v=-Y67pdWHr9Y)
		- [Final Keyword in Java Full Tutorial - Final Classes, Methods, and Variables (youtube.com)](https://www.youtube.com/watch?v=r9CMJZ4T__8)
		- [Generics In Java - Full Simple Tutorial (youtube.com)](https://www.youtube.com/watch?v=K1iu1kXkVoA)
	- Critiques & Commentary
		- [Object-Oriented Programming is Bad (youtube.com)](https://www.youtube.com/watch?v=QM1iUe6IofM)
		- [Why Objects Suck (codinghorror.com)](https://blog.codinghorror.com/why-objects-suck/)
		- [Object-Oriented Programming is Embarrassing: 4 Short Examples (youtube.com)](https://www.youtube.com/watch?v=IRTfhkiAqPw)
		- [Abstraction Can Make Your Code Worse (youtube.com)](https://www.youtube.com/watch?v=rQlMtztiAoA)
		- [The Problem with Object-Oriented Programming (youtube.com)](https://www.youtube.com/watch?v=jyol7J1nlp8)
		- [Jonathan Blow on the Problem with Object Oriented (youtube.com)](https://www.youtube.com/watch?v=04ksL1hf_p8)
		- [Is OOP EVIL??? Reacting to my favorite dev Youtube video](https://www.youtube.com/watch?v=YpJufWdZFB8)
	- [Seminar with Alan Kay on Object Oriented Programming (VPRI 0246) (youtube.com)](https://www.youtube.com/watch?v=QjJaFG63Hlo)
	- [Stop Writing Classes (youtube.com)](https://www.youtube.com/watch?v=o9pEzgHorH0)
	- [Object Oriented Programming is Good | Prime Reacts - YouTube](https://www.youtube.com/watch?v=uIxM3Hl0h7Q)
- Declarative
	- Logical
		- [The Power of Prolog - YouTube](https://www.youtube.com/@ThePowerOfProlog)
		- [A Brief Introduction to Prolog (youtube.com)](https://www.youtube.com/watch?v=dKn-BbS_zQQ)
		- [Prolog Programming Basics, Facts, Rules and Queries | Syntax, Examples and Code | Implementation (youtube.com)](https://www.youtube.com/watch?v=4F2FLNQ6yms)
	- DSL/Markup
		- [JSON](https://www.json.org/json-en.html)
		- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
		- [Markdown](https://www.markdownguide.org/)
	- Functional
		- 
		- Recursion
			- [Programming Loops vs Recursion - Computerphile (youtube.com)](https://www.youtube.com/watch?v=HXNhEYqFo0o)
			- [Recursion in 100 Seconds (youtube.com)](https://www.youtube.com/watch?v=rf60MejMz3E)
			- [Recursion 'Super Power' (in Python) - Computerphile (youtube.com)](https://www.youtube.com/watch?v=8lhxIOAfDss&t=1s)
			- [5 Simple Steps for Solving Any Recursive Problem (youtube.com)](https://www.youtube.com/watch?v=ngCos392W4w)
			- [Recursion in Programming - Full Course (youtube.com)](https://www.youtube.com/watch?v=IJDJ0kBx2LM)
		- [Why Isn't Functional Programming the Norm? – Richard Feldman (youtube.com)](https://www.youtube.com/watch?v=QyJZzq0v7Z4)
		- Languages
			- [Lisp](https://lisp-lang.org/)
				- [Lecture 1A: Overview and Introduction to Lisp (youtube.com)](https://www.youtube.com/watch?v=-J_xL4IGhJA)
				- [Lisp in 100 Seconds - YouTube](https://www.youtube.com/watch?v=INUHCQST7CU)
				- [Lisp Tutorial (youtube.com)](https://www.youtube.com/watch?v=ymSq4wHrqyU)
				- [Introduction to Common Lisp (youtube.com)](https://www.youtube.com/watch?v=GFtEGETLv0o)
			- [Haskell](https://www.haskell.org/)
				- [Haskell in 100 Seconds (youtube.com)](https://www.youtube.com/watch?v=Qa8IfEeBJqk)
				- [Haskell for Imperative Programmers #1 - Basics (youtube.com)](https://www.youtube.com/watch?v=Vgu82wiiZ90&list=PLe7Ei6viL6jGp1Rfu0dil1JH1SHk9bgDV)
				- [How to read Haskell code (in 7 minutes) (youtube.com)](https://www.youtube.com/watch?v=gK0hMxJhqwM)
				- [Functional Programming & Haskell - Computerphile (youtube.com)](https://www.youtube.com/watch?v=LnX3B9oaKzw)
				- [Introduction - Haskell for Beginners (1) (youtube.com)](https://www.youtube.com/watch?v=JjzBFVhkeMA&list=PLmTgnNwroyn8TnF26YRvW-hvQF1ypztzg)
			- [Clojure](https://clojure.org/)
				- [A Intro to Clojure and Clojure Syntax (youtube.com)](https://www.youtube.com/watch?v=uwRFOFvd-CU)
				- [Clojure - intro (youtube.com)](https://www.youtube.com/watch?v=9A9qsaZZefw&list=PLAC43CFB134E85266)
				- [Poetry of Programming - Clojure course Introduction (youtube.com)](https://www.youtube.com/watch?v=CjdVNCQ7YHA&list=PLI-mrGTUXmHXeKhy6UGdDxIKwM8L4MTbq)
			- [Elixir](https://elixir-lang.org/)
				- [Elixir in 100 Seconds (youtube.com)](https://www.youtube.com/watch?v=R7t7zca8SyM)
				- [Phoenix Framework](https://www.phoenixframework.org/)
				- [Elixir Programming Introduction - Complete Tutorial! (youtube.com)](https://www.youtube.com/watch?v=-lgtb-YSUWE)
				- [Elixir: The Documentary (youtube.com)](https://www.youtube.com/watch?v=lxYFOM3UJzo)
				- [Should you learn Elixir in 2024? (youtube.com)](https://www.youtube.com/watch?v=Klog_kNDEfI)
			- [Idris](https://www.idris-lang.org/)
				- [Learning Idris (youtube.com)](https://www.youtube.com/watch?v=DYaf39CKrEE)
				- [The Idris Tutorial — Idris 1.3.3 documentation (idris-lang.org)](https://docs.idris-lang.org/en/latest/tutorial/)
				- [Proving Theorems with Idris (youtube.com)](https://www.youtube.com/watch?v=EcvxKRC8xVk)
		- Critiques



## References

[^1]: https://github.com/hpi-swa-lab/SqueakByExample-english/releases/download/6.0/SBE-6.0.pdf page 72 (56 in top-left numbering)
[^2]: [XHTML 1.0: The Extensible HyperText Markup Language (Second Edition) (w3.org)](https://www.w3.org/TR/xhtml1/#strict)
[^3]: [XHTML 1.0: The Extensible HyperText Markup Language (Second Edition) (w3.org)](https://www.w3.org/TR/xhtml1/#h-4.1)
[^4]: https://www.paulgraham.com/icad.html#:~:text=What%20Made%20Lisp%20Different
[^5]: https://en.wikipedia.org/wiki/Fortran#:~:text=contained%2032%20statements
[^6]: [Open Watcom in Fortran Wiki](https://fortranwiki.org/fortran/show/Open+Watcom#:~:text=In%202003%2C%20the%20Watcom%20C,commercial%20and%20non%2Dcommercial%20use.)