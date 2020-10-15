export class Fault {
  faultcode: string;
  faultstring: string;
  faultactor?: string;
  detail?: Detail;
  constructor(props: Fault) {
    this.faultcode = props.faultcode;
    this.faultstring = props.faultstring;
    this.faultactor = props.faultactor;
    this.detail = props.detail;
  }
}

export class Detail {
  otherAttributes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any?: any[];
  constructor(props: Detail) {
    this.otherAttributes = props.otherAttributes;
    this.any = props.any;
  }
}

export class Envelope {
  otherAttributes?: string;
  header?: Header;
  body: Body;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any?: any[];
  constructor(props: Envelope) {
    this.otherAttributes = props.otherAttributes;
    this.header = props.header;
    this.body = props.body;
    this.any = props.any;
  }
}

export class Body {
  otherAttributes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any?: any[];
  constructor(props: Body) {
    this.otherAttributes = props.otherAttributes;
    this.any = props.any;
  }
}

export class Header {
  otherAttributes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any?: any[];
  constructor(props: Header) {
    this.otherAttributes = props.otherAttributes;
    this.any = props.any;
  }
}
