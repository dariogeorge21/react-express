const express = require('express');
const cors  = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({"message": "Hello from the server!"});
}); 

app.get('/api/message', (req,res) => {
    res.json({"message" : "This is a message from the API endpoint!"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

