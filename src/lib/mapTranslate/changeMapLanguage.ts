export const changeMapLanguage = (map: any) => {
    map.target.getStyle().layers.forEach((layer: any) => {
        if (layer.layout && layer.layout['text-field']) {
            map.target.setLayoutProperty(layer.id, 'text-field', [
                'coalesce',
                ['get', 'name_ru'],
                ['get', 'name'],
            ])
        }
    })
}