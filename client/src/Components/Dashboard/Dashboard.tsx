import React, { useEffect, useState } from "react";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import useStyle from "./styles";

interface Column {
  id: 'cve' | 'date' | 'severity' | 'desc',
  label: string,
  minWidth?: number,
  align?: 'left',

};
const columns: Column[] = [
  { id: 'cve', label: 'CVE ID', minWidth: 170 },
  { id: 'date', label: 'PUBLISHED DATE', minWidth: 170 },
  { id: 'severity', label: 'SEVERITY', minWidth: 170 },
  { id: 'desc', label: 'DESCRIPTION', minWidth: 170 },
]

const dataLine = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [{
    label: 'Critical',
    data: [0, 500],
    borderColor: '#1de9b6',
    backgroundColor: '#1de9b6'
  },
  {
      label: 'Major',
    data: [0, 500],
    borderColor: '#2196f3',
    backgroundColor: '#2196f3'
  },
  {
      label: 'Minor',
    data: [0, 500],
    borderColor: '#ff5722',
    backgroundColor: '#ff5722'
  }],
 
}


const Dashboard = () => {
  const classes = useStyle();
  const [data, setData] = useState<any[]>([]);

 // const item = { cve: { CVE_data_meta: { ID: "number" }, description: { description_data: { value: "string" }}},  severity: "string" , publishedDate: "number"} 

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(resData => setData(resData.data))
      
  }, []);

  
  

   console.log(data)
  return (
    <Box className={classes.box}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item =>
                <TableRow>
                  <TableCell key={item.id} align={item.align} style={{ minWidth: item.minWidth }} > {item?.cve?.CVE_data_meta?.ID} </TableCell>
                  <TableCell key={item.id} align={item.align} style={{ minWidth: item.minWidth }} > {item.publishedDate} </TableCell>
                  <TableCell key={item.id} align={item.align} style={{ minWidth: item.minWidth }} > {item?.impact?.baseMetricV2?.severity} </TableCell>
                  <TableCell key={item.id} align={item.align} style={{ minWidth: item.minWidth }} > {item?.cve?.description?.description_data[0].value} </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper className={classes.chart}>
        
        <Line data={dataLine} type='string'className={classes.chart} />
        
       </Paper>
    </Box>

  );
};

export default Dashboard;
