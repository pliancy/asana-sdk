import * as AsanaClient from './asanaClient'

export class Asana {
    readonly attachments: AsanaClient.AttachmentsApi

    readonly auditLog: AsanaClient.AuditLogAPIApi

    readonly batch: AsanaClient.BatchAPIApi

    readonly customFieldSettings: AsanaClient.CustomFieldSettingsApi

    readonly customFields: AsanaClient.CustomFieldsApi

    readonly events: AsanaClient.EventsApi

    readonly goals: AsanaClient.GoalsApi

    readonly jobs: AsanaClient.JobsApi

    readonly organizationExports: AsanaClient.OrganizationExportsApi

    readonly portfolioMemberships: AsanaClient.PortfolioMembershipsApi

    readonly portfolios: AsanaClient.PortfoliosApi

    readonly projectMemberships: AsanaClient.ProjectMembershipsApi

    readonly projectStatuse: AsanaClient.ProjectStatusesApi

    readonly projects: AsanaClient.ProjectsApi

    readonly sections: AsanaClient.SectionsApi

    readonly stories: AsanaClient.StoriesApi

    readonly tags: AsanaClient.TagsApi

    readonly tasks: AsanaClient.TasksApi

    readonly teamMemberships: AsanaClient.TeamMembershipsApi

    readonly teams: AsanaClient.TeamsApi

    readonly timePeriods: AsanaClient.TimePeriodsApi

    readonly typeahead: AsanaClient.TypeaheadApi

    readonly userTaskLists: AsanaClient.UserTaskListsApi

    readonly users: AsanaClient.UsersApi

    readonly webhook: AsanaClient.WebhooksApi

    readonly workspaceMemberships: AsanaClient.WorkspaceMembershipsApi

    readonly workspaces: AsanaClient.WorkspacesApi

    constructor(private readonly configuration: AsanaClient.ConfigurationParameters) {
        const config = new AsanaClient.Configuration(this.configuration)

        this.attachments = new AsanaClient.AttachmentsApi(config)

        this.auditLog = new AsanaClient.AuditLogAPIApi(config)

        this.batch = new AsanaClient.BatchAPIApi(config)

        this.customFieldSettings = new AsanaClient.CustomFieldSettingsApi(config)

        this.customFields = new AsanaClient.CustomFieldsApi(config)

        this.events = new AsanaClient.EventsApi(config)

        this.goals = new AsanaClient.GoalsApi(config)

        this.jobs = new AsanaClient.JobsApi(config)

        this.organizationExports = new AsanaClient.OrganizationExportsApi(config)

        this.portfolioMemberships = new AsanaClient.PortfolioMembershipsApi(config)

        this.portfolios = new AsanaClient.PortfoliosApi(config)

        this.projectMemberships = new AsanaClient.ProjectMembershipsApi(config)

        this.projectStatuse = new AsanaClient.ProjectStatusesApi(config)

        this.projects = new AsanaClient.ProjectsApi(config)

        this.sections = new AsanaClient.SectionsApi(config)

        this.stories = new AsanaClient.StoriesApi(config)

        this.tags = new AsanaClient.TagsApi(config)

        this.tasks = new AsanaClient.TasksApi(config)

        this.teamMemberships = new AsanaClient.TeamMembershipsApi(config)

        this.teams = new AsanaClient.TeamsApi(config)

        this.timePeriods = new AsanaClient.TimePeriodsApi(config)

        this.typeahead = new AsanaClient.TypeaheadApi(config)

        this.userTaskLists = new AsanaClient.UserTaskListsApi(config)

        this.users = new AsanaClient.UsersApi(config)

        this.webhook = new AsanaClient.WebhooksApi(config)

        this.workspaceMemberships = new AsanaClient.WorkspaceMembershipsApi(config)

        this.workspaces = new AsanaClient.WorkspacesApi(config)
    }
}
