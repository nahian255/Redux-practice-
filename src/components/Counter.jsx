import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, name } from '../redux/features/counter/counterSlice'
import { useState } from 'react';
import { useGetDataQuery } from '../redux/features/dataFacth/realApi';


const Counter = () => {


    const {data:boka, error, } = useGetDataQuery()

    console.log(boka, 'reduxx')

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [num, setNum] = useState(1)

    const up = () => {
        const newNum = num + 1;
        setNum(newNum)
    };
    const down = () => {
        const newNum = num - 1;
        setNum(newNum)
    };



    return (

        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <div>
                <button >new page</button>
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
            </div>


            <section>
                <h1> new section</h1>

                <div>
                    <button onClick={()=> up()}> Growth</button>
                    <br />
                    <p>{num}</p>
                    <button onClick={()=>down()}> Down</button>
                </div>
            </section>
        </div>
    )
};

export default Counter; 