(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let commdkapp_actions_application_appupdate_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/AppUpdate.action */ "./build.definitions/comMDKAPP/Actions/Application/AppUpdate.action")
let commdkapp_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/comMDKAPP/Actions/Application/AppUpdateFailureMessage.action")
let commdkapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/comMDKAPP/Actions/Application/AppUpdateProgressBanner.action")
let commdkapp_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/comMDKAPP/Actions/Application/AppUpdateSuccessMessage.action")
let commdkapp_actions_application_logout_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/Logout.action */ "./build.definitions/comMDKAPP/Actions/Application/Logout.action")
let commdkapp_actions_application_navtoabout_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/NavToAbout.action */ "./build.definitions/comMDKAPP/Actions/Application/NavToAbout.action")
let commdkapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/NavToActivityLog.action */ "./build.definitions/comMDKAPP/Actions/Application/NavToActivityLog.action")
let commdkapp_actions_application_navtosupport_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/NavToSupport.action */ "./build.definitions/comMDKAPP/Actions/Application/NavToSupport.action")
let commdkapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/OnWillUpdate.action */ "./build.definitions/comMDKAPP/Actions/Application/OnWillUpdate.action")
let commdkapp_actions_application_reset_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/Reset.action */ "./build.definitions/comMDKAPP/Actions/Application/Reset.action")
let commdkapp_actions_application_resetmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/ResetMessage.action */ "./build.definitions/comMDKAPP/Actions/Application/ResetMessage.action")
let commdkapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./comMDKAPP/Actions/Application/UserMenuPopover.action */ "./build.definitions/comMDKAPP/Actions/Application/UserMenuPopover.action")
let commdkapp_actions_cancelcustomeredit_action = __webpack_require__(/*! ./comMDKAPP/Actions/CancelCustomerEdit.action */ "./build.definitions/comMDKAPP/Actions/CancelCustomerEdit.action")
let commdkapp_actions_closemodalpage_complete_action = __webpack_require__(/*! ./comMDKAPP/Actions/CloseModalPage_Complete.action */ "./build.definitions/comMDKAPP/Actions/CloseModalPage_Complete.action")
let commdkapp_actions_closemodalpagecomlete_action = __webpack_require__(/*! ./comMDKAPP/Actions/CloseModalPageComlete.action */ "./build.definitions/comMDKAPP/Actions/CloseModalPageComlete.action")
let commdkapp_actions_closepage_action = __webpack_require__(/*! ./comMDKAPP/Actions/ClosePage.action */ "./build.definitions/comMDKAPP/Actions/ClosePage.action")
let commdkapp_actions_confirmleaveapp_action = __webpack_require__(/*! ./comMDKAPP/Actions/ConfirmLeaveApp.action */ "./build.definitions/comMDKAPP/Actions/ConfirmLeaveApp.action")
let commdkapp_actions_createnewcustomer_action = __webpack_require__(/*! ./comMDKAPP/Actions/CreateNewCustomer.action */ "./build.definitions/comMDKAPP/Actions/CreateNewCustomer.action")
let commdkapp_actions_createnewsalesorderheaders_action = __webpack_require__(/*! ./comMDKAPP/Actions/CreateNewSalesOrderHeaders.action */ "./build.definitions/comMDKAPP/Actions/CreateNewSalesOrderHeaders.action")
let commdkapp_actions_customercreatefailmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/CustomerCreateFailMessage.action */ "./build.definitions/comMDKAPP/Actions/CustomerCreateFailMessage.action")
let commdkapp_actions_deletecustomeraction_action = __webpack_require__(/*! ./comMDKAPP/Actions/DeleteCustomerAction.action */ "./build.definitions/comMDKAPP/Actions/DeleteCustomerAction.action")
let commdkapp_actions_deletecustomercofirmation_action = __webpack_require__(/*! ./comMDKAPP/Actions/DeleteCustomerCofirmation.action */ "./build.definitions/comMDKAPP/Actions/DeleteCustomerCofirmation.action")
let commdkapp_actions_deletecustomerfailmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/DeleteCustomerFailMessage.action */ "./build.definitions/comMDKAPP/Actions/DeleteCustomerFailMessage.action")
let commdkapp_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./comMDKAPP/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/comMDKAPP/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let commdkapp_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let commdkapp_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_List.action")
let commdkapp_actions_genericbannermessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/GenericBannerMessage.action */ "./build.definitions/comMDKAPP/Actions/GenericBannerMessage.action")
let commdkapp_actions_genericmessagebox_action = __webpack_require__(/*! ./comMDKAPP/Actions/GenericMessageBox.action */ "./build.definitions/comMDKAPP/Actions/GenericMessageBox.action")
let commdkapp_actions_genericnavigation_action = __webpack_require__(/*! ./comMDKAPP/Actions/GenericNavigation.action */ "./build.definitions/comMDKAPP/Actions/GenericNavigation.action")
let commdkapp_actions_generictoastmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/GenericToastMessage.action */ "./build.definitions/comMDKAPP/Actions/GenericToastMessage.action")
let commdkapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./comMDKAPP/Actions/Logging/LogUploadFailure.action */ "./build.definitions/comMDKAPP/Actions/Logging/LogUploadFailure.action")
let commdkapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./comMDKAPP/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/comMDKAPP/Actions/Logging/LogUploadSuccessful.action")
let commdkapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./comMDKAPP/Actions/Logging/UploadLog.action */ "./build.definitions/comMDKAPP/Actions/Logging/UploadLog.action")
let commdkapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./comMDKAPP/Actions/Logging/UploadLogProgress.action */ "./build.definitions/comMDKAPP/Actions/Logging/UploadLogProgress.action")
let commdkapp_actions_navcustomerstocustomer_action = __webpack_require__(/*! ./comMDKAPP/Actions/NavCustomerstoCustomer.action */ "./build.definitions/comMDKAPP/Actions/NavCustomerstoCustomer.action")
let commdkapp_actions_navcustomertocustomeredit_action = __webpack_require__(/*! ./comMDKAPP/Actions/NavCustomerToCustomerEdit.action */ "./build.definitions/comMDKAPP/Actions/NavCustomerToCustomerEdit.action")
let commdkapp_actions_navmaintocustomers_action = __webpack_require__(/*! ./comMDKAPP/Actions/NavMainToCustomers.action */ "./build.definitions/comMDKAPP/Actions/NavMainToCustomers.action")
let commdkapp_actions_pushregisteraction_action = __webpack_require__(/*! ./comMDKAPP/Actions/pushRegisterAction.action */ "./build.definitions/comMDKAPP/Actions/pushRegisterAction.action")
let commdkapp_actions_pushregisterfailuremessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/PushRegisterFailureMessage.action */ "./build.definitions/comMDKAPP/Actions/PushRegisterFailureMessage.action")
let commdkapp_actions_pushregistersuccessmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/pushRegisterSuccessMessage.action */ "./build.definitions/comMDKAPP/Actions/pushRegisterSuccessMessage.action")
let commdkapp_actions_savecustomeredit_action = __webpack_require__(/*! ./comMDKAPP/Actions/SaveCustomerEdit.action */ "./build.definitions/comMDKAPP/Actions/SaveCustomerEdit.action")
let commdkapp_actions_savecustomereditfailmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/SaveCustomerEditFailMessage.action */ "./build.definitions/comMDKAPP/Actions/SaveCustomerEditFailMessage.action")
let commdkapp_actions_service_closeoffline_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/CloseOffline.action */ "./build.definitions/comMDKAPP/Actions/Service/CloseOffline.action")
let commdkapp_actions_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/CloseOfflineFailureMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/CloseOfflineFailureMessage.action")
let commdkapp_actions_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/CloseOfflineSuccessMessage.action")
let commdkapp_actions_service_downloadoffline_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/DownloadOffline.action */ "./build.definitions/comMDKAPP/Actions/Service/DownloadOffline.action")
let commdkapp_actions_service_downloadstartedmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/DownloadStartedMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/DownloadStartedMessage.action")
let commdkapp_actions_service_initializeoffline_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/InitializeOffline.action */ "./build.definitions/comMDKAPP/Actions/Service/InitializeOffline.action")
let commdkapp_actions_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/InitializeOfflineFailureMessage.action")
let commdkapp_actions_service_initializeofflinesuccessmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/InitializeOfflineSuccessMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/InitializeOfflineSuccessMessage.action")
let commdkapp_actions_service_syncfailuremessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/SyncFailureMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/SyncFailureMessage.action")
let commdkapp_actions_service_syncstartedmessage_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/SyncStartedMessage.action */ "./build.definitions/comMDKAPP/Actions/Service/SyncStartedMessage.action")
let commdkapp_actions_service_uploadoffline_action = __webpack_require__(/*! ./comMDKAPP/Actions/Service/UploadOffline.action */ "./build.definitions/comMDKAPP/Actions/Service/UploadOffline.action")
let commdkapp_actions_validationemailfail_action = __webpack_require__(/*! ./comMDKAPP/Actions/ValidationEmailFail.action */ "./build.definitions/comMDKAPP/Actions/ValidationEmailFail.action")
let commdkapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./comMDKAPP/Globals/Application/AppDefinition_Version.global */ "./build.definitions/comMDKAPP/Globals/Application/AppDefinition_Version.global")
let commdkapp_globals_application_applicationname_global = __webpack_require__(/*! ./comMDKAPP/Globals/Application/ApplicationName.global */ "./build.definitions/comMDKAPP/Globals/Application/ApplicationName.global")
let commdkapp_globals_application_supportemail_global = __webpack_require__(/*! ./comMDKAPP/Globals/Application/SupportEmail.global */ "./build.definitions/comMDKAPP/Globals/Application/SupportEmail.global")
let commdkapp_globals_application_supportphone_global = __webpack_require__(/*! ./comMDKAPP/Globals/Application/SupportPhone.global */ "./build.definitions/comMDKAPP/Globals/Application/SupportPhone.global")
let commdkapp_i18n_i18n_pl_properties = __webpack_require__(/*! ./comMDKAPP/i18n/i18n_pl.properties */ "./build.definitions/comMDKAPP/i18n/i18n_pl.properties")
let commdkapp_i18n_i18n_properties = __webpack_require__(/*! ./comMDKAPP/i18n/i18n.properties */ "./build.definitions/comMDKAPP/i18n/i18n.properties")
let commdkapp_jsconfig_json = __webpack_require__(/*! ./comMDKAPP/jsconfig.json */ "./build.definitions/comMDKAPP/jsconfig.json")
let commdkapp_pages_application_about_page = __webpack_require__(/*! ./comMDKAPP/Pages/Application/About.page */ "./build.definitions/comMDKAPP/Pages/Application/About.page")
let commdkapp_pages_application_support_page = __webpack_require__(/*! ./comMDKAPP/Pages/Application/Support.page */ "./build.definitions/comMDKAPP/Pages/Application/Support.page")
let commdkapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./comMDKAPP/Pages/Application/UserActivityLog.page */ "./build.definitions/comMDKAPP/Pages/Application/UserActivityLog.page")
let commdkapp_pages_createcustomer_page = __webpack_require__(/*! ./comMDKAPP/Pages/CreateCustomer.page */ "./build.definitions/comMDKAPP/Pages/CreateCustomer.page")
let commdkapp_pages_createsalesordershearedspage_page = __webpack_require__(/*! ./comMDKAPP/Pages/CreateSalesOrdersHearedsPage.page */ "./build.definitions/comMDKAPP/Pages/CreateSalesOrdersHearedsPage.page")
let commdkapp_pages_customereditpage_page = __webpack_require__(/*! ./comMDKAPP/Pages/CustomerEditPage.page */ "./build.definitions/comMDKAPP/Pages/CustomerEditPage.page")
let commdkapp_pages_customerpage_page = __webpack_require__(/*! ./comMDKAPP/Pages/CustomerPage.page */ "./build.definitions/comMDKAPP/Pages/CustomerPage.page")
let commdkapp_pages_customersalesorderdetailpage_page = __webpack_require__(/*! ./comMDKAPP/Pages/CustomerSalesOrderDetailPage.page */ "./build.definitions/comMDKAPP/Pages/CustomerSalesOrderDetailPage.page")
let commdkapp_pages_customersorderspage_page = __webpack_require__(/*! ./comMDKAPP/Pages/CustomersOrdersPage.page */ "./build.definitions/comMDKAPP/Pages/CustomersOrdersPage.page")
let commdkapp_pages_customerspage_page = __webpack_require__(/*! ./comMDKAPP/Pages/CustomersPage.page */ "./build.definitions/comMDKAPP/Pages/CustomersPage.page")
let commdkapp_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./comMDKAPP/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/comMDKAPP/Pages/ErrorArchive/ErrorArchive_Detail.page")
let commdkapp_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./comMDKAPP/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/comMDKAPP/Pages/ErrorArchive/ErrorArchive_List.page")
let commdkapp_pages_main_page = __webpack_require__(/*! ./comMDKAPP/Pages/Main.page */ "./build.definitions/comMDKAPP/Pages/Main.page")
let commdkapp_rules_application_appupdatefailure_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/AppUpdateFailure.js */ "./build.definitions/comMDKAPP/Rules/Application/AppUpdateFailure.js")
let commdkapp_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/comMDKAPP/Rules/Application/AppUpdateSuccess.js")
let commdkapp_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/comMDKAPP/Rules/Application/ClientIsMultiUserMode.js")
let commdkapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/comMDKAPP/Rules/Application/GetClientSupportVersions.js")
let commdkapp_rules_application_getclientversion_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/GetClientVersion.js */ "./build.definitions/comMDKAPP/Rules/Application/GetClientVersion.js")
let commdkapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/OnWillUpdate.js */ "./build.definitions/comMDKAPP/Rules/Application/OnWillUpdate.js")
let commdkapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./comMDKAPP/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/comMDKAPP/Rules/Application/ResetAppSettingsAndLogout.js")
let commdkapp_rules_customerpagefooterruletocustomerorders_js = __webpack_require__(/*! ./comMDKAPP/Rules/CustomerPageFooterRuleToCustomerOrders.js */ "./build.definitions/comMDKAPP/Rules/CustomerPageFooterRuleToCustomerOrders.js")
let commdkapp_rules_deletecustomerrule_js = __webpack_require__(/*! ./comMDKAPP/Rules/DeleteCustomerRule.js */ "./build.definitions/comMDKAPP/Rules/DeleteCustomerRule.js")
let commdkapp_rules_emailvalidation_js = __webpack_require__(/*! ./comMDKAPP/Rules/EmailValidation.js */ "./build.definitions/comMDKAPP/Rules/EmailValidation.js")
let commdkapp_rules_errorarchive_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./comMDKAPP/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js */ "./build.definitions/comMDKAPP/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js")
let commdkapp_rules_logging_loglevels_js = __webpack_require__(/*! ./comMDKAPP/Rules/Logging/LogLevels.js */ "./build.definitions/comMDKAPP/Rules/Logging/LogLevels.js")
let commdkapp_rules_logging_settracecategories_js = __webpack_require__(/*! ./comMDKAPP/Rules/Logging/SetTraceCategories.js */ "./build.definitions/comMDKAPP/Rules/Logging/SetTraceCategories.js")
let commdkapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./comMDKAPP/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/comMDKAPP/Rules/Logging/SetUserLogLevel.js")
let commdkapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./comMDKAPP/Rules/Logging/ToggleLogging.js */ "./build.definitions/comMDKAPP/Rules/Logging/ToggleLogging.js")
let commdkapp_rules_logging_tracecategories_js = __webpack_require__(/*! ./comMDKAPP/Rules/Logging/TraceCategories.js */ "./build.definitions/comMDKAPP/Rules/Logging/TraceCategories.js")
let commdkapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./comMDKAPP/Rules/Logging/UserLogSetting.js */ "./build.definitions/comMDKAPP/Rules/Logging/UserLogSetting.js")
let commdkapp_rules_navtoyoutuberule_js = __webpack_require__(/*! ./comMDKAPP/Rules/NavToYouTubeRule.js */ "./build.definitions/comMDKAPP/Rules/NavToYouTubeRule.js")
let commdkapp_services_sampleservicev2_service = __webpack_require__(/*! ./comMDKAPP/Services/SampleServiceV2.service */ "./build.definitions/comMDKAPP/Services/SampleServiceV2.service")
let commdkapp_styles_styles_css = __webpack_require__(/*! ./comMDKAPP/Styles/Styles.css */ "./build.definitions/comMDKAPP/Styles/Styles.css")
let commdkapp_styles_styles_json = __webpack_require__(/*! ./comMDKAPP/Styles/Styles.json */ "./build.definitions/comMDKAPP/Styles/Styles.json")
let commdkapp_styles_styles_less = __webpack_require__(/*! ./comMDKAPP/Styles/Styles.less */ "./build.definitions/comMDKAPP/Styles/Styles.less")
let commdkapp_styles_styles_nss = __webpack_require__(/*! ./comMDKAPP/Styles/Styles.nss */ "./build.definitions/comMDKAPP/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	commdkapp_actions_application_appupdate_action : commdkapp_actions_application_appupdate_action,
	commdkapp_actions_application_appupdatefailuremessage_action : commdkapp_actions_application_appupdatefailuremessage_action,
	commdkapp_actions_application_appupdateprogressbanner_action : commdkapp_actions_application_appupdateprogressbanner_action,
	commdkapp_actions_application_appupdatesuccessmessage_action : commdkapp_actions_application_appupdatesuccessmessage_action,
	commdkapp_actions_application_logout_action : commdkapp_actions_application_logout_action,
	commdkapp_actions_application_navtoabout_action : commdkapp_actions_application_navtoabout_action,
	commdkapp_actions_application_navtoactivitylog_action : commdkapp_actions_application_navtoactivitylog_action,
	commdkapp_actions_application_navtosupport_action : commdkapp_actions_application_navtosupport_action,
	commdkapp_actions_application_onwillupdate_action : commdkapp_actions_application_onwillupdate_action,
	commdkapp_actions_application_reset_action : commdkapp_actions_application_reset_action,
	commdkapp_actions_application_resetmessage_action : commdkapp_actions_application_resetmessage_action,
	commdkapp_actions_application_usermenupopover_action : commdkapp_actions_application_usermenupopover_action,
	commdkapp_actions_cancelcustomeredit_action : commdkapp_actions_cancelcustomeredit_action,
	commdkapp_actions_closemodalpage_complete_action : commdkapp_actions_closemodalpage_complete_action,
	commdkapp_actions_closemodalpagecomlete_action : commdkapp_actions_closemodalpagecomlete_action,
	commdkapp_actions_closepage_action : commdkapp_actions_closepage_action,
	commdkapp_actions_confirmleaveapp_action : commdkapp_actions_confirmleaveapp_action,
	commdkapp_actions_createnewcustomer_action : commdkapp_actions_createnewcustomer_action,
	commdkapp_actions_createnewsalesorderheaders_action : commdkapp_actions_createnewsalesorderheaders_action,
	commdkapp_actions_customercreatefailmessage_action : commdkapp_actions_customercreatefailmessage_action,
	commdkapp_actions_deletecustomeraction_action : commdkapp_actions_deletecustomeraction_action,
	commdkapp_actions_deletecustomercofirmation_action : commdkapp_actions_deletecustomercofirmation_action,
	commdkapp_actions_deletecustomerfailmessage_action : commdkapp_actions_deletecustomerfailmessage_action,
	commdkapp_actions_errorarchive_errorarchive_syncfailure_action : commdkapp_actions_errorarchive_errorarchive_syncfailure_action,
	commdkapp_actions_errorarchive_navtoerrorarchive_detail_action : commdkapp_actions_errorarchive_navtoerrorarchive_detail_action,
	commdkapp_actions_errorarchive_navtoerrorarchive_list_action : commdkapp_actions_errorarchive_navtoerrorarchive_list_action,
	commdkapp_actions_genericbannermessage_action : commdkapp_actions_genericbannermessage_action,
	commdkapp_actions_genericmessagebox_action : commdkapp_actions_genericmessagebox_action,
	commdkapp_actions_genericnavigation_action : commdkapp_actions_genericnavigation_action,
	commdkapp_actions_generictoastmessage_action : commdkapp_actions_generictoastmessage_action,
	commdkapp_actions_logging_loguploadfailure_action : commdkapp_actions_logging_loguploadfailure_action,
	commdkapp_actions_logging_loguploadsuccessful_action : commdkapp_actions_logging_loguploadsuccessful_action,
	commdkapp_actions_logging_uploadlog_action : commdkapp_actions_logging_uploadlog_action,
	commdkapp_actions_logging_uploadlogprogress_action : commdkapp_actions_logging_uploadlogprogress_action,
	commdkapp_actions_navcustomerstocustomer_action : commdkapp_actions_navcustomerstocustomer_action,
	commdkapp_actions_navcustomertocustomeredit_action : commdkapp_actions_navcustomertocustomeredit_action,
	commdkapp_actions_navmaintocustomers_action : commdkapp_actions_navmaintocustomers_action,
	commdkapp_actions_pushregisteraction_action : commdkapp_actions_pushregisteraction_action,
	commdkapp_actions_pushregisterfailuremessage_action : commdkapp_actions_pushregisterfailuremessage_action,
	commdkapp_actions_pushregistersuccessmessage_action : commdkapp_actions_pushregistersuccessmessage_action,
	commdkapp_actions_savecustomeredit_action : commdkapp_actions_savecustomeredit_action,
	commdkapp_actions_savecustomereditfailmessage_action : commdkapp_actions_savecustomereditfailmessage_action,
	commdkapp_actions_service_closeoffline_action : commdkapp_actions_service_closeoffline_action,
	commdkapp_actions_service_closeofflinefailuremessage_action : commdkapp_actions_service_closeofflinefailuremessage_action,
	commdkapp_actions_service_closeofflinesuccessmessage_action : commdkapp_actions_service_closeofflinesuccessmessage_action,
	commdkapp_actions_service_downloadoffline_action : commdkapp_actions_service_downloadoffline_action,
	commdkapp_actions_service_downloadstartedmessage_action : commdkapp_actions_service_downloadstartedmessage_action,
	commdkapp_actions_service_initializeoffline_action : commdkapp_actions_service_initializeoffline_action,
	commdkapp_actions_service_initializeofflinefailuremessage_action : commdkapp_actions_service_initializeofflinefailuremessage_action,
	commdkapp_actions_service_initializeofflinesuccessmessage_action : commdkapp_actions_service_initializeofflinesuccessmessage_action,
	commdkapp_actions_service_syncfailuremessage_action : commdkapp_actions_service_syncfailuremessage_action,
	commdkapp_actions_service_syncstartedmessage_action : commdkapp_actions_service_syncstartedmessage_action,
	commdkapp_actions_service_uploadoffline_action : commdkapp_actions_service_uploadoffline_action,
	commdkapp_actions_validationemailfail_action : commdkapp_actions_validationemailfail_action,
	commdkapp_globals_application_appdefinition_version_global : commdkapp_globals_application_appdefinition_version_global,
	commdkapp_globals_application_applicationname_global : commdkapp_globals_application_applicationname_global,
	commdkapp_globals_application_supportemail_global : commdkapp_globals_application_supportemail_global,
	commdkapp_globals_application_supportphone_global : commdkapp_globals_application_supportphone_global,
	commdkapp_i18n_i18n_pl_properties : commdkapp_i18n_i18n_pl_properties,
	commdkapp_i18n_i18n_properties : commdkapp_i18n_i18n_properties,
	commdkapp_jsconfig_json : commdkapp_jsconfig_json,
	commdkapp_pages_application_about_page : commdkapp_pages_application_about_page,
	commdkapp_pages_application_support_page : commdkapp_pages_application_support_page,
	commdkapp_pages_application_useractivitylog_page : commdkapp_pages_application_useractivitylog_page,
	commdkapp_pages_createcustomer_page : commdkapp_pages_createcustomer_page,
	commdkapp_pages_createsalesordershearedspage_page : commdkapp_pages_createsalesordershearedspage_page,
	commdkapp_pages_customereditpage_page : commdkapp_pages_customereditpage_page,
	commdkapp_pages_customerpage_page : commdkapp_pages_customerpage_page,
	commdkapp_pages_customersalesorderdetailpage_page : commdkapp_pages_customersalesorderdetailpage_page,
	commdkapp_pages_customersorderspage_page : commdkapp_pages_customersorderspage_page,
	commdkapp_pages_customerspage_page : commdkapp_pages_customerspage_page,
	commdkapp_pages_errorarchive_errorarchive_detail_page : commdkapp_pages_errorarchive_errorarchive_detail_page,
	commdkapp_pages_errorarchive_errorarchive_list_page : commdkapp_pages_errorarchive_errorarchive_list_page,
	commdkapp_pages_main_page : commdkapp_pages_main_page,
	commdkapp_rules_application_appupdatefailure_js : commdkapp_rules_application_appupdatefailure_js,
	commdkapp_rules_application_appupdatesuccess_js : commdkapp_rules_application_appupdatesuccess_js,
	commdkapp_rules_application_clientismultiusermode_js : commdkapp_rules_application_clientismultiusermode_js,
	commdkapp_rules_application_getclientsupportversions_js : commdkapp_rules_application_getclientsupportversions_js,
	commdkapp_rules_application_getclientversion_js : commdkapp_rules_application_getclientversion_js,
	commdkapp_rules_application_onwillupdate_js : commdkapp_rules_application_onwillupdate_js,
	commdkapp_rules_application_resetappsettingsandlogout_js : commdkapp_rules_application_resetappsettingsandlogout_js,
	commdkapp_rules_customerpagefooterruletocustomerorders_js : commdkapp_rules_customerpagefooterruletocustomerorders_js,
	commdkapp_rules_deletecustomerrule_js : commdkapp_rules_deletecustomerrule_js,
	commdkapp_rules_emailvalidation_js : commdkapp_rules_emailvalidation_js,
	commdkapp_rules_errorarchive_errorarchive_checkforsyncerror_js : commdkapp_rules_errorarchive_errorarchive_checkforsyncerror_js,
	commdkapp_rules_logging_loglevels_js : commdkapp_rules_logging_loglevels_js,
	commdkapp_rules_logging_settracecategories_js : commdkapp_rules_logging_settracecategories_js,
	commdkapp_rules_logging_setuserloglevel_js : commdkapp_rules_logging_setuserloglevel_js,
	commdkapp_rules_logging_togglelogging_js : commdkapp_rules_logging_togglelogging_js,
	commdkapp_rules_logging_tracecategories_js : commdkapp_rules_logging_tracecategories_js,
	commdkapp_rules_logging_userlogsetting_js : commdkapp_rules_logging_userlogsetting_js,
	commdkapp_rules_navtoyoutuberule_js : commdkapp_rules_navtoyoutuberule_js,
	commdkapp_services_sampleservicev2_service : commdkapp_services_sampleservicev2_service,
	commdkapp_styles_styles_css : commdkapp_styles_styles_css,
	commdkapp_styles_styles_json : commdkapp_styles_styles_json,
	commdkapp_styles_styles_less : commdkapp_styles_styles_less,
	commdkapp_styles_styles_nss : commdkapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/i18n/i18n.properties":
/*!**********************************************************!*\
  !*** ./build.definitions/comMDKAPP/i18n/i18n.properties ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "custButton = Customers \n"

/***/ }),

