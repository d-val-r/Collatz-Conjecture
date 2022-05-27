import React from 'react';
import "../css/TableComponent.css";

const TableComponent = ({data}) => {
    return (
        <table id="collatz-table">
            <tr>
                <th hidden={data.length > 0 ? false : true}>Iteration</th>
                <th hidden={data.length > 0 ? false : true}>Collatz Value</th>
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