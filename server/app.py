from flask import request, make_response, session
from models import User
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

        new_user = User(email=data['email'])

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










if __name__ == '__main__':
    app.run(port=5555, debug=True)