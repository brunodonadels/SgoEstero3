var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 1.875 - 11.200<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 11.201 - 20.775<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 20.776 - 142.275<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 142.276 - 267.125<br />'
        });
var format_ViviendasRuralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasRuralesINDEC_4 = format_ViviendasRuralesINDEC_4.readFeatures(json_ViviendasRuralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasRuralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasRuralesINDEC_4.addFeatures(features_ViviendasRuralesINDEC_4);
var lyr_ViviendasRuralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasRuralesINDEC_4, 
                style: style_ViviendasRuralesINDEC_4,
                interactive: true,
    title: 'Viviendas Rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_4_0.png" /> 500 - 1.500<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_4_1.png" /> 1.501 - 2.500<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_4_2.png" /> 2.501 - 4.250<br />\
    <img src="styles/legend/ViviendasRuralesINDEC_4_3.png" /> 4.251 - 6.000<br />'
        });
var format_PEAINDEC_5 = new ol.format.GeoJSON();
var features_PEAINDEC_5 = format_PEAINDEC_5.readFeatures(json_PEAINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_5.addFeatures(features_PEAINDEC_5);
var lyr_PEAINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_5, 
                style: style_PEAINDEC_5,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_5_0.png" /> 1.000 - 6.000<br />\
    <img src="styles/legend/PEAINDEC_5_1.png" /> 6.001 - 12.000<br />\
    <img src="styles/legend/PEAINDEC_5_2.png" /> 12.001 - 88.500<br />\
    <img src="styles/legend/PEAINDEC_5_3.png" /> 88.501 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 1.000 - 3.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 3.001 - 5.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 5.001 - 7.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 7.001 - 10.500<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 500 - 2.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 2.001 - 10.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 10.001 - 30.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 30.001 - 52.500<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 1.200 - 8.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 8.001 - 24.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 24.501 - 50.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 50.001 - 90.000<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 1.500 - 25.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 25.001 - 75.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 75.001 - 150.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 150.001 - 300.000<br />'
        });
var format_HectreasdehortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_10 = format_HectreasdehortalizasINDEC_10.readFeatures(json_HectreasdehortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_10.addFeatures(features_HectreasdehortalizasINDEC_10);
var lyr_HectreasdehortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_10, 
                style: style_HectreasdehortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_1.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_2.png" /> 151 - 2.300<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_10_3.png" /> 2.301 - 3.800<br />'
        });
var format_HectreasdelegumbresINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdelegumbresINDEC_11 = format_HectreasdelegumbresINDEC_11.readFeatures(json_HectreasdelegumbresINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdelegumbresINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdelegumbresINDEC_11.addFeatures(features_HectreasdelegumbresINDEC_11);
var lyr_HectreasdelegumbresINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdelegumbresINDEC_11, 
                style: style_HectreasdelegumbresINDEC_11,
                interactive: true,
    title: 'Hectáreas de legumbres (INDEC)<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_1.png" /> 1 - 300<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_2.png" /> 301 - 950<br />\
    <img src="styles/legend/HectreasdelegumbresINDEC_11_3.png" /> 951 - 1.600<br />'
        });
var format_HectreasdealgodnMAGyP_12 = new ol.format.GeoJSON();
var features_HectreasdealgodnMAGyP_12 = format_HectreasdealgodnMAGyP_12.readFeatures(json_HectreasdealgodnMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdealgodnMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdealgodnMAGyP_12.addFeatures(features_HectreasdealgodnMAGyP_12);
var lyr_HectreasdealgodnMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdealgodnMAGyP_12, 
                style: style_HectreasdealgodnMAGyP_12,
                interactive: true,
    title: 'Hectáreas de algodón (MAGyP)<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_1.png" /> 1.500 - 7.500<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_2.png" /> 7.501 - 15.000<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_3.png" /> 15.001 - 22.000<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_4.png" /> 22.001 o más<br />'
        });
var format_HectreasdetrigoMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_13 = format_HectreasdetrigoMAGyP_13.readFeatures(json_HectreasdetrigoMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_13.addFeatures(features_HectreasdetrigoMAGyP_13);
var lyr_HectreasdetrigoMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_13, 
                style: style_HectreasdetrigoMAGyP_13,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_1.png" /> 1.200 - 3.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_2.png" /> 3.001 - 12.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_3.png" /> 12.001 - 62.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_4.png" /> 62.001 o más<br />'
        });
