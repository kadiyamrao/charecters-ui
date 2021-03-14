import React, { Component } from 'react';

const tableHeadRows = ['Name', 'Role', 'Actions'];

const TableHead = () => {
    const header = tableHeadRows.map((row, index) => {
        return <th key={index}>{row}</th>
    })

    return (
        <thead>
            <tr>
                {header}
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    
    const rows = props.charecterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.role}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => props.removeCharecter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render()  {
        const {charecters: charecterData, removeCharecter} = this.props;
        
        return (
            <table className="table">
                <TableHead></TableHead>    
                <TableBody charecterData={charecterData} removeCharecter={removeCharecter}></TableBody>
            </table>
        )
    }
}

export default Table;