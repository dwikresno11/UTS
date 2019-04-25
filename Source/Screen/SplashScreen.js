/**
 * Created by chandra on 09/09/2018.
 */
import React from 'react';
import {View,StyleSheet,Text,StatusBar} from 'react-native';
import StyleBase from '../Utility/Style';
import {NavigationActions,StackActions} from 'react-navigation';
export default class SplashScreen extends React.Component{
    static navigationOptions={
        header:null
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={StyleBase.colorBase} barStyle="dark-content" />
                <Text style={styles.font}>UTS</Text>
            </View>
        )
    }
    componentDidMount(){
        setTimeout(
            () => {
                let resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Dashboard'})
                    ]
                });
                this.props.navigation.dispatch(resetAction);
            },
            2000
        );
        //AsyncStorage.getItem('login',this.getStatusLogin);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleBase.colorBase,
    },
    font:{
        color:"#57ce0c",
        fontFamily:StyleBase.fontBold,
        fontSize:32
    }
});