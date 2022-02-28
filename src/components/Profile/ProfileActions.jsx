import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"


const ProfileActions = () => {

    const {user, setUser} = useUser()

    const logOutClick = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const clearHistoryClick = async () => {
        if (!window.confirm("Are you sure you want to delete your history?")) {
            return;
        }

        const [error] = await clearHistoryClick(user.id);

        if(error !== null) {
            return;
        }

        const newUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, newUser)
        setUser(newUser)
    }
 
    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button onClick={clearHistoryClick}>Clear history</button></li>
            <li><button onClick={logOutClick}>Log out</button></li>
        </ul>
    )
}

export default ProfileActions