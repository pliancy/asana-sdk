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


import { WebhookFilter } from './webhook-filter';

/**
 * 
 * @export
 * @interface WebhookUpdateRequest
 */
export interface WebhookUpdateRequest {
    /**
     * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from this webhook. If a webhook event passes any of the filters the event will be delivered; otherwise no event will be sent to the receiving server.
     * @type {Array<WebhookFilter & object>}
     * @memberof WebhookUpdateRequest
     */
    'filters'?: Array<WebhookFilter & object>;
}
