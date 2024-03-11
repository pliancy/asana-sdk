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
 * @interface GoalMetricBaseAllOf
 */
export interface GoalMetricBaseAllOf {
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     * @type {string}
     * @memberof GoalMetricBaseAllOf
     */
    'resource_subtype'?: GoalMetricBaseAllOfResourceSubtypeEnum;
    /**
     * *Conditional*. Only relevant for goal metrics of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
     * @type {number}
     * @memberof GoalMetricBaseAllOf
     */
    'precision'?: number;
    /**
     * A supported unit of measure for the goal metric, or none.
     * @type {string}
     * @memberof GoalMetricBaseAllOf
     */
    'unit'?: GoalMetricBaseAllOfUnitEnum;
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `unit` is not `currency`.
     * @type {string}
     * @memberof GoalMetricBaseAllOf
     */
    'currency_code'?: string | null;
    /**
     * This number is the start value of a goal metric of type number.
     * @type {number}
     * @memberof GoalMetricBaseAllOf
     */
    'initial_number_value'?: number;
    /**
     * This number is the end value of a goal metric of type number. This number cannot equal `initial_number_value`.
     * @type {number}
     * @memberof GoalMetricBaseAllOf
     */
    'target_number_value'?: number;
    /**
     * This number is the current value of a goal metric of type number.
     * @type {number}
     * @memberof GoalMetricBaseAllOf
     */
    'current_number_value'?: number;
    /**
     * This string is the current value of a goal metric of type string.
     * @type {string}
     * @memberof GoalMetricBaseAllOf
     */
    'current_display_value'?: string;
    /**
     * This field defines how the progress value of a goal metric is being calculated. A goal\'s progress can be provided manually by the user, calculated automatically from contributing subgoals, projects, or tasks, or managed by an integration with an external data source, such as Salesforce.
     * @type {string}
     * @memberof GoalMetricBaseAllOf
     */
    'progress_source'?: GoalMetricBaseAllOfProgressSourceEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum GoalMetricBaseAllOfResourceSubtypeEnum {
    Number = 'number'
}
/**
    * @export
    * @enum {string}
    */
export enum GoalMetricBaseAllOfUnitEnum {
    None = 'none',
    Currency = 'currency',
    Percentage = 'percentage'
}
/**
    * @export
    * @enum {string}
    */
export enum GoalMetricBaseAllOfProgressSourceEnum {
    Manual = 'manual',
    SubgoalProgress = 'subgoal_progress',
    ProjectTaskCompletion = 'project_task_completion',
    ProjectMilestoneCompletion = 'project_milestone_completion',
    TaskCompletion = 'task_completion',
    External = 'external'
}


