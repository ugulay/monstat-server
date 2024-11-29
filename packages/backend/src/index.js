import ExpressServer from './express';
import SocketServer from './socket';


// Check whether we are in production env
const isProd = process.env.NODE_ENV === 'production';
const _expressPort = isProd ? 3000 : 3001;
const _socketPort = 3002;


// Express Server
ExpressServer.listen(_expressPort, (err) => {
    if (err) {
        console.error(`ERROR: ${err.message}`);
    } else {
        console.log(`Listening on port ${_expressPort}, isProd: ${isProd}`);
    }
});


// Socket Server
SocketServer.listen(_socketPort, {});
