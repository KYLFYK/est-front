const singleParams = ['type__slug', 'price__gte', 'price__lte', "advert_type", "name__contains", "params__reality_object_param__slug__in"]
const multiParams = ['floor__in', 'rooms-in-apartment__in', 'privateType__in', 'houseType__in', 'params__reality_object_param__slug__in']

export const transformRequestOptions = (params: any) => {
  let options = "filters=[";
  const length = Object.entries(params).length;
  let i = 0;
  for (const key in params) {
    //console.log(key)
    if (typeof params[key] !== "object" && params[key]) {
      options += `{"${key}": ${isNaN(params[key] / 1) ? `"${params[key]}"` : params[key]}}${i+1 < length ? ', ' : ''}`;
    } else if (typeof params[key] === "object" && params[key] && params[key].length) {
      options += `{"${key}": ${JSON.stringify(params[key])}}${i+1 < length ? ', ' : ''}`;
    }
    i++
  }
  options += "]";
  return options
};
