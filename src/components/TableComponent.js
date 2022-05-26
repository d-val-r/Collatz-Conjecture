import React from 'react';

const TableComponent = ({data}) => {
    return (
        <table id="collatz-table">
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