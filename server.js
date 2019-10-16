const app = require('./app');
// const http = require('http');

const port = 5000;
app.listen(port, () => console.log(`HURRAY! Server started on port ${port}`))

// http.createServer(app).listen(process.env.PORT);
