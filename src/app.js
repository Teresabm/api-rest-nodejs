import express from "express";
import productsRoutes from './routes/products.route.js'

const app = express();
app.use(express.json())

/* routes render */
app.use('/api',productsRoutes)

/* -- not found route */
app.use((req,res,next) => {
    res.status(404).json({
        message : 'Page not found'
    })
})
export default app