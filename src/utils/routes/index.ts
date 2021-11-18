export const createHouseUrl = (id: number, type: string | null): string => '/' + (type || "all") + "/" + id
