import mongoose from "mongoose";

async function seed() {
  try {
    await mongoose.connect("mongodb://localhost:27017/videoDatabase");
    console.log("Mongo DB connected");

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
    await Video.deleteMany({});
    const videos = [];
    for (let i = 1; i <= 15; i++) {
      videos.push({
        title: `Video Title ${i}`,
        description: `Description for video ${i}`,
        category: "Category",
        uploaded_by: `user${i}`,
        upload_date: new Date(),
        thumbnail_url: `https://example.com/thumbnail${i}.jpg`,
        video_id: `testvideo_${i}`,
      });
    }
    await Video.insertMany(videos);
    console.log("Database seeded");
  } catch (error) {
    console.log("Error connecting to db");
  } finally {
    await mongoose.connection.close();
  }
}

seed();
