import { Configuration, ConfigurationParameters, TeamMembershipsApi } from '../asanaClient'

export type TeamMembershipOptionFields = Array<
    | 'is_admin'
    | 'is_guest'
    | 'is_limited_access'
    | 'offset'
    | 'path'
    | 'team'
    | 'team.name'
    | 'uri'
    | 'user'
    | 'user.name'
>

export class TeamMemberships {
    readonly teamMembershipsApi: TeamMembershipsApi
    constructor(
        private readonly configuration: ConfigurationParameters,
        private readonly workspaceGid: string,
    ) {
        const config = new Configuration(this.configuration)
        this.teamMembershipsApi = new TeamMembershipsApi(config)
    }

    async getTeamMembership(
        teamMembershipGid: string,
        optPretty?: boolean,
        optFields?: Array<
            | 'is_admin'
            | 'is_guest'
            | 'is_limited_access'
            | 'team'
            | 'team.name'
            | 'user'
            | 'user.name'
        >,
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
        optFields?: TeamMembershipOptionFields,
        limit?: number,
        offset?: string,
        team?: string,
        user?: string,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMemberships(
            optPretty,
            limit,
            offset,
            team,
            user,
            this.workspaceGid,
            optFields,
            options,
        )
        return res.data.data
    }

    async getTeamMembershipsForTeam(
        teamGid: string,
        optPretty?: boolean,
        optFields?: TeamMembershipOptionFields,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMembershipsForTeam(
            teamGid,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }

    async getTeamMembershipsForUser(
        userGid: string,
        optPretty?: boolean,
        optFields?: TeamMembershipOptionFields,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.teamMembershipsApi.getTeamMembershipsForUser(
            userGid,
            this.workspaceGid,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }
}
