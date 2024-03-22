import { Response, Request } from "express";
import Order from "../models/Order";

export default async function carddeliveredcount(req: Request, res: Response) {
  const count = await Order.countDocuments({status: "delivered"})
  const html = `
<div class="flex items-center gap-4 bg-white p-8 rounded">
<span style="font-size: 48px;" class="text-green-400 material-symbols-outlined">done</span>
<div>
  <p class="text-xl font-semibold">${count}</p>
  <p class="text-lg font-light">Delivered</p>
</div>
</div>  
`

  res.send(html)
}
