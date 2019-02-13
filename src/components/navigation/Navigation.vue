<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link
        class="navbar-brand text-uppercase"
        to="/cocktailname"
      >
        <h1 class="sitename">PERFECT<span>COCKTAIL</span> </h1>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbar"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/name"
            >Cocktail Name</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/ingredient"
            >Ingredient</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/category"
            >Category</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/filteralcohol"
            >Alcohol / Non Alcohol</router-link>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <a
          href="favorites.html"
          class="btn btn-danger"
        >
          My Favorites
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
