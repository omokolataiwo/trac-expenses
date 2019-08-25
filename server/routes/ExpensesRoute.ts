import express from 'express';

const app = express();

app.route('/').get((req, res) => res.json({ hello: 'world' }));
app.route('/').post((req, res) => res.json({ hello: 'world' }));

export default app;