// Vendors
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import styleVariables from '../../style-variables';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource('home', 30),
        Icon.getImageSource('file-document', 30)
    ])
    .then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'arrivedemo.HomeScreen',
                    label: 'Home',
                    title: 'Home',
                    icon: sources[0]
                },
                {
                    screen: 'arrivedemo.DocumentScreen',
                    label: 'Document',
                    title: 'Document',
                    icon: sources[1]
                }
            ],
            tabsStyle: {
              tabBarSelectedButtonColor: styleVariables.arriveBlue
            },
        })
    })
}

export default startTabs;
