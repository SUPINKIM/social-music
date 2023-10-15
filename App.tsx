import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@screens/home';
import Login from '@screens/login';
import { useNavigator } from '@/hooks/useNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
    const { route } = useNavigator();

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {route
                        .filter((path) => !path.child)
                        .map(({ name, component }) => (
                            <Stack.Screen name={name} component={component} />
                        ))}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
