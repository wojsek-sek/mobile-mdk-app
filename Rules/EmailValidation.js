/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function EmailValidation(clientAPI) {
    let sEmail = clientAPI.evaluateTargetPath('#Control:FCUpdateCustomerEmail/#Value'); 
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let bValid = regex.test(sEmail); 
    if(!bValid){ 
        clientAPI.executeAction('/comMDKAPP/Actions/ValidationEmailFail.action')
    } else { 
        return true; 
    }

}
