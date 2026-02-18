# ──────────────────────────────────────────────
# auth.py
# Handles login and user authentication logic.
# Features:
#   - Validates account existence by ID
#   - Verifies password
#   - Locks account after too many failed attempts
#   - DOS protection: increasing wait time for invalid account lookups
#
# TODO: Implement account deactivation logic
# TODO: Replace recursion with a while loop to avoid stack overflow on many attempts
# ──────────────────────────────────────────────

from decorators import log
from time import sleep
from accounts import get_account_by_id_no

MAX_ATTEMPTS = 4       # Maximum number of login attempts before lockout
BASE_WAIT = 1          # Base wait time in seconds for DOS protection


@log
def login(attempts=0, account_attempts=BASE_WAIT):
    """Handles the bank login flow.

    Args:
        attempts (int): Number of failed password attempts so far.
        account_attempts (int): Seconds to wait before retrying after an invalid account lookup.
                                Increases with each failed account lookup (DOS protection).

    Returns:
        True if login is successful, None if locked out or account not found.
    """

    # Lock the account after too many failed attempts
    if attempts >= MAX_ATTEMPTS:
        print("Maximum attempts reached.")
        print("Account locked. Please contact Customer Service.")
        return None

    # Step 1: Get account ID from user
    id_no = input("Enter your ID number: ")
    account = get_account_by_id_no(id_no)

    # Step 2: If account not found, apply increasing wait (DOS protection) and retry
    if not account:
        print(f"Account not found. Waiting {account_attempts} second(s) before next attempt...")
        sleep(account_attempts)
        login(attempts=attempts, account_attempts=account_attempts + 2)  # increase wait each time
        return None

    # Step 3: Account found — prompt for password
    print("\n---------- Bank Login ----------")
    print(f"Attempt {attempts + 1} of {MAX_ATTEMPTS}")
    password = input("Enter account password: ")

    # Step 4: Validate password
    if account["password"] != password:
        print("Invalid password. Please try again.")
        login(id_no=id_no, attempts=attempts + 1)  # increment attempt count and retry
        return None

    # Step 5: Successful login — welcome the user
    print("\n──────────── Welcome ────────────")
    print(f"  {account['name']}")
    print("─────────────────────────────────\n")

    return True


# ──────────────────────────────────────────────
# Entry point
# ──────────────────────────────────────────────
login()
