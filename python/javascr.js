---
type: Page
title: JS
aliases: null
description: null
icon: null
createdAt: '2025-04-22T07:33:48.478Z'
creationDate: 2025-04-22 10:33
modificationDate: 2025-12-10 09:22
tags: []
coverImage: null
---

### Try it out

| Exercise       | [Intro to js](https://app.capacities.io/home/c682853a-ba62-4984-8401-7fd7887237d9)           |
| :------------- | :------------------------------------------------------------------------------------------- |
| Excercise      | [conditionals exercise](https://app.capacities.io/home/603b0267-3346-43fe-89e3-9598990abfa0) |
| Excerice Scope | [scope](https://app.capacities.io/home/eeceeef6-9928-4d05-b6ed-6f0fed11140c)                 |

### Meetings

| date          | tag             | links                                                                                                                                                            |
| :------------ | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| June 4, 2025  | intro js,       |                                                                                                                                                                  |
| June 10, 2025 | Functions       | [link](https://drive.google.com/file/d/1zuNRI05gIfepVtZSX9fhonlcoP6gbFZ8/view)                                                                                   |
| June 11, 2025 | Funcitons,Scope | [link1](https://drive.google.com/file/d/1x48uiJlmsmaL91cCkkzq1rnTStWIF5hQ/view), [link2](https://drive.google.com/file/d/19GwLKEBUcGryTmkqOmZ2ujAc3c9e_UMh/view) |
| June 17, 2025 | Objects         | [link1](https://drive.google.com/file/d/1kePfnl_9uKUdNgHjhaRnmWohZsWwa0RQ/view)                                                                                  |
|               |                 |                                                                                                                                                                  |
|               |                 |                                                                                                                                                                  |

# JS2 MEETINGS

| date              | tag                                         | links                                                                                                                                                                                    |
| :---------------- | :------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| November 19, 2025 | Intro to js                                 | [link](https://drive.google.com/file/d/1fuPiMcf2aHAoeA_o4vWTBll4zf32s7M3/view) , [link2](https://drive.google.com/file/d/1LWsbykbS0AVsEHJ-aM2nBjqNJ9eFjaL-/view)                         |
| November 20, 2025 | Intro to Js,Variables                       | [link](https://drive.google.com/file/d/1rVVP3T4PH0XxSlDV3a0cL122NzHEID4z/view),[link2](https://drive.google.com/file/u/0/d/1FYLMBntDUXksOlkZyTHfFj4mEDRjL_In/view?usp=drive_web&pli=1)   |
| November 21, 2025 | Datatypes in Js,Numbers, String             | [link](https://drive.google.com/file/d/1SaIyRKZyvhLFCqP4306duponSeywFh8j/view?usp=drive_web)                                                                                             |
| November 24, 2025 | console,type of,template string             | [link1](https://drive.google.com/file/d/1ElASJARiozvA_CL3ZSi_4rU5-IR3xjH0/view?usp=drive_web) , link2                                                                                    |
| November 25, 2025 | oparators,comparision operators,truth table | [link](https://drive.google.com/file/d/1Ur-S-3eTQxIrS7pRSHupftuk5mUV24-w/view) ,[link2](https://meet.google.com/aww-qpym-kgg?authuser=0)                                                 |
| November 26, 2025 | conditions,Truthy ​false                    | [link1](https://drive.google.com/file/d/1_68utuaTxNywqLY2DDJkamWS-NokHFX3/view?usp=drive_web&authuser=1),[link2](https://drive.google.com/file/d/1o3TR5Yvk4w4ZZnvaBmEk6bK0hU_83UUP/view) |
| November 27, 2025 | function                                    |                                                                                                                                                                                          |


# What is JS

Java Script is **high level** **programming language ->** (communicate or send instruction to your computer).

- [ ] Machine Language<Binary Language>

- [ ] Assembly Language<Based on processor>:<JMP,ADD>>

- [ ] Low Level <c,c++>,compiled,speed<os windows, browser>

- [ ] High Level <JS,Python> most use an interpreted.

Difficult<**your first language**>, How to think like software<>



# WHAT CAN I CREATE WITH JS

- [ ] WEB Developer<FRONT END>. web application: <Browser>

- [ ] Back End Developer<Node js,DINO,BUN JS>

- [ ] Mobile APP<IONIC,REACT-NATIVE>

- [ ] CLI<Command Line APPs>

 Everything that can be made with js will eventually be made with js  



## UBUNTU INSTALLING NVM

STEP 1

```bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

```

! if this command fails and you get an error curl not install

```bash
sudo apt install curl
```

STEP 2

```bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```



STEP3

Check if nvm is installed



```bash
nvm 
```

if you get an error 

```bash
cd;
ls -a ## Look for a file called .bashrc
## if you dont file the file create it 
touch .bashrc ## if you dont find the file
code .bashrc ## remove everthing and paste the examplebashrc.
cd;
source .bashrc
nvm ## you should see nvm
```



# NVM (Node Version Manager):

Nodejs -> Library enables to write js (code) in your machine<pc>:




# Where I Can I write JS 



## 1.<Directly on the Web>

open any website. Right click to get options

Open developer tools 

Open console and start writing js.

## 2.<WEB:<page>>:

When learning web fundamentals you a css file. or using a style tag.

using the script tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>Body</h1>
    </div>
    <script>
      console.log("Hello world");
    </script>
  </body>
</html>

```

Using a separate file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* Selector: element */
    </style>
    <link rel="stylesheet" href="./css/w3.css" />
    <link rel="stylesheet" href="./css/makeup.css" />
  </head>
  <body>
    <!-- flex shrink -->
    <!DOCTYPE html>
    <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
      <body>
        <div class="w3-row">
          <div class="w3-col s12 m6 w3-green w3-center">
            <p>s3</p>
          </div>
          <div class="w3-col s12 m6 w3-dark-grey w3-center">
            <p>s9</p>
          </div>
        </div>
        <!-- <script>
          console.log("Hello world");
        </script> -->
        <script src="./index.js"></script>
      </body>
    </html>
  </body>
</html>

```



# Using NODEJS

1.Directly in nodejs

```bash
node
```

2.This will run js on your desktop

```bash
node <js_file_path>
```

# JS CODE STRUCTURE

When writing js code. you will be writing in a file with the extension <.js>

> File extension is a way to communicate with the operating system to decide who handles what file.

Coding is giving instruction to a computer in an orderly manner.

Programming is giving instruction to a computer in an orderly manner in order to solve a problem.

You will be writing statement. Each statement will be separated by semi <;>

**A statement is a single instruction.**



```javascript
console.log("Hello world"); // Single instruction // Statement
console.log("I am a new programmer"); // Instruction no 2
console.log("I LOVE JS"); // instruction no 3

```



---


# VARIABLES AND DATA-TYPES

#### 

What is a **variable**. And why it is usefull.

find x=> x=3+20 => 23 

A variable are used to store  data values. **This when you reffer something by something else.**

in math:

x=5

m=2

z=m+x z=7

In js you use the **let,var,const** when creating a variable

- [ ] var <! don't use var>

- [ ] let 

- [ ] const <use this for constants>

```javascript
let k = 24; // k is a variable

let m = 40;

let age = 47;

const pi = 3.142; //pi

```

**Comments**

Enable you to   document or create notes for  your code.Js ignores comments and there are ment for humans.

1.In-line comments[On the same line]



```javascript
// Double slash
let age; // This stores the age of  a person
```

2.Multi-line line comments

```javascript
/*
Multi line comments
Multi line comments
*/
```

**Rules for naming variables**

- [ ] Spaces are not allowed in variable names;

- [ ] Only letters,digits,undescores(_) and dollar signs are permitted in variable names

- [ ] A variable can not start with a number

- [ ] Variables are case sensitive.

- [ ] You can not used reserved keywords in js to name variables.

![image](https://capacities-files.s3.eu-central-1.amazonaws.com/private/fd881dfb-27f4-4341-9a98-989f26b42a92/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260219%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260219T082053Z&X-Amz-Expires=43200&X-Amz-Signature=a83af60b2f9169c497f19014a3cdf2214c422bd1d3bd6108e3e1d4d638b71b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
[image - Notes](https://app.capacities.io/home/fd881dfb-27f4-4341-9a98-989f26b42a92)


Difference between declaring a variable and assignment

```javascript
// Declare a variable ?
let m;
let pi;
// Declare a variable<m:> let or var or const

let x = 20;
//Declare variable AND ASSIGN IT A VALUE

let k;
// DEclare a variable:JS k create memory

k = 30;
// Assiigned k a value

```



# DATA TYPES

> To solve problems using your programming language you need
​different data-types.
​Whats App-> send messages -> message text (string).
​Point Of Sale->numbers to handle calculations eg discount,total profit etc, words(text) stock inventory eg kiwi,passion juice etc. In Stock or Out Stock Boolean(true,false).



Is a classification that specifies the of **data a variable can hold in programming language.**

In js we have two types of Data-Types.

- [ ] primitive

- [ ] Object

### Primitive(original or primary) Data Types

These are the most basic types of data. They are **immutable**

- [x] Number

- [x] String <Most problematic datatype for new developers>

    > In js a string is created by using either "" / double quotes , '' /Single quotes `` /Back ticks. Any value that lacks any of these its not a string



- [x] Boolean<True,False>

- [x] Undefined:<Not been created in memory>

- [x] Null:<You can set something to null: Lack of a value>

```javascript
let age = 32; // age
const pi = 3.142; //value of pi

// declare a variable
// let <x>=Data-type(numner,string,null,boolen)

//string, '':single quotes,"":doubel quotes,``:back ticks
let myName = "daniel";
let myName2 = "daniel";
let myName3 = `Daniel`;

let storyOfMyLife = "i woke up earyl int he morngint...age..";

//

//boolean:true or false
let iWentToHighSchool = true;
let iplayGuitar = false;

//undefined: please dont use undefined<LANGUAGE>
let x = undefined; // i don't

let y; // undefined

//Null: lack of a value
let k = null; // This is ok

```



```bash
// Numbers
// Eccomerce POINT SALE IN SUPERMARKET
let totalItems = 300;
let todayTotalSale = 30000;
let todaySpecialDiscount = 0.02; //float

//camelCase
// this is my first day in programming
// thisIsMyFirstDayInProgramming //Camel

// 1213243242323423
let bigestNumber = 121324435654345654645343457567657657868678674564543654645756757532453465646546758567543435423234234353455467466575453412341263543534534;
let newNumber = bigestNumber * bigestNumber * bigestNumber;

let negativeNumber = -3000;
let floatingNumber = 345.23424; //Floating point number

//Infinity JS has a limit to the biggest number it  can store
// Big number infinity
console.log(totalItems);
console.log(todayTotalSale);
console.log(todaySpecialDiscount);
console.log(newNumber);

//Number(Create a variable) For
//1. positive number and console log IT
//2.A negative number and console log IT
//3.Positive Floating number and console log
//4.Negative floating point number and console log it

//String
let customerFeedBack = "Awsome store"; //Double quotes
//let customerFeedBack2 = Awsome store //Not string
let employeeOfTheMonth = "Samuel  mwangi";

let plasmeTvDescription = `
   This is a cool plasma tv.
   it has resolution 4k.
   Dont "Quote me" Double
   Buy one 'Quote your self'
`; //To represent a string.Back Ticks
let specialString = 'This "is cool"'; // Single quotes
let employeeDiscount1 = "23.45"; //Not a number this a string
let employeeDiscount2 = 23.45; //Number

//Small Exercise For creating strings
/*
For all create a variable first.Then console.log latter
1. Create a string variable 
    Use double quotes
   to hold your favourite book.
2. Create a string using single quotes
   to hold your favourite actore and inside
   the single quote have double quotes
   for the best movie he acted
3. Create a multiline string of your favourite
   scene or part in the movie. USing back ticks
4. Create a string to hold your favourite number
*/

/*
Boolean Datatype  
is used to store only one of two states 
true, false
*/

const iSingle = true;
//const iSingle = "true";
const hasACar = false;

console.log(iSingle);
console.log(hasACar);

/*Test undefined*/
/*Explicitly set a variable to undefined*/
let thisIsUndefined = undefined;

/*my var is undefined because 
 you have not given it a value
*/
let myNewVar;

console.log(thisIsUndefined);
console.log(myNewVar);

let myNullVariable = null;
console.log(myNullVariable);

```



**Number**

Represents integer or floating<decimal> types of data.

```javascript
const age2=23   // Number Positive Integer
let myScore=23.45 // Floating point
let another=-230  // Number Negative

```

**String**

Is a sequence of characters.

> Syntax: <let,const,var> <name of the variable> = '<value>' OR "<value>" or
​ `<value>` 

```javascript
let myName ="Daniel Karanja" // String
let cat='Garfield'   // String
let email=`dan@dan.com`  // String
let age="z"  // String Not A Number
```



**BOOLEAN**

Represent a logical entity that can have two values. `true` or `false`



```javascript
let is_single=true
const is_married=false
let did_you_do_ksce=true
```



**UNDEFINED**

> **Do not set a variable to undefined**. Let js<engine> set something to undefined for you. 

Absence or a value. A variable which has been declare and not assign it a value its value becomes undefined.

```javascript
let age // The value of age is undefined
// This is not good code
```

**NULL**

Null means the absence of a value. You can explicitly **set a variable to null.**

```javascript
let marks=null
// Input Marks.
```



### CONSOLE.LOG()

Giving out instruction to computer. Garbage in garbage out 

The instruction given out should be very precise and to the point. When you begining As developer

when you give instructions.You need a way to check in everytime or when something goes wrong.

--> Worker<build a house>: 

1. Take some cement: 100kg

2. mix with water.  20litres

3. take 100 stones.  ... etc 

--> Worker<build a house>: 

1. Take some cement: 100kg:

2. Tell me once this done:[done]

3. mix with water.  20litres

4. Tell me once this instruction is done:[done]

5. take 100 stones.  ... etc 

6. Tell me once this instruction is done:[done]

The console.log **method:command:**  enables us to log anything we want at any particular time.

You can use console log to print out string and your variable values.You seprate each log in line by a coma `,` 

```javascript
const pi = 3.142; // First instrution: create varaibl
console.log(pi);
// log multiple inone line separate with coma
console.log("pi is= ", pi);
let radius = 10; // create variable assignt 10
console.log("radius is= ", radius);
// radius = radius * 2;
const circleArea = pi * radius;
// do this callcuateion
console.log(" pi * radius =", circleArea, "Area of circle");
console.log(
  "if pi is=",
  3.1442,
  " And radius is=",
  radius,
  " Then area is",
  circleArea
);

```



# TYPE OF:Operator

It is very important to know the type of variable you are using. you don't use strings for calucation etc.

```javascript
let is_married = true; // boolean
console.log("type of is married ", typeof is_married);
let age = 90; // number
console.log("type of is age ", typeof age);
let k = null; // null
console.log("type of is k ", typeof k);
let m; // undefined
console.log("type of is m ", typeof m);
let myname = "Daniel";
console.log("type of is myname ", typeof myname);

```



# TEMPLATE STRING

Js template string is a special string in js which can have **embeded data from other data types.**

we use the backticks. **It can also have multi lines text.**

```javascript
let story = `
I did this , i did that , idasd dsadsadsadda
sdas
dsadsa
sdadsads
`;

let age = 30;
console.log(`age is ${age}`);
console.log("age is==>", typeof age);
console.log(`age is===> ${typeof age}`);
console.log(`age+1 is===> ${age + 1}`);
let name = "Samson";
console.log("name is", typeof name);
console.log(`name is ${typeof name}`);
let is_single = true;
console.log("is_single type", typeof is_single);
console.log(`is_singe type ${typeof is_single}`);

// My name is Samson and my age is age
// concatination Is joining two ore more strings
let info = "My name is " + name + " and my age is " + age;
console.log("info 1=>", info);
//Contanation you can use template string
// template string()
let info2 = `My name is ${name} and my age is ${age}`;
console.log("Info 2=>", info2);

```



---

# JS OPERATORS

js operators used to perform types of mathematical and logical computation.

- [x] Assignment operator `=`

- [x] Addition `+`

- [x] Subtraction `-`

- [x] Multiplication `*`

- [ ] Division `/`

- [ ] Modulus `%`

- [ ] Comparison operators (Return Boolean) `>,<,>=,<=,==,===,!=,!==`

- [ ] Not `!`

```javascript
// Assigment opertor
let x = 20;
// Declre x and equting it to 20
console.log(`X is ${x} And type of x is ${typeof x}`);
x = "Hello world"; // changed x from number to string
console.log(`X is ${x} And type of x is ${typeof x}`);

let k = 10;

let y = 20;

//Addition k+y
k + y;
console.log(`K is ${k} Y is ${y} k+y=${k + y}`);
let z = k + y;
//Declaring a variable z And asssing it a value
// The value has to be calculated
console.log(`K is ${k} Y is ${y} z=k+y then z is${z}`);

// multiplication
let multi = z * k;

//division
let div = multi / 30;

```

### Comparison operators

Unlike the operators above. Conditional operators are used to compare two or more values and then return a **boolean**. <True or False>



- [x] equality `==`

- [x] Strict Equality `===`

- [x] Inequality `!=` 

- [x] Strict Inequality `!==`

- [x]  Greater than `>`

- [x] Greater than or equal to `>=`

- [x] Less than  `<`

- [x] Lest than or equal to `<=`



The Not(!)

in js stands for not. Is flippin:

!false =true

!true=false

Truth table 

![image](https://capacities-files.s3.eu-central-1.amazonaws.com/private/b7ce3d08-7103-4fa3-821b-2f43b1c1f353/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260219%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260219T082053Z&X-Amz-Expires=43200&X-Amz-Signature=f0c916b0d52dc43d20f5e4e6c5f7d1eb674dddea5ebdd07a8e3df1219e483dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
[image - Notes](https://app.capacities.io/home/b7ce3d08-7103-4fa3-821b-2f43b1c1f353)

### Truth Table
​

![image](https://capacities-files.s3.eu-central-1.amazonaws.com/private/826d726a-c77e-4b1a-89d2-2a7c4924d0db/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260219%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260219T082053Z&X-Amz-Expires=43200&X-Amz-Signature=213c5ddfc08fabd928c4599c118346f4bbea9dd714e0170c8689b35ca9f74dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
[image - Notes](https://app.capacities.io/home/826d726a-c77e-4b1a-89d2-2a7c4924d0db)

### Other comparison operators

- [ ] And `&&`

- [ ] Or `||`

- [ ] Not `!` 

![image](https://capacities-files.s3.eu-central-1.amazonaws.com/private/1ea34db6-3389-46bb-a739-0af69ef5ff5b/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260219%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260219T082053Z&X-Amz-Expires=43200&X-Amz-Signature=1ae9a4998bcb77bf323e7621472b11e1075128ef55dc2636c5cfe0e14276d453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
[image - Notes](https://app.capacities.io/home/1ea34db6-3389-46bb-a739-0af69ef5ff5b)

![image](https://capacities-files.s3.eu-central-1.amazonaws.com/private/04602a61-f02c-4d8a-afd5-cff316182795/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260219%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260219T082053Z&X-Amz-Expires=43200&X-Amz-Signature=39b9910e5730480d90b4d2881757e780890ff18795d4b39832c90f3305e9fda3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
[image - Notes](https://app.capacities.io/home/04602a61-f02c-4d8a-afd5-cff316182795)

# FALSEY AND TRUTHY

boolean operator which <True, False>;

Truthy<Variable> and Falsey<Variable>

Falsey:

- [ ] false

- [ ] 0 

- [ ] -0

- [ ] "" : empty string

- [ ] null 

- [ ] undefined

- [ ] NaN :<Not a Number>

- [ ] 



---

# CONDITIONAL OPERATORS

A conditional **statement** allow to control the flow of your code by making decision based on conditions.

- [ ] if: true then execute the block

- [ ] else if:true execute block of code

- [ ] else: Execute block of code if (if:fail,else if:fail)

- [ ] ternary operator

- [ ] shorthand operators



Conditions you write then in a block of code:`{/*Block of code*/}`



```javascript
/*

if(<true or truthy>){
  --> this will run or be executed
}

if(<false or falsey>){
   ---> this will not be executed
}
 */

let age = 25;
let age2 = 20 + 5;

console.log(age); //25 //age

let something = age > 18; //true
let something2 = true;

console.log(something); //
console.log(typeof something); //boolean

// if() True:
if (age > 18) {
  console.log("An adult can drink");
}
//
if (age) {
  console.log("Age is truthy");
}

let name = null;

if (name) {
  console.log("Falsey will not run");
}

```



```javascript
/*

if(<true or truthy>){
  --> this will run or be executed
}

if(<false or falsey>){
   ---> this will not be executed
}
 */

let age = 12;

if (age > 18) {
  console.log("You can dring alcohol");
} else {
  console.log("You are a child");
}

```

elsif

```javascript
//as one UNIT: it will stop after the first true evalulation
//if none are true it will execute else: if else is there
// It is not a must you have the else statement
if (age < 10) {
  console.log("You are a baby");
} else if (age > 25) {
  console.log("You can marry if you wan't");
} else if (age > 18) {
  console.log("You can drink alcohol");
} else if (age > 50) {
  console.log("You are an ancestor");
} else {
  console.log("Everything failed");
}
```



---

# FUNCTIONS

Block of code. designed to perform a particular task. /*Block of code*/. Functions allow you to write 

> function(key word) <name>(any name) (<paramaters>) {<rest of your code
​:executed when function is called>}

### Task create function that says hello world

```javascript
//declare a funciton
function coolFu() {
  console.log("Hello world, My first function");
}
```

Next you need to call the function. 

> Calling a function is telling it to execute what is in the curly braces or block of code

How to call it

> name<name you gave it>(<parameters>)
​coolFu() //called the function

```javascript
//declare a funciton
function coolFu() {
  console.log("Hello world, My first function");
  console.log("insturction 1");
  console.log("instruction 2");
}

//

// if you weant your function to do
// the work it is emant to dod() call is
// when you call a function.
coolFu();

```

```javascript
function fx(x) {
  let term1 = -1 * x * x;
  let term2 = 6 * x;
  let term3 = -11;

  let ans = term1 + term2 + term3;

  console.log(ans);
}

console.log("call fx(2)");
fx(2);
console.log("");

console.log("call fx(-10)");
fx(-10);
console.log("");

function transformer(voltage, current) {
  // step up-> 250 >1000
  // step down-> 1000>250
  const ratio = 20;

  let newVoltage = voltage / ratio;
  let newCurrent = current * ratio;

  console.log("new voltage", newVoltage);
  console.log("new Current", newCurrent);
}

```

> In js if a function does not have a return statement. **It returns undefined**
​If you want your function to return you must have a **return statement.**

```javascript
function fx(x) {
  let term1 = -1 * x * x;
  let term2 = 6 * x;
  let term3 = -11;

  let ans = term1 + term2 + term3;

  // console.log(ans);
  return ans;
}

function transformer(voltage, current) {
  // step up-> 250 >1000
  // step down-> 1000>250
  //console.log("transfomer function called");
  const ratio = 20;

  let newVoltage = voltage / ratio;
  let newCurrent = current * ratio;

  // console.log("new voltage", newVoltage);
  // console.log("new Current", newCurrent);
  return `new voltage ${newVoltage} new current ${newCurrent}`;
}

```

**The return stament** **stop function execution** **and** **exits the function.**



### You can assign a **function call** to a variable:

```javascript
function fx(x) {
  if (typeof x !== "number") {
    console.log("x must a number");
    return;
  }

  let term1 = -1 * x * x;
  let term2 = 6 * x;
  let term3 = -11;

  let ans = term1 + term2 + term3;

  // console.log(ans);
  return ans;
}

// called a function and assigned to a variable
let sol = fx(-2);

```

When you **call a function** and assign it to a variable the value of the **variable will be whatever the function returns**

A function can call another function.

```javascript
function fx(x) {
  // ! ==
  if (typeof x !== "number") {
    console.log("x must a number");
    return; //undefined
  }

  let term1 = -1 * x * x;
  let term2 = 6 * x;
  let term3 = -11;

  let ans = term1 + term2 + term3;

  // // console.log(ans);
  return ans;
}

function calArea(x) {
  let r = fx(x);
  console.log(`When x is ${x} r is ${r}`);
  return 3.142 * r * r;
}
```



You can also have a function calling itself <snake can start eating its own tail>. When we have this **behaviour in our code we call it recussion.**



---

# SCOPE

It determines **accessibility or visibility of variables and functions** in different parts of the code.

- [x] Global Scope

- [x] Block Scope: in {}

- [x] Local Scope:variables defined inside a function are in local scope

- [x] Lexical Scope



**global scope**
​variables or functions declared outside of any function or block are in the global scope.

```javascript
let globalVar="I am global person"

function coolFunction(){
    console.log("Cool function called")
    console.log(globalVar)
}

console.log(globalVar)

function changes(){
    globalVar="To Something Else"
}

function logGlobalVar(){
    console.log(globalVar)
}

coolFunction()
changes()
logGlobalVar()
```

**LOCAL SCOPE/BLOCK CODE**

Variables declare inside a function if,while, {} are in the local scope and can only be accesed within that function or block of code

```javascript

function localFunction(){
    let testVar="Hello Local to Funcciton"
    let globalVar="fsfdfsd"
     console.log(testVar)
     let m="sdfsdf"
     if(true){
        let m="this is a var"
        console.log(testVar)
        if(true){
            console.log(m)
        }
     }

     console.log(m)
}

console.log(testVar)
```

**LEXICAL SCOPE**

A function scope is determined by where its **written in the code,** not where it is called from.

```javascript
function outerFunction() {
  let v1 = "From the outer function";
  console.log("Outer function called");
  function innerFunction() {
    console.log("Inner function called");
    console.log(v1);
  }

  innerFunction();
}

```



---

# STATEMENT AND AN EXPRESSION

Statement and expressions are fundamental concepts that define how code is written and executed. The might look the same but serve a different purpose.

### EXPRESSION

Is any valid unit of code that produces a value: Expressions are evaluated to yield results.

- [ ] Comparison `x>5` :true or false

- [ ] Operations `23+23+30/30`

- [ ] Variable reference `x`

- [ ] **Function Call** `myfunction()` : your function will give you whatever it returns

### STATEMENT:Action

Unlike expressions which return a value. Statement defines a **particular action to be carried out**. The statement is at times a block of code

- [ ] Variable declaration.  `let x=23`

- [ ] conditions `if(true){}`

- [ ] Function declaration `function name(){}`

- [ ] Function name usage `name`

- [ ] Loop `while(){};for(){}`



### You can assign a function to a variable



```javascript
//named function
function areaCircle(r) {
  return r * r * 3.142;
}

let c1 = areaCircle; // statement or an expression
//assigned a function to a variable
```

So in the example above c1 is the function areaCircle

```javascript
// function defined and bound to the variable
let c2 = function recPerimeter(l, w) {
  return 2 * l + 2 * w;
};

// function defined and bound to the variable
// Anonymous Function <Function without a name>
let c3 = function (l, w) {
  return 2 * l + 2 * w;
};

```

Types of functions

- [ ] Named function 

- [ ] Anonymous Function

- [ ] Arrow function

- [ ] Higher Order <>

- [ ] Recursive Function

```javascript
//arrow function
let c4 = (l, w) => {
  return 2 * l + 2 * w;
};

const c5 = (l, w) => {
  return 2 * l + 2 * w;
};

const c6 = (l, w) => 2 * l + 2 * w;
```

---

# CALL BACK()  

You can pass a function as an argument to another function. This function can be called or executed from the other function.

- [x] Assign a function to a variable

- [x] You can pass a function as an argument to another function 



```javascript
function fx(x) {
  let term1 = -x * -x;
  let term2 = 6 * x;
  let term3 = -11;
  let sol = term1 + term2 + term3;
  return sol;
}

function hx(x) {
  let term1 = 2 * x * x;
  let term2 = -5 * x;
  let term3 = 3;
  let sol = term1 + term2 + term3;
  return sol;
}

let sol1 = hx(20);
let sol2 = fx(sol1);

console.log(sol2);

//call back function
function cb(x, fx) {
  let term1 = 2 * x * x;
  let term2 = -5 * x;
  let term3 = 3;
  let sol = term1 + term2 + term3;
  let sol2 = fx(sol);
  return sol2;
}
```



# Recursive Function

Scenario where you have a **function calling itself.**

I want you to print hello world 10 times. 100 , 1000 , 2000. Work smatter not hadder.

**To be lazy as possible.** 

```javascript
function printHello(n) {
  console.log("Hello world");
  console.log("n is", n);

  if (n <= 0) {
    console.log("Finished");
    return;
  }

  // calls itself
  let k = n - 1;
  printHello(k);
}

```

Factorial recursive function

```javascript
function factotorial(n, sol) {
  if (n <= 1) {
    console.log("finished");
    console.log(sol);
    return sol;
  }

  let sol2 = sol;
  if (sol2 === undefined) {
    sol2 = n;
  }

  let k = n - 1;
  let ans = sol2 * k;
  console.log("ANS", ans);

  factotorial(k, ans);
}
```

---

# LOOP

A loop allows you to run the same block of code over and over again until an exit condition is met.

- [ ] While

- [ ] For

> while(condition){}  // if condition is true execute // false stop executing

```javascript
// /WHILE LOOP
// WHILE(TRUE) {EXECUTED}
// WHILE(FALSE){/NO EXECUTION/}

// ITERATION: SINGLE RUN THROUGH THE BLOCK OF CODE WITH SOME CONDITIONS
// EXECUTE SOMETHING 5 TIMES:

let n = 5;

// 5>0 itteration
// 4>0 ,3,2,1,0
while (n > 0) {
  console.log("Hello world ", n);
  n = n - 1;
}


```

> FOR LOOP

---

---

# OBJECTS

Objects are collection of related data and functionality. Syntax of key value pair. 

> let,const <variable_name> {<key value pair,>}

The Key can be a number or a string

The value can be any other datatype<primitive,objects> and also funciton.



- [x] Create an Object

- [x] Print Out The Whole Object <read object>

- [x] Read individual value

- [x] Update An Object

- [x] Add new Stuff to an object



```javascript
let studentA = {
  name: "Noel",
  age: 18,
  pet: "Dog",
  grade: "A",
  is_married: false,
};

let studentB = {
  name: "Hosea",
  age: 22,
  pet: "Bird",
  grade: "C",
  is_married: true,
};

```

Print Out The Whole Object <read object>

```javascript
console.table(object)
console.log(object)
```

READING FROM AN OBJECT

- [x] DOT NOTATION `.`

- [x] BRACKET NOTATION `[]`

```javascript
let studentA = {
  name: "Noel",
  age: 18,
  pet: {
    name: "snow",
    age: 3,
    gender: "female",
    breed: "chihuahua",
  },
  grade: "A",
  is_married: false,
  0: "This is zero",
  "hair color": "Greeen",
};

console.log(studentA.name);
console.log(studentA["name"]);

console.log(studentA.is_married);
console.log(studentA["hair color"]);

//
console.log(studentA[0]);

// use dot notation print out the name of the dog
console.log(studentA.pet.name);
console.log(studentA["pet"]["name"]);
let noelPet = studentA.pet;
console.log(noelPet.name);

```



> **The bracket notation allows us to use variables to access an object.**



[Google Drive: Sign-in](https://drive.google.com/file/d/1HnKgWsFQXMvoEtMlBzxCgRtYQrFqMoqS/view)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/a8404e5b-688c-4adb-8726-34b4b43e4bc4)

October 8, 2024



### Writing In Object(Updating)




**METHODS**

A method is function inside an object.

```javascript
let employee1 = {
  firstName: "Sam",
  secondName: "Mwangi",
  fullName: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
  logThis: function () {
    console.log(this);
  },
};

// If you want to access the object use
// this

let employee2 = {
  firstName: "Donald",
  secondName: "Trump",
  fullName: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
  logThis: function () {
    console.log(this);
  },
};

```



## ARRAYS

An array is a special type of **object.** where data is stored sequential <1,2,3,4,...>. The keys of the array are numbers and they are sequential starting from 0.

> let,const <variable_name>=[boolean,number,object,array,]



```javascript
let ar = [];

let obj = {
  length: 0,
  push: function (value) {
    let obj = this;
    obj[length] = value;
    obj.length = obj.length + 1;
    return obj.length;
  },
  pop: function () {
    let el = this[this.length - 1];
    delete this[this.length - 1];
    this.length = this.length - 1;
    return el;
  },
};
```

[W3Schools.com](https://www.w3schools.com/js/js_array_methods.asp)[W3Schools.com - Notes](https://app.capacities.io/home/38a33dc3-03cb-495a-93fa-85b5fefd9992)


## ARRAY ITERATION

```javascript
let ar = ["Alvin", "Sherlin", "Joy"];

function printStudents() {
  for (let i = 0; i < ar.length; i = i + 1) {
    console.log(`Student at ${i + 1} is ${ar[i]}`);
  }
}
```




SPECIAL METHODS

All of them return   a new array..

- [ ] MAP

- [ ] FILTER 

- [ ] REDUCE



[Google Drive: Sign-in](https://drive.google.com/file/d/1XTcFZ3eOBDC-5aPSueL_oD4tjzelObY9/view)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/464f7658-47e0-4794-af62-fdcc222134af)

October 9, 2024

```javascript
const ar1=[2,4,7,3,5]

const ar2=ar1.map(add2)

function add2(n){
    return n+2
}

function newArr(){
    ar2=[]
    for(let i=0;i<ar1.length;i++){
      let el=ar1[i]
      ar2.push(el+2)
    }
    return ar2
}

function customMap(ar,callback){
    let newArr=[]
    for(let i=0;i<ar.length;i++){
        let el=ar[i]
        newArr.push(callback(el))
    }
    return newArr
}
```

FILTER

```javascript
const ar=[1,2,3,4,5,6,7,8,9]
let newraa=ar.filter(isEven)
function isEven(n){
    console.log("number given is ",n)
    if(n%2 ===0){
        return true
    }
    return false
}

```



Reduce

```javascript

let ages=[18,19,20,30,40,23,45]

// reduceserr
let sum=ages.reduce((acc,n,i)=>{
    console.log(`For key ${i} age is${n} acc is ${acc}`)
    if(i>3){
       
        let sum=n+acc
        return sum  
    }
    return 0
},30)
```

[Loop Object Practice](https://app.capacities.io/home/583044d0-4c4b-4b43-9f47-6b7a11a778e2)

# DOM:Objects

Document Object model:



- [x] Access:<How > 

- [x] Update:<You cant update until access>

- [x] Events:<React>

How to see the dom:

```javascript
console.log(document)
```



# Access the Dom Elements

- [x] By element id: getElementById

- [x] By Classname: 

- [x] querySelector:Get only<css like syntax>

- [x] querySelectorAll:Get all that match

- [x] forms:<Read form input>



### Updating The Dom

- [x] InnerHtml:<using html text>

- [x] Create Elements Dynamically:<Append Child>



## Events(Call Back)

- [ ] Time Events

- [ ] events on html

- [ ] events on js->Click,Hovers

- [ ] Submit



---

# Restfull API

HTTP<TCP>:<Hper Text Transfer Protocol>

HTTPS:<Hyper Text Transfer Protocal>



- [ ] Http Device<is any device that has access to http client>

- [ ] Http Client <Is any software that facilitates http connection:browser,curl,postman>

- [ ] Http Server

#### HTTP REQuest

- [ ] POST:Creation Of new Data

- [ ] GET: Read 

- [ ] PUT/PATCH: Updating

- [ ] DELETE

[h1](https://app.capacities.io/home/bd48c019-4e5c-4ab6-bff1-c4f0807e0ef4)

HTTP RESPONSE:

- [ ] 100-199:Info responses

- [ ] 200-299

- [ ] 300-399:

- [ ] 400-499: 404<url:page>,401:unothorzed,403:Forbiden

- [ ] 500-599: Server Errors<>

### JSON:Javascript Object Notation




---

### Catch-up

- [ ] Functions

- [ ] Scope

- [ ] Expression And Statement

- [ ] Object:<>

#### Functions;





