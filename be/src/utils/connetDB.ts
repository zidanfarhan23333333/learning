import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://farhan:<Farhan>@cluster0.t2nn1lv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((error: any) => {
    console.log(error);
    process.exit(1);
  });
