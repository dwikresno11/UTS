/**
 * Created by chandra on 10/09/2018.
 */
import {createStackNavigator,createAppContainer} from 'react-navigation';
import StyleBase from './Utility/Style';
import React from 'react';
import {View,StatusBar} from 'react-native';

import SplashScreen from './Screen/SplashScreen';
import Dashboard from './Screen/Dashboard';
import Detail from './Screen/Detail';
import GridLayout from './Screen/GridLayout';
// import DetailVideo from './Screen/DetailVideo';
// import More from './Screen/More';

const Routes=createStackNavigator({
    SplashScreen:{screen:SplashScreen},
    Dashboard:{screen:Dashboard},
    Detail:{screen:Detail},
    GridLayout:{screen:GridLayout},
    // DetailVideo:{screen:DetailVideo},
    // More:{screen:More},
},{
    initialRouteName:'SplashScreen',
    navigationOptions:{
        headerStyle:{
            backgroundColor:StyleBase.colorBase
        },
        headerTintColor:StyleBase.whiteBase,
        headerTitleStyle:{
            fontFamily:'azoft-sans'
        }
    }
});

const AppContainer = createAppContainer(Routes);

export default AppContainer;

// export default class Route extends React.Component{
//     render(){
//         return(
//             <View style={{flex:1}}>
//                 <StatusBar backgroundColor={StyleBase.colorBase}/>
//                 <Routes/>
//             </View>
//         )
//     }
// }