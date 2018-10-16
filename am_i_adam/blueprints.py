from am_i_adam.routes import health, file


def register_blueprints(app):
    app.register_blueprint(health.health)
    app.register_blueprint(file.file)
