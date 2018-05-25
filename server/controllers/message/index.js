const router = require('express').Router();
const fs = require('fs');
const data = require('../../data/messages');

router.get('/', (req, res) => {
	res.send(data);
});

router.post('/', (req, res) => {
	const message = req.body;

	if (!message || !Object.keys(message).length) {
		res.end();
	}

	const stream = fs.createWriteStream(`${__dirname}/../../data/messages.json`);

	const newData = data.concat(message);
	stream.write(JSON.stringify(newData));

	res.send(newData);
});

router.patch('/:messageId', (req, res) => {
	const { messageId } = req.params;
	const patch = req.body;

	if (!(messageId && patch)) {
		res.end();
	}

	const stream = fs.createWriteStream(`${__dirname}/../../data/messages.json`);

	const newData = data.map(message => {
		if (message.id === messageId) {
			message = {
				...message,
				...patch,
			};
		}

		return message;
	});

	stream.write(JSON.stringify(newData));

	res.send(newData);
});

module.exports = router;
