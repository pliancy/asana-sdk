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
 * @interface WorkspaceResponseAllOf
 */
export interface WorkspaceResponseAllOf {
    /**
     * The email domains that are associated with this workspace.
     * @type {Array<string>}
     * @memberof WorkspaceResponseAllOf
     */
    'email_domains'?: Array<string>;
    /**
     * Whether the workspace is an *organization*.
     * @type {boolean}
     * @memberof WorkspaceResponseAllOf
     */
    'is_organization'?: boolean;
}

