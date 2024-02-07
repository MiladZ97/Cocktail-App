import { css } from 'lit';

/* ShoppingList */
export default css`
    @media print {
        * :not(.printout):not(.printout *) {
            display: none;
        }

        .printout {
            display: block;
        }
    }

    .shopping-list-parent {
        margin-top: 2rem;
        width: 300px;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .shopping-list-container {
        margin-bottom: 20px;
    }

    .shopping-list-title {
        font-size: 24px;
        margin-bottom: 10px;
    }
    
    .shopping-list-item {
        font-size: 16px;
    }
    
    .print-button {
        padding: 8px 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .print-button:hover {
        background-color: #0056b3;
    }
`