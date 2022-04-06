const express = require('express');
const path = require('path')

const app = express();

// change the path we are viewing, finf html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})




const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })

