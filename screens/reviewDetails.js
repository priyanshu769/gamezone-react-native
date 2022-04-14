import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <Text>This is ReviewDetails Page.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 24,
    },
  });
