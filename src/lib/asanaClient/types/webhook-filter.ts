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
 * A WebhookFilter can be passed on creation of a webhook in order to filter the types of actions that trigger delivery of an [event](/reference/events)
 * @export
 * @interface WebhookFilter
 */
export interface WebhookFilter {
    /**
     * The type of the resource which created the event when modified; for example, to filter to changes on regular tasks this field should be set to `task`.
     * @type {string}
     * @memberof WebhookFilter
     */
    'resource_type'?: string;
    /**
     * The resource subtype of the resource that the filter applies to. This should be set to the same value as is returned on the `resource_subtype` field on the resources themselves.
     * @type {string}
     * @memberof WebhookFilter
     */
    'resource_subtype'?: string;
    /**
     * The type of change on the **resource** to pass through the filter. For more information refer to `Event.action` in the [event](/reference/events) schema. This can be one of `changed`, `added`, `removed`, `deleted`, and `undeleted` depending on the nature of what has occurred on the resource.
     * @type {string}
     * @memberof WebhookFilter
     */
    'action'?: string;
    /**
     * *Conditional.* A whitelist of fields for events which will pass the filter when the resource is changed. These can be any combination of the fields on the resources themselves. This field is only valid for `action` of type `changed`
     * @type {Array<string>}
     * @memberof WebhookFilter
     */
    'fields'?: Array<string>;
}

