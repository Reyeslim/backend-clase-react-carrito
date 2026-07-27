import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import cartRouter from "./routes/cart.routes.js"
import productsRouter from "./routes/products.routes.js"
import wishlistRouter from "./routes/wishlist.routes.js"
import authRouter from "./routes/auth.routes.js"
import { authMiddleware } from "./middlewares/authMiddleware.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/products", productsRouter)
app.use("/api/cart", cartRouter)
app.use("/api/wishlist", wishlistRouter)

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    ok: false,
    error: error.message || "Internal server error",
  })
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
