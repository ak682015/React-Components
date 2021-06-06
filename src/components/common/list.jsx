import React, { Component } from 'react';

const List = (props) => {
        const { itemLists, textProperty, valueProperty ,onItemClick, selectedItem } = props;
        return (
            <React.Fragment>
                <ul className="list-group">
                    { itemLists.map( item => (
                        <li
                            key={ item[valueProperty] }
                            className={ item===selectedItem ? "list-group-item active" : "list-group-item"}
                            onClick={() => onItemClick(item)}>{ item[textProperty] }
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
}

List.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id',
}
export default List;