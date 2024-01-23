---
aliases:
  - binary
  - hex
title: Number Systems (binary & hex)
---

When we count we traditionally use base 10. Base 10 gives us 10 values before we shift digits. We go from 0-9, and then we shift 1 digit left, and start from 0 in the far right column again:
```
0
1
2
...
9
10
11
...
19
20
21
...
99
100
```

If we pad the left hand side of the columns with 0's (which doesn't change the value) this pattern becomes more apparent:

![[decimal-table.png]]

We end up essentially with a table. So if we think about it the number 123 is actually:

- 1 one hundred
- 1 twenty
- 1 three

Each representing the hundreds, tens and one's columns of the above table. As such when a value "spills over" it increases the digit by adding 1 to the left column of whatever overflows. 

## Powers of 10 decimal
Another way to view this is in powers of 10. I have put the minimum value of each column on top, and the maximum below:

![[decimals-in-tens.png]]


This same model will be used later to help explain other base numbering systems like binary and hex.

## Binary
Computers communicate using electrical signals. With these electrical signals we can represent 2 states, on and off. If the voltage is above 5v we can call it "on" or "true", and if the voltage is below that we can call if "off" or "false". With this system it lends itself towards binary. Binary is a base 2 numbering system. Base 2 means instead of 0-9 we have only 2 values, 1 and 0. In binary these 1's and 0's are called bits. We can have different sized binary numbers. For example this is a 4 bit binary number `0110` (6 in decimal), or an 8 bit number `01100110` (102 in decimal), 8 bits is traditionally called a byte. 

