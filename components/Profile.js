import React from 'react';
import {
    Image, 
    View,
    StyleSheet,
    ScrollView,
    Text,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


class Profile extends React.Component
{
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileContainer}>
                    <Text style={styles.headerText}>Marian Ptashynskyi</Text>
                    <Image style={styles.profileImage} source={require('../assets/images/robot-dev.png')} />
                </View>
                <View style={styles.profileContainer}>
                    <FlatList 
                        data = {[
                            {key: "My name"},
                            {key: "My surname"},
                            {key: 'etc'},
                        ]}
                        renderItem = {({item}) => <Text >{item.key}</Text>}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    profileContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 150, 
        height: 150,
        resizeMode: 'contain',
    },
    headerText: {
        color: 'rgba(96,100,109, 1)',
        fontSize: 24,
        lineHeight: 28,
        marginBottom: 20,
    },
});

export default Profile;