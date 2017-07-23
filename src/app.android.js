import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import {configureScreen} from './screens';
import store from './redux/store/index.js';


if (__DEV__) {
	console.disableYellowBox = true;
}

configureScreen(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};


Navigation.startSingleScreenApp({
	screen: {
		screen: 'app.HomeScreen',
		title: 'BBuzzArt Home',
		navigatorStyle: navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]
	},
	// drawer: {
	// 	left: {
	// 		screen: 'app.Drawer'
	// 	}
	// }
});