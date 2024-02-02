/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function NavToYouTubeRule(clientAPI) {
    const utilsModule = clientAPI.nativescript.utilsModule;
    return clientAPI.executeAction('/comMDKAPP/Actions/ConfirmLeaveApp.action').then( 
        (res) => { 
            console.log(res)
            if(res.data){ 
                return utilsModule.openUrl("https://www.youtube.com");
            } else { 
                return PromiseRejectionEvent.reject('Error');
            }
        }
    )
}
