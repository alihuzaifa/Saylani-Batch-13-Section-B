
import express from "express"
import helmet from "helmet"
import cors from 'cors'
import { errorMiddleware } from "./middlewares/error.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import courseRoutes from "./routes/course.js"
import studentRoutes from "./routes/student.js"

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

// Routes Middleware
app.use("/api", courseRoutes);
app.use("/api/student", studentRoutes);

app.use(errorMiddleware);

app.listen(port, () => console.log('Server is working on Port:' + port + ' in ' + envMode + ' Mode.'));
