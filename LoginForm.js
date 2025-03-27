import { useState, useEffect } from "react";
import { loginUser, loginWithFitbit } from "../api";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"; // Import useNavigate


//Boot Strap network for design
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card, Form, Button } from "react-bootstrap";

const LoginForm = ({ setUser }) => { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate("/home"); // Redirect if already logged in
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const response = await loginUser(username, password);
        
       if (response.success) {
            setIsLoggedIn(true)
            setUser(response.data); // Store user session
            navigate("/home");
        } else {
            setError(response.error);
        }
    };

    const handleFitbitLogin = async () => {
        const response = await loginWithFitbit();
        if (response.success) {
            setUser(response.data);
            navigate("/home");
        } else {
            setError(response.error);
        }
    };


    return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" style={{paddingLeft:"500px"}} >
        <Card style = {{width: "22rem"}} className = "shadow p-4">
        
            <h2 className="text-center mb-4">Login</h2>
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
            
            
            <Button onClick={() => navigate("/home")} variant="primary" type="submit" className="w-100" >Login</Button>



            <div className="text-center mt-3">
            <Button variant="link" onClick={() => navigate("/register")}>
              Register New Account
            </Button>
            </div>


            <Button onClick={handleFitbitLogin} className="w-100 mt-2" style = {{backgroundColor:"#B7B0B0",border:"none",color:"black"}}>
            Login with Fitbit
          </Button>
            
        </Form>
        </Card>
    </Container>
    );
};

export default LoginForm;



