
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './src/server/routes/routes';
import config from './src/config';
import mongoose from 'mongoose';

const MONGO_URL = config.databaseUrl

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected at ${MONGO_URL}`))
  .catch(err => console.log(`Database connection error: ${err.message}`))


const app = express();

global.appRoot = path.resolve(__dirname);

app.use( bodyParser() );

app.use('/api/v1', router);
app.use ( '/', ( req, res, next ) => {
    res.sendFile(path.join(__dirname + '/src/client/index.html'));
});



app.listen(config.port, ()=> {
    console.log(`Server url : ${config.api.serverUrl}`)
});
