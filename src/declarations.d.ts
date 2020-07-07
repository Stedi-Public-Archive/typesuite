/* eslint-disable @typescript-eslint/no-explicit-any */

declare namespace jsonix {
  /**
   * (description)
   *
   * @interface Unmarshaller
   */
  interface Unmarshaller {
    //TODO: <T> @see createUnmarshaller
    /**
     * (description)
     *
     * @param {string} arg (description)
     * @returns {Object} (description)
     */
    unmarshalString(arg: string): Record<string, unknown>;

    /**
     * (description)
     *
     * @param {string} fileName (description)
     * @param {(unmarshalled:Object)=> void} callback (description)
     * @param {Object} options (description)
     */
    unmarshalFile(
      fileName: string,
      callback: (unmarshalled: Record<string, unknown>) => void,
      options: Record<string, unknown>
    ): void;

    /**
     * (description)
     *
     * @param {string} url (description)
     * @param {(unmarshalled:Object)=> void} callback (description)
     * @param {Object} options (description)
     */
    unmarshalURL(
      url: string,
      callback: (unmarshalled: Record<string, unknown>) => void,
      options: Record<string, unknown>
    ): void;

    /**
     * (description)
     *
     * @param {Element} doc (description)
     * @param {string} scope (description)
     * @returns {Object} (description)
     */
    unmarshalDocument(doc: Element, scope: string): Record<string, unknown>;
  }
  /**
   * (description)
   *
   * @interface Marshaller
   */
  interface Marshaller {
    // TODO: generics like marshalString(object:T):string;
    /**
     * (description)
     *
     * @param {Object} object (description)
     * @returns {string} (description)
     */
    marshalString(object: Record<string, unknown>): string;

    /**
     * (description)
     *
     * @param {Object} object (description)
     * @returns {Element} (description)
     */
    marshalDocument(object: Record<string, unknown>): Element;
  }

  declare namespace Jsonix {
    export class Context {
      /**
       * Creates an instance of Context.
       *
       * @param {any[]} s (description)
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(s: any[]);

      /**
       * (description)
       *
       * @param {string} name (description)
       * @returns {TypeInfo} (description)
       */
      getTypeInfoByName(name: string): TypeInfo;

      /**
       * (description)
       *
       * @param {string} typeName (description)
       * @returns {TypeInfo} (description)
       */
      getTypeInfoByTypeName(typeName: string): TypeInfo;

      /**
       * (description)
       *
       * @param {string} typeNameKey (description)
       * @returns {TypeInfo} (description)
       */
      getTypeInfoByTypeNameKey(typeNameKey: string): TypeInfo;

      getElementInfo(name: string, scope: string): any;

      getSubstitutionMembers(name: string): any;

      createMarshaller(): Marshaller;

      createUnmarshaller(): Unmarshaller;

      //TODO: createUnmarshaller<T>(type: T): Unmarshaller<T>;

      getNamespaceURI(prefix: string): any;

      getPrefix(namespaceURI: string, defaultPrefix: string): any;

      builtinTypeInfos: {
        Jsonix: {
          Schema: {
            XSD: {
              AnyType: { INSTANCE: Record<string, unknown> };
              AnySimpleType: { INSTANCE: Record<string, unknown> };
              AnyURI: { INSTANCE: Record<string, unknown> };
              Base64Binary: { INSTANCE: Record<string, unknown> };
              Boolean: { INSTANCE: Record<string, unknown> };
              Byte: { INSTANCE: Record<string, unknown> };
              Calendar: { INSTANCE: Record<string, unknown> };
              DateAsDate: { INSTANCE: Record<string, unknown> };
              Date: { INSTANCE: Record<string, unknown> };
              DateTimeAsDate: { INSTANCE: Record<string, unknown> };
              DateTime: { INSTANCE: Record<string, unknown> };
              Decimal: { INSTANCE: Record<string, unknown> };
              Double: { INSTANCE: Record<string, unknown> };
              Duration: { INSTANCE: Record<string, unknown> };
              Float: { INSTANCE: Record<string, unknown> };
              GDay: { INSTANCE: Record<string, unknown> };
              GMonth: { INSTANCE: Record<string, unknown> };
              GMonthDay: { INSTANCE: Record<string, unknown> };
              GYear: { INSTANCE: Record<string, unknown> };
              GYearMonth: { INSTANCE: Record<string, unknown> };
              HexBinary: { INSTANCE: Record<string, unknown> };
              ID: { INSTANCE: Record<string, unknown> };
              IDREF: { INSTANCE: Record<string, unknown> };
              IDREFS: { INSTANCE: Record<string, unknown> };
              Int: { INSTANCE: Record<string, unknown> };
              Integer: { INSTANCE: Record<string, unknown> };
              Language: { INSTANCE: Record<string, unknown> };
              Long: { INSTANCE: Record<string, unknown> };
              Name: { INSTANCE: Record<string, unknown> };
              NCName: { INSTANCE: Record<string, unknown> };
              NegativeInteger: { INSTANCE: Record<string, unknown> };
              NMToken: { INSTANCE: Record<string, unknown> };
              NMTokens: { INSTANCE: Record<string, unknown> };
              NonNegativeInteger: { INSTANCE: Record<string, unknown> };
              NonPositiveInteger: { INSTANCE: Record<string, unknown> };
              NormalizedString: { INSTANCE: Record<string, unknown> };
              Number: { INSTANCE: Record<string, unknown> };
              PositiveInteger: { INSTANCE: Record<string, unknown> };
              QName: { INSTANCE: Record<string, unknown> };
              Short: { INSTANCE: Record<string, unknown> };
              String: { INSTANCE: Record<string, unknown> };
              Strings: { INSTANCE: Record<string, unknown> };
              TimeAsDate: { INSTANCE: Record<string, unknown> };
              Time: { INSTANCE: Record<string, unknown> };
              Token: { INSTANCE: Record<string, unknown> };
              UnsignedByte: { INSTANCE: Record<string, unknown> };
              UnsignedInt: { INSTANCE: Record<string, unknown> };
              UnsignedLong: { INSTANCE: Record<string, unknown> };
              UnsignedShort: { INSTANCE: Record<string, unknown> };
            };
          };
        };
      }[];

