import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ApplicationRoute from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', ApplicationRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;