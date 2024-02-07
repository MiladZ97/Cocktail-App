export const getCocktails = async (query) => {
    try {
        const params = new URLSearchParams({ s: query });
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch cocktails. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching cocktails:', error);
        throw error;
    }
};
//# sourceMappingURL=cocktailApi.js.map