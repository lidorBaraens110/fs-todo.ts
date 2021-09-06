import express from 'express';
import todo from './routes/todo';
import user from './routes/user';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/todo', todo)
app.use('/user', user)


app.listen(5000, () => {
    console.log('server up')
});



