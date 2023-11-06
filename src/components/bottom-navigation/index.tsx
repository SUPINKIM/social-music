import React from 'react';
import { BottomNavigation as BottomNav } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CommonActions } from '@react-navigation/native';
import { useBottomNavigator } from '@/hooks/useNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const { route } = useBottomNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Main"
            tabBar={({ navigation, state, insets, descriptors }) => (
                <BottomNav.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                            return;
                        }

                        navigation.dispatch({
                            ...CommonActions.navigate(route.name, route.params),
                            target: state.key,
                        });
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({
                                focused,
                                color,
                                size: 24,
                            });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        return (
                            (options.tabBarLabel as string) ||
                            options.title ||
                            route.name
                        );
                    }}
                />
            )}>
            {route.map(({ name, component, label, iconName }) => (
                <Tab.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        tabBarLabel: label,
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Icon
                                    name={iconName || ''}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomNavigation;
