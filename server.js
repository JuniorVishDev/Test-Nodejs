const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Bhaiya</title>
      </head>
      <body>
        <h1>Hello Bhaiya 👋</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
