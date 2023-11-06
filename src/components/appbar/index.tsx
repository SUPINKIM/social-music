import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Appbar as PaperBar } from 'react-native-paper';

const Appbar = () => {
    const { goBack } = useNavigation();
    return (
        <PaperBar.Header
            statusBarHeight={10}
            style={{
                backgroundColor: '#ffffff',
            }}>
            <PaperBar.BackAction
                onPress={() => {
                    goBack();
                }}
            />
            <PaperBar.Content
                title="채팅 목록"
                titleStyle={{ fontSize: 16, fontWeight: '600' }}
            />
            <PaperBar.Action icon="plus" />
        </PaperBar.Header>
    );
};

export default Appbar;
