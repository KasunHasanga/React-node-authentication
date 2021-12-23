# Basic React-node-authentication
This repository contain bacis authentication for fullstack website.

- Backend - Node.js, express.js

- Database - mongoDB

- Frontend - React.js

- Email Cilent - Sendgrid

## screenshot
![React-node-authentication3](https://user-images.githubusercontent.com/44415252/147265577-0fbd2f32-1d93-450c-86e8-dbdaf6f178d2.png)
![React-node-authentication2](https://user-images.githubusercontent.com/44415252/147265582-0b86037d-b958-4960-a5b5-d02b968c9cc4.png)
![React-node-authentication1](https://user-images.githubusercontent.com/44415252/147265592-d6d38740-6b35-44e5-9841-2c439265d77c.png)


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

Add your config.env file as following (I have include sample file(config.sample) rename it to config.env and modify as your environment )

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
