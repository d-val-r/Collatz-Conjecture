import React, {useState} from 'react';
import "../css/CollatzCalculator.css"

const CollatzCalculator = ({setData}) => {

    const [num, setNum] = useState(0);

    const calculate = (number) => {
        let data = [{x: 0, y: number}];
        let count = 1;
        while (number !== 1 && count < 10000) {
            if (number % 2 === 0) {
                number /= 2;
            } else {
                number = (3 * number) + 1;
            }
            data = data.concat({x: count++, y: number});
        }

        setData(data);
    }

    return (
        <div id='user-input-component'>
            <label>
                Number:
                <textarea value={num} onChange={(event) => setNum(Number(event.target.value))}></textarea>
            </label>
            <button onClick={() => calculate(num)}>Calculate</button>
        </div>
    )
}


export default CollatzCalculator;