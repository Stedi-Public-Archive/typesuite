export namespace com_netsuite_webservices_general_communication_2019_2 {
    const name: string;
    const defaultElementNamespaceURI: string;
    const dependencies: string[];
    const typeInfos: ({
        localName: string;
        propertyInfos: ({
            name: string;
            required: boolean;
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
            required?: undefined;
            collection?: undefined;
        })[];
        baseTypeInfo?: undefined;
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            typeInfo: string;
            minOccurs?: undefined;
            collection?: undefined;
        } | {
            name: string;
            minOccurs: number;
            collection: boolean;
            typeInfo: string;
        })[];
    } | {
        localName: string;
        baseTypeInfo: string;
        propertyInfos: ({
            name: string;
            typeInfo?: undefined;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            typeInfo: string;
            attributeName?: undefined;
            type?: undefined;
        } | {
            name: string;
            attributeName: {
                localPart: string;
            };
            type: string;
            typeInfo?: undefined;
        })[];
    })[];
    const elementInfos: {
        typeInfo: string;
        elementName: string;
    }[];
}
