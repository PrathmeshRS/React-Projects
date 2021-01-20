import { Checkbox, IconButton } from '@material-ui/core';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './EmailRow.css';
import { selectMail } from './features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
        );

        history.push("/mail");
    };

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox size="small" />
                <IconButton size="small">
                    <StarBorderOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <LabelImportantOutlinedIcon fontSize="small" />
                </IconButton>
            </div>
            <div className="emailRow__title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__message">
                <h4>{subject}{" "}
                    <span className="emailRow__description">
                        - {description}
                    </span>
                </h4>
            </div>
            <div className="emailRow__time">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default EmailRow;
