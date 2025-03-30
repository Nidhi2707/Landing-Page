/** 
* ---------------------------
* BUILD MANAGER CONFIGURATION 
* ---------------------------
*/

/** set useSanboxEnvironment = true, when you want to bypass wso2 gateway */
const useSanboxEnvironment = true;
const useHttps = false;

/** serviceUrlSandbox contains Service URL for Development Environment, which will bypass wso2 gateway 
 * Example:
 * TN_MANAGEMENT_URL: "http://localhost:8080/TNManagementService-0.0.1/
 * USER_MANAGEMENT_URL: "http://localhost:8081/UserManagementService-0.0.1/"
 * SIM_MANAGEMENT_URL: "http://localhost:8082/SIMManagementService-0.0.1/",
 * IMSI_MANAGEMENT_URL: "http://localhost:8083/IMSIManagementService-0.0.1/"
*/

const baseServiceUrls = {
  BASE_URL: "http://pedlinux17.uk.evolving.com:8282/",
  WSO2_URL: "http://pedlinux17.uk.evolving.com:8282/",
  BASIC_TOKEN: "Basic UE9aMnJTaEpldkR3OW9NdkZVX0RIZWJ6TUZzYTpSdmZncTltRGJYUXNzdGxCQXdEUGkxbXNuMGNh",
}

const baseServiceUrlsHttp = {
  BASE_URL: "http://winnie.uk.evolving.com:8285/",
  WSO2_URL: "http://winnie.uk.evolving.com:8285/",
  BASIC_TOKEN: "Basic dTBrekw2blpIbmd3djhnemF1ekp3cXlYeVkwYTpWZ1BrcFhGeENXYjdkSXJySWNTM1lWTlBiYVlh",
}

const baseServiceUrlsHttps = {
  BASE_URL: "https://tnm.evolving-systems.cloud/",
  WSO2_URL: "https://tnm.evolving-systems.cloud/",
  BASIC_TOKEN: "Basic dTBrekw2blpIbmd3djhnemF1ekp3cXlYeVkwYTpWZ1BrcFhGeENXYjdkSXJySWNTM1lWTlBiYVlh",
}

const serviceUrlSandbox = {
  WSO2_API_TOKEN_CONTEXT: "UM_DEV/1/",
  // WSO2_API_TOKEN_CONTEXT: "UMNS/1/",
  TN_MANAGEMENT_URL: "tnmanagement/1.0/",
  USER_MANAGEMENT_URL: "UM_DEV/1/",
  // USER_MANAGEMENT_URL: "UM1/2/",
  SIM_MANAGEMENT_URL: "SIM1/2/",
  IMSI_MANAGEMENT_URL: "IMSI1/2/",
  SCHEDULAR_MANAGEMENT_SERVICE: "schedulermanagementsvc/v0/",
  DOC_MANAGEMENT_SERVICE: "DocService/v0/",
  GRAFANA_CONTEXT_URL: "tnm6/graphana/"
}

const serviceUrlProductionHttp = {
  WSO2_API_TOKEN_CONTEXT: "UMNS/1/",
  TN_MANAGEMENT_URL: "TN/1/",
  USER_MANAGEMENT_URL: "UM/1/",
  SIM_MANAGEMENT_URL: "SIM/1/",
  IMSI_MANAGEMENT_URL: "IMSI/1/",
  SCHEDULAR_MANAGEMENT_SERVICE: "schsrv/v0/",
  GRAFANA_CONTEXT_URL: "tnm6/graphana/"
}

const serviceUrlProductionHttps = {
  WSO2_API_TOKEN_CONTEXT: "UMNS/1/",
  TN_MANAGEMENT_URL: "TN/1/",
  USER_MANAGEMENT_URL: "UM/1/",
  SIM_MANAGEMENT_URL: "SIM/1/",
  IMSI_MANAGEMENT_URL: "IMSI/1/",
  SCHEDULAR_MANAGEMENT_SERVICE: "schsrv/v0/",
  GRAFANA_CONTEXT_URL: "tnm6/graphana/"
}

const baseServiceUrl = useSanboxEnvironment ? baseServiceUrls : useHttps ? baseServiceUrlsHttps : baseServiceUrlsHttp;
const serviceUrl = useSanboxEnvironment ? serviceUrlSandbox : useHttps ? serviceUrlProductionHttps : serviceUrlProductionHttp;

