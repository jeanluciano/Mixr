import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { findById } from "../config/api";

var styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#171717"
  },
titleStyle:{
    color:"#e5e5e5"
}
})


class Results extends Component {

  onLearnMore(cdrink) {
    findById(cdrink.idDrink).then(drink => {
      this.props.navigation.navigate("DrinkPage", { drinks: drink });
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.mainContainer}>
        <List containerStyle={styles.mainContainer}>
          {params.map((drink) => (
            <ListItem
            titleStyle={styles.titleStyle}
            underlayColor="#FF4A29"
              key={drink.strDrink}
              title={drink.strDrink}
              subtitle={drink.strCategory}
              onPress={() => this.onLearnMore(drink)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Results;