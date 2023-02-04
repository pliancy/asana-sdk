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


import { BatchRequestActionOptions } from './batch-request-action-options';

/**
 * An action object for use in a batch request.
 * @export
 * @interface BatchRequestAction
 */
export interface BatchRequestAction {
    /**
     * The path of the desired endpoint relative to the API’s base URL. Query parameters are not accepted here; put them in `data` instead.
     * @type {string}
     * @memberof BatchRequestAction
     */
    'relative_path': string;
    /**
     * The HTTP method you wish to emulate for the action.
     * @type {string}
     * @memberof BatchRequestAction
     */
    'method': BatchRequestActionMethodEnum;
    /**
     * For `GET` requests, this should be a map of query parameters you would have normally passed in the URL. Options and pagination are not accepted here; put them in `options` instead. For `POST`, `PATCH`, and `PUT` methods, this should be the content you would have normally put in the data field of the body.
     * @type {object}
     * @memberof BatchRequestAction
     */
    'data'?: object;
    /**
     * 
     * @type {BatchRequestActionOptions}
     * @memberof BatchRequestAction
     */
    'options'?: BatchRequestActionOptions;
}

/**
    * @export
    * @enum {string}
    */
export enum BatchRequestActionMethodEnum {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Delete = 'delete',
    Patch = 'patch',
    Head = 'head'
}

