# Basic React-node-authentication
This repository contain bacis authentication for fullstack website.

- Backend - Node.js, express.js

- Database - mongoDB

- Frontend - React.js

- Email Cilent - Sendgrid

## Istruction

### Frontend

Path => ~React-node-authentication/client/

```sh
> npm install
```
```sh
> npm run
```

### Backtend

Path => ~React-node-authentication/server/

Add your .env file as following

```sh
PORT=5000
MONGO_URI='mongodb database path'
JWT_SECRET='Your secret key'
JWT_EXPIRE=10min
EMAIL_SERVICE=SendGrid
EMAIL_USERNAME=apikey
EMAIL_PASSWORD=SendGrid api key
EMAIL_FROM=Email
```

```sh
> npm install
```
```sh
> npm run
```
