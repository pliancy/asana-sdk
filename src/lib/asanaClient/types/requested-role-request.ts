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
 * @interface RequestedRoleRequest
 */
export interface RequestedRoleRequest {
    /**
     * Globally unique identifier of the template role in the project template.
     * @type {string}
     * @memberof RequestedRoleRequest
     */
    'gid'?: string;
    /**
     * The user id that should be assigned to the template role.
     * @type {string}
     * @memberof RequestedRoleRequest
     */
    'value'?: string;
}

