/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function DeleteCustomerRule(clientAPI) {
    return clientAPI.executeAction('/comMDKAPP/Actions/DeleteCustomerCofirmation.action')
    .then((res) => {
        console.log(res)
        if(res.data) { 
            return clientAPI.executeAction('/comMDKAPP/Actions/DeleteCustomerAction.action')
            .then(
                (success) => { 
                    Promise.resolve(success)
                }, 
                (failure) => { 
                    Promise.reject('Delete Customer failed:' + failure)
                }
            );
        } else { 
            return Promise.reject('User Deffered')
        }
     })
}
