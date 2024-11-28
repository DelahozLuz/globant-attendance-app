import { Link } from "expo-router"
import { View, Text, Pressable} from "react-native"


const HomeScreen = () => {

    return (
        <View>
            <Text>
                hola 
            </Text>
           <Link
           href={"./detalles"}

           >
            <Text>
                ya
            </Text>
           </Link>
        </View>
    )
}


export default HomeScreen