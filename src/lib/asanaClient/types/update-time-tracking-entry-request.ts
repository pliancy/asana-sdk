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
 * @interface UpdateTimeTrackingEntryRequest
 */
export interface UpdateTimeTrackingEntryRequest {
    /**
     * *Optional*. Time in minutes tracked by the entry
     * @type {number}
     * @memberof UpdateTimeTrackingEntryRequest
     */
    'duration_minutes'?: number;
    /**
     * *Optional*. The day that this entry is logged on. Defaults to today if no day specified
     * @type {string}
     * @memberof UpdateTimeTrackingEntryRequest
     */
    'entered_on'?: string;
}