      // private
      elementInfos: ClassInfo[];
    }
  }

  /**
   * (description)
   *
   * @interface Styled
   */
  interface Styled {
    CLASS_NAME: string;
    mappingStyle: Record<string, unknown>;
  }

  //TODO: package Schema.XSD
  /**
   * (description)
   *
   * @interface QName
   */
  interface QName {
    CLASS_NAME: string;
    key: string;
    namespaceURI: string;
    localPart: string;
    prefix: string;
    string: string;
  }

  //TODO: package mapping
  /**
   * (description)
   *
   * @interface TypeInfo
   */
  interface TypeInfo {
    name: string;
    baseTypeInfo: TypeInfo;
  }

  /**
   * (description)
   *
   * @interface EnumLeafInfo
   * @extends {TypeInfo}
   */
  interface EnumLeafInfo extends TypeInfo {
    name: string;
    baseTypeInfo: TypeInfo;
    entries: { [name: string]: string };
    keys: { [index: number]: string };
    values: { [index: number]: string };
    built: boolean;
  }

  /**
   * (description)
   *
   * @interface PropertyInfo
   */
  interface PropertyInfo {
    CLASS_NAME: string;
    name: string;
    collection: boolean;
    targetNamespace: string;
    defaultElementNamespaceURI: string;
    defaultAttributeNamespaceURI: string;
    built: boolean;
  }

  /**
   * (description)
   *
   * @interface AbstractElementPropertyInfo
   * @extends {PropertyInfo}
   */
  interface AbstractElementPropertyInfo extends PropertyInfo {
    wrapperElement: QName;
    allowDom: boolean;
    allowTypedObject;
    boolean;
    mixed: boolean;
  }

  /**
   * (description)
   *
   * @interface ElementPropertyInfo
   * @extends {AbstractElementPropertyInfo}
   */
  interface ElementPropertyInfo extends AbstractElementPropertyInfo {
    typeInfo: TypeInfo | string;
    elementName: QName;
  }

  /**
   * (description)
   *
   * @interface ClassInfo
   * @extends {TypeInfo}
   * @extends {Styled}
   */
  interface ClassInfo extends TypeInfo, Styled {
    CLASS_NAME: string;
    localName: string;
    typeName: QName;
    instanceFactory: Record<string, unknown>;
    properties: { [index: number]: PropertyInfo };
    propertiesMap: { [name: string]: PropertyInfo };
    //is inner class
    structure: {
      elements: { [fqn: string]: PropertyInfo };
      attributes: Record<string, unknown>;
      anyAttribute: Record<string, unknown>;
      value: Record<string, unknown>;
      any: Record<string, unknown>;
    };
    targetNamespace: string;
    defaultElementNamespaceURI: string;
    defaultAttributeNamespaceURI: string;
    built: boolean;
    //TODO: confirm this syntax
    propertyInfoCreators: {
      aa: { aa };
      anyAttribute: { aa };
      ae: { ae };
      anyElement: { ae };
      a: { a };
      attribute: { a };
      em: { em };
      elementMap: { em };
      e: { e };
      element: { e };
      es: { es };
      elements: { es };
      er: { er };
      elementRef: { er };
      ers: { ers };
      elementRefs: { ers };
      v: { v };
      value: { v };
    };
  }
}
