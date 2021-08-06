import React, { useState, useEffect,useRef,useMemo   } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import database from '@react-native-firebase/database';
import Todo from "../Components/Todo";




const TodoApp = () => {

   
    const [datafrominput, setdatafrominput] = useState("")
    const [placeholder,setplaceholder] = useState("Add Todo")
    const [arrayforDatastoring, setarrayforDatastoring] = useState([])
    const inputEl = useRef(null);
    const [changebtnText,setchangebtnText] = useState(false)



    const SendData = () => {

        const Reference = database().ref(`/YourTasks`)
        // console.log('Auto generated key: ', Reference.key)


        Reference
            .push({
                newtask: datafrominput,
                active:false
            })
            .then(() => {
                console.log('Data updated.')
                setdatafrominput("")
            
            });

    }


    const ReadData = () => {
        database()
            .ref('/YourTasks')
            .on('value', snapshot => {
                // setarrayforDatastoring([snapshot.val()])

                // console.log(snapshot.val())

                const todos = snapshot.val()
                let newArr = []
                // console.log(todos,"readdatasay")
                for (let i in todos) {
                    // console.log(todos)
                    // console.log(i)
                    // console.log(typeof todos[i])
                     // newArr.push(todos[i])
                    newArr.push({...todos[i],id:i}) //it pushes all the todos in new array
                   
                }

                // console.log(newArr)
                setarrayforDatastoring(newArr)
               
            })

    }




    const deleteATodo = (id) => {

        const Reference = database().ref(`/YourTasks`).child(id)
        Reference.remove()
    }





    const UpdateATodo = (id) => {
         
        setdatafrominput("")
        inputEl.current.placeholderText="Update from here"
        const Reference = database().ref(`/YourTasks`).child(id)
        Reference.update({
            newtask:datafrominput
        })

    }




    useEffect(()=>{

        ReadData()

    },[])




    return (
        <View style={styles.container}>
            <TextInput
            ref={inputEl}
                placeholder="Add ToDo"
                style={{ borderColor: "lightgrey", borderWidth: 1 }}
                value={datafrominput}
                onChangeText={(txt) => setdatafrominput(txt)}
            />

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {

                    SendData()
                }}
                style={{ backgroundColor: "green", height: 30, width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>

        

            <View style={{ height: "80%", width: "100%" }}>


             {arrayforDatastoring.map((val,index)=>{
                return <Todo key={index} data={val} del={deleteATodo} upd={UpdateATodo} />
             })}


            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
   
})


export default TodoApp