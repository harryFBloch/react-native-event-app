import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements'
import { CardItem, Deck} from '../common'
import { BEARER_TOKEN } from '../token'

const { height } = Dimensions.get('window');

class EventDeckContainer extends Component {

  constructor(){
    super()
    this.state = {events: []}
  }

  componentDidMount(){
    const categoriesString = "113"
    const latitude = "40.702828"
    const longitude = "-73.922864"
    let urlString = "https://www.eventbriteapi.com/v3/events/search"
    const url = `${urlString}/?categories=${categoriesString}&location.latitude:${latitude}&location.longitute:${longitude}&location.within=2mi`
    fetch( url, {
      headers: {
        'Authorization': 'Bearer ' + BEARER_TOKEN,
        'Content-Type': 'application/json'
      }
    }).then(data => data.json())
    .then(jsonData => {
      this.setState({ events: jsonData.events})
    })
    .catch(error => console.log(error))
  }

  renderCard = ( item ) => {
    return (
      <Card title={item.name.text} image={{ uri: item.logo.url }} key={item.id}>
        <Text style={{ marginBottom: 10 }}>Hello World</Text>
        <Button icon={{name: 'code'}} backgroundColor='#03A9F4' title="View Now!"/>
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
    <Card title="All Done">
      <Text style={{marginBottom: 10}}>There is no more content here</Text>
      <Button title="Get more!" backgroundColor='#03A9F4'/>
    </Card>
  )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck data={this.state.events} renderCard={this.renderCard} renderNoMoreCards={this.renderNoMoreCards}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: height * .5
  },
});

mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(EventDeckContainer)
