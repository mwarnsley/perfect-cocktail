<template>
  <div
    id="content"
    class="mt-5"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="jumbotron col-12 col-md-10">
          <h1 class="text-center">Search Cocktails by {{ searchCocktailsByText }}</h1>

          <div class="row">
            <div class="col-12">
              <form
                action="#"
                id="search-form"
                @submit.prevent="searchCocktails"
              >
                <div class="form-group">
                  <label for="search">{{ searchLabelText }}</label>
                  <input
                    class="form-control"
                    id="search"
                    :placeholder="searchPlaceholder"
                    type="text"
                    v-model="searchTerm"
                  >
                </div>
                <div class="form-group pt-3">
                  <input
                    id="type"
                    type="hidden"
                    value="name"
                  >

                  <button
                    class="btn btn-success d-block"
                    @click="searchCocktails"
                  >
                    Get Cocktails
                  </button>
                </div>
              </form>

              <div
                class="alert alert-dismissible alert-danger"
                v-if="displayErrorMessage"
              >
                <button
                  class="close"
                  @click="dismissErrorMessage"
                  data-dismiss="alert"
                  type="button"
                >x</button>
                {{ displayErrorMessage }}
              </div>
            </div>

            <div
              class="col-12 mt-5 results-wrapper"
              :style="{ display: cocktails.length > 0 ? 'block' : 'none' }"
            >
              <h1 class="text-center">Results: <span id="total"></span></h1>
              <div
                class="mt-5 row"
                id="results"
              >
                <div
                  class="col-md-6"
                  v-for="cocktail in cocktails"
                  :key="cocktail.idDrink"
                >
                  <cocktail-card :cocktail="cocktail"></cocktail-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
import isEmpty from "lodash/isEmpty";
import CocktailCard from "../components/CocktailCard.vue";

export default {
  name: "Home",
  components: {
    CocktailCard
  },
  data() {
    return {
      cocktails: [],
      displayErrorMessage: "",
      searchBy: "",
      searchTerm: ""
    };
  },
  created() {
    // Setting the searchby for the text to the params
    this.searchBy = this.$route.params.searchBy;
  },
  watch: {
    $route(to, from) {
      // On change of the route, we need to change the searchby
      this.searchBy = this.$route.params.searchBy;
    }
  },
  computed: {
    searchLabelText() {
      switch (this.searchBy) {
        case "name":
          return "Cocktail Name:";
          break;
        case "ingredient":
          return "Ingredient Name";
          break;
        case "category":
          return "Category";
          break;
        default:
          return "Name";
      }
    },
    searchCocktailsByText() {
      switch (this.searchBy) {
        case "name":
          return "Name";
          break;
        case "ingredient":
          return "Ingredient";
          break;
        case "category":
          return "Category";
          break;
        default:
          return "Name";
      }
    },
    searchPlaceholder() {
      switch (this.searchBy) {
        case "name":
          return "Eg. Margarita";
          break;
        case "ingredient":
          return "Eg. Gin, Tequila, Vodka, etc";
          break;
        case "category":
          return "Category";
          break;
        default:
          return "Name";
      }
    }
  },
  methods: {
    dismissErrorMessage() {
      this.displayErrorMessage = "";
    },
    async searchCocktails() {
      // If there is no search term then we need to display the error message
      if (!this.searchTerm) {
        this.displayErrorMessage = "Please enter a cocktail name!";
      } else {
        // Making the call to the api to get the cocktails from the search
        const cocktails = await api.getCocktails(
          this.searchTerm,
          this.searchBy
        );

        // If there cocktails come back as none then we will display an error saying that there has to be a different search
        if (isEmpty(cocktails)) {
          this.displayErrorMessage =
            "Search returned 0 results. Please try a different search";
        } else {
          this.displayErrorMessage = "";
          this.cocktails = cocktails.drinks;
        }
      }
    }
  }
};
</script>
