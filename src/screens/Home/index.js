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
            return (
                <LoadCard key={document.title} document={document} />
            );
        })}
    </View>
);

const mapStateToProps = state => ({
    homeDocuments: state.homeDocuments
})

export default connect(mapStateToProps)(HomeScreen);
