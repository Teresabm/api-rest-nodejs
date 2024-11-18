import {pool} from '../db_connection.js'

/* Lógica de las consultas sql de la información */

export const getProducts = async(req, res) => {
    /* Consulta SQL get all products */
    try{
        const [rows] = await pool.query('SELECT * FROM products')
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message : 'Something woes grong'
        })
    }
}

export const getProduct = async(req, res) => {
    /* Consulta SQL get product by id */
   try{
        const [rows] = await pool.query('SELECT * FROM products WHERE product_id = ?' , [req.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message : 'Product not found'
        })
        
        res.json(rows[0])

    }catch(error){
        return res.status(500).json({
            message : 'Something woes grong'
        })
    }
}