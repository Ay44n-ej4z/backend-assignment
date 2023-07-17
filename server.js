const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const cors = require('cors');


// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ayaanejaz185:A1m9a9n0@cluster0.sxz1rjx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
// Define a schema for the items collection
const itemSchema = new mongoose.Schema({
    password: String
  });
  
  // Create a model based on the schema
  const Item = mongoose.model('Item', itemSchema);

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes

// Enable CORS for all routes
app.use(cors());
// GET route for retrieving all items
app.get('/password', (req, res) => {
    // Retrieve all items from the database
    Item.find({}, (err, items) => {
      if (err) {
        console.error('Error retrieving items:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(items);
      }
    });
  });

// Define your routes here

// POST route for creating a new item
app.post('/password', (req, res) => {
    // Extract data from request body
    const { password } = req.body;
    const newItem = new Item({ password });
    newItem.save()
      .then(savedItem => {
        console.log("Item saved successfully!");
        res.status(201).json(savedItem);
      })
      .catch(error => {
        console.error("Error creating item:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
// Start the server

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


