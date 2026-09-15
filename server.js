const express = require('express');

// Here i learned git
// Here i learned linter (ESlint)

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.listen(3000, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
