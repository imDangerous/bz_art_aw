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
	tabBarBackgroundColor: '#000000',
	navBarButtonColor: '#ffffff',
	tabBarButtonColor: '#ffffff',
	navBarTextColor: '#ffffff',
	tabBarSelectedButtonColor: '#ff505c',
	navigationBarColor: '#000000',
	navBarBackgroundColor: '#000000',
	statusBarColor: '#002b4c',
	statusBarTextColorScheme: 'light',
	tabFontFamily: 'BioRhyme-Bold',
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
	drawer: {
		left: {
			screen: 'app.Drawer'
		}
	}
});
