
import { useState } from 'react';
// import './label.css';

// interface Props{
//     'Modules': string[]
// }
// interface Props{
//     'children' : string
// }

const listModules = [
    'Arabic',
    'France',
    'Dev Info',
    'Front-End'
];

const Label = () => {
    // const Parent_Modules = props?.Modules;
    // Parent_Modules.push('Back-end');

    // const [nom, setNom] = useState('Karim');
    // const [age, setAge] = useState(18);




    const [modules, setModules] = useState(listModules);

    // const changeState  = () =>{
    //     setNom('Ahmed');
    //     setAge(20);
    // }

    const AddElement = () => {
        setModules(
            modules => [... modules, 'new ']            
            );
    }
    return (
        <>
            {/* <ul>
            {Parent_Modules.map(elem => {
                return <li key={elem}>{elem}</li>
            })}
        </ul> */}

            {/* <p>
            Nom here : {nom}
        </p>
        <br />
        <p>
            Age Here : {age}
        </p>
        
        <button onClick={changeState}>
            Changer State 
        </button> */}

            <ul>
                {modules.map((elem) => {
                    return <li>{elem}</li>
                })}
            </ul>


            <button onClick={AddElement}>Push new element</button>
        </>
    );
}

export default Label;