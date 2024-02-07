export interface ICocktail {
    id: string;
    name: string;
    ingredients: string[];
}

export interface IShoppingList {
    ingredients: string[];
}

export interface ISearchBar {
    onSearch: (query: string) => void;
}

export interface ICocktailInfo {
    strDrinkThumb: string;
    strDrink: string;
    strInstructions: string;
}

export interface ICocktailList {
    cocktails: ICocktailInfo[];
    onAddToShoppingList: (cocktail: ICocktailInfo) => void;
}