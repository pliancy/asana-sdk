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
import { InlineObject51 } from '../types';
// @ts-ignore
import { InlineResponse20013 } from '../types';
// @ts-ignore
import { InlineResponse20037 } from '../types';
// @ts-ignore
import { InlineResponse20038 } from '../types';
/**
 * TaskTemplatesApi - axios parameter creator
 * @export
 */
export const TaskTemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the complete task template record for a single task template.
         * @summary Get a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskTemplate: async (taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskTemplateGid' is not null or undefined
            assertParamExists('getTaskTemplate', 'taskTemplateGid', taskTemplateGid)
            const localVarPath = `/task_templates/{task_template_gid}`
                .replace(`{${"task_template_gid"}}`, encodeURIComponent(String(taskTemplateGid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
         * @summary Get multiple task templates
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {string} [project] The project to filter task templates on.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskTemplates: async (optPretty?: boolean, limit?: number, offset?: string, project?: string, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/task_templates`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

            // authentication personalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates and returns a job that will asynchronously handle the task instantiation.
         * @summary Instantiate a task from a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {InlineObject51} [inlineObject51] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instantiateTask: async (taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>, inlineObject51?: InlineObject51, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskTemplateGid' is not null or undefined
            assertParamExists('instantiateTask', 'taskTemplateGid', taskTemplateGid)
            const localVarPath = `/task_templates/{task_template_gid}/instantiateTask`
                .replace(`{${"task_template_gid"}}`, encodeURIComponent(String(taskTemplateGid)));
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

            if (optPretty !== undefined) {
                localVarQueryParameter['opt_pretty'] = optPretty;
            }

            if (optFields) {
                localVarQueryParameter['opt_fields'] = optFields.join(COLLECTION_FORMATS.csv);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject51, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskTemplatesApi - functional programming interface
 * @export
 */
export const TaskTemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskTemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the complete task template record for a single task template.
         * @summary Get a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaskTemplate(taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20038>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTaskTemplate(taskTemplateGid, optPretty, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
         * @summary Get multiple task templates
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {string} [project] The project to filter task templates on.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaskTemplates(optPretty?: boolean, limit?: number, offset?: string, project?: string, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20037>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTaskTemplates(optPretty, limit, offset, project, optFields, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates and returns a job that will asynchronously handle the task instantiation.
         * @summary Instantiate a task from a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {InlineObject51} [inlineObject51] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async instantiateTask(taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>, inlineObject51?: InlineObject51, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20013>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.instantiateTask(taskTemplateGid, optPretty, optFields, inlineObject51, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskTemplatesApi - factory interface
 * @export
 */
export const TaskTemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskTemplatesApiFp(configuration)
    return {
        /**
         * Returns the complete task template record for a single task template.
         * @summary Get a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskTemplate(taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options?: any): AxiosPromise<InlineResponse20038> {
            return localVarFp.getTaskTemplate(taskTemplateGid, optPretty, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
         * @summary Get multiple task templates
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
         * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
         * @param {string} [project] The project to filter task templates on.
         * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaskTemplates(optPretty?: boolean, limit?: number, offset?: string, project?: string, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options?: any): AxiosPromise<InlineResponse20037> {
            return localVarFp.getTaskTemplates(optPretty, limit, offset, project, optFields, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates and returns a job that will asynchronously handle the task instantiation.
         * @summary Instantiate a task from a task template
         * @param {string} taskTemplateGid Globally unique identifier for the task template.
         * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
         * @param {Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
         * @param {InlineObject51} [inlineObject51] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        instantiateTask(taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>, inlineObject51?: InlineObject51, options?: any): AxiosPromise<InlineResponse20013> {
            return localVarFp.instantiateTask(taskTemplateGid, optPretty, optFields, inlineObject51, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskTemplatesApi - object-oriented interface
 * @export
 * @class TaskTemplatesApi
 * @extends {BaseAPI}
 */
export class TaskTemplatesApi extends BaseAPI {
    /**
     * Returns the complete task template record for a single task template.
     * @summary Get a task template
     * @param {string} taskTemplateGid Globally unique identifier for the task template.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApi
     */
    public getTaskTemplate(taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).getTaskTemplate(taskTemplateGid, optPretty, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the compact task template records for some filtered set of task templates. You must specify a `project`
     * @summary Get multiple task templates
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {number} [limit] Results per page. The number of objects to return per page. The value must be between 1 and 100.
     * @param {string} [offset] Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. \&#39;Note: You can only pass in an offset that was returned to you via a previously paginated request.\&#39;
     * @param {string} [project] The project to filter task templates on.
     * @param {Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApi
     */
    public getTaskTemplates(optPretty?: boolean, limit?: number, offset?: string, project?: string, optFields?: Array<'created_at' | 'created_by' | 'name' | 'project' | 'template'>, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).getTaskTemplates(optPretty, limit, offset, project, optFields, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates and returns a job that will asynchronously handle the task instantiation.
     * @summary Instantiate a task from a task template
     * @param {string} taskTemplateGid Globally unique identifier for the task template.
     * @param {boolean} [optPretty] Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     * @param {Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>} [optFields] This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
     * @param {InlineObject51} [inlineObject51] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskTemplatesApi
     */
    public instantiateTask(taskTemplateGid: string, optPretty?: boolean, optFields?: Array<'new_project' | 'new_project.name' | 'new_project_template' | 'new_project_template.name' | 'new_task' | 'new_task.created_by' | 'new_task.name' | 'new_task.resource_subtype' | 'new_task_template' | 'new_task_template.name' | 'resource_subtype' | 'status'>, inlineObject51?: InlineObject51, options?: AxiosRequestConfig) {
        return TaskTemplatesApiFp(this.configuration).instantiateTask(taskTemplateGid, optPretty, optFields, inlineObject51, options).then((request) => request(this.axios, this.basePath));
    }
}