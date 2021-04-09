# LoanManagementSystemRCU

<h3> Setup with Docker </h3> 

This docker compose has two containers, the node application and postgres:13. 

  ```bash 
  docker-compose build
  docker-compose up 
  ```
After docker compose, the app container is available externally on machine port 8080 and database container is externally available on machine port 2345.  
While building image it automatically sets up migration and seeds the db using shell script entrypoint.sh. 

Testing postgres container from outside 

  ```bash 
  npm i  //install packages locally 
  docker-compose up -d postgres_cont //start the postgres container 
  npm run test // run tests locally 
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

