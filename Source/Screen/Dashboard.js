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
    BackHandler
} from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Form, Item } from 'native-base'
import StyleBase from '../Utility/Style';
// import Kategori from '../Utility/KategoriDashboard';

export default class Dashboard extends React.Component {

    constructor(props) {

        super(props)
    
        this.state = {
          nim   : '',
          nama  : '',
          prodi : '',
          kelas : '',
          status: '',
          senin : '',
          selasa: '',
          rabu  : '',
          kamis : '',
          jumat : '',
          sabtu : '',
          // showToast: false
        }
      }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        //   console.log('exit'); // works best when the goBack is async
          BackHandler.exitApp()
          return true;
        });
      }
    
      componentWillUnmount() {
        this.backHandler.remove();
      }

    

    tambah = () => {
        AsyncStorage.setItem('nim', this.state.nim)
        AsyncStorage.setItem('nama', this.state.nama)
        AsyncStorage.setItem('prodi', this.state.prodi)
        AsyncStorage.setItem('kelas', this.state.kelas)
        AsyncStorage.setItem('status', this.state.status)
        AsyncStorage.setItem('senin', this.state.senin)
        AsyncStorage.setItem('selasa', this.state.selasa)
        AsyncStorage.setItem('rabu', this.state.rabu)
        AsyncStorage.setItem('kamis', this.state.kamis)
        AsyncStorage.setItem('jumat', this.state.jumat)
        AsyncStorage.setItem('sabtu', this.state.sabtu)
        // AsyncStorage.setItem('idgudang', responseJson.idgudang)
        // AsyncStorage.setItem('namagudang', responseJson.namagudang)
        this.props.navigation.navigate('Detail')//navigate to Stock Opname Produk List
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                <View>
                    <StatusBar backgroundColor={StyleBase.whiteBase} barStyle="dark-content" />
                </View>
                <View style={{ marginBottom: 20, borderWidth: 1, }}>
                    <Text style={{ borderBottomWidth: 1, fontFamily: StyleBase.fontBold }}> Registrasi</Text>
                    <Form>
                        <Item rounded style={StyleBase.formLogin}>
                            <TextInput
                                placeholder="NIM"
                                style={{ paddingLeft: 20, width: '100%' }}
                                onChangeText={(value) => this.setState({ nim: value })}
                            />
                        </Item>
                        <Item rounded style={StyleBase.formLogin}>
                            <TextInput
                                placeholder="Nama"
                                style={{ paddingLeft: 20, width: '100%' }}
                                onChangeText={(value) => this.setState({ nama: value })} />
                        </Item>
                        <Item rounded style={StyleBase.formLogin}>
                            <TextInput
                                placeholder="Prodi"
                                style={{ paddingLeft: 20, width: '100%' }}
                                onChangeText={(value) => this.setState({ prodi: value })} />
                        </Item>
                        <Item rounded style={StyleBase.formLogin}>
                            <TextInput
                                placeholder="Kelas"
                                style={{ paddingLeft: 20, width: '100%' }}
                                onChangeText={(value) => this.setState({ kelas: value })} />
                        </Item>
                        <Item rounded style={StyleBase.formLogin}>
                            <TextInput
                                placeholder="Status"
                                style={{ paddingLeft: 20, width: '100%' }}
                                onChangeText={(value) => this.setState({ status: value })} />
                        </Item>
                    </Form>
                </View>
                <View style={{ marginBottom: 20, paddingBottom: 20, borderWidth: 1 }}>
                    <Text style={{ fontFamily: StyleBase.fontBold, }}>Input Jadwal</Text>
                    <Text>Senin</Text>
                    <Item rounded style={{backgroundColor: "white",}}>
                        <TextInput
                            style={{ paddingLeft: 20, width: '100%' }}
                            onChangeText={(value) => this.setState({ senin: value })} />
                    </Item>
                    <Text>Selasa</Text>
                    <Item rounded style={{backgroundColor: "white",}}>
                        <TextInput
                            style={{ paddingLeft: 20, width: '100%' }}
                            onChangeText={(value) => this.setState({ selasa: value })} />
                    </Item>
                    <Text>Rabu</Text>
                    <Item rounded style={{backgroundColor: "white",}}>
                        <TextInput
                            style={{ paddingLeft: 20, width: '100%' }}
                            onChangeText={(value) => this.setState({ rabu: value })} />
                    </Item>
                    <Text>Kamis</Text>
                    <Item rounded style={{backgroundColor: "white",}}>
                        <TextInput
                            style={{ paddingLeft: 20, width: '100%' }}
                            onChangeText={(value) => this.setState({ kamis: value })} />
                    </Item>
                    <Text>Jumat</Text>
                    <Item rounded style={{backgroundColor: "white",}}>
                        <TextInput
                            style={{ paddingLeft: 20, width: '100%' }}
                            onChangeText={(value) => this.setState({ jumat: value })} />
                    </Item>
                    <Text>Sabtu</Text>
                    <Item rounded style={{backgroundColor: "white",}}>
                        <TextInput
                            style={{ paddingLeft: 20, width: '100%' }}
                            onChangeText={(value) => this.setState({ sabtu: value })} />
                    </Item>
                    <View style={{ paddingTop: 10, paddingBottom: 10, marginTop: 10, marginBottom: 20, textAlign: "center" }}>
                        <TouchableOpacity full>
                            <Button onPress={() => this.tambah()}
                                style={{ borderRadius: 20, width: 250, justifyContent: "center", alignSelf: "center", textAlignVertical: "center" }}>
                                <Text style={{ color: 'white', alignItems: 'center' }}>Tambah</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleBase.backgroundColor,
        padding: 20
    }
})
