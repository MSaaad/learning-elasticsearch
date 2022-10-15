const express = require("express");
const app = express();
const Routes = require("./routes/Routes");
app.use(express.json());

app.use(Routes);

const port = 3000;

app.listen(port, () => console.log(`App listening on port ${port}!`));
