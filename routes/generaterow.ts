import IItem from './IItem'
import {StatusP, StatusTableBorder} from './StatusStyles'

export default function GenerateRow(item: IItem) {
  console.log(item.status)
  return (`
        <tr class="border-l-4 ${StatusTableBorder[item.status as keyof typeof StatusTableBorder]}">
          <td class="p-2 lg:p-4">${item.firstName}</td>
          <td class="p-2 lg:p-4">${item.lastName}</td>
          <td class="p-2 lg:p-4">${item.item}</td>
          <td class="p-2 lg:p-4">${item.quantity}</td>
          <td class="p-2 lg:p-4 hidden xl:table-cell">${item.phone}</td>
          <td class="p-2 lg:p-4 hidden xl:table-cell">${item.mail}</td>
          <td class="p-2 lg:p-4 hidden xl:table-cell">${item.date}</td>
          <td class="p-2 lg:p-4"><p class="px-2 py-1 text-center ${StatusP[item.status as keyof typeof StatusP]}">${item.status}</p></td>
          <td class="p-2 lg:p-4"><span hx-delete="/api/order/delete-order/${item._id}" hx-swap="outerHTML" hx-target="closest tr" class="text-red-500 cursor-pointer material-symbols-outlined">delete</span></td>
          <td class="p-4" x-data="{open: false, openStatus: false}">
            <div class="relative">
              <span class="material-symbols-outlined cursor-pointer" @click="open = !open">more_vert</span>

              <div class="absolute" x-show="open">
                <button  hx-get="/api/order/get-edit-status/${item._id}" hx-target="#editform${item._id}" class="text-nowrap">Change Status</button>
              </div>

            </div>
            <div id="editform${item._id}"></div>
          </td>
        </tr>`)
}
