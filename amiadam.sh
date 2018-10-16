#!/bin/bash

DIR=/home/dmdev/amiadam-thinktanq
cd $DIR

git pull
#if [ -a venv ]; then
#  source venv/bin/activate 
#else
#  /usr/bin/virtualenv venv
#  source venv/bin/activate
#fi

source $DIR/venv/bin/activate
pip3 install -r $DIR/requirements.txt 

source $DIR/settings.conf

python3 manage.py runserver
