import { conn } from 'tools/database'

export default async function studentsManager(req, res) {
    const { method, body } = req
    switch (method) {
        case 'GET':
            try {
                const response = await conn.query('SELECT * FROM students')
                console.log(response)
                if (response.rowCount === 0) {
                    throw new Error('Invalid query!')
                }
                return res.status(200).json({ "result": response.rows })
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }
        case 'POST':
            try {
                const { name, age, sex, career, level, ide, date, fplace, fprov, state, address, email, phone} = body.responses
                const query = 'INSERT INTO students (student_name, student_age, student_sex, student_career, student_level, student_ide, student_t_date, student_birth_data, student_provenance, student_status, student_address, student_email, student_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *'
                const values = [name, age, sex, career, level, ide, date, fplace, fprov, state, address, email, phone]
                const response = await conn.query(query, values)
                return res.status(200).json({ result: response.rows[0] })
            } catch (error) {
                console.log(error)
                return res.status(400).json({ error: error.message })
            }
        default:
            return res.status(400).json("invalid request")
    }
}