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
            <Title itemStyle={classes.text}>Spaces</Title>
            <div className={classes.grid}>{cards}</div>
            <div className={classes.request}>
                <span></span>
                Can't find your community?                
                <CustomButton className={classes.requestbutton} 
                    color='#0072ce' 
                    size='small' 
                    href='https://docs.google.com/forms' 
                    text='REQUEST NEW SPACE'/>
            </div>
        </Template>
    );
}
