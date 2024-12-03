export const validateEmail = (string: string) => {
    const email = string.replace("Email: ", "");
    const isValidEmail = email.includes("@globant.com")

    if (!isValidEmail) {
        return {}
    }

    return {
        email,
    }
}

export const routes = {
    details: '/details' as '/details',
    index: '/index' as '/index',
    qr: '/qrscreen' as '/qrscreen',
};
