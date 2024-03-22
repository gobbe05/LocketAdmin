import express, {Request, Response} from 'express'
import Order from '../models/Order'
import GenerateHomeRow from './generaterow'
import geteditstatus from './geteditstatus'
import getallorders from './getallorders'
import getallwaitingorders from './getallwaitingorders'
import getallprintedorders from './getallprintedorders'
import getallsentorders from './getallsentorders'
import getalldeliveredorders from './getalldeliveredorders'
import cardordercount from './cardordercount'
import carddeliveredcount from './carddeliveredcount'

const router = express.Router()


router.get("/get-all-orders", getallorders)
router.get("/get-all-waiting-orders", getallwaitingorders)
router.get("/get-all-printed-orders", getallprintedorders)
router.get("/get-all-sent-orders", getallsentorders)
router.get("/get-all-delivered-orders", getalldeliveredorders)
router.get("/get-edit-status/:id", geteditstatus)

router.get("/card-order-count", cardordercount)
router.get("/card-delivered-count", carddeliveredcount)

router.delete("/delete-order/:id", async(req: Request, res: Response) => {
  const {id} = req.params
  try {
    await Order.findOneAndDelete({_id: id})
    res.send("")
  } catch (error: any) {
    res.status(400).json({message: error.message})
  }
})
router.put("/change-status/:id", async (req: Request, res: Response) => {
  const {id} = req.params
  const {status} = req.body
  try {
    const updated = await Order.findOneAndUpdate({_id: id}, {status: status})
    const order = updated && await Order.findById(id)
    order && res.status(200).send(`${GenerateHomeRow(order)}`)
  } catch(error) {

  }
})
router.post("/create-order", async (req: Request, res: Response) => {
  const { firstName, lastName, item, quantity, address, mail, phone } = req.body
  const status = "ordered"
  const today = new Date()
  const year = today.getFullYear()
  const monthDate = today.getDate()
  const month = today.getMonth()
  const date = `${monthDate}/${month}/${year}`
  const NewOrder = new Order({
    firstName: firstName,
    lastName: lastName,
    item: item,
    quantity: quantity,
    address: address,
    mail: mail,
    phone: phone,
    date: date,
    status: status
  })
  try {
    const SavedOrder = await NewOrder.save()
    res.status(200).send(`
      <tbody id="tablebody"  hx-swap-oob='beforeend'>
        ${GenerateHomeRow(SavedOrder)}
      </tbody>
    `)
  } catch (error: any) {
    res.status(400).json({message: error.message})
  }
})

export default router
