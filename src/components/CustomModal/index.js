import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

export default function CustomModal (props) {

    const {modalVisible, handleDelete, setModalVisible} = props;

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }
            }
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Esta seguro que desea eliminar la tarea?</Text>
                    <View style={styles.actions}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Me equivoque</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => handleDelete()}
                        >
                            <Text style={styles.textStyle}>Si, obvio</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily:'OpenLight'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily:'OpenBold'
    },
    actions:{
        width:'70%',
        display:'flex',
        flexDirection: "row",
        justifyContent:'space-around'
    }
});