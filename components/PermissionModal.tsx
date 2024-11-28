import { Button, Text, View } from "react-native"

const PermissionModal = () => {
    const [permission, requestPermission] = useCameraPermissions()
    return (
        <View>
            <Text>
                Necesitamos permisos para acceder a la cámara.
            </Text>
            <Button title="Permitir" />
        </View>
    )
}

export default PermissionModal