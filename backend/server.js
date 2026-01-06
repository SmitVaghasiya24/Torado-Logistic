import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from './config/db.js'
import router from './routes/index.js'
import errorHandler from "./middlewares/errorHandler.js";


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


 
app.get("/", (req, res) => {
    res.json({ success: true, message: "API is running 🚀" });
});
app.use('/api',router)


app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(PORT, async () => {
    try {
        const [rows] = await db.query('SELECT 1');
        console.log(`✅ MySQL Connected! Test Result: ${rows[0]['1']}`);
    } catch (err) {
        console.error('❌ MySQL Connection Failed:', err.message);
    }

    console.log(`🚀 Server running on: http://localhost:${PORT}`);
}); 