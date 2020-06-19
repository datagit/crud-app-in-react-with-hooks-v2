```
$ mkdir server
$ cd server
$ yarn add express
$ yarn add body-parser
$ yarn add faker
$ vi server.js

$ node server.js
# check api get
$ curl http://localhost:3001/api/users
# check api post
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "abc", "username": "username01"}' http://localhost:3001/api/users
```