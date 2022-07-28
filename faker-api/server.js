// import { faker } from '@faker-js/faker';
// const faker = require('@faker-js/faker');

const { faker } = require('@faker-js/faker');


const express = require("express");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });
app.get('/api', (req, res) => {
	res.send('test');
});

// import { faker } from '@faker-js/faker';
// // remember to use import and NOT require
// // we can create a function to return a random / fake "Product"
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };
    
// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
// /*
//  * The output of the above console log will look like this
//  * {
//  *   name: 'Anime Figure',
//  *   price: '$568.00
//  *   department: 'Tools' 
//  * }
//  */

// public Const

// class User {
//     constructor() {
//       this.firstName = faker.name.firstName();
//       this.lastName = faker.name.lastName();
//       this.phoneNumber = faker.phone.phoneNumber();
//       this.email = faker.internet.email();
//       this.password = faker.internet.password();
//     }
//   }
  

//   app.get("/", (req, res) => {
//     res.json({message: faker.name.firstName()})
// })

// User Object
// password
// email
// phoneNumber
// lastName
// firstName
// _id



class User {
	constructor(id , firstName, lastName, password, email, phoneNumber) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
}



// faker.internet.userName('Jeanne', 'Doe') // 'Jeanne98'

const createUser = () => {
	const newUser = new User(
		(this.id = faker.random.numeric(8)),
		(this.firstName = faker.name.firstName()),
		(this.lastName = faker.name.lastName()),
		(this.password = faker.internet.password(20)),
		(this.email = faker.internet.email()),
		(this.phoneNumber = faker.phone.number())
	);
	return newUser;
};

// express Route
app.get('/api/users/new', (req, res) => {
	const User = createUser();
	// res.json({user: faker.name.firtName()})
	res.json(User);
});

/////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//////////////////////////////////////////////////////////////////////////////



// Company Object
// _id
// name
// address
// street
// city
// state
// zipCode
// country

class Company {
	constructor(id, name, city,zipCode, street , state, country) {
		this.id = id;
		this.name = name;
		this.city = city;
		this.zipCode = zipCode;
		this.street = street;
		this.state = state;
		this.country = country;
		
	}
}

const createCompany = () => {
	const newCompany = new Company(
		(this.id = faker.random.numeric(8)),
		(this.name = faker.company.companyName()),
		(this.city = faker.address.city()),
		(this.zipCode = faker.address.zipCode()),
		(this.street = faker.address.street()),
		(this.state = faker.address.state()),
		(this.country = faker.address.country())
	);
	return newCompany;
};

//Route
app.get('/api/companies/new', (req, res) => {
	const Companies = newCompanies();
	res.json(Companies);
});




// Create an api route "/api/user/company" that returns both a new user and a new company


//Route
app.get('/api/user/company', (req, res) => {

	const user = createUser();
	const company =  createCompany();

	const userCompany = {
	  user: user,
	  company: company
	}
	res.json(userCompany);
	}
);









app.listen( port, () => console.log(`Listening on port: ${port}`) );
