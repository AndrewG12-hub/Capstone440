import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

//Boot Strap network for design
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card, Form, Button} from "react-bootstrap";

const RegisterForm = ({ setUser }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const response = await registerUser(username, password);
        if (response.success) {
            setSuccess(response.message);
            setUser({ username });  // Auto-login user (optional)
        } else {
            setError(response.error);
        }
       
    };

    return (

        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" style={{paddingLeft:"500px"}} >
        <Card style = {{width: "22rem"}} className = "shadow p-4">
            <h2 className="text-center mb-4">Register</h2>
            {error && <p className="error">{error}</p>}
             
            
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" onClick={() => navigate("/home")}>Register</Button>

            


            <Button onClick={() => navigate("/")} className="w-100 mt-2" style = {{backgroundColor:"#B7B0B0",border:"none",color:"black"}}>
            Back to Login
          </Button>
        </Form>
        </Card>
    </Container>

        
            
                
              
    );
};

export default RegisterForm;