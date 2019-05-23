import React from 'react';
import {
    Image, 
    View,
    StyleSheet,
    ScrollView,
    Text, Alert,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import styles from '../screens/styles';


class Profile extends React.Component
{
    render() {
        const profileData = [
            {key: "Name", value: 'Marian'},
            {key: "Surname", value: 'Ptashynskyi'},
            {key: 'Date of birth', value: '10-08-1995'},
            {key: 'Phone number', value: '+38063256XXXX'},
        ];

        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileContainer}>
                    <Text style={styles.headerText}>Marian Ptashynskyi</Text>
                    <Image style={styles.profileImage} source={require('../assets/images/profilePic.jpg')} />
                </View>
                <View>
                    <ProfileListHeader />
                    <FlatList 
                        data = {profileData}
                        renderItem = {this._profileItemsList}
                    />
                </View>
            </ScrollView>
        );
    }
    
    _profileItemsList = ({ item }) => {
        return (
        <View style={styles.profileItemContainer}>
            <Text style={styles.profileItemTextKey}>{item.key}: </Text>
            <Text style={styles.profileItemTextValue}>{item.value}</Text>
        </View>
        );
    };
}

const ProfileListHeader = () => {
    return (
    <View style={[styles.profileItemContainer, styles.listHeaderContainer]}>
        <Text style={{ fontSize: 20, color: '#0a0a0a'}}>Contact info:</Text>
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    profileContainer: {
        margin: 10,
        alignItems: 'center',
    },
    profileImage: {
        width: 150, 
        height: 150,
        resizeMode: 'contain',
        borderColor: '#fafafa',
        borderWidth: 3,
    },
    headerText: {
        color: 'rgba(96,100,109, 1)',
        fontSize: 24,
        lineHeight: 28,
        marginBottom: 20,
    },
    profileItemContainer: {
        backgroundColor: '#fafafa',
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 3,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileItemTextKey: {
        fontSize: 18,
        color: '#808080',
    },
    profileItemTextValue: {
        fontSize: 16,
        color: '#606060',
    },
    listHeaderContainer:
    {
        backgroundColor: '#cacaca',
        borderColor: '#dbdbdb',
    }
});


export default Profile;