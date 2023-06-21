import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1',
    },
    content: {paddingHorizontal: 30,},
    header: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
    },
    card: {
        width:'100%',
        height:190,
        backgroundColor: '#9500F6',
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20,
        padding: 20,
        justifyContent: 'space-between'
    },
    cardDetails: {
        width:'100%',
        height:120,
        backgroundColor: '#9500F6',
        borderRadius: 20,
        elevation: 5,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardText: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 36,
        fontWeight: '600',
        justifyContent: 'space-between'
    },
    cardDetailsHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    cardDetailsText: {
        color: '#fff',
        fontSize: 34,
        fontWeight: '600'
    },
    cardDetailsHeaderText: {
        color: '#fff'
    },
    footer: {
        paddingTop: 30,

    },
    footerText: {
        color: '#fff',
        marginHorizontal: 20,
        paddingBottom: 30,
        fontWeight: '600',
        fontSize: 14
    },
    footerCard: {
        width: 100,
        height: 127,
        backgroundColor: '#9500F6',
        elevation: 5,
        borderRadius:20,
        padding:20,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    footerCardText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18
    },
    footerContentScrollView: {
        height: 400,
    }
  });