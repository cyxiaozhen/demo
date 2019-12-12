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
        echarts.registerMap('云浮市',
            {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {"name": "罗定市"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[111.617345, 22.5138430000001], [111.613922148438, 22.5016506171876], [111.605152617188, 22.5104201484375], [111.617345, 22.5138430000001]]], [[[111.787345, 22.793843], [111.790767851563, 22.8060353828126], [111.799537382813, 22.7972658515626], [111.787345, 22.793843]]], [[[111.787345, 22.793843], [111.774713164063, 22.7637697578125], [111.837738066406, 22.7778981757813], [111.831041289063, 22.7480275703125], [111.869115019531, 22.7382570625], [111.876800566406, 22.7039675117188], [111.837345, 22.693843], [111.826058378906, 22.6851296210938], [111.801033964844, 22.6527126289063], [111.803148222656, 22.6384133125001], [111.773697539063, 22.5986940742187], [111.729163847656, 22.5677223945313], [111.70291140625, 22.5035768867188], [111.677345, 22.483843], [111.673985625, 22.500483625], [111.630704375, 22.507202375], [111.617345, 22.5138430000001], [111.602899199219, 22.5493971992188], [111.59396609375, 22.5582888007813], [111.542266875, 22.5205251289063], [111.525330839844, 22.4803322578125], [111.492899199219, 22.4993971992188], [111.46681765625, 22.5082888007813], [111.4737121875, 22.4528469062501], [111.423077421875, 22.4315090156251], [111.401082792969, 22.4837013984376], [111.404254179688, 22.5091994453125], [111.3284778125, 22.5202272773437], [111.305318632813, 22.5173464179688], [111.272308378906, 22.4979421210938], [111.262899199219, 22.5042653632812], [111.288648710938, 22.548071515625], [111.313516875, 22.55855003125], [111.287718535156, 22.5938649726563], [111.224862089844, 22.5860475898437], [111.192738066406, 22.6095143867188], [111.17373171875, 22.6071486640625], [111.135877714844, 22.629399640625], [111.119281035156, 22.7061183906251], [111.087345, 22.693843], [111.060965605469, 22.729184796875], [111.106522246094, 22.7478322578125], [111.17263796875, 22.73806175], [111.222608671875, 22.7577053046875], [111.243226347656, 22.7844191718751], [111.28298953125, 22.80819846875], [111.29170046875, 22.82948753125], [111.320897246094, 22.8688649726563], [111.359696074219, 22.898813703125], [111.367345, 22.943843], [111.4022278125, 22.9492531562501], [111.412345, 22.9484401679687], [111.453411894531, 22.9517409492188], [111.491358671875, 22.8837258125], [111.50197390625, 22.84847190625], [111.551265898438, 22.8372731757813], [111.552747832031, 22.8188430000001], [111.551243925781, 22.8001369453125], [111.574439726563, 22.7982741523438], [111.612474394531, 22.8194948554688], [111.629947539063, 22.7992140937501], [111.65271609375, 22.8084719062501], [111.674576445313, 22.833843], [111.727345, 22.803843], [111.731673613281, 22.7975710273438], [111.743016386719, 22.8001149726563], [111.752345, 22.7866017890625], [111.761695585938, 22.8001442695313], [111.787345, 22.793843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "新兴县"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[112.177345, 22.373843], [112.189537382813, 22.3704201484375], [112.180767851563, 22.3616506171875], [112.177345, 22.373843]]], [[[112.177345, 22.373843], [112.157345, 22.383843], [112.150347929688, 22.4083107734375], [112.079537382813, 22.418618390625], [112.057454863281, 22.4461916328126], [112.011790800781, 22.4782888007813], [112.002899199219, 22.4893971992188], [111.983057890625, 22.5052834296875], [111.963167753906, 22.5524904609375], [112.00107546875, 22.58284690625], [111.981790800781, 22.5982888007813], [111.957345, 22.6338430000001], [111.9894934375, 22.6550881171875], [112.026976347656, 22.646684796875], [112.043616972656, 22.6581716132812], [112.039132109375, 22.6781716132813], [112.064217558594, 22.6954909492188], [112.060203886719, 22.7133888984376], [112.101444121094, 22.7746291328125], [112.153260527344, 22.7879274726562], [112.161429472656, 22.7997585273437], [112.167345, 22.803843], [112.183260527344, 22.8079274726563], [112.194539824219, 22.8242653632813], [112.238621855469, 22.8427785468751], [112.261898222656, 22.8276222968751], [112.272345, 22.8299636054688], [112.282386503906, 22.8277126289063], [112.307345, 22.833843], [112.310523710938, 22.8270217109375], [112.330340605469, 22.8177883125001], [112.318568144531, 22.7972536445313], [112.374166289063, 22.7906642890625], [112.380523710938, 22.7770217109376], [112.387345, 22.773843], [112.390704375, 22.737202375], [112.404793730469, 22.7088576484375], [112.393985625, 22.6867263007813], [112.421031523438, 22.6713210273438], [112.440704375, 22.710483625], [112.467345, 22.713843], [112.467345, 22.7038430000001], [112.477345, 22.7038430000001], [112.508216582031, 22.6394191718751], [112.517345, 22.603843], [112.474608183594, 22.5970827460938], [112.444290800781, 22.6001735664063], [112.428514433594, 22.6539333320313], [112.4131653125, 22.6683815742187], [112.382806425781, 22.5983815742188], [112.371795683594, 22.5892336250001], [112.373053007813, 22.5768923164062], [112.337982207031, 22.547759015625], [112.320882597656, 22.5495021796875], [112.322896757813, 22.569262921875], [112.303499785156, 22.5783815742188], [112.292806425781, 22.5183815742188], [112.264908476563, 22.5062795234375], [112.231529570313, 22.4293190742188], [112.237345, 22.413843], [112.192882109375, 22.4024318671875], [112.177345, 22.373843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "郁南县"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[111.877345, 22.8938430000001], [111.899530058594, 22.890610578125], [111.880494414063, 22.8722292304688], [111.877345, 22.8938430000001]]], [[[111.877345, 22.8938430000001], [111.854505644531, 22.8879811835938], [111.838892851563, 22.846255109375], [111.812345, 22.8522048164063], [111.787345, 22.8466017890625], [111.766312285156, 22.8513161445313], [111.743260527344, 22.8179274726563], [111.731429472656, 22.8097585273438], [111.727345, 22.803843], [111.674576445313, 22.833843], [111.65271609375, 22.8084719062501], [111.629947539063, 22.7992140937501], [111.612474394531, 22.8194948554688], [111.574439726563, 22.7982741523438], [111.551243925781, 22.8001369453125], [111.552747832031, 22.8188430000001], [111.551265898438, 22.8372731757813], [111.50197390625, 22.84847190625], [111.491358671875, 22.8837258125], [111.453411894531, 22.9517409492188], [111.412345, 22.9484401679687], [111.4022278125, 22.9492531562501], [111.367345, 22.943843], [111.357345, 22.943843], [111.357345, 22.9738430000001], [111.394366484375, 22.9836110664063], [111.388521757813, 23.0131862617188], [111.423170195313, 23.0380178046876], [111.431519804688, 23.0679933906251], [111.372757597656, 23.0797756171876], [111.363170195313, 23.1436843085938], [111.385186796875, 23.1594631171875], [111.373343535156, 23.2193947578125], [111.36127078125, 23.2384108710938], [111.364925566406, 23.2569020820313], [111.347821074219, 23.2838430000001], [111.363170195313, 23.3080178046876], [111.367345, 23.323843], [111.41298953125, 23.31948753125], [111.46248171875, 23.27948753125], [111.50572390625, 23.2887868476563], [111.531414824219, 23.3220729804687], [111.57170046875, 23.2677346015625], [111.56298953125, 23.2481984687501], [111.547345, 23.2438430000001], [111.522899199219, 23.2242653632813], [111.557977324219, 23.2006935859375], [111.622899199219, 23.1893971992188], [111.666561308594, 23.1575026679688], [111.693033476563, 23.1607936835938], [111.732899199219, 23.1493971992188], [111.781619902344, 23.1306667304687], [111.87656375, 23.1424782539063], [111.892899199219, 23.1293971992188], [111.897345, 23.1238430000001], [111.889132109375, 23.1181716132813], [111.893465605469, 23.098843], [111.888983183594, 23.078843], [111.896197539063, 23.0466628242188], [111.88033328125, 23.0236891914063], [111.851483183594, 23.0301564765626], [111.843260527344, 22.9679274726563], [111.818521757813, 22.9299367500001], [111.833260527344, 22.9197585273438], [111.841673613281, 22.9075710273438], [111.856976347656, 22.911001203125], [111.873260527344, 22.8997585273438], [111.877345, 22.8938430000001]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "云安县"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[111.787345, 22.793843], [111.799537382813, 22.7972658515626], [111.790767851563, 22.8060353828126], [111.761695585938, 22.8001442695313], [111.752345, 22.7866017890625], [111.743016386719, 22.8001149726563], [111.731673613281, 22.7975710273438], [111.727345, 22.803843], [111.731429472656, 22.8097585273438], [111.743260527344, 22.8179274726563], [111.766312285156, 22.8513161445313], [111.787345, 22.8466017890625], [111.812345, 22.8522048164063], [111.838892851563, 22.846255109375], [111.854505644531, 22.8879811835938], [111.877345, 22.8938430000001], [111.880494414063, 22.8722292304688], [111.899530058594, 22.890610578125], [111.877345, 22.8938430000001], [111.873260527344, 22.8997585273438], [111.856976347656, 22.911001203125], [111.841673613281, 22.9075710273438], [111.833260527344, 22.9197585273438], [111.818521757813, 22.9299367500001], [111.843260527344, 22.9679274726563], [111.851483183594, 23.0301564765626], [111.88033328125, 23.0236891914063], [111.896197539063, 23.0466628242188], [111.888983183594, 23.078843], [111.893465605469, 23.098843], [111.889132109375, 23.1181716132813], [111.897345, 23.1238430000001], [111.966553984375, 23.1352126289062], [111.987196074219, 23.0847756171875], [112.054439726563, 23.0748390937501], [112.077345, 23.0838430000001], [112.0640246875, 23.0395973945313], [112.051917753906, 23.0291677070312], [112.052847929688, 23.0175978828126], [112.032049589844, 23.0192678046876], [112.00271609375, 22.9984719062501], [111.974935332031, 22.9860744453126], [111.971942167969, 22.948843], [111.974876738281, 22.9123415351563], [111.953785429688, 22.8745388007813], [112.017345, 22.8796462226563], [112.041363554688, 22.8777175117188], [112.065843535156, 22.8913747382813], [112.117345, 22.8872365546876], [112.156082792969, 22.8903493476563], [112.151922636719, 22.8385842109376], [112.167345, 22.803843], [112.161429472656, 22.7997585273437], [112.153260527344, 22.7879274726562], [112.101444121094, 22.7746291328125], [112.060203886719, 22.7133888984376], [112.064217558594, 22.6954909492188], [112.039132109375, 22.6781716132813], [112.043616972656, 22.6581716132812], [112.026976347656, 22.646684796875], [111.9894934375, 22.6550881171875], [111.957345, 22.6338430000001], [111.93170046875, 22.6194875312501], [111.899000273438, 22.5771218085938], [111.877345, 22.5803200507812], [111.862135039063, 22.5780739570313], [111.820338164063, 22.590259015625], [111.823602324219, 22.6123513007813], [111.854722929688, 22.6077516914063], [111.851529570313, 22.6293556953125], [111.86298953125, 22.6381984687501], [111.87170046875, 22.6527614570313], [111.85170046875, 22.66819846875], [111.837345, 22.693843], [111.876800566406, 22.7039675117188], [111.869115019531, 22.7382570625], [111.831041289063, 22.7480275703125], [111.837738066406, 22.7778981757813], [111.774713164063, 22.7637697578125], [111.787345, 22.793843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "云城区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[112.31298953125, 23.08819846875], [112.284129667969, 23.0659230781251], [112.281605253906, 23.0488430000001], [112.283822050781, 23.033843], [112.281529570313, 23.0183303046875], [112.293741484375, 23.0089064765626], [112.27298953125, 22.95819846875], [112.25298953125, 22.9427614570313], [112.26170046875, 22.91819846875], [112.296009550781, 22.9086452460938], [112.291549101563, 22.878452375], [112.30298953125, 22.85948753125], [112.307345, 22.833843], [112.282386503906, 22.8277126289063], [112.272345, 22.8299636054688], [112.261898222656, 22.8276222968751], [112.238621855469, 22.8427785468751], [112.194539824219, 22.8242653632813], [112.183260527344, 22.8079274726563], [112.167345, 22.803843], [112.151922636719, 22.8385842109376], [112.156082792969, 22.8903493476563], [112.117345, 22.8872365546876], [112.065843535156, 22.8913747382813], [112.041363554688, 22.8777175117188], [112.017345, 22.8796462226563], [111.953785429688, 22.8745388007813], [111.974876738281, 22.9123415351563], [111.971942167969, 22.948843], [111.974935332031, 22.9860744453126], [112.00271609375, 22.9984719062501], [112.032049589844, 23.0192678046876], [112.052847929688, 23.0175978828126], [112.051917753906, 23.0291677070312], [112.0640246875, 23.0395973945313], [112.077345, 23.0838430000001], [112.095328398438, 23.0912331367188], [112.178951445313, 23.0745363593751], [112.221519804688, 23.1096681953125], [112.247345, 23.1238430000001], [112.288570585938, 23.1306154609375], [112.32170046875, 23.1050441718751], [112.31298953125, 23.08819846875]]]]
                    }
                }]
            }
        );
    }
));
