export function randomizeDrink() {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.drinks[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }

  export function searchByIngredient(ingredient) {
    ingredient = ingredient.toLowerCase().trim()
    console.log('ingredient', ingredient)
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.drinks;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  export function findById(id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.drinks[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
