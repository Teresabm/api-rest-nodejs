import { pool } from "../db_connection"
export const getPong = async(req,res) =>{
    const [result] = await pool.query ('SELECT "pong" AS result')
    res.json(result[0])
}