import { Request, Response } from "express";
import Order from '../models/Order'
import GenerateHomeRow from "./generaterow";
import IItem from "./IItem";

export default async function getallwaitingorders(req: Request, res: Response) {
  const orders = await Order.find({status: "ordered"})
  const html = orders.map((item: IItem) => (GenerateHomeRow(item))).join('')
  res.status(200).send(html)
}
