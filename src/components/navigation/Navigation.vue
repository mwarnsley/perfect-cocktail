<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand text-uppercase" href="index.html">
                <h1 class="sitename">PERFECT<span>COCKTAIL</span> </h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Cocktail Name</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ingredient.html">Ingredient</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="category.html">Category</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="filter-alcohol.html">Alcohol / Non Alcohol</a>
                        </li>
                    </ul>
            </div>
            <div class="dropdown">
                    <a href="favorites.html" class="btn btn-danger">
                        My Favorites
                    </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>
