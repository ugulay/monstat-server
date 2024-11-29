import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

// Check whether we are in production env
const isProd = process.env.NODE_ENV === 'production';

console.log(process.env);

const app = express();
app.use(bodyParser.json());

app.get('/api/foo', (req, res) => res.json({ foo: 'bar' }));

// Compute the build path and index.html path
if (isProd) {
	const buildPath = path.resolve(__dirname, '../../dist/frontend');
	const indexHtml = path.join(buildPath, 'index.html');
	app.use(express.static(buildPath));
	app.get('*', (req, res) => res.sendFile(indexHtml));
}

export default app;