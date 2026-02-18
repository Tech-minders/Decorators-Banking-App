#are powerful tool for modifying or extending 
#the beahaviout of functions without changing their code 
#they are used to add functionality to existing functions in a clean and re usable way,

import time

def time_taken(func):
    def wrapper(*args,**kwargs):
        start_time=time.time()
        print(f"excecuting {func.__name__}...")
        result=func(*args,**kwargs)
        end_time=time.time()
        print(f"time taken. {end_time-start_time} seconds")
    return wrapper

def my_dec(func):
    def wrapper():
        print
@my_dec
def say_hello():
    print("Hello")

@my_dec
def my_name_is():
    print ("my name is John")  

my_name_is()          