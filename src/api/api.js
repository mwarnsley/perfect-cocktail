class Api {
    constructor() {}
    async getCocktails(name, searchType) {
        let response = '';
        let cocktails = '';

        /**
         * This function searches for the cocktails using the name of the search and searchType
         * Using a switch statement depending on which searchType is being used
         */
        switch (searchType) {
            case 'name':
                response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
                );
                cocktails = await response.json();
                break;
            case 'ingredient':
                response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
                );
                cocktails = await response.json();
                break;
            default:
        }

        return cocktails;
    }
}

export default new Api();
