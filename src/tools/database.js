import { Pool } from 'pg'

let conn

if (!conn) {
    conn = new Pool({
        user: 'postgres',
        password: '123456',
        host: 'postgres',
        port: 5432,
        database: 'upslp'
    })
}

export { conn }