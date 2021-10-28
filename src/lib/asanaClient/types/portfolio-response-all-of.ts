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


import { CustomFieldSettingResponse } from './custom-field-setting-response';
import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * 
 * @export
 * @interface PortfolioResponseAllOf
 */
export interface PortfolioResponseAllOf {
    /**
     * The time at which this resource was created.
     * @type {string}
     * @memberof PortfolioResponseAllOf
     */
    'created_at'?: string;
    /**
     * 
     * @type {UserCompact}
     * @memberof PortfolioResponseAllOf
     */
    'created_by'?: UserCompact;
    /**
     * Array of custom field settings applied to the portfolio.
     * @type {Array<CustomFieldSettingResponse>}
     * @memberof PortfolioResponseAllOf
     */
    'custom_field_settings'?: Array<CustomFieldSettingResponse>;
    /**
     * The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD.
     * @type {string}
     * @memberof PortfolioResponseAllOf
     */
    'due_on'?: string | null;
    /**
     * 
     * @type {Array<UserCompact>}
     * @memberof PortfolioResponseAllOf
     */
    'members'?: Array<UserCompact>;
    /**
     * 
     * @type {UserCompact}
     * @memberof PortfolioResponseAllOf
     */
    'owner'?: UserCompact;
    /**
     * The day on which work for this portfolio begins, or null if the portfolio has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, start_on and due_on cannot be the same date.*
     * @type {string}
     * @memberof PortfolioResponseAllOf
     */
    'start_on'?: string | null;
    /**
     * 
     * @type {WorkspaceCompact & object}
     * @memberof PortfolioResponseAllOf
     */
    'workspace'?: WorkspaceCompact & object;
    /**
     * A url that points directly to the object within Asana.
     * @type {string}
     * @memberof PortfolioResponseAllOf
     */
    'permalink_url'?: string;
}

