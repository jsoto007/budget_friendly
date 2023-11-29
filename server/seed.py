from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User, Expense, Transaction

with app.app_context():

    print("Delete data...")
    User.query.delete()
    Expense.query.delete()
    Transaction.query.delete()

    print("Creating User...")
    user1 = User(
        email = "test@gmail.com", 
        name = "Test Name", 
        image = "https://depositphotos.com/vector/user-profile-icon-137014128.html", 
        bio = "this is a temp bio"
    )
    user1.password_hash = "test"

    user2 = User(
        email = "test2@gmail.com", 
        name = "Test2 Name", 
        image = "https://depositphotos.com/vector/user-profile-icon-137014128.html", 
        bio = "this is a temp bio as well"
    )
    user2.password_hash = "test2"

    users = [user1, user2]

    print("Creating Expense...")
    exp1 = Expense(
        expense_incurred = '20.00',
        description = "Haircut",
        category = "Self-Groom",
        recurrence = "Monthly"
    )

    exp2 = Expense(
        expense_incurred = '100.00',
        description = "Jacket",
        category = "Clothing",
        recurrence = "One-Time"
    )

    expenses = [exp1, exp2]

    print("Creating Transaction...")
    
    transaction1 = Transaction(
        user = user1, 
        expense = exp2, 
        date = "11/20/23",
    )

    transaction2 = Transaction(
        user = user2, 
        expense = exp2, 
        date = "11/10/23",
    )

    transaction3 = Transaction(
        user = user2, 
        expense = exp1, 
        date = "11/14/23",
    )

    transactions = [transaction1, transaction2, transaction3]


    # this will let you see the password not hashed (line 17)
    # user1._password_hash = "test" 

    db.session.add_all(users)
    db.session.add_all(expenses)
    db.session.add_all(transactions)

    db.session.commit()

    print("Seeding done!")