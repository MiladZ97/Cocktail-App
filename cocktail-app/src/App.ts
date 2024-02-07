import { html, component, useState, useEffect } from 'haunted';
import './components/SearchBar/SearchBar';
import './components/CocktailsList/CocktialList';
import './components/ShoppingList/ShoppingList';
import { ICocktail } from './types/types';
import { getCocktails } from './services/cocktailApi';
import styles from './styles.css'

const App = component(function App() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);
    const [shoppingList, setShoppingList] = useState<string[]>([]);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>('');

    const handleShowToast = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    useEffect(() => {
        if (searchQuery) {
            handleShowToast('Searching...');
            getCocktails(searchQuery)
                .then(data => {
                    if (data.drinks && data.drinks.length > 0) {
                        handleShowToast('Here are the results');
                        setCocktails(data.drinks);
                    } else {
                        setCocktails([]);
                        handleShowToast('No results found');
                    }
                })
                .catch(error => handleShowToast('Error, please try again later!'));
        }
    }, [searchQuery]);

    const addToShoppingList = (cocktail: ICocktail) => {
        const ingredients = Object.entries(cocktail)
            .filter(([key, value]) => key.startsWith('strIngredient') && value)
            .map(([key, value]) => value as string);

        const uniqueIngredients = new Set([...shoppingList, ...ingredients]);

        setShoppingList(Array.from(uniqueIngredients));
        handleShowToast('Cocktail added to shopping list');
    };

    return html`
        <style>
            ${styles}
        </style>
        
        <div class="container">
            <search-bar .onSearch=${setSearchQuery}></search-bar>
            <div class="lists-container printout">
                <cocktail-list .cocktails=${cocktails} .onAddToShoppingList=${addToShoppingList}></cocktail-list>
                <shopping-list .ingredients=${shoppingList}></shopping-list>
            </div>
            ${showToast 
                ? html`
                    <div class="${showToast ? 'toast' : ''}">
                        ${toastMessage}
                    </div>`
                : ''}
        </div>
    `;
});

customElements.define('my-app', App);
export default App;
