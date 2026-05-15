const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://neellyy29_db_user:7I8jjJgZT3EYletk@cluster.1cf3ono.mongodb.net/?appName=Cluster";

const salesSchema = new mongoose.Schema({
  productName: String,
  category: String,
  price: Number,
  quantity: Number,
});

const Sale = mongoose.model("Sale", salesSchema);

const sampleData = [
  { productName: "Laptop Pro 15", category: "Electronics", price: 1200, quantity: 5 },
  { productName: "Wireless Mouse", category: "Electronics", price: 35, quantity: 50 },
  { productName: "USB-C Hub", category: "Electronics", price: 55, quantity: 30 },
  { productName: "Standing Desk", category: "Furniture", price: 450, quantity: 8 },
  { productName: "Ergonomic Chair", category: "Furniture", price: 380, quantity: 12 },
  { productName: "Bookshelf Oak", category: "Furniture", price: 220, quantity: 6 },
  { productName: "Python Crash Course", category: "Books", price: 40, quantity: 25 },
  { productName: "Clean Code", category: "Books", price: 45, quantity: 20 },
  { productName: "The Pragmatic Programmer", category: "Books", price: 50, quantity: 15 },
  { productName: "Mechanical Keyboard", category: "Electronics", price: 150, quantity: 20 },
];

async function seedData() {
  await Sale.deleteMany({});
  await Sale.insertMany(sampleData);
  console.log("Sample data inserted successfully.\n");
}

async function runMatch() {
  console.log("--- $match: Electronics only ---");
  const result = await Sale.aggregate([
    { $match: { category: "Electronics" } },
  ]);
  result.forEach((doc) => {
    console.log(`  ${doc.productName} | $${doc.price} x ${doc.quantity}`);
  });
  console.log();
}

async function runGroup() {
  console.log("--- $group: Total revenue and product count per category ---");
  const result = await Sale.aggregate([
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
        productCount: { $sum: 1 },
      },
    },
  ]);
  result.forEach((doc) => {
    console.log(
      `  ${doc._id} | Products: ${doc.productCount} | Revenue: $${doc.totalRevenue}`
    );
  });
  console.log();
}

async function runProject() {
  console.log("--- $project: Show productName and calculated totalAmount ---");
  const result = await Sale.aggregate([
    {
      $project: {
        _id: 0,
        productName: 1,
        category: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] },
      },
    },
  ]);
  result.forEach((doc) => {
    console.log(
      `  ${doc.productName} (${doc.category}) | Total: $${doc.totalAmount}`
    );
  });
  console.log();
}

async function runSort() {
  console.log("--- $sort: Products sorted by totalAmount descending ---");
  const result = await Sale.aggregate([
    {
      $project: {
        _id: 0,
        productName: 1,
        totalAmount: { $multiply: ["$price", "$quantity"] },
      },
    },
    { $sort: { totalAmount: -1 } },
  ]);
  result.forEach((doc) => {
    console.log(`  ${doc.productName} | $${doc.totalAmount}`);
  });
  console.log();
}

async function runFullPipeline() {
  console.log("--- Full Pipeline: $match → $group → $project → $sort ---");
  const result = await Sale.aggregate([
    { $match: { category: { $in: ["Electronics", "Furniture"] } } },
    {
      $group: {
        _id: "$category",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
        totalUnitsSold: { $sum: "$quantity" },
        productCount: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        category: "$_id",
        totalRevenue: 1,
        totalUnitsSold: 1,
        productCount: 1,
        averageRevenuePerProduct: {
          $round: [{ $divide: ["$totalRevenue", "$productCount"] }, 2],
        },
      },
    },
    { $sort: { totalRevenue: -1 } },
  ]);

  console.log("\n  === Sales Summary Report ===");
  result.forEach((doc) => {
    console.log(`\n  Category          : ${doc.category}`);
    console.log(`  Products          : ${doc.productCount}`);
    console.log(`  Units Sold        : ${doc.totalUnitsSold}`);
    console.log(`  Total Revenue     : $${doc.totalRevenue}`);
    console.log(`  Avg Rev/Product   : $${doc.averageRevenuePerProduct}`);
  });
  console.log();
}

async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB successfully.\n");

    await seedData();
    await runMatch();
    await runGroup();
    await runProject();
    await runSort();
    await runFullPipeline();
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

main();
