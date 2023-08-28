import express from 'express';
import { AdminRoute, VandorRoute } from './routes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/vandor', VandorRoute);
app.use('/admin', AdminRoute);
app.use('/', (_req, res) => {
	return res.json('Hello from the backend');
});

app.listen(8000, () => {
	console.clear();
	console.log('App is listening on port 8000');
});
