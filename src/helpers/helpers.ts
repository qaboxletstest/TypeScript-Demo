class Helpers {
    strToBol(str: string): boolean {
        if (str === 'yes') {
            return true
        } else {
            return false
        }
    }
}

const helpers = new Helpers()
export default helpers