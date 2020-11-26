import React from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        margin: '3%',
        position: 'relative',
        backgroundColor: '#1d2c4d',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px gray',
        overflow: 'hidden',
        height: '240px',
        '&:hover':{
            '& $tag':{
                opacity: '0',
                transform: 'translate(0%, -100%)'
            },
            '& $imagetitle':{
                top: '0%',
                opacity: '0'
            },
            '& $imagecontainer':{
                height: '0px'
            },
            '& $textarea':{
                height: '240px'
            }
        }
    },


    tagcontainer: {
        position: 'absolute', 
        opacity: '1.0',
        textAlign: 'right', 
        padding: '4%', 
        top: '50%', 
        left: '50%', 
        width: '100%', 
        height: '100%', 
        transform: 'translate(-50%, -50%)'
    }, 

    tag: {
        transition: 'opacity 0.4s, transform 1s',
        backgroundColor: '#ffffff',
        opacity: '1.0',
        transform: 'translate(0%, 0%)',
        textAlign: 'center',
        display: 'inline-block',
        float: 'right',
        paddingTop: '3px', 
        paddingBottom: '3px', 
        paddingLeft: '5px', 
        paddingRight: '5px', 
        borderRadius: '4px'
    },

    
    imagecontainer: {
        transition: 'height 1s',
        textAlign: 'center',
        height: '240px', 
        overflow: 'hidden'
    },

    imagetitle: {
        transition: 'top 1s, opacity 0.6s',
        position: 'absolute',
        textAlign: 'center',
        lineHeight: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#ffffff',
        fontSize: 'xx-large',
        textShadow: '0 0 20px black',
    }, 

    imgcontainer: {
        height: '100%'
    }, 

    image: {
        opacity: '0.6',
        width: '100%', 
        height: '100%',
        objectFit: 'cover'
    },


    textarea: {
        transition: 'height 1s',
        borderRadius: '5px',
        transition: 'height 1s',
        height: '0px'
    },

    title: {
        fontSize: 'x-large'
    },

    text: {
        transition: 'height 1s',
        overflowY: 'hidden',
        height: '100%',
        backgroundColor: '#1d2c4d',
        color: '#ffffff',
        fontFamily: 'inherit',
        padding: '5%'
    }, 

    bold: {
        fontWeight: 'bold'
    }
})

export default function Card(props) {
    const classes = useStyles();
    const description = props.description;
    var description_elements = <p></p>;
    if (description != null){
        description_elements = description.map(function(paragraph) {
            if(paragraph.style == 'bold'){
                return <p className={classes.bold}>{paragraph.content}</p>;
            }
            else{
                return <p>{paragraph.content}</p>;
            }
        });
    }
    return (
        <div className={classes.card}>
            <div className={classes.imagecontainer}>
                <div className={classes.imgcontainer}>
                    <img 
                        src={props.imgpath}
                        alt={props.imgtitle}
                        className={classes.image}>
                    </img>
                </div>
                <div className={classes.imagetitle}>{props.title}</div>
            </div>
            <div className={classes.tagcontainer}><div className={classes.tag}>{props.tag}</div></div>
            <div className={classes.textarea}>
                <div className={classes.text}>
                    <p className={classes.title}>{props.title}</p>
                    {description_elements}
                </div>
            </div>
        </div>
    );
}