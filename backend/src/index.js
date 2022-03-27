const app = require("./app");
require("./database");

const PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log("Server listen on port", PORT);
