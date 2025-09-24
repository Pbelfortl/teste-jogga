import { changeStatus } from "./leads/changeLeadStatus";
import { saveLead } from "./leads/saveLead";
import { viewLeads, viewLeadsByDate, viewLeadsByStatus, viewLeadsByName} from "./leads/viewLeads";


export default class Backend {
    static readonly leads = {
        save: saveLead,
        view: viewLeads,
        viewByDate: viewLeadsByDate,
        viewByStatus: viewLeadsByStatus,
        viewByName: viewLeadsByName,
        change: changeStatus
    }
}