import Message from "../layouts/Message.js"
import { useLocation } from "react-router-dom"

export default function Projects() {

    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    return (
    <div>
        <h1>Meus Projetos</h1>
        {message && (<Message msg={message} type="sucess"></Message>)}
    </div>) 
}