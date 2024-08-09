import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

const port = 5000;
const app = express();

mongoose.connect('mongodb+srv://raweye2000:moles700@cluster0.jawba.mongodb.net/Education').then((val) => {
  app.listen(port, () => {
    console.log('connected server is running');
  });
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: 'welcome to the backs jee',
  });
});







export default app;