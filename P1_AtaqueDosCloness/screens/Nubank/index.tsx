import React from "react";
import { Text, View, TouchableOpacity, Button, Image, TextInput, ScrollView } from 'react-native';
import { styles } from "./styles";
import nubank_logo from "../../src/assets/images/nubank_logo.png"
import setting from "../../src/assets/images/setting.png"
import mastercard from "../../src/assets/images/mastercard.png"
import Wallet from "../../src/assets/images/Wallet.png"
import pix from "../../src/assets/images/pix.png"
import boleto from "../../src/assets/images/boleto.png"
import dinheiro from "../../src/assets/images/dinheiro.png"
import { StatusBar } from "expo-status-bar";



export const Nubank = () => {
   return (
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.header}>
                <Image source={nubank_logo}/>
                <Image source={setting}/>
              </View>

              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View />
                  <Image source={mastercard}/>
                </View>
                <Text style={styles.cardText}>Pedro Castro</Text>
              </View>
              <View style={styles.cardDetails}>
              <View style={styles.cardDetailsHeader}>
                  <Text style={styles.cardDetailsHeaderText}>Saldo Disponível</Text>
                  <Image source={Wallet}/>
                </View>
                <Text style={styles.cardDetailsText}>R$187,63</Text>
              </View>
          </View>
            
            <View style={styles.footer}>
              <Text style={styles.footerText}>Do que você precisa?</Text>

              <ScrollView 
                style={styles.footerContentScrollView}
                showsHorizontalScrollIndicator={false} 
                horizontal={true}>
                <View style={styles.footerCard}>
                  <Image source={pix}/>
                  <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
                <View style={styles.footerCard}>
                  <Image source={boleto}/>
                  <Text style={styles.footerCardText}>Pagar um boleto</Text>
                </View>
                <View style={styles.footerCard}>
                  <Image source={dinheiro}/>
                  <Text style={styles.footerCardText}>Fazer um depósito</Text>
                </View>
                <View style={styles.footerCard}>
                  <Image source={pix}/>
                  <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
                <View style={styles.footerCard}>
                  <Image source={pix}/>
                  <Text style={styles.footerCardText}>Fazer um Pix</Text>
                </View>
              </ScrollView>


              
            </View>
            <StatusBar style="light"/>
        </View>
    )
}