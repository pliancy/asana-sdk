import { Configuration, ConfigurationParameters, PortfolioMembershipsApi } from '../asanaClient'

export class PortfolioMemberships {
    readonly portfolioMembershipsApi: PortfolioMembershipsApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.portfolioMembershipsApi = new PortfolioMembershipsApi(config)
    }

    async getPortfolioMembership(
        portfolioMembershipGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.portfolioMembershipsApi.getPortfolioMembership(
            portfolioMembershipGid,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async getPortfolioMemberships(
        portfolio?: string,
        workspace?: string,
        user?: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfolioMembershipsApi.getPortfolioMemberships(
            portfolio,
            workspace,
            user,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getPortfolioMembershipsForPortfolio(
        portfolioGid: string,
        user?: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.portfolioMembershipsApi.getPortfolioMembershipsForPortfolio(
            portfolioGid,
            user,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }
}
