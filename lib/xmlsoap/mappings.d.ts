declare const _default: {
    name: string;
    defaultElementNamespaceURI: string;
    typeInfos: ({
        localName: string;
        propertyInfos: ({
            name: string;
            required: boolean;
            elementName: {
                localPart: string;
            };
            typeInfo: string;
        } | {
            name: string;
            required: boolean;
            elementName: {
                localPart: string;
            };
            typeInfo?: undefined;
        } | {
            name: string;
            elementName: {
                localPart: string;
            };
            required?: undefined;
            typeInfo?: undefined;
        } | {
            name: string;
            elementName: {
                localPart: string;
            };
            typeInfo: string;
            required?: undefined;
        })[];
        typeName?: undefined;
    } | {
        localName: string;
        typeName: string;
        propertyInfos: ({
            name: string;
            type: string;
            minOccurs?: undefined;
            collection?: undefined;
            mixed?: undefined;
        } | {
            name: string;
            minOccurs: number;
            collection: boolean;
            mixed: boolean;
            type: string;
        })[];
    } | {
        localName: string;
        propertyInfos: ({
            name: string;
            type: string;
            elementName?: undefined;
            typeInfo?: undefined;
            required?: undefined;
            minOccurs?: undefined;
            collection?: undefined;
            mixed?: undefined;
        } | {
            name: string;
            elementName: string;
            typeInfo: string;
            type?: undefined;
            required?: undefined;
            minOccurs?: undefined;
            collection?: undefined;
            mixed?: undefined;
        } | {
            name: string;
            required: boolean;
            elementName: string;
            typeInfo: string;
            type?: undefined;
            minOccurs?: undefined;
            collection?: undefined;
            mixed?: undefined;
        } | {
            name: string;
            minOccurs: number;
            collection: boolean;
            mixed: boolean;
            type: string;
            elementName?: undefined;
            typeInfo?: undefined;
            required?: undefined;
        })[];
        typeName?: undefined;
    })[];
    elementInfos: {
        elementName: string;
        typeInfo: string;
    }[];
}[];
export default _default;
