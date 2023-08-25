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
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 * @export
 * @interface UserCompactAllOf
 */
export interface UserCompactAllOf {
    /**
     * *Read-only except when same user as requester*. The user’s name.
     * @type {string}
     * @memberof UserCompactAllOf
     */
    'name'?: string;
}
