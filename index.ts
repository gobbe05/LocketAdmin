import express, { Request, Response } from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import orderRoutes from './routes/order'

const PORT = process.env.PORT || 3000
const DBURL = process.env.DBURL || ""

mongoose.connect(DBURL)
const database = mongoose.connection

database.on('error', (error: Error) => {
  console.log("error" + error)
})
database.once("connected", () => {
  console.log("Connected to db successfully")
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/api/order", orderRoutes)

app.set('view engine', 'pug')

app.get("/", (req: Request, res: Response) => {
  res.render('home', {link: "/"})
})
app.get("/orders", (req: Request, res: Response) => {
  res.render("orders", {link: "orders"})
})
app.get("/waiting", (req: Request, res: Response) => {
  res.render("waiting", {link: "waiting"})
})
app.get("/printed", (req: Request, res: Response) => {
  res.render("printed", {link: "printed"})
})
app.get("/sent", (req: Request, res: Response) => {
  res.render("sent", {link: "sent"})
})
app.get("/delivered", (req: Request, res: Response) => {
  res.render("delivered", {link: "delivered"})
})
app.listen(PORT, () => {
  console.log("Listening on port: " + PORT)
})
