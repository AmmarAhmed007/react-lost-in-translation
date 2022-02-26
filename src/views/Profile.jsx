import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {
    
    const { user } = useUser()

    return (
        <>
        <h2>Profile page</h2>
        <ProfileHeader username={ user.username }/>
        <ProfileActions />
        <ProfileTranslationHistory translations={ user.translations }/>
        </>
    )
}

export default withAuth(Profile) 