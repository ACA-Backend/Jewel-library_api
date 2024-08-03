
import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose';
import listEndpoints from 'express-list-routes';


const app = express();
const PORT = 5000;

//Middleware to parse json requests
app.use(express.json());

//Book routes
app.use('/api', routes);

//List all the routes
listEndpoints(app);

const connectionString = 'mongodb+srv://jewelchidinma:6H0cTxZA0BheMJTD@jewel.i40uyqp.mongodb.net/'


//connect to MongoDB
mongoose.connect(connectionString)

.then(() => {
  console.log('Database connection established');

app.listen(PORT, () => {
  console.log(`Server is running on port ${5000}`);
 
});
})

.catch(error => console.error('Database connection could not be established:', error));

export default app;




