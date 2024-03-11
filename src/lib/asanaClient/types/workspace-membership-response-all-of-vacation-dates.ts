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
 * Contains keys `start_on` and `end_on` for the vacation dates for the user in this workspace. If `start_on` is null, the entire `vacation_dates` object will be null. If `end_on` is before today, the entire `vacation_dates` object will be null.
 * @export
 * @interface WorkspaceMembershipResponseAllOfVacationDates
 */
export interface WorkspaceMembershipResponseAllOfVacationDates {
    /**
     * The day on which the user\'s vacation in this workspace starts. This is a date with `YYYY-MM-DD` format.
     * @type {string}
     * @memberof WorkspaceMembershipResponseAllOfVacationDates
     */
    'start_on'?: string;
    /**
     * The day on which the user\'s vacation in this workspace ends, or null if there is no end date. This is a date with `YYYY-MM-DD` format.
     * @type {string}
     * @memberof WorkspaceMembershipResponseAllOfVacationDates
     */
    'end_on'?: string | null;
}

