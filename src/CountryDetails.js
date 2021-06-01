import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function CountryDetails(props) {
  const {
    name,
    flag,
    capital,
    region,
    population,
    area,
    borders,
    numericCode,
    currencies,
    languages,
    alpha3Code,
    timezones,
    toggleDrawer,
  } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <img src={flag} alt="flag" width="32px" />
          </Avatar>
        }
        action={
          <IconButton aria-label="close" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        }
        title={name}
        subheader={region}
      />
      <Divider />
      <CardContent>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Capital</TableCell>
                <TableCell>{capital}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Country Code</TableCell>
                <TableCell>{alpha3Code}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Population</TableCell>
                <TableCell>{population}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Area</TableCell>
                <TableCell>{area}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Numeric code</TableCell>
                <TableCell>{numericCode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Borders</TableCell>
                <TableCell>
                  {borders?.map((border) => (
                    <span>{border} </span>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Timezones</TableCell>
                <TableCell>
                  {timezones?.map((timezone) => (
                    <span>{timezone} </span>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Main Language</TableCell>
                <TableCell>
                  {languages && languages[0].name} |{" "}
                  {languages && languages[0].nativeName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell>
                  {currencies && currencies[0].name} |{" "}
                  {currencies && currencies[0].symbol}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default CountryDetails;