/** serviceUrlProduction cotains Service URL for Production Environment, which uses wso2 gateway 
 * Example:
 * BASE_URL: "https://localhost:3000/"
 * BASIC_TOKEN: "basic ZjVjQmlPbnptYzFjVEg5Y1I5NGxmSjJmclZnYTo0eExCY1JmMHNfMUtMbXpjanA2NXViRHRJMmth"
 * TN_MANAGEMENT_ServiceName: "tnmanagement/1.0/"
 * USER_MANAGEMENT_ServiceName: "um/1/"
 * SIM_MANAGEMENT_Endpoint: "SimManagement/1/"
 * IMSI_MANAGEMENT_ServiceName: ""
*/

const version = "v1/";

/** GUI war file name should match with the DELIVERY_BUILD_PATH name **/
const DELIVERY_BUILD_PATH = "/tnm6";

/** openAPI contains the url of swaggger-ui */
const openAPI = {
  TN_MANAGEMENT: "http://pedlinux17.uk.evolving.com:8080/TNManagementService-0.0.1/swagger-ui/index.html?configUrl=/TNManagementService-0.0.1/v3/api-docs/swagger-config#/",
  USER_MANAGEMENT: "http://pedlinux17.uk.evolving.com:8080/UserManagementService-0.0.1/swagger-ui/index.html?configUrl=/UserManagementService-0.0.1/v3/api-docs/swagger-config",
  SIM_MANAGEMENT: "http://pedlinux17.uk.evolving.com:8080/SIMManagementService-0.0.1/swagger-ui/index.html?configUrl=/SIMManagementService-0.0.1/v3/api-docs/swagger-config",
  IMSI_MANAGEMENT: "http://pedlinux17.uk.evolving.com:8080/IMSIManagementService-0.0.1/swagger-ui/index.html?configUrl=/IMSIManagementService-0.0.1/v3/api-docs/swagger-config",

};

const dateFormatType = [
  { value: "dd-MM-yyyy", label: "dd-MM-yyyy", format: "DD-MM-YYYY" },
  { value: "MM-dd-yyyy", label: "MM-dd-yyyy", format: "MM-DD-YYYY" },
  { value: "yyyy-dd-MM", label: "yyyy-dd-MM", format: "YYYY-DD-MM" },
  { value: "yyyy-MM-dd", label: "yyyy-MM-dd", format: "YYYY-MM-DD" },
  { value: "dd/MM/yyyy HH:mm", label: "dd/MM/yyyy HH:mm", format: "DD/MM/YYYY HH:mm" },
  { value: "MM/dd/yyyy HH:mm", label: "MM/dd/yyyy HH:mm", format: "MM/DD/YYYY HH:mm" },
  { value: "yyyy/MM/dd HH:mm", label: "yyyy/MM/dd HH:mm", format: "YYYY/MM/DD HH:mm" },
  { value: "dd/MM/yyyy HH:mm:ss", label: "dd/MM/yyyy HH:mm:ss", format: "DD/MM/YYYY HH:mm:ss" },
  { value: "MM/dd/yyyy HH:mm:ss", label: "MM/dd/yyyy HH:mm:ss", format: "MM/DD/YYYY HH:mm:ss" },
  { value: "yyyy/MM/dd HH:mm:ss", label: "yyyy/MM/dd HH:mm:ss", format: "YYYY/MM/DD HH:mm:ss" }
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

const hubSpot = {
  portalId: "3350023",
  apiCall: "https://api.hsforms.com/submissions/v3/integration/submit/",
  commonFormID: "e717b373-0a3d-4df4-862a-3686baabb3fe",
  demoFormId: "e717b373-0a3d-4df4-862a-3686baabb3fe", 
  subscribeFormId: "e717b373-0a3d-4df4-862a-3686baabb3fe", 
  TrialFormId: "e717b373-0a3d-4df4-862a-3686baabb3fe",
  contactUsFormId: "e717b373-0a3d-4df4-862a-3686baabb3fe"
}

const SUPER_ADMIN = {
  SUPER_USER: "tnmadm@carbon.super",
  SUPER_TENANT: "carbon.super",
  SUPER_USER_PWD: "tnmadm"
}

const demoURL = "https://www.youtube.com/embed/i9xLfHTXZLg";