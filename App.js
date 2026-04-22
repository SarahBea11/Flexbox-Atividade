import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.screen}>

        <View style={styles.topBar}>
          <Text style={styles.menu}>☰</Text>
          <View style={styles.circle} />
        </View>

        <View style={styles.content}>


          <View style={styles.avatarContainer}>
            <Image
              source={require('./assets/mulher-perfil.jpg')}
              style={styles.avatar}
            />
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.name}>Nicole Lima</Text>
            <Text style={styles.description}>Analista de Segurança da Informação</Text>
          </View>

          <View style={styles.stats}>

            <View style={styles.statItem}>
              <View style={styles.statBox}>
                <Text>Seguindo</Text>
              </View>
              <Text style={styles.number}>273</Text>
            </View>

            <View style={styles.statItem}>
              <View style={styles.statBox}>
                <Text>Seguidores</Text>
              </View>
              <Text style={styles.number}>435</Text>
            </View>

          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Seguir</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  screen: {
    width: '95%',
    height: '95%',
    backgroundColor: '#ddd',
    borderRadius: 25,
    overflow: 'hidden',
  },

  topBar: {
    height: 60,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  menu: {
    color: '#fff',
    fontSize: 22,
  },

  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },

  avatarContainer: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },

  infoBox: {
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 13,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },

  statItem: {
    alignItems: 'center',
  },

  statBox: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 5,
  },

  number: {
    fontSize: 14,
  },

  button: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 60,
    backgroundColor: '#007BFF',

  },

  buttonText: {
    fontSize: 16,
  },

});