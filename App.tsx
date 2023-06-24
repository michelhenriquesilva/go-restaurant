import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { images } from './src/images';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" style="light"/>
      <View style={styles.box}>
        <Image style={styles.icone} source={images.icone}/>
        <Text style={styles.logo}>
          GoRestaurant
        </Text>
        <Text style={styles.slogan}>
          Comida Italiana, sim.
        </Text>
        <Text style={styles.text}>
          Uma{'\n'}
          verdadeira{'\n'}
          experiência{'\n'}
          Italiana.
        </Text>
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Ola', 'Bem vindo')}>
          <Text style={styles.buttonText}>Entrar no Restaurant</Text>
          <View style={styles.buttonBoxIcon}>
            <Image source={images.iconeLogin} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C72828',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  box: {
    width: 290,
    padding: 32,
  },
  icone: {
    marginBottom: 20
  },
  logo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  slogan: {
    color: 'white',
    fontSize: 14,
    marginBottom: 50
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  boxButton: {
    position: 'absolute',
    bottom: 18,
    width: '100%',
    height: 65,
    paddingHorizontal: 28,
  },
  button:{
    backgroundColor: '#FFB84D',
    width: '100%',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems : 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonBoxIcon: {
    width: 52,
    height: '100%',
    backgroundColor: '#FFC46B',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});
