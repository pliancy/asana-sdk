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


import { NextPage } from './next-page';
import { WorkspaceMembershipCompact } from './workspace-membership-compact';

/**
 * 
 * @export
 * @interface InlineResponse20053
 */
export interface InlineResponse20053 {
    /**
     * 
     * @type {Array<WorkspaceMembershipCompact>}
     * @memberof InlineResponse20053
     */
    'data'?: Array<WorkspaceMembershipCompact>;
    /**
     * 
     * @type {NextPage}
     * @memberof InlineResponse20053
     */
    'next_page'?: NextPage | null;
}

