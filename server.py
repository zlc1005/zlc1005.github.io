import json
from flask import Flask
mesages = []
app = Flask(__name__)
@app.route('/')
def index():
    return json.dumps(mesages)

@app.route('/add/<string:message>/<name>')
def add(message,name):
    # 黑底白字
    print(name,':',message)
    mesages.append([message,name])
    return '{"code":200,"message":"success"}'

@app.route('/del/all')
def del_all():
    mesages=[]
    print('清空聊天记录')
    return '{"code":200,"message":"success"}'

if __name__ == '__main__':
    # 黑底黑字
    import logging
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)
    app.run(host='0.0.0.0',port=5555)