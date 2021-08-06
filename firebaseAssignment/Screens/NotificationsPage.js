import React,{useEffect} from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import { get } from "react-native/Libraries/Utilities/PixelRatio";


const Notifications = () => {



useEffect(()=>{
    // createChannel()
    // checkPermission()
    checkPermissionCloudMessaging()
    // HandlingNotifications()
},[])








const HandlingNotifications = () => {

// it will trigger when app was in background    
messaging().onNotificationOpenedApp((remoteMessage)=>{
    console.log(JSON.stringify(remoteMessage),"onNotificationOpenedApp")
})


// it will trigger when app was in quit mode 
messaging().getInitialNotification((remoteMessage)=>{
    console.log(JSON.stringify(remoteMessage),"getInitialNotification")
})


// it will trigger when app was in foregound
messaging().onMessage((remoteMessage)=>{
    console.log(JSON.stringify(remoteMessage),"onMessage")
})


}







const checkPermissionCloudMessaging = async() => {

const token = await messaging().getToken()   
console.log(token) 

console.log("check permisiion function call")

const permissionGranted = await messaging().requestPermission()

const enabled = permissionGranted === messaging.AuthorizationStatus.AUTHORIZED || messaging.AuthorizationStatus.PROVISIONAL


if(enabled) {
    console.log("Authorization status:", permissionGranted)
}
}


//local push notifications using library
// const createChannel = () => {
//     PushNotification.createChannel({

//         channelId:"test-channel",
//         channelName: "Test Channel"

//         })       
// }



//local push notifications using library
// const handleNotifications = (item) => {

//     // PushNotification.cancelAllLocalNotifications() //when you click the notification btn it will remove all previous notifications and new one is there 

//     PushNotification.localNotification({
//         channelId:"test-channel",
//         title:"you clicked Notifcation button",
//         message:`${item}`,
//         // bigText: "My big text that will be shown when notification is expanded",
//         color: "red",
//     })

    
    // PushNotification.localNotificationSchedule({
    //     channelId:"test-channel",
    //     title:"Alarm",
    //     date:new Date(Date.now() + 20 * 1000),
    //     message:"you clicked Notifcation button 20 seconds agg",
    //     allowWhileIdle:true
    // })


// }























    return(
        <View style={styles.container}>

            <TouchableOpacity 
            style={{backgroundColor:"orange",width:"80%",height:"10%",justifyContent:"center",alignItems:"center"}}
            // onPress={()=>handleNotifications("hamza")}
            >
                <Text>Send local Notification</Text>
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  }
})


export default Notifications