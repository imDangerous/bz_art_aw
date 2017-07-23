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
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
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
	drawer: {
		left: {
			screen: 'app.Drawer'
		}
	}
});