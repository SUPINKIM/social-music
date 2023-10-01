import React from 'react';
import { Appbar as PaperBar } from 'react-native-paper';

const Appbar = () => {
    return (
        <PaperBar.Header statusBarHeight={10}>
            <PaperBar.Content title="Todays Record 💛" />
            {/* <PaperBar.Action icon="account" /> */}
        </PaperBar.Header>
    );
};

export default Appbar;
