import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    NewChat: undefined;
    Login: undefined;
};
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const customNavigation = () => {
    return useNavigation<RootStackNavigationProp>();
};
