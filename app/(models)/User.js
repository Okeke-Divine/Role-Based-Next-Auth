import mongoose, { Schema } from "mongoose"


async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1); // Exit with error if connection fails
    }
  }
  
// mongoose.connect(process.env.MONGODB_URL)
mongoose.Promise = global.Promise

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true }, // Add unique constraint
    password: String,
  }, { timestamps: true });
  
const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;