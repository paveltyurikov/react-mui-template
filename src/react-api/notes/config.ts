// QueryKey getters
import { INoteFilters } from "~/types/notes";

export const QUERY_KEYS = {
  create: () => ["note", "create"],
  list: (filters?: INoteFilters) => ["notes", "list", filters || {}],
  details: (id: string) => ["note", "details", id],
  update: (id: string) => ["note", "update", id],
  delete: (id: string) => ["note", "delete", id],
};
