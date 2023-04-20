import { useState } from "react";

//components
import Counter from "./components/Counter";

function App() {
    //counter state
    const [count, setCount] = useState(0);

    //increment  function
    const onIncrement = () => {
        if (count === 10) {
            setCount((prev) => prev);
        } else {
            setCount((prev) => prev + 1);
        }
    };

    //decrement function
    const onDecrement = () => {
        if (count === 0) {
            setCount((prev) => prev);
        } else {
            setCount((prev) => prev - 1);
        }
    };
    return (
        <>
            <Counter
                count={count}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        </>
    );
}

export default App;
