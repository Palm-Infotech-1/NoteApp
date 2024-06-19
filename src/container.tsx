import { FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import Note from './components/Note'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import { NoteType } from './reducers/noteSlice'
import AddNote from './components/AddNote'
import PreviewModal from './components/PreviewModal'

const AppContainer = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);
    const renderItem: ListRenderItem<NoteType> = useMemo(() => ({ item, index }) => <Note {...item} index={index} />, [])
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>My Notes</Text>
                <FlatList
                    data={notes}
                    contentContainerStyle={styles.flatlistcContainer}
                    ItemSeparatorComponent={SeparatorComponent}
                    ListFooterComponent={ListFooterComponent}
                    renderItem={renderItem}
                    ListEmptyComponent={ListEmptyComponent}
                />
                <AddNote />
            </SafeAreaView>
            <PreviewModal />
        </>
    )
}

const SeparatorComponent = () => {
    return <View style={styles.seperator} />
}
const ListFooterComponent = () => {
    return <View style={styles.footer} />
}
const ListEmptyComponent = () => {
    return <View style={styles.empty}>
        <Text style={styles.emptyText}>Tap "+" icon to create your personalised note.</Text>
    </View>
}

export default AppContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    seperator: {
        height: 15,
    },
    footer: {
        height: 100
    },
    empty: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText: {
        fontSize: 20,
        color: 'black',
        width: '90%',
        textAlign: 'center'
    },
    flatlistcContainer: {
        flexGrow: 1
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        paddingVertical: 10,
        color: 'black'
    }
})