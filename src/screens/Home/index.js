// Vendors
import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

const HomeScreen = props => (
    <View>
        {props.homeDocuments.map((document) => {
            return (
                <Card key={document.title}>
                    <Text>{document.title}</Text>
                    <Text>{document.docType}</Text>
                    <Text>{document.notes}</Text>
                </Card>
            );
        })}
    </View>
);

const mapStateToProps = state => ({
    homeDocuments: state.homeDocuments
})

export default connect(mapStateToProps)(HomeScreen);
