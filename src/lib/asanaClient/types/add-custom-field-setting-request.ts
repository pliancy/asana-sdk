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
 * @interface AddCustomFieldSettingRequest
 */
export interface AddCustomFieldSettingRequest {
    /**
     * The custom field to associate with this container.
     * @type {string}
     * @memberof AddCustomFieldSettingRequest
     */
    'custom_field': string;
    /**
     * Whether this field should be considered important to this container (for instance, to display in the list view of items in the container).
     * @type {boolean}
     * @memberof AddCustomFieldSettingRequest
     */
    'is_important'?: boolean;
    /**
     * A gid of a Custom Field Setting on this container, before which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.
     * @type {string}
     * @memberof AddCustomFieldSettingRequest
     */
    'insert_before'?: string;
    /**
     * A gid of a Custom Field Setting on this container, after which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.
     * @type {string}
     * @memberof AddCustomFieldSettingRequest
     */
    'insert_after'?: string;
}

