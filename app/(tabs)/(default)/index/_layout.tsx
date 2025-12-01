import type {ParamListBase, TabNavigationState} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import type {
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import {withLayoutContext} from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);


const TestLayout = () => {
	const insets = useSafeAreaInsets();
	return (
		<MaterialTopTabs style={{ paddingTop: insets.top }} />
	)
};

export default TestLayout;