import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 6200;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log('Server launched on port : ', PORT);
});

export default app;
