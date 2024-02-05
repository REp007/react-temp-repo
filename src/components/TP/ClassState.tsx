import React, { Component, ReactNode } from "react";



type Props = {
    'nom': string;
    'age' : number;
};


class ClassState extends Component<Props> {

    constructor(props:Props) {
        super(props);

        this.state = {
            nom: props.nom,
            age : props.age
        };
    }

    changeState = () => {
        this.setState({
            nom : this.props.nom === 'karim' ? 'ahmed' : 'karim',
            age : this.props.age === 18 ? 25 : 18 
        });
    };

    render(): ReactNode {
        return (
            <>
                <h1 className="text-3xl font-bold underline">
                    From class!
                </h1>
                <div>
                    <ul>
                        <li>Nom : {this.state.nom}</li>
                        <li>Age :  {this.state.nom}</li>
                    </ul>
                </div>

                <button className='bg-black text-yellow-100 rounded-md p-0.5' onClick={this.changeState}>
                    Change State
                </button>
            </>
        );
    }
}

export default ClassState;
