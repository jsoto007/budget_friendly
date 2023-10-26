from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, User

with app.app_context():

    print("Delete data...")
    User.query.delete()


    print("Creating user...")
    user1 = User(email = "test@gmail.com", name = "Test Name")
    user1.password_hash = "test"

    # this will let you see the password not hashed (line 17)
    # user1._password_hash = "test" 

    db.session.add(user1)
    db.session.commit()

    print("Seeding done!")