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
 * @interface StatusUpdateBaseAllOf
 */
export interface StatusUpdateBaseAllOf {
    /**
     * The text content of the status update.
     * @type {string}
     * @memberof StatusUpdateBaseAllOf
     */
    'text': string;
    /**
     * [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML.
     * @type {string}
     * @memberof StatusUpdateBaseAllOf
     */
    'html_text'?: string;
    /**
     * The type associated with the status update. This represents the current state of the object this object is on.
     * @type {string}
     * @memberof StatusUpdateBaseAllOf
     */
    'status_type': StatusUpdateBaseAllOfStatusTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum StatusUpdateBaseAllOfStatusTypeEnum {
    OnTrack = 'on_track',
    AtRisk = 'at_risk',
    OffTrack = 'off_track',
    OnHold = 'on_hold',
    Complete = 'complete',
    Achieved = 'achieved',
    Partial = 'partial',
    Missed = 'missed',
    Dropped = 'dropped'
}


