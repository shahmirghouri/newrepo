import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import navigationString from '../../constants/navigationString';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import ConstButton from '../../asset/button';
// import {hide} from 'yargs';
// import {color} from 'react-native-elements/dist/helpers';
import Products from '../../asset/Products';
import Boton from '../../asset/likeButton'



export default function Home({navigation}) {
  const categories = ['Categories', 'Favorites', 'My Ads', 'Top Sellers'];
  const [categoryIndex, setCategoryIndex] = React.useState(0);



  const CategoryList = () => {
    return (
      <View>
        <View style={styles.categoryIcon}>
          
          <TouchableOpacity >
            <View style={{paddingLeft:20}}><MaterialCommunityIcons
              name="format-list-bulleted-square"
              size={30}
              onPress={() => navigation.navigate(navigationString.CATEGORYNAVIGATION)}
              color={'#6902FC'}></MaterialCommunityIcons></View>
            <Text >Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{paddingLeft:13}}><MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons></View>
            <Text>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=> navigation.navigate(navigationString.PACKAGES)}>
            <View style={{paddingLeft:8}}><MaterialCommunityIcons
              name="google-ads"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons></View>
            <Text>My Ads</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{paddingLeft:20}}><MaterialCommunityIcons
              name="account-group-outline"
              size={30}
              color={'#6902FC'}></MaterialCommunityIcons></View>
            <Text>Top Sellers</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCategoryIndex(index)}
              activeOpacity={0.8}>
              <Text
                key={index}
                style={[
                  styles.categoryText,
                  categoryIndex == index && styles.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View> */}
      </View>
    );
  };

  const Card = ({Products}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(navigationString.DETAIL, Products)}>
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity>
              {/* <View
              style={{
                borderRadius: 15,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Products.like
                  ? 'rgba(227, 210, 252, 1)'
                  : 'rgba(0,0,0,0.15)',
              }}
              onPress={() => navigation.navigate(navigationString.HOME)}>
              <MaterialCommunityIcons
                name="heart"
                size={18}
                color={
                  Products.like ? 'rgba(105, 2, 252, 1)' : 'rgba(0,0,0,0.4)'
                }></MaterialCommunityIcons>
            </View> */}
            <Boton/>
            </TouchableOpacity>
          </View>

          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              source={Products.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold'}}>{Products.name}</Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15}}>Rs. {Products.price}</Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate(navigationString.CHAT)}>
                <MaterialCommunityIcons
                  name="forum"
                  size={18}
                  color={'#6902FC'}></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        
        {/* <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to</Text> */}
        <Text style={{fontSize: 36, fontWeight: 'bold', color: '#6902FC'}}>
          Home
        </Text>

        <View
          style={{
            // centring Tab Button...
            position: 'absolute',

            top: 17,
            right: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.NOTIFICATION)}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={25}></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={25}></MaterialCommunityIcons>
          <TextInput placeholder="Search" style={styles.input}></TextInput>
        </View>
        
        <View style={styles.filterButton}>
        <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.FILTER)}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={25}
            color="#f4f4f4"

            // color='#6902FC'
          ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>

        <CategoryList />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        data={Products}
        renderItem={({item}) => <Card Products={item} />}
      />
    </SafeAreaView>
  );
}
