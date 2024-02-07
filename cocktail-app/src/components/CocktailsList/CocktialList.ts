import { html, component} from 'haunted';
import { ICocktailInfo } from '../../types/types';
import { ICocktailList } from '../../types/types';
import { Component } from 'haunted/lib/component';
import styles from './styles.css'

const CocktailList = component(function CocktailList(this: Component<ICocktailList>, { cocktails, onAddToShoppingList }: ICocktailList) {

    return html`
        <style>
            ${styles}
        </style>

        <div class="cocktail-container">
            ${cocktails.map((cocktail: ICocktailInfo) => html`
                <div class="cocktail-card">
                    <div class="image-container">
                        <img class="cocktail-image" src=${cocktail.strDrinkThumb} alt=${cocktail.strDrink} />
                    </div>
                    <div class="cocktail-details">
                        <h3 class="cocktail-title">${cocktail.strDrink}</h3>
                        <p class="cocktail-instructions">${cocktail.strInstructions}</p>
                        <button class="add-to-list-button" @click=${() => onAddToShoppingList(cocktail)}>Add to shopping list</button>
                    </div>
                </div>
            `)}
        </div>
    `;
});

customElements.define('cocktail-list', CocktailList);