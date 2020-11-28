import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function StudentMyExamList(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Time</TableCell>
            <TableCell >Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.exam.map((ex,i) => (
            <TableRow key={ex.id}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{ex.title}</TableCell>
              <TableCell>{ex.status}</TableCell>
              <TableCell>{ex.time}</TableCell>
              <TableCell>{ex.date}</TableCell>
              {
                  ex.status==='Finished' ? 
                  <TableCell align="center">
                      <button className="main-button">Show Result</button>
                      <button className="main-button" style={{marginLeft:'10px'}}>Feedback</button>
                  </TableCell>
                  : <TableCell align="center">
                      <button className="main-button">Details</button>
                  </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
