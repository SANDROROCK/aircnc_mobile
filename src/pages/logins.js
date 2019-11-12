import React ,{useState,useEffect} from 'react';
import { View,KeyboardAvoidingView,AsyncStorage, Text, Image, StyleSheet, TextInput,TouchableOpacity  } from 'react-native';
import api from '../services/api';
import Logo from '../../assets/logo.png';




export default function Login({navigation}) {

    const [email,setEmail] = useState('');
    const [techs,setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user=>{
            if(user){

              
               navigation.navigate('List');
               console.log (user);
         }

               
           
        },
        
        )
    },[]);


    async function handleSubmit(){

     const reponse = await api.post('/users',{
        email
     })

    const { _id }  = reponse.data;
    console.log(_id);
    

    AsyncStorage.setItem('user',_id);
    AsyncStorage.setItem('tec',techs);

    navigation.navigate('List');
    }
    return (
        <KeyboardAvoidingView  behavior ='padding' style={styles.container}>

            <Image source={Logo}/>
            <View style={styles.form}>

                <Text style={styles.label}>Seu Email *:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu E-mail:"
                    placeholderTextColor="#ddd"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
    

                <Text style={styles.label}>Tecnologias *:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu E-mail:"
                    placeholderTextColor="#ddd"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.labelbtn}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    );
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

