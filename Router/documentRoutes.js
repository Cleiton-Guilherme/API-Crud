// routes/documentRoutes.js
const express = require('express');
const { createDocument, getAllDocuments, getDocumentById, updateDocument, deleteDocument } = require('../Controllers/documentController');
const router = express.Router();

router.post('/', createDocument);
router.get('/', getAllDocuments);
router.get('/:id', getDocumentById);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

module.exports = router;
