import React from "react"
import {Title, Template, Subtitle} from "../components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/spaces/card';
import spacesCardList from '../pages/spaces-card-data.json';
import CustomButton from '../components/buttons/CustomButton';

const useStyles = makeStyles({
    grid: {
        padding: '3%', 
        display: 'grid', 
        gridAutoRows: '1fr', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        width: '100%', 
        height: '30%'
    },

    request: {
        textAlign: 'right'
    },

    requestbutton: {
        backgroundColor: '#ffffff',
        border: '2px solid #0072ce',
        borderRadius: '10px',
        paddingTop: '8px', 
        paddingBottom: '8px', 
        paddingLeft: '12px', 
        paddingRight: '12px', 
        marginLeft: '10px', 
        marginRight: '4%', 
        color: '#0072ce', 
        cursor: 'pointer'
    }
})

export default function Spaces() {
    const classes = useStyles();
    const cards = spacesCardList.map(function(card) {
        let images = require.context('../assets/images/spaces', true);
        let image = images('./' + card.imgpath);
        return <Card 
            title={card.title}
            tag={card.tag}
            description={card.description}
            imgpath={image}
            imgtitle={card.imagetitle}>
        </Card>;
    });
    return (
        <Template active={'spaces'} title={'Spaces'}>
            <div style={{textAlign:'center', width:'60%', marginLeft:'auto', marginRight:'auto', marginTop:'5%'}}>
                <Title>Virtual Spaces</Title>
                <div style={{minHeight: '20px'}}>
                    <h5 style={{textAlign:'center', color:"#000000", fontSize: "20px", fontWeight: "bold", textTransform:"none"}}>
                        A new way to kindle interests, virtually.
                    </h5>
                    <h5 style={{textAlign:'center', color:"#000000", fontSize: "20px", textTransform:"none"}}>
                        With specified communities on Slack, you <br></br> can find the channel that suits your needs.
                    </h5>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
                <CustomButton text={"Join The Community"} color={"blue"} size={"small"} 
                    href={"https://www.facebook.com/columbiavirtualcampus/"}/>
            </div>
            <div className={classes.grid}>{cards}</div>
            <div className={classes.request}>
                <span></span>
                Can't find your community?                
                <CustomButton className={classes.requestbutton} 
                    color='blue'
                    size='small' 
                    href='https://docs.google.com/forms' 
                    text='REQUEST NEW SPACE'/>
            </div>
        </Template>
    );
}