import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import { CustomButton, CustomHeader, Template, Title } from "../components";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: '#FFFFFF',
  border: 1,
  borderRadius: 10,
  borderColor: '#0072CE',
  color: '#0072CE',
  height: 48,
  width: 300,
  padding: '0 30px',
  backgroundImage: './img/img 2.png'
});

// export default function StyledComponents() {
//   return <MyButton>Join The Community</MyButton>;
// }

export default function Spaces() {
    return (
        <Template title={'Spaces'}>
        <div style={{textAlign:'center', width:'60%', marginLeft:'auto', marginRight:'auto', marginTop:'5%'}}>
              <Title>Virtual Spaces</Title>
              <div>
                <div style={{minHeight: '20px'}}/>
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
                href={"https://www.facebook.com/columbiavirtualcampus/"} 
                      />
        </div>
                        
        </Template>

    );

}

