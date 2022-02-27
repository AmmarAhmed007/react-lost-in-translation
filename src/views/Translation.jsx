import { useState } from "react"
import TranslationForm from "../components/Translation/TranslationForm"
import withAuth from "../hoc/withAuth"

const Translation = () => {

    const [ translation, setTranslation ] = useState()

    const handleSubmitTranslation = (text) => {
        console.log(text);
        const translation = text.split("").map((char, index) => {

            const imagePath = "individial_signs/" + char + ".png"

            return (
                <img src={imagePath} alt="" key={index}/>
            )
        })
        setTranslation(translation)
    }
    return (
        <>
            <h2>Translation page</h2>

            <section id="translate-word">
                <TranslationForm onTranslate={handleSubmitTranslation} />
                <h3>
                    {translation}
                </h3>
            </section>
        </>
    )
}

export default withAuth(Translation) 