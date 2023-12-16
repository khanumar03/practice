const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.get("/api", (req,res) => {
    return res.json({message: "Pulling"})
})

app.listen(5000, () => console.log("server connected"))
