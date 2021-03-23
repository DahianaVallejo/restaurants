import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { isEmpty } from 'lodash'

import { updateProFile } from '../../navigations/utils/actions'

export default function ChangeDisplayNameForm({ displayName, setShowModal, toastRef, setReloadUser}) {
    const [newDisplaName, setNewDisplaName] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = async() => {
        if(!validateForm()){
            return
        }
        
        setLoading(true)
        const result = await updateProFile({ displayName: newDisplaName })
        setLoading(false)

        if (!result.statusResponse) {
            setError("Error al actualizar nombres y apellidos, intenta más tarde")
            return
        }

        setReloadUser(true)
        toastRef.current.show("Se han actulizado nombres y apellidos", 3000)
        setShowModal(false)
    }

    const validateForm = () => {
        setError(null) 

        if(isEmpty(newDisplaName)){
            setError("Deebes ingresar nombres y apellidos")
            return false
        }

        if(newDisplaName === displayName){
            setError("Deebes ingresar nombres y apellidos diferentes a los actuales")
            return false
        }

        return true
    }

    return (
        <View style={styles.view}>
            <Input
                placeholder="Ingresa nombres y apellidos"
                containerStyle={styles.input}
                defaultValue={displayName}
                onChange={(e) => setNewDisplaName(e.nativeEvent.text)}
                errorMessage={error}
                rightIcon={{
                    type:"material-community",
                    name: "account-circle-outline",
                    color:"#c2c2c2"
                }}
            />   
            <Button
                title="Cambiar nombres y apellidos"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}        
                loading={loading}
            />   
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingVertical: 10
    },
    input: {
        marginBottom: 10
    },
    btnContainer: {
        width: "95%"
    },
    btn: {
        backgroundColor: "#442484"
    }
})
