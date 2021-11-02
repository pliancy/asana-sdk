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
 * A user identification object for specification with the addUser/removeUser endpoints.
 * @export
 * @interface TeamAddUserRequest
 */
export interface TeamAddUserRequest {
    /**
     * A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
     * @type {string}
     * @memberof TeamAddUserRequest
     */
    'user'?: string;
}

