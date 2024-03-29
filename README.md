# Sociopedia- a socialmedia Platform app

> Build a COMPLETE Fullstack Responsive MERN App with Auth, Likes, Dark Mode | React, MongoDB, MUI, Redux

As heroku become paid by nov 28 2022, I deployed this site in render. for render deployment tutorial, here is an blog: [blog_link](https://dev.to/gregpetropoulos/render-deployment-free-tier-of-mern-app-52mk)

Render deployed site link: [live_site](https://socialmedia-frontend-38xj.onrender.com)

![screenshot](<https://github.com/dineshraj100/Socialmedia/blob/master/client/public/assets/Screenshot%20(159).png>)

## Features

- Fully featured feed layout like twitter
- Likes and comment section!
- Pop-up Advertisement section!
- Separate User profile page on clicking the username
- Database seeder (posts & users)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following for backend/server

```

PORT = 3001
MONGO_URL = your mongodb url
JWT_SECRET = 'anime123'
```

Create a .env file in then root and add the following for frontend/client

```
REACT_APP_BASE_URL=http://localhost:3000   || replace it with deployed backend url while deploying

```

### Install Dependencies (frontend & backend)

```
cd server
npm install
cd client
npm install
```

### Run

```
# Run frontend (:3000)
npm run start

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can comment out for one time to seed the database with some sample users and posts. Its detailed as comment in server/index.js .

```
#### Sample User Logins on my deployed site

fakemail@example.com
fakeman

```

```

## License

The MIT License

Copyright (c) 2023 Dineshraj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
