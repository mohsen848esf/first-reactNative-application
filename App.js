// import { StatusBar } from 'expo-status-bar'
// import { useDimensions } from '@react-native-community/hooks'
import React, { useEffect, useState } from 'react'
import {
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  Button,
  StatusBar,
  Dimensions,
  Switch,
  // alert
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AppButton from './app/components/AppButton'
import AppPicker from './app/components/AppPicker'
import AppTexInput from './app/components/AppTexInput'
import Card from './app/components/Card'
import Icon from './app/components/Icon'
import ListItem from './app/components/list/ListItem'
import Screen from './app/components/Screen'
import AccountScreen from './app/screens/AccountScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import LoginScreen from './app/screens/LoginScreen'
import MessageScreen from './app/screens/MessageScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import ImageInput from './app/components/ImageInput'
import ImageInputList from './app/components/ImageInputList'
import * as Location from 'expo-location'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator'

const categories = [
  { label: 'مبلمان', value: 1 },
  { label: 'تن پوش', value: 2 },
  { label: 'دوربین ها', value: 3 },
]

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [imageUris, setImageUris] = useState([])
  const [isNew, setIsNew] = useState([])
  const [category, setCategory] = useState(categories[0])
  // const handlePress = async () => {
  // try {
  //   const { granted } = await Location.requestForegroundPermissionsAsync()
  //   if (!granted) return
  //   console.log('hossein', granted)
  //   const { coords } = await Location.getLastKnownPositionAsync()
  //   if (!coords) console.log('result')
  //   console.log('latitude', coords && 'trues')
  //   console.log('object')
  // } catch (error) {
  //   console.log(error)
  // }

  //      console.log("error")
  // }
  //   const requestPermission = async () => {
  //     const { granted } = await ImagePicker.requestCameraPermissionsAsync()
  //     const result = await Permissions.askAsync(
  //       Permissions.CAMERA,
  //       Permissions.LOCATION_FOREGROUND,
  //     )

  //     // setIsNew(result)
  //     if (!result.granted && !granted) {
  //       alert('You need to enable permission')
  //     }
  //   }
  //   useEffect(() => {
  //     requestPermission()
  //   }, [])
  //   const selectImage = async () => {
  //     try {
  //       const res = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         quality: 0.2,
  //       })
  //       if (!res.cancelled) onChangeImage(res.uri)
  //     } catch (error) {
  //       console.log('error image', error)
  //     }
  //   }
  //   const handleAdd = (uri) => {
  //     setImageUris([...imageUris, uri])
  //   }
  //   const handleRemove = (uri) => {
  //     setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
  //   }
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <Screen>
    //   <Button title="click" onPress={handlePress} />
    // </Screen>
    // <ListingEditScreen />

    // <Screen>
    // <Button title="cleck there" onPress={selectImage} />
    //<Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    // <ImageInputList
    // imageUris={imageUris}
    // onAddImage={handleAdd}
    //onRemoveImage={handleRemove}
    ///>
    //{/* <Button title="cleck " onPress={()=>console.log("sscsc")}/> */}
    // </Screen>
    // <View
    //   style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="لباس قرمز برای فروش"
    //     subTitle="$100"
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
    // <ListingDetailsScreen />
    // <ViewImageScreen />
    // <MessageScreen />
    // <Screen>
    //   <ListItem
    //     title="mohsen"
    //     subTitle="mohsenesfandiari"
    //     image={require('./app/assets/user-b2.jpg')}
    //   />
    //   <ListItem
    //     title="mohsen"
    //     subTitle="mohsenesfandiari"
    //     image={require('./app/assets/user-b2.jpg')}
    //   />
    // </Screen>
    // <AccountScreen />
    // <ListingsScreen />
    // <Screen>
    //   <Text>{firstName}</Text>
    //   <TextInput
    //     // maxLength={5}
    //     // keyboardType="numeric"
    //     clearButtonMod="always"
    //     onChangeText={(text) => setFirstName(text)}
    //     style={{
    //       borderBottomColor: '#ccc',
    //       borderBottomWidth: 1,
    //       borderBottomWidth: 1,
    //     }}
    //     placeholder="first name"
    //   />
    // </Screen>
    // <AppTexInput placeholder={"ایمیل "} icon={ "email"}/>
    // <Screen>
    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    // </Screen>
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder={'دسته بندی'}
    //   />
    //   <

    //  icon="email" placeholder={'ایمیل'} />
    // </Screen>
    // <LoginScreen />
    // <ListingEditScreen />
    // <Screen >
    // <Text>salam</Text> </Screen >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // fontSize: 'larg',
  },
  text: {
    // backgroundColor: '#ccc',
    color: 'blue',
    borderStyle: 'solid',
    borderColor: 'red',
  },
})
