import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import httpService from "src/httpService";

export function ProtectedPage() {

    const [content, setContent] = useState("");
    const [showSpinner, setShowSpinner] = useState<boolean>(true);

    useEffect(() => {
        httpService.fetchWithAuth({url: '/users/me'})
            .then(response => response.json())
            .then(data => {
                setContent(JSON.stringify(data));
                setShowSpinner(false);
            });
    }, []);

    return (
        <div>
            <div>Content visible only after login:</div>
            {showSpinner ?
                <div className='Loader'><Spinner animation="border" variant="primary" /></div> :
                <div>Logged In User data from server is : {content}</div>
            }
        </div>
    );
}

export default ProtectedPage;