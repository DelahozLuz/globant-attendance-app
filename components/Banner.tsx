import { View, Text,StyleSheet } from "react-native";

export const Banner = ({message, isError} : {message:string, isError:boolean } ) => {
  return (
    <View style={ isError ? styles.BannerError : styles.BannerSuccess  } >
        <Text style={styles.BannerTextColor}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    BannerTextColor: {
        color: "white",
        textAlign: "center",
    },
    BannerError: {
        backgroundColor: "red",
        width: "50%",
        padding: 7,
        borderRadius: 10,
        marginTop: 20,
    },
    BannerSuccess: {
        backgroundColor: "#BFD732",
        padding: 7,
        width: "50%",
        borderRadius: 10,
        marginTop: 20,
    }
})







