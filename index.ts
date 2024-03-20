import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static("public"))
app.set('view engine', 'pug')

app.get("/", (req: Request, res: Response) => {
  res.render('home')
})
app.get("/latest-orders", (req: Request, res: Response) => {
  res.send("<tr><td>Gabriel</td><td>Raskov</td><td>Ändra</td></tr>")
})

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT)
})
