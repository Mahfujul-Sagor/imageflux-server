import express from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/uploadController.js';

const router = express.Router();
const upload = multer();

// Route for file upload
router.post('/upload', upload.single('file'), uploadFile);

export default router;
