#authentication and logging decorators
# ──────────────────────────────────────────────
# decorators.py
# Contains reusable decorators for the Banking App.
# Currently includes:
#   - log: tracks function calls, inputs, results, and time taken
#         and saves them to log.txt
# ──────────────────────────────────────────────

import time
from datetime import datetime

LOG_FILE = "log.txt"  # central log file path, easy to change


def log(func):
    """Decorator that logs function calls to a log file.
    
    Captures:
        - Timestamp of the call
        - Function name
        - Time taken to execute
        - Input arguments
        - Return value (result)
    """
    def wrapper(*args, **kwargs):
        # Record the start time and current timestamp before the function runs
        start_time = time.time()
        timestamp = datetime.now().strftime("%Y-%m-%d  %H:%M:%S")

        # Execute the original function and capture its result
        result = func(*args, **kwargs)

        # Calculate how long the function took to run
        end_time = time.time()
        time_taken = end_time - start_time

        # Build the log message with all captured details
        log_message = f"""
.................LOG.............................
Timestamp:     {timestamp}
Function:      {func.__name__}
Time Taken:    {time_taken} seconds
Input:         args={args}, kwargs={kwargs}
Result:        {result}
.................................................
"""
        # Append the log message to the log file
        with open(LOG_FILE, "a") as file:
            file.write(log_message)

        return result  # return the original function's result to the caller

    return wrapper  # return the wrapper so it replaces the original function