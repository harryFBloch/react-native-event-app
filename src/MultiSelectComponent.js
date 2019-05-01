import React, {Component} from 'react'
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { selectedCatagoriesChange } from './actions'
import { MultipleSelect, Card } from "./common";

var { width, height } = Dimensions.get('window');


class MultiSelectComponent extends Component {

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
  const { selectedCatagories } = this.props;
   return (
    <Card>
     <MultipleSelect
        options={catagoryList}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Search"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(selectedCatagories) => this.props.selectedCatagoriesChange(selectedCatagories)} // callback, array of selected items
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
