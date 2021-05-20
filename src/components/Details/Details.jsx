import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Doughnut } from "react-chartjs-2";

import useTransactions from "../../hooks/useTransactions";

const useStyles = makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 0.5)",
  },
}));

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader="Sub header" />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
