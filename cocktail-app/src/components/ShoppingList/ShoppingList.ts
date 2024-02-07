import { html, component  } from 'haunted';
import { IShoppingList } from '../../types/types';
import { Component } from 'haunted/lib/component';
import styles from './styles.css'

const ShoppingList = component(function ShoppingList(this: Component<IShoppingList>, { ingredients }: IShoppingList) {

    const printShoppingList = (): void => {
        const printContents = ingredients.join('<br/>')

        let win = window.open();
        win?.document.write(printContents);
        win?.print();
        win?.close();
    };

    return html`
        <style>
            ${styles}
        </style>

        <div class="shopping-list-parent">
            <div class="shopping-list-container">
                <h2 class="shopping-list-title">Shopping List</h2>
                <ul id="shopping-list">
                    ${ingredients.map((ingredient: string) => html`<li class=" shopping-list-item">${ingredient}</li>`)}
                </ul>
                <button class="print-button" @click=${printShoppingList}>print the shopping list</button>
            </div>
        </div>
    `;
});

customElements.define('shopping-list', ShoppingList);