export const MappingCluster = (objs: any) => {
    let returnedObjs: Array<any> = [];
    objs.forEach((o: any) => {
        returnedObjs.push({properties:{cluster: false, id: o.object_id, price: o.price}, geometry:{type:'Point', coordinates:[o.lat, o.lng]}})
    })
    return returnedObjs;
}