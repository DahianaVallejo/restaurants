import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { LoadImageFromGallery } from '../../navigations/utils/helpers'
import { updateProFile, uploadImage } from '../../navigations/utils/actions'

export default function InfoUser({ user, setLoading, setLoadingText}) {
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)

    const changePhoto= async() => {
        const result = await LoadImageFromGallery([1, 1])
        if (!result.status){
            return
        }
        setLoadingText("Actualizando imagen...")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image, "avatars", user.uid)
        if (!resultUploadImage.statusResponse) {
            setLoading(false)
            Alert.alert("Ha ocurrido un error al almacenar la foto de perfil")
            return
        }

        const resultUpdateProfile = await updateProFile({ photoURL: resultUploadImage.url })
        setLoading(false)
        if (resultUpdateProfile.statusResponse) {
            setPhotoUrl(resultUploadImage.url)
        }else {
            Alert.alert("Ha ocurrido un error al actulizar la foto de perfil")
        }
    }

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                onPress={changePhoto}
                source={
                    photoUrl
                    ? { uri: photoUrl }
                    : require("../../assets/user-default.png")
                }
            /> 
            <View style={styles.InforUser}>
                <Text style={styles.displayName}>
                    {
                        user.displayName ? user.displayName : "Anónimo"
                    }
                </Text>
                <Text>{user.email}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30
    },
    InforUser: {
        marginLeft: 20
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5
    }
})
