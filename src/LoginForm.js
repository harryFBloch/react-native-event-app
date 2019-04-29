import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { connect } from "react-redux"
import { emailChanged, passwordChanged, loginUser } from './actions'
import { Card, CardItem, FormInput, Button, Spinner } from './common'

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChanged(text)
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  onButtonPress = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password})
  }

  displayError = () => {
    if (this.props.error){
      return (
        <CardItem>
          <View style={{ backgroundColor: 'white', width: "100%"}}>
            <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          </View>
        </CardItem>
    )
    }
  }

  renderButton = () => {
    if (this.props.loading){
      return <Spinner size="large"/>
    }else{
      return <Button text="Login" fireButton={this.onButtonPress}/>
    }
  }

  renderForm = () => {
    <Card>
      <CardItem>
        <FormInput label="Email:" placeholder="email@gmail.com" onChangeText={this.onEmailChange} value={this.props.email} />
      </CardItem>

      <CardItem>
        <FormInput label="Password:" placeholder="password" secureTextEntry onChangeText={this.onPasswordChange} value={this.props.password}/>
      </CardItem>

      {this.displayError()}

      <CardItem>
        {this.renderButton()}
      </CardItem>
    </Card>
  }

  render(){
    console.log(this.props)
    return(
      <Card>
        <CardItem>
          <FormInput label="Email:" placeholder="email@gmail.com" onChangeText={this.onEmailChange} value={this.props.email} />
        </CardItem>

        <CardItem>
          <FormInput label="Password:" placeholder="password" secureTextEntry onChangeText={this.onPasswordChange} value={this.props.password}/>
        </CardItem>

        {this.displayError()}

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })( LoginForm )
