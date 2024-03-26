
## Migrations Script
1. Create migration file
```
npx sequelize-cli migration:generate --name <file name>
```
2. Run migration
```
npx sequelize-cli db:migrate --config=config/config.json --env=[development|staging|uat|production => default: development]
```
3. Create seed file

npx sequelize-cli seed:generate --name demo-user


npx sequelize-cli db:seed:all
