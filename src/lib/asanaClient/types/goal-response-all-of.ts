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


import { GoalMetricBase } from './goal-metric-base';
import { Like } from './like';
import { StatusUpdateCompact } from './status-update-compact';
import { TeamCompact } from './team-compact';
import { TimePeriodCompact } from './time-period-compact';
import { UserCompact } from './user-compact';
import { WorkspaceCompact } from './workspace-compact';

/**
 * 
 * @export
 * @interface GoalResponseAllOf
 */
export interface GoalResponseAllOf {
    /**
     * Array of likes for users who have liked this goal.
     * @type {Array<Like>}
     * @memberof GoalResponseAllOf
     */
    'likes'?: Array<Like>;
    /**
     * The number of users who have liked this goal.
     * @type {number}
     * @memberof GoalResponseAllOf
     */
    'num_likes'?: number;
    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization.
     * @type {TeamCompact & object}
     * @memberof GoalResponseAllOf
     */
    'team'?: TeamCompact & object;
    /**
     * 
     * @type {WorkspaceCompact & object}
     * @memberof GoalResponseAllOf
     */
    'workspace'?: WorkspaceCompact & object;
    /**
     * Array of users who are members of this goal.
     * @type {Array<UserCompact>}
     * @memberof GoalResponseAllOf
     */
    'followers'?: Array<UserCompact>;
    /**
     * 
     * @type {TimePeriodCompact & object}
     * @memberof GoalResponseAllOf
     */
    'time_period'?: TimePeriodCompact & object;
    /**
     * 
     * @type {GoalMetricBase & object}
     * @memberof GoalResponseAllOf
     */
    'metric'?: GoalMetricBase & object;
    /**
     * 
     * @type {UserCompact & object}
     * @memberof GoalResponseAllOf
     */
    'owner'?: UserCompact & object;
    /**
     * The latest `status_update` posted to this goal.
     * @type {StatusUpdateCompact}
     * @memberof GoalResponseAllOf
     */
    'current_status_update'?: StatusUpdateCompact | null;
}

