import { Button, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { Images } from '../assets'
import { hide } from '../reducers/selectedNoteSlice'

const PreviewModal = () => {
    const selectedNoteIdx = useSelector((state: RootState) => state.selectedNote.selectedNote.index);
    const notes = useSelector((state: RootState) => state.notes.notes);
    const dispatch = useDispatch()
    const onPressCross = useCallback(() => {
        dispatch(hide())
    }, [])
    return (
        <Modal visible={selectedNoteIdx !== undefined} style={styles.modal}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <TouchableOpacity onPress={onPressCross} style={styles.iconContainer}>
                    <Image source={Images.cross} style={styles.icon} />
                </TouchableOpacity>
                {selectedNoteIdx !== undefined && <View style={styles.modalContainer}>
                    <Text style={styles.title}>Preview Note</Text>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Title</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput multiline value={notes[selectedNoteIdx].title} editable={false} style={styles.textInput} />
                        </View>
                        <Text style={styles.label}>Description</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput value={notes[selectedNoteIdx].description} editable={false} style={[styles.textInput, styles.description]} multiline />
                        </View>
                    </View>
                </View>}
            </SafeAreaView>
        </Modal>
    )
}

export default PreviewModal

const styles = StyleSheet.create({
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
    },
    label: {
        fontSize: 15,
        color: 'black',
        fontWeight: '600',
        marginBottom: 5,
    }
})