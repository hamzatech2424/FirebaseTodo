import React from "react"
import {View,Text,TouchableOpacity} from "react-native"



const Todo = ({data,del,upd}) => {

//  console.log(data,"todoappCompo")


    return(
<View style={{backgroundColor:"grey" ,height:40,width:"100%",flexDirection:"row",marginVertical:5}}>

<View style={{width:"50%",height:"100%",paddingLeft:15,justifyContent:"center"}}>
  <Text>{data.newtask}</Text>
</View>


<View style={{width:"50%",height:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

    <TouchableOpacity
    onPress={()=>upd(data.id)}
    style={{backgroundColor:"pink",height:"80%",width:"45%",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"white"}}>update</Text>
    </TouchableOpacity>


    <TouchableOpacity 
    onPress={()=>del(data.id)}
    style={{backgroundColor:"red",height:"80%",width:"45%",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"white"}}>delete</Text>
    </TouchableOpacity>


</View>

</View>
    )
}


export default Todo