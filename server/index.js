const app = require('express')();
const cors = require('cors');
const api = require('./controllers');

app.use(cors());
app.use('/api', api);

const server = app.listen(3100, () => {
	console.log(`Server is running on port ${server.address().port}`);
});
