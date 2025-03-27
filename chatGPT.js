import React from 'react';
import { useAuth } from "../context/AuthContext"
import AnalyzeDataButton from './AnalyzeDataButton';

import { Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


function ChatGPT() {
    return(
        
       <Container className="d-flex flex-column align-items-start p-3" style={{margin:"-45% 0px 0% 250px",width:"300px",height:"500px"}}>
        <div>
            <h2>ChatGPT Analysis</h2>
            <AnalyzeDataButton/>
        </div>

       </Container>
        
      
    );
};

export default ChatGPT;