import { Button, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ImageSelector from '../src/components/ImageSelector';
import { addPhoto } from '../store/actions/task.action';

const NewPhotoScreen = ({ navigation, route }) => {
    
    const dispatch = useDispatch();
    const [image, setImage] = useState('');

    const task = useSelector(state => state.tasks.selected)

    const handleSave = () => {
        dispatch(addPhoto(task.id, image));
        navigation.navigate('Detail');
    }

    return (
        <ScrollView style={styles.container} scrollEnabled>
                <ImageSelector onImage={image => setImage(image)} />
                <Button title='Guardar' onPress={handleSave}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default NewPhotoScreen