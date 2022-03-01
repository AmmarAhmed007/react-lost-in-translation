import { useForm } from "react-hook-form"

const TranslationForm = ({onTranslate}) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = ({translateWord}) => {
        onTranslate(translateWord)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset class="translationField">
                <label htmlFor="translate-word"></label>
                <input class="translationInput animate__animated animate__fadeInDown" type="text" {...register('translateWord')} placeholder="Type in a word"/>
            </fieldset>

            <button type="submit">Translate</button>

        </form>
    )
}

export default TranslationForm