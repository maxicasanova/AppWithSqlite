import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddItem (props) {

    const {textItem, handleButtonAdd, handleTextChange} = props;

    return(
        <View>
            <View style={styles.wrapper}>
                <TextInput
                    placeholder='Ingrese aqui su tarea'
                    style = {styles.input}
                    value={textItem}
                    onChangeText={handleTextChange}
                />
                <Pressable 
                    style={textItem.length < 3 ? styles.disabled : styles.button} 
                    onPress={handleButtonAdd} 
                    disabled={textItem.length < 3 ? true : false}
                >
                    <Text style={styles.textButton}>&#43;</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width:300,
        maxWidth:'90%'
    },
    button : {
        backgroundColor:'green',
        color:'white',
        width:40,
        borderRadius:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize:30,
        color:'white',
    },
    wrapper:{
        display:'flex',
        flexDirection:'row',
        margin:30
    }
})