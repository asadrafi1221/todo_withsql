import pg from "pg";

const { Pool } = pg; 

const db_data = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'world',
    password: 'databaseserver',
    port: 4500,
});

export default db_data;
