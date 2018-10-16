from am_i_adam.app import app
from am_i_adam.blueprints import register_blueprints

# The starting point of the application. Referenced by manage.py
# Imports it and then initialises blueprints against imported app
register_blueprints(app)
