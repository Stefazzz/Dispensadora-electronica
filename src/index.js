import express from 'express';
import morgan from 'morgan';
import paymentRoutes from './routes/payment.routes.js';
import {PORT} from './config.js'

const app = express();

app.use(morgan('dev')) //mostrar las peticiones en consola que se estan realizando, asi como los resultados 
app.use(paymentRoutes);

app.listen(PORT, () => {
    console.log('Server on port', PORT);
});
