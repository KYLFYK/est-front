export const paramsForGet = (obj: any) => {
  
  const params = Object.entries(obj).reduce((acc, cur, i): any => {
    if (Array.isArray(cur[1])) {
      //@ts-expect-error
      acc[`${cur[0]}`] = cur[1]
    } else {
      if(cur[1] && cur[0] !== 'privateType') {
        //@ts-expect-error
        acc[`${cur[0]}`] = cur[1]    
      } 
      /*if(cur[1] && cur[0] === 'object-type' && obj['privateType'] === 'townhouse') {
          //@ts-expect-error
          acc[`${cur[0]}`] = 'townhouse'
      } */
      if(cur[0] === 'rooms-in-apartment' && obj['params__reality_object_param__type__slug'] === 'apartment') {
          //@ts-expect-error
          acc[`${cur[0]}`] = cur[1]
      } 
    }
    return acc
  }, {})
  return params
};
