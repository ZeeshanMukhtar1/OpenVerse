import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';

const { width, height } = Dimensions.get('window');

export default function TrendingMovies({ data }) {
    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    };

    return (
        <View style={{ marginBottom: 8 }}>
            <Text style={{ color: 'white', fontSize: 20, marginLeft: 4, marginBottom: 5 }}>Trending</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleClick(item)}
                        style={{ width: width * 0.62, marginRight: 10 }}
                    >
                        <MovieCard item={item} handleClick={handleClick} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const MovieCard = ({ item, handleClick }) => {
    return (
        <TouchableOpacity onPress={() => handleClick(item)}>
            <Image
                source={{ uri: image500(item.poster_path) }}
                style={{
                    width: width * 0.6,
                    height: height * 0.4,
                    borderRadius: 12, // Adding border radius for rounded corners
                }}
            />
        </TouchableOpacity>
    );
}
