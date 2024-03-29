/* tslint:disable */
/* eslint-disable */
/**
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
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
 * @interface SectionRequest
 */
export interface SectionRequest {
    /**
     * The text to be displayed as the section name. This cannot be an empty string.
     * @type {string}
     * @memberof SectionRequest
     */
    'name': string;
    /**
     * An existing section within this project before which the added section should be inserted. Cannot be provided together with insert_after.
     * @type {string}
     * @memberof SectionRequest
     */
    'insert_before'?: string;
    /**
     * An existing section within this project after which the added section should be inserted. Cannot be provided together with insert_before.
     * @type {string}
     * @memberof SectionRequest
     */
    'insert_after'?: string;
}

