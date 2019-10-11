const PORT = process.env.PORT || 80;
const express = require('express');
const webserver = express();

const classifier = require('./classifier')

webserver.use(express.urlencoded());

webserver.get('/', express.static('public'));
webserver.post('/api/classify', classifier.handle);
webserver.listen(PORT);
