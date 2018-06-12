// Vendors
import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import LoadCard from '../../components/LoadCard';

const HomeScreen = props => (
    <View>
        {props.homeDocuments.map((document) => {
            console.log('document---------', document)
            return (
                <LoadCard
                    key={document.title}
                    document={document}
                    navigator={props.navigator}
                />
            );
        })}
    </View>
);

const mapStateToProps = state => ({
    homeDocuments: state.homeDocuments
})

export default connect(mapStateToProps)(HomeScreen);
