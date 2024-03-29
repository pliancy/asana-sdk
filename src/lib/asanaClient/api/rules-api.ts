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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../types';
// @ts-ignore
import { InlineObject41 } from '../types';
// @ts-ignore
import { InlineResponse20029 } from '../types';
/**
 * RulesApi - axios parameter creator
 * @export
 */
export const RulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Trigger a rule which uses an [\"incoming web request\"](/docs/incoming-web-requests) trigger.
         * @summary Trigger a rule
         * @param {string} ruleTriggerGid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
         * @param {InlineObject41} inlineObject41 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        triggerRule: async (ruleTriggerGid: string, inlineObject41: InlineObject41, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ruleTriggerGid' is not null or undefined
            assertParamExists('triggerRule', 'ruleTriggerGid', ruleTriggerGid)
            // verify required parameter 'inlineObject41' is not null or undefined
            assertParamExists('triggerRule', 'inlineObject41', inlineObject41)
            const localVarPath = `/rule_triggers/{rule_trigger_gid}/run`
                .replace(`{${"rule_trigger_gid"}}`, encodeURIComponent(String(ruleTriggerGid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject41, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RulesApi - functional programming interface
 * @export
 */
export const RulesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RulesApiAxiosParamCreator(configuration)
    return {
        /**
         * Trigger a rule which uses an [\"incoming web request\"](/docs/incoming-web-requests) trigger.
         * @summary Trigger a rule
         * @param {string} ruleTriggerGid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
         * @param {InlineObject41} inlineObject41 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async triggerRule(ruleTriggerGid: string, inlineObject41: InlineObject41, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20029>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.triggerRule(ruleTriggerGid, inlineObject41, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RulesApi - factory interface
 * @export
 */
export const RulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RulesApiFp(configuration)
    return {
        /**
         * Trigger a rule which uses an [\"incoming web request\"](/docs/incoming-web-requests) trigger.
         * @summary Trigger a rule
         * @param {string} ruleTriggerGid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
         * @param {InlineObject41} inlineObject41 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        triggerRule(ruleTriggerGid: string, inlineObject41: InlineObject41, options?: any): AxiosPromise<InlineResponse20029> {
            return localVarFp.triggerRule(ruleTriggerGid, inlineObject41, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RulesApi - object-oriented interface
 * @export
 * @class RulesApi
 * @extends {BaseAPI}
 */
export class RulesApi extends BaseAPI {
    /**
     * Trigger a rule which uses an [\"incoming web request\"](/docs/incoming-web-requests) trigger.
     * @summary Trigger a rule
     * @param {string} ruleTriggerGid The ID of the incoming web request trigger. This value is a path parameter that is automatically generated for the API endpoint.
     * @param {InlineObject41} inlineObject41 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RulesApi
     */
    public triggerRule(ruleTriggerGid: string, inlineObject41: InlineObject41, options?: AxiosRequestConfig) {
        return RulesApiFp(this.configuration).triggerRule(ruleTriggerGid, inlineObject41, options).then((request) => request(this.axios, this.basePath));
    }
}
