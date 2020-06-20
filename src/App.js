import React from 'react';
import './App.css';
import Select from 'react-select';
const axios = require('axios').default;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      statesList:[],
      cityList:[],
    }  
  }
  changeState = (currentstate) => {
    axios.get('http://209.97.163.4:9010/getCities?stateId='+currentstate.value)
    .then(data => {
      const cityList = data.data.map(indi => {
        console.log(indi)
        return {
          'value':indi,
          'label':indi
        }
      })
      this.setState({
        'cityList':cityList
      })
    })
    .catch(err => {
      console.log(err)
      alert(err)
    })
  }
  loadDefaultoptions = () => {
    axios.get('http://209.97.163.4:9010/getStates?countryId=101')
    .then(data => {
      // { value: 'chocolate', label: 'Chocolate' },
      const stateList = data.data.map(indi => {
        return {
          'value':indi.id,
          'label':indi.name
        }
      })
      console.log(this.state)
      this.setState({
        'statesList':stateList
      })

    })
    .catch(err => {
      console.log(err)
      // alert('error occured')
    })
  }
  // http://209.97.163.4:9010/getStates?countryId=101
  render(){
    this.loadDefaultoptions()
    return (
      <div className="row">
        <div className="col-md-6">
        <Select 
        options={this.state.statesList}
        onChange={this.changeState}
        />
        </div>
        <div className="col-md-6">
        <Select
        options={this.state.cityList}
        />
        </div>
      </div>
    )
  }
}

export default App;
