import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} 
        translation={translation} />)

    return ( 
        <section className="profileHistorySection">
            <h4>Your previous translations: </h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory