class Helpers {
    strToBol(str) {
        if (str === 'yes') {
            return true;
        }
        else {
            return false;
        }
    }
}
const helpers = new Helpers();
export default helpers;
