import express from 'express';
import bodyParser from 'body-parser';
import  fs  from "fs";
import cors from 'cors';


const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "*",
  })
)



app.get('/data', (req, res, next) => {
  
    fs.readFile('./CVE.json', 'utf8', (err, data) => {
      
      const parseData = JSON.parse(data)
      const cveData = parseData.CVE_Items.filter(data => data.cve)
            
            const response = {
              data:[],
              filters:[]
            }
            

            function info (publishedDate, id, severity, ) {
              

              response.data = cveData;
              response.filters = []
            
            /*
            FILTER DATA
            */

            // FILTER IF YEAR

            if ( publishedDate ) {
              response.data = response.data.filter( d => d.publishedDate === publishedDate)
            }
            
            /*
            FILTER IF ID
            */

            if ( id ) {
              response.data = response.data.filter( d => d.id);
            }

            /**
             * Filter if severity
             */

             if ( severity ) {
              impact = cveData.impact.filter( s => d.severity );
            }

            /*
            Calculate available filters 
            */
            // Years filter

            const allYears = cveData.map( d => d.publishedDate )
            // get array only yeards

            const sortedAllYears = allYears.sort(); // Sort array

            const uniqueSortedAllYears = [...new Set(sortedAllYears) ];

            response.filters['Date'] = uniqueSortedAllYears;

            return response;
          }
          console.log( info())
          //res.send(info())
          res.json(info())

            

             
      }
    ) 
  }
)

  




app.listen(PORT, () => console.log(`Server Running on port: httml://localhost:${PORT}`))