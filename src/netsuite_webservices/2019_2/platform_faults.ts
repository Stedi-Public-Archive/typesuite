import * as PlatformFaultsTypes from "./platform_faults_types";

export type SoapFaultProps = {
  code: PlatformFaultsTypes.FaultCodeType;
  message: string;
};

export class SoapFault {
  code: PlatformFaultsTypes.FaultCodeType;
  message: string;
  constructor(props: SoapFaultProps) {
    this.code = props.code;
    this.message = props.message;
  }
}

export class ExceededRecordCountFault extends SoapFault {}

export class InvalidVersionFault extends SoapFault {}

export class ExceededConcurrentRequestLimitFault extends SoapFault {}

export class InvalidSessionFault extends SoapFault {}

export class InvalidAccountFault extends SoapFault {}

export class AsyncFault extends SoapFault {}

export class InvalidCredentialsFault extends SoapFault {}

export class InsufficientPermissionFault extends SoapFault {}

export class ExceededRequestSizeFault extends SoapFault {}

export class ExceededUsageLimitFault extends SoapFault {}

export class ExceededRequestLimitFault extends SoapFault {}

export class UnexpectedErrorFault extends SoapFault {}
