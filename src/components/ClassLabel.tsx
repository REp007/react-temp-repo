import React, { Component, ReactNode } from "react";

type WelcomeProps = {
    // 'Modules': string[]; // Uncomment this line if you want to use props
};

type WelcomeState = {
    modules: string[];
};

const listModules = [
    'Arabic',
    'France',
    'Dev Info',
    'Front-End'
];

class Welcome extends Component<WelcomeProps, WelcomeState> {

    constructor(props: WelcomeProps) {
        super(props);

        this.state = {
            modules: listModules
        };
    }

    changeState = () => {
        this.setState({
            modules: [...listModules, 'new']
        });
    };

    render(): ReactNode {
        return (
            <>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <div>
                    <ul>
                        {this.state.modules.map((elem, index) => {
                            return <li key={index}>{elem}</li>
                        })}
                    </ul>
                </div>

                <button className='bg-black text-yellow-100 rounded-md p-0.5' onClick={this.changeState}>
                    Change State
                </button>
            </>
        );
    }
}

export default Welcome;
