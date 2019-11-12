import React ,{useState,useEffect}from 'react';
import {View,StyleSheet,SafeAreaView,AsyncStorage,Image} from 'react-native';
import SpotList from '../components/spotlist';
import logo from '../../assets/logo.png';

export default function List(){

    const [tech,setTech] = useState([]);

    useEffect(()=>{
        AsyncStorage.getItem('tec').then(storagetech =>{
            const arrayTechs = storagetech.split(',').map(tech =>tech.trim());
                setTech(arrayTechs);
            })
        
    },[]);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo}style={styles.logo}/>
            {tech.map( tech => <SpotList key={tech} tech={tech}/>)}
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },
    btn:{
        height:42,
        backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2
    },
    labelbtn: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
})