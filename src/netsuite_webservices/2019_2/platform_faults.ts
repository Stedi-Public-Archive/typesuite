import * as SoapTypes from "../../util/soap-types";
import * as PlatformFaultsTypes from "./platform_faults_types";

const mappingsName = "com_netsuite_webservices_platform_faults_2019_2";

export class SoapFault extends SoapTypes.Base {
  code: PlatformFaultsTypes.FaultCodeType;
  message: string;
  constructor(props: SoapFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.code = props.code;
    this.message = props.message;
  }
}

export class ExceededRecordCountFault extends SoapFault {
  constructor(props: ExceededRecordCountFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class InvalidVersionFault extends SoapFault {
  constructor(props: InvalidVersionFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class ExceededConcurrentRequestLimitFault extends SoapFault {
  constructor(props: ExceededConcurrentRequestLimitFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class InvalidSessionFault extends SoapFault {
  constructor(props: InvalidSessionFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class InvalidAccountFault extends SoapFault {
  constructor(props: InvalidAccountFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class AsyncFault extends SoapFault {
  constructor(props: AsyncFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class InvalidCredentialsFault extends SoapFault {
  constructor(props: InvalidCredentialsFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class InsufficientPermissionFault extends SoapFault {
  constructor(props: InsufficientPermissionFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class ExceededRequestSizeFault extends SoapFault {
  constructor(props: ExceededRequestSizeFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class ExceededUsageLimitFault extends SoapFault {
  constructor(props: ExceededUsageLimitFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class ExceededRequestLimitFault extends SoapFault {
  constructor(props: ExceededRequestLimitFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}

export class UnexpectedErrorFault extends SoapFault {
  constructor(props: UnexpectedErrorFault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
  }
}
