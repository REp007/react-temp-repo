interface Props {
    'nom': string,
    'age': number,
    'handleChange': () => void
}

const FunctionState = (props: Props) => {
    return (
        <>
            <p>
                Nom : {props.nom}
            </p>
            <p>
                Age : {props.age}
            </p>
            <button
                onClick={() => props.handleChange()}
            >Change Value</button>


        </>
    )
}

export default FunctionState;