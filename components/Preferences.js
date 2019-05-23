import React from 'react';
import {
    Image, 
    View,
    StyleSheet,
    ScrollView,
    Text, SectionList
} from 'react-native';

export default class Preferences extends React.Component {
    render() {
        const sections = [
            { header: 'Movies', data: [
                {value: 'IT'},  
                {value: 'MCU'}, 
                {value: 'The impossible'},
            ]},
            { header: 'TV-Series', data: [
                {value: 'The Umbrella Academy'}, 
                {value: 'The Magicians'}, 
                {value: 'Impulse'}, 
                {value: 'Legion'}, 
                {value: 'Love, Death & Robots'}
            ]},
            { header: 'Music Atrists', data: [
                {value: 'Banks'},
                {value: 'Billie Eilish'}, 
                {value: 'Evanescence'},
                {value: 'Iamamiwhoami'}, 
                {value: 'Ionnalee'}, 
            ]},
            { header: 'Hobbies', data: [
                {value: 'Drawing'},
                {value: 'Sudoku'}, 
            ]}
        ];
        
        return (
            <SectionList 
                style={styles.container}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                sections={sections}
            />
        );
    }

    _renderItem = ({item}) => {
        return <SectionContent item={item} />
    };

    _renderSectionHeader = ({section}) => {
        return <SectionHeader title={section.header} />
    };
}

const SectionContent = ({ item }) => {
    return (
        <View style={styles.sectionContentContainer}>
            <Text style={styles.sectionContentText}>{item.value}</Text>
        </View>
    );
};

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionHeaderContainer: {
        backgroundColor: '#fbfbfb',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
      },
      sectionHeaderText: {
        fontSize: 14,
      },
      sectionContentContainer: {
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 15,
      },
      sectionContentText: {
        color: '#808080',
        fontSize: 14,
        flexDirection: 'row',
      },
});
