const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const exphbs = require("express-handlebars");

app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.static('public'));
app.use("/bootstrap_css",express.static('./node_modules/bootstrap/dist/css'));
app.use("/bootstrap_js",express.static('./node_modules/bootstrap/dist/js'));
app.use("/jquery",express.static('./node_modules/jquery/dist'));

// Paso 3
app.get("/:color?", function (req, res) {
    // Paso 4
    const { color } = req.params;
    // Paso 5
    res.render("home", {
     colores: [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    ],
    color: color,
    });
    });

app.listen(port, () => {
    console.log(`🔥🔥🔥🔥🔥Servidor corriendo en el puerto🔥🔥🔥🔥🔥http://localhost:${port}`);
});