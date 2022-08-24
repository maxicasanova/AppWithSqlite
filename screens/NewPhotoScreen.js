import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ImageSelector from '../src/components/ImageSelector';
import { addPhoto } from '../store/actions/task.action';

const NewPhotoScreen = ({ navigation, route }) => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const handleTitleChange = text => setTitle(text)

    const task = useSelector(state => state.tasks.selected)

    const handleSave = () => {
        dispatch(addPhoto(task.id, image));
        navigation.navigate('Detail');
    }

    return (
        <ScrollView style={{ flex: 1}} scrollEnabled>
                <Text style={styles.label}>Titulo</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}    
                />
                <ImageSelector onImage={image => setImage(image)} />
                <Button title='Guardar' onPress={handleSave}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default NewPhotoScreen