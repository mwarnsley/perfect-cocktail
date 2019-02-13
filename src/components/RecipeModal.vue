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
              <!-- <li :key="" v-for=""></li> -->
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
export default {
  name: "RecipeModal",
  props: ["clearRecipe", "recipe"]
};
</script>

