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


import { AsanaNamedResource } from './asana-named-resource';

/**
 * Webhook objects represent the state of an active subscription for a server to be updated with information from Asana. This schema represents the subscription itself, not the objects that are sent to the server. For information on those please refer to the [event](/reference/events) schema.
 * @export
 * @interface WebhookCompactAllOf
 */
export interface WebhookCompactAllOf {
    /**
     * If true, the webhook will send events - if false it is considered inactive and will not generate events.
     * @type {boolean}
     * @memberof WebhookCompactAllOf
     */
    'active'?: boolean;
    /**
     * 
     * @type {AsanaNamedResource}
     * @memberof WebhookCompactAllOf
     */
    'resource'?: AsanaNamedResource;
    /**
     * The URL to receive the HTTP POST.
     * @type {string}
     * @memberof WebhookCompactAllOf
     */
    'target'?: string;
}

