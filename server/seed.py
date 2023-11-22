from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User, Expense, Transaction

with app.app_context():

    print("Delete data...")
    User.query.delete()
    Expense.query.delete()
    Transaction.query.delete()

    print("Creating user...")
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

    # this will let you see the password not hashed (line 17)
    # user1._password_hash = "test" 

    db.session.add_all(users)
    db.session.commit()

    print("Seeding done!")