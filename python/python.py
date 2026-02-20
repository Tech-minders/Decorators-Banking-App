---
type: Page
title: Python
aliases: null
description: null
icon: null
createdAt: '2024-11-25T06:16:09.242Z'
creationDate: 2024-11-25 09:16
modificationDate: 2026-02-10 09:35
tags: []
coverImage: null
---

Intro to python

[Google Drive: Sign-in](https://drive.google.com/file/d/1Q1xtz_MlVc5mJvSq7CZITaS6HpSYCCbB/view?usp=drive_link)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/f82d4da0-3907-4602-b4f0-cd7d03141b4b)


Decorators

[Google Drive: Sign-in](https://drive.google.com/drive/u/0/folders/1D4KIS-9IoOPKNVriuJvFPAh0eCYK6uuh)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/cdf763c7-4a31-4514-b61e-56a1f6804cf9)

Imports And pip
​

[Google Drive: Sign-in](https://drive.google.com/drive/folders/1D4KIS-9IoOPKNVriuJvFPAh0eCYK6uuh?dmr=1&ec=wgc-drive-globalnav-goto)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/44b30316-e267-4254-945b-48b6d2b8e68b)

Classes Introduction

[Google Drive: Sign-in](https://drive.google.com/file/d/1NutlbvG6w5zU1cyI2_6whiMvi4v3Ldq8/view?usp=drive_web)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/244de7bc-a335-46b5-acb1-87366ad6586b)

Getter And Setter Intro
​

[Google Drive: Sign-in](https://drive.google.com/file/d/1WjkCGJ9U6DAFXgN9mmZH-zWflj6KzhKr/view)[Google Drive: Sign-in - Notes](https://app.capacities.io/home/596b8041-2c4d-4d2a-9cb0-26b978bef939)

Main topics

- [ ] Intro to python

- [ ] Data-types

- [ ] Variables 

- [ ] type of

- [ ] conditional and loops

- [ ] functions

- [ ] Decorators<js->Callback>

- [ ] Imports And Pipenv

- [ ] Class

- [ ] SQL

- [ ] Connecting to a db

- [ ] CREATING AN ORM<OWN>

- [ ] USING AN ORM<Sql Alchemy>

- [ ] Node JS

# INTRO TO PYTHON

Python is high-level **interpreted** programming language known for its simplicity.

- [ ] OOP <Object Oriented Programming>

- [ ] Procedural programming

- [ ] Functional programming

Why you would wan't to learn python.

- [ ] Data science and analytics.

- [ ] Engineering <Matlab> robotics and iot <raspberry pi>.

- [ ] Machine Learning and AI.

- [ ] Back-end <Django,Flask>

- [ ] Game development <Pygame>



# Pyenv Install

pyenv: manage different version of python.

For LINUX

```bash
sudo apt install -y git gcc zlib-devel bzip2 bzip2-devel readline-devel \
sqlite sqlite-devel openssl-devel tk-devel libffi-devel make

```



Install pyenv

```bash
git clone https://github.com/pyenv/pyenv.git ~/.pyenv

```



Add to bashrc at the end if its not already there.
​Be carefull when editng the bash rc.




```bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

```



How to run python code.

You need python installed.

Two place to write python code. ie in the terminal just type python

```bash
python
```

![image](https://capacities-files.s3.eu-central-1.amazonaws.com/private/09ef852f-d034-44d0-87e0-15aef051f059/raw.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA5VTNRR6EBR56K2NK%2F20260209%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20260209T073604Z&X-Amz-Expires=43200&X-Amz-Signature=d20a6a7c560fc8f51a04f5ebd579c86fbec0ce68d96758660258a0f0c3ba7a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
[image - Notes](https://app.capacities.io/home/09ef852f-d034-44d0-87e0-15aef051f059)

Create a file with the extension `.py`

### Type of

it is very important that you know the data-type. fix bugs or working within the parameters of the data-type. The type of will enable you to get the data type.

```python
# Example variables
x = 10          # Integer
y = 3.14        # Float
z = "Hello"     # String
a = True        # Boolean
b = [1, 2, 3]   # List
c = {1, 2, 3}   # Set
d = (1, 2, 3)   # Tuple
e = {"key": "value"}  # Dictionary

# Determining the types
print(type(x))  # Output: <class 'int'>
print(type(y))  # Output: <class 'float'>
print(type(z))  # Output: <class 'str'>
print(type(a))  # Output: <class 'bool'>
print(type(b))  # Output: <class 'list'>
print(type(c))  # Output: <class 'set'>
print(type(d))  # Output: <class 'tuple'>
print(type(e))  # Output: <class 'dict'>
```

## CONDITIONS AND LOOPS

```python
age=20

# if age > 18:
#    print("You can drink")
# elif age>16 or age<18:
#     print("You are a teeneger")

ar=[1,3,4,5,67,756]

for n in ar:
    print(n)

for i in range(10):
    print(i)

k=0
while true:
    if k>10:
        break
        
```

---

# Functions



# KWARGS AND ARGS

# DECORATORS

Are powerfull tool for modifying or extending the behaviour of functions or methods without changing their code. 

- [x] functions

- [x] pass a function as an argument to another function

- [x] args and kwargs

1:Basic decorator example

```python

def my_deco(func):
    def wrapper():
        print("Before the function run")
        func()
        print("Something after the function run")
    return wrapper   

@my_deco
def hello():
    print("Hello !")

hello()

# func=my_deco(hello)
# ## 
# print(func)
# func() #'wrapper()'

```

2:Logging

When a function was called.Result of the function call

```python

def log_dec(func):
    def wrapper(*args,**kwargs):
       print("Args ",args)
       print("Kwarkgs ",kwargs)
       result=func(*args,**kwargs)
       with open('log.txt','a') as file:
         file.write(f"Called {func.__name__} result {result} \n")
       return result 
    return wrapper

@log_dec
def hello():
    print("HEllo World")
    return 123

@log_dec
def calculation():
    print("Done calculation")
    ans=3.142*5
    return ans

@log_dec
def add(a,b):
    sum=a+b
    return sum

add(12,10)

@log_dec
def say_my_name(name):
    print("My name is==>",name)

say_my_name(name="Jojo")
say_my_name("Alvin")
```



3:Time logger

```python

import time

def log_dec(func):
    def wrapper(*args,**kwargs):
       start_time=time.time()
       result=func(*args,**kwargs)
       end_time=time.time()
       diff=end_time-start_time
       with open('time.txt','a') as file:
         file.write(f"Called {func.__name__} result {result}  time {diff}\n")
       return result 
    return wrapper

@log_dec
def hello():
    print("HEllo World")
    return 123

@log_dec
def counter(n):
    for number in range(0,n):
        print(number)

counter(1000000)


```



[Decorators and Kwargs](https://app.capacities.io/home/742e245e-01eb-4f27-948c-e805508f4a3d)


# Imports And Pip

__name__ ="main"

In python we import modules<Functions , Classes>

[Import And Pipenv Exercise](https://app.capacities.io/home/9351b223-d2ab-4dc1-a6a2-c4493f0027ea)


---

# CLASS

- [x] Intro

- [x] Instance Variable <Constructor>

- [x] Getters

- [x] Setters

- [x] Class Variables And Methods

- [x] Static Variables and Methods

- [ ] Inheritance

- [ ] Polymorphism

- [ ] Encapsulation

- [ ] Magic Methods



### Introduction to classes

What are classes and their purpose.

**Blueprint for creating  objects.**

```python
class Student:
    name="test"
    email="test@test.com"
    phone="2324233342"

student1=Student()
student2=Student()

# print(vars(Student))

print(vars(student1)) #{}
print(vars(student2)) #{}
```



#### Instance Method <Constructor>

**When creating an instance of an object from a class. The constructor will be called.**

> When creating inside a class. **The method has to have** `self` **argument.**

```python
class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self):
        print("__init__=> called")

```

OUTCOMES

- [ ] What is a class

- [ ] Creating an object from class

- [ ] What is a method

- [ ] What is an intializer or constructor

- [ ] Passing Args and Kwargs when creating an instance of an object.

- [ ] An `Object` in python is different from a `Dict`

```python

# class student
# student1={
#     "name":"Sam",
#     "email":"sam@sam.com",
#     "phone":"2353454"
# }

# student2={
#     "name":"Ria",
#     "email":"ria@ria.com",
    
# }

# print(student1,student2)

#constructor, Initalizer


class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self,name,age):
        print("__init__=> called")
        print("Name==>",name)
        print("Age==>",age)
    

#An Object<DOT> and A Dictionary<Bracket>
#KWARGS
student1=Student(name="Basil",age=24) 
#ARGS
student2=Student("Joan",18) 
# ## Dot notation for objects
# #Kwargs
# student1.my_method(name="Basil")
# #Args
# student1.my_method("Noel")

```

Using the self keyword in a constructor

```python
class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self,name,age):
        print("__init__=> called")
        print("Name==>",name)
        print("Age==>",age)
        self.name=name
        self.name2=name
        self.age=age
    

student1=Student(name="Basil",age=24) 

print("Student 1",vars(student1))

student2=Student(name="Samson",age=10)

print("Student 2",vars(student1))
```



# GETTER AND SETTER

Are used to **control** access to an object's attributes. They allow one to add logic when an attribute is accessed(read) or modified(update).

> The reason you would want to use getters and setters is so that you can control access to the object attributes<Restriction><modifying or extending >. Decorator.

not using getter or setter


```python
class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self,name,age):
        print("__init__=> called")
        print("Name==>",name)
        print("Age==>",age)
        self.name=name
        self.name2=name
        self.age=age
    

student1=Student(name="Joan",age=24) 

print("Student 1",vars(student1))

## getting
print("Name",student1.name) # Reading the date

##update
student1.name="Samson"

print("Name",student1.name)

##update
student1.name=12345 ## problem

print("Name",student1.name)
```

crude getter and setter:<optimal but you can do it>

```python
class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self,name,age):
        print("__init__=> called")
        print("Name==>",name)
        print("Age==>",age)
        self.name=name
        self.name2=name
        self.age=age

    def get_name(self):
        ## control
        no=random.randint(1,10)
        print(no)
        if no>5:
            return "Cant read name"
        return self.name

    def set_name(self,name):
        if not isinstance(name,str):
            print("Name must be a string")
            return
        self.name=name
        return self.name
        
    

student1=Student(name="Joan",age=24) 

print("Name",student1.get_name())

print("student1.set_name('Samson')")
student1.set_name("Samson")

print("Name",student1.get_name())

student1.name=123

student1.set_name(1234)
print("student1.set_name(1234)")
print("Name",student1.get_name())
```



> For you to use getter and setters you have to use decorators

```python
import random

class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self,name,age):
        # print("__init__=> called")
        # print("Name==>",name)
        # print("Age==>",age)
        self._name=name  #
        self._age=age
    
    #getter for name
    @property
    def name(self):
        no = random.randint(1, 10)
        print("No gen",no)
        if no>5:
            print("Cant access name")
            return
        return self._name
    
    #getter for name
    @property
    def get_name(self):
        self._name

    @property
    def get_something(self):
        print("33","Hello world")
        return self._name
    
student1=Student("sam",10) 
print(student1.get_something)
```

setters

```python
import random

class Student:
    
    #method
    #self python => this in js
    #this ==> Object itself
    def __init__(self,name,age):
        # print("__init__=> called")
        # print("Name==>",name)
        # print("Age==>",age)
        self._name=name  #
        self._age=age
    
    #getter for name
    @property
    def name(self):
        print("Name getter")
        return self._name
    
    #setter for name
    @name.setter
    def name(self,value):
        print("Name setter called")
        self._name=value
        return self._name
    
    #Setter for name
    def update_name(self,value):
        print("Update the name")
        self._name=value
        return self._name

student_1=Student("John",20)

print(vars(student_1))

print(student_1.name)

#We are assignemt
student_1.name="Boss"
print(vars(student_1))
student_1.update_name("New Name")
print(vars(student_1))
```

@name.setter

def name(self,value):

print("Name setter called")

self._name=value

return self._name



## STATIC METHODS AND PROPERTIES

> Static Not changing. 

```python
class Car():

   #Static propert
   _maker="VW"
   _model="passat"
   
   def __init__(self,owner,color="White"):
      
      self._owner=owner
      self._color=color
      #level 1 of static
    #   self._maker="VW"
    #   self._model="passat"

joy=Car(owner="Joy",color="Pink")
daniel=Car(owner="Daniel",color="Black")

# print(vars(joy))
# print(vars(daniel))

# print(vars(joy))
# print(vars(daniel))
# print(vars(Car))
# print(vars(Car))
# print(Car._maker) #Calling in the class itself.<Instance <>>
# print(Car._model)
# print("Joy",joy._maker)
# print("Daniel",daniel._maker)

# print(Car._maker) 
# print(Car._model)

print("joy._maker==>",joy._maker) #VW
print("Car Maker ===>",Car._maker)
Car._maker="BMW"
print('Car._maker="BMW"')
print("joy._maker==>",joy._maker) #VW
print("daniel._maker===>",daniel._maker)
print("Car Maker ===>",Car._maker)
```



---

Classes Catch up

Requirements

- [ ] Datatypes 

- [ ] Decorators

- [ ] Functions

To use Classes. <Problem>

- [ ] Abstraction <><Hide the complexity>

- [ ] Code Re-usability<Only source of truth>

- [ ] Encapsulation<Bringing related data and functions together,Security>

```python
class Employee():
    #Special method<Constructor>
    #Initializer

    def __init__(self,name,email):
        print("Initilizer wascalled")
        self.name=name
        self.email=email
    

    def say_my_name(self,name):
        print("My name is ",name)
    
    def set_details(self,name,email):
        self.name=name
        self.email=email

    def change_name(self,employee,name):
        #self.name=name
        employee.name=name
    
    def print_self(self):
        print(vars(self))
        #print(vars(employee1))

employee1=Employee(name="John",email="john@gmail.com")
employee2=Employee(name="Sam",email="sam@sam.com")

# print(vars(employee1))
# print(vars(employee2))
print("Before name chage")
employee1.print_self()
print("Aftername change")
employee1.change_name(name="Joe Mbugu",employee=employee1)
employee1.print_self()

print("EMp 2 Before name chage")
employee1.print_self()
print("Emp 2 Aftername change")
employee1.change_name(name="Delilah",employee=employee2)
employee2.print_self()

```

Class is a blueprint for an object

Getter and setters provide a secure way of updating,reading class properties.

Geeter with log functionality

```python
# employee1={
#   "name":"sam",
#   "email":"sam@sam.com",
#   "salary":30000
# }

# employee1["salary"]=0
from datetime import datetime
user_name="joana"

class Employee():

    def __init__(self,name,email,salary):
        print("Initilizer wascalled")
        self.name=name
        self.email=email
        self._salary=salary

    @property
    def salary(self):
        current_time=datetime.now()
        log=f"{user_name} tried to get salary {self.name} at {current_time}"
        print(log)
        self.log(log)
        return self._salary
    
    def log(self,log):
        with open("log.txt","a") as file:
            print(f"{log}\n")
            file.write(f"{log}\n")

emp1=Employee(name="judas",email="jude@jude.com",salary=30000)

emp1.log(log="testing")

# print(vars(emp1))

# #getting salary
print(emp1.salary)
```

Setter

```python
# employee1={
#   "name":"sam",
#   "email":"sam@sam.com",
#   "salary":30000
# }

# employee1["salary"]=0
from datetime import datetime
user_name="joana"

class Employee():

    def __init__(self,name,email,salary):
        print("Initilizer wascalled")
        self.name=name
        self.email=email
        self._salary=salary

    @property
    def salary(self):
       
        log=f"{user_name} tried to get salary {self.name} at"
        print(log)
        self.log(log)
        return self._salary
    
    @salary.setter
    def salary(self,new_salary):
        log=f"{user_name} updating salary from {self._salary} to {new_salary}"
        self.log(log)
        self._salary=new_salary
        return self._salary
    
    def log(self,log):
        current_time=datetime.now()
        with open("log.txt","a") as file:
            print(f"{log}\n ")
            file.write(f"{log}\n at {current_time}")

emp1=Employee(name="judas",email="jude@jude.com",salary=30000)

emp1.log(log="testing")

print(vars(emp1))
emp1.salary=5000
print(vars(emp1))
# #getting salary
# print(emp1.salary)
```

Class Properties And Methods

Static Properties or methods

```python
class Car:
    maker="BMW"
    model="X5"
    units=[]
    sn=0

    def __init__(self,color,name):
        self.name=name
        self.color=color
        self.sn=Car.sn
        #self.__class__.bought=self.__class__.bought+1
        
        Car.units.append({"owner":name,"sn":self.sn})
        Car.sn=Car.sn+1

    @classmethod
    def display_info(cls):
       print(f"make {cls.maker} model {cls.model} bought={cls.bought}")    

    @classmethod
    def all_units(cls):
        print(cls.units)
        

sam=Car(name="sam",color='Black')
Car.all_units()
jojo=Car(name="jojo",color="red")
Car.all_units()
hana=Car(name="jhana",color="greem")
Car.all_units()
# print("sam car",vars(sam),sam.maker)
# print("jojo car",vars(jojo),jojo.maker)

# Car.maker="VW"

# print("sam car",vars(sam),sam.maker)
# print("jojo car",vars(jojo),jojo.maker)

# Car.dislay_maker()
```

---

# Inheritance And Polymorphism

Inheritance <getting something from your parents<money,cars>> .

Without inheritance.

```python
#When we dont have inheritance

#Problem <Solution>
class Square():

    def __init__(self,side):
        self.length=side
        self.width=side

    def area(self):
        return self.length*self.width
    
    def perimeter(self):
        total=self.length+self.width
        return 2*total

class Rectangle():

    def __init__(self,l,w):
        self.length=l
        self.width=w

    #methods are repeated <DRY>
    def area(self):
        return self.length*self.width
    
    def perimeter(self):
        total=self.length+self.width
        return 2*total

s1=Square(5)

# print(vars(s1))
# print("Area is->",s1.area())
# print("Perimters is->",s1.perimeter())
```

With Inheritance

```python
#When we dont have inheritance

#initilizer<>

class Another():

    def print_another(self):
        print("This is another class")

class Shape(Another):

    def __init__(self,length,width,type):
        self.length=length
        self.width=width
        self.type=type

    def print_shape(self):
        print("4,From shape class")
        print(f"5,The shape is ${self.type}")

    def area(self):
        a=self.length*self.width
        print(f"Area of {self.type}  is {a}")
        return a 

class Rectangle(Shape):
      def __init__(self,l,w):
         super().__init__(length=l,width=w,type="Rectangle")
         pass

class Square(Shape):

    def __init__(self,side):
      super().__init__(length=side,width=side,type="Square")

r1=Rectangle(10,5)
r1.area()

sq1=Square(11)
sq1.area()

sq1.print_another()

```



# Polymorphism

```python
#When we dont have inheritance

#initilizer<>

class Another():

    def print_another(self):
        print("This is another class")

class Shape(Another):

    def __init__(self,length,width,type):
        self.length=length
        self.width=width
        self.type=type

    def print_shape(self):
        print("4,From shape class")
        print(f"5,The shape is ${self.type}")

    def area(self):
        a=self.length*self.width
        print(f"Area of {self.type}  is {a}")
        return a 

class Rectangle(Shape):
      def __init__(self,l,w):
         super().__init__(length=l,width=w,type="Rectangle")
         pass

class Square(Shape):

    def __init__(self,side):
      super().__init__(length=side,width=side,type="Square")

class Circle(Shape):

    def __init__(self,radius):
        self.radius=radius
        super().__init__(length=0,width=0,type="Circle")

    #polymorphism<taking different form> <overidingf>
    def area(self):
        super().area()
        a=3.142*self.radius*self.radius
        print(f"line 46 <>")
        print(f"Area of {self.type}  is {a}")
        return a 

c1=Circle(1)

c1.print_shape()

print(vars(c1))

c1.area()
```



### BEFORE SQL LETS DO LAMBDA,DSA FUNCTIONS


