<template>
  <div class="card my-3">
    <img
      :src="cocktail.strDrinkThumb"
      :alt="cocktail.strDrink"
      class="card-img-top"
    >
    <div class="card-body">
      <h2 class="card-title text-center">{{ cocktail.strDrink }}</h2>
      <p
        class="card-text font-weight-bold"
        v-if="cocktail.strInstructions"
      >Instructions</p>
      <p
        class="card-text"
        v-if="cocktail.strInstructions"
      >{{ cocktail.strInstructions }}</p>
      <a
        class="btn btn-success get-recipe"
        @click="getRecipe"
        :data-id="cocktail.idDrink"
        data-target="#recipe"
        data-toggle="modal"
        href="#"
        v-if="!cocktail.strInstructions"
      >Get Recipe</a>
      <div
        class="card-text"
        v-if="ingredients.length > 0"
      >
        <ul class="list-group">
          <li class="list-group-item alert alert-danger">Ingredients</li>
          <li
            class="list-group-item"
            :key="ingredient.id"
            v-for="ingredient in ingredients"
          >
            {{ ingredient.ingredient }} - {{ ingredient.measure }}
          </li>
        </ul>
      </div>
      <p
        class="card-text font-weight-bold"
        v-if="cocktail.strAlcoholic"
      >Extra Information:</p>
      <p
        class="card-text"
        v-if="cocktail.strAlcoholic"
      >
        <span class="badge badge-pill badge-success">
          {{ cocktail.strAlcoholic }}
        </span>
        <span class="badge badge-pill badge-warning">
          Category: {{ cocktail.strCategory }}
        </span>
      </p>
    </div>
    <recipe-modal
      :clearRecipe="clearRecipe"
      :recipe="recipe"
      v-if="Object.keys(recipe).length !== 0"
    ></recipe-modal>
  </div>
</template>

<script>
import times from "lodash/times";
import isEmpty from "lodash/isEmpty";
import api from "../api/api";
import RecipeModal from "./RecipeModal.vue";

export default {
  name: "CocktailCard",
  props: ["cocktail"],
  components: {
    RecipeModal
  },
  data() {
    return {
      ingredients: [],
      recipe: {},
      recipeFound: false
    };
  },
  methods: {
    async getRecipe(e) {
      e.preventDefault();
      const id = e.target.dataset.id;
      const fetchRecipe = await api.getSingleRecipe(id);

      this.recipe = fetchRecipe.drinks.length > 0 ? fetchRecipe.drinks[0] : {};
    },
    clearRecipe() {
      this.recipe = {};
    }
  },
  created() {
    // Getting the cocktail from the props
    const cocktail = this.$props.cocktail;

    /**
     * Here we are formatting the ingredients and measure
     * There are 16 ingredients and measures that we are looping through
     * We need to match them up from the object and build a new object
     */
    if (cocktail.hasOwnProperty("strIngredient1")) {
      times(16, i => {
        const ingredientMeasure = {};
        if (i > 0 && cocktail[`strIngredient${i}`] !== "") {
          ingredientMeasure.id =
            "_" +
            Math.random()
              .toString(36)
              .substr(1, 9999);
          ingredientMeasure.ingredient = cocktail[`strIngredient${i}`];
          ingredientMeasure.measure = cocktail[`strMeasure${i}`];
          this.ingredients.push(ingredientMeasure);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.badge {
  margin-right: 10px;
}
</style>
