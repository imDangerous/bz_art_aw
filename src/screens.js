/* eslint-disable import/prefer-default-export */
import {Navigation} from 'react-native-navigation';

import Drawer from './screen/global/Drawer';
import HomeScreen from './screen/scenes/HomeScreen';

export function configureScreen(store, Provider) {
	Navigation.registerComponent('app.HomeScreen', () => HomeScreen, store, Provider);
	Navigation.registerComponent('app.Drawer', () => Drawer);
}