// app.js
const express = require('express');
const userRoutes = require('./Router/userRoutes');
const documentRoutes = require('./Router/documentRoutes');

const app = express();
app.use(express.json());

// Rotas
app.use('/users', userRoutes);
app.use('/documents', documentRoutes);

module.exports = app;
