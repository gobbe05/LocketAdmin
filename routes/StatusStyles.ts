enum StatusP {
  ordered = "bg-yellow-200 border-yellow-300 border-2 rounded-full",
  printed = "bg-pink-200 border-pink-300 border-2 rounded-full",
  sent = "bg-blue-200 border-blue-300 border-2 rounded-full",
  delivered = "bg-green-200 border-green-300 border-2 rounded-full"
}

enum StatusTableBorder {
  ordered = "border-yellow-300",
  printed = "border-pink-300",
  sent = "border-blue-200",
  delivered = "border-green-200"
}

export {StatusP, StatusTableBorder}
