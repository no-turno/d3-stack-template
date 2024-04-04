import { treatyClient } from "../../server/index";

export const apiClient = treatyClient();

export type Api = typeof apiClient;
