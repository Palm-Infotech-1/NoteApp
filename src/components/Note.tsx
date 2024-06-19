import { Image, TouchableOpacity, StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { Images } from '../assets';
import { deleteNote } from '../reducers/noteSlice';
import { show } from '../reducers/selectedNoteSlice';


interface NoteProps {
    id: number
    title: string;
    description: string;
    index: number
}

const Note = (props: NoteProps) => {
    const dispatch = useDispatch();
    const onPressDelete = useCallback(() => {
        Alert.alert('Confirmation', 'Are you sure you want to delete?', [{ text: 'No' }, {
            text: 'Yes, Delete',
            onPress() { dispatch(deleteNote(props.id)) }
        }])
    }, [])
    const onPressNote = useCallback(() => {
        dispatch(show(props.index))
    }, [])
    return (
        <Pressable onPress={onPressNote} style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                {props.description && <Text numberOfLines={2} style={styles.description}>{props.description}</Text>}
            </View>
            <TouchableOpacity hitSlop={20} onPress={onPressDelete} style={styles.iconContainer}>
                <Image source={Images.delete} style={styles.icon} />
            </TouchableOpacity>
        </Pressable>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'aliceblue',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    textContainer: {
        width: '85%',
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
    description: {
        fontSize: 15,
        color: 'darkgrey',
    },
    iconContainer: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: 'red'
    }
})