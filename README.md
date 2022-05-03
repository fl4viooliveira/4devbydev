<p align="center">
<img  width="300" height="150" src="https://4devbydev.com/logo.svg" src="https://4devbydev.com"/>
</p>

<p align='center'>
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/fl4viooliveira/4devbydev?style=social">
<img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/fl4viooliveira/4devbydev?style=social">
<img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr-raw/fl4viooliveira/4devbydev?style=social">
<img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed-raw/fl4viooliveira/4devbydev?style=social">
<img src="https://img.shields.io/github/languages/code-size/fl4viooliveira/4devbydev" />
</p>

<hr class="dotted">

### About this Project:

It is an E-commerce application built using Next.js, Node.js and MongoDB. It consumes the Printful API and uses Stripe as a payment system.

The application consumes print-on-demand API by <a href='https://www.printful.com/'>Printful</a> and can be helpful as a tool for freelancers or a print-on-demand startup business.  
Feel free to use it wherever you want. I'll be happy if you provide any feedback or suggestions.

### About the Printful API

The Printful API is a RESTful API, that uses an HTTP protocol for communication. HTTP GET, POST, PUT and DELETE methods are used to access the API resources.

<p align="center">
<img  width="300" height="150" src="https://static.cdn.printful.com/dist-pf/image-assets/off-center-full-color-black.1de1e822b15b8e74075c8d1fa631d4e3.svg" src="https://developers.printful.com/docs/"/>
</p>

<a href='https://developers.printful.com/docs/'>API Documentation | Printful (1.0)</a>

<hr class="dotted">

### Getting Started with Printful

- Visit <a href='https://www.printful.com/'>printful.com</a> and create an account.
- On your account create a new store, choose "Manual order platform / API" as your method.
- On your store create some text products.
- After have a store and some products, visit <a href='https://developers.printful.com/docs/'>https://developers.printful.com/docs</a> to view the full documentation.
- To conclude got to Developers Printful page visiting <a href='https://developers.printful.com/login/'>https://developers.printful.com/login</a> and create your Private token.

<hr class="dotted">

### Create a Stripe account

- Visit <a href='https://www.stripe.com/'>stripe.com</a> and create an account.
- Activate the Test mode and get your "Publishable key" and "Secret key"
- Visit <a href='https://stripe.com/docs'>https://stripe.com/docs</a> to view the full documentation.

<hr class="dotted">

### To Install:

Cloning the Repository:

```
$ git clone https://github.com/fl4viooliveira/4devbydev.git
$ cd 4devbydev
```

On backend folder create a <b>.env</b> file and install.

```
STRIPE_KEY =
FRONTEND_APP_URL=
PRINTIFUL_KEY=
NODE_ENV = "development"
```

Install and run:

```
$ npm install
$ npm start
```

On frontend folder create a <b>.env.local</b> file and install.

```
PRINTFUL_PRODUCTS="https://api.printful.com/store/products"
PRINTIFUL_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_BASE_URL = "http://localhost:5050/api/"
NEXT_PUBLIC_DEVELOPMENT = true
```

Install and run:

```
$ npm install
$ npm dev
```

<hr class="dotted">

### Test Stripe payment:

To confirm that your integration works correctly, simulate transactions without moving any money, using special values in test mode.

- Complete the shopping flow and click on checkout button.
- Confirm the shipping address
- Click on Conclude the Payment button and fill up it.
- Use the test card number 4242 4242 4242 4242.
- Use a valid future date.
- Use any three-digit CVC
- Click to pay and wait to success page with the invoice link.

<hr class="dotted">

#### Connect with me at:

<p align='center'>
    
  <a href="https://www.linkedin.com/in/fl4viooliveira/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://stackoverflow.com/users/13045151/">
    <img src="https://img.shields.io/badge/stackoverflow-%23E4405F.svg?&style=for-the-badge&logo=stackoverflow&logoColor=white" />        
  </a>&nbsp;&nbsp;
  
</p>

<p align='center'>
  📫 How to reach me: <a href='mailto:fl4viooliveira@gmail.com'>fl4viooliveira@gmail.com</a>
</p>
<p align='center'>
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/fl4viooliveira/4devbydev?style=social">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/fl4viooliveira/4devbydev?style=social">
  <img alt="GitHub watchers" src="https://img.shields.io/github/watchers/fl4viooliveira/4devbydev?style=social">
  <img alt="GitHub created" src="https://badges.pufler.dev/created/fl4viooliveira/4devbydev">
  <img alt="Repo Visits" src="https://badges.pufler.dev/visits/fl4viooliveira/4devbydev"> 
</p>

<p align='center'>
<img alt="MIT license" src="https://img.shields.io/github/license/fl4viooliveira/4devbydev?style=for-the-badge">
</p>

<hr class="dotted">
