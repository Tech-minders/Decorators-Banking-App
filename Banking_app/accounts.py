import json
import os
import sys
from decorators import log

# ──────────────────────────────────────────────
# accounts.py
# Handles all account logic:
#   - Retrieving an account by ID
#   - Creating a new account
# Accounts are stored as JSON files in Banking_app/accounts/
# ──────────────────────────────────────────────

ACCOUNTS_FOLDER = "Banking_app/accounts"  # central folder path, easy to change


@log
def get_account_by_id_no(id_no):
    """Retrieves an account by ID number. Returns None if not found."""
    filename = os.path.join(ACCOUNTS_FOLDER, f"{id_no}.json")

    if not os.path.exists(filename):
        print(f"Account with id-no {id_no} does not exist")
        return None

    with open(filename, "r") as file:
        account = json.load(file)

    print(account)
    return account


@log
def create_account(id_no, name, password):
    """Creates a new account and saves it as a JSON file.
    Exits if an account with the same ID already exists.
    """
    # Check if account already exists before creating
    if get_account_by_id_no(id_no):
        print(f"Account with id-no {id_no} already exists")
        sys.exit()

    # Build the account data structure
    account = {
        "account_no": id_no,
        "id_no": id_no,
        "name": name,
        "balance": 0,
        "transaction_history": [],
        "password": password
    }

    # Ensure the accounts folder exists, create it if not
    os.makedirs(ACCOUNTS_FOLDER, exist_ok=True)
    filename = os.path.join(ACCOUNTS_FOLDER, f"{id_no}.json")

    # Save the account to a JSON file with readable formatting
    with open(filename, "w") as file:
        json.dump(account, file, indent=4)

    print(f"Account created successfully for {name} (ID: {id_no})")


# ──────────────────────────────────────────────
# Test / Entry point
# ──────────────────────────────────────────────
create_account(id_no="5555555", name="james", password="89879")


 
