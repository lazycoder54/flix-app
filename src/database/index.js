import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://majorproject2024ku:ZW9a3rs1CznVDCGP@cluster0.geg56.mongodb.net/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
