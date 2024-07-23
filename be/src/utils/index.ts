const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authModel = require("./models/auth.model");

const app = express();
app.use(express.json());
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://farhan:<password>@cluster0.t2nn1lv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("MongoDB connection error:", err));


app.post("/register", async (req, res) => {
  try {
    const { user_id, email, name, password } = req.body;
    const user = new authModel({ user_id, email, name, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(400).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
