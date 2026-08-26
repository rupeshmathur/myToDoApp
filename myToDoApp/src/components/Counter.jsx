import { useState } from "react";
import Button from "./Button";

function Counter() {

    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>
            <Button disabled={false}
                className="primary"
                type="submit"
                onClick={increment}>
                Increment
            </Button>

            <Button disabled
                className="primary"
                type="submit"
                onClick={decrement}>
                Delete
            </Button>

            <Button disabled
                className="primary"
                type="submit"
                onClick={reset}>
                Reset
            </Button>
        </>
    );
}
export default Counter;