# Itech

Itech is a Full Stack app inspired by a technology store, integrated with Mongo DB, Express, React, Material UI and NodeJs, in which the products are sold through online payments. PayPal Sandbox is used to simulate payments. Are included validations, registration and authentication of users and administrators, confirmation for email and password recovery with Mailtrap, mobile view, the Admin can add, delete and edit products, and Cloudinary is used to work with images.

## Getting Started 🚀

### Content

This project has two branches: master and deployment. master is configured to be run in local while host is prepared to be hosted on Netlify.

### Demo

You can see a demo of this project on the following link: [Itech](https://relaxed-praline-db38a0.netlify.app/)

### Installation 🔧

If you want to run this project on your machine, just follow these steps:

- Create a folder and execute `git clone https://github.com/LukasMartc/eCommerceMERN_frontend`.
- Create a `.env` file on root directory and add `REACT_APP_API_BASE_URL` and `REACT_APP_PAYPAL_ID` variables.
- Execute `npm install` in **root** directory.
- Execute `npm run dev` in **root** directory.

NOTE: if you don't have Nodemon installed globally, you must to install it or you can edit package.json start script and change "nodemon" by "node" on line 6.

## Technology Stack 🛠️

This project was built using the following technologies

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Material UI](https://mui.com/) - React component library
- [Axios](https://axios-http.com/docs/intro) - HTTP client library for making requests and responses
- [PayPal Sandbox](https://developer.paypal.com/home) - Used to simulate payments

---

Developed by [Lukas Martínez](https://github.com/LukasMartc)
