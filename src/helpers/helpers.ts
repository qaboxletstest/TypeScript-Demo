import { IHelpers } from "../interfaces/helpers"
class Helpers implements IHelpers {
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