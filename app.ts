import  * as express from 'express';
import * as cors from 'cors';
import * as  bodyParser from 'body-parser';
import routes from './routes';


 //const influencers = require('./mocks/influencers.json');
 
 const PORT = 8000;
 const app = express();
 app.use(cors());
 app.use(bodyParser.json());


 routes(app)

 app.listen(PORT, () => {
      console.log(`server statrted at https://localhost:${PORT}`);
    });
    
  export default app  