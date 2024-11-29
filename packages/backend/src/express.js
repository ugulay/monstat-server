import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes';

// Check whether we are in production env
const isProd = process.env.NODE_ENV === 'production';
const port = isProd ? 3000 : 3001;

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Compute the build path and index.html path
if (isProd) {
	const buildPath = path.resolve(__dirname, '../../dist/frontend');
	const indexHtml = path.join(buildPath, 'index.html');
	app.use(express.static(buildPath));
	app.get('*', (req, res) => res.sendFile(indexHtml));
}

export default app;
