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


import { PortfolioCompact } from './portfolio-compact';
import { UserCompact } from './user-compact';

/**
 * This object determines if a user is a member of a portfolio.
 * @export
 * @interface PortfolioMembershipCompactAllOf
 */
export interface PortfolioMembershipCompactAllOf {
    /**
     * 
     * @type {PortfolioCompact}
     * @memberof PortfolioMembershipCompactAllOf
     */
    'portfolio'?: PortfolioCompact;
    /**
     * 
     * @type {UserCompact}
     * @memberof PortfolioMembershipCompactAllOf
     */
    'user'?: UserCompact;
}

