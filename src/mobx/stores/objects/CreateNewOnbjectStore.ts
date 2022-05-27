import { makeAutoObservable } from "mobx";
import { CreateObjectApi } from "../../../api-new/create-object";
import {
  IGroup,
  IObjectType,
  IParamsState,
  ISection,
  ISubGroup,
  ISubSection,
} from "../../../api-new/create-object/types/store-types";

interface IParamsSettings {
  loaded: boolean;
  fetching: boolean;
  errorOnLoad: boolean;
  data: IParamsState;
}

class CreateNewObject {
  constructor() {
    makeAutoObservable(this);
  }

  params: IParamsSettings = {
    loaded: false,
    fetching: false,
    errorOnLoad: false,
    data: null,
  };

  fetchParams: () => void = async () => {
    try {
      this.params.fetching = true;
      const response = await CreateObjectApi.getObjectParams();

      let paramsData: Record<IObjectType, Array<ISection>> = {
        [IObjectType.house]: [],
        [IObjectType.land]: [],
        [IObjectType.residential_complex]: [],
        [IObjectType.apartment]: [],
      };

      response.data.results.forEach((paramItem) => {
        if (!paramItem.reality_object_param_subgroup) {
          return;
        }
        paramItem.type.forEach((type) => {
          if (
            paramsData[type.slug].find(
              (x) => x.name === paramItem.admin_section
            )
          ) {
            if (
              paramsData[type.slug]
                .find((x) => x.name === paramItem.admin_section)
                ?.subSections?.find(
                  (subSection) =>
                    subSection.sort === paramItem.admin_section_subsection
                )
            ) {
              if (
                paramsData[type.slug]
                  .find((x) => x.name === paramItem.admin_section)
                  ?.subSections.find(
                    (subSection) =>
                      subSection.sort === paramItem.admin_section_subsection
                  )
                  ?.groups?.find(
                    (group) =>
                      group.slug === paramItem.reality_object_param_group.slug
                  )
              ) {
                if (
                  paramsData[type.slug]
                    .find((x) => x.name === paramItem.admin_section)
                    ?.subSections.find(
                      (subSection) =>
                        subSection &&
                        subSection.sort === paramItem.admin_section_subsection
                    )
                    ?.groups.find(
                      (group) =>
                        group.slug === paramItem.reality_object_param_group.slug
                    )
                    ?.subGroups?.find(
                      (subGroup) =>
                        subGroup.slug ===
                        paramItem.reality_object_param_subgroup.slug
                    )
                ) {
                  if (
                    paramsData[type.slug]
                      .find((x) => x.name === paramItem.admin_section)
                      ?.subSections.find(
                        (subSection) =>
                          subSection.sort === paramItem.admin_section_subsection
                      )
                      ?.groups.find(
                        (group) =>
                          group.slug ===
                          paramItem.reality_object_param_group.slug
                      )
                      ?.subGroups.find(
                        (subGroup) =>
                          subGroup.slug ===
                          paramItem.reality_object_param_subgroup.slug
                      )
                  ) {
                    if (
                      paramsData[type.slug]
                        .find((x) => x.name === paramItem.admin_section)
                        ?.subSections.find(
                          (subSection) =>
                            subSection.sort ===
                            paramItem.admin_section_subsection
                        )
                        ?.groups.find(
                          (group) =>
                            group.slug ===
                            paramItem.reality_object_param_group.slug
                        )
                        ?.subGroups.find(
                          (subGroup) =>
                            subGroup.slug ===
                            paramItem.reality_object_param_subgroup.slug
                        )?.fields
                    ) {
                      paramsData = {
                        ...paramsData,
                        [type.slug]: paramsData[type.slug].map(
                          (el: ISection) => {
                            if (el.name === paramItem.admin_section) {
                              return {
                                ...el,
                                subSections: el.subSections.map(
                                  (subSection: ISubSection) => {
                                    if (
                                      subSection.sort ===
                                      paramItem.admin_section_subsection
                                    ) {
                                      return {
                                        ...subSection,
                                        groups: subSection.groups.map(
                                          (group: IGroup) => {
                                            if (
                                              group.slug ===
                                              paramItem
                                                .reality_object_param_group.slug
                                            ) {
                                              return {
                                                ...group,
                                                subGroups: group.subGroups.map(
                                                  (subGroup: ISubGroup) => {
                                                    if (
                                                      subGroup.slug ===
                                                      paramItem
                                                        .reality_object_param_subgroup
                                                        .slug
                                                    ) {
                                                      return {
                                                        ...subGroup,
                                                        fields: [
                                                          ...subGroup.fields,
                                                          {
                                                            sort: paramItem.sort,
                                                            name: paramItem.name_rus,
                                                            slug: paramItem.sort,
                                                            admin_required:
                                                              paramItem.admin_required,
                                                            defaultValue:
                                                              undefined,
                                                            is_visible:
                                                              paramItem.is_visible,
                                                          },
                                                        ],
                                                      };
                                                    } else return subGroup;
                                                  }
                                                ),
                                              };
                                            } else return group;
                                          }
                                        ),
                                      };
                                    } else return el;
                                  }
                                ),
                              };
                            } else return el;
                          }
                        ),
                      };
                    } else {
                      paramsData = {
                        ...paramsData,
                        [type.slug]: paramsData[type.slug].map(
                          (el: ISection) => {
                            if (el.name === paramItem.admin_section) {
                              return {
                                ...el,
                                subSections: el.subSections.map(
                                  (subSection: ISubSection) => {
                                    if (
                                      subSection.sort ===
                                      paramItem.admin_section_subsection
                                    ) {
                                      return {
                                        ...subSection,
                                        groups: subSection.groups.map(
                                          (group: IGroup) => {
                                            if (
                                              group.slug ===
                                              paramItem
                                                .reality_object_param_group.slug
                                            ) {
                                              return {
                                                ...group,
                                                subGroups: group.subGroups.map(
                                                  (subGroup: ISubGroup) => {
                                                    if (
                                                      subGroup.slug ===
                                                      paramItem
                                                        .reality_object_param_subgroup
                                                        .slug
                                                    ) {
                                                      return {
                                                        ...subGroup,
                                                        fields: [
                                                          ...subGroup.fields,
                                                          {
                                                            sort: paramItem.sort,
                                                            name: paramItem.name_rus,
                                                            slug: paramItem.sort,
                                                            admin_required:
                                                              paramItem.admin_required,
                                                            defaultValue:
                                                              undefined,
                                                            is_visible:
                                                              paramItem.is_visible,
                                                          },
                                                        ],
                                                      };
                                                    } else return subGroup;
                                                  }
                                                ),
                                              };
                                            } else return group;
                                          }
                                        ),
                                      };
                                    } else return el;
                                  }
                                ),
                              };
                            } else return el;
                          }
                        ),
                      };
                    }
                  }
                } else {
                  paramsData = {
                    ...paramsData,
                    [type.slug]: paramsData[type.slug].map((el: ISection) => {
                      if (el.name === paramItem.admin_section) {
                        return {
                          ...el,
                          subSections: el.subSections.map(
                            (subSection: ISubSection) => {
                              if (
                                subSection.sort ===
                                paramItem.admin_section_subsection
                              ) {
                                return {
                                  ...subSection,
                                  groups: subSection.groups.map(
                                    (group: IGroup) => {
                                      if (
                                        group.slug ===
                                        paramItem.reality_object_param_group
                                          .slug
                                      ) {
                                        return {
                                          ...group,
                                          subGroups: [
                                            ...group.subGroups,
                                            {
                                              sort: paramItem
                                                .reality_object_param_subgroup
                                                .sort,
                                              name: paramItem
                                                .reality_object_param_subgroup
                                                .name_rus,
                                              slug: paramItem
                                                .reality_object_param_subgroup
                                                .slug,
                                              is_visible:
                                                paramItem
                                                  .reality_object_param_subgroup
                                                  .is_visible,
                                              fields: [
                                                {
                                                  sort: paramItem.sort,
                                                  name: paramItem.name_rus,
                                                  slug: paramItem.sort,
                                                  admin_required:
                                                    paramItem.admin_required,
                                                  defaultValue: undefined,
                                                  is_visible:
                                                    paramItem.is_visible,
                                                },
                                              ],
                                            },
                                          ],
                                        };
                                      } else return group;
                                    }
                                  ),
                                };
                              } else return el;
                            }
                          ),
                        };
                      } else return el;
                    }),
                  };
                }
              } else {
                paramsData = {
                  ...paramsData,
                  [type.slug]: paramsData[type.slug].map((el: ISection) => {
                    if (el.name === paramItem.admin_section) {
                      return {
                        ...el,
                        subSections: el.subSections.map(
                          (subSection: ISubSection) => {
                            if (
                              subSection.sort ===
                              paramItem.admin_section_subsection
                            ) {
                              return {
                                ...subSection,
                                groups: [
                                  ...subSection.groups,
                                  {
                                    sort: paramItem.reality_object_param_group
                                      .sort,
                                    name: paramItem.reality_object_param_group
                                      .name_rus,
                                    slug: paramItem.reality_object_param_group
                                      .slug,
                                    is_visible:
                                      paramItem.reality_object_param_group
                                        .is_visible,
                                    subGroups: [
                                      {
                                        sort: paramItem
                                          .reality_object_param_subgroup.sort,
                                        name: paramItem
                                          .reality_object_param_subgroup
                                          .name_rus,
                                        slug: paramItem
                                          .reality_object_param_subgroup.slug,
                                        is_visible:
                                          paramItem
                                            .reality_object_param_subgroup
                                            .is_visible,
                                        fields: [
                                          {
                                            sort: paramItem.sort,
                                            name: paramItem.name_rus,
                                            slug: paramItem.sort,
                                            admin_required:
                                              paramItem.admin_required,
                                            defaultValue: undefined,
                                            is_visible: paramItem.is_visible,
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              };
                            } else return el;
                          }
                        ),
                      };
                    } else return el;
                  }),
                };
              }
            } else {
              paramsData = {
                ...paramsData,
                [type.slug]: paramsData[type.slug].map((el: ISection) => {
                  if (el.name === paramItem.admin_section) {
                    return {
                      ...el,
                      subSections: {
                        sort: paramItem.admin_section_subsection,
                        groups: [
                          {
                            sort: paramItem.reality_object_param_group.sort,
                            name: paramItem.reality_object_param_group.name_rus,
                            slug: paramItem.reality_object_param_group.slug,
                            is_visible:
                              paramItem.reality_object_param_group.is_visible,
                            subGroups: [
                              {
                                sort: paramItem.reality_object_param_subgroup
                                  .sort,
                                name: paramItem.reality_object_param_subgroup
                                  .name_rus,
                                slug: paramItem.reality_object_param_subgroup
                                  .slug,
                                is_visible:
                                  paramItem.reality_object_param_subgroup
                                    .is_visible,
                                fields: [
                                  {
                                    sort: paramItem.sort,
                                    name: paramItem.name_rus,
                                    slug: paramItem.sort,
                                    admin_required: paramItem.admin_required,
                                    defaultValue: undefined,
                                    is_visible: paramItem.is_visible,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    };
                  } else return el;
                }),
              };
            }
          } else {
            paramsData = {
              ...paramsData,
              [type.slug]: [
                {
                  name: paramItem.admin_section,
                  sort: paramItem.sort,
                  subSections: [
                    {
                      sort: paramItem.admin_section_subsection,
                      groups: [
                        {
                          sort: paramItem.reality_object_param_group.sort,
                          name: paramItem.reality_object_param_group.name_rus,
                          slug: paramItem.reality_object_param_group.slug,
                          is_visible:
                            paramItem.reality_object_param_group.is_visible,
                          subGroups: [
                            {
                              sort: paramItem.reality_object_param_subgroup
                                .sort,
                              name: paramItem.reality_object_param_subgroup
                                .name_rus,
                              slug: paramItem.reality_object_param_subgroup
                                .slug,
                              is_visible:
                                paramItem.reality_object_param_subgroup
                                  .is_visible,
                              fields: [
                                {
                                  sort: paramItem.sort,
                                  name: paramItem.name_rus,
                                  slug: paramItem.slug,
                                  admin_required: paramItem.admin_required,
                                  defaultValue: undefined,
                                  is_visible: paramItem.is_visible,
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            };
          }
        });
      });

      console.log(paramsData);

      this.params.data = paramsData;
      this.params.loaded = true;
      this.params.errorOnLoad = false;
      this.params.fetching = false;
    } catch (e) {
      this.params.fetching = false;
      this.params.errorOnLoad = true;
      this.params.loaded = false;
      console.error(e);
    }
  };
}

export const CreateNewObjectStore = new CreateNewObject();
