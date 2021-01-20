import { IconButton } from '@material-ui/core';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from 'react';
import { useHistory } from "react-router-dom";
import "./Mail.css";
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {

    const history = useHistory();

    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton >
                        <MoveToInboxIcon fontSize="small" />
                    </IconButton>
                    <IconButton >
                        <ErrorIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <EmailIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon fontSize="small" />
                    </IconButton>
                    <IconButton >
                        <CheckCircleIcon fontSize="small" />
                    </IconButton>
                    <IconButton >
                        <LabelImportantIcon fontSize="small" />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton >
                        <UnfoldMoreIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <PrintIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>
                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;