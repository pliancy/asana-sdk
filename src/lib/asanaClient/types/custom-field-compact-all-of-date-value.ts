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
 * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
 * @export
 * @interface CustomFieldCompactAllOfDateValue
 */
export interface CustomFieldCompactAllOfDateValue {
    /**
     * A string representing the date in YYYY-MM-DD format.
     * @type {string}
     * @memberof CustomFieldCompactAllOfDateValue
     */
    'date'?: string;
    /**
     * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
     * @type {string}
     * @memberof CustomFieldCompactAllOfDateValue
     */
    'date_time'?: string;
}

