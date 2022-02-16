export const paramsForGet = (obj: any) => {
  const params = Object.entries(obj).reduce((acc, cur, i): any => {
    if(cur[1] && cur[0] !== 'privateType') {
        //@ts-expect-error
        acc[`${cur[0]}`] = cur[1]    
    } 
    if(cur[1] && cur[0] === 'object-type' && obj['privateType'] === 'townhouse') {
        //@ts-expect-error
        acc[`${cur[0]}`] = 'townhouse'
    } 
    if(cur[0] === 'rooms-in-apartment' && obj['object-type'] === 'apartment') {
        //@ts-expect-error
        acc[`${cur[0]}`] = cur[1]
    } 
    if(cur[0] === 'rooms-in-house' && obj['object-type'] === 'house' || obj['object-type'] === 'townhouse' ) {
        //@ts-expect-error
        acc[`${cur[0]}`] = cur[1]
    } 
    return acc
  }, {})
  return params
};
