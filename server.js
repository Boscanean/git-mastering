import express from 'express'
import cors from 'cors'

const port = 5000;
const app = express();
app.use(cors())

app.get('/' , (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => res.send(json))
})
app.listen(port , () => console.log(`Server start running on port ${port}`))