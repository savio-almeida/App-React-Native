import { useEffect, useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";


export default function Input({ placeholder, value, setValue }) {
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        const valid = value.length > 4;
        setIsValid(valid)
    })
    return (
        <>
            <TextInput
               placeholder={placeholder}
               value={value}
               onChangeText={setValue}
               style={styles.input}
            />
            {
                !isValid && (
                    <Text style={styles.errorMessage}>Campo inválido</Text>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 8,
        paddingRight: 8,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        maxWidth: 300,
    },
    errorMessage: {
        color:'red'
    }
});