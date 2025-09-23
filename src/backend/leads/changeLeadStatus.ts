import { changeLeadStatus } from "./leadsRepository";

export async function changeStatus(id: string, status: string) {
  
  return changeLeadStatus(Number(id), status as any);
}
