import { css } from 'lit';

/* Searchbar */
export default css`
    .search-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
    }

    .search-input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 1rem;
        font-size: 14px; 
        width: 200px; 
    }

    .search-button {
        padding: 10px 20px;
        background-color:
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .search-button:hover {
        background-color: #0056b3;
    }
`