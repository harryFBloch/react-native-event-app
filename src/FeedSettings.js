import React, { Component } from 'react'
import {Text} from 'react-native'
import { Card, CardItem, FormInput, Button, Spinner } from './common'
import { BEARER_TOKEN } from './token'
import MultiSelectComponent from './MultiSelectComponent'

export default class FeedSettings extends Component {

  constructor(){
    super()
    this.state = { allCategories: [] }
  }

  componentWillMount(){
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

  render(){
    return (
      <MultiSelectComponent categories={this.state.allCategories}/>
    )
  }
}
