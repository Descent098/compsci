---
title: Concurrency & Parallelism
date: 2024-01-19
aliases: 
tags:
---
Most code is serial. This means it runs from top to bottom, and it runs one line at a time. There are various different ways that we can break this paradigm and run our code "multiple lines" at a time. There are 4 main ways this is discussed:

1. Asynchronous programming
2. Parallel programming
3. Multi-processing
4. Multi-Threading

Unfortunately these terms can mean something different in different contexts, so instead I will talk about 2 more general categories asynchronous vs parallel.
## Async/Await
Asynchronous execution (which I'll shorten to async), is a way of running a program where you can **switch back and forth** between tasks that are executing ([concurrent programming](#concurrency-vs-parallelism)). For example if you have a function that has to access a database, but other operations can run while you're waiting for that to finish, then you could asynchronously call the database, and run the other tasks in the meantime. Once the database call is finished, you can switch back to the method running the database call. With the following pseudocode:

```
async function getData(){
	return callToDatabase() // Takes a while to run
}

async function doBackgroundTasks(){
	// Do stuff in the background
}

function main(){
	a = getData()
	doBackgroundTasks()
	// Wait for a to finish if it's still not done after background tasks
	await a 
}
```

In this case we have 2 keywords:

1. `async`: Used to declare a function as asynchronous
2. `await`: Used to make the program stop and wait for an asynchronous function to finish

\*Please note I represented `main()` as a synchronous function, some runtimes will still require you to declare it as an `async` function, and `await` it somehow

If we were to look at a diagram of how this would execute it would be something like this:
![[async-diagram.excalidraw|1200]]

However it's also possible to have:

![[async-diagram-2.excalidraw|1200]]
In this case `getData()` finished early, so when `await` is called it's already done and execution continues. The most complicated parts of asynchronous programming are that things can run out-of-order. This is a benefit in terms of performance, but can often lead to bugs (such as those discussed in [[#Dining Philosophers]]).

Here is an example in python:

```python
import random
import asyncio # Used to make managing async functions easier

async def get_data():
    print("get_data() running")
    await asyncio.sleep(random.randint(1,15))
    print("get_data() done")
    return "data"

async def do_background_tasks():
    print("do_background_tasks() running")
    ... # Do stuff in the background
    print("do_background_tasks() done")

async def main():
    # A TaskGroup is an easy way to start multiple async functions
    async with asyncio.TaskGroup() as tg:
        a = tg.create_task(get_data())
        tg.create_task(do_background_tasks())
    
    print(a.result())

if __name__ == "__main__":
    asyncio.run(main())
```

Which prints:

```
get_data() running
do_background_tasks() running
do_background_tasks() done
get_data() done
data
```

## Multiprocessing
When your operating system starts an application it will setup a process. This process is the running version of the application. As such, one method of parallelism that exists is to run multiple processes. This is often a good choice if you want the tasks not just to run more efficiently, but if there are external time factors that mean you must run them simultaneously. 

If you imagine for example you write an application that is an automated scraper to purchase tickets to a concert. Let's say you want to buy 5 tickets, and you have 10 seconds before they sell out. With threads you would switch back and forth between each thread, so if each thread takes a while to startup, you may miss your window. Instead if you launch 5 separate processes, they all can run on separate cores on a machine, and run simultaneously. Please keep in mind that not all things in computing that are called multiprocessing work this way. Sometimes multiple processes can end up running on the same core, and at that point it's no better than threading (arguably worse since it uses more resources than threads). 

Here is an example of multiprocessing in python (please note that since each process is a separate python instance it is possible for this to run in parallel or concurrently depending on architecture):

```python
from multiprocessing import Process
import time
import random

def task(identifier: int):
    print(f"Started #{identifier} at {time.ctime()}")
    time.sleep(random.randint(0,10))
    print(f"Ended #{identifier} at {time.ctime()}")
    

if __name__ == '__main__':
    processes = []
    for index in range(10):
        process = Process(target=task, args=(index,))
        process.start()
        processes.append(process)

    for process in processes:
        process.join()
```

Since they all run at the same time they can finish in any order. For example here is what I got:

```
Started #0 at Tue Dec 10 03:28:47 2024
Started #1 at Tue Dec 10 03:28:47 2024
Started #2 at Tue Dec 10 03:28:47 2024
Started #3 at Tue Dec 10 03:28:47 2024
Started #4 at Tue Dec 10 03:28:47 2024
Started #5 at Tue Dec 10 03:28:47 2024
Started #6 at Tue Dec 10 03:28:47 2024
Started #7 at Tue Dec 10 03:28:47 2024
Started #8 at Tue Dec 10 03:28:47 2024
Started #9 at Tue Dec 10 03:28:47 2024
Ended #4 at Tue Dec 10 03:28:48 2024
Ended #3 at Tue Dec 10 03:28:49 2024
Ended #0 at Tue Dec 10 03:28:50 2024
Ended #2 at Tue Dec 10 03:28:51 2024
Ended #5 at Tue Dec 10 03:28:52 2024
Ended #6 at Tue Dec 10 03:28:53 2024
Ended #7 at Tue Dec 10 03:28:53 2024
Ended #8 at Tue Dec 10 03:28:54 2024
Ended #9 at Tue Dec 10 03:28:55 2024
Ended #1 at Tue Dec 10 03:28:57 2024
```


## Threading
Multi-threading is a technique in which you create multiple "threads". A "thread" is a separated area inside a process that lets you run code. There are two types of threads:

1. **OS threads**: This is a heavy weight type of thread that is created in the operating system Kernel, and managed by it
2. **Green/virtual Threads**: These are "threads" that are much more lightweight and are managed in user space, typically by the language they are implemented in

For the most part in modern programming green/virtual threads are used, and so that's what I'll discuss here. In many implementations threads are essentially a second copy of a program that will run until some sort of "yield" point, at which point they will let another thread run. These yield points can be implemented various ways, such as with hardcoded time-slots, or more controllable implementations like "interrupts" (i.e. switch when doing I/O like opening a file). There are a few different approaches to creating threads, and thread management. For creating threads there are 2 main common approaches. 

### start() and join()

The first is to manage threads individually. For example you pass the thread a callback function (something to run), with it's arguments, and then `start()` the thread. From there you let it run, and `join()` the thread to wait for it to end. For example lets say you have an app where you select a bunch of files to download, then you have to digitally "sign" with your information to confirm you downloaded the files. Let's say you need to get the URL's for each file before you can download them. You could do something like:

```
function getFileURLs(filenames: list[str]){
	result = []
	for file in filenames{
		fileURL = getURLbyFilename(file)
		result.add(fileURL)
	}
}

function downloadFiles(fileURLs:list[str]){
	for url in fileURLs{
		download(url)
	}
}

function sign(name:str, token:str) -> bool{
	isValid = signForDocment(name, token)
	return isValid
}

function main(){
	filenames = ["file1.png", "file2.jpg", "file3.docx"]
	thread = Thread(callback=getFileURLs, arguments = [filenames])

	thread.start()
	// Can ask the user for their name and token while getting the URL's
	name = askUserforName()
	token = getTokenByName(name)
	 
	valid = sign(name, token)
	
	if valid{
		result = thread.join()
		downloadFiles(result)
	} else{
		error("Unable to sign for files")
	}
}
```

Here is an example of this code in python:

```python
import threading
import random
import time
from typing import List
import uuid

def download(filename:str) -> bool:
    print("inside download()")
    time.sleep(random.randint(0,1))
    print("Finishing download()")
    return random.choice([True, False])

def sign_for_docment(name:str, token:str) -> bool:
    print("inside sign_for_docment()")
    time.sleep(random.randint(0,1))
    print("Finishing sign_for_docment()")
    return random.choice([True, False])

def get_file_urls(filenames:List[str], result:List[str]) -> List[str]:
    print("inside get_file_urls()")
    time.sleep(random.randint(4,15))
    for file in filenames:
        result.append(f"/path/to/{file}")
    print("Finishing get_file_urls()")
    return result

def download_files(fileURLs:list[str]):
    print("inside download_files()")
    for url in fileURLs:
        download(url)
    print("Finishing download_files()")

def sign(name:str, token:str) -> bool:
    print("inside sign()")
    isValid = sign_for_docment(name, token)
    print("Finishing sign()")
    return isValid

def ask_user_for_name() ->str:
    print("inside ask_user_for_name()")
    print("Finishing ask_user_for_name()")
    return "name"
    
def get_token_by_name(name:str) -> str:
    print("inside get_token_by_name()")
    print("Finishing get_token_by_name()")
    return str(uuid.uuid4())
    
if __name__ == "__main__":
    filenames = ["file1.png", "file2.jpg", "file3.docx"]
    result = []
    thread = threading.Thread(target=get_file_urls, args=(filenames,result))
    thread.start()
    print("thread is running!")
    name = ask_user_for_name()
    token = get_token_by_name(name)
    valid = sign(name, token)
    if valid:
        thread.join()
        print("thread is done!")
        download_files(result)
    else:
        raise Exception("Unable to sign for files")

```

### Thread Manager
In every language there are various thread managers. Thread managers (often called executors or pools) are systems that help you run threads and manage them more easily. In python there are several thread managers, a common one is [`ThreadPoolExecutor`](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor). This can be used to run a ton of tasks much more simply without having to explicitly `start()` and `join()` each thread:

```python
import time
import random
import concurrent.futures

def task(identifier:int):
    print(f"inside task() #{identifier}")
    time.sleep(random.randint(0,10))
    print(f"done task() #{identifier}")

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    for index in range(20):
        pool.submit(task, index)
```

Which prints something like:

```
inside task() #0
inside task() #1
inside task() #2
done task() #2
inside task() #3
inside task() #4
done task() #1
inside task() #5
done task() #0
inside task() #6
done task() #5
inside task() #7
done task() #4
inside task() #8
done task() #7
inside task() #9
done task() #3
inside task() #10
done task() #6
inside task() #11
done task() #11
inside task() #12
done task() #12
inside task() #13
done task() #10
inside task() #14
done task() #9
inside task() #15
done task() #15
inside task() #16
done task() #8
inside task() #17
done task() #16
inside task() #18
done task() #13
inside task() #19
done task() #17
done task() #14
done task() #18
done task() #19
```

## Concurrency vs Parallelism

Concurrent execution is just switching back and forth between threads/processes, whereas parallel execution is when multiple threads/processes are running at the same time. In order for something to be parallel there needs to be support at a hardware level. Additionally parallelism tends to take more resources, and is harder to [[#Synchronization|synchronize]]. For example a system with multiple processor cores for separate processes to run in.

![[concurrency-parallelism.excalidraw|1200]]

## Synchronization
Accessing variables can become complicated in concurrent and parallel contexts. There a major issue can come up, data races. A data race is when multiple processes try to access and modify shared data. This can lead to the data being corrupted, or just incorrect. As a simple example consider a shopping system that processes payments:

```
current_id

function increment_id(){
	global current_id
	for 0..1000{
		current_id += 1
	}
}

function main(){
	t1 = thread(increment_id)
	t2 = thread(increment_id)
	t3 = thread(increment_id)
	t4 = thread(increment_id)
	
	t1.start()
	t2.start()
	t3.start()
	t4.start()

	t1.join()
	t2.join()
	t3.join()
	t4.join()
	
	print(f"Final counter value: {counter}")
}

```

In python it's much harder than other languages to cause a race condition. Python has a mechanism called the [GIL](https://realpython.com/python-gil/) that makes it hard to cause one. Instead I modified the counter example with a "shared resource" (a text file). Here is the code:

```python
import time
import random
import threading

def increment():
    with open("counter.txt") as c:
        counter = int(c.read())
        print(f"Opened with count = {counter}")
    time.sleep(random.random())
    for _ in range(1000000):
        counter += 1
    with open("counter.txt", "w+") as c:
        c.write(str(counter))
    print(f"Closed with count = {counter}")
    
threads = []
    
for _ in range(15):
    t = threading.Thread(target=increment)
    t.start()
    threads.append(t)

for t in threads:
    t.join()
```

With the output:

```
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Opened with count = 0
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
Closed with count = 1000000
```
### Synchronization Primitives
When programming there are many synchronization primitives, which are tools used to make synchronization possible in concurrent and parallel contexts. This helps avoid data races. 

#### Terminology
When looking at synchronization it's worthwhile to know a few terms to be able to understand some of the content:

- **Mutual Exclusion**: This is a fancy term to say that only 1 thing can happen at a time. If you have code that is mutually exclusive, then two threads cannot access it simultaneously.
- **Deadlocks/Livelocks**: When you manage to make your code get stuck, usually because every thread is waiting on a resource that has been permanently locked by accident. A deadlock means there are no operations running in the threads, a livelock is when there are operations running, but the thread can't continue
- **Sections**: When talking about code in concurrent/parallel contexts we often break it up into discrete sections
	- **Entry Section**: The code that happens before the critical section, essentially the code that runs to setup the critical section, typically this is where any [[#Mutex|locks]] are acquired
	- **Critical section**: This refers to a part of the code that accesses a resource that is shared. Essentially this part of the code that does work, and should have a limited number of threads accessing it
	- **Exit section**: The code that cleans up after the critical section, this typically is where [[#Mutex|locks]] are released

#### Dining Philosophers
Avoiding data races is important, but another problem comes up depending on your solution, **Deadlocks/Livelocks**. This is when you implement a synchronization system that makes it possible to get "stuck" (locked). As an example imagine table where there are philosophers sitting at a table. The philosophers can either `think()` or `eat()`. When philosophers want to `eat()` they must pick up a chopstick on the right, and left hand side of them:

```
function think(){
	... // think 
}

function eat(){
	while not both_copsticks:
		if is_available(right_chopstick) and not_in_hand(right_chopstick):
			pickup_chopstick(left_chopstick)
		if is_available(left_chopstick) and not_in_hand(left_chopstick):
			pickup_chopstick(left_chopstick)
	eat_food()
	put_down_chopsticks(left_chopstick, right_chopstick)
}
```

Lets say you have a table of 6 philosophers, and 6 chopsticks. It is possible to have a situation where every chopstick is picked up, but no one can `eat()`, meaning they all get stuck in a loop waiting for another chopstick. This stuck state is called a deadlock:
![[dining-philosophers.excalidraw|1200]]
If each philosopher enters `eat()` at the same time, they will pick up the chopstick to their right, and be endlessly stuck waiting for the left chopstick, which will never be available. This analogy can apply to any **shared resource**. 
#### Mutex
A mutex (or spinlock) is a synchronization primitive that allows threads/processes to `acquire()` (or `lock()`) and `release()` (or `unlock()`) it. You can imagine this like being given a key to enter. When you `acquire()` the key, you can enter, and then you `release()` the key back to the next person who needs it. The most important thing to keep in mind is that for a mutex to work properly, the `acquire()` must be **atomic**. This is typically done in hardware, and ensures that it is not possible for two threads to simultaneously `acquire()`. For example:

```
counter = 0 // Shared resource

function increment(){
	// Entry section
	mutex.acquire() // Wait on mutex
	 
	// Critical section
	counter += 1
	
	// Exit section
	mutex.release()
}

threads = []

for 0..5{
	t = Thread(increment)
	t.start()
	threads.add(t)
}

for thread in threads{
	thread.join()
}

```

Here is that same example in python:

```python
import threading

# Shared resource
counter = 0

# Create a lock
mutex = threading.Lock()

def increment_counter():
    global counter
    for _ in range(1000):
        # Entry Section
        mutex.acquire() # Acquire the lock before modifying the shared resource
        try:
            # Critical Section
            counter += 1
        finally:
            # Exit section
            mutex.release() # Release the lock

# Create multiple threads
threads = []
for _ in range(5):  # 5 threads
    t = threading.Thread(target=increment_counter)
    threads.append(t)
    t.start()

# Wait for all threads to complete
for t in threads:
    t.join()

print(f"Final counter value: {counter}")
```

Keep in mind you can have multiple **separate** mutexes if you need them.

#### Condition Variable
A condition variable is a system to signal to threads and wake them up. This comes up typically in the **producer-consumer (or readers-writers) problem**, where you have producers that produce data that consumers need to consume (i.e. email clients producing emails that the email server needs to send). In these cases the threads for the consumer spend a lot of time waiting if there is nothing being produced. 

There are typically two solutions to this:

1. **Long polling**: Waiting by making the consumer threads `sleep()` for a set amount of time, and then checking if they have anything to do
2. **Condition variables**: An efficient system that is used to `notify()` threads, and wake them up only when they have something to do

A condition variable will have 2 functions typically `notify()` and `wait()`. `wait()` will make the thread sit idle until `notify()` is called from somewhere else in the code. This is much more efficient than sleeping for a set interval (long polling) for a few reasons:

1. Even a sleep like 100ms can massively slowdown systems of thousands of threads
2. Consumer threads run **exactly** when they need to, without any wasted time

Here is a long polling example:

```python
import threading
import time

# Shared data
data = []
mutex = threading.Lock()  # Lock to protect shared data

# Producer function
def producer():
    global data
    for i in range(5):  # Produce 5 items
        with mutex:
            print(f"Producer: Adding item {i}")
            data.append(i)  # Produce an item
        time.sleep(1)  # Simulate time taken to produce

# Consumer function
def consumer():
    global data
    for _ in range(5):  # Consume 5 items
        while True:
            with mutex:
                if data:  # Check if there's data to consume
                    item = data.pop(0)
                    print(f"Consumer: Consumed item {item}")
                    break
            time.sleep(0.1)  # Wait before checking again (long-polling delay)

# Create and start the threads
producer_thread = threading.Thread(target=producer)
consumer_thread = threading.Thread(target=consumer)

producer_thread.start()
consumer_thread.start()

# Wait for both threads to complete
producer_thread.join()
consumer_thread.join()

print("All items have been produced and consumed.")
```

You can see in this example  the consumer is waiting a set amount of time between checking if data is available. Compare this to the condition variable version:

```python
import threading
import time

# Shared data
data = []
condition = threading.Condition()

# Producer function
def producer():
    global data
    for i in range(5):  # Produce 5 items
        with condition:
            print(f"Producer: Adding item {i}")
            data.append(i)  # Produce an item
            condition.notify()  # Notify the consumer
        time.sleep(1)  # Simulate time taken to produce

# Consumer function
def consumer():
    global data
    for _ in range(5):  # Consume 5 items
        with condition:
            while not data:  # Wait until there is data
                condition.wait()
            item = data.pop(0)  # Consume the item
            print(f"Consumer: Consumed item {item}")

# Create and start the threads
producer_thread = threading.Thread(target=producer)
consumer_thread = threading.Thread(target=consumer)

producer_thread.start()
consumer_thread.start()

# Wait for both threads to complete
producer_thread.join()
consumer_thread.join()

print("All items have been produced and consumed.")
```

This is much more efficient because the consumer context manager (`with condition` inside `consumer()`), only runs when `condition.notify()` is called in `producer()`, otherwise the `consumer()` thread is doing nothing and wasting no CPU time sleeping. 

#### Semaphore
A semaphore is similar to a [mutex](#mutex), but it allows for more than 1 thing to access the critical section/shared resource at a time. For example let's say you can have up to 3 threads simultaneously accessing a server, you can setup a semaphore with an initial value of 3, and at any given time at most 3 threads will access it.

Semaphores have various implementations, but in general they have some sort of a `value` (sometimes called `count`), which is an integer that indicates how many things can currently access the critical section/shared resource. In these examples I also used a [condition variable](#condition-variable) to wake up threads, but you can also just sleep after the operations (though this can slow down your program a lot, and cause many out-of-order executions). Semaphores have 2 methods, `wait()` and `signal()` (sometimes called other things like `notify()` instead of `signal()`). 

Wait will:
```
class Semaphore{
	function wait(){
		// Wait for resource to be available
		while self.value <= 0{
			self.condition.wait()
		}
		self.value -= 1 // Decrement now you're allowed access to the resource
	}
}
```

Meaning you have to sit and wait, until `Semaphore.value` goes above 0, at which point you're allowed in to the critical section/allowed to accessed shared resource, and need to decrement the value as you enter. Now that you're done waiting, once finished with the critical section/access you will then `signal()` to indicate you're done:

```
class Semaphore{
	function signal(){
		self.value += 1
		self.condition.notify() // Tell another thread to wake up
	}
}
```

For example if you initialize a semaphore with a count of 3, then have 1 thread currently accessing the critical section/resource, you would end up with a count of 2 on the semaphore, until the thread is done. 

```python
import threading

class Semaphore:
    """
    Semaphore represents a counting semaphore that controls access to a shared resource."""
    def __init__(self, initial_value:int):
        """Initialize the semaphore with the given initial value

        Parameters
        ----------
        initial_value : int
            The initial value of the semaphore (essentially the capacity)
        """
        self.value = initial_value
        self.mutex = threading.Lock()
        self.condition = threading.Condition(self.mutex)

    def wait(self):
        """Decrement the semaphore value, blocking if it would go below zero"""
        with self.condition:
            while self.value <= 0:
                self.condition.wait()
            self.value -= 1  # Decrement semaphore value under mutex protection

    def signal(self):
        """Increment the semaphore value and wake one waiting thread"""
        with self.condition:
            self.value += 1  # Increment semaphore value under mutex protection
            self.condition.notify()  # Wake up one waiting thread
```
\**Please note that this semaphore is "generally" safe, but I would recommend using [`threading.Semaphore()`]([threading — Thread-based parallelism — Python 3.13.1 documentation](https://docs.python.org/3/library/threading.html#threading.Semaphore)) for any serious code*

You can then test this out with:

```python
import time

def worker(semaphore, id):
    print(f"Worker {id} waiting...")
    semaphore.wait()
    print(f"Worker {id} working...")
    time.sleep(1)
    print(f"Worker {id} done.")
    semaphore.signal()

sem = Semaphore(2)  # Semaphore with an initial value of 2

threads = [threading.Thread(target=worker, args=(sem, index)) for index in range(50)]

for thread in threads: # Start threads
    thread.start()

for thread in threads: # Wait for them all to finish
    thread.join()
```

You will watch the threads run 2 at a time:

```
Worker 0 waiting...
Worker 0 working...
Worker 1 waiting...
Worker 1 working...
... // rest of workers waiting
Worker 48 waiting...
Worker 49 waiting...
Worker 0 done.
Worker 1 done.
Worker 2 working...
Worker 3 working...
Worker 2 done.
Worker 3 done.
Worker 4 working...
Worker 5 working...
... // Rest of workers taking turns
Worker 46 done.
Worker 47 done.
Worker 48 working...
Worker 49 working...
Worker 48 done.
Worker 49 done.
```



## Additional Resources

- Dining philosophers
	- [Dining Philosopher Problem Using Semaphores - GeeksforGeeks](https://www.geeksforgeeks.org/dining-philosopher-problem-using-semaphores/)
	- Solutions
		- Peterson's Algorithm
			- [Peterson's Algorithm in Process Synchronization - GeeksforGeeks](https://www.geeksforgeeks.org/petersons-algorithm-in-process-synchronization/)
			- [Peterson’s Solution](https://www.youtube.com/watch?v=gYCiTtgGR5Q)
			- [Peterson's Solution-Critical Section Problem-Operating Systems-20A05402T](https://www.youtube.com/watch?v=7H4TNsxAlf4)
		- Synchronization
			- [The Volatile and Synchronized Keywords in Java | Atomic Variables | Java Multithreading | Geekific](https://www.youtube.com/watch?v=71dgtPrbToE)
			- Mutex
				- [how does a Mutex even work? (atoms in the computer??)](https://www.youtube.com/watch?v=1tZhmTnk-vc)
				- Implementing Mutexes
					- [Test-and-set - Wikipedia](https://en.wikipedia.org/wiki/Test-and-set)
					- [Implementing a Mutex](https://gist.github.com/mepcotterell/8df8e9c742fa6f926c39667398846048)
					- [Lec6-MutexImplementation](https://www.cs.princeton.edu/courses/archive/fall08/cos318/lectures/Lec6-MutexImplementation.pdf)
					- [CSCI 0300/1310: Fundamentals of Computer Systems](https://cs.brown.edu/courses/csci0300/2022/notes/l21.html#:~:text=Internally%2C%20a%20mutex%20can%20be,lock()
				- [Mutex vs Synchronization](https://www.youtube.com/watch?v=jkRN9zcLH1s)
					- [Mutual exclusion - Wikipedia](https://en.wikipedia.org/wiki/Mutual_exclusion)
				- Implementations & Documentation
					- [Using mutexes - IBM Documentation](https://www.ibm.com/docs/en/aix/7.1?topic=programming-using-mutexes)
					- [LOCK — Assert LOCK# Signal Prefix](https://www.felixcloutier.com/x86/lock) ([x86](https://en.wikipedia.org/wiki/X86_assembly_language) instruction for locking)
						- [c++ - What does the "lock" instruction mean in x86 assembly? Stack Overflow](https://stackoverflow.com/questions/8891067/what-does-the-lock-instruction-mean-in-x86-assembly)
			- Condition Variables
				- [Condition variables in C](https://www.youtube.com/watch?v=0sVGnxg6Z3k)
				- [How to write a multithreaded webserver using condition variables (Part 3)](https://www.youtube.com/watch?v=P6Z5K8zmEmc)
				- [Pthread Condition Variables](https://www.youtube.com/watch?v=eQOaaDA92SI)
				- [Operating Systems Lecture 14: Condition variables](https://www.youtube.com/watch?v=rMpOfbaP2PQ)
				- [c - How exactly does the wait function work wrt to condition variables - Stack Overflow](https://stackoverflow.com/questions/47804723/how-exactly-does-the-wait-function-work-wrt-to-condition-variables)
				- [single.dvi](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf)
				- [pthread_cond_wait](https://pubs.opengroup.org/onlinepubs/7908799/xsh/pthread_cond_wait.html)
			- Semaphores
				- [What is a semaphore? How do they work? (Example in C)](https://www.youtube.com/watch?v=ukM_zzrIeXs)
				- Written by me
					- [semaphore in go](https://github.com/Descent098/projects-experiments/blob/master/Languages/Go/concurrency-testing/semaphore/semaphore.go)
					- [semaphore in python](https://github.com/Descent098/projects-experiments/blob/master/Languages/Python/concurrency-testing/semaphore/sem.py)
				- [Semaphore | Signaling, Telegraphy, Flags | Britannica](https://www.britannica.com/technology/semaphore)
				- [Semaphores in Process Synchronization - GeeksforGeeks](https://www.geeksforgeeks.org/semaphores-in-process-synchronization/)
- Race conditions
	- Dangers of getting this wrong
		- [how a simple programming mistake ended 6 lives (youtube.com)](https://www.youtube.com/watch?v=41Gv-zzICIQ)
			- [The Worst Computer Bugs in History: Race conditions in Therac-25 | BugSnag Blog](https://www.bugsnag.com/blog/bug-day-race-condition-therac-25/)
	- [Programming embedded systems: Race conditions and how to avoid them - Embedded.com](https://www.embedded.com/programming-embedded-systems-race-conditions-and-how-to-avoid-them/)
	- [Fantastic Bugs and How to Resolve Them Ep2: Race Conditions | Rookout](https://www.rookout.com/blog/fantastic-bugs-and-how-to-resolve-them-ep2-race-conditions/)
	- [Hacking Banks With Race Conditions | by Vickie Li | The Startup | Medium](https://medium.com/swlh/hacking-banks-with-race-conditions-2f8d55b45a4b)
- [Amdahl's law - Wikipedia](https://en.wikipedia.org/wiki/Amdahl%27s_law)
- Threads
	- [Multithreading Code - Computerphile](https://www.youtube.com/watch?v=7ENFeb-J75k)
	- [CPU Cores VS Threads Explained](https://www.youtube.com/watch?v=hwTYDQ0zZOw)
	- [FANG Interview Question | Process vs Thread](https://www.youtube.com/watch?v=4rLW7zg21gI)
	- [Process vs Thread](https://www.youtube.com/watch?v=Dhf-DYO1K78)
