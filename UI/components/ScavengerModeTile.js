import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Card from './Card';


export default class ScavengerModeTile extends React.Component {

    render() {
        return (
            <TouchableHighlight 
                onPress={() => this.props.navigation.navigate('ScavengerMode')} 
                underlayColor="white" 
            >
                <Card> 
                    <View style={styles.Header}>
                        <FontAwesome name="search" size={30} style={styles.MagnifyingGlass} />
                        <Text style={styles.TileHeaderText}> Scavenger Mode </Text>
                    </View>
                    <View style={styles.SubHeader}>
                        <Text style={styles.SubText}> Current Word  </Text>
                        <Text style={styles.SubText}> Overall Score  </Text>
                    </View>
                </Card>
            </TouchableHighlight>
        )
    }

}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
    },
    Header: {
        flex: 1,
        flexDirection: 'row',
    },
    MagnifyingGlass: {
        padding: 10,
        color: 'rgba(96,100,109, 1)',
    },
    TileHeaderText: {
        fontSize: 30,
        paddingTop: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    SubHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    SubText: {
        fontSize: 17,
        padding: 10,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'left',
        fontWeight: 'bold',
    }


});