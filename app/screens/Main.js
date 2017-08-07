import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { DrinkPage } from "./DrinkPage";
import { randomizeDrink, searchByIngredient } from "../config/api";

const win = Dimensions.get("window");
var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    backgroundColor: "#171717"
  },
  logo: {
    width: "50%",
    height: "50%",
    resizeMode: "contain"
    ,alignSelf:"center"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "#fff"
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    color: "white"
  },
  buttonText: {
    fontSize: 18,
    color: "#FF4EA7",
    alignSelf: "center"
  },
  button: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "#2E2E2E",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }, error: {
    fontSize:15,
    alignSelf:'center',
    color:"#FF4EA7"
  }
});

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      error: false
    };
  }

  handleChange(event) {
    this.setState({
      query: event.nativeEvent.text
    });
  }

  handleRandomize(event) {
    randomizeDrink().then(drink => {
      this.props.navigation.navigate("DrinkPage", { drinks: drink });
    });
  }

  handleSearch() {
    searchByIngredient(this.state.query).then(drinks => {
      console.log('drinks----',drinks)
      if(drinks){
        this.props.navigation.navigate("Results", drinks);
      } else {
        this.setState({query:"", error: "Drink not found"})
      }
    });
  }

  render() {
     var showError = (
      this.state.error
        ? <Text style={styles.error}> {this.state.error} </Text>
        : <View></View>
    );
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.logo} source={require("../config/logo.png")} />

        <Text style={styles.title}> Search by ingredient</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.query}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSearch.bind(this)}
          underlayColor="#FF0049"
        >
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleRandomize.bind(this)}
          underlayColor="#FF4A29"
        >
          <Text style={styles.buttonText}> RANDOMIZE</Text>
        </TouchableHighlight>
        {showError}
      </View>
    );
  }
}

export default Settings;
