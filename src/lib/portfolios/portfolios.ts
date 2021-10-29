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
    RemoveMembersRequest,
} from '../asanaClient'

export class Portfolios {
    readonly portfoliosApi: PortfoliosApi
    constructor(private readonly configuration: ConfigurationParameters) {
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
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addItemForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async addMembersForPortfolio(
        portfolioGid: string,
        data: AddMembersRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
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
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.createPortfolio(
            { data },
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async deletePortfolio(
        portfolioGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.deletePortfolio(
            portfolioGid,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async getItemsForPortfolio(
        portfolioGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getItemsForPortfolio(
            portfolioGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getPortfolio(
        portfolioGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
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

    async getPortfoliosByName(
        portfolioName: string,
        workspace: string,
        owner: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getPortfolios(
            workspace,
            owner,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data?.find((e) => e.name === portfolioName)
    }

    async getPortfolios(
        workspace: string,
        owner: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfoliosApi.getPortfolios(
            workspace,
            owner,
            optPretty,
            optFields,
            limit,
            offset,
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
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeItemForPortfolio(
            portfolioGid,
            { data },
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async removeMembersForPortfolio(
        portfolioGid: string,
        data: RemoveMembersRequest,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeMembersForPortfolio(
            portfolioGid,
            { data },
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
        optFields?: Array<string>,
        options?: any,
    ) {
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
