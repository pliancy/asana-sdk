import {
    AddCustomFieldSettingRequest,
    AddMembersRequest,
    Configuration,
    ConfigurationParameters,
    PortfolioAddItemRequest,
    PortfolioRemoveItemRequest,
    PortfolioRequest,
    PortfoliosApi,
    RemoveCustomFieldSettingRequest,
} from '../asanaClient'

export class Portfolios {
    readonly portfoliosApi: PortfoliosApi
    constructor(
        private readonly configuration: ConfigurationParameters,
        private readonly workspaceGid: string,
        private readonly ownerGid: string,
    ) {
        const config = new Configuration(this.configuration)
        this.portfoliosApi = new PortfoliosApi(config)
    }

    async addCustomFieldSettingForPortfolio(
        portfolioGid: string,
        data: AddCustomFieldSettingRequest,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addCustomFieldSettingForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            options,
        )
        return res.data.data
    }

    async addItemForPortfolio(
        portfolioGid: string,
        data: PortfolioAddItemRequest,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addItemForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            options,
        )
        return res.data.data
    }

    async addMembersForPortfolio(
        portfolioGid: string,
        data: AddMembersRequest,
        optPretty?: boolean,
        optFields?: Array<any>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addMembersForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async createPortfolio(
        data: PortfolioRequest,
        optPretty?: boolean,
        optFields?: Array<any>,
        options?: any,
    ) {
        if (!data.workspace) data.workspace = this.workspaceGid
        const res = await this.portfoliosApi.createPortfolio(
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async deletePortfolio(portfolioGid: string, optPretty?: boolean, options?: any) {
        const res = await this.portfoliosApi.deletePortfolio(portfolioGid, optPretty, options)
        return res.data.data
    }

    async getItemsForPortfolio(
        portfolioGid: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getItemsForPortfolio(
            portfolioGid,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }

    async getPortfolio(
        portfolioGid: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getPortfolio(
            portfolioGid,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async getPortfolioByName(
        portfolioName: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getPortfolios(
            this.workspaceGid,
            optPretty,
            limit,
            offset,
            this.ownerGid,
            optFields,
            options,
        )
        return res.data.data?.find((e) => e.name === portfolioName)
    }

    async getPortfolios(
        optPretty?: boolean,
        optFields?: Array<
            | 'color'
            | 'created_at'
            | 'created_by'
            | 'created_by.name'
            | 'current_status_update'
            | 'current_status_update.resource_subtype'
            | 'current_status_update.title'
            | 'custom_field_settings'
            | 'custom_field_settings.custom_field'
            | 'custom_field_settings.custom_field.asana_created_field'
            | 'custom_field_settings.custom_field.created_by'
            | 'custom_field_settings.custom_field.created_by.name'
            | 'custom_field_settings.custom_field.currency_code'
            | 'custom_field_settings.custom_field.custom_label'
            | 'custom_field_settings.custom_field.custom_label_position'
            | 'custom_field_settings.custom_field.date_value'
            | 'custom_field_settings.custom_field.date_value.date'
            | 'custom_field_settings.custom_field.date_value.date_time'
            | 'custom_field_settings.custom_field.description'
            | 'custom_field_settings.custom_field.display_value'
            | 'custom_field_settings.custom_field.enabled'
            | 'custom_field_settings.custom_field.enum_options'
            | 'custom_field_settings.custom_field.enum_options.color'
            | 'custom_field_settings.custom_field.enum_options.enabled'
            | 'custom_field_settings.custom_field.enum_options.name'
            | 'custom_field_settings.custom_field.enum_value'
            | 'custom_field_settings.custom_field.enum_value.color'
            | 'custom_field_settings.custom_field.enum_value.enabled'
            | 'custom_field_settings.custom_field.enum_value.name'
            | 'custom_field_settings.custom_field.format'
            | 'custom_field_settings.custom_field.has_notifications_enabled'
            | 'custom_field_settings.custom_field.is_formula_field'
            | 'custom_field_settings.custom_field.is_global_to_workspace'
            | 'custom_field_settings.custom_field.is_value_read_only'
            | 'custom_field_settings.custom_field.multi_enum_values'
            | 'custom_field_settings.custom_field.multi_enum_values.color'
            | 'custom_field_settings.custom_field.multi_enum_values.enabled'
            | 'custom_field_settings.custom_field.multi_enum_values.name'
            | 'custom_field_settings.custom_field.name'
            | 'custom_field_settings.custom_field.number_value'
            | 'custom_field_settings.custom_field.people_value'
            | 'custom_field_settings.custom_field.people_value.name'
            | 'custom_field_settings.custom_field.precision'
            | 'custom_field_settings.custom_field.resource_subtype'
            | 'custom_field_settings.custom_field.text_value'
            | 'custom_field_settings.custom_field.type'
            | 'custom_field_settings.is_important'
            | 'custom_field_settings.parent'
            | 'custom_field_settings.parent.name'
            | 'custom_field_settings.project'
            | 'custom_field_settings.project.name'
            | 'custom_fields'
            | 'custom_fields.date_value'
            | 'custom_fields.date_value.date'
            | 'custom_fields.date_value.date_time'
            | 'custom_fields.display_value'
            | 'custom_fields.enabled'
            | 'custom_fields.enum_options'
            | 'custom_fields.enum_options.color'
            | 'custom_fields.enum_options.enabled'
            | 'custom_fields.enum_options.name'
            | 'custom_fields.enum_value'
            | 'custom_fields.enum_value.color'
            | 'custom_fields.enum_value.enabled'
            | 'custom_fields.enum_value.name'
            | 'custom_fields.is_formula_field'
            | 'custom_fields.multi_enum_values'
            | 'custom_fields.multi_enum_values.color'
            | 'custom_fields.multi_enum_values.enabled'
            | 'custom_fields.multi_enum_values.name'
            | 'custom_fields.name'
            | 'custom_fields.number_value'
            | 'custom_fields.resource_subtype'
            | 'custom_fields.text_value'
            | 'custom_fields.type'
            | 'due_on'
            | 'members'
            | 'members.name'
            | 'name'
            | 'offset'
            | 'owner'
            | 'owner.name'
            | 'path'
            | 'permalink_url'
            | 'project_templates'
            | 'project_templates.name'
            | 'public'
            | 'start_on'
            | 'uri'
            | 'workspace'
            | 'workspace.name'
        >,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getPortfolios(
            this.workspaceGid,
            optPretty,
            limit,
            offset,
            this.ownerGid,
            optFields,
            options,
        )
        return res.data.data
    }

    async removeCustomFieldSettingForPortfolio(
        portfolioGid: string,
        data: RemoveCustomFieldSettingRequest,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeCustomFieldSettingForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            options,
        )
        return res.data.data
    }

    async removeItemForPortfolio(
        portfolioGid: string,
        data: PortfolioRemoveItemRequest,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeItemForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            options,
        )

        return res.data.data
    }

    async removeMembersForPortfolio(
        portfolioGid: string,
        userGids: string[],
        optPretty?: boolean,
        optFields?: Array<
            | 'color'
            | 'created_at'
            | 'created_by'
            | 'created_by.name'
            | 'current_status_update'
            | 'current_status_update.resource_subtype'
            | 'current_status_update.title'
            | 'custom_field_settings'
            | 'custom_field_settings.custom_field'
            | 'custom_field_settings.custom_field.asana_created_field'
            | 'custom_field_settings.custom_field.created_by'
            | 'custom_field_settings.custom_field.created_by.name'
            | 'custom_field_settings.custom_field.currency_code'
            | 'custom_field_settings.custom_field.custom_label'
            | 'custom_field_settings.custom_field.custom_label_position'
            | 'custom_field_settings.custom_field.date_value'
            | 'custom_field_settings.custom_field.date_value.date'
            | 'custom_field_settings.custom_field.date_value.date_time'
            | 'custom_field_settings.custom_field.description'
            | 'custom_field_settings.custom_field.display_value'
            | 'custom_field_settings.custom_field.enabled'
            | 'custom_field_settings.custom_field.enum_options'
            | 'custom_field_settings.custom_field.enum_options.color'
            | 'custom_field_settings.custom_field.enum_options.enabled'
            | 'custom_field_settings.custom_field.enum_options.name'
            | 'custom_field_settings.custom_field.enum_value'
            | 'custom_field_settings.custom_field.enum_value.color'
            | 'custom_field_settings.custom_field.enum_value.enabled'
            | 'custom_field_settings.custom_field.enum_value.name'
            | 'custom_field_settings.custom_field.format'
            | 'custom_field_settings.custom_field.has_notifications_enabled'
            | 'custom_field_settings.custom_field.is_formula_field'
            | 'custom_field_settings.custom_field.is_global_to_workspace'
            | 'custom_field_settings.custom_field.is_value_read_only'
            | 'custom_field_settings.custom_field.multi_enum_values'
            | 'custom_field_settings.custom_field.multi_enum_values.color'
            | 'custom_field_settings.custom_field.multi_enum_values.enabled'
            | 'custom_field_settings.custom_field.multi_enum_values.name'
            | 'custom_field_settings.custom_field.name'
            | 'custom_field_settings.custom_field.number_value'
            | 'custom_field_settings.custom_field.people_value'
            | 'custom_field_settings.custom_field.people_value.name'
            | 'custom_field_settings.custom_field.precision'
            | 'custom_field_settings.custom_field.resource_subtype'
            | 'custom_field_settings.custom_field.text_value'
            | 'custom_field_settings.custom_field.type'
            | 'custom_field_settings.is_important'
            | 'custom_field_settings.parent'
            | 'custom_field_settings.parent.name'
            | 'custom_field_settings.project'
            | 'custom_field_settings.project.name'
            | 'custom_fields'
            | 'custom_fields.date_value'
            | 'custom_fields.date_value.date'
            | 'custom_fields.date_value.date_time'
            | 'custom_fields.display_value'
            | 'custom_fields.enabled'
            | 'custom_fields.enum_options'
            | 'custom_fields.enum_options.color'
            | 'custom_fields.enum_options.enabled'
            | 'custom_fields.enum_options.name'
            | 'custom_fields.enum_value'
            | 'custom_fields.enum_value.color'
            | 'custom_fields.enum_value.enabled'
            | 'custom_fields.enum_value.name'
            | 'custom_fields.is_formula_field'
            | 'custom_fields.multi_enum_values'
            | 'custom_fields.multi_enum_values.color'
            | 'custom_fields.multi_enum_values.enabled'
            | 'custom_fields.multi_enum_values.name'
            | 'custom_fields.name'
            | 'custom_fields.number_value'
            | 'custom_fields.resource_subtype'
            | 'custom_fields.text_value'
            | 'custom_fields.type'
            | 'due_on'
            | 'members'
            | 'members.name'
            | 'name'
            | 'owner'
            | 'owner.name'
            | 'permalink_url'
            | 'project_templates'
            | 'project_templates.name'
            | 'public'
            | 'start_on'
            | 'workspace'
            | 'workspace.name'
        >,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeMembersForPortfolio(
            portfolioGid,
            { data: { members: `${userGids}` } },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async updatePortfolio(
        portfolioGid: string,
        data: PortfolioRequest,
        optPretty?: boolean,
        optFields?: Array<
            | 'color'
            | 'created_at'
            | 'created_by'
            | 'created_by.name'
            | 'current_status_update'
            | 'current_status_update.resource_subtype'
            | 'current_status_update.title'
            | 'custom_field_settings'
            | 'custom_field_settings.custom_field'
            | 'custom_field_settings.custom_field.asana_created_field'
            | 'custom_field_settings.custom_field.created_by'
            | 'custom_field_settings.custom_field.created_by.name'
            | 'custom_field_settings.custom_field.currency_code'
            | 'custom_field_settings.custom_field.custom_label'
            | 'custom_field_settings.custom_field.custom_label_position'
            | 'custom_field_settings.custom_field.date_value'
            | 'custom_field_settings.custom_field.date_value.date'
            | 'custom_field_settings.custom_field.date_value.date_time'
            | 'custom_field_settings.custom_field.description'
            | 'custom_field_settings.custom_field.display_value'
            | 'custom_field_settings.custom_field.enabled'
            | 'custom_field_settings.custom_field.enum_options'
            | 'custom_field_settings.custom_field.enum_options.color'
            | 'custom_field_settings.custom_field.enum_options.enabled'
            | 'custom_field_settings.custom_field.enum_options.name'
            | 'custom_field_settings.custom_field.enum_value'
            | 'custom_field_settings.custom_field.enum_value.color'
            | 'custom_field_settings.custom_field.enum_value.enabled'
            | 'custom_field_settings.custom_field.enum_value.name'
            | 'custom_field_settings.custom_field.format'
            | 'custom_field_settings.custom_field.has_notifications_enabled'
            | 'custom_field_settings.custom_field.is_formula_field'
            | 'custom_field_settings.custom_field.is_global_to_workspace'
            | 'custom_field_settings.custom_field.is_value_read_only'
            | 'custom_field_settings.custom_field.multi_enum_values'
            | 'custom_field_settings.custom_field.multi_enum_values.color'
            | 'custom_field_settings.custom_field.multi_enum_values.enabled'
            | 'custom_field_settings.custom_field.multi_enum_values.name'
            | 'custom_field_settings.custom_field.name'
            | 'custom_field_settings.custom_field.number_value'
            | 'custom_field_settings.custom_field.people_value'
            | 'custom_field_settings.custom_field.people_value.name'
            | 'custom_field_settings.custom_field.precision'
            | 'custom_field_settings.custom_field.resource_subtype'
            | 'custom_field_settings.custom_field.text_value'
            | 'custom_field_settings.custom_field.type'
            | 'custom_field_settings.is_important'
            | 'custom_field_settings.parent'
            | 'custom_field_settings.parent.name'
            | 'custom_field_settings.project'
            | 'custom_field_settings.project.name'
            | 'custom_fields'
            | 'custom_fields.date_value'
            | 'custom_fields.date_value.date'
            | 'custom_fields.date_value.date_time'
            | 'custom_fields.display_value'
            | 'custom_fields.enabled'
            | 'custom_fields.enum_options'
            | 'custom_fields.enum_options.color'
            | 'custom_fields.enum_options.enabled'
            | 'custom_fields.enum_options.name'
            | 'custom_fields.enum_value'
            | 'custom_fields.enum_value.color'
            | 'custom_fields.enum_value.enabled'
            | 'custom_fields.enum_value.name'
            | 'custom_fields.is_formula_field'
            | 'custom_fields.multi_enum_values'
            | 'custom_fields.multi_enum_values.color'
            | 'custom_fields.multi_enum_values.enabled'
            | 'custom_fields.multi_enum_values.name'
            | 'custom_fields.name'
            | 'custom_fields.number_value'
            | 'custom_fields.resource_subtype'
            | 'custom_fields.text_value'
            | 'custom_fields.type'
            | 'due_on'
            | 'members'
            | 'members.name'
            | 'name'
            | 'owner'
            | 'owner.name'
            | 'permalink_url'
            | 'project_templates'
            | 'project_templates.name'
            | 'public'
            | 'start_on'
            | 'workspace'
            | 'workspace.name'
        >,
        options?: any,
    ) {
        if (!data.workspace) data.workspace = this.workspaceGid
        const res = await this.portfoliosApi.updatePortfolio(
            portfolioGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }
}
