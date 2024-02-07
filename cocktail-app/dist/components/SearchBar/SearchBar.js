import { html, component, useState } from 'haunted';
import styles from './styles.css';
const SearchBar = component(function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleSearch = () => {
        onSearch(query);
    };
    return html `
        <style>
            ${styles}
        </style>

        <div class="search-container">
            <input class="search-input" type="text" .value=${query} @input=${(e) => setQuery(e.target.value)} />
            <button class="search-button" @click=${handleSearch}>Search</button>
        </div>
    `;
});
customElements.define('search-bar', SearchBar);
//# sourceMappingURL=SearchBar.js.map