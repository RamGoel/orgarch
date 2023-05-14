export const appName = 'orgarch'

export const checkValidObj = (obj) => {
    var invalidObj = 0;
    Object.keys(obj).map(key => {
        if (obj[key] === '') {
            invalidObj = 1;
            return 1;
        }
        return 1;
    })


    if (invalidObj === 1) {
        return false;
    } else {
        return true;
    }
}