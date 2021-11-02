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
 * @interface PortfolioAddItemRequest
 */
export interface PortfolioAddItemRequest {
    /**
     * The item to add to the portfolio.
     * @type {string}
     * @memberof PortfolioAddItemRequest
     */
    'item': string;
    /**
     * An id of an item in this portfolio. The new item will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.
     * @type {string}
     * @memberof PortfolioAddItemRequest
     */
    'insert_before'?: string;
    /**
     * An id of an item in this portfolio. The new item will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified.
     * @type {string}
     * @memberof PortfolioAddItemRequest
     */
    'insert_after'?: string;
}

