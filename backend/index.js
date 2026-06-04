import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import router from "./routes/authRoutes.js";
import songRouter from "./routes/songRoutes.js";

dotenv.config(".env");
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect yout Database
connectDB();
// cors- cross origin resource sharing
app.use(
  cors({
    // origin: "*" - all can acess backend
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// cors- cross origin resource sharing, cant share resources of backend without permission
// backened is running on port 5000 and 5173 is frontend
// mongoose odm for mongodb, mongoose easy to code
// app.get("/"-routing, controller- ()=>{})
// app.get("/", (req, res) => {
// res.status(200).json({ message: "Server is working" });
// });

// token- encrypted info of the user
// payload- data of user that u want t share
app.use("/api/songs", songRouter);
app.use("/api/auth", router);
// CORS error
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
