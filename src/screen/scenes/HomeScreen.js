import React, { PropTypes, PureComponent } from 'react';
import {
	View,
	Text,
	Platform,
	ScrollView,
	StyleSheet,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import ProgressBar from '../global/ProgressBar';
import DefaultTabBar from '../global/TabView/DefaultTabBar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Info from './Info';

// const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
// const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class HomeScreen extends PureComponent {
	
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: true,
			isRefreshing: false,
			
			tab: 0,
		};
		
		this._onChangeTab = this._onChangeTab.bind(this);
	}
	
	
	// _handleIndexChange = index => this.setState({ index });
	//
	// _renderHeader = props => <TabBar {...props} />;
	//
	// _renderScene = SceneMap({
	// 	'1': FirstRoute,
	// 	'2': SecondRoute,
	// });
	
	_onChangeTab({ i, ref }) {
		this.setState({ tab: i });
	}
	
	render() {
		return(
			<ScrollView
				scrollEventThrottle={100}
				style={{
					flex: 1,
					backgroundColor: 'black',
					...Platform.select({
						ios: {
							paddingTop: 64
						}
					})
				}}>
				
				<View style={{flex: 1}}>
					<ScrollableTabView
						onChangeTab={this._onChangeTab}
						renderTabBar={() => (
							<DefaultTabBar
								textStyle={styles.textStyle}
								underlineStyle={styles.underlineStyle}
								style={styles.tabBar}
							/>
						)}>
						<Info tabLabel="INFO" info={null} />
						<Info tabLabel="CASTS" info={null} />
						<Info tabLabel="TRAILERS" info={null} />
					</ScrollableTabView>
				</View>
				
			</ScrollView>
		);
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});