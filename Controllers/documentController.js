// controllers/documentController.js
let documents = [];

exports.createDocument = (req, res) => {
  const { name, status, userId } = req.body;
  const newDocument = { id: documents.length + 1, name, status, userId };
  documents.push(newDocument);
  res.status(201).json(newDocument);
};

exports.getAllDocuments = (req, res) => {
  res.status(200).json(documents);
};

exports.getDocumentById = (req, res) => {
  const document = documents.find((d) => d.id === parseInt(req.params.id));
  if (!document) return res.status(404).json({ message: 'Document not found' });
  res.status(200).json(document);
};

exports.updateDocument = (req, res) => {
  const { name, status } = req.body;
  const document = documents.find((d) => d.id === parseInt(req.params.id));
  if (!document) return res.status(404).json({ message: 'Document not found' });

  document.name = name || document.name;
  document.status = status || document.status;

  res.status(200).json(document);
};

exports.deleteDocument = (req, res) => {
  documents = documents.filter((d) => d.id !== parseInt(req.params.id));
  res.status(204).send();
};
