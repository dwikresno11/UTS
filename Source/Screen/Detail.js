/**
 * Created by chandra on 10/09/2018.
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Text, ScrollView,
    ListView,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    StatusBar,
    AsyncStorage,
    Alert,
    ToastAndroid,
    Linking,
    BackHandler,
    Dimensions
} from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Form, Item } from 'native-base'
import StyleBase from '../Utility/Style';
// import Kategori from '../Utility/KategoriDashboard';

export default class Detail extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            nim: '',
            nama: '',
            prodi: '',
            kelas: '',
            status: '',
            senin: '',
            selasa: '',
            rabu: '',
            kamis: '',
            jumat: '',
            sabtu: '',
            screen: Dimensions.get('window')
            // showToast: false
        }
    }

    getOrientation() {
        if (this.state.screen.width > this.state.screen.height) {
            return 'LANDSCAPE';
        } else {
            return 'PORTRAIT';
        }
    }

    getStyle() {
        if (this.getOrientation() === 'LANDSCAPE') {
            return landscapeStyles;
        } else {
            return portraitStyles;
        }
    }
    onLayout() {
        this.setState({ screen: Dimensions.get('window') });
    }

    static navigationOptions = {
        header: null
    }

    async componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('Dashboard'); // works best when the goBack is async
            return true;
        });

        AsyncStorage.getItem('nim').then((value) => this.setState({ nim: value }))
        AsyncStorage.getItem('nama').then((value) => this.setState({ nama: value }))
        AsyncStorage.getItem('prodi').then((value) => this.setState({ prodi: value }))
        AsyncStorage.getItem('kelas').then((value) => this.setState({ kelas: value }))
        AsyncStorage.getItem('status').then((value) => this.setState({ status: value }))
        AsyncStorage.getItem('senin').then((value) => this.setState({ senin: value }))
        AsyncStorage.getItem('selasa').then((value) => this.setState({ selasa: value }))
        AsyncStorage.getItem('rabu').then((value) => this.setState({ rabu: value }))
        AsyncStorage.getItem('kamis').then((value) => this.setState({ kamis: value }))
        AsyncStorage.getItem('jumat').then((value) => this.setState({ jumat: value }))
        AsyncStorage.getItem('sabtu').then((value) => this.setState({ sabtu: value }))

    }

    componentWillUnmount() {
        this.backHandler.remove();
      }

    render() {
        return (
            <View style={this.getStyle().row} onLayout={this.onLayout.bind(this)}>
                <StatusBar backgroundColor={StyleBase.whiteBase} barStyle="dark-content" />
                <View style={[styles.box]}>
                    <Image
                        source={require('../../assets/images/girl.png')}
                        style={styles.fixed}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.two]}>
                    <View>
                        <View style={{ marginBottom: 20, borderWidth: 1, }}>
                            <Text> NIM</Text>
                            <Text style={{ fontFamily: StyleBase.fontBold }}> {this.state.nim}</Text>
                            <Text> Nama</Text>
                            <Text style={{ fontFamily: StyleBase.fontBold }}> {this.state.nama}</Text>
                            <Text> Prodi</Text>
                            <Text style={{ fontFamily: StyleBase.fontBold }}> {this.state.prodi}</Text>
                            <Text> Kelas</Text>
                            <Text style={{ fontFamily: StyleBase.fontBold }}> {this.state.kelas}</Text>
                            <Text> Status</Text>
                            <Text style={{ fontFamily: StyleBase.fontBold }}> {this.state.status}</Text>
                        </View>
                        <View style={{ marginBottom: 20, paddingBottom: 20, borderWidth: 1 }}>
                            <Text style={{ fontFamily: StyleBase.fontBold, }}>Jadwal Perkuliahan</Text>
                            <Text>Senin</Text>
                            <Item rounded>
                                <Text style={{ fontFamily: StyleBase.fontBold, padding: 10 }}> {this.state.senin}</Text>
                            </Item>
                            <Text>Selasa</Text>
                            <Item rounded >
                                <Text style={{ fontFamily: StyleBase.fontBold, padding: 10 }}> {this.state.selasa}</Text>
                            </Item>
                            <Text>Rabu</Text>
                            <Item rounded >
                                <Text style={{ fontFamily: StyleBase.fontBold, padding: 10 }}> {this.state.rabu}</Text>
                            </Item>
                            <Text>Kamis</Text>
                            <Item rounded >
                                <Text style={{ fontFamily: StyleBase.fontBold, padding: 10 }}> {this.state.kamis}</Text>
                            </Item>
                            <Text>Jumat</Text>
                            <Item rounded >
                                <Text style={{ fontFamily: StyleBase.fontBold, padding: 10 }}> {this.state.jumat}</Text>
                            </Item>
                            <Text>Sabtu</Text>
                            <Item rounded>
                                <Text style={{ fontFamily: StyleBase.fontBold, padding: 10 }}> {this.state.sabtu}</Text>
                            </Item>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    box: {
        flex: .4,
    },
    box2: {
        backgroundColor: 'green'
    },
    box3: {
        backgroundColor: 'orange'
    },
    two: {
        flex: 2
    },
    fixed: {
        width: 150, height: 150, borderRadius: 150 / 2, justifyContent: "center", alignSelf: "center"
    }
});

const portraitStyles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});

const landscapeStyles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});
