import React from 'react';

import Appbar from '@components/appbar';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { customNavigation } from '@/hooks/customNavigation';

const Home = () => {
    const { navigate } = customNavigation();
    return (
        <SafeAreaView>
            <Appbar />
            <View
                style={{
                    backgroundColor: '#ffffff',
                    height: '88%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Button
                    style={{
                        width: 180,
                        height: 40,
                        backgroundColor: '#C2D9FF',
                        borderRadius: 8,
                    }}
                    labelStyle={{ color: '#190482' }}
                    onPress={() => {
                        navigate('NewChat');
                    }}>
                    새로운 채팅 시작하기
                </Button>
            </View>
        </SafeAreaView>
    );
};

export default Home;
