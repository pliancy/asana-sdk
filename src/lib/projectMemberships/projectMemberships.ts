import { Configuration, ConfigurationParameters, ProjectMembershipsApi } from '../asanaClient'

export class ProjectMemberships {
    readonly projectMembershipsApi: ProjectMembershipsApi
    constructor(private readonly configuration: ConfigurationParameters) {
        const config = new Configuration(this.configuration)
        this.projectMembershipsApi = new ProjectMembershipsApi(config)
    }

    async getProjectMembership(
        projectMembershipGid: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        options?: any,
    ) {
        const res = await this.projectMembershipsApi.getProjectMembership(
            projectMembershipGid,
            optPretty,
            optFields,
            options,
        )
        return res.data.data
    }

    async getProjectMembershipsForProject(
        projectGid: string,
        user?: string,
        optPretty?: boolean,
        optFields?: Array<any>,
        limit?: number,
        offset?: string,
        options?: any,
    ) {
        const res = await this.projectMembershipsApi.getProjectMembershipsForProject(
            projectGid,
            user,
            optPretty,
            limit,
            offset,
            optFields,
            options,
        )
        return res.data.data
    }
}
