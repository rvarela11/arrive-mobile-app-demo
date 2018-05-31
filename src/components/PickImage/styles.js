import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    documentImage: {
        width: "100%",
        height: "100%"
    },
    imagePickerContainer: {
        width: "80%",
        height: 200,
        marginTop: 20
    },
    takePhotoButton: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#cccccc',
        borderWidth: 1,
        shadowColor: '#cccccc',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        height: '100%'
    }
});

export default styles;