var format_HectreasdemazMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_14 = format_HectreasdemazMAGyP_14.readFeatures(json_HectreasdemazMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_14.addFeatures(features_HectreasdemazMAGyP_14);
var lyr_HectreasdemazMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_14, 
                style: style_HectreasdemazMAGyP_14,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_1.png" /> 2.000 - 10.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_2.png" /> 10.001 - 23.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_3.png" /> 23.001 - 100.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_4.png" /> 100.001 o más<br />'
        });
var format_HectreasdegirasolMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_15 = format_HectreasdegirasolMAGyP_15.readFeatures(json_HectreasdegirasolMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_15.addFeatures(features_HectreasdegirasolMAGyP_15);
var lyr_HectreasdegirasolMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_15, 
                style: style_HectreasdegirasolMAGyP_15,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_1.png" /> 500 - 2.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_2.png" /> 2.001 - 20.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_3.png" /> 20.001 - 34.500<br />'
        });
var format_HectreasdesojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_16 = format_HectreasdesojaMAGyP_16.readFeatures(json_HectreasdesojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_16.addFeatures(features_HectreasdesojaMAGyP_16);
var lyr_HectreasdesojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_16, 
                style: style_HectreasdesojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_1.png" /> 500 - 15.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_2.png" /> 15.001 - 77.500<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_3.png" /> 77.501 - 115.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_4.png" /> 115.001 o más<br />'
        });
var format_Capacitaciones2019tcnicas_17 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_17 = format_Capacitaciones2019tcnicas_17.readFeatures(json_Capacitaciones2019tcnicas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_17.addFeatures(features_Capacitaciones2019tcnicas_17);
var lyr_Capacitaciones2019tcnicas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_17, 
                style: style_Capacitaciones2019tcnicas_17,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_17.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018_18 = new ol.format.GeoJSON();
var features_Capacitaciones2018_18 = format_Capacitaciones2018_18.readFeatures(json_Capacitaciones2018_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018_18.addFeatures(features_Capacitaciones2018_18);
var lyr_Capacitaciones2018_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018_18, 
                style: style_Capacitaciones2018_18,
                interactive: true,
    title: 'Capacitaciones 2018<br />\
    <img src="styles/legend/Capacitaciones2018_18_0.png" /> Difusion<br />\
    <img src="styles/legend/Capacitaciones2018_18_1.png" /> Tecnica<br />'
        });
var format_LocalidadesINDEC_19 = new ol.format.GeoJSON();
var features_LocalidadesINDEC_19 = format_LocalidadesINDEC_19.readFeatures(json_LocalidadesINDEC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesINDEC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesINDEC_19.addFeatures(features_LocalidadesINDEC_19);
var lyr_LocalidadesINDEC_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesINDEC_19, 
                style: style_LocalidadesINDEC_19,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesINDEC_19.png" /> Localidades (INDEC)'
            });
var format_BER_20 = new ol.format.GeoJSON();
var features_BER_20 = format_BER_20.readFeatures(json_BER_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_20.addFeatures(features_BER_20);
var lyr_BER_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_20, 
                style: style_BER_20,
                interactive: true,
                title: '<img src="styles/legend/BER_20.png" /> BER'
            });
var format_BER_21 = new ol.format.GeoJSON();
var features_BER_21 = format_BER_21.readFeatures(json_BER_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_21.addFeatures(features_BER_21);
var lyr_BER_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_21, 
                style: style_BER_21,
                interactive: true,
                title: '<img src="styles/legend/BER_21.png" /> BER'
            });
