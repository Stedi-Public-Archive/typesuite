export declare class Fault {
    faultcode: string;
    faultstring: string;
    faultactor?: string;
    detail?: Detail;
    constructor(props: Fault);
}
export declare class Detail {
    otherAttributes?: string;
    any?: any[];
    constructor(props: Detail);
}
export declare class Envelope {
    otherAttributes?: string;
    header?: Header;
    body: Body;
    any?: any[];
    constructor(props: Envelope);
}
export declare class Body {
    otherAttributes?: string;
    any?: any[];
    constructor(props: Body);
}
export declare class Header {
    otherAttributes?: string;
    any?: any[];
    constructor(props: Header);
}
