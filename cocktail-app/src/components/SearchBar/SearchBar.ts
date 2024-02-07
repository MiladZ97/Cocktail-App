import { html, component, useState } from 'haunted';
import { ISearchBar } from '../../types/types';
import { Component } from 'haunted/lib/component';
import styles from './styles.css'

const SearchBar = component(function SearchBar(this: Component<ISearchBar>, { onSearch }: ISearchBar) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return html`
        <style>
            ${styles}
        </style>

        <div class="search-container">
            <input class="search-input" type="text" .value=${query} @input=${(e: Event) => setQuery((e.target as HTMLInputElement).value)} />
            <button class="search-button" @click=${handleSearch}>Search</button>
        </div>
    `;
});

customElements.define('search-bar', SearchBar);