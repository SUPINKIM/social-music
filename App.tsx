import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigator } from '@/hooks/useNavigator';
import BottomNavigation from '@/components/bottom-navigation';

const Stack = createNativeStackNavigator();

const App = () => {
    const { route } = useNavigator();

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="bottom-nav"
                        component={BottomNavigation}
                    />
                    {route.map(({ name, component }) => (
                        <Stack.Screen
                            key={name}
                            name={name}
                            component={component}
                        />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
