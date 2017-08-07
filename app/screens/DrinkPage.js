import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Tile, List, ListItem } from "react-native-elements";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#171717"
  },
  rightTitle: {
    flex: 1,
    justifyContent: "space-between"
  },
  titleStyle: {
    color: "#e5e5e5"
  }
});

class DrinkPage extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: {}
    };
  }

  ingredients() {
    const ingredients = [];
    const { params } = this.props.navigation.state;
    for (let i = 1; i < 15; i++) {
      console.log(params);
      if (params.drinks[`strIngredient${i}`] === "") {
        break;
      } else {
        ingredients.push({
          name: params.drinks[`strIngredient${i}`],
          measure: params.drinks[`strMeasure${i}`]
        });
      }
    }
    return ingredients;
  }

  imgUri() {
    const { params } = this.props.navigation.state;
    if (params.drinks.strDrinkThumb !== null) {
      return {uri:"https" + params.drinks.strDrinkThumb.slice(4)};
    } else {
      return require('../config/nopicture.png');
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.mainContainer}>
        <Tile
          imageSrc={this.imgUri()}
          featured
          title={params.drinks.strDrink}
          caption={params.drinks.strCategory}
        />

        <List containerStyle={styles.mainContainer}>
          <ListItem
            titleStyle={styles.titleStyle}
            rightTitleContainerStyle={styles.rightTitle}
            title="Type"
            rightTitle={params.drinks.strAlcoholic}
            hideChevron
          />
          <ListItem
            rightTitleContainerStyle={styles.rightTitle}
            title="Ingredients"
            rightTitle={this.ingredients().map(
              ingredient => `${ingredient.name} - ${ingredient.measure} \n`
            )}
            hideChevron
          />
          <ListItem
            rightTitleContainerStyle={styles.rightTitle}
            title="Instructions"
            rightTitle={params.drinks.strInstructions}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default DrinkPage;
