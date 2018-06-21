// Vendors
import React from 'react';
import { FlatList } from 'react-native';

// Components
import LoadListItem from '../LoadListItem';

const LoadList = (props) => (
    <FlatList
        data={props.data}
        keyExtractor={props.keyExtractor}
        renderItem={({item}) => {
            return (
            <LoadListItem
                key={item.id}
                document={item}
                navigator={props.navigator}
                getLoadListItemId={props.getLoadListItemId}
            />
            );
        }}
    />
);

export default LoadList;