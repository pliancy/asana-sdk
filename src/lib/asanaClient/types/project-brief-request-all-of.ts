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
 * @interface ProjectBriefRequestAllOf
 */
export interface ProjectBriefRequestAllOf {
    /**
     * The plain text of the project brief. When writing to a project brief, you can specify either `html_text` (preferred) or `text`, but not both.
     * @type {string}
     * @memberof ProjectBriefRequestAllOf
     */
    'text'?: string;
}

