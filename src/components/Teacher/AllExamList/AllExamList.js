import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function AllExamList(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 20}}>#</TableCell>
            <TableCell style={{ fontSize: 20}}>Title</TableCell>
            <TableCell style={{ fontSize: 20}}>Status</TableCell>
            <TableCell style={{ fontSize: 20}}>Time</TableCell>
            <TableCell style={{ fontSize: 20}}>Date</TableCell>
            <TableCell style={{ fontSize: 20}} align="center">Action</TableCell>
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
                <TableCell align="center">
                    <Link to={"/teacher/allexam/"+ex.id}><button className="main-button">Detail</button></Link>
                    <button className="main-button" style={{marginLeft:'10px',backgroundColor:'rgb(165, 39, 39)'}}>Delete</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
