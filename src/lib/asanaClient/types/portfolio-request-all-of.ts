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
 * @interface PortfolioRequestAllOf
 */
export interface PortfolioRequestAllOf {
    /**
     * An array of strings identifying users. These can either be the string \"me\", an email, or the gid of a user.
     * @type {Array<string>}
     * @memberof PortfolioRequestAllOf
     */
    'members'?: Array<string>;
    /**
     * Gid of an object.
     * @type {string}
     * @memberof PortfolioRequestAllOf
     */
    'workspace'?: string;
    /**
     * True if the portfolio is public to its workspace members.
     * @type {boolean}
     * @memberof PortfolioRequestAllOf
     */
    'public'?: boolean;
}
