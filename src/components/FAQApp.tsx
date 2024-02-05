const questions = [
    {
        id: 1,
        title: "Is this a good product?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 2,
        title: "How much does it cost?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
        id: 3,
        title: "When can I get it?",
        info:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
];



import Questions from './Questions';

const FAQApp = () => {
    return (
        <>
            <div className="container">
                    <h1 className='text-center font-bold mt-8 mb-3'>FAQ Questions ? </h1>
                <div className=''>
                    {questions.map(question => {
                        return (
                            <Questions Question={question} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FAQApp