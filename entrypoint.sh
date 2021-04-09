#!/bin/bash

cd app

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all 

npm install
npm start
