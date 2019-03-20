const path = require('path');
const Mali = require('mali');
import { Login } from './controller/MaliTest';

const PROTO_PATH = path.resolve(__dirname, './protos/request.proto');
const app = new Mali(PROTO_PATH, 'Authenticate');

app.use({Login});
app.start('127.0.0.1:50051');
