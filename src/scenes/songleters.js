import React, { Component } from 'react';
import { StyleSheet, View, Text, Icon } from 'react-native';
import HeaderLyrics from '../componentes/headerLyrics'
import CardServicios from '../componentes/cardServicios'
import FooterTabsLetras from '../componentes/footerTabLetras'
import SearchBar from '../componentes/searchBar'
import EasyImapSmtpMail from 'easy-imap-smtp-mail'
import ListLyrics from '../componentes/listLyrics'
import Spinner from '../componentes/spinnerLoging'
var intervalSendCorreo
var intervalReciveMail
var sendIntentos = 0;
var reciveItentos = 0
var deleteM
export default class SongLetters extends Component {
  state = {
    'inputLyric': '',
    'cancionesLyrics': null,
    'loading': false,
    'enviadoSuccsess': false,
    'reciveSuccsess': false,
    'textoInformacion':''
  }

  static navigationOptions = {
    header: null,
  };
  onChangeInputLiricSearch = (val) => {
    console.log(val);
    this.setState({ 'inputLyric': val })
  }
  onHandleBackButton = () => {
    this.props.navigation.goBack()
  }
  onPressItemList = (e) => {
    console.log(e)
    this.props.navigation.navigate('SongView', { props: e })
  }
  sendEmailMessage = () => {
    if (this.state.enviadoSuccsess == true) {
      clearInterval(intervalSendCorreo)
      sendIntentos=0
      intervalReciveMail = setInterval(this.cahtchEmailRespondLetras, 20000)
    }
    if (sendIntentos == 5) {
      clearInterval(intervalSendCorreo)
      sendIntentos=0
      alert("Problemas de coneccion")
    }
    if(sendIntentos != 0){
     
      console.log("mandamndo")
      this.setState({'textoInformacion':'Enviando Datos'})
      var subjet = "<lyricsmail>"
      var body = `-${this.state.inputLyric}-`
      EasyImapSmtpMail.sendEmailMessage(
        'David Lopez',
        'dlopez8906@gmail.com',
        "yeahdatway2018",
        'yeahdatway2018@gmail.com',
        subjet,
        body,
        ""
      ).then(v => {
        console.log(v)
        this.setState({ 'enviadoSuccsess': true })
      })
        .catch(err => {
          console.log(err)
          alert("Problemas de coneccion")
        })
    }
    sendIntentos = sendIntentos + 1
    

  }
  cahtchEmailRespondLetras = () => {
    console.log("reciviendo")
    if (this.state.reciveSuccsess == true) {
      clearInterval(intervalReciveMail)
    }
    if (reciveItentos == 8) {
      clearInterval(intervalReciveMail)
      alert("Problemas de Coneccion")
    }
    this.setState({'textoInformacion':'Recibiendo Datos'})
    if(reciveItentos != 0){
      EasyImapSmtpMail.conectFetchEmail(30)
      .then(v => {
        console.log(v)
        var mailjsonSongs = v[1].find(el => {
          if (el.header.subject == "<lyricsmailResp>")
            return el
        })
        
        //console.log(mailjsonSongs.sequenceNumber)
        //deleteM = mailjsonSongs[0][1]
        if(mailjsonSongs !=null){
          EasyImapSmtpMail.getBodyMensagebyMessageID(mailjsonSongs.header.messageID)
          .then(v => {
            console.log(v)
            this.setState({ 'cancionesLyrics': JSON.parse(v), 'loading': false, 'reciveSuccsess': true })
            clearInterval(intervalReciveMail)
            this.setState({ 'enviadoSuccsess': false })
            EasyImapSmtpMail.deleteMessages(mailjsonSongs.uid)
            .then(v =>{
               console.log(v)
            })           
          })
          
        }
      
      })
      .catch(err => {
        console.log(err)
      })
    }
    reciveItentos =reciveItentos+1
    
  
  }
  onButtonClickRender = () => {
    //Send correo and wait responde
    this.setState({ 'loading': true })
    EasyImapSmtpMail.esasy_IMAP_SMTP_MAIL(
      "imap.gmail.com",
      993,
      `dlopez8906@gmail.com`,
      'cgvsbthbupsabrqo',
      2,
      "smtp.gmail.com",
      465,
      'dlopez8906@gmail.com',
      'cgvsbthbupsabrqo',
      1,
      1)
      if(this.state.loading != true){
        intervalSendCorreo = setInterval(this.sendEmailMessage, 10000)
        //this.cahtchEmailRespondLetras();
      }
   
  }
  render() {

    return (
      <View style={styles.container}>
        <View>
          <HeaderLyrics
            onHandleBackButtonHeader={this.onHandleBackButton} />
          <SearchBar
            onChangeInputLyrics={this.onChangeInputLiricSearch}
            onButtonClickRender={this.onButtonClickRender}>
          </SearchBar>
        </View>
        <View>
          {
            this.state.loading != true ?
              <ListLyrics onPressItemList={this.onPressItemList} dataSongsLyrics={this.state.cancionesLyrics} />
              :
              <View>
                <Spinner style={{ marginTop: 30 }}></Spinner>
                <Text style={{ marginTop: 50 }}>{this.state.textoInformacion}</Text>
              </View>


          }
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3A4A7D',
  }
});