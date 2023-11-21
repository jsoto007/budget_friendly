from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True)
    name = db.Column(db.String)

    image = db.Column(db.String)
    bio = db.Column(db.String)

    _password_hash = db.Column(db.String)

    expenses = association_proxy('transactions', 'expense')
    transactions = db.relationship('Transaction', backref='user')

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    

class Expense(db.Model, SerializerMixin):
    __tablename__ = 'expenses'

    id = db.Column(db.Integer, primary_key=True)
    expense_incurred = db.Column(db.Float)
    description = db.Column(db.String)
    category = db.Column(db.String)
    recurrence = db.Column(db.String)

    users = association_proxy('transactions', 'user')
    transactions = db.relationship('Transaction', backref='expense')




class Transaction(db.Model, SerializerMixin):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key = True)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    expense_id = db.Column(db.Integer, db.ForeignKey('expenses.id'))

    date = db.Column(db.String)


