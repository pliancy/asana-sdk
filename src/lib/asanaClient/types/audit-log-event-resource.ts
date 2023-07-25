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
 * The primary object that was affected by this event.
 * @export
 * @interface AuditLogEventResource
 */
export interface AuditLogEventResource {
    /**
     * The type of resource.
     * @type {string}
     * @memberof AuditLogEventResource
     */
    'resource_type'?: string;
    /**
     * The subtype of resource. Most resources will not have a subtype.
     * @type {string}
     * @memberof AuditLogEventResource
     */
    'resource_subtype'?: string;
    /**
     * Globally unique identifier of the resource.
     * @type {string}
     * @memberof AuditLogEventResource
     */
    'gid'?: string;
    /**
     * The name of the resource.
     * @type {string}
     * @memberof AuditLogEventResource
     */
    'name'?: string | null;
    /**
     * The email of the resource, if applicable.
     * @type {string}
     * @memberof AuditLogEventResource
     */
    'email'?: string;
}

