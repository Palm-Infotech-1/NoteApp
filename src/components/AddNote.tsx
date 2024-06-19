import { Alert, Button, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../reducers/noteSlice';
import { Images } from '../assets';

const AddNote = () => {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onPress = useCallback(() => {
        setShowModal(true)
    }, [])
    const onPressCross = useCallback(() => {
        setShowModal(false)
    }, [])
    const onSubmitNote = useCallback(() => {
        if (!title || !description) Alert.alert('Error', `${!title && !description ? 'Title & Description' : !title ? 'Title' : 'Description'} cannot be blank!`);
        else {
            dispatch(addNote({ title, description }));
            setShowModal(false)
            setTitle('')
            setDescription('')
        }
    }, [title, description])
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Image source={Images.plus} style={styles.plus} />
            </TouchableOpacity>
            <Modal visible={showModal} style={styles.modal}>
                <SafeAreaView style={styles.safeAreaContainer}>
                    <TouchableOpacity onPress={onPressCross} style={styles.iconContainer}>
                        <Image source={Images.cross} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Enter note</Text>
                        <View style={styles.formContainer}>
                            <View style={styles.textInputContainer}>
                                <TextInput onChangeText={setTitle} style={styles.textInput} placeholder='Enter note title' placeholderTextColor={'darkgrey'} />
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput onChangeText={setDescription} style={[styles.textInput, styles.description]} multiline placeholder='Enter note Description' placeholderTextColor={'darkgrey'} />
                            </View>
                            <Button title='Add Note' onPress={onSubmitNote} />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    )
}

export default AddNote

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
        borderRadius: 200
    },
    plus: {
        height: 30,
        width: 30,
        tintColor: 'white'
    },
    modal: {
        backgroundColor: 'transparent',
        height: 200
    },
    safeAreaContainer: {
        flex: 1
    },
    modalContainer: {
        flex: 1,
        marginTop: '20%'
    },
    iconContainer: {
        alignSelf: 'flex-end',
        paddingEnd: 20,
        paddingTop: 20
    },
    icon: {
        height: 30,
        width: 30
    },
    title: {
        fontSize: 27,
        alignSelf: 'center',
        color: 'black',
        marginBottom: 20,
    },
    formContainer: {
        paddingHorizontal: 20
    },
    textInputContainer: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'aliceblue',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    textInput: {
        includeFontPadding: false,
        color: 'black',
        padding: 0
    },
    description: {
        height: 80
    }
})