// Vendors
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// Components
import DefaultButton from '../../components/UI/DefaultButton';

// Styles
import styles from './styles';

class ImageViewer extends Component {
    constructor (props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        docImage: null
    }

    componentDidMount () {
        this.setState({
            docImage: this.props.docImage
        });
    }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent" && event.id && event.id === "willAppear") {
            if (this.props.documentWasSaved) {
                this.props.navigator.popToRoot();
            }
        }
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({
            title: "Pick an image"
        }, res => {
            if (res.didCancel) {
                console.log('User cancelled');
            } else if (res.error) {
                console.log('error', res.error);
            } else {
                const pickedImage = { uri: res.uri, base64: res.data };

                this.setState({ docImage: pickedImage });
                this.props.handleImageSelection(pickedImage);
            }
        });
    }

    render () {
        return (
            <View style={styles.imageViewerContainer}>
              <View style={styles.documentImageContainer}>
                <Image
                    source={this.state.docImage}
                    style={styles.documentImage}
                />
              </View>
              <View style={styles.changePhotoContainer}>
                  <DefaultButton
                      style={styles.changePhotoButtonWithBackground}
                      textStyle={styles.changePhotoButtonWithBackground__Text}
                      onPress={this.pickImageHandler}
                  >
                      Change Photo
                  </DefaultButton>
              </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    documentWasSaved: state.document.documentWasSaved
});

export default connect(mapStateToProps)(ImageViewer);
