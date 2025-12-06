import express, { NextFunction, Request, Response } from "express";
import sequelize from "./config/sequelize";
// import User from "./models/user";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import authRouter from "./routes/auth"

const app = express();

const PORT = 4000;

app.use(express.json());

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
};

app.use(loggingMiddleware);

app.use("/auth", authRouter);

app.listen(PORT, async () => {
  await sequelize.authenticate()
  console.log("Database connected successfully.");
  console.log(`Server is running on http://localhost:${PORT}`);
});


// import sequelize from "./config/sequelize";
// import express, { Request, Response, NextFunction } from "express";
// import User from "./models/users";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const PORT = 4000;
// const app = express();
// app.use(express.json());

// app.get("/health", (req: Request, res: Response) => {
//     return res.json({ status: "ok", timestamp: new Date().toISOString() });
// });

// // Error handling middleware
// // app.use((err: Error, req: Request, res: Response) => {
// //     console.error("Unhandled error:", err);
// //     return res
// //         .status(500)
// //         .json({ success: false, error: "Internal server error" });
// // });

// app.post("/auth/register", async (req: Request, res: Response) => {
//     const { firstName, lastName, email, Password } = req.body;
//     if (!firstName || !lastName || !email || !Password) {
//         return res.status(400).json({ message: "all fields are required" });
//     }

//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//         return res.status(400).json({ message: "Email already exists" });
//     }
//     const hashedPassword = await bcrypt.hash(Password, 10);

//     const newUser = await User.create({
//         firstName,
//         lastName,
//         email,
//         Password: hashedPassword,
//     });
//     const formatResponse = {
//         id: newUser.id,
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//         email: newUser.email,
//     };
//     return res.status(201).json({
//         message: "User Created successfully",
//         user: formatResponse,
//     });
// });

// // app.get("/auth/login",(req:Request, res: Response) => {

// //     const token = jwt.sign({ id: user.id, email }, "secret_key", {
// //         expiresIn: "1h",
// //     });

// // })

// // Start server
// app.listen(PORT, async () => {
//     //   await conn;
//     console.log(`http://localhost:4000`);

//     try {
//         await sequelize.authenticate();
//         // await User.sync();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
    
// });
