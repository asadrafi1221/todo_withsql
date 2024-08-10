import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/home_routes.js';
import signup_router from './routes/signup_routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(signup_router)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
