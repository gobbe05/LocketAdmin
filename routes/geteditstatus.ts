import { Request, Response } from "express";
import Order from '../models/Order'

export default async function geteditstatus(req: Request, res: Response) {
  try {
    const {id} = req.params
    const item = await Order.findById(id)
    if(!item) return res.status(404)
    const html = `
              <div class="fixed top-0 left-0 flex items-center justify-center  w-dvw h-dvh bg-[rgb(0,0,0,0.3)]">
                <div id="editform${item._id}" class="bg-white border-2 rounded-xl">
                  <form hx-put="/api/order/change-status/${item._id}" hx-swap="outerHTML" hx-target="closest tr" class="w-64 h-full justify-center flex flex-col gap-4 p-4">
                    <div>
                      <input name="status" id="ordered${item._id}" type="radio" value="ordered" class="peer hidden" ${item.status == "ordered" && "checked"}/>
                      <label for="ordered${item._id}" class="block rounded-xl border-2 border-yellow-300 peer-checked:bg-yellow-300 peer-checked:text-white w-100 p-4 cursor-pointer">Ordered</label>
                    </div>
                    <div>
                      <input name="status" id="printed${item._id}" type="radio" value="printed" class="peer hidden" ${item.status == "printed" && "checked"}/>
                      <label for="printed${item._id}" class="block rounded-xl border-2 border-pink-300 peer-checked:bg-pink-300 peer-checked:text-white w-100 p-4 cursor-pointer">Printed</label>
                    </div>
                    <div>
                      <input name="status" id="sent${item._id}" type="radio" value="sent" class="peer hidden" ${item.status == "sent" && "checked"}/>
                      <label for="sent${item._id}" class="block rounded-xl border-2 border-blue-300 peer-checked:bg-blue-300 peer-checked:text-white w-100 p-4 cursor-pointer">Sent</label>
                    </div>
                    <div>
                      <input name="status" id="delivered${item._id}" type="radio" value="delivered" class="peer hidden" ${item.status == "delivered" && "checked"}/>
                      <label for="delivered${item._id}" class="block rounded-xl border-2 border-green-300 peer-checked:bg-green-300 peer-checked:text-white w-100 p-4 cursor-pointer">Delivered</label>
                    </div>
                    <button class="bg-slate-700 text-gray-200 px-2 py-1 mt-4 rounded">Skicka</button>
                  </form>             
                </div>
              </div>`
    res.send(html)
  } catch(error: any) {
    res.status(500).json({message: error.message})
  }
}
