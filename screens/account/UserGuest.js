import React from 'react'
import { StyleSheet, Text, View , ScrollView, Image} from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"

export default function UserGuest() {
    const navigation = useNavigation()

    return (
        <ScrollView
            centerContent
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/restaurant-logo-designer-needs.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text
                style={styles.title}
            >Consulta tu perfil en Restaurants</Text>
            <Text
                style={styles.description}
            >dskcdslkcdkfmdfdlc</Text>
            <Button
                buttonStyle={styles.button}
                title="Ver tu perfil"
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: "center"
    },
    description: {
        textAlign: "justify",
        marginBottom: 20,
        color: "#a65273"
    },
    button: {
        backgroundColor: "#442484"
    }
})
