import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const Styles = makeStyles((theme) => ({
  card: {
    maxHeight: "200%",
    display: "block",
    flexDirection: "column",
    minWidth: "200px",
    marginLeft: "13.5px",
    marginRight: "13.5px",
    float: "right",
    width: "100px",
    position: "center",
    borderRadius: "7px",
    justifyContent: "space-evenly",
    boxSizing: "border-box",
    marginBottom: "1rem",
  },
  cardMedia: {
    paddingTop: "6.25%",
    paddingButtom: "6.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Cards() {
  const styles = Styles();
  const [infoData, handleStats] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch("https://corona.lmao.ninja/v2/all"); //data source
    const infoData = await data.json();
    handleStats(infoData);
  };

  const formatter = new Intl.NumberFormat("ko");

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={styles.cardGrid}>
          <br />
          <br />
          <Grid container spacing={0} justify="space-evenly">
            <Card className={styles.card} variant="outlined" elevation={3}>
              <CardContent className={styles.cardContent}>
                <CardMedia className={styles.cardMedia} align="center">
                  <Typography color="secondary" style={{ fontSize: 18 }}>
                    총 사례 수
                  </Typography>
                  <Divider />
                  <Typography color="primary" style={{ fontSize: 30 }}>
                    {formatter.format(infoData.cases)}
                  </Typography>
                </CardMedia>
              </CardContent>
            </Card>

            <Card className={styles.card} variant="outlined">
              <CardContent className={styles.cardContent}>
                <CardMedia className={styles.cardMedia} align="center">
                  <Typography color="secondary" style={{ fontSize: 18 }}>
                    총 사망자 수
                  </Typography>
                  <Divider />
                  <Typography color="primary" style={{ fontSize: 30 }}>
                    {formatter.format(infoData.deaths)}
                  </Typography>
                </CardMedia>
              </CardContent>
            </Card>

            <Card className={styles.card} variant="outlined">
              <CardContent className={styles.cardContent}>
                <CardMedia className={styles.cardMedia} align="center">
                  <Typography color="secondary" style={{ fontSize: 18 }}>
                    총 회복자 수
                  </Typography>
                  <Divider />
                  <Typography color="primary" style={{ fontSize: 30 }}>
                    {formatter.format(infoData.recovered)}
                  </Typography>
                </CardMedia>
              </CardContent>
            </Card>
          </Grid>
          <br />
          <br />
        </Container>
      </main>
    </React.Fragment>
  );
}
