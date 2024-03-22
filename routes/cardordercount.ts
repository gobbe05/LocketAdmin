import { Response, Request } from "express";
import Order from "../models/Order";

export default async function carddeliveredcount(req: Request, res: Response) {
  const count = await Order.countDocuments({})
  const html = `
<div class="flex items-center gap-4 bg-white p-8 rounded">
  <span style="font-size: 48px;" class="text-gray-400 material-symbols-outlined">orders</span>
  <div>
    <p class="text-xl font-semibold">${count}</p>
    <p class="text-lg font-light">Orders</p>
  </div>
</div>  
`

  res.send(html)
}
