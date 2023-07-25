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
 * @interface TimePeriodCompactAllOf
 */
export interface TimePeriodCompactAllOf {
    /**
     * The localized end date of the time period in `YYYY-MM-DD` format.
     * @type {string}
     * @memberof TimePeriodCompactAllOf
     */
    'end_on'?: string;
    /**
     * The localized start date of the time period in `YYYY-MM-DD` format.
     * @type {string}
     * @memberof TimePeriodCompactAllOf
     */
    'start_on'?: string;
    /**
     * The cadence and index of the time period. The value is one of: `FY`, `H1`, `H2`, `Q1`, `Q2`, `Q3`, or `Q4`.
     * @type {string}
     * @memberof TimePeriodCompactAllOf
     */
    'period'?: TimePeriodCompactAllOfPeriodEnum;
    /**
     * A string representing the cadence code and the fiscal year.
     * @type {string}
     * @memberof TimePeriodCompactAllOf
     */
    'display_name'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TimePeriodCompactAllOfPeriodEnum {
    Fy = 'FY',
    H1 = 'H1',
    H2 = 'H2',
    Q1 = 'Q1',
    Q2 = 'Q2',
    Q3 = 'Q3',
    Q4 = 'Q4'
}


