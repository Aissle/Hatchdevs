import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = 3000;
app.use(express.json());

type user = {
  id: number;
  name: string;
  email: string;
  password: string;
};
const perfumeObject = [
  {
    id: 1,
    name: "A",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 2,
    name: "B",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 3,
    name: "C",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 4,
    name: "D",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 5,
    name: "E",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 6,
    name: "F",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 7,
    name: "G",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 8,
    name: "H",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 9,
    name: "I",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
  {
    id: 10,
    name: "J",
    desc: "ppp",
    qty: 10,
    price: 1500,
    size: "big",
  },
];
const userObj: user[] = [];
app.delete("/delete/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  // Check if id is a valid number
  if (isNaN(id)) {
    return res.status(400).send("Invalid ID format");
  }

  // Find the index of the user
  const index = userObj.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).send(`User with ID ${id} not found`);
  }

  // Remove user
  const deletedUser = userObj.splice(index, 1)[0];

  return res.status(200).json({
    message: `User with ID ${id} deleted successfully`,
    deletedUser,
    remainingUsers: userObj,
  });
});

app.get("/users", (req: Request, res: Response) => {
  return res.send(userObj);
});

app.post("/register", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  userObj.push(user);
});

app.get("/perfumes", (req: Request, res: Response) => {
  return res.send(perfumeObject);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Node!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

//npm install tsc-node-dev
