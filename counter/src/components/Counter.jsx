function Counter({ count, onIncrement, onDecrement }) {
    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
        </>
    );
}

export default Counter;