var format_DelegacinSantiagodelEstero_22 = new ol.format.GeoJSON();
var features_DelegacinSantiagodelEstero_22 = format_DelegacinSantiagodelEstero_22.readFeatures(json_DelegacinSantiagodelEstero_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinSantiagodelEstero_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinSantiagodelEstero_22.addFeatures(features_DelegacinSantiagodelEstero_22);
var lyr_DelegacinSantiagodelEstero_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinSantiagodelEstero_22, 
                style: style_DelegacinSantiagodelEstero_22,
                interactive: true,
                title: '<img src="styles/legend/DelegacinSantiagodelEstero_22.png" /> Delegación Santiago del Estero'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_ViviendasRuralesINDEC_4.setVisible(true);lyr_PEAINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdehortalizasINDEC_10.setVisible(true);lyr_HectreasdelegumbresINDEC_11.setVisible(true);lyr_HectreasdealgodnMAGyP_12.setVisible(true);lyr_HectreasdetrigoMAGyP_13.setVisible(true);lyr_HectreasdemazMAGyP_14.setVisible(true);lyr_HectreasdegirasolMAGyP_15.setVisible(true);lyr_HectreasdesojaMAGyP_16.setVisible(true);lyr_Capacitaciones2019tcnicas_17.setVisible(true);lyr_Capacitaciones2018_18.setVisible(true);lyr_LocalidadesINDEC_19.setVisible(true);lyr_BER_20.setVisible(true);lyr_BER_21.setVisible(true);lyr_DelegacinSantiagodelEstero_22.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordeptoINDEC_3,lyr_ViviendasRuralesINDEC_4,lyr_PEAINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdehortalizasINDEC_10,lyr_HectreasdelegumbresINDEC_11,lyr_HectreasdealgodnMAGyP_12,lyr_HectreasdetrigoMAGyP_13,lyr_HectreasdemazMAGyP_14,lyr_HectreasdegirasolMAGyP_15,lyr_HectreasdesojaMAGyP_16,lyr_Capacitaciones2019tcnicas_17,lyr_Capacitaciones2018_18,lyr_LocalidadesINDEC_19,lyr_BER_20,lyr_BER_21,lyr_DelegacinSantiagodelEstero_22];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_ViviendasRuralesINDEC_4.set('fieldAliases', {'Viv. Rur': 'Viv. Rur', });
lyr_PEAINDEC_5.set('fieldAliases', {'PEA': 'PEA', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdehortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdelegumbresINDEC_11.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasdealgodnMAGyP_12.set('fieldAliases', {'Algodón': 'Algodón', });
lyr_HectreasdetrigoMAGyP_13.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdemazMAGyP_14.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdegirasolMAGyP_15.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_16.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2019tcnicas_17.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018_18.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo Capa': 'Tipo Capa', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_LocalidadesINDEC_19.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_20.set('fieldAliases', {'Nº': 'Nº', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BER_21.set('fieldAliases', {'Nº': 'Nº', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinSantiagodelEstero_22.set('fieldAliases', {'Delegacion': 'Delegacion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'Direccion': 'Direccion', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_ViviendasRuralesINDEC_4.set('fieldImages', {'Viv. Rur': 'TextEdit', });
lyr_PEAINDEC_5.set('fieldImages', {'PEA': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdelegumbresINDEC_11.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasdealgodnMAGyP_12.set('fieldImages', {'Algodón': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_13.set('fieldImages', {'Trigo': 'TextEdit', });
lyr_HectreasdemazMAGyP_14.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasdegirasolMAGyP_15.set('fieldImages', {'Girasol': 'TextEdit', });
lyr_HectreasdesojaMAGyP_16.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_17.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018_18.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo Capa': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_LocalidadesINDEC_19.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_20.set('fieldImages', {'Nº': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BER_21.set('fieldImages', {'Nº': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinSantiagodelEstero_22.set('fieldImages', {'Delegacion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', 'Direccion': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_ViviendasRuralesINDEC_4.set('fieldLabels', {'Viv. Rur': 'inline label', });
lyr_PEAINDEC_5.set('fieldLabels', {'PEA': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasdehortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdelegumbresINDEC_11.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasdealgodnMAGyP_12.set('fieldLabels', {'Algodón': 'inline label', });
lyr_HectreasdetrigoMAGyP_13.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdemazMAGyP_14.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdegirasolMAGyP_15.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_16.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_17.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018_18.set('fieldLabels', {'Localidad': 'inline label', 'Tipo Capa': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_LocalidadesINDEC_19.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_20.set('fieldLabels', {'Nº': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BER_21.set('fieldLabels', {'Nº': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinSantiagodelEstero_22.set('fieldLabels', {'Delegacion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'Direccion': 'inline label', });
lyr_DelegacinSantiagodelEstero_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});