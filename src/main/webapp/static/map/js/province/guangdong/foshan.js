(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
        var log = function (msg) {
            if (typeof console !== 'undefined') {
                console && console.error && console.error(msg);
            }
        };
        if (!echarts) {
            log('ECharts is not Loaded');
            return;
        }
        if (!echarts.registerMap) {
            log('ECharts Map is not loaded');
            return;
        }
        echarts.registerMap('佛山市',
            {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {"name": "高明区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[112.467345, 22.713843], [112.477345, 22.713843], [112.477345, 22.7038430000001], [112.467345, 22.7038430000001], [112.467345, 22.713843]]], [[[112.697345, 22.713843], [112.693292265625, 22.6908449531251], [112.684647246094, 22.7084084296875], [112.697345, 22.713843]]], [[[112.907345, 22.873843], [112.917345, 22.873843], [112.917345, 22.8538430000001], [112.907345, 22.8538430000001], [112.907345, 22.873843]]], [[[112.697345, 22.9338430000001], [112.672899199219, 22.9408327460938], [112.690501738281, 22.9577809882813], [112.697345, 22.9338430000001]]], [[[112.907345, 22.873843], [112.859971953125, 22.8854787421876], [112.837345, 22.843843], [112.848812285156, 22.8146755195313], [112.811522246094, 22.7994142890626], [112.815811796875, 22.7703786445313], [112.801529570313, 22.7593556953125], [112.804022246094, 22.7424929023438], [112.792366972656, 22.7273952460937], [112.741236601563, 22.6894875312501], [112.71170046875, 22.69819846875], [112.70298953125, 22.70948753125], [112.697345, 22.713843], [112.703389921875, 22.7285549140625], [112.697027617188, 22.7607570625], [112.679681425781, 22.7573293281251], [112.68341921875, 22.7384108710938], [112.666268339844, 22.7113942695313], [112.647345, 22.7377956367188], [112.633170195313, 22.7180178046875], [112.617554960938, 22.7068263984375], [112.602345, 22.7098317695313], [112.589681425781, 22.707329328125], [112.593455839844, 22.6882228828125], [112.581519804688, 22.6796681953126], [112.568995390625, 22.662192609375], [112.543187285156, 22.643696515625], [112.529791289063, 22.6784279609375], [112.546868925781, 22.6906691718751], [112.530142851563, 22.7313722968751], [112.471619902344, 22.7198073554688], [112.467345, 22.713843], [112.440704375, 22.710483625], [112.421031523438, 22.6713210273438], [112.393985625, 22.6867263007813], [112.404793730469, 22.7088576484375], [112.390704375, 22.737202375], [112.387345, 22.773843], [112.472899199219, 22.7982888007812], [112.511939726563, 22.8295143867188], [112.532345, 22.826977765625], [112.565179472656, 22.8310622382813], [112.56037234375, 22.8697096992187], [112.583192167969, 22.8668727851563], [112.680662871094, 22.9043386054688], [112.697345, 22.9338430000001], [112.718104277344, 22.9377638984375], [112.735404082031, 22.9585060859375], [112.724166289063, 22.9781081367188], [112.742081328125, 22.991860578125], [112.7612903125, 22.9808473945313], [112.7733996875, 23.0068386054688], [112.792681914063, 22.9957839179688], [112.810523710938, 23.0106642890626], [112.827345, 23.0138430000001], [112.83298953125, 23.00948753125], [112.867345, 22.963843], [112.869888945313, 22.9263869453125], [112.904801054688, 22.8912990546875], [112.907345, 22.873843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "南海区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[112.907345, 22.873843], [112.907345, 22.8538430000001], [112.871429472656, 22.8497585273438], [112.862994414063, 22.8375417304688], [112.837345, 22.843843], [112.859971953125, 22.8854787421876], [112.907345, 22.873843]]], [[[112.907345, 22.873843], [112.904801054688, 22.8912990546875], [112.869888945313, 22.9263869453125], [112.867345, 22.963843], [112.90170046875, 22.9696804023438], [112.89298953125, 22.9994875312501], [112.875728789063, 23.0128102851563], [112.861224394531, 23.1011061835938], [112.903612089844, 23.1184548164063], [112.891170683594, 23.1390773750001], [112.920260039063, 23.161528546875], [112.93170046875, 23.1894875312501], [112.943140898438, 23.2084523750001], [112.940496855469, 23.226352765625], [112.962735625, 23.2296388984376], [112.983922148438, 23.216860578125], [113.002345, 23.2195827460938], [113.027088652344, 23.2159255195313], [113.044486113281, 23.2293556953125], [113.041529570313, 23.2493556953126], [113.047345, 23.253843], [113.0758215625, 23.2583303046875], [113.069757109375, 23.2853908515625], [113.103260527344, 23.2979274726563], [113.121929960938, 23.3100856757813], [113.147345, 23.303843], [113.174681425781, 23.2667629218751], [113.17107546875, 23.2313893867188], [113.181883574219, 23.2183815742188], [113.20150515625, 23.2020803046875], [113.203834257813, 23.179233625], [113.173267851563, 23.153843], [113.207345, 23.143843], [113.20025515625, 23.114419171875], [113.205357695313, 23.0885964179688], [113.163170195313, 23.0774660468751], [113.204989042969, 23.0487795234376], [113.247345, 23.0438430000001], [113.254793730469, 23.0288576484375], [113.2474621875, 23.0138430000001], [113.254793730469, 22.9988283515625], [113.247345, 22.983843], [113.231429472656, 22.9879274726563], [113.194666777344, 23.0118679023438], [113.173260527344, 22.9979274726563], [113.157345, 22.993843], [113.15298953125, 22.9994875312501], [113.141529570313, 23.0083303046876], [113.143148222656, 23.0192726875], [113.112183867188, 23.0610353828125], [113.053975859375, 23.0524343085938], [113.04298953125, 23.03819846875], [112.993995390625, 23.0278615546875], [112.979967070313, 23.0299343085938], [112.983084746094, 23.0088430000001], [112.979173613281, 22.982387921875], [113.009874296875, 22.9314919257813], [113.037345, 22.923843], [113.045557890625, 22.9181716132813], [113.041224394531, 22.8988430000001], [113.043648710938, 22.8880275703126], [113.003260527344, 22.877661359375], [113.01322390625, 22.8535939765626], [113.051329375, 22.8272829414063], [113.057345, 22.803843], [113.047345, 22.803843], [113.041776152344, 22.8113283515625], [112.977454863281, 22.8002541328125], [112.951795683594, 22.8347438789063], [112.917345, 22.8538430000001], [112.917345, 22.873843], [112.907345, 22.873843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "三水区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[112.967345, 23.443843], [112.955152617188, 23.4404201484375], [112.963922148438, 23.4316506171875], [112.978997832031, 23.4338039375001], [112.992996855469, 23.4087136054688], [112.97271609375, 23.3912404609375], [112.989364042969, 23.3502883125001], [113.012623320313, 23.3484181953126], [113.041756621094, 23.364673078125], [113.021693144531, 23.3287136054688], [113.032772246094, 23.3191677070313], [113.031219511719, 23.2998244453125], [113.04271609375, 23.27921409375], [113.047345, 23.253843], [113.041529570313, 23.2493556953126], [113.044486113281, 23.2293556953125], [113.027088652344, 23.2159255195313], [113.002345, 23.2195827460938], [112.983922148438, 23.216860578125], [112.962735625, 23.2296388984376], [112.940496855469, 23.226352765625], [112.943140898438, 23.2084523750001], [112.93170046875, 23.1894875312501], [112.920260039063, 23.161528546875], [112.891170683594, 23.1390773750001], [112.903612089844, 23.1184548164063], [112.861224394531, 23.1011061835938], [112.875728789063, 23.0128102851563], [112.89298953125, 22.9994875312501], [112.90170046875, 22.9696804023438], [112.867345, 22.963843], [112.83298953125, 23.00948753125], [112.827345, 23.0138430000001], [112.813170195313, 23.0696681953125], [112.801519804688, 23.0980178046875], [112.789495878906, 23.1579982734375], [112.767345, 23.1638430000001], [112.761688261719, 23.2091237617188], [112.767345, 23.223843], [112.77298953125, 23.21948753125], [112.782542753906, 23.2071096015625], [112.792345, 23.231059796875], [112.802147246094, 23.2071096015625], [112.811832304688, 23.2196584296875], [112.822784453125, 23.2180397773438], [112.84170046875, 23.2327614570313], [112.821095, 23.24866721875], [112.850897246094, 23.2888649726563], [112.86298953125, 23.29819846875], [112.876512480469, 23.3467653632813], [112.86170046875, 23.35819846875], [112.839271269531, 23.3872585273438], [112.808426542969, 23.3981984687501], [112.79298953125, 23.37819846875], [112.77298953125, 23.3696047187501], [112.793219023438, 23.4389919257813], [112.83298953125, 23.48819846875], [112.848231230469, 23.5254396796875], [112.83170046875, 23.53819846875], [112.82298953125, 23.54948753125], [112.817345, 23.553843], [112.821529570313, 23.5701467109375], [112.832345, 23.5677223945313], [112.8536340625, 23.57249534375], [112.903260527344, 23.5597585273437], [112.907345, 23.553843], [112.883260527344, 23.5173976875], [112.901651640625, 23.4875661445313], [112.915697050781, 23.4907155585938], [112.937955351563, 23.4584743476563], [112.967345, 23.453843], [112.967345, 23.443843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "顺德区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[113.247345, 22.983843], [113.253900175781, 22.9620729804688], [113.285338164063, 22.9480446601563], [113.271807890625, 22.8986135078125], [113.291937285156, 22.8812721992188], [113.31197390625, 22.82847190625], [113.391810332031, 22.8163063789063], [113.362535429688, 22.7910842109375], [113.357345, 22.773843], [113.350238066406, 22.7646364570313], [113.32298953125, 22.74819846875], [113.28170046875, 22.73948753125], [113.262110625, 22.7276686835938], [113.246263457031, 22.74819846875], [113.231082792969, 22.7391164375], [113.20170046875, 22.6994875312501], [113.192010527344, 22.6758107734376], [113.157345, 22.683843], [113.14170046875, 22.68819846875], [113.085477324219, 22.7103029609375], [113.07298953125, 22.7694875312501], [113.057345, 22.803843], [113.051329375, 22.8272829414063], [113.01322390625, 22.8535939765626], [113.003260527344, 22.877661359375], [113.043648710938, 22.8880275703126], [113.041224394531, 22.8988430000001], [113.045557890625, 22.9181716132813], [113.037345, 22.923843], [113.041610136719, 22.9295778632813], [113.056356230469, 22.9405471015625], [113.048309355469, 22.9872853828125], [113.112345, 22.9762599921875], [113.148953886719, 22.982563703125], [113.157345, 22.993843], [113.173260527344, 22.9979274726563], [113.194666777344, 23.0118679023438], [113.231429472656, 22.9879274726563], [113.247345, 22.983843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "禅城区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[113.112183867188, 23.0610353828125], [113.143148222656, 23.0192726875], [113.141529570313, 23.0083303046876], [113.15298953125, 22.9994875312501], [113.157345, 22.993843], [113.148953886719, 22.982563703125], [113.112345, 22.9762599921875], [113.048309355469, 22.9872853828125], [113.056356230469, 22.9405471015625], [113.041610136719, 22.9295778632813], [113.037345, 22.923843], [113.009874296875, 22.9314919257813], [112.979173613281, 22.982387921875], [112.983084746094, 23.0088430000001], [112.979967070313, 23.0299343085938], [112.993995390625, 23.0278615546875], [113.04298953125, 23.03819846875], [113.053975859375, 23.0524343085938], [113.112183867188, 23.0610353828125]]]]
                    }
                }]
            }
        );
    }
));
