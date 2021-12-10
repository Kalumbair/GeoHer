/*

import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity, Alert } from 'react-native';
import { Location, Permissions } from 'expo';
 /*
class FindMe extends Component{
  state={
    latitude: null,
    longitude: null
  };


findCurrentLocation = () =>{
  navigator.geolocation.getCurrentPosition(
    position => {
      const latitude = JSON.stringify(position.coords.latitude);
      const longitude = JSON.stringify(position.coords.longitude);
    
    this.setState({
      latitude,
      longitude
    });
    },
    {enableHighAccuracy: true, timeout:20000, maximumAge: 1000}
  );
};

render() {
  return(
   <View style={styles.container}>
    <TouchableOpacity onPress={this.findCurrentLocation}>
   <Text>Долгота: {this.state.longitude}</Text>
   <Text>Широта: {this.state.latitude}</Text>
 //  </TouchableOpacity>
   </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 export default FindMe;


/*

export default class App extends React.Component{

state = {
  location:{},
  errorMessage: ''
}

componentWillMount() {
this._getLocation();
}

  _getLocation = async () => {
    const{status}= await Permissions.askAsynk(Permissions.Location);
  
  if (status !=='granted'){
    console.log('Permission not granted!');

    this.setState({
      errorMessage: 'Permission not granted!'
    })
  }
  
const location = await Location.getCurrentPositionAsync();

this.setState({
  location
})

  }


 render(){
   return(
    <View style={styles.container}>
    <Text>{JSON.stringify(this.state.location)}</Text>
    </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/




import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Constants, Location, Permissions} from 'expo';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() { 
    return (
      <View style={styles.container}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GeolocationExample;

