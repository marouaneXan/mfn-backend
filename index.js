const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

//mongodb connection
const connectDB = require('./config/db');
connectDB();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//cors
app.use(cors({origin: '*'}));

//***************************************Global Routes *********************************/
//Company Route
app.use('/api/companies/', require('./routes/CompanyRoute'));

//*************************************************************************************/

//run server
app.listen(PORT, () => console.log('Server running at the PORT ' + PORT));
