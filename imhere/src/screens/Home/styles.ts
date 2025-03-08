import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        height: 56,
        borderRadius: 5,
        color: '#FFF'
    },
    buttonText: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
    },
    messageVoid: {
        color: '#FDFCFE',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 24,
    },
});