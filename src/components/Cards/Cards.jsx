import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Cargando...";
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(lastUpdate).toLocaleDateString("es-CO", options);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* Infected Card  */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infectados
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {date.slice(0, 1).toUpperCase() + date.slice(1).toLowerCase()}
            </Typography>
            <Typography variant="body2">
              Número de casos activos de COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* Recovered Card  */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recuperados
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {date.slice(0, 1).toUpperCase() + date.slice(1).toLowerCase()}
            </Typography>
            <Typography variant="body2">
              Número de personas recuperadas de COVID-19
            </Typography>
          </CardContent>
        </Grid>

        {/* Deaths Card  */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Fallecidos
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {date.slice(0, 1).toUpperCase() + date.slice(1).toLowerCase()}
            </Typography>
            <Typography variant="body2">
              Número de fallecidos a causa del COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
