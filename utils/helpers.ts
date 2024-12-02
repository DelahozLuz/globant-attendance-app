export const getParsedData = (string: string) => {
    const parts = string.split(",").map(part => part.trim());
    if (parts.length !== 2) {
        throw new Error("La cadena de entrada no tiene el formato esperado.");
    }

    const email = parts[0].split(":")[1]?.trim(); 
    const userName = parts[1].split(":")[1]?.trim(); 

    if (!email || !userName) {
        throw new Error("No se pudo extraer el email o el username.");
    }

    return {
        email,
        userName
    }
}

export const routes = {
    details: '/details' as '/details',
    index: '/index' as '/index',
    qr: '/qrscreen' as '/qrscreen',
};