When you first start looking at the numbers, binary is easiest to think of as a kind of [truth table](https://www.techtarget.com/whatis/definition/truth-table) format. Let's start with an example, the number 123 is `0b1111011`. the `0b` is a **base indicator**, when we write numbers we need to know what system we're using, the b indicates we're in binary. So `123` is  `1111011`. How do we do this conversion? 
### Converting decimal numbers to binary

First we need to construct a table like we saw with the [[#Powers of 10 decimal]] representation we're going to start from `2^0`, and we want to go to `2^x` where `x` is the largest power of 2 that does not exceed our number. For 123 `2^7 = 128` which is larger than 123, so `2^6` is the magic number we want. For the steps I will include `2^7` to help show the steps clearly, but this wastes 1 bit of space storing our number. So let's build our table:

| 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|  |  |  |  |  |  |  |  |

Which we can convert to whole numbers from the exponents to make it easier:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|  |  |  |  |  |  |  |  |

There is a video walkthrough of this section if you are interested. 

<iframe width="100%" height="400" src="https://www.youtube.com/embed/dOCHpNxWmUU?si=i00QppeSxB_1Ehk2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### The continuous subtract Algorithm
As we saw with decimal earlier, we can break up numbers into their constituent parts, so for 123 it's 1 one hundred 2 tens (twenty) and 3 ones (three). Now we have the table we are going to do the same, but broken up into powers of 2. Our algorithm for creating a binary number from a decimal is:
1. Keep track of a value called remainder, at the start remainder is equal to our decimal number
2. Start from the far left of the table for each cell
	1. if remainder < current cell: put a 0 and go one cell to the right
	2. else: put a 1 subtract the current cell value from remainder, and then move to the right
3. Continue step 2 until you reach the end of the table. 

You can do this by [[Algorithms & Complexity (TODO)#String Building (TODO)|building a string]], and converting it back to a number later. The pseudocode for this would be:
```
function convertToBinary(number){
  remainder = number
  
  // Assume 8 bits
  cells = [128,64,32,16,8,4,2,1]

  result = "0b" // Where we will add bits 1 at a time to
  
  for currentCell in cells{
    if remainder < currentCell{
      result.append("0")
    } else {
      result.append("1")
      remainder = remainder - currentCell
    }
  }
  
  // Some function to take the string representation and convert to a number
  return stringToBinary(result) 
  
}


```

For example the algorithm in python:

```python
def convert_to_binary(number:int) -> str:
  remainder = number # Step 1

  # Assume 8 bits
  cells = [128,64,32,16,8,4,2,1]
  result = "0b" # Where we will add bits 1 at a time to

  for currentCell in cells:
    if remainder < currentCell: # Step 2.1
      result += "0"
    else: # Step 2.2
      result += "1"
      remainder = remainder - currentCell
  return result

x = convert_to_binary(123) # 01111011

# Converts back to decimal
int(x, 2) # 123

# Can also create an int from a binary number
0b01111011 == 123
```


**First Cell**

So to start:

```
Remainder = 123
Current Cell = 128
remainder < Current Cell
```

So we follow step 2.1

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0  |  |  |  |  |  |  |  |

**Second Cell**

Next:

```
Remainder = 123
Current Cell = 64
remainder > Current Cell
```

So we follow step 2.2

```
remainder = remainder - Current Cell
          = 123 - 64
          = 59
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 |  |  |  |  |  |  |

**Third Cell**

Now we continue:

```
Remainder = 59
Current Cell = 32
remainder > Current Cell
```

So we follow step 2.2

```
remainder = remainder - Current Cell
          = 59 - 32
          = 27
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 |  |  |  |  |  |

**Fourth Cell**

```
Remainder = 27
Current Cell = 16
remainder > Current Cell
```
So we follow step 2.2
```
remainder = remainder - Current Cell
          = 27 - 16
          = 11
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 | 1 |  |  |  |  |

**Fifth Cell**

```
Remainder = 11
Current Cell = 8
remainder > Current Cell
```
So we follow step 2.2

```
remainder = remainder - Current Cell
          = 11 - 8
          = 3
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 | 1 | 1 |  |  |  |

**Sixth Cell**

```
Remainder = 3
Current Cell = 4
remainder < Current Cell
```
So we follow step 2.1

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 | 1 | 1 | 0 |  |  |

**Seventh Cell**

```
Remainder = 3
Current Cell = 2
remainder > Current Cell
```
So we follow step 2.2

```
remainder = remainder - Current Cell
          = 3 - 2
          = 1
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 | 1 | 1 | 0 | 1 |  |

**Eighth Cell**

```
Remainder = 1
Current Cell = 1
remainder > Current Cell
```
So we follow step 2.2

```
remainder = remainder - Current Cell
          = 1 - 1
          = 0
```

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |

So we're now left with `01111011`, and we just add our indicator to the front and we have `0b01111011`. Here's a familiar way to visualize this process:

![[binary-table-123.png]]
You know you've done it right if your remainder is 0.

### Converting binary numbers to decimal
Now we've seen how to convert number to binary, let's see about how to convert numbers from binary to decimal.
#### The continuous add Algorithm  (TODO)
Now we have the table our algorithm for creating a binary number from a decimal is:
1. Keep track of a value called result, at the start result is equal to 0
2. Start from the far right of the table for each cell
	1. if the value is a 1, add the value of the current cell to result
	2. If the value is 0, go to the next cell
3. Continue step 2 until you reach the end of the table

The pseudocode for this would be:

```
function convertToInteger(binary_number){
  remainder = number

  // Assume 8 bits
  cells = [1,2,4,8,16,32,64,128]

  // Create an array of the 0's and 1's of the number
  values = binary_number.split("") 

  result = 0 // Where we will add 1 cell at a time

  // Iterate the cells and values at the same time
  for value, currentCell in values, cells{
	 if value == 1{
		 result += currentCell
	 } 
    
  }
  
  return result
}

convertToInteger("01111011")
```

For example the algorithm in python:

```python
def convert_to_decimal(number:str) -> int:
  result = 0 # Step 1

  # Assume 8 bits
  cells = [128,64,32,16,8,4,2,1]
  cells = cells[::-1] # Reverse cells (simulates iterating from the right to left)

  number = number.replace("0b","") # Remove binary indicator

  for index, currentCell in enumerate(cells): # Step 2
      if index == len(number): # Is at end
          break  # Break so we don't double-add last value

      # Get current Value from end of list
      if number[-1*(index+1)] =="1": # Step 2.1 
          result += currentCell
  return result

x = bin(0b01111011)

convert_to_decimal(x) # 123
```

...

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |

So we start with `0b01111011`




![[bin-to-int-123.png]]

### Signed vs Unsigned (TODO)
...
### Decimals and Fractions (TODO)
...
### Operations in Binary
...
#### Addition
....
#### Subtraction 
...
#### Multiplication
...
#### Division
...
### Other Novel uses
...
#### Binary Enumeration
...
#### Booleans 
...


## Hexadecimal
...
### Operations in Hex
...
#### Addition
....
#### Subtraction 
...
#### Multiplication
...
#### Division
...
### Other Novel uses
...
#### Addressing
...