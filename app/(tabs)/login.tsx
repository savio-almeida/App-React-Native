import Input from '@/components/Input';
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Link, router } from 'expo-router'

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const [isValid, setIsValid] = useState(false);

    const resgister = () => {
        router.push('/(private)/home')
    }

    useEffect(() => {
        const valid = username.length > 4 && password.length > 4;
        setIsValid(valid)
    }, [username, password])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tela de Login</Text>
            <Input 
                placeholder="Digite seu usuário"
                value={username}
                setValue={setUsername}
            />
            <Input 
                placeholder="Digite a sua senha"
                value={password}
                setValue={setPassword}
            />
            <Text>
                Ainda nao tem cadastro? 
                <Link href='/register'> Clique aqui e cadastre-se</Link> 
            </Text>
            <TouchableOpacity 
                onPress={resgister} 
                disabled={!isValid}
                style={[
                    styles.button,
                    isValid? styles.buttonEnabled : styles.buttonDisabled,
                ]}
                >
                <Text style={styles.buttonLabel}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 30,
    },
    button: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#4e42f5',
        borderRadius: 10,
    },
    buttonEnabled: {
        opacity: 1,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});