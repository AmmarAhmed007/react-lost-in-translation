import { Link } from "react-router-dom"

const ProfileActions = () => {
    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button>Log out</button></li>
        </ul>
    )
}

export default ProfileActions