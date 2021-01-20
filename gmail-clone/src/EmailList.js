import { IconButton, Checkbox } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import InboxIcon from '@material-ui/icons/Inbox';
import GroupIcon from '@material-ui/icons/Group';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        );
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settings__left">
                    <Checkbox fontSize="small" />
                    <IconButton size="small">
                        <ArrowDropDown fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon fontSize="small" />
                    </IconButton>

                </div>
                <div className="emailList__settings__right">
                    <IconButton>
                        <ChevronLeftIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                        <KeyboardArrowDownIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section title="primary" Icon={InboxIcon} selected color="red" />
                <Section title="social" Icon={GroupIcon} color="blue" />
                <Section title="promotions" Icon={LocalOfferIcon} color="green" />
            </div>

            <div className="emailList__list">
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}

            </div>
        </div>
    )
}

export default EmailList;