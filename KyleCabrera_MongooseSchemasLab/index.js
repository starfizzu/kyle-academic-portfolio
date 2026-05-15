// index.js

// 1. Import dependencies
const mongoose = require('mongoose');
const connectDB = require('./db');

// 2. Connect to MongoDB
connectDB();


// ==============================
// 3. SUBDOCUMENT (DIMENSIONS)
// ==============================
const dimensionSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  depth: Number,
  unit: {
    type: String,
    default: 'cm'
  }
});


// ==============================
// 4. MAIN PRODUCT SCHEMA
// ==============================
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: String,
  category: {
    type: String,
    default: 'General'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  dimensions: dimensionSchema
}, { timestamps: true });


// ==============================
// 5. MODEL
// ==============================
const Product = mongoose.model('Product', productSchema);


// ==============================
// 6. CREATE DATA FUNCTION
// ==============================
const createProduct = async () => {
  try {
    const product = new Product({
      name: 'Laptop',
      price: 1200,
      description: 'High-performance laptop',
      dimensions: {
        width: 30,
        height: 20,
        depth: 2
      }
    });

    await product.save();
    console.log('✅ Product saved successfully:\n', product);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    mongoose.connection.close(); // close connection after run
  }
};


// ==============================
// 7. RUN FUNCTION
// ==============================
createProduct();