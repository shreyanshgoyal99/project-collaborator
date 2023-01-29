require('dotenv').config()
const  express=require('express')
const  mongoose=require('mongoose')
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes.js')
const bodyparser=require('body-parser')
const postRoutes=require('./routes/postRoutes')
const  cors=require('cors')
const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',postRoutes)

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://ravichauhan:${process.env.MONGO_PASSWORD}@cluster0.0iqhdgc.mongodb.net/?retryWrites=true&w=majority`,()=>
{
     app.listen(8000)
})



