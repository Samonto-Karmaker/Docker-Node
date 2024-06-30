const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Adapt or perish, now as ever, is nature's inexorable imperative."
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})