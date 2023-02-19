const checkIfImageExists = (url) => {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        return true
    } else {
        img.onload = () => {
            return true;
        };

        img.onerror = () => {
            return false;
        };
    }
}

export { checkIfImageExists }