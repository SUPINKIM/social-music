import Appbar from '@/components/appbar';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';

const Chat = () => {
    return (
        <SafeAreaView>
            <Appbar />
            <Text>Chat!</Text>
        </SafeAreaView>
    );
};

export default Chat;
