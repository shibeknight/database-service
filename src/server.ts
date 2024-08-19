import express, { Request, Response } from "express";
import mongoose from "mongoose";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

async function connectToDatabase() {
  try {
    const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/videoDatabase"
    await mongoose.connect(mongoURI);
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("Error connecting to db");
    process.exit(1);
  }
}

connectToDatabase();

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  uploaded_by: String,
  upload_date: Date,
  thumbnail_url: String,
  video_id: String,
});

const Video = mongoose.model("Video", videoSchema);

app.get("/metadata/videos", async (req: Request, res: Response) => {
  try {
    const videos = await Video.find().limit(15);
    res.json(videos);
  } catch (error) {
    console.log("error fetching videos", error);
    res.status(500).json({ error: "failed to fetch videos" });
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
