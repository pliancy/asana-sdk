import { Configuration, ConfigurationParameters, TeamMembershipsApi } from '../asanaClient'

export class TeamMemberships {
    readonly teamMembershipsApi: TeamMembershipsApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.teamMembershipsApi = new TeamMembershipsApi(config)
    }

    async getTeamMembership(
        teamMembershipGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMembership(
            teamMembershipGid,
            optPretty,
            optFields,
            options,
        )

        return res.data.data
    }

    async getTeamMemberships(
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        team?: string,
        user?: string,
        workspace?: string,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMemberships(
            optPretty,
            optFields,
            limit,
            offset,
            team,
            user,
            workspace,
            options,
        )
        return res.data.data
    }

    async getTeamMembershipsForTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMembershipsForTeam(
            teamGid,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }

    async getTeamMembershipsForUser(
        userGid: string,
        workspace: string,
        optPretty?: boolean,
        optFields?: Array<string>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMembershipsForUser(
            userGid,
            workspace,
            optPretty,
            optFields,
            limit,
            offset,
            options,
        )
        return res.data.data
    }
}
