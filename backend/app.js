const express = require('express')
const cors = require('cors')

const app = express()

const port = 5000

// app.use(cors({
//     origin: '*'
// }))

app.use(express.json());

app.use("/api", require("./Routes/Main"));

app.listen(port, () => {
  console.log(`Listening to Port : ${port}`);
});
