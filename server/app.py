from flask import request, make_response, session
from models import User, Transaction, Expense
from flask_restful import Resource
from config import app, db, api

from sqlalchemy.exc import IntegrityError

# INSERT APIS AND CLASSES

# created a login api to attach a session when a user logs in
class Login(Resource):

    def post(self):

        data = request.get_json()

        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email).first()

        if user:

            if user.authenticate(password):

                session['user_id'] = user.id

                user_dict = user.to_dict()

                response = make_response(user_dict, 200)

                return response

        response = make_response({'error': 'Unauthorized'}, 401)

        return response

api.add_resource(Login, '/login')

# checks the session of the user and tracks cookies throughout webpages

class CheckSession(Resource):

    def get(self):

        if session.get("user_id"):

            user = User.query.filter_by(id=session['user_id']).first()

            user_dict = user.to_dict()

            response = make_response(user_dict, 200)

            return response
        
        response = make_response({'error': '401 Unauthorized'}, 401)

        return response

api.add_resource(CheckSession, '/check_session')

# will delete the user session once he logs out 

class Logout(Resource):

    def delete(self):

        session['user_id'] = None

        response = make_response({}, 204)

        return response

api.add_resource(Logout, '/logout')

class Signup(Resource):

    def post(self):

        data = request.get_json()

        new_user = User(email=data['email'], name=data['name'])

        new_user.password_hash = data.get('password')

        try:

            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id

            new_user_dict = new_user.to_dict()

            response = make_response(new_user_dict, 201)
        
        except IntegrityError:

            db.session.rollback()
            response = make_response( {'error': 'email already exists'}, 422)

        return response

api.add_resource(Signup, '/signup')



# test users api 
class Users(Resource):        

    def get(self):

        users_list = [u.to_dict() for u in User.query.all()]
        response = make_response(users_list, 200)
        return response
    
api.add_resource(Users, '/users')

class UserByID(Resource):

    def get(self, id):
        
        if id not in [user.id for user in User.query.all()]:

            response = make_response( { 'error': 'user not found' }, 404)

            return response
        
        user = User.query.filter_by(id=id).first()

        user_dict = user.to_dict()

        response = make_response(user_dict, 202)

        return response

api.add_resource(UserByID, '/users/<int:id>')


class Expenses(Resource):

    def get(self):

        expenses_query = Expense.query.all()

        expense_list = []

        for e in expenses_query:
            expenses = [expense.to_dict() for expense in e.users]
            expense_dict = {
                'id': e.id,
                'expense_incurred': e.expense_incurred,
                'expense_name': e.expense_name,
                'category': e.category,
                'recurrence': e.recurrence,
                'users': expenses
            }

            expense_list.append(expense_dict)

        response= make_response(expense_list, 200)

        return response
    

    def post(self):
        data = request.get_json()

        try:
            new_expense = Expense(expense_incurred=data['expense_incurred'], expense_name=data['expense_name'],
                                  category=data['category'], recurrence=data['recurrence'])
            
            db.session.add(new_expense)
            db.session.commit()

            new_expense_dict = new_expense.to_dict()

            response = make_response(new_expense, 201)

        except ValueError:

            db.session.rollback()
            response = make_response({'message': 'validation errors'}, 422)

        return response
    
api.add_resource(Expenses, '/expenses')

class Transactions(Resource):
    def get(self):

        transaction_list = []

        for transaction in Transaction.query.all():
            transaction_filled = {
                'id': transaction.id,
                'user': {
                    'user id': transaction.user.id,
                },
                'expense': {
                    'expense id': transaction.expense.id
                },
                'date' : transaction.date
            }
            transaction_list.append(transaction_filled)

        response = make_response(transaction_list, 200)

        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_transaction = Transaction(user_id=data['user_id'], expense_id=data['expense_id'],
                                          data=data['date'])
            
            db.session.add(new_transaction)
            db.session.commit()

            new_transaction_dict = {
                'id': new_transaction.id,
                'user': {
                    'user id': new_transaction.user.id,
                },
                'expense': {
                    'expense id': new_transaction.expense.id
                },
                'date': new_transaction.date
            }

            response = make_response(new_transaction_dict, 201)

        except ValueError:

            db.session.rollback()
            response = make_response({'message': 'validation errors'}, 422)

        return response
    
api.add_resource(Transactions, '/transactions')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

    