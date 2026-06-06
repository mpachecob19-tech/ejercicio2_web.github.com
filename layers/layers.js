var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Denue_2026_Github_1 = new ol.format.GeoJSON();
var features_Denue_2026_Github_1 = format_Denue_2026_Github_1.readFeatures(json_Denue_2026_Github_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Denue_2026_Github_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Denue_2026_Github_1.addFeatures(features_Denue_2026_Github_1);
var lyr_Denue_2026_Github_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Denue_2026_Github_1, 
                style: style_Denue_2026_Github_1,
                popuplayertitle: 'Denue_2026_Github',
                interactive: true,
    title: 'Denue_2026_Github<br />\
    <img src="styles/legend/Denue_2026_Github_1_0.png" /> Grande<br />\
    <img src="styles/legend/Denue_2026_Github_1_1.png" /> Mediana<br />\
    <img src="styles/legend/Denue_2026_Github_1_2.png" /> Micro<br />\
    <img src="styles/legend/Denue_2026_Github_1_3.png" /> Pequeña<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_Denue_2026_Github_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Denue_2026_Github_1];
lyr_Denue_2026_Github_1.set('fieldAliases', {'Establecim': 'Establecim', 'Clave': 'Clave', 'Sector': 'Sector', 'PO': 'PO', 'Tamaño': 'Tamaño', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Denue_2026_Github_1.set('fieldImages', {'Establecim': 'TextEdit', 'Clave': 'Hidden', 'Sector': 'TextEdit', 'PO': 'TextEdit', 'Tamaño': 'TextEdit', 'Latitud': 'Hidden', 'Longitud': 'Hidden', });
lyr_Denue_2026_Github_1.set('fieldLabels', {'Establecim': 'no label', 'Sector': 'no label', 'PO': 'no label', 'Tamaño': 'no label', });
lyr_Denue_2026_Github_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});