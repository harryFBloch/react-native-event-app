import React, { Component } from 'react'
import {Text, View} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Card, CardItem, FormInput, Button, Spinner } from './common'
import { BEARER_TOKEN } from './token'
import MultiSelectComponent from './MultiSelectComponent'
import { userLocationChange } from './actions'

class FeedSettings extends Component {

  constructor(){
    super()
    this.state = { allCategories: [] }
  }

  componentDidMount(){
    this.getLocation()
    fetch("https://www.eventbriteapi.com/v3/categories/", {
      headers: {
        'Authorization': 'Bearer ' + BEARER_TOKEN,
        'Content-Type': 'apllication/json'
      }
    }).then(data => data.json())
        .then(json => {
          this.setState({ allCategories: json.categories })
        })
        .catch(error => console.log(error))
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.userLocationChange(position)
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render(){
    return (
      <View>
        <MultiSelectComponent categories={this.state.allCategories}/>

        <CardItem>
          <Button text="Search For Events" fireButton={() => Actions.search() }/>
        </CardItem>
      </View>
    )
  }
}

export default connect(null, { userLocationChange })(FeedSettings)
