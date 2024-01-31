import React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { AllahsName } from '../data/namesAllah.js';

const NameAllah = () => {
  return (
    <StyleContainer>
      <StyleBannerText>
        <h1>Аллах Тааланын 99 ысым-сыпаттары</h1>
      </StyleBannerText>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Номер</TableCell>
              <TableCell>Аллахтын 99 сыпаты</TableCell>
              <TableCell>Транискрипция Аллаха</TableCell>
              <TableCell>Значение Имя Аллаха</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AllahsName.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.transliteration}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyleContainer>
  );
};

export default NameAllah;

const StyleBannerText = styled('div')(() => ({
  textAlign: 'center',
  fontsize: '1.5rem',
  paddingBottom: '1rem',
}));

const StyleContainer = styled(Container)(() => ({
  borderRadius: '5px',
  padding: '2rem',
}));
