import { useState } from "react";
import { Container, Card, Form, Button} from "react-bootstrap";
const FitbitSyncButton = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const syncData = async () => {
        setLoading(true);
        setMessage("");

        const response = await fetch("/fitbit/sync", {
            method: "POST",
            credentials: "include",
        });

        const data = await response.json();
        setMessage(data.message || data.error);
        setLoading(false);
    };

    return (
        <div >
            <Button onClick={syncData} disabled={loading} style = {{margin: "-150% 10px 0% 10px",backgroundColor:"#7D7D7D", border:"none", width:"200px"}} >
                {loading ? "Syncing..." : "Sync Fitbit Data"}
            </Button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FitbitSyncButton;