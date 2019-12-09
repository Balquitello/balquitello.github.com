var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_CatastroFinal_0 = new ol.format.GeoJSON();
var features_CatastroFinal_0 = format_CatastroFinal_0.readFeatures(json_CatastroFinal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatastroFinal_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CatastroFinal_0.addFeatures(features_CatastroFinal_0);var lyr_CatastroFinal_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CatastroFinal_0, 
                style: style_CatastroFinal_0,
                title: '<img src="styles/legend/CatastroFinal_0.png" /> Catastro Final'
            });

lyr_CatastroFinal_0.setVisible(true);
var layersList = [baseLayer,lyr_CatastroFinal_0];
lyr_CatastroFinal_0.set('fieldAliases', {'Id': 'Id', 'FICHA': 'FICHA', 'EST_BOMB': 'EST_BOMB', 'SECTOR': 'SECTOR', 'HAS': 'HAS', 'USUARIO': 'USUARIO', });
lyr_CatastroFinal_0.set('fieldImages', {'Id': 'TextEdit', 'FICHA': 'TextEdit', 'EST_BOMB': 'TextEdit', 'SECTOR': 'TextEdit', 'HAS': 'TextEdit', 'USUARIO': 'TextEdit', });
lyr_CatastroFinal_0.set('fieldLabels', {'Id': 'no label', 'FICHA': 'no label', 'EST_BOMB': 'no label', 'SECTOR': 'no label', 'HAS': 'no label', 'USUARIO': 'no label', });
lyr_CatastroFinal_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});