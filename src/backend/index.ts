import { changeStatus } from "./leads/changeLeadStatus";
import { saveLead } from "./leads/saveLead";
import { viewLeads } from "./leads/viewLeads";


export default class Backend {
    static readonly leads = {
        save: saveLead,
        view: viewLeads,
        change: changeStatus
    }
}