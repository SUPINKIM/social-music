import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const Login = () => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text variant="titleLarge" style={styles().greeting}>
                🌈 뮤잼에 오신 걸 환영합니다! 👋
            </Text>
            <Text variant="titleMedium" style={styles().title}>
                Login
            </Text>
            <TextInput
                mode="outlined"
                label="ID"
                outlineColor="rgba(0,0,0,0)"
                activeOutlineColor="#a9a9a9"
                style={styles().textinput}
            />
            <TextInput
                mode="outlined"
                label="PASSWORD"
                outlineColor="rgba(0,0,0,0)"
                activeOutlineColor="#a9a9a9"
                style={styles().textinput}
            />
            <Button
                icon={'login'}
                mode="contained"
                contentStyle={{ flexDirection: 'row-reverse' }}
                style={styles().button}>
                로그인
            </Button>
        </View>
    );
};

const styles = (disabled = false) =>
    StyleSheet.create({
        greeting: {
            color: '#a0a0a0',
            marginBottom: 16,
            fontWeight: '200',
        },
        title: {
            fontWeight: '700',
            marginBottom: 6,
        },
        textinput: {
            width: 312,
            backgroundColor: disabled ? '#dcdcdc' : 'white',
            borderColor: disabled ? '#dcdcdc' : '#a9a9a9',
            marginBottom: 4,
        },
        button: {
            width: 312,
            borderRadius: 4,
            marginTop: 6,
        },
    });

export default Login;
