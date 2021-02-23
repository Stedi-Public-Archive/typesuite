export namespace com_netsuite_webservices_platform_common_2019_2 {
    const name: string;
    const defaultElementNamespaceURI: string;
    const dependencies: string[];
    const typeInfos: ({
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            minOccurs: number;
            collection: boolean;
            typeInfo: string;
            elementName?: undefined;
        } | {
            name: string;
            minOccurs: number;
            collection: boolean;
            elementName: string;
            typeInfo: string;
        } | {
            name: string;
            typeInfo: string;
            minOccurs?: undefined;
            collection?: undefined;
            elementName?: undefined;
        })[];
    } | {
        localName: string;
        propertyInfos: {
            name: string;
            required: boolean;
            typeInfo: string;
        }[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            required: boolean;
            typeInfo: string;
            minOccurs?: undefined;
            collection?: undefined;
        } | {
            name: string;
            minOccurs: number;
            collection: boolean;
            typeInfo: string;
            required?: undefined;
        } | {
            name: string;
            typeInfo: string;
            required?: undefined;
            minOccurs?: undefined;
            collection?: undefined;
        })[];
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            typeInfo: string;
            elementName?: undefined;
        } | {
            name: string;
            elementName: string;
            typeInfo: string;
        })[];
    } | {
        localName: string;
        propertyInfos: ({
            name: string;
            minOccurs: number;
            collection: boolean;
            typeInfo: string;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            typeInfo: string;
            attributeName: {
                localPart: string;
            };
            type: string;
            minOccurs?: undefined;
            collection?: undefined;
        })[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        propertyInfos: {
            name: string;
            required: boolean;
            maxOccurs: number;
            collection: boolean;
            typeInfo: string;
        }[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            typeInfo?: undefined;
        } | {
            name: string;
            typeInfo: string;
        })[];
    } | {
        localName: string;
        propertyInfos: ({
            name: string;
            typeInfo: string;
            elementName?: undefined;
        } | {
            name: string;
            elementName: string;
            typeInfo: string;
        } | {
            name: string;
            typeInfo?: undefined;
            elementName?: undefined;
        })[];
        baseTypeInfo?: undefined;
    })[];
    const elementInfos: never[];
}
