import { ObjectTypes } from "../interfaces/objects";

export const createEditLink: (
  mode: "edit" | "new",
  objectId: string | number,
  type: ObjectTypes,
  complex?: number
) => string = (mode, objectId, type, complex) => {
  return `/ads/new-object?mode=${mode}&object=${objectId}&type=${type}${
    complex ? `&complex=${complex}` : ""
  }`;
};
