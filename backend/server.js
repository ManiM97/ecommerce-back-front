import express from "express"
import dotend from "dotenv"
import userRoutes from "./routes/userroute.js"

dotend.config()

const port = process.env.PORT || 1997

const app = express()

app.use('/api/users',userRoutes)

app.get('/',(req,res) => res.send('Server is ready'))

app.listen(port , () => console.log(`Server started on port ${port}`))