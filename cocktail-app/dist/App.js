import { html, component, useState, useEffect } from 'haunted';
import './components/SearchBar/SearchBar';
import './components/CocktailsList/CocktialList';
import './components/ShoppingList/ShoppingList';
import { getCocktails } from './services/cocktailApi';
import styles from './styles.css';
const App = component(function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [shoppingList, setShoppingList] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const handleShowToast = (message) => {
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
                }
                else {
                    setCocktails([]);
                    handleShowToast('No results found');
                }
            })
                .catch(error => handleShowToast('Error, please try again later!'));
        }
    }, [searchQuery]);
    const addToShoppingList = (cocktail) => {
        const ingredients = Object.entries(cocktail)
            .filter(([key, value]) => key.startsWith('strIngredient') && value)
            .map(([key, value]) => value);
        const uniqueIngredients = new Set([...shoppingList, ...ingredients]);
        setShoppingList(Array.from(uniqueIngredients));
        handleShowToast('Cocktail added to shopping list');
    };
    return html `
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
        ? html `
                    <div class="${showToast ? 'toast' : ''}">
                        ${toastMessage}
                    </div>`
        : ''}
        </div>
    `;
});
customElements.define('my-app', App);
export default App;
//# sourceMappingURL=App.js.map