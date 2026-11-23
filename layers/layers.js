var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Niteroi_1 = new ol.format.GeoJSON();
var features_Niteroi_1 = format_Niteroi_1.readFeatures(json_Niteroi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niteroi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niteroi_1.addFeatures(features_Niteroi_1);
var lyr_Niteroi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niteroi_1, 
                style: style_Niteroi_1,
                popuplayertitle: 'Niteroi',
                interactive: true,
                title: '<img src="styles/legend/Niteroi_1.png" /> Niteroi'
            });
var format_Movimentodemassa_2 = new ol.format.GeoJSON();
var features_Movimentodemassa_2 = format_Movimentodemassa_2.readFeatures(json_Movimentodemassa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Movimentodemassa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Movimentodemassa_2.addFeatures(features_Movimentodemassa_2);
var lyr_Movimentodemassa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Movimentodemassa_2, 
                style: style_Movimentodemassa_2,
                popuplayertitle: 'Movimento de massa',
                interactive: false,
    title: 'Movimento de massa<br />\
    <img src="styles/legend/Movimentodemassa_2_0.png" /> Alta<br />\
    <img src="styles/legend/Movimentodemassa_2_1.png" /> Media<br />' });
var format_Inundaes_3 = new ol.format.GeoJSON();
var features_Inundaes_3 = format_Inundaes_3.readFeatures(json_Inundaes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundaes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundaes_3.addFeatures(features_Inundaes_3);
var lyr_Inundaes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inundaes_3, 
                style: style_Inundaes_3,
                popuplayertitle: 'Inundações',
                interactive: false,
    title: 'Inundações<br />\
    <img src="styles/legend/Inundaes_3_0.png" /> Alta<br />\
    <img src="styles/legend/Inundaes_3_1.png" /> Media<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Niteroi_1.setVisible(true);lyr_Movimentodemassa_2.setVisible(true);lyr_Inundaes_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Niteroi_1,lyr_Movimentodemassa_2,lyr_Inundaes_3];
lyr_Niteroi_1.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'area_km2': 'area_km2', 'Inund_alta': 'Inund_alta', 'Inund_medi': 'Inund_medi', 'mov_alta': 'mov_alta', 'mov_media': 'mov_media', });
lyr_Movimentodemassa_2.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'area_km2': 'area_km2', });
lyr_Inundaes_3.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'CLASSE': 'CLASSE', 'area_km2': 'area_km2', });
lyr_Niteroi_1.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'area_km2': 'TextEdit', 'Inund_alta': 'TextEdit', 'Inund_medi': '', 'mov_alta': 'TextEdit', 'mov_media': 'TextEdit', });
lyr_Movimentodemassa_2.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_Inundaes_3.set('fieldImages', {'PROCESSO': 'TextEdit', 'CLASSE': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_Niteroi_1.set('fieldLabels', {'nome': 'inline label - always visible', 'geocodigo': 'hidden field', 'area_km2': 'inline label - always visible', 'Inund_alta': 'inline label - always visible', 'Inund_medi': 'inline label - always visible', 'mov_alta': 'inline label - always visible', 'mov_media': 'inline label - always visible', });
lyr_Movimentodemassa_2.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'area_km2': 'no label', });
lyr_Inundaes_3.set('fieldLabels', {'PROCESSO': 'no label', 'CLASSE': 'no label', 'area_km2': 'no label', });
lyr_Inundaes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});