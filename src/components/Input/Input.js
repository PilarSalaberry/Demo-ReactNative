import { View, Text, TextInput, StyleSheet } from 'react-native'


export const Input =({label, onChange, placeholder, defaultValue}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput onChangeText={onChange} defaultValue={defaultValue} style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8
    },
    label: {
        fontSize: 14,
        color: '#FFC759'
    },
    input: {
        backgroundColor: '#E8E9ED',
        padding: 6,
        borderRadius: 10,
        fontSize: 16,
    }
})