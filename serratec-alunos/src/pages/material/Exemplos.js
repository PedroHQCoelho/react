import {Button, Container, Box} from '@material-ui/core';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextoNegrito from "../../components/TextoNegrito";

const Exemplos = () => {
  const alunos = [
    {
      nome: "Pedro",
      idade: 34,
      cidade: "Teresópolis",
    },
    {
      nome: "André",
      idade: 32,
      cidade: "Rio de Janeiro",
    },
    {
      nome: "Mainny",
      idade: 24,
      cidade: "São Paulo",
    },
  ];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "blueviolet",
        }}
      >
        <TableContainer sx={{ maxWidth: "650px" }} component={Paper}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <TextoNegrito>Nome</TextoNegrito>
                </TableCell>
                <TableCell align="right">
                  <TextoNegrito>Idade</TextoNegrito>
                </TableCell>
                <TableCell align="right">
                  <TextoNegrito>Cidade</TextoNegrito>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                alunos.map((aluno) => (
                  <TableRow key={aluno.nome}>
                    <TableCell align="right">{aluno.nome}</TableCell>
                    <TableCell align="right">{aluno.idade}</TableCell>
                    <TableCell align="right">{aluno.cidade}</TableCell>
                  </TableRow>
                ))
                // percorrerAlunos();
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Container>
  );

    return (
        <>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </>
    );
};
export default Exemplos;