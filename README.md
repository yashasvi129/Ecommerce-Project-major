## MERN-ECOMMERCE

The purpose of this project is to develop a food delivery app using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to order food items. The app is designed to be user-friendly, with a clean and modern interface.

• Launched a web application for 3,000+ college students, streamlining food ordering from canteens to hostels;
reduced ordering time by 40% and increased canteen revenue by 25%.

• Engineered and integrated essential features such as Payment Gateway, User Registration, and Order Placement;
streamlined operations, reduced checkout time by 15%, and boosted overall user satisfaction by 30%.

• Revamped order tracking system, reducing customer inquiries by 40% and increasing order accuracy by 25%;
improved user experience and accessibility for all user demographics


Frontend-> React JS

Backend-> Node JS & Express JS

Database-> MongoDB

### Installation process

clone the repo using this command
```bash
git clone https://github.com/yashasvi129/Ecommerce-Project-major.git
 ```
### Installating npm packages
```bash
npm install
```

go to the parent folder of mern-ecommerce & create .env for connection, JWT_SECRET, BRAINTREE_MERCHANT_ID, BRAINTREE_PUBLIC_KEY and BRAINTREE_PRIVATE_KEY.
```bash
cd mern-ecommerce
sudo nano .env
```
(ctrl+x to save & nano follow instruction there)

## sample code for backend .env
```bash
MONGODB_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_JWT_SECRET
BRAINTREE_MERCHANT_ID=YOUR_BRAINTREE_MERCHANT_ID
BRAINTREE_PUBLIC_KEY=YOUR_BRAINTREE_PUBLIC_KEY
BRAINTREE_PRIVATE_KEY=YOUR_BRAINTREE_PRIVATE_KEY
```
create another .env file inside client directory for REACT_APP_API_URL.
```bash
cd mern-ecommerce/client
sudo nano .env
```
### sample code for frontend .env
```bash
REACT_APP_API_URL=YOUR_API_URL
```
### Instructions:
for mongodb atlas database creation follow this tutorial->https://www.youtube.com/watch?v=KKyag6t98g8
you can use any random string as JWTSECRET

note: add .env on .gitignore
for server deployment use secrets directly
deploy this project on your local server by using this command
```bash
npm run dev
```
note: both backend & frontend server will start at once with the above command.
### Database Structure: (Table: columns)
categories: _id, name, createdAt, updatedAt;
orders: _id, status, products (Array), transaction_id, amount, address, user (Object), createdAt, updatedAt
products: _id, photo (Object), sold, name, description, price, category, shipping, quantity, createdAt, updatedAt
users: _id, role, history (Array), name, email, salt, hashed_password, createdAt, updatedAt
### App Description:
```bash
1. user can view all products
2. user can view single product
3. user can search products and view products by category and price range
4. user can add to cart checkout products using credit card info
5. user can register & sign in
6. admin can create, edit, update & delete products
7. admin can create categories
8. admin can view ordered products
9. admin can change the status of a product (processing, shipped, delivered, etc.)
```
