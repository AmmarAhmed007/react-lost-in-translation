const TranslationButton = ({ name, image }) => {
    return (
        <button>
            <aside>
                <img src={image} alt={name} width="50" />
            </aside>
            <section>
                <h5>{name}</h5>
            </section>
        </button>
    )
}

export default TranslationButton