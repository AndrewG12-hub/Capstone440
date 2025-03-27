import Alerts from "./Alerts";

import FitbitLoginForm from "./FitbitLoginForm";
import FitbitSyncButton from "./FitbitSyncButton";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../context/AuthContext"
import DashboardSideBar from "./sidebar";

//Boot Strap network for design
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card, Form, Button} from "react-bootstrap";
import ChatGPT from "./chatGPT";



function HomePage() {
  const navigate = useNavigate();
  const { isFitbitSynced } = useAuth();


{isFitbitSynced ? <></> : <FitbitLoginForm/>}
      <FitbitSyncButton/>
      

  return (
      
      <Container>
        <div><DashboardSideBar/></div>
        
        <div><ChatGPT/></div>

        <div><Alerts/></div>
      </Container>
  );
}

export default HomePage;
