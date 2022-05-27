import React from 'react';
import "../css/TableComponent.css";

const TableComponent = ({data}) => {
    return (
        <table hidden={data.length > 0 ? false : true} id="collatz-table">
            <tr>
                <th>Iteration</th>
                <th>Collatz Value</th>
            </tr>
            {data.map(entry => {
                return (
                    <tr>
                        <td>{entry.x}</td>
                        <td>{entry.y}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default TableComponent;