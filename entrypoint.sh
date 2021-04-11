#!/bin/sh

echo "Entrypoint running"

npm install 
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
node index.js