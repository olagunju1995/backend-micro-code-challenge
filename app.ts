import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
 
 const PORT = 8000;
 const app = express();
 app.use(cors());
 app.use(bodyParser.json());


 app.listen(PORT, () => {
      console.log(`server statrted at https://localhost:${PORT}`);
    });
    
  export default app  