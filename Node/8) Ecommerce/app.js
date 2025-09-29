
import express from "express"
import helmet from "helmet"
import cors from 'cors'
import { errorMiddleware } from "./middlewares/error.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import upload from "./middlewares/upload.js"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dtwwqrywm',
  api_key: '189349552473758',
  api_secret: 'fy6CsKr9WUkl_5MBF1eBEU7jlec',
});

dotenv.config({ path: './.env', });

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;

connectDB(mongoURI);

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ' * ', credentials: true }));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// your routes here


app.use(errorMiddleware);

app.listen(port, () => console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.'));
