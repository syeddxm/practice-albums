// index.ios.js - Place code in here for IOS

// import a libraryr to help create a component

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
// create a component

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// render the compnent to the app

AppRegistry.registerComponent('albums', () => App);

