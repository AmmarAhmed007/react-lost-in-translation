import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"


const ProfileActions = () => {

    const { setUser } = useUser()

    const logOutClick = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={logOutClick}>Log out</button></li>
        </ul>
    )
}

export default ProfileActions