/***/ "./build.definitions/comMDKAPP/i18n/i18n_pl.properties":
/*!*************************************************************!*\
  !*** ./build.definitions/comMDKAPP/i18n/i18n_pl.properties ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "custButton=Pracownicy"

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/AppUpdateFailure.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/AppUpdateFailure.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/comMDKAPP/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/AppUpdateSuccess.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/AppUpdateSuccess.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/comMDKAPP/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/comMDKAPP/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/ClientIsMultiUserMode.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/ClientIsMultiUserMode.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/GetClientSupportVersions.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/GetClientSupportVersions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/GetClientVersion.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/GetClientVersion.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/OnWillUpdate.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/OnWillUpdate.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/comMDKAPP/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/comMDKAPP/Actions/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Application/ResetAppSettingsAndLogout.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/comMDKAPP/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/CustomerPageFooterRuleToCustomerOrders.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/CustomerPageFooterRuleToCustomerOrders.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerPageFooterRuleToCustomerOrders)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function CustomerPageFooterRuleToCustomerOrders(clientAPI) {
  const sCurrentCustomer = clientAPI.getPageProxy().binding.CustomerId;
  console.log(clientAPI.getPageProxy());
  return clientAPI.count('/comMDKAPP/Services/SampleServiceV2.service', 'SalesOrderHeaders', `$filter=CustomerId eq ${sCurrentCustomer}`).then(count => {
    return count;
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/DeleteCustomerRule.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/DeleteCustomerRule.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteCustomerRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteCustomerRule(clientAPI) {
  return clientAPI.executeAction('/comMDKAPP/Actions/DeleteCustomerCofirmation.action').then(res => {
    console.log(res);
    if (res.data) {
      return clientAPI.executeAction('/comMDKAPP/Actions/DeleteCustomerAction.action').then(success => {
        Promise.resolve(success);
      }, failure => {
        Promise.reject('Delete Customer failed:' + failure);
      });
    } else {
      return Promise.reject('User Deffered');
    }
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/EmailValidation.js":
/*!**************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/EmailValidation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmailValidation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function EmailValidation(clientAPI) {
  let sEmail = clientAPI.evaluateTargetPath('#Control:FCUpdateCustomerEmail/#Value');
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let bValid = regex.test(sEmail);
  if (!bValid) {
    clientAPI.executeAction('/comMDKAPP/Actions/ValidationEmailFail.action');
  } else {
    return true;
  }
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js":
/*!******************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/comMDKAPP/Services/SampleServiceV2.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/comMDKAPP/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Logging/LogLevels.js":
/*!****************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Logging/LogLevels.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Logging/SetTraceCategories.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Logging/SetTraceCategories.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Logging/SetUserLogLevel.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Logging/SetUserLogLevel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Logging/ToggleLogging.js":
/*!********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Logging/ToggleLogging.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Logging/TraceCategories.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Logging/TraceCategories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/Logging/UserLogSetting.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/Logging/UserLogSetting.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Rules/NavToYouTubeRule.js":
/*!***************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Rules/NavToYouTubeRule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToYouTubeRule)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function NavToYouTubeRule(clientAPI) {
  const utilsModule = clientAPI.nativescript.utilsModule;
  return clientAPI.executeAction('/comMDKAPP/Actions/ConfirmLeaveApp.action').then(res => {
    console.log(res);
    if (res.data) {
      return utilsModule.openUrl("https://www.youtube.com");
    } else {
      return PromiseRejectionEvent.reject('Error');
    }
  });
}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Styles/Styles.css":
/*!*******************************************************!*\
  !*** ./build.definitions/comMDKAPP/Styles/Styles.css ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ui5-mdk-bar.actionbar {
  color: #85b9d9;
  background-color: #85b9d9;
}
ui5-mdk-overflow-toolbar.toolbar {
  color: #85b9d9;
  background-color: #85b9d9;
  /* Android */
  bartintcolor: #85b9d9;
  /* iOS */
}
.button-Customers {
  background-color: #85b9d9;
  color: #eef2f4;
  font-style: italic;
  width: 30%;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/comMDKAPP/Styles/Styles.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;EACrB,QAAQ;AACV;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,UAAU;AACZ","sourcesContent":["ui5-mdk-bar.actionbar {\n  color: #85b9d9;\n  background-color: #85b9d9;\n}\nui5-mdk-overflow-toolbar.toolbar {\n  color: #85b9d9;\n  background-color: #85b9d9;\n  /* Android */\n  bartintcolor: #85b9d9;\n  /* iOS */\n}\n.button-Customers {\n  background-color: #85b9d9;\n  color: #eef2f4;\n  font-style: italic;\n  width: 30%;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/comMDKAPP/Styles/Styles.less":
/*!********************************************************!*\
  !*** ./build.definitions/comMDKAPP/Styles/Styles.less ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ActionBar {
    color: rgb(133, 185, 217);
    background-color: rgb(133, 185, 217);
}

ToolBar {
    color: rgb(133, 185, 217);
    background-color: rgb(133, 185, 217); /* Android */
    bartintcolor: rgb(133, 185, 217);     /* iOS */
}

.button-Customers { 
    background-color: rgb(133, 185, 217);
    color: rgb(238, 242, 244);
    font-style: italic;
    width: 30%;
}`, "",{"version":3,"sources":["webpack://./build.definitions/comMDKAPP/Styles/Styles.less"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,oCAAoC,EAAE,YAAY;IAClD,gCAAgC,MAAM,QAAQ;AAClD;;AAEA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;AACd","sourcesContent":["ActionBar {\n    color: rgb(133, 185, 217);\n    background-color: rgb(133, 185, 217);\n}\n\nToolBar {\n    color: rgb(133, 185, 217);\n    background-color: rgb(133, 185, 217); /* Android */\n    bartintcolor: rgb(133, 185, 217);     /* iOS */\n}\n\n.button-Customers { \n    background-color: rgb(133, 185, 217);\n    color: rgb(238, 242, 244);\n    font-style: italic;\n    width: 30%;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/comMDKAPP/Styles/Styles.nss":
/*!*******************************************************!*\
  !*** ./build.definitions/comMDKAPP/Styles/Styles.nss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js */ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ActionBar {
	font-color: #85b9d9;
	background-color: #85b9d9;
}
button-Customers {
	background-color: #85b9d9;
	font-color: #eef2f4;
	font-style: italic;
	width: 30%;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/comMDKAPP/Styles/Styles.nss"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,kBAAkB;CAClB,UAAU;AACX","sourcesContent":["ActionBar {\n\tfont-color: #85b9d9;\n\tbackground-color: #85b9d9;\n}\nbutton-Customers {\n\tbackground-color: #85b9d9;\n\tfont-color: #eef2f4;\n\tfont-style: italic;\n\twidth: 30%;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../managed-content/vscode/unzipped/25__ext-mdkvsc-npm-rel___mde-vscweb@4.1.11/extension/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/comMDKAPP/Pages/Main.page","OnLaunch":["/comMDKAPP/Actions/Service/InitializeOffline.action"],"OnWillUpdate":"/comMDKAPP/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/comMDKAPP/Actions/pushRegisterAction.action","Styles":"/comMDKAPP/Styles/Styles.less","Version":"/comMDKAPP/Globals/Application/AppDefinition_Version.global","Localization":"/comMDKAPP/i18n/i18n.properties","_SchemaVersion":"23.12","_Name":"comMDKAPP","StyleSheets":{"Styles":{"css":"/comMDKAPP/Styles/Styles.css","ios":"/comMDKAPP/Styles/Styles.nss","android":"/comMDKAPP/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/AppUpdate.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/AppUpdate.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/comMDKAPP/Rules/Application/AppUpdateFailure.js","OnSuccess":"/comMDKAPP/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/AppUpdateFailureMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/AppUpdateFailureMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/AppUpdateProgressBanner.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/AppUpdateProgressBanner.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/comMDKAPP/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/AppUpdateSuccessMessage.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/AppUpdateSuccessMessage.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/Logout.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/Logout.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/NavToAbout.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/NavToAbout.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/comMDKAPP/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/NavToActivityLog.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/NavToActivityLog.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/comMDKAPP/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/NavToSupport.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/NavToSupport.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/comMDKAPP/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/OnWillUpdate.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/OnWillUpdate.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/Reset.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/Reset.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/ResetMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/ResetMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/comMDKAPP/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Application/UserMenuPopover.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Application/UserMenuPopover.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/comMDKAPP/Actions/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/comMDKAPP/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/comMDKAPP/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/comMDKAPP/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/comMDKAPP/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/comMDKAPP/Actions/Application/Logout.action","Title":"Logout","Visible":"/comMDKAPP/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/CancelCustomerEdit.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/CancelCustomerEdit.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CancelCustomerEdit"},"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/CloseModalPageComlete.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/CloseModalPageComlete.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage","ActionResult":{"_Name":"CloseModalPageComlete"},"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/CloseModalPage_Complete.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/CloseModalPage_Complete.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/ClosePage.action":
/*!**************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/ClosePage.action ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/ConfirmLeaveApp.action":
/*!********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/ConfirmLeaveApp.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ConfirmLeaveApp"},"Message":"Do you want to leave the current app and open YouTube?","Title":"Open YouTuber","OKCaption":"OK","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/CreateNewCustomer.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/CreateNewCustomer.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"CreateNewCustomer"},"OnFailure":"/comMDKAPP/Actions/CustomerCreateFailMessage.action","OnSuccess":"/comMDKAPP/Actions/CloseModalPageComlete.action","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"Customers"},"Properties":{"City":"#Control:FCCreateCustomerCity/#Value","Country":"#Control:FCCreateCustomerCountry/#Value","DateOfBirth":"#Control:FCCreateCustomerDateOfBirth/#Value","EmailAddress":"#Control:FCCreateCustomerEmail/#Value","FirstName":"#Control:FCCreateCustomerFirstName/#Value","HouseNumber":"#Control:FCCreateCustomerHouseNumber/#Value","LastName":"#Control:FCCreateCustomerLastName/#Value","PhoneNumber":"#Control:FCCreateCustomerPhone/#Value","PostalCode":"#Control:FCCreateCustomerPostalCode/#Value","Street":"#Control:FCCreateCustomerStreet/#Value"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/CreateNewSalesOrderHeaders.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/CreateNewSalesOrderHeaders.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateRelatedEntity","ActionResult":{"_Name":"CreateNewSalesOrderHeaders"},"OnFailure":{"Name":"/comMDKAPP/Actions/GenericMessageBox.action","Properties":{"Message":"Failed to Create Sales Order record - {#ActionResults:CreateNewSalesOrderHeaders/error}","Title":"Create Sales Order","OKCaption":"OK"}},"OnSuccess":"/comMDKAPP/Actions/CloseModalPageComlete.action","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders"},"ParentLink":{"Target":{"EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Property":"SalesOrders"},"Properties":{"CreatedAt":"#Control:FCSalesCreateCreateAt/#Value","CurrencyCode":"#Control:FCSalesCreateCurrencyCode/#Value","GrossAmount":"#Control:FCSalesCreateGrossAmount/#Value","LifeCycleStatus":"#Control:FCSalesCreateLifeCycleStatus/#Value","LifeCycleStatusName":"#Control:FCSalesCreateLifeCycleStatusName/#Value","NetAmount":"#Control:FCSalesCreateNetAmount/#Value","TaxAmount":"#Control:FCSalesCreateTaxAmount/#Value"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/CustomerCreateFailMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/CustomerCreateFailMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"CustomerCreateFailMessage"},"Message":"Create New Customer failed: {#ActionResults:CreateNewCustomer/error}!","Title":"Create Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/DeleteCustomerAction.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/DeleteCustomerAction.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DeleteEntity","ActionResult":{"_Name":"DeleteCustomerAction"},"OnFailure":"/comMDKAPP/Actions/DeleteCustomerFailMessage.action","OnSuccess":"/comMDKAPP/Actions/CloseModalPageComlete.action","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/DeleteCustomerCofirmation.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/DeleteCustomerCofirmation.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteCustomerCofirmation"},"Message":"Are you sure you want to delete this Customer?","Title":"Delete Customer","OKCaption":"OK","CancelCaption":"Cancel"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/DeleteCustomerFailMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/DeleteCustomerFailMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"DeleteCustomerFailMessage"},"Message":"Customer delete failed: {#ActionResults:DeleteCustomerAction/error}.","Title":"Delete Failed","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/comMDKAPP/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/comMDKAPP/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/GenericBannerMessage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/GenericBannerMessage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/GenericMessageBox.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/GenericMessageBox.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/GenericNavigation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/GenericNavigation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/comMDKAPP/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/GenericToastMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/GenericToastMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Logging/LogUploadFailure.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Logging/LogUploadFailure.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Logging/LogUploadSuccessful.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Logging/LogUploadSuccessful.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Logging/UploadLog.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Logging/UploadLog.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/comMDKAPP/Actions/Logging/LogUploadFailure.action","OnSuccess":"/comMDKAPP/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Logging/UploadLogProgress.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Logging/UploadLogProgress.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/comMDKAPP/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/NavCustomerToCustomerEdit.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/NavCustomerToCustomerEdit.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavCustomerToCustomerEdit"},"PageToOpen":"/comMDKAPP/Pages/CustomerEditPage.page","ModalPage":true}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/NavCustomerstoCustomer.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/NavCustomerstoCustomer.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavCustomerstoCustomer"},"PageToOpen":"/comMDKAPP/Pages/CustomerPage.page"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/NavMainToCustomers.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/NavMainToCustomers.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavMainToCustomers"},"PageToOpen":"/comMDKAPP/Pages/CustomersPage.page"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/PushRegisterFailureMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/PushRegisterFailureMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"PushRegisterFailureMessage"},"Message":"Push Notification didn't register","Title":"Failure","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/SaveCustomerEdit.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/SaveCustomerEdit.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"SaveCustomerEdit"},"OnFailure":"/comMDKAPP/Actions/SaveCustomerEditFailMessage.action","OnSuccess":"/comMDKAPP/Actions/CloseModalPageComlete.action","ValidationRule":"/comMDKAPP/Rules/EmailValidation.js","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"Customers","ReadLink":"{@odata.readLink}"},"Properties":{"City":"#Control:FCUpdateCustomerCity/#Value","Country":"#Control:FCUpdateCustomerCountry/#Value","DateOfBirth":"#Control:FCUpdateCustomerDateOfBirth/#Value","EmailAddress":"#Control:FCUpdateCustomerEmail/#Value","FirstName":"#Control:FCUpdateCustomerFirstName/#Value","HouseNumber":"#Control:FCUpdateCustomerHouseNumber/#Value","LastName":"#Control:FCUpdateCustomerLastName/#Value","PhoneNumber":"#Control:FCUpdateCustomerPhone/#Value","PostalCode":"#Control:FCUpdateCustomerPostalCode/#Value"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/SaveCustomerEditFailMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/SaveCustomerEditFailMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"SaveCustomerEditFailMessage"},"Message":"There was an error during the update operation: {#ActionResults:SaveCustomerEdit/error} !","Title":"Update Customer","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/CloseOffline.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/CloseOffline.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/comMDKAPP/Services/SampleServiceV2.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/comMDKAPP/Actions/Service/CloseOfflineSuccessMessage.action","OnFailure":"/comMDKAPP/Actions/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/CloseOfflineFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/CloseOfflineFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/CloseOfflineSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/CloseOfflineSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/DownloadOffline.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/DownloadOffline.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/comMDKAPP/Services/SampleServiceV2.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"Products","Query":"Products"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/comMDKAPP/Actions/Service/SyncFailureMessage.action","OnSuccess":"/comMDKAPP/Rules/ErrorArchive/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/DownloadStartedMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/DownloadStartedMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/comMDKAPP/Actions/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/InitializeOffline.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/InitializeOffline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/comMDKAPP/Services/SampleServiceV2.service","DefiningRequests":[{"Name":"Customers","Query":"Customers"},{"Name":"SalesOrderItems","Query":"SalesOrderItems"},{"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"Name":"Products","Query":"Products"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnSuccess":"/comMDKAPP/Actions/Service/InitializeOfflineSuccessMessage.action","OnFailure":"/comMDKAPP/Actions/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/InitializeOfflineFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/InitializeOfflineFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/InitializeOfflineSuccessMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/InitializeOfflineSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/SyncFailureMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/SyncFailureMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/SyncStartedMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/SyncStartedMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/comMDKAPP/Actions/Service/UploadOffline.action","OnFailure":"/comMDKAPP/Actions/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/Service/UploadOffline.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/Service/UploadOffline.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/comMDKAPP/Services/SampleServiceV2.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/comMDKAPP/Actions/Service/DownloadStartedMessage.action","OnFailure":"/comMDKAPP/Actions/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/ValidationEmailFail.action":
/*!************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/ValidationEmailFail.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationEmailFail"},"Message":"Email is not valid. Please correct it!","Title":"Validation Email","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/pushRegisterAction.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/pushRegisterAction.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.PushNotificationRegister","ActionResult":{"_Name":"pushRegisterAction"},"OnFailure":"/comMDKAPP/Actions/PushRegisterFailureMessage.action","OnSuccess":"/comMDKAPP/Actions/pushRegisterSuccessMessage.action"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Actions/pushRegisterSuccessMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Actions/pushRegisterSuccessMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"pushRegisterSuccessMessage"},"Message":"Hello, have a nice day :D","Title":"Welcome","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Globals/Application/AppDefinition_Version.global":
/*!**************************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Globals/Application/AppDefinition_Version.global ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Globals/Application/ApplicationName.global":
/*!********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Globals/Application/ApplicationName.global ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Globals/Application/SupportEmail.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Globals/Application/SupportEmail.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Globals/Application/SupportPhone.global":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Globals/Application/SupportPhone.global ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Services/SampleServiceV2.service":
/*!**********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Services/SampleServiceV2.service ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"SampleServiceV2","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/Application/About.page":
/*!******************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/Application/About.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/comMDKAPP/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/comMDKAPP/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/comMDKAPP/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/comMDKAPP/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/Application/Support.page":
/*!********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/Application/Support.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/comMDKAPP/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/comMDKAPP/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/comMDKAPP/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/comMDKAPP/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/Application/UserActivityLog.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/Application/UserActivityLog.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/comMDKAPP/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/comMDKAPP/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/comMDKAPP/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/comMDKAPP/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/comMDKAPP/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/comMDKAPP/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/comMDKAPP/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/comMDKAPP/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CreateCustomer.page":
/*!***************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CreateCustomer.page ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerFirstName","IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"PlaceHolder","Enabled":true,"IsEditable":true},{"Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerLastName","IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerPhone","IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter Value","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerEmail","IsVisible":true,"Separator":true,"Caption":"Email Address","PlaceHolder":"Enter Value","KeyboardType":"Email","Enabled":true,"IsEditable":true},{"Value":"{City}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerCity","IsVisible":true,"Separator":true,"Caption":"City","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{Country}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerCountry","IsVisible":true,"Separator":true,"Caption":"Country","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{Street}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerStreet","IsVisible":true,"Separator":true,"Caption":"Street","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{HouseNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerHouseNumber","IsVisible":true,"Separator":true,"Caption":"House Number","PlaceHolder":"Enter Value","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{PostalCode}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCCreateCustomerPostalCode","IsVisible":true,"Separator":true,"Caption":"Postal Code","PlaceHolder":"Enter Value","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{DateOfBirth}","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCCreateCustomerDateOfBirth","IsVisible":true,"Separator":true,"Caption":"Date of birth","IsEditable":true,"Mode":"Date"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"CreateCustomer","Caption":"Create Customer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CancelCustomerEdit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CreateNewCustomer.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CreateSalesOrdersHearedsPage.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CreateSalesOrdersHearedsPage.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Controls":[{"Value":"EUR","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSalesCreateCurrencyCode","IsVisible":true,"Separator":true,"Caption":"Currency Code","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"77.00","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSalesCreateNetAmount","IsVisible":true,"Separator":true,"Caption":"Net Amount","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"100.00","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSalesCreateTaxAmount","IsVisible":true,"Separator":true,"Caption":"Tax Amount ","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"177.00","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSalesCreateGrossAmount","IsVisible":true,"Separator":true,"Caption":"Gross Amount","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"N","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSalesCreateLifeCycleStatus","IsVisible":true,"Separator":true,"Caption":"Lifecycle Status","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"New","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCSalesCreateLifeCycleStatusName","IsVisible":true,"Separator":true,"Caption":"Lifecycle Status Name","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"Enter Date","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCSalesCreateCreateAt","IsVisible":true,"Separator":true,"Caption":"Creation Date","IsEditable":true,"Mode":"Datetime"}]}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"CreateSalesOrdersHearedsPage","Caption":"CreateSalesOrdersHearedsPage","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CancelCustomerEdit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CreateNewSalesOrderHeaders.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CustomerEditPage.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CustomerEditPage.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"Value":"{FirstName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerFirstName","IsVisible":true,"Separator":true,"Caption":"First Name","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{LastName}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerLastName","IsVisible":true,"Separator":true,"Caption":"Last Name","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{PhoneNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerPhone","IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter Value","KeyboardType":"Phone","Enabled":true,"IsEditable":true},{"Value":"{EmailAddress}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerEmail","IsVisible":true,"Separator":true,"Caption":"Email Address","PlaceHolder":"Enter Value","KeyboardType":"Email","Enabled":true,"IsEditable":true},{"Value":"{City}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerCity","IsVisible":true,"Separator":true,"Caption":"City","PlaceHolder":"Enter Value","KeyboardType":"Default","Enabled":true,"IsEditable":true},{"Value":"{Country}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerCountry","IsVisible":true,"Separator":true,"Caption":"Country","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{Street}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerStreet","IsVisible":true,"Separator":true,"Caption":"Street","PlaceHolder":"Enter Value","Enabled":true,"IsEditable":true},{"Value":"{HouseNumber}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerHouseNumber","IsVisible":true,"Separator":true,"Caption":"House Number","PlaceHolder":"Enter Value","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{PostalCode}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FCUpdateCustomerPostalCode","IsVisible":true,"Separator":true,"Caption":"Postal Code","PlaceHolder":"Enter Value","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{DateOfBirth}","_Type":"Control.Type.FormCell.DatePicker","_Name":"FCUpdateCustomerDateOfBirth","IsVisible":true,"Separator":true,"Caption":"Date of Birth","IsEditable":true,"Mode":"Date"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"CustomerEditPage","Caption":"Customer Edit","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/CancelCustomerEdit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Save","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/SaveCustomerEdit.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CustomerPage.page":
/*!*************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CustomerPage.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"{FirstName}","Footnote":"{DateOfBirth}","Description":"{EmailAddress}","StatusText":"{PhoneNumber}","DetailImage":"sap-icon://customer","DetailImageIsCircular":false,"HeadlineText":"{LastName}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{Street} {HouseNumber}","_Name":"KeyValue2","KeyName":"Address","Visible":true},{"Value":"{City}","_Name":"KeyValue0","KeyName":"CIty","Visible":true},{"Value":"{PostalCode}","_Name":"KeyValue3","KeyName":"Post Code","Visible":true},{"Value":"{Country}","_Name":"KeyValue1","KeyName":"Country","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Customers Orders"},"Footer":{"_Name":"SectionFooter0","Caption":"See All","AttributeLabel":"/comMDKAPP/Rules/CustomerPageFooterRuleToCustomerOrders.js","AccessoryType":"DisclosureIndicator","FooterStyle":"Attribute","Visible":true,"OnPress":{"Name":"/comMDKAPP/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/comMDKAPP/Pages/CustomersOrdersPage.page"}},"UseBottomPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"{@odata.readLink}/SalesOrders","QueryOptions":"$top=5&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Customer Orders Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{SalesOrderId}","Subhead":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","SubstatusText":"{CurrencyCode}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":{"Name":"/comMDKAPP/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/comMDKAPP/Pages/CustomerSalesOrderDetailPage.page"}},"Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"DesignTimeTarget":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"Customers"},"_Type":"Page","DataSubscriptions":["SalesOrderHeaders"],"_Name":"CustomerPage","Caption":"Customer","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/NavCustomerToCustomerEdit.action"},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Rules/DeleteCustomerRule.js"}],"_Name":"ActionBar1"},"ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Create Order","Enabled":true,"Visible":true,"Clickable":true,"Style":"button-Customers","OnPress":{"Name":"/comMDKAPP/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/comMDKAPP/Pages/CreateSalesOrdersHearedsPage.page","ModalPage":true}}}]}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CustomerSalesOrderDetailPage.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CustomerSalesOrderDetailPage.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"KeyAndValues":[{"Value":"{SalesOrderId}","_Name":"KeyValue0","KeyName":"Order Number","Visible":true},{"Value":"{LifeCycleStatusName}","_Name":"KeyValue1","KeyName":"Status","Visible":true},{"Value":"$(D,{CreatedAt},'','',{format:'medium'})","_Name":"KeyValue2","KeyName":"Created At","Visible":true},{"Value":"$(C,{NetAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue3","KeyName":"Net Amount","Visible":true},{"Value":"$(C,{TaxAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue4","KeyName":"Tax Amount ","Visible":true},{"Value":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue5","KeyName":"Total Amount","Visible":true}],"MaxItemCount":1,"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"CustomerSalesOrderDetailPage","Caption":"Order Details","PrefersLargeCaption":true,"DesignTimeTarget":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CustomersOrdersPage.page":
/*!********************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CustomersOrdersPage.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerId eq '{CustomerId}'&$orderby=CreatedAt desc"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No Orders Found","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{SalesOrderId}","Subhead":"{CustomerId}","Description":"$(D,{CreatedAt},'','',{format:'medium'})","DisplayDescriptionInMobile":true,"StatusText":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"Avatars":[],"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"Avatars":[],"ImageIsCircular":true},"OnPress":{"Name":"/comMDKAPP/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/comMDKAPP/Pages/CustomerSalesOrderDetailPage.page"}},"Selected":false},"Search":{"Enabled":true,"BarcodeScanner":true},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"CustomersOrdersPage","Caption":"Customers Orders","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/CustomersPage.page":
/*!**************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/CustomersPage.page ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ContactCell","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"Customers"},"_Name":"SectionContactCell0","Visible":true,"EmptySection":{"FooterVisible":false},"ContactCell":{"Visible":true,"ContextMenu":{"PerformFirstActionWithFullSwipe":true},"DetailImage":"sap-icon://contacts","Headline":"{LastName}","Subheadline":"{FirstName}","Description":"{City} ({Country})","OnPress":"/comMDKAPP/Actions/NavCustomerstoCustomer.action","ActivityItems":[{"_Name":"SectionContactCell0ActivityItems0","ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"_Name":"SectionContactCell0ActivityItems1","ActivityType":"Email","ActivityValue":"{EmailAddress}"}]},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"Search":{"Enabled":true,"BarcodeScanner":true}}]}],"_Type":"Page","_Name":"CustomersPage","Caption":"Customers","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Item","SystemItem":"Add","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":{"Name":"/comMDKAPP/Actions/GenericNavigation.action","Properties":{"PageToOpen":"/comMDKAPP/Pages/CreateCustomer.page","ModalPage":true}}},{"_Name":"ActionBarItem1","Caption":"Item","SystemItem":"Trash","Position":"Right","IsIconCircular":false,"Visible":true}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!*********************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"NumberOfColumns":1}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"ErrorArchive_Detail","Caption":"Details","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/ErrorArchive/ErrorArchive_List.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/comMDKAPP/Services/SampleServiceV2.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/comMDKAPP/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","Caption":"Error List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/comMDKAPP/Pages/Main.page":
/*!*****************************************************!*\
  !*** ./build.definitions/comMDKAPP/Pages/Main.page ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"button-Customers"},"_Name":"SectionButton0","Title":"$(L,'custButton')","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://customer","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/comMDKAPP/Actions/NavMainToCustomers.action"},{"Styles":{"Button":"button-Customers"},"_Name":"SectionButton1","Title":"YouTube","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://video","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/comMDKAPP/Rules/NavToYouTubeRule.js"}]}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/comMDKAPP/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/comMDKAPP/Styles/Styles.json":
/*!********************************************************!*\
  !*** ./build.definitions/comMDKAPP/Styles/Styles.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"ActionBar":{"font-color":"#85b9d9","background-color":"#85b9d9"},"button-Customers":{"background-color":"#85b9d9","font-color":"#eef2f4","font-style":"italic","width":"30%"}}');

/***/ }),

/***/ "./build.definitions/comMDKAPP/jsconfig.json":
/*!***************************************************!*\
  !*** ./build.definitions/comMDKAPP/jsconfig.json ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map