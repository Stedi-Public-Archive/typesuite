import * as PlatformFaultsTypes from "./platform_faults_types";
import { SoapMappingBase } from "../../soap-types";
export declare type SoapFaultProps = {
    code: PlatformFaultsTypes.FaultCodeType;
    message: string;
};
export declare class SoapFault extends SoapMappingBase {
    code: PlatformFaultsTypes.FaultCodeType;
    message: string;
    constructor(props: SoapFaultProps);
}
export declare class ExceededRecordCountFault extends SoapFault {
}
export declare class InvalidVersionFault extends SoapFault {
}
export declare class ExceededConcurrentRequestLimitFault extends SoapFault {
}
export declare class InvalidSessionFault extends SoapFault {
}
export declare class InvalidAccountFault extends SoapFault {
}
export declare class AsyncFault extends SoapFault {
}
export declare class InvalidCredentialsFault extends SoapFault {
}
export declare class InsufficientPermissionFault extends SoapFault {
}
export declare class ExceededRequestSizeFault extends SoapFault {
}
export declare class ExceededUsageLimitFault extends SoapFault {
}
export declare class ExceededRequestLimitFault extends SoapFault {
}
export declare class UnexpectedErrorFault extends SoapFault {
}
