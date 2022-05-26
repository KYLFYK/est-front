export const MappingCluster = (objs: any) => {
    let returnedObjs: Array<any> = [];
    objs && objs.forEach((o: any) => {
        returnedObjs.push({
            properties:{
                cluster: false,
                prop: o
            },
            geometry:{
                type:'Point',
                coordinates:[Number(o.address.lat), Number(o.address.lon)]
            }
        })
    })
    return returnedObjs;
}

export const storeDatatoMapData = (objs: any) => {
    const arr: Array<any> = []
    for (let key in objs) {
        arr.push(objs[key])
    }
    return arr
}