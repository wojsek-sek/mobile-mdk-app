/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CustomerPageFooterRuleToCustomerOrders(clientAPI) {

    const sCurrentCustomer = clientAPI.getPageProxy().binding.CustomerId;
    console.log(clientAPI.getPageProxy());

    return clientAPI.count('/comMDKAPP/Services/SampleServiceV2.service','SalesOrderHeaders', `$filter=CustomerId eq ${sCurrentCustomer}`)
    .then((count) => {
        return count;
    }); 
}
