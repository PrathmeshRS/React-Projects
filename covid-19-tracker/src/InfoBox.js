import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import "./InfoBox.css";
import { prettyPrintStat } from './util';

function InfoBox({ title, isred, cases, active, total, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${isred && "infoBox--red"}`}>
            <CardContent>
                {/* Title */}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isred && "infoBox__cases--green"}`}>{prettyPrintStat(cases)}</h2>

                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
                {/* Number of cases */}
                {/* Number of cases total */}
            </CardContent>
        </Card>
    )
}

export default InfoBox
