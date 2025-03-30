/** 
* ---------------------------
* BUILD MANAGER CONFIGURATION 
* ---------------------------
*/

const REACT_APP_BASE_URL = "http://pedlinux17.uk.evolving.com:8280/"
const REACT_APP_BASIC_TOKEN  ="Basic UE9aMnJTaEpldkR3OW9NdkZVX0RIZWJ6TUZzYTpSdmZncTltRGJYUXNzdGxCQXdEUGkxbXNuMGNh"
const REACT_APP_WSO2_API_TOKEN_CONTEXT= "umservice/v1/" + "v1/"
const REACT_APP_USER_MANAGEMENT_SERVICE_URL= "umservice/v1/" + "v1/"
const REACT_APP_TN_MANAGEMENT_SERVICE_URL= "tnmanagementservice/v1/"+ "v1/"
const REACT_APP_SIM_MANAGEMENT_SERVICE_URL= "simmanagementservice/v1/"+ "v1/"
const REACT_APP_IMSI_MANAGEMENT_SERVICE_URL= "imsimanagementservice/v1/"+ "v1/"
const REACT_APP_SCHEDULAR_MANAGEMENT_SERVICE_URL= "schedulermanagementserv/v0/"+ "v1/"
const REACT_APP_DOC_MANAGEMENT_SERVICE_URL= "DocService/"+ "v1/"
const REACT_APP_SIMORDER_SERVICE_URL= "sim-order/1/"+ "v1/"
const REACT_APP_REPORTING_SERVICE_URL= "reportmanagementservice/"+ "v1/"
const REACT_APP_GRAFANA_CONTEXT_SERVICE_URL= "tnm6/graphana/"
const REACT_APP_VERSION = "v1/"
const REACT_APP_ONBOARDING = true
const showDashboard = false;
/**  Support type can be either SaaS or OnPremise 
 *   if SaaS - With landing page
 *   if OnPremise - No landing page
*/
const REACT_APP_SUPPORT_TYPE = "SaaS"

/*
const REACT_APP_BASE_URL = "http://pedlinux6.india.evolving.com:8280/"
const REACT_APP_BASIC_TOKEN  ="Basic UE9aMnJTaEpldkR3OW9NdkZVX0RIZWJ6TUZzYTpSdmZncTltRGJYUXNzdGxCQXdEUGkxbXNuMGNh"
const REACT_APP_WSO2_API_TOKEN_CONTEXT= "UMService/v1/" + "v1/"
const REACT_APP_USER_MANAGEMENT_SERVICE_URL= "UMService/v1/"+ "v1/"
const REACT_APP_TN_MANAGEMENT_SERVICE_URL= "TNService/v1/"+ "v1/"
const REACT_APP_SIM_MANAGEMENT_SERVICE_URL= "SIMService/v1/"+ "v1/"
const REACT_APP_IMSI_MANAGEMENT_SERVICE_URL= "IMSIService/v1/"+ "v1/"
const REACT_APP_SCHEDULAR_MANAGEMENT_SERVICE_URL= "SchedulerService/v1/"+ "v1/"
const REACT_APP_DOC_MANAGEMENT_SERVICE_URL= "DocService/v1/" + ""
const REACT_APP_SIMORDER_SERVICE_URL= "SimOrderService/v1/"+ "v1/"
const REACT_APP_REPORTING_SERVICE_URL= "ReportService/v1/"+ ""
const REACT_APP_GRAFANA_CONTEXT_SERVICE_URL= "tnm/graphana/"
const REACT_APP_VERSION = "v1/"
const REACT_APP_ONBOARDING = true
*/

/** Default = "YES" Double check URL before changing it to "NO" */
const REACT_APP_USE_API_GATEWAY = "YES"

const dateFormatType = [
 { value: "dd-MM-yyyy", label: "dd-MM-yyyy", format: "DD-MM-YYYY" },
 { value: "MM-dd-yyyy", label: "MM-dd-yyyy", format: "MM-DD-YYYY" },
 // { value: "yyyy-dd-MM", label: "yyyy-dd-MM", format: "YYYY-DD-MM" },
 { value: "yyyy-MM-dd", label: "yyyy-MM-dd", format: "YYYY-MM-DD" },
 { value: "dd/MM/yyyy HH:mm:ss", label: "DD/MM/YYYY HH:mm:ss", format: "DD/MM/YYYY HH:mm:ss" },
 { value: "MM/dd/yyyy HH:mm:ss", label: "MM/DD/YYYY HH:mm:ss", format: "MM/DD/YYYY HH:mm:ss" },
 { value: "yyyy/MM/dd HH:mm:ss", label: "YYYY/MM/DD HH:mm:ss", format: "YYYY/MM/DD HH:mm:ss" }
]
const booleanValue = [
 { value: "true", label: "True" },
 { value: "false", label: "False" }
]

const paginationData = {
 limit: 25,
 showPageSize: [25, 50, 75, 100]
}

const contactInfo = {
 email: "andrew@quinto.com",
 phoneNumber: "+1 303 802 1000"
}

const secretKey = "6f44473e-e011-11ec-9d64-0242ac120002";

const ApiKey = "ssdkF$HUy2A#D%kd";

const SUPER_ADMIN = {
 SUPER_USER: "idea@idea.com",
 SUPER_TENANT: "idea.com",
 SUPER_USER_PWD: "idea@123"
}

const demoURL = "https://www.youtube.com/embed/i9xLfHTXZLg";
