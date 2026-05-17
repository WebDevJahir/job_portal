import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory for processing

export const upload = multer({ storage });