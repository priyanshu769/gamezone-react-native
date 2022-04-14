import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>This is Home Page.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'urbanist-regular',
    fontSize: 18,
  }
});
