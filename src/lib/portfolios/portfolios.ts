import {
    Configuration,
    ConfigurationParameters,
    InlineObject17,
    InlineObject18,
    InlineObject19,
    InlineObject20,
    InlineObject21,
    InlineObject22,
    InlineObject23,
    InlineObject24,
    PortfoliosApi,
} from '../asanaClient'

export class Portfolios {
    readonly portfoliosApi: PortfoliosApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.portfoliosApi = new PortfoliosApi(config)
    }

    async addCustomFieldSettingForPortfolio(
        portfolioGid: string,
        inlineObject21: InlineObject21,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addCustomFieldSettingForPortfolio(
            portfolioGid,
            inlineObject21,
            optPretty,
            options,
        )
        return res.data.data
    }

    async addItemForPortfolio(
        portfolioGid: string,
        inlineObject19: InlineObject19,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addItemForPortfolio(
            portfolioGid,
            inlineObject19,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async addMembersForPortfolio(
        portfolioGid: string,
        inlineObject23: InlineObject23,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.addMembersForPortfolio(
            portfolioGid,
            inlineObject23,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async createPortfolio(
        inlineObject17: InlineObject17,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.createPortfolio(
            inlineObject17,
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
        inlineObject22: InlineObject22,
        optPretty?: boolean,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeCustomFieldSettingForPortfolio(
            portfolioGid,
            inlineObject22,
            optPretty,
            options,
        )
        return res.data.data
    }

    async removeItemForPortfolio(
        portfolioGid: string,
        items: InlineObject20,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeItemForPortfolio(
            portfolioGid,
            items,
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async removeMembersForPortfolio(
        portfolioGid: string,
        members: InlineObject24,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.removeMembersForPortfolio(
            portfolioGid,
            members,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async updatePortfolio(
        portfolioGid: string,
        inlineObject18: InlineObject18,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfoliosApi.updatePortfolio(
            portfolioGid,
            inlineObject18,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }
}
