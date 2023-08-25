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


import { TaskCompact } from './task-compact';
import { TimeTrackingEntryBaseAllOf } from './time-tracking-entry-base-all-of';
import { TimeTrackingEntryCompact } from './time-tracking-entry-compact';
import { UserCompact } from './user-compact';

/**
 * @type TimeTrackingEntryBase
 * @export
 */
export type TimeTrackingEntryBase = TimeTrackingEntryBaseAllOf & TimeTrackingEntryCompact;

