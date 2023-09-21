import json
import os
import datetime

import flask
import flask_login
import flask_wtf.csrf
from flask import Blueprint, send_from_directory, redirect, url_for, render_template
from server.extensions import get_and_clear_cookies
from server.models import User, Subject, Assignment

subjects = Blueprint('subjects', __name__, url_prefix='/subjects',
                     template_folder=os.getcwd() + "/client/dist", static_folder=os.getcwd() + "/client/dist")


# Routes to the subject_page for a subject using a given subject_id
@subjects.route('/<sub_id>', methods=['GET'])
@flask_login.login_required
def subject_page(sub_id):
    print("Serving Subject page")

    sub = Subject.get_subject(sub_id)
    asses = sub.get_assignments()
    asses = sorted(asses, key=lambda x: (x.due_date is not None, x.due_date))

    template_data = {
        "upcoming": [],
        "past": [],
        "subject": {"id": sub.subject_id, "description": sub.description, "prof": sub.professor_email},
        "random": 69,
    }

    for ass in asses:
        temp = {
            "id": ass.subject_id,
            "name": ass.name,
            "due_date": ass.due_datetime,
            "link": f'/subjects/{ass.subject_id}/{ass.id}'
        }
        print(ass.due_datetime, datetime.datetime)
        if ass.due_datetime and ass.due_datetime > datetime.datetime.now(ass.due_datetime.tzinfo):
            template_data['upcoming'].append(temp)
        else:
            template_data['past'].append(temp)

    return render_template('routeSubject/index.html', template_data=template_data)


@subjects.route('/<sub_id>/<ass_id>', methods=["GET"])
@flask_login.login_required
def assignment_page(sub_id, ass_id):
    print("Serving Assignment page")

    current_ass = Assignment.get_assignment(sub_id, ass_id)
    template_data = {
        "assignment": {"id": current_ass.subject_id, "name": current_ass.name, "due_date": current_ass.due_datetime,
                       "description": current_ass.description, "marks": "???/100"},
        "user_type": "student"
    }

    return render_template('routeAssignment/index.html', template_data=template_data)
