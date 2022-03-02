const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(
	cors({
		origin: ['http://localhost:3000'],
	}),
);
app.use(express.static(__dirname + '/files'));
const directoryPath = path.join(__dirname, 'files');

app.get('/', (req, res) => {
	fs.readdir(directoryPath, function (err, files) {
		if (err) return console.log('Unable to scan directory: ' + err);
		res.send(files);
	});
});

app.listen(3001, () => {
	console.log('listening on http://localhost:3001/');
});
