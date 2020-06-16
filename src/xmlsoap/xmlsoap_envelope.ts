import * as SoapTypes from "./soap-types";
const mappingsName = "org_xmlsoap_schemas_soap_envelope";

export class Fault extends SoapTypes.Base {
  faultcode: SoapTypes.QName;
  faultstring: string;
  faultactor?: string;
  detail?: Detail;
  constructor(props: Fault) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.faultcode = props.faultcode;
    this.faultstring = props.faultstring;
    this.faultactor = props.faultactor;
    this.detail = props.detail;
  }
}

export class Detail extends SoapTypes.Base {
  otherAttributes?: string;
  any?: string[];
  constructor(props: Detail) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherAttributes = props.otherAttributes;
    this.any = props.any;
  }
}

export class Envelope extends SoapTypes.Base {
  otherAttributes?: string;
  header?: Header;
  body: Body;
  any?: string[];
  constructor(props: Envelope) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherAttributes = props.otherAttributes;
    this.header = props.header;
    this.body = props.body;
    this.any = props.any;
  }
}

export class Body extends SoapTypes.Base {
  otherAttributes?: string;
  any?: any[];
  constructor(props: Body) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherAttributes = props.otherAttributes;
    this.any = props.any;
  }
}

export class Header extends SoapTypes.Base {
  otherAttributes?: string;
  any?: any[];
  constructor(props: Header) {
    super(SoapTypes.captureMappingsName(props, mappingsName));
    this.otherAttributes = props.otherAttributes;
    this.any = props.any;
  }
}
