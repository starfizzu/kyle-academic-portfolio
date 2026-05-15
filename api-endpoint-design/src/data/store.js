const users = [
  { id: 1, name: "Maria Santos", email: "maria@email.com", role: "customer" },
  { id: 2, name: "Juan dela Cruz", email: "juan@email.com", role: "customer" },
  { id: 3, name: "Ana Reyes", email: "ana@email.com", role: "admin" }
];

const products = [
  { id: 101, name: "Wireless Mouse", category: "electronics", price: 599, stock: 50, brand: "Logitech" },
  { id: 102, name: "Mechanical Keyboard", category: "electronics", price: 2499, stock: 30, brand: "Keychron" },
  { id: 103, name: "USB-C Hub", category: "electronics", price: 1299, stock: 20, brand: "Anker" },
  { id: 104, name: "Running Shoes", category: "footwear", price: 3500, stock: 15, brand: "Nike" },
  { id: 105, name: "Yoga Mat", category: "fitness", price: 850, stock: 40, brand: "Decathlon" },
  { id: 106, name: "Water Bottle", category: "fitness", price: 450, stock: 60, brand: "Hydro Flask" }
];

const orders = [
  { id: 1001, userId: 1, productId: 101, quantity: 2, totalPrice: 1198, status: "delivered" },
  { id: 1002, userId: 1, productId: 104, quantity: 1, totalPrice: 3500, status: "shipped" },
  { id: 1003, userId: 2, productId: 102, quantity: 1, totalPrice: 2499, status: "pending" },
  { id: 1004, userId: 2, productId: 105, quantity: 3, totalPrice: 2550, status: "delivered" },
  { id: 1005, userId: 3, productId: 103, quantity: 1, totalPrice: 1299, status: "pending" }
];

const reviews = [
  { id: 1, productId: 101, userId: 1, rating: 5, comment: "Excellent mouse, very smooth!", date: "2025-04-01" },
  { id: 2, productId: 101, userId: 2, rating: 4, comment: "Good quality for the price.", date: "2025-04-05" },
  { id: 3, productId: 102, userId: 1, rating: 5, comment: "Best keyboard I have ever used.", date: "2025-04-10" },
  { id: 4, productId: 104, userId: 2, rating: 3, comment: "Decent shoes, but sizing runs small.", date: "2025-04-12" }
];

module.exports = { users, products, orders, reviews };
