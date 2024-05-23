Sometimes the basics aren't enough. Often times problems you encounter will require more in-depth [[Algorithms & Complexity (TODO)|algorithms]], but sometimes the way you're representing the data can be enough to handle your problems.

## Abstract vs concrete data structures
Abstract data structures are the "idea" of a data structure. It's language-agnostic, and designed to be a tool to understand what a data structure is trying to do. 
## Struct
Structs are a system for organizing data that allows you to define variables into a "package" that you can access more intuitively. For example consider the following struct that stores user data:

```
struct User{
    name string
	age int
    weight float64
}
```

This is essentially a template that can be used to store individual users. For example:

```
a = User("Kieran", 25, 102.03)

// Access individual fields
a.name   // "Kieran"
a.age    // 25
a.weight // 102.03
```

This makes working with large numbers of users much easier, for example a function that returns all the users that are over 18:

```
users = [
	User("Kieran", 25, 102.03),
	User("Jamie", 27, 84.03),
	User("Daniel", 22, 70.03),
	User("Daphne", 19, 76.03),
	User("Rajesh", 16, 68.03),
	User("Melody", 15, 55.03),
	User("Jane", 18, 60.03),
]

function get_users_by_minimum_age(age:int, users:list[User]){
	result = []
	for user in users{
		if user.age >= age{
			result.add(user)
		}
	}
	return result
}


print(get_users_by_minimum_age(18, users)) 
// Returns [User("Kieran", 25, 102.03), User("Jamie", 27, 84.03), User("Daniel", 22, 70.03), User("Daphne", 19, 76.03), User("Jane", 18, 60.03)]


```

## Interface
An interface allows you to specify a set of methods that need to be implemented in order for the type to be considered that interface. For example consider a site where you post reviews of movies, and books. For each of these you want to make sure that a `summary()` method is implemented.. You can create an interface like this:

```
interface Summarized{
	summary() string
}
```
In this case any type (class or struct) that implements `Summarized` is guarented to have a `summary()` function that returns a string. Different languages implement the syntax differently, but here's an example of what it might look like:

```
struct Book{
	name: str
	description: str
	rating: str
}

struct Movie{
	name: str
	description: str
	rating: str
}

Book implements Summarized{
	function summary(){
		return first(self.description, 150) // Returns first 150 characters of description
	}
}

Movie implements Summarized{
	function summary(){
		return first(self.description, 150) // Returns first 150 characters of description
	}
}

```

Now we can have a function that just requires a type to have implemented `Summarized`:

```
function displayContent(content:Sumarized){
	print(content.summary())
}
```

Now our function will allow us to pass a `Movie` or `Book`, and if we want to create another struct for a TV show we could, and just have to implement the interface for it to work. 
## Class

