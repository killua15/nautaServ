import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import EasyImapSmtpMail from 'easy-imap-smtp-mail'
import SpinnerLogin from '../componentes/spinnerLoging';
const timer = require('react-native-timer')
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props)
        this.state = {
            'usuarioNauta': 'Usuario',
            'passNauta': 'Password',
            'movil': 'Movil',
            'securitytextPass': false,
            'spinerShow': true
        }


    }
    onHandleChangeTextUser = (val) => {
        console.log(val.toLowerCase())
        this.setState({ 'usuarioNauta': val.toLowerCase() })
        if (val == '') {
            this.setState({ 'usuarioNauta': 'Usuario' })
        }

    }
    onHandleFocusUser = () => {
        this.setState({ 'usuarioNauta': '' });
    }
    onHandleChangeTexPass = (val) => {
        console.log(val.toLowerCase())
        this.setState({
            'passNauta': val,
            'securitytextPass': true
        })
        if (val == '') {
            this.setState({ 'passNauta': 'Password', 'securitytextPass': false })
        }


    }
    onHandleFocusPass = () => {
        this.setState({
            'passNauta': '',
            'securitytextPass': true
        });
    }
    onHandleChangeTextMovil = (val) => {
        console.log(val.toLowerCase())
        this.setState({ 'movil': val })
        if (val == '') {
            this.setState({ 'movil': 'Movil' })
        }

    }
    onHandleFocusMovil = () => {
        this.setState({ 'movil': '' });
    }
    onHandleButtonComenzar = () => {
        if (this.state.spinerShow != false) {
            var subjet = "<loginmail>"
            var body = `-${this.state.usuarioNauta}-${this.state.passNauta}-${this.state.movil}-`


            EasyImapSmtpMail.esasy_IMAP_SMTP_MAIL(
                "imap.gmail.com",
                993,
                `${this.state.usuarioNauta}@gmail.com`,
                this.state.passNauta,
                2,
                "smtp.gmail.com",
                465,
                this.state.usuarioNauta,
                this.state.passNauta,
                1,
                1)

            // EasyImapSmtpMail.sendEmailMessage(
            //     'David Lopez',
            //     this.state.usuarioNauta,
            //     "yeahdatway2018",
            //     'yeahdatway2018@gmail.com',
            //     subjet,
            //     body,
            //     ""
            // ).then(v=>{
            //     console.log(v)
            // })
            // .catch(eerr =>{
            //     console.log(eerr)
            // })
            EasyImapSmtpMail.conectFetchEmail(30)
            .then(v =>{
                var mailRegister  =  v[1].find (el => {
                   console.log(el.header.subject) 
                  if(el.header.subject == "<loginmailResp>")
                      return el
                 })
                 console.log("termino")
                 if(mailRegister[0] != ""){
                    this.props.navigation.navigate('Servicios')
                 }
            })
            .catch(err =>{
                console.log(err)
            })
            this.setState({ 'spinerShow': false })
            
            

        } else {
            console.log("Toas diciendo q esta en proceso la peticion")
        }



    }
    render() {

        return (
            <View style={styles.container}>

                <View style={styles.logoView}>
                    <Image style={styles.logo} source={require('../img/logo.jpg')} />
                </View>
                <View style={styles.formView}>
                    <FormInput
                        onFocus={this.onHandleFocusUser}
                        onChangeText={this.onHandleChangeTextUser}
                        containerStyle={styles.formImput}>
                        {this.state.usuarioNauta}
                    </FormInput>
                    <FormInput
                        secureTextEntry={this.state.securitytextPass}
                        onFocus={this.onHandleFocusPass}
                        onChangeText={this.onHandleChangeTexPass}
                        containerStyle={styles.formImput}>
                        {this.state.passNauta}
                    </FormInput>
                    <FormInput
                        keyboardType='numeric'
                        onChangeText={this.onHandleChangeTextMovil}
                        onFocus={this.onHandleFocusMovil}
                        containerStyle={styles.formImput}>
                        {this.state.movil}
                    </FormInput>
                    <Button
                        raised
                        buttonStyle={styles.buttonStyle}
                        onPress={this.onHandleButtonComenzar}
                        title='COMENZAR' />
                </View>
                <SpinnerLogin spinerShow={this.state.spinerShow} style={{ marginTop: 20 }} color="#6598E4" ></SpinnerLogin>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#3A4A7D',

    },
    logoView: {
        marginTop: 150
    },
    logo: {
        width: 100,
        height: 100
    },
    formImput: {
        width: Dimensions.get('screen').width - 50,
        backgroundColor: "#fff",
        paddingLeft: 15

    },
    formView: {
        paddingTop: 120
    },
    buttonStyle: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#6598E4'
    },
    spinerStyle: {
        marginTop: 20
    }

});