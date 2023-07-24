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
 * 
 * @export
 * @interface GoalAddSupportingRelationshipRequest
 */
export interface GoalAddSupportingRelationshipRequest {
    /**
     * The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.
     * @type {string}
     * @memberof GoalAddSupportingRelationshipRequest
     */
    'supporting_resource': string;
    /**
     * An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
     * @type {string}
     * @memberof GoalAddSupportingRelationshipRequest
     */
    'insert_before'?: string;
    /**
     * An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
     * @type {string}
     * @memberof GoalAddSupportingRelationshipRequest
     */
    'insert_after'?: string;
    /**
     * The weight that the supporting resource\'s progress will contribute to the supported goal\'s progress. This can only be 0 or 1.
     * @type {number}
     * @memberof GoalAddSupportingRelationshipRequest
     */
    'contribution_weight'?: number;
}
