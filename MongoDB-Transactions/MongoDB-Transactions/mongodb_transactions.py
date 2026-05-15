from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["bankDB"]
accounts = db["accounts"]

# Test connection
try:
    client.admin.command('ping')
    print("Connected to MongoDB!")
except Exception as e:
    print(e)

# -------------------------------
# STEP 1: Successful Transaction
# -------------------------------
with client.start_session() as session:
    session.start_transaction()
    try:
        print("Starting successful transaction...")

        # Deduct from Alice
        accounts.update_one(
            {"_id": 1},
            {"$inc": {"balance": -30}},
            session=session
        )

        # Add to Bob
        accounts.update_one(
            {"_id": 2},
            {"$inc": {"balance": 30}},
            session=session
        )

        session.commit_transaction()
        print("Transaction committed. Transfer successful.")

    except Exception as e:
        session.abort_transaction()
        print("Transaction failed.")
        print(e)

# -------------------------------
# STEP 2: Failed Transaction (Rollback)
# -------------------------------
with client.start_session() as session:
    session.start_transaction()
    try:
        print("\nStarting failed transaction...")

        # Deduct from Alice
        accounts.update_one(
            {"_id": 1},
            {"$inc": {"balance": -30}},
            session=session
        )

        # Simulate error
        raise Exception("Simulated error during transaction")

        # This will NOT execute
        accounts.update_one(
            {"_id": 2},
            {"$inc": {"balance": 30}},
            session=session
        )

        session.commit_transaction()

    except Exception as e:
        session.abort_transaction()
        print("Transaction aborted.")
        print(e)

# -------------------------------
# STEP 3: Verify Balances
# -------------------------------
alice = accounts.find_one({"_id": 1})
bob = accounts.find_one({"_id": 2})

print("\nFinal Balances:")
print("Alice:", alice["balance"])
print("Bob:", bob["balance"])
