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
        echarts.registerMap('惠州市',
            {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {"name": "博罗县"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[114.479713164063, 23.7051296210938], [114.503443632813, 23.6899391914063], [114.511246367188, 23.6777468085937], [114.527345, 23.673843], [114.533394804688, 23.6502638984376], [114.553565703125, 23.6192897773438], [114.549254179688, 23.6000466132812], [114.57142703125, 23.5679274726563], [114.597432890625, 23.5581960273438], [114.612345, 23.5366017890625], [114.62142703125, 23.5497585273438], [114.647345, 23.563843], [114.653443632813, 23.5599391914063], [114.661246367188, 23.5377468085938], [114.6947278125, 23.5296266914063], [114.673648710938, 23.498843], [114.6945325, 23.4683498359375], [114.661246367188, 23.4499391914063], [114.645636015625, 23.4255519843751], [114.627345, 23.413843], [114.60197390625, 23.4092140937501], [114.59271609375, 23.38847190625], [114.575069609375, 23.3732692695313], [114.549229765625, 23.4032643867187], [114.519854765625, 23.3868727851563], [114.496065703125, 23.3335622382813], [114.5180871875, 23.3145876289062], [114.5366028125, 23.2930983710938], [114.561754179688, 23.2714284492188], [114.505675078125, 23.2464040351563], [114.474527617188, 23.2637844062501], [114.424610625, 23.2058498359376], [114.368782988281, 23.2103346992188], [114.328089628906, 23.1630983710938], [114.31197390625, 23.1492140937501], [114.294359160156, 23.1287697578125], [114.236085234375, 23.1181398750001], [114.216751738281, 23.1196950507813], [114.17271609375, 23.08847190625], [114.15197390625, 23.07921409375], [114.138089628906, 23.0630983710938], [114.127345, 23.0538430000001], [114.094881621094, 23.0600417304688], [114.079500761719, 23.108618390625], [114.015628691406, 23.0862306953126], [113.972535429688, 23.1090334296875], [113.882296171875, 23.1198317695313], [113.852193632813, 23.118637921875], [113.837345, 23.1238430000001], [113.846085234375, 23.151450421875], [113.89658328125, 23.1752834296876], [113.878468046875, 23.1920680976563], [113.897323027344, 23.227700421875], [113.882535429688, 23.2590334296875], [113.872017851563, 23.2687770820313], [113.882535429688, 23.2886525703126], [113.893990507813, 23.3486525703125], [113.943436308594, 23.3388552070313], [113.979705839844, 23.2997096992188], [113.992154570313, 23.3390334296875], [113.997345, 23.343843], [114.038690214844, 23.3344509101563], [114.043587675781, 23.373843], [114.040721464844, 23.3969045234375], [114.09197390625, 23.4295119453125], [114.104605742188, 23.4279396796876], [114.17099734375, 23.4559157539063], [114.181890898438, 23.4695217109376], [114.192345, 23.4682204414063], [114.222799101563, 23.4720095039063], [114.245355253906, 23.4438381171876], [114.312899199219, 23.5282888007813], [114.321790800781, 23.5493971992187], [114.332899199219, 23.5582888007812], [114.358858671875, 23.6010329414063], [114.397103300781, 23.6316579414063], [114.382899199219, 23.6493971992188], [114.354522734375, 23.6721193671876], [114.392899199219, 23.6882888007813], [114.417345, 23.703843], [114.426156035156, 23.6900783515626], [114.479713164063, 23.7051296210938]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "惠城区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[114.693682890625, 23.4146071601563], [114.691085234375, 23.3937013984375], [114.701793242188, 23.3682888007812], [114.713023710938, 23.3592971015625], [114.711666289063, 23.3483669257813], [114.774386015625, 23.31026878125], [114.770650664063, 23.28022971875], [114.785479765625, 23.2550051093751], [114.777345, 23.2338430000001], [114.73170046875, 23.2294875312501], [114.691905546875, 23.1999806953125], [114.68298953125, 23.1781984687501], [114.670172148438, 23.1569484687501], [114.651832304688, 23.1596584296875], [114.635894804688, 23.139009015625], [114.617345, 23.133843], [114.60263796875, 23.1280617500001], [114.571031523438, 23.1327321601563], [114.57312625, 23.11855003125], [114.559127226563, 23.0829372382813], [114.531226835938, 23.0614015937501], [114.535611601563, 23.0317360664063], [114.499840117188, 22.9834865546876], [114.453057890625, 22.9473805976563], [114.43298953125, 22.9594875312501], [114.41170046875, 22.96819846875], [114.39298953125, 22.9994875312501], [114.37170046875, 23.00819846875], [114.361419707031, 23.02151878125], [114.3027746875, 22.9780397773438], [114.292345, 22.9795827460938], [114.271912871094, 22.9765627265625], [114.24298953125, 22.92819846875], [114.227345, 22.923843], [114.20375125, 22.9297292304688], [114.215452910156, 22.9761818671875], [114.203040800781, 22.997837140625], [114.152345, 22.985063703125], [114.119686308594, 22.9932912421875], [114.125379667969, 23.0158864570313], [114.14486453125, 23.028843], [114.131339140625, 23.037837140625], [114.127345, 23.0538430000001], [114.138089628906, 23.0630983710938], [114.15197390625, 23.07921409375], [114.17271609375, 23.08847190625], [114.216751738281, 23.1196950507813], [114.236085234375, 23.1181398750001], [114.294359160156, 23.1287697578125], [114.31197390625, 23.1492140937501], [114.328089628906, 23.1630983710938], [114.368782988281, 23.2103346992188], [114.424610625, 23.2058498359376], [114.474527617188, 23.2637844062501], [114.505675078125, 23.2464040351563], [114.561754179688, 23.2714284492188], [114.5366028125, 23.2930983710938], [114.5180871875, 23.3145876289062], [114.496065703125, 23.3335622382813], [114.519854765625, 23.3868727851563], [114.549229765625, 23.4032643867187], [114.575069609375, 23.3732692695313], [114.59271609375, 23.38847190625], [114.60197390625, 23.4092140937501], [114.627345, 23.413843], [114.632799101563, 23.4070339179688], [114.693682890625, 23.4146071601563]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "惠东县"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[114.887345, 22.5538430000001], [114.883922148438, 22.5416506171875], [114.875152617188, 22.5504201484375], [114.887345, 22.5538430000001]]], [[[114.887345, 22.5538430000001], [114.893595, 22.5865822578126], [114.921827421875, 22.5604250312501], [114.887345, 22.5538430000001]]], [[[114.777345, 22.8238430000001], [114.773922148438, 22.8360353828126], [114.765152617188, 22.8272658515625], [114.77330203125, 22.7917751289063], [114.742213164063, 22.7763210273438], [114.720704375, 22.787202375], [114.713326445313, 22.8017873359376], [114.697345, 22.793843], [114.689967070313, 22.8342897773438], [114.602027617188, 22.8183473945313], [114.59271609375, 22.8392140937501], [114.581163359375, 22.8491677070313], [114.582745390625, 22.868843], [114.58158328125, 22.8833229804687], [114.561763945313, 22.918843], [114.573541289063, 22.9399513984375], [114.60255984375, 22.9376198554688], [114.61197390625, 22.9892140937501], [114.62271609375, 22.9984719062501], [114.6332825, 23.022153546875], [114.631944609375, 23.038843], [114.632760039063, 23.0489870429688], [114.617345, 23.133843], [114.635894804688, 23.139009015625], [114.651832304688, 23.1596584296875], [114.670172148438, 23.1569484687501], [114.68298953125, 23.1781984687501], [114.691905546875, 23.1999806953125], [114.73170046875, 23.2294875312501], [114.777345, 23.2338430000001], [114.782843046875, 23.2151052070313], [114.849322539063, 23.1624929023438], [114.862882109375, 23.1985768867188], [114.86107546875, 23.2162966132813], [114.876422148438, 23.2347682929688], [114.892896757813, 23.2484523750001], [114.891803007813, 23.2591652656251], [114.910011015625, 23.2909596992188], [114.9128528125, 23.3188430000001], [114.910079375, 23.3460646796875], [114.945421171875, 23.3496657539063], [114.962808867188, 23.3193044257813], [114.975631132813, 23.2897389960938], [115.010391875, 23.3315895820313], [115.051285429688, 23.3274221015625], [115.101881132813, 23.3593044257813], [115.152808867188, 23.3683815742188], [115.187725859375, 23.3883815742188], [115.269737578125, 23.3784670234375], [115.292808867188, 23.3593044257813], [115.305050078125, 23.3175905585938], [115.338233671875, 23.32097190625], [115.390992460938, 23.2834914375001], [115.401881132813, 23.2583815742188], [115.407345, 23.253843], [115.407345, 23.2438430000001], [115.395655546875, 23.2307595039062], [115.349034453125, 23.1969264960937], [115.323970976563, 23.1688747382813], [115.279678984375, 23.1585695625001], [115.283238554688, 23.098843], [115.260260039063, 23.088296125], [115.239478789063, 23.0650417304688], [115.16724734375, 23.0372731757813], [115.14252078125, 22.9983962226563], [115.112545195313, 23.0091530585938], [115.097345, 23.008247296875], [115.082100859375, 23.0091555], [115.022413359375, 22.9601833320313], [114.982569609375, 22.9385305], [114.966441679688, 22.9394924140625], [114.913121367188, 22.9150197578126], [114.93283328125, 22.87874534375], [114.917408476563, 22.8649636054688], [114.932061796875, 22.8485622382813], [114.942628203125, 22.8391237617188], [114.952061796875, 22.7985622382813], [114.9926575, 22.7691017890625], [114.991607695313, 22.7514577460937], [115.012061796875, 22.7285622382812], [115.017345, 22.723843], [115.017345, 22.7038430000001], [114.97297, 22.6901418281251], [114.953189726563, 22.6679982734375], [114.932061796875, 22.6491237617188], [114.917906523438, 22.6332814765625], [114.9020325, 22.6190969062501], [114.902642851563, 22.608843], [114.9019934375, 22.5979689765625], [114.882345, 22.5991408515626], [114.872345, 22.5985451484375], [114.847345, 22.6000344062501], [114.812345, 22.5979494453126], [114.792164335938, 22.5991506171875], [114.752174101563, 22.5884401679688], [114.741539335938, 22.6003395820313], [114.74373171875, 22.6370925117188], [114.731890898438, 22.6588771796875], [114.752799101563, 22.6888088203125], [114.74095828125, 22.7105934882813], [114.74334109375, 22.7505300117188], [114.831651640625, 22.7910622382813], [114.806783476563, 22.8132814765626], [114.792491484375, 22.8292775703125], [114.777345, 22.8238430000001]], [[114.927345, 22.723843], [114.927345, 22.713843], [114.937345, 22.713843], [114.937345, 22.7038430000001], [114.947345, 22.7038430000001], [114.950767851563, 22.6916506171876], [114.959537382813, 22.7004201484375], [114.947345, 22.7038430000001], [114.947345, 22.713843], [114.937345, 22.713843], [114.937345, 22.723843], [114.932965117188, 22.7316847968751], [114.961519804688, 22.7260427070313], [114.94896609375, 22.7465309882813], [114.868629179688, 22.7625710273437], [114.88341921875, 22.7392751289062], [114.879678984375, 22.7203566718751], [114.897921171875, 22.7167531562501], [114.927345, 22.723843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "惠阳区"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[114.643922148438, 22.4460353828125], [114.647345, 22.4338430000001], [114.635152617188, 22.4372658515625], [114.643922148438, 22.4460353828125]]], [[[114.628961210938, 22.4776589179688], [114.647345, 22.453843], [114.61298953125, 22.4596804023438], [114.628961210938, 22.4776589179688]]], [[[114.647345, 22.573843], [114.659537382813, 22.5704201484376], [114.650767851563, 22.5616506171875], [114.647345, 22.573843]]], [[[114.647345, 22.573843], [114.635152617188, 22.5772658515626], [114.643922148438, 22.5860353828125], [114.647345, 22.573843]]], [[[114.517345, 22.6738430000001], [114.529537382813, 22.6704201484375], [114.520767851563, 22.6616506171875], [114.517345, 22.6738430000001]]], [[[114.593922148438, 22.7060353828125], [114.597345, 22.693843], [114.585152617188, 22.6972658515625], [114.593922148438, 22.7060353828125]]], [[[114.537345, 22.7038430000001], [114.531910429688, 22.7165407539063], [114.514346953125, 22.707895734375], [114.537345, 22.683843], [114.517345, 22.683843], [114.517345, 22.6738430000001], [114.507345, 22.6738430000001], [114.472379179688, 22.6680983710938], [114.457345, 22.6703200507813], [114.429744902344, 22.6662429023438], [114.434486113281, 22.6983303046876], [114.40724734375, 22.7193556953126], [114.413822050781, 22.763843], [114.410709257813, 22.7849196601563], [114.38298953125, 22.76819846875], [114.358426542969, 22.75948753125], [114.340667753906, 22.7824929023438], [114.344945097656, 22.8114430976563], [114.307345, 22.8058864570312], [114.2819153125, 22.8096462226563], [114.2527746875, 22.7880397773438], [114.233746367188, 22.7908522773438], [114.227345, 22.813843], [114.232064238281, 22.8791237617188], [114.261224394531, 22.9051784492188], [114.232064238281, 22.9185622382813], [114.227345, 22.923843], [114.24298953125, 22.92819846875], [114.271912871094, 22.9765627265625], [114.292345, 22.9795827460938], [114.3027746875, 22.9780397773438], [114.361419707031, 23.02151878125], [114.37170046875, 23.00819846875], [114.39298953125, 22.9994875312501], [114.41170046875, 22.96819846875], [114.43298953125, 22.9594875312501], [114.453057890625, 22.9473805976563], [114.499840117188, 22.9834865546876], [114.535611601563, 23.0317360664063], [114.531226835938, 23.0614015937501], [114.559127226563, 23.0829372382813], [114.57312625, 23.11855003125], [114.571031523438, 23.1327321601563], [114.60263796875, 23.1280617500001], [114.617345, 23.133843], [114.632760039063, 23.0489870429688], [114.631944609375, 23.038843], [114.6332825, 23.022153546875], [114.62271609375, 22.9984719062501], [114.61197390625, 22.9892140937501], [114.60255984375, 22.9376198554688], [114.573541289063, 22.9399513984375], [114.561763945313, 22.918843], [114.58158328125, 22.8833229804687], [114.582745390625, 22.868843], [114.581163359375, 22.8491677070313], [114.59271609375, 22.8392140937501], [114.602027617188, 22.8183473945313], [114.689967070313, 22.8342897773438], [114.697345, 22.793843], [114.69142703125, 22.7897585273438], [114.68326296875, 22.7779274726563], [114.65142703125, 22.7697585273438], [114.63326296875, 22.7579274726563], [114.5676184375, 22.73491721875], [114.5767590625, 22.6941628242188], [114.537345, 22.7038430000001]], [[114.557345, 22.723843], [114.553922148438, 22.7360353828125], [114.545152617188, 22.7272658515626], [114.557345, 22.723843]]]]
                    }
                }, {
                    "type": "Feature",
                    "properties": {"name": "龙门县"},
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [[[[114.26271609375, 23.9484719062501], [114.23271609375, 23.9226247382813], [114.278792753906, 23.9003346992188], [114.307345, 23.8980397773438], [114.322515898438, 23.8992580390625], [114.347345, 23.8938430000001], [114.34271609375, 23.87847190625], [114.32295046875, 23.8430422187501], [114.342764921875, 23.7890822578125], [114.340413847656, 23.7598146796876], [114.352772246094, 23.7491677070313], [114.351180449219, 23.7293386054687], [114.362669707031, 23.7284157539063], [114.377345, 23.7454494453126], [114.396600371094, 23.7230983710938], [114.41271609375, 23.7092140937501], [114.417345, 23.703843], [114.392899199219, 23.6882888007813], [114.354522734375, 23.6721193671876], [114.382899199219, 23.6493971992188], [114.397103300781, 23.6316579414063], [114.358858671875, 23.6010329414063], [114.332899199219, 23.5582888007812], [114.321790800781, 23.5493971992187], [114.312899199219, 23.5282888007813], [114.245355253906, 23.4438381171876], [114.222799101563, 23.4720095039063], [114.192345, 23.4682204414063], [114.181890898438, 23.4695217109376], [114.17099734375, 23.4559157539063], [114.104605742188, 23.4279396796876], [114.09197390625, 23.4295119453125], [114.040721464844, 23.3969045234375], [114.043587675781, 23.373843], [114.038690214844, 23.3344509101563], [113.997345, 23.343843], [113.9783996875, 23.3736232734376], [113.99334109375, 23.3990431953126], [113.981790800781, 23.4082888007812], [113.972899199219, 23.4293971992188], [113.94361453125, 23.45284690625], [113.975748320313, 23.4785817695313], [113.941790800781, 23.4882888007813], [113.896551542969, 23.5148830390626], [113.850863066406, 23.5719362617188], [113.856473417969, 23.6170339179688], [113.817345, 23.6238430000001], [113.805738554688, 23.633843], [113.831712675781, 23.6562209296875], [113.84197390625, 23.6792140937501], [113.87271609375, 23.68847190625], [113.934827910156, 23.739848859375], [113.953963652344, 23.7383107734375], [113.97197390625, 23.75921409375], [113.995655546875, 23.7697829414063], [114.021046171875, 23.7677419257813], [114.05197390625, 23.7812404609376], [114.031917753906, 23.7985182929688], [114.032747832031, 23.8088430000001], [114.031920195313, 23.8191213203125], [114.050316191406, 23.8520925117188], [114.027345, 23.903843], [114.03271609375, 23.9084719062501], [114.051373320313, 23.9301271796875], [114.077345, 23.9280397773438], [114.092345, 23.9292458320313], [114.102623320313, 23.9284181953125], [114.12197390625, 23.9392140937501], [114.15271609375, 23.9484719062501], [114.172345, 23.9594216132813], [114.20814578125, 23.93944846875], [114.27197390625, 23.96288596875], [114.26271609375, 23.9484719062501]]]]
                    }
                }]
            }
        );
    }
));
