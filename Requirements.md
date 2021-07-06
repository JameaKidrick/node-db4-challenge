# Requirements

Build an API to support managing pets.

The client want to:

-save infomration about their pets. For each pet they'd like to record:
  - name
  - species (dog, cat, iguana, hamster, fish, horse)
  - breed (optional, if any)
  - food
  - weight (as a floating number)
  - weightUnit (optional; lb, kg)
- see a list of all their pats
- update their pet's information
mark a pet as 'owned' (bool)

Started an Express JS API
- run `git init`
- run `npm init -y`
- run `npx gitignore node`
- run `npm i express helmet knex sqlite3`
- run `npm i nodemon -D`

Migrations are a way to record changes to the database schema

**It's like git, for the database structure**

**EVERY CHANGE TO THE DATABASE SCHEMA (STRUCTURE) MUST BE DONE WITH A NEW MIGRATIONS**

## Migrations
Optionally, install knex globally on your system: `npm i -g knex` or `yarn global add knex` (then don't need npx)

- Initialize Knex for your project: `npx knex init` ==> get knexfile.js then change file a bit
- Create a migration: `npx knex migrate:make <name>`
- Use the migration to declare the changes we plan to make to the schema
- Run a migration: `npx knex migrate:up` <== save one new migration at the time
- Undo last migration: `npx knex migrate:down` <== undo latest change to migration
- Update database to latest changes/migrations: `npx knex migrate:latest` <== multiple new migrations
- Undo multiple migrations that ran together: `npx knex migrate:rollback` <== undo multiple migrations