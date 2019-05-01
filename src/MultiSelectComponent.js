import React, {Component} from 'react'
import { View, Dimensions } from 'react-native';
import { MultipleSelect, Card } from "./common";

var { width, height } = Dimensions.get('window');


export default class MultiSelectComponent extends Component {

  constructor(){
    super()
    this.state = {
      selectedCatagories: []
    }
  }

  createCatagoryList = () => {
    let catagoryList = {}

    this.props.categories.map((category) => {
      catagoryList[category.id] = category.name
    })
    console.log(catagoryList)
    return catagoryList
  }

  render() {
  const catagoryList = this.createCatagoryList()
  const { selectedCatagories } = this.state;
   return (
    <Card>
     <MultipleSelect
        options={catagoryList}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(selectedCatagories)=> this.setState({ selectedCatagories })} // callback, array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={5}
        iconColor={"#00a2dd"}
        iconSize={30}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-radio-button-off"}
        scrollViewHeight={height * .5}
        selected={[]} // list of options which are selected by default
        />
      </Card>
   );
 }
}
