import React, {Component} from 'react'
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { selectedCatagoriesChange } from './actions'
import { MultipleSelect, Card } from "./common";

var { width, height } = Dimensions.get('window');


class MultiSelectComponent extends Component {

  createCategoryList = (catagoriesObjects) => {
    let catagoryList = {}

    catagoriesObjects.map((category) => {
      catagoryList[category.id] = category.name
    })
    return catagoryList
  }

  createCatagoryObjectFromList = (categoryList) => {
    let objectList = categoryList.map( catagoryName => {
      return this.props.categories.find(category => category.name === catagoryName)
    })
    return objectList
  }

  render() {
  const catagoryList = this.createCategoryList(this.props.categories)
   return (
    <Card>
     <MultipleSelect
        options={catagoryList}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(selected) => this.props.selectedCatagoriesChange(this.createCatagoryObjectFromList(selected))} // callback, array of selected items
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

mapStateToProps = (state) => {
  return { selectedCatagories: state.selectedCatagories }
}

export default connect(mapStateToProps, { selectedCatagoriesChange })(MultiSelectComponent)
