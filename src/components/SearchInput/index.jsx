import React, { Component } from 'react'
import './styles.css'
export class SearchInput extends Component {
    render() {
        const { value, onChangeInput } = this.props;
        return (
            <input
                type="search"
                placeholder="Pesquisa"
                className="search-input"
                onChange={onChangeInput}
                value={value}
            />
        )
    }
}

export default SearchInput
