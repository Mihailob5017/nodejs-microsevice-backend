import express from 'express';

const app = express();
import { AdminRoute, VandorRoute } from './routes';

app.use('/vandor', VandorRoute);
app.use('/admin', AdminRoute);
app.use('/', (_req, res) => {
	return res.json('Hello from the backend');
});

app.listen(8000, () => {
	console.log('App is listening on port 8000');
});
