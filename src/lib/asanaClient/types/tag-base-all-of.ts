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
 * @interface TagBaseAllOf
 */
export interface TagBaseAllOf {
    /**
     * Color of the tag.
     * @type {string}
     * @memberof TagBaseAllOf
     */
    'color'?: TagBaseAllOfColorEnum;
    /**
     * Free-form textual information associated with the tag (i.e. its description).
     * @type {string}
     * @memberof TagBaseAllOf
     */
    'notes'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TagBaseAllOfColorEnum {
    DarkPink = 'dark-pink',
    DarkGreen = 'dark-green',
    DarkBlue = 'dark-blue',
    DarkRed = 'dark-red',
    DarkTeal = 'dark-teal',
    DarkBrown = 'dark-brown',
    DarkOrange = 'dark-orange',
    DarkPurple = 'dark-purple',
    DarkWarmGray = 'dark-warm-gray',
    LightPink = 'light-pink',
    LightGreen = 'light-green',
    LightBlue = 'light-blue',
    LightRed = 'light-red',
    LightTeal = 'light-teal',
    LightBrown = 'light-brown',
    LightOrange = 'light-orange',
    LightPurple = 'light-purple',
    LightWarmGray = 'light-warm-gray',
    Null = 'null'
}


