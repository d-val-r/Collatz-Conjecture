import React, {useState} from 'react';
import "../css/CollatzCalculator.css"

const CollatzCalculator = ({setData}) => {

    const [num, setNum] = useState(0);

    const calculate = (number) => {
        if (number <= 0) {
            setData([]);
            return;
        }
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
            <form id="form-field">
                <label for="textarea" className='child'>
                    Number:
                    <textarea id="textarea" value={num} onChange={(event) => setNum(Number(event.target.value))}></textarea>
                </label>
            </form>
            <div id='button-container'>
                <button className='child' onClick={() => calculate(num)}>Calculate</button>
                <button className='child' onClick={() => setData([])}>Reset</button>
            </div>
        </div>
    )
}


export default CollatzCalculator;