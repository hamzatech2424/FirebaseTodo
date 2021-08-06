import database from '@react-native-firebase/database';



export const SendData = () => {
    setid(id + 1)
    const Reference = database().ref(`/YourTasks`)
    // console.log('Auto generated key: ', Reference.key)


    Reference
        .push({
            id: id,
            newtask: datafrominput,
        })
        .then(() => console.log('Data updated.'));

}