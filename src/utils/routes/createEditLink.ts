import { ObjectTypes } from "../interfaces/objects";

export const createEditLink: (
  mode: "edit" | "new",
  objectId: string | number,
  type: ObjectTypes
) => string = (mode, objectId, type) => {
  return `/ads/new-object?mode=${mode}&object=${objectId}&type=${type}`;
};
