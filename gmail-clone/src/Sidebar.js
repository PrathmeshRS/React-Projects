import React from "react";
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon fontSize="large" className="sidebar__composeIcon" />} className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
            >Compose</Button>
            <SidebarOption title="Inbox" Icon={InboxIcon} number={50} selected={true} />
            <SidebarOption title="starred" Icon={StarIcon} number={14} />
            <SidebarOption title="snoozed" Icon={AccessTimeIcon} number={null} />
            <SidebarOption title="sent" Icon={NearMeIcon} number={21} />
            <SidebarOption title="drafts" Icon={NoteIcon} number={21} />
            <SidebarOption title="[imap]/trash" Icon={LabelImportantIcon} number={11} />
            <SidebarOption title="more" Icon={ExpandMoreIcon} number={null} />
            <div className="sidebar__footer">
                <div className="sidebar__footer__icons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}



export default Sidebar;