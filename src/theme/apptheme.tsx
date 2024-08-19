import { StyleSheet } from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../commons/Contances';

//GESTIONAR LOS ESTILOS

export const styles = StyleSheet.create({
    globalTitle: {
        fontSize: 27,
        color: SECONDARY_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 40,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 20
    },
    titleHeaderBody: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'justify'
    },
    textBody: {
        fontSize: 14,
        color: 'black',
        textAlign: 'justify'
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10
    },
    contentInput: {
        marginTop: 0,
        gap: 0,
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        gap: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 15,
        top: 15,
        zIndex: 1,
        marginTop: 10
    },
    iconTrash: {
        position: 'absolute',
        right: 15,
        color: 'red',
        opacity: 0.5
    },
    textRedirection: {
        textAlign: 'center',
        gap: 10,
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    contentCard: {
        backgroundColor: '#d9f2f9',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 10,
        marginBottom: 15,
        borderStyle: 'solid',

    },
    titleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15
    },
    imageCard: {
        width: 70,
        height: 70,
        borderRadius: 10

    },
    priceCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f59c0c',
        marginLeft: 10,
        marginBottom: 5
    },
    iconCard: {
        marginLeft: 'auto'
    },
    contentModal:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5dc',
        borderRadius: 10,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    closeModal:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8ddef4',
        borderRadius: 5,
        
    },
    contentPrincipal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgba(0, 34, 68, 0.5)',
        borderRadius:30
        //paddingHorizontal: 7
        
    },
    contentPrincipal2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 34, 68, 0.5)',
        borderRadius:30
        //paddingHorizontal: 7
        
    },
    iconModal:{
        position: 'relative',
        right: 0,
        top: -5,
        marginTop: 5,
        marginLeft: 5,
    },
    headerModal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 5,
    },
    titleModal: {
        fontSize: 20,
        fontWeight: '700', 
        color: '#1E3A8A', 
        textAlign: 'center',
        marginHorizontal: 60, 
        
    },
    imageModal:{
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10
    },
    contentQuantity:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceModal:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f75b13',
        marginLeft: 'auto',
        marginBottom: 5
    },
    descriptionModal:{
        fontSize: 16,
        color: 'black',
    },
    stockModal:{
        fontSize: 16,
        color: 'black',
    },
    buttonModal:{
        backgroundColor: '#8ddef4',
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        marginRight: 10
    },
    textQuantity:{
        marginTop: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textButtonQuantity:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantityModal:{
        fontSize: 20,
        color: 'black',
    },
    buttonQuantity:{
        backgroundColor: '#ffa500',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
    buttonAddCar:{
        marginTop: 15,
        backgroundColor: '#98ff98',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButtonAddCar:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    messageStock:{
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentHeaderHome:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
    },
    iconCardHome:{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: 180,
        marginTop: 10,
        fontWeight: 'bold',
    },
    textIconCard:{
        color: '#ffa500',
        fontSize: 18,
        borderRadius: 10,
        paddingHorizontal: 5,
        fontStyle: 'italic',
        fontWeight: 'bold',
        left:15,
        top:10
    },
    titleCartModal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginTop:20
    },
    contentCartModal: {
        //color: '#f5f5dc', 
        textAlign: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5dc', 
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#f5f5dc', 
        shadowColor: '#f5f5dc', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 8,
        marginVertical: 10,
        letterSpacing: 1.2, 
    },
    headerTable:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    titleCartTable: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#40ed40',
    },
    headerInformation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //marginBottom: 10
    },
    textInformation:{
        fontSize: 18,
        //fontWeight: 'bold',
        color: '#40ed40',
    },
    iconModalCart:{
        position: 'relative',
        right: 0,
        top: -5,
        marginTop: -98,
        marginLeft: 5,
    },
    headerModalCart:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 4,
            
    },
    titleModalCartText: {
        fontSize: 22,
        fontWeight: '700', 
        color: '#1E3A8A', 
        textAlign: 'center',
        paddingVertical: 10,
        paddingLeft:20,
        //marginHorizontal: 20,
        //backgroundColor: '#E0E7FF', 
        //borderRadius: 15,
        //textTransform: 'uppercase', 
        //letterSpacing: 2, 
        //shadowColor: '#000', 
        //shadowOffset: { width: 0, height: 3 },
        //shadowOpacity: 0.6,
        //shadowRadius: 4,
        //elevation: 6,
        //marginTop: 24, 
        marginBottom: 20, 
        fontStyle: 'italic',
        fontFamily: 'serif'
    },
    gifImage:{
        width: '100%',
        height: 200,
        marginVertical: 10,
    },
    titleContainer:{
        alignItems: 'center',
        marginTop: 50
    },
    container:{
        flex: 1,
        backgroundColor: '#white',
        padding: 20
    },
    titlecart: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal:10,
        marginTop:30
    },
    textTotalPay:{
        fontSize:16,
        fontWeight: 'bold',
        marginTop:5


    }
})