...

> ["The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise"](https://ericnormand.me/article/what-is-abstraction#:~:text=The%20purpose%20of%20abstraction%20is%20not%20to%20be%20vague%2C%20but%20to%20create%20a%20new%20semantic%20level%20in%20which%20one%20can%20be%20absolutely%20precise)
> - Dijkstra

## Abstraction Levels

The idea of a "level" of abstraction, just means that as your "level" goes up, you are removing more and more of the details of the implementation under the hood. For example a game engine abstracts the complex math behind rendering, and gives you a nice interface to work with. As the developer you work with the game engine as a level of abstraction above the actual rendering you are doing.

As another example, computers run machine code, but this is hard to read since it's all just numbers. Assembly language is then a level of abstraction on top of machine code, because it allows you to write code that will then generate the resulting machine code. Languages like C will let you write with more abstract concepts like loops, and will then generate the assembly that will then become machine code. Then a language like python is a separate language that often will call C functions, which then generate assembly, which then generates machine code. Each of these would be another level of abstraction

![[Pasted image 20240904175240.png]]

## Examples

For example consider a program where you need to store data about animals. One approach you could take is to create a separate [[Data Structures (TODO)#Struct|struct]]/[[Data Structures (TODO)#Class|class]] for each animal:

```
struct GermanShepard{
	id: string
	weight: int
	age: int
}

class SnowLeopard{
	id: string
	weight: int
	age: int
}
```

This is fine, but it won't scale well. Trying to search through hundreds of options becomes cumbersome. Instead we can abstract away by looking at what's common among the structs/classes. In our case we can see they are all some type of Animal, and that we have the same information we're storing with each. So we can abstract these classes/structs into one class/struct called Animal:

```
struct Animal{
	id: string
	weight: int
	age: int
	type: str
}

class Animal{
	id: string
	weight: int
	age: int
	type: str
}
```

So now we can do everything we did before, but instead of creating a new class/struct for each new animal, we just change the `type`.

Another more relevant example would be a system that abstracts a database. For example instead of writing an API that implements just 1 database, you can create an abstraction over what you need to do with a database, and then create multiple implementations for each database you care about. Then you can use whichever one you want. Here would be what it looks like to implement one database in this case with a struct or a class:

```
struct MySQL{
	port: int
	username: str
	password: str
	hostname: str
	connection: Connection
}

function connect(port: int, username: str, password: str, hostname: str) MySQL{
	... // Connect to the database
	return MySQL(port, username, password, hostname, connection)
}

function read(item: str, db:MySQL) list[list]{
	return db.send("SELECT {item} from database")
}

function write(items: list[str], db:MySQL) bool{
	result = db.send("INSERT INTO database (item) Values ({item})")
	return bool(result)
}

class MySQL{
	port: int
	username: str
	password: str
	hostname: str
	connection: Connection

	function connect(port: int, username: str, password: str, hostname: str) {
		... // Connect to the database
		self.connection = connetion
	}
	
	function read(item: str, db:MySQL) list[list]{
		return db.send("SELECT {item} from database")
	}
	
	function write(items: list[str], db:MySQL) bool{
		result = db.send("INSERT INTO database (item) Values ({item})")
		return bool(result)
	}
}
```

Instead we could create an abstract class or interface, and then implement it for each database:

```
interface Database{
	port: int
	username: str
	password: str
	hostname: str
	connection: Connection

	connect(port: int, username: str, password: str, hostname: str) Database
	read(item: str, db:Database) list[list]
	write(items: list[str], db:Database) bool
}

abstract class Database{
	port: int
	username: str
	password: str
	hostname: str
	connection: Connection

	function connect(port: int, username: str, password: str, hostname: str) Database
	
	function read(item: str, db:Database) list[list]
	
	function write(items: list[str], db:Database) bool
}
```

## Generics
Generics are another form of abstraction that exists. They are used when you have a [[Programming/Basics#Typed vs Untyped|strongly typed]] language you often run into a problem where a function can be used for multiple types. For example wanting to filter out duplicates. So you can either reimplement the same function for every discrete type, or find a way to abstract the function to work with any type. You can also use generics for structs/classes in some languages. Like for example if a struct can take an array of any type, you can make the attribute a generic array type. 

### Example

For example let's say you want to write a function to remove duplicates from an array of numbers. This example is in typescript:

```typescript
// A function to remove duplicates from an array
function removeDuplicates(array: Number[]): Number[] {
  const uniqueElements = new Set<Number>(array);
  return Array.from(uniqueElements);
}


console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

But, this could be used for other types, like strings. But we don't want to add a new function for every different type. Instead lets use generics:

```typescript
// A function to remove duplicates from an array
function removeDuplicates<T>(array: T[]): T[] {
  const uniqueElements = new Set<T>(array);
  return Array.from(uniqueElements);
}

// Usage with different types of arrays
const numberArray = [1, 2, 2, 3, 4, 4, 5];
const stringArray = ["apple", "banana", "apple", "orange"];
const objectArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" }
];

// Removing duplicates
console.log(removeDuplicates(numberArray)); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(stringArray)); // Output: ["apple", "banana", "orange"]
console.log(removeDuplicates(objectArray)); // Output: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }]
```

In this case `T` is a proxy for whatever type people end up choosing (number, string, etc.).
## Critiques
...

There are also critiques of [[Programming Paradigms (TODO)#Object oriented|object oriented]] programming that overlap with abstraction, however the specifics of those issues are covered in [[Programming Paradigms (TODO)#Object oriented| the critiques section of this page]].
### Mismapping
...

### Over-abstraction
...

### Premature Abstraction
...



## Related talks

- [Preventing the Collapse of Civilization / Jonathan Blow (Thekla, Inc) (youtube.com)](https://www.youtube.com/watch?v=ZSRHeXYDLko)
- [Abstraction Can Make Your Code Worse (youtube.com)](https://www.youtube.com/watch?v=rQlMtztiAoA)
- [Clean Code : Horrible Performance | Full Interview (youtube.com)](https://www.youtube.com/watch?v=OtozASk68Os)
- [Prime Reacts: The Flaws of Inheritance (youtube.com)](https://www.youtube.com/watch?v=HOSdPhAKupw)
- [The Art of Abstraction - Computerphile (youtube.com)](https://www.youtube.com/watch?v=p7nGcY73epw)
- [What is abstraction (youtube.com)](https://www.youtube.com/watch?v=_OVWjMkGsNY)
- [Where Does Bad Code Come From? (youtube.com)](https://www.youtube.com/watch?v=7YpFGkG-u1w)
- [Rust: Turtles all the way down - YouTube](https://www.youtube.com/watch?v=PuMXWc0xrK0)
- [I tried React and it Ruined My Life - YouTube](https://www.youtube.com/watch?v=XAGCULPO_DE)
- [Fast and Beautiful Assembly - YouTube](https://www.youtube.com/watch?v=ON9vuzLiGuc)