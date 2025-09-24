import { changeLeadStatus } from "./leadsRepository";

export async function changeStatus(id: number, status: string) {
  
  return changeLeadStatus(Number(id), status as any);
}
