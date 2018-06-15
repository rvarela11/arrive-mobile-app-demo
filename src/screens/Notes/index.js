import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import DefaultInput from '../../components/UI/DefaultInput';
import DefaultButton from '../../components/UI/DefaultButton';

import styles from './styles';

class NotesScreen extends Component {
    constructor (props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent" && event.id && event.id === "willAppear") {
            if (this.props.documentWasSaved) {
                this.props.navigator.popToRoot();
            }
        }
    }

    render () {
        return (
            <View style={styles.notesContainer}>
                <DefaultInput
                    placeholder="Notes"
                    style={styles.notesInput}
                    multiline
                    onChangeText={(value) => {
                        this.props.handleInputChange(value, 'notes')}
                    }
                    value={this.props.notes}
                ></DefaultInput>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    documentWasSaved: state.document.documentWasSaved
});

export default connect(mapStateToProps)(NotesScreen);