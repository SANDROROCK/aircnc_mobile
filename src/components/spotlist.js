import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech }) {

    //criação da variavel que vai armazenar o stado 
    const [spots, setSpot] = useState([]);


    //assim que é aberto o componente esta função é executada
    useEffect(() => {
        async function loadSpot() {
            //carregando a api na rota spots
            console.log(tech);
            const response = await api.get('/spots', {
                params: { tech },

            });
            setSpot(response.data)
            console.log(response.data)
        }
        loadSpot();
    }, []);




    return (
        <View style={styles.container}>
            <Text style={styles.titel}>Empresas que usam a tecnologia {tech}</Text>
            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spots._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listitem}>
                        <Image style={styles.image} source={{ uri: item.thumbnail_url }} />
                    </View>
                )}

            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {

    },
    listitem: {
        marginTop: 20,
        flexDirection: 'column',
        height: 50,
    },

    list: {
        paddingHorizontal: 20
    },
    image: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    }
})