A class is a data type used in [[Programming Paradigms (TODO)#Object oriented|object oriented]] programming to define a "template" that can store data, and functions to manipulate that data. For example consider a `User` class that tracks information about a user:

```
class User{
	name: str
	age: int
	email: str
}
```

Each of the variables inside the class declaration are called attributes. We can create multiple users, and they will all have the same structure:

```
a = User("Kyle", 26, "kyle@example.com")

a.name   // "Kyle"
a.age   // 26
a.email // "kyle@example.com"
```

`a` in the above example is called an object. If you think of a class is kind of like a template, or cookie cutter an object is an instance or the actual cookie at the end. If you follow the steps laid out by a class, you get an object:

![[classes-objects.png]]

Because the data is the same we can use classes in functions to make sure fields are filled out how we expect:

```
users = [
	User("Kieran", 25, "Kieran@example.com"),
	User("Jamie", 27, "Jamie@example.com"),
	User("Daniel", 22, "daniel@example.com"),
	User("Daphne", 19, "daphne@example.com"),
	User("Rajesh", 16, "raj@example.com"),
	User("Melody", 15, "mel@example.com"),
	User("Jane", 18, "jane@example.com"),
]


function get_user_by_email(email:str){
	for user in users{
		if user.email = email{
			return user
		}
	}
}


get_user_by_email("jane@example.com") // returns User("Jane", 18, "jane@example.com")

```

On top of this we can define methods, methods allow us to write functions that can modify the object itself. For example consider a function that adds 1 year to your age that you call on the user's birthday:

```

class User{
	name: str
	age: int
	email: str

	function birthday(){
		self.age += 1
	}
}
```

Now if we run `birthday()` on an instance, it will add 1 to the instance's age value
## Enumerator
...
## Iterators (TODO)
Iterators is the name given to types of data that are designed to be looped over. For example if you have some text then in most languages that will be an iterator where you will start at the first letter and be able to loop through each letter one at a time.

You can also usually create your own iterators so that for example if you have some code generating a slideshow you could create an iterator that loops through each slide. The only thing that matters is that you can define a start, an end, and some way to get from one item to another (sometimes items in iterators are called elements).
## Abstract data types (TODO)
...

### Queues
...
### Linked lists (TODO)
...
### Heaps (TODO )
....
## Recursive Types
...

## Trees
This is a computer science concept that comes up **a lot** (the math term is [graph theory](https://www.youtube.com/watch?v=LFKZLXVO-Dg)). The basics are that a graph/tree is a collection of nodes that are linked together. Nodes can represent anything, but usually they represent an object in a hierarchy. A hierarchy is just a fancy name for a structure that shows categories that are related in some way to all of the categories beneath them. This means tree's will have a "starting point" from which the other Nodes flow from (called the root). For example when talking about a location you might have a hierarchy that looks like this:

```mermaid
flowchart TD
    a{Continent} & b{Country} & c{Province} & d{City}
    a --contains--> b --contains-->c --contains--> d

```

  

Where the overall category is A location from there you have continents, which contain countries, which contain provinces, which contain cities. In code this can be done using an object ([[Programming Paradigms (TODO)#Object oriented|object oriented]]), or [[#Struct]] ([[Programming Paradigms (TODO)#Procedural|Procedural]]). For example to represent some cities in Canada we could have:

```mermaid
flowchart TD
    A(North America)
    B(Canada)
    C(Alberta)
    D(British Columbia)
    E(Ontario)
    A -->B
    B --> C & D & E
    C --> CA(Calgary) & CB(Edmonton)
    D --> DA(Vancouver) & DB(Revelstoke)
    E --> EA(Toronto) & EB(Ottawa)
```
  
We can then represent it by having a Node [[#class]] or [[#Struct]]. We're going to represent the subtree of BC:
```mermaid
flowchart TD
    A(North America)
    B(Canada)
    D(British Columbia)
    A -->B
    B --> D
    D --> DA(Vancouver) & DB(Revelstoke)
```

here is the pseudocode for each:

```
// Struct Version
Struct Node{
	label: String
	parent: Null or List of Node's
	child: Null or List of Node's
}

// Class Version
Class Node:
	label: String
	parent: Null or List of Node's
	child: Null or List of Node's


// Using either

/// Create Children
vancouver = Node("Vancouver", Null, Null)
revelstoke = Node("Revelstoke", Null, Null)

/// Create Parent node with children
bc = Node("British Columbia", Null, [vancouver, revelstoke])

/// Add parent to children
vancouver.parent = bc
revelstoke.parent = bc

/// Create parent Node with children
canada = Node("Canada", Null, [bc])

/// Add parent to children
bc.parent = canada

/// Create parent Node with children
na = Node("North America", Null, [canada])

/// Add parent to children
canada.parent = na
```

This is a useful visualization because each edge (arrow/line) tells you what the node is related to. So if we later want to check what cities are in Canada, we go to the Canada node, and then search all the children, then the children's children:

```
cities = []
for province in canada.children{
	for city in province.children{
		cities.add(city)
	}
}
```

This also means unlike just a traditional list/array if our model expands we have to update very few nodes. For example let's say we become space fairing, and as part of that our location tree now needs to specify which planet we're talking about. To add that node we simply add in the Planet node, and then attach the continent node to the planet (updating 1 reference in our case).
```mermaid
flowchart TD
    AA{Planet} & a{Continent} & b{Country} & c{Province} & d{City}
    AA --Contains-->  a --contains--> b --contains-->c --contains--> d

```
**Uses & references**:
- [Making categories simpler | Schulich Ignite](https://schulichignite.com/blog/taxonomical-ordering/)
- The DOM
	- [Understanding the DOM — Document Object Model | DigitalOcean](https://www.digitalocean.com/community/tutorial-series/understanding-the-dom-document-object-model)
	- [DOM tree (javascript.info)](https://javascript.info/dom-nodes)
- [The power of paths | Schulich Ignite](https://schulichignite.com/blog/the-power-of-paths/)
- [Applications of tree data structure - GeeksforGeeks](https://www.geeksforgeeks.org/applications-of-tree-data-structure/)
- [Real World Examples of Tree Structures | Baeldung on Computer Science](https://www.baeldung.com/cs/tree-examples)

## Graphs
Graphs are similar to the ideas behind [[#Trees]], except graphs are not heirarchical. They are used in many problems to help model real life situations like maps, networks and puzzles. Here is an example of a graph:

```mermaid
flowchart LR
    A((Vertex))
    b((Vertex))
    c((Vertex))
    d((Vertex))
    e((Vertex))
    f((Vertex))
    A ---- c
    c ---- d
    b ---- c
    e ---- c
    b ---- A
    f ---- d
```
The circles are "vertices" and they are similar to Nodes in [[#Trees]], each vertex connects to other vertices via edges (the lines). The graph above is an undirected, and unweighted graph. This implies that whatever it's representing allows you to "travel" back and forth between any two connected vertices. If I gave them labels now:

```mermaid
flowchart LR
    a((a))
    b((b))
    c((c))
    d((d))
    e((e))
    f((f))
    a ---- c
    c ---- d
    b ---- c
    e ---- c
    b ---- a
    f ---- d
```
These are pretty easy to represent in code, using [[#Struct|Structs]] pr [[#Class|classes]] we can do:
```
// Struct Version
Struct Vertex{
	label: string
	edges: Null or list of Verticies
}


Struct UndirectedGraph{
	Verticies: List of Verticies
}


// Class version
Class Vertex{
	label: string
	edges: Null or list of Verticies
}


Class UndirectedGraph{
	Verticies: List of Verticies
}

// Create Verticies
a = Vertex("a", Null)
b = Vertex("b", Null)
c = Vertex("c", Null)
d = Vertex("d", Null)
e = Vertex("e", Null)
f = Vertex("f", Null)

// Add edges
a.edges = [b, c]
b.edges = [a, c]
c.edges = [a,b,e,d]
d.edges = [c,f]
e.edges = [c]
f.edges = [d]

// Create Graph
UndirectedGraph([a,b,c,d,e,f])

```
**Uses**:
- Social Media analysis
	- [A brief introduction to Social Network Analysis | by Emre Yüksel | Medium](https://medium.com/@emreeyukseel/a-brief-introduction-to-social-network-analysis-2d13427f5189)
	- [Lec3_network_statistics_handout.pdf (unb.ca)](https://ddu.ext.unb.ca/6634/Lecture_notes/Lec3_network_statistics_handout.pdf)
	- [2.3 Symmetric Relations and Undirected Graphs | Social Networks: An Introduction (bookdown.org)](https://bookdown.org/omarlizardo/_main/2-3-symmetric-relations-and-undirected-graphs.html)
- Recommendation engines
	- [Graph-Based Product Recommendation | DSC180B Capstone Project on Graph Data Analysis (nhtsai.github.io)](https://nhtsai.github.io/graph-rec/)
	- [Microsoft Word - Final_Report_6.docx (stanford.edu)](http://snap.stanford.edu/class/cs224w-2014/projects2014/cs224w-84-final.pdf)
	- [Recommendation System using Knowledge Graphs and Machine Learning | by Sahil Sheikh | Medium](https://medium.com/@sheikh.sahil12299/recommendation-system-using-knowledge-graphs-and-machine-learning-4060c6677f8b)
- Network analysis
	- [NetworksSlides.pdf (stanford.edu)](https://web.stanford.edu/class/cs102/lectureslides/NetworksSlides.pdf)
	- [14.15J / 6.207 Networks, Lectures 2 & 3 Graphs, Measures, and Metrics (mit.edu)](https://ocw.mit.edu/courses/14-15j-networks-spring-2018/db71ec0e28e5f9c6aaca7f7c789ab055_MIT14_15JS18_lec2-3.pdf)
- Searching & Pathfinding
	- [gs.pdf (stanford.edu)](https://cs.stanford.edu/people/abisee/gs.pdf)
	- [Graph Search Algorithms - Developer Guides (neo4j.com)](https://neo4j.com/developer/graph-data-science/graph-search-algorithms/)
	- [Depth First Search Algorithm | Graph Theory (youtube.com)](https://www.youtube.com/watch?v=7fujbpJ0LB4)
	- [Breadth First Search Algorithm | Shortest Path | Graph Theory (youtube.com)](https://www.youtube.com/watch?v=oDqjPvD54Ss)
	- [5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search (youtube.com)](https://www.youtube.com/watch?v=pcKY4hjDrxk)
	- [Graph Theory and Searching Algorithms (BFS, DFS) - Algorithms & Data Structure #14 (youtube.com)](https://www.youtube.com/watch?v=9gOljeZlCAs)
	- [Depth-First Search Visualization (usfca.edu)](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
	- [Breadth-First Search (usfca.edu)](https://www.cs.usfca.edu/~galles/visualization/BFS.html)

### Directed Graphs

We could start using them to describe something useful. Let's say each letter is a house, and Alice (who lives at `a`) wants to get to Bob (who lives at `f`) we could now use this structure to describe a path for Alice to get to Bob, like for example `a -> b -> c -> e -> c ->d -> f`:

```mermaid
flowchart LR
    a((a))
    b((b))
    c((c))
    d((d))
    e((e))
    f((f))
    a --> b --> c --> e --> c -->d --> f
```
Now that we've added arrows, the graph above is called a directed graph, since you can only go in the direction the arrow heads tell you to. In this case, because we've laid it out this way we can clearly see this is an inefficient path, it's much faster to skip `e` entirely, and do something like this:

```mermaid
flowchart LR
    a((a))
    b((b))
    c((c))
    d((d))
    f((f))
    a --> b --> c -->d --> f
```
In fact if we look at our original graph there's an even shorter path if we skip `b` as well:

```mermaid
flowchart LR
    a((a))
    c((c))
    d((d))
    f((f))
    a -->  c -->d --> f
```
We can describe all these in code again using [[#Struct|Structs]] pr [[#Class|classes]]:

```
// Struct Version
Struct Edge{
	to: Vertex
}

Struct Vertex{
	label: string
	edges: Null or list of Edge's
}


Struct DirectedGraph{
	Verticies: List of Verticies
}


// Class version
Class Edge{
	to: Vertex
}

Class Vertex{
	label: string
	edges: Null or list of Edge's
}


Class DirectedGraph{
	Verticies: List of Verticies
}

// Create Verticies
a = Vertex("a", Null)
b = Vertex("b", Null)
c = Vertex("c", Null)
d = Vertex("d", Null)
e = Vertex("e", Null)
f = Vertex("f", Null)

// Add edges
a.edges = [Edge(b)]
b.edges = [Edge(c)]
c.edges = [Edge(e), edge(d)]
e.edges = [Edge(c)]
d.edges = [Edge(f)]

// Create Graph
DirectedGraph([a,b,c,d,e,f])

```
**Uses**:
- Pagerank (how google used to pick which pages to show)
	- [Google’s PageRank Algorithm Explained with Examples | Georgia Tech CSE6242 (youtube.com)](https://www.youtube.com/watch?v=RVIr8Y5isek)
- Network Flow Analysis
	- [Max Flow Ford Fulkerson | Network Flow | Graph Theory (youtube.com)](https://www.youtube.com/watch?v=LdOnanfc5TM)
- Searching & Pathfinding
	- [gs.pdf (stanford.edu)](https://cs.stanford.edu/people/abisee/gs.pdf)
	- [Graph Search Algorithms - Developer Guides (neo4j.com)](https://neo4j.com/developer/graph-data-science/graph-search-algorithms/)
	- [Depth First Search Algorithm | Graph Theory (youtube.com)](https://www.youtube.com/watch?v=7fujbpJ0LB4)
	- [Breadth First Search Algorithm | Shortest Path | Graph Theory (youtube.com)](https://www.youtube.com/watch?v=oDqjPvD54Ss)
	- [5.1 Graph Traversals - BFS & DFS -Breadth First Search and Depth First Search (youtube.com)](https://www.youtube.com/watch?v=pcKY4hjDrxk)
	- [Graph Theory and Searching Algorithms (BFS, DFS) - Algorithms & Data Structure #14 (youtube.com)](https://www.youtube.com/watch?v=9gOljeZlCAs)
	- [Depth-First Search Visualization (usfca.edu)](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
	- [Breadth-First Search (usfca.edu)](https://www.cs.usfca.edu/~galles/visualization/BFS.html)

### Weighting (TODO)

All the graphs we've seen so far have been unweighted.
### Ropes
....
- [Rope Datastructure (youtube.com)](https://www.youtube.com/watch?v=xhFzu3Wm0Qs)
- [Read a paper: Ropes-- an alternative to Strings (youtube.com)](https://www.youtube.com/watch?v=8SVdEnJkBE0)

## Collections
...
### Gap Buffers
[Gap buffer - Wikipedia](https://en.wikipedia.org/wiki/Gap_buffer)

### Hashmaps/dictionaries/hashtables

Details about these data structures can be found in the dedicated page on [[Hashing]]

## Additional References
- [MIT 6.851 Advanced Data Structures, Spring 2012 - YouTube](https://www.youtube.com/playlist?list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf)
- [Learn Data Structures and Algorithms for free 📈 (youtube.com)](https://www.youtube.com/watch?v=CBYHwZcbD-s)