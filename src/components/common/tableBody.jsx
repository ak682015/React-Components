import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path) ;
    }

    createKey =(item, column) => {
        return item._id + (column.path || column.key)
    }
    render () {
        const {rows, columns} = this.props;
        return (
            <React.Fragment>
                <tbody>
                {rows.map(row => (
                    <tr key={row._id}>
                        {columns.map(column => (
                            <td key={this.createKey(row, column)} >{this.renderCell(row, column)}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </React.Fragment>
        );
    }
}

export default TableBody;