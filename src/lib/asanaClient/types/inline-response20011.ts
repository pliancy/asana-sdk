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


import { GoalCompact } from './goal-compact';
import { NextPage } from './next-page';

/**
 * 
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
    /**
     * 
     * @type {Array<GoalCompact>}
     * @memberof InlineResponse20011
     */
    'data'?: Array<GoalCompact>;
    /**
     * 
     * @type {NextPage}
     * @memberof InlineResponse20011
     */
    'next_page'?: NextPage | null;
}

