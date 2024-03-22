export default interface IItem {
  firstName: string,
  lastName: string,
  item: string,
  quantity: number,
  phone?: string | undefined | null,
  mail?: string | undefined | null,
  date: string,
  status: string,
  _id: Types.ObjectId
}
