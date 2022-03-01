const ProfileHeader = ({ username }) => {
    return (
        <header>
            <h4 className="profileHistorySection">Welcome back, {username}! </h4>
        </header>
    )
}

export default ProfileHeader