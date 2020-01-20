const http = require('http');
const app = require('./app');
let port;
if (process.env.NODE_ENV === 'dev') {
  port = process.env.DEV_PORT || 3001;
} else {
  port = process.env.PORT || 3000;
}
app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
  console.log(`Listening on port ${port}`);
});
