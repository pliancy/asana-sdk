/* tslint:disable */
/* eslint-disable */
/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Message providing more detail about the error that occurred, if available.
     * @type {string}
     * @memberof ModelError
     */
    'message'?: string;
    /**
     * Additional information directing developers to resources on how to address and fix the problem, if available.
     * @type {string}
     * @memberof ModelError
     */
    'help'?: string;
    /**
     * *500 errors only*. A unique error phrase which can be used when contacting developer support to help identify the exact occurrence of the problem in Asana’s logs.
     * @type {string}
     * @memberof ModelError
     */
    'phrase'?: string;
}

