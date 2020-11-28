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

export default function AssignmentSubmissionList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{margin:'50px 10px 20px 30px'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 20}}>Reg. Number</TableCell>
            <TableCell style={{ fontSize: 20}}>Name</TableCell>
            <TableCell style={{ fontSize: 20}}>Submitted</TableCell>
            <TableCell style={{ fontSize: 20}} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.submission.map((student) => (
            <TableRow key={student.reg}>
                <TableCell>{student.reg}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.time},{student.date}</TableCell>
            <TableCell align="center">
                <button className="main-button" style={{backgroundColor:'#36B3CE',fontSize:'15px',borderRadius:'6px'}}>Download Attatchment</button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
