import multer from "multer";
const storage = multer.memoryStorage(); // keeps file in memory (ram)
export const upload = multer({ storage });