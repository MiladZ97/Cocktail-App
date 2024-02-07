import { html, component } from 'haunted';
import styles from './styles.css';
const ShoppingList = component(function ShoppingList({ ingredients }) {
    const printShoppingList = () => {
        const printContents = ingredients.join('<br/>');
        let win = window.open();
        win?.document.write(printContents);
        win?.print();
        win?.close();
    };
    return html `
        <style>
            ${styles}
        </style>

        <div class="shopping-list-parent">
            <div class="shopping-list-container">
                <h2 class="shopping-list-title">Shopping List</h2>
                <ul id="shopping-list">
                    ${ingredients.map((ingredient) => html `<li class=" shopping-list-item">${ingredient}</li>`)}
                </ul>
                <button class="print-button" @click=${printShoppingList}>print the shopping list</button>
            </div>
        </div>
    `;
});
customElements.define('shopping-list', ShoppingList);
//# sourceMappingURL=ShoppingList.js.map