import mongoose from 'mongoose';
import logger from './logging';

const db = process.env.DB;
mongoose.connect(`mongodb://localhost/${db}`);
logger.log('info', '[MONGODB] - Database: %s', db);
