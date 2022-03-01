import { useState } from "react"
import { addTranslation } from "../api/translation"
import TranslationForm from "../components/Translation/TranslationForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Translation = () => {

    const { user, setUser } = useUser()
    const [translation, setTranslation] = useState()

    const handleSubmitTranslation = async (text) => {
        console.log(text);

        const [error, patchUser] = await addTranslation(user, text)

        if (error !== null) {
            return
        }

        storageSave(STORAGE_KEY_USER, patchUser)
        setUser(patchUser)

        const translation = text.split("").map((char, index) => {

            const imagePath = "individial_signs/" + char + ".png"

            return (
                <img src={imagePath} alt="" key={index} height={60} width={60} />
            )
        })
        setTranslation(translation)
    }
    return (
        <>
            <section id="translate-word">
                <TranslationForm onTranslate={handleSubmitTranslation} />
                <div class="translationSignsDiv shadow p-3 mb-5 bg-white rounded">
                    <h3>
                        {translation}
                    </h3>
                </div>
            </section>
        </>
    )
}

export default withAuth(Translation) 