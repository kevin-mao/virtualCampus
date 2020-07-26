import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from '@material-ui/core/styles';
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import * as firebase from "firebase";

import Button from "../material-kit-components/CustomButtons/Button";
import { cardTitle } from "../../assets/material-kit-assets/jss/material-kit-react";
import {CustomTheme} from "../";
import GridItem from "../material-kit-components/Grid/GridItem.js";
import GridContainer from "../material-kit-components/Grid/GridContainer.js";

const theme = CustomTheme;

const formatTime = function(hours, min) {
    let h = hours>12?hours-12:hours;
    let m = min<10?'0'+min.toString():min.toString();
    let add = hours>12?'PM':'AM';
    return h + ':' + m + add
};

const useStyles = makeStyles ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: 500,
        margin: 25
    },
    cardTitle,
    textMuted: {
        color: "#6c757d"
    },
    button:{
        boxShadow:"none",
        marginTop: 0,
        marginBottom: 10
    },
    button3:{
        boxShadow:"none",
        backgroundColor:"#BFD8E950",
        margin:"15px",
        marginLeft:"0px",
        marginTop: 0,
        marginBottom: 10
    },
    addNewButton:{
        // float:'right',
        boxShadow:"none",
        fontSize: 20,
    },
    learnMoreModal: {
        boxShadow:"none",
        fontSize: 15,
    }
});

export default function AdminInterviewModal({open, closeDo, event, setSubmitStatus}) {
    const classes = useStyles();

    return(
        <Modal
            style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={closeDo}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div style={{backgroundColor: theme.palette.background.paper,
                    border: '2px solid #000',
                    boxShadow: theme.shadows[5],
                    padding: theme.spacing(2, 4, 3),
                    maxWidth: 500,
                    margin: 25}}>
                    <GridContainer style={{marginTop:0, marginBottom:0}}>
                        <GridItem xs={6}>
                            <h4 style={{color:"#4284C8"}} className={classes.cardTitle}>{event.host_name}</h4>
                            <p>{event.available ? 'Available': 'Not availaible'}</p>
                        </GridItem>
                        <GridItem xs={6}>
                            <h5 style={{color:"black"}} >{formatTime(event.start_date.getHours(),event.start_date.getMinutes())} {event.timeZoneGMT}</h5>
                            <p>{event.approved ? 'Approved': 'Not approved'}</p>
                        </GridItem>
                    </GridContainer>
                    <div style={{ color: "#F1945B", backgroundColor: "#F1945B", height: 3, marginBottom: "0.7em"}}/>
                    <p>{event.host_bio}</p> 
                    <p>Host email: {event.host_email}</p>
                    <p>Resume: {event.resume}</p>
                    <p>Interviews done: {event.host_interviewExp}</p>
                    <p>Max per week: {event.week_availability}</p>
                    <p>Time comments: {event.time_comments}</p>
                    {
                        !event.available && 
                        <>
                            <p>attendee name: {event.attendee_name}</p>
                            <p>attendee email: {event.attendee_email}</p>
                            <p>interview comments: {event.interview_comments}</p>
                        </>
                    }
                    {event.available && 
                        <Button onClick={async () => {
                            let db = firebase.firestore();
                            await db.collection("technical").doc(event.event_id).delete();
                            window.location.reload();
                        }}
                        style={{
                            background: "white",
                            color: "red",
                            marginLeft: "10%"
                        }}>Delete</Button>
                    }
                    {!event.approved && 
                        <Button onClick={async () => {
                            let db = firebase.firestore();
                            await db.collection("technical").doc(event.event_id).update({
                                approved: true
                            });
                            window.location.reload();
                        }}
                        style={{
                            background: "white",
                            color: "green",
                            marginLeft: "10%"
                        }}>
                            Approve
                        </Button>
                    }
                </div>
            </Fade>
        </Modal>
    )
}