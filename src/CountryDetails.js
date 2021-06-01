import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

function CountryDetails(props) {
  const {region, subregion, population, area, borders, numericCode, currencies, languages, alpha3Code} = props
  return (
    <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="left">Country Code</TableCell>
              <TableCell align="left">{alpha3Code}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Subregion, Region</TableCell>
              <TableCell align="left">{subregion}, {region}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Population</TableCell>
              <TableCell align="left">{population}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Area</TableCell>
              <TableCell align="left">{area}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Numeric code</TableCell>
              <TableCell align="left">{numericCode}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Borders</TableCell>             
              <TableCell align="left">{borders.map(country => (
                  <span>{country} </span> 
              ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Main Language</TableCell>
              <TableCell align="left">{languages[0].name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="left">{currencies[0].name} | {currencies[0].symbol}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </TableContainer>
  );
}

export default CountryDetails;