import { useState, useEffect } from "react";


// interface DempProps {}



const Count = () => {

    const [count, setCount] = useState(0);

    useEffect(() =>{
        // The Code that we want to run


        console.log(`The Count is ${count}`)

        // Optional return Function
        return() =>{
            console.log(`I am being cleaned up!`);
        }
    }, [count]); // The Dependency array

    return (
        <>
            <div className="container">
                <div className="number-count ms-30 ">
                    <p>
                        <span className="text-center">Count : { count }</span>
                    </p>
                </div>
                <div className="buttons flex">
                    <button type="button" onClick={() => setCount(count - 1) } className="p-3 border-spacing-2 bg-slate-600 m-3 text-white rounded-md">Decrement</button>
                    <button type="button" onClick={() => setCount(count + 1) } className="p-3 border-spacing-2 bg-slate-600 m-3 text-white rounded-md">Increment</button>
                </div>
            </div>
        </>
    )
}

export default Count;