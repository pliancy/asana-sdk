declare module 'asana' {
    export interface Client {
        portfolio: PortfolioClass
    }
}

import { resources } from 'asana'

interface Resource extends resources.Resource {
    Portfolio: PortfolioClass
}

interface Portfolio extends Resource {
    created_at: string
    due_on: string
    permalink_url: string
    start_on: string
    custom_field_settings: CustomFieldSettings[]
    member: Resource[]
    owner: Resource[]
    workspace: Resource[]
}

interface CustomFieldSettings extends Resource {
    customField: CustomField
    is_important: boolean
    parent: Resource
    project: Resource
}

interface CustomField extends resources.CustomField {
    currency_code: string
    custom_label: string
    custom_label_position: string
    description: string
    display_value: string
    format: string
    has_notifications_enabled: boolean
    is_global_to_workspace: boolean
    number_value: number
    precision: number
    text_value: string
    type: string
}

interface Create {
    color?: string
    members: string[]
    name: string
    workspace: string
}

export interface PortfolioClass {
    create(params: Create, dispatchOptions?: any): Promise<Portfolio>

    findById(gid: string, params: any, dispatchOptions?: any): Promise<Portfolio>

    update(gid: string, data: Create, dispatchOptions?: any): Promise<Portfolio>

    delete(gid: string, dispatchOptions?: any): Promise<any>

    findAll(
        params?: { workspace: string; owner: string },
        dispatchOptions?: any,
    ): Promise<Portfolio[]>

    getItems(
        guid: string,
        params?: { opt_pretty?: boolean; opt_field?: boolean; limt?: number; offset?: string },
        dispatchOptions?: any,
    ): Promise<Resource>

    addItem(
        guid: string,
        data: {
            insert_after?: string
            instert_before?: string
            item: string
            dispatchOptions?: any
        },
    ): Promise<any>

    removeItem(guid: string, data: { item: string }, dispatchOptions?: any): Promise<any>

    addCustomFieldSetting(
        guid: string,
        data: {
            custom_field: string
            insert_after?: string
            instert_before?: string
            is_important?: boolean
        },
        dispatchOptions?: any,
    ): Promise<any>

    addCustomFieldSetting(
        guid: string,
        data: {
            custom_field: string
        },
        dispatchOptions?: any,
    ): Promise<any>

    addMembers(guid: string, data: { members: string[] }): Promise<any>

    removeMembers(guid: string, data: { members: string[] }): Promise<any>
}
