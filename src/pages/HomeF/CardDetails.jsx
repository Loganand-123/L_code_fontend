import { Box, Button, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import React ,{useState}from "react";
import data from "./Cdata.json"

export default function Carddeti() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const card = data.card.find(card => card.cnum === searchTerm);
  
    if (card) {
      const area = card.area[0];
      const score = card.score[0];
      const formattedResult = [
        { key: "a1", value: area.a1, score: score.s1 },
        { key: "a2", value: area.a2, score: score.s2 },
        { key: "a3", value: area.a3, score: score.s3 }
      ];
  
      setResult(formattedResult);
    } else {
      setResult(null);
    }
  };
  return (
    <section id='carddetails' style={{backgroundColor:"pink"}}>
      <Box p={4}>
        <Box m={1} pb={5} display={"flex"}>
          <Typography
            variant="h4"
          >
            Card Details:
          </Typography>
          <TextField
            id="card-no"
            label="Number"
            variant="outlined"
            sx={{height:"55px",margin:"5px"}}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        {result && (
          <Box>
            <Typography variant="h5">Result:</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Area</TableCell>
                    <TableCell>Score</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {result.map(row => (
                    <TableRow key={row.key}>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.score}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </section>
  );
}
