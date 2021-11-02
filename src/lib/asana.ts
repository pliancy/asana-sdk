import {
    AttachmentsApi,
    AuditLogAPIApi,
    BatchAPIApi,
    Configuration,
    ConfigurationParameters,
    CustomFieldsApi,
    CustomFieldSettingsApi,
    EventsApi,
    GoalsApi,
    JobsApi,
    OrganizationExportsApi,
    ProjectStatusesApi,
    SectionsApi,
    StoriesApi,
    TagsApi,
    TasksApi,
    TimePeriodsApi,
    TypeaheadApi,
    UserTaskListsApi,
    WebhooksApi,
    WorkspaceMembershipsApi,
    WorkspacesApi,
} from './asanaClient'
import { PortfolioMemberships } from './portfolioMemberships/portfolioMemberships'
import { Portfolios } from './portfolios/portfolios'
import { ProjectMemberships } from './projectMemberships/projectMemberships'
import { Projects } from './projects/projects'
import { TeamMemberships } from './teamMemberships/teamMemberships'
import { Teams } from './teams/teams'
import { Users } from './users/users'

export class Asana {
    readonly attachments: AttachmentsApi

    readonly auditLog: AuditLogAPIApi

    readonly batch: BatchAPIApi

    readonly customFieldSettings: CustomFieldSettingsApi

    readonly customFields: CustomFieldsApi

    readonly events: EventsApi

    readonly goals: GoalsApi

    readonly jobs: JobsApi

    readonly organizationExports: OrganizationExportsApi

    readonly projectStatuse: ProjectStatusesApi

    readonly sections: SectionsApi

    readonly stories: StoriesApi

    readonly tags: TagsApi

    readonly tasks: TasksApi

    readonly timePeriods: TimePeriodsApi

    readonly typeahead: TypeaheadApi

    readonly userTaskLists: UserTaskListsApi

    readonly webhook: WebhooksApi

    readonly workspaceMemberships: WorkspaceMembershipsApi

    readonly workspaces: WorkspacesApi

    // Updated Classes - Updated / destrcutured to return the data property directly from the Asana Api
    readonly portfolios: Portfolios

    readonly portfolioMemberships: PortfolioMemberships

    readonly projects: Projects

    readonly projectMemberships: ProjectMemberships

    readonly teams: Teams

    readonly teamMemberships: TeamMemberships

    readonly users: Users

    constructor(
        private readonly configuration: ConfigurationParameters,
        private readonly workspaceGid: string,
        private readonly ownerGid: string,
    ) {
        const config = new Configuration(this.configuration)

        this.attachments = new AttachmentsApi(config)

        this.auditLog = new AuditLogAPIApi(config)

        this.batch = new BatchAPIApi(config)

        this.customFieldSettings = new CustomFieldSettingsApi(config)

        this.customFields = new CustomFieldsApi(config)

        this.events = new EventsApi(config)

        this.goals = new GoalsApi(config)

        this.jobs = new JobsApi(config)

        this.organizationExports = new OrganizationExportsApi(config)

        this.projectStatuse = new ProjectStatusesApi(config)

        this.sections = new SectionsApi(config)

        this.stories = new StoriesApi(config)

        this.tags = new TagsApi(config)

        this.tasks = new TasksApi(config)

        this.timePeriods = new TimePeriodsApi(config)

        this.typeahead = new TypeaheadApi(config)

        this.userTaskLists = new UserTaskListsApi(config)

        this.webhook = new WebhooksApi(config)

        this.workspaceMemberships = new WorkspaceMembershipsApi(config)

        this.workspaces = new WorkspacesApi(config)

        // Updated Classes

        this.portfolios = new Portfolios(config, this.workspaceGid, this.ownerGid)

        this.portfolioMemberships = new PortfolioMemberships(config, this.workspaceGid)

        this.projects = new Projects(config, this.workspaceGid)

        this.projectMemberships = new ProjectMemberships(config)

        this.teams = new Teams(config, this.workspaceGid)

        this.teamMemberships = new TeamMemberships(config, this.workspaceGid)

        this.users = new Users(config, this.workspaceGid)
    }
}
