<template>
  <div
    class="modal fade"
    id="recipe"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{{ recipe.strDrink }}</h2>
          <button
            aria-label="Close"
            class="close"
            @click="clearRecipe"
            data-dismiss="modal"
            type="button"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h3 class="alert alert-success">Preparation:</h3>
          <div class="description-text mb-4">{{ recipe.strInstructions }}</div>

          <h3 class="alert alert-success">Ingredients:</h3>
          <div class="ingredient-list">
            <ul class="list-group">
              <li
                class="list-group-item"
                :key="ingredient.id"
                v-for="ingredient in ingredients"
              >
                {{ ingredient.ingredient }} - {{ ingredient.measure }}
              </li>
            </ul>
          </div>
          <div class="ingredients mt-3">

          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-secondary"
            @click="clearRecipe"
            data-dismiss="modal"
            type="button"
          >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import times from "lodash/times";
export default {
  name: "RecipeModal",
  props: ["clearRecipe", "recipe"],
  data() {
    return {
      ingredients: []
    };
  },
  created() {
    // Getting the cocktail from the props
    const recipe = this.$props.recipe;

    /**
     * Here we are formatting the ingredients and measure
     * There are 16 ingredients and measures that we are looping through
     * We need to match them up from the object and build a new object
     */
    if (recipe.hasOwnProperty("strIngredient1")) {
      times(16, i => {
        const ingredientMeasure = {};
        if (i > 0 && recipe[`strIngredient${i}`] !== "") {
          ingredientMeasure.id =
            "_" +
            Math.random()
              .toString(36)
              .substr(1, 9999);
          ingredientMeasure.ingredient = recipe[`strIngredient${i}`];
          ingredientMeasure.measure = recipe[`strMeasure${i}`];
          this.ingredients.push(ingredientMeasure);
        }
      });
    }
  }
};
</script>

