# LoanManagementSystemRCU

<h3> Docker Config </h3> 

  ```bash 
  // todo  
  ```
 <hr> 
 
 <h3> Setup without Docker </h3> 

Clone the repo 
  ```bash 
 git clone https://github.com/Sudheer121/LoanManagementSystemRCU.git
  ```
Install packages
```bash 
npm install 
```
Convert .env.example to .env 
```bash 
cp .env.example .env  
```

> Start an empty Postgres db with name rcu 

Run migrations
```bash 
npx sequelize-cli db:migrate
```
Seed/Populate the database 
```bash
npx sequelize-cli db:seed:all
``` 
Run sample tests 
```bash
npm test
```
Start the server
```bash
node index.js
```
<h3> Code Features </h3>

> <ul> 
> <li> Multiple roles for accessing apis i.e customer, agent, admin. </li>
> <li> API authorization according to roles added</li>
> <li> Tests added with jest </li> 
> <li> Seeds added for quick start </li>
> <li> MVCS architecture in NodeJs </li>
> <li> DAO layer inside services, can be improved. </li> 
> </ul>

