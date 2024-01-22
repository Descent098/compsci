---
title: 🌱Basics/Intro
date: 2024-01-09
aliases:
  - programming
tags:
---
This section will talk about basic programming concepts, if you want the easiest way to start programming I would look into the [[python]] section, which will detail how to use python for all these concepts. This section covers programming more holistically, and will be more difficult than just learning a language to start with. 
## Programming Languages
Computers communicate using electrical signals, these signals are then [[Abstraction (TODO)|abstracted]] into [[Binary and Hexadecimal (TODO)#Binary|binary]]. This allows programmers to control these signals in easier to work with ways. Programming languages are built on top of layers and layers of existing [[OS & Firmware/Basics#Firmware/Bios|firmware]] and [[OS & Firmware/Basics|operating systems]]. Programming languages let you define programs (also called applications or binaries) that run in order to do something. Anything you run on your electronic devices today is the result of a programming language. 

### Source Code, Binaries, and scripts
Source code are the actual files a programmer works with to create **binaries**. Binaries (not to be confused with [[Binary and Hexadecimal (TODO)#Binary|binary]]) are software that can be run by a computer. The source code is essentially an easily readable set of instructions, which the computer then compiles (using a [[Compilers (TODO)|compiler]]) into "machine code", which is what the computer then actually runs. Binaries are also called:

- applications, or apps
- scripts
- executables or execs

### Pseudocode
For this section I will use Pseudocode, this is a fancy name for "I don't want to write real code". Essentially it will be a mix of code syntax and plain English to make it easy to read. It also lets me explain topics and syntax from multiple language at once.

### Compiled vs interpreted (TODO)
...
#### REPL (TODO)
...
#### Bytecode (TODO)
...
## Comments
Comments are what they sound like, they don't do anything and they're there to let you add comments for yourself and other developers to read. This can be handy (especially when starting) to provide information that is not easily ascertainable by the code. A comment can be on it's own line, or "inline". inline comments will go after some code. Comments can also be single-line, or multiline. In the example below the comment character will be `//`, which means anything after `//` will be a comment. For example:

```
// This is a signle line comment

some_code // This is an inline comment
```
However there are various different comment characters that are used for example:

```
# This is jused in python, bash, YAML etc.
// This is used in C, Rust, Javascript etc.
-- This is used in SQL, Haskell etc.
<!-- This is used in HTML, XML etc. -->
; This is a comment in assembly, etc.
! This is a comment in FORTRAN, etc.
% This is a single line comment in Erlang, LaTeX, etc.
```
And multiline comments can be different:
```
"""This is a multiline comment in
	- python
"""
/* This is a multine comment in
	- C
	- Rust
	- Javascript
	- CSS
	- etc.
*/
{-- This is a multiline comment in
	- Haskell
--}

```
For my pseudocode I will use `//` for comments and `/* */` for multiline comments.
## Variables (TODO)
When working with code you will inevitably want to store some information. To store information we use variables. Variables are basically labels we can use to refer to information more easily. Different languages have different rules about how to create variables, and how to use them, but every language has variables in some form.

### Assignment and initialization
When you want to use a variable you need to create it. The simplest form of this in many programming languages is to put the label (variable name) on the left, and then an = and then the value. For example:

```
name = kieran
```
You  can then typically reference this later in the file using the label. For example here might be some math:

```
x = 4
y = 3

z = x + y // z is 7
```


### Mutability
Mutability is the concept that you can change variables. Some types of data you store are able to be mutated so that their content can be changed, others cannot. If a variable cannot be changed it is called an immutable variable. For example here is a mutable variable:

```
x = 4

x = 5
```

In some languages (like rust) values are immutable by default and you have to specify **mutable** values.
```
mut x = 5 // x can be mutated

y = 5 // y is immutable
```


#### Constants and immutable values
Constants exist in some languages, constants cannot be updated regardless of the type used. These are good for things that don't change (like the value of PI, or the [gravitational constant](https://en.wikipedia.org/wiki/Gravitational_constant)). Most languages your variables are **mutable**. In these languages you can sometimes specify variables as immutable with constants, or other language constructs like [readonly](https://basarat.gitbook.io/typescript/type-system/readonly):
```
readonly x = 5

const PI = 3.14159
```
## Scoping (TODO)
Variables don’t exist forever. If they did then long running programs would be very inefficient. What programming languages do instead is they scope variables, so they get deleted when they’re no longer needed. The scoping rules, and how they apply differ by language.

This also helps to avoid some common issues that might come up with variables. For example lets say you have some code that uses the variable name then later you have some code that also uses name. In this case whichever one comes last would override the other. However if they are in different scopes, then they can be used independent of one another. Often for example you can have a program where `name` is used in one file, and `name` is used in antother file, but since the variables are scoped to each file they don't conflict. For example:

```
file1.name // Kieran

file2.name // Jamie
```
In this case code in file1 will get `Kieran` when they use `name` and `file2` would get `Jamie` when they use `name`. Scoping is also heavily tied to [[#Functions (TODO)]].
### Data Types (TODO)

Not all data is formatted the same. Data types are the basic building blocks that let you define what data looks like. It gives information about what you're trying to store and effects performance, and what information you can put in a variable

#### Dynamic vs Strict Typing
Dynamic languages will allow you to create variables without stating a data type explicitly, instead they are **inferred**, for example:

```
x = 4
y = 3

z = x + y // z is 7
```
In this case the type of the data is **inferred** meaning when x is assigned to 4 it's inferred to be an [[#Integer (TODO)]]. In other languages you have to explicitly state the data type. If you have to state the type it's referred to as **static typed**, whereas ones without needing to specify the type are called **dynamic typed** (or **duck typed** sometimes). For static languages, this is an example of how you define a variable:

```
// type label = value
int x = 4 // Rust, C and other languages use this format

// label:type = value
x:int = 4 // Typescript and others use this format
```

Some languages can let you specify when you want to **infer** vs be strict. For example in go `:=` means assign a variable and infer it's type:
```
// Explicit typing
int x = 4

// Inferred tpye
x:= 4
```
Some languages will also allow you to declare a variable without a value, which can be initialized with a value later. For example:
```
int x

x = 4
```


#### Primitive vs Derived types

Primitive types are data types that are included by default in most languages. They are the **essential** data types used to build programs. Every type we cover in this section will be a **primitive type**. A derived type is a type that is programmer created and not part of the language. You can create these using [[Advanced Data Structures (TODO)#Class|classes]]/[[Advanced Data Structures (TODO)#Struct|structs]]/[[Advanced Data Structures (TODO)#Enumerator|enums]].
#### Integer
Integers are normal whole numbers (no decimals). So for example here are some integers:

```
x = 5
y = 32
z = -256
q = 0
```
In many languages you will find integers being referred to as `int`. 
##### Sizing
Integers are often split up by sizes. This can help massively with optimization, but can make things more complicated. In languages that specify them usually there will be an `i` with a number. This number will typically indicate the [[Binary and Hexadecimal (TODO)#Binary|bits]]:

| Symbol | Description | Min and Max |
| ---- | ---- | ---- |
| i8 | 8 bit integer (1 byte) | -128 to 127 |
| i16 | 16 bit integer | -32,768 to 32,767 |
| i32 | 32 bit integer | -2,147,483,648 to 2,147,483,647  |
In some languages they instead have `short`, `long`, `long long` and other shorthands for integers. You would need to lookup the specifics in each language to find these, but typically they will correspond to a number that has a certain number of bits.
##### Signed vs Unsigned
An unsigned integer is an integer that can **only be positive**. A signed integer is an integer that can be  **positive or negative**. In many programming languages you will see an unsigned integer as starting with `U`:

| Symbol | Description | Min and Max |
| ---- | ---- | ---- |
| u8 | 8 bit integer (1 byte) | 0 to 255 |
| u16 | 16 bit integer | 0 to 65,535 |
| u32 | 32 bit integer | 0 to 4,294,967,295  |
As you can see compared to the signed integers above, unsigned integers can hold larger numbers for the same number of bits.
#### Float/Floating Point (TODO)
...
#### Array's & Lists (TODO)
...
#### Booleans
Booleans are values that indicate if something is `true` or `false`. These can be used in conjunction with [[#Conditionals (TODO)]] to tell a program what to do.


A trivial example would be the current season:
```
is_summer = False
is_winter = False
is_fall = False
is_spring = True
```

Based on this the program might use a [[#Conditionals (TODO) |conditional ]] to show a certain theme based on the current season. This can also be used for things like user settings:

```
dark_theme = true
```

In some languages (like C & python) booleans are actually just integers. For example here are the various representations of true and false in different languages:

```
// True
true
Yes
1
TRUE
True

// False
false
No
0
FALSE
False
```
##### Truthyness
In many languages you can do checks against values of other data types to see how "truthy" they are. This is usually done to indicate if a value is "empty" or not. For example:

```
"" // Would be false because it's an empty string
0  // Would be false because it's 0
[] // Would be false because it's empty
```
#### Mappings (dictionaries, hash-maps, associative arrays)

- How to use
- When to use
- JSON


Details about hashing in general, and these data structures can be found in the [[Hashing]] page. Additionally a blog post about creating these data structures from scratch can be found [here](https://kieranwood.ca/tech/blog/verifying-quickly/).
#### Null, None & undefined types (TODO)
...
## Conditionals (TODO)
...
## Functions (TODO)
...

### Anatomy of functions (TODO)
...

There are 2 popular forms of enforcing variable scopes, indentation and `{}`. To illustrate this point let's look at an example:

```
x = 5

function {
	x = 3
}

```

### Returns (TODO)
...
### Recursion (TODO)
...

### Effect on scopes

As mentioned earlier functions have an impact on [[#Scoping (TODO)]]. For example there's a separate scope inside a function:

```
x = 5

function doStuff(){
	x = 3
	// x is 3
}
// x is 5

```
Some languages will allow you to modify values in outer scopes, and in those cases x would be 3. But in most languages x would be 5 at the second comment. Look into the language specifics of your language to understand this.


