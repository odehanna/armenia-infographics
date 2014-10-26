/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['iceberg, sans-serif']='<script src=\"http://use.edgefonts.net/iceberg:n4:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','750px','1059px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'bg_part13',
                type: 'image',
                rect: ['-3245px', '-1700px','7240px','3800px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg_part1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'srednee_region',
                type: 'image',
                rect: ['510px', '181px','217px','38px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"srednee_region.png",'0px','0px']
            },
            {
                id: 'right_bg_part14',
                type: 'image',
                rect: ['-651px', '-1705px','2540px','3810px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"right_bg_part1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['17px', '13px','158px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
            },
            {
                id: 'armenia',
                type: 'image',
                rect: ['276px', '13px','166px','78px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"armenia.png",'0px','0px']
            },
            {
                id: 'title_lines',
                type: 'rect',
                rect: ['450', '47','auto','auto','auto', 'auto']
            },
            {
                id: 'title_linesCopy',
                type: 'rect',
                rect: ['450', '47','auto','auto','auto', 'auto']
            },
            {
                id: 'icons_srednee_region',
                type: 'rect',
                rect: ['89', '319','auto','auto','auto', 'auto']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['91px', '92px','48px','38px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc1',
                display: 'none',
                type: 'image',
                rect: ['91px', '311px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc1a',
                display: 'none',
                type: 'rect',
                rect: ['91px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'arc2',
                display: 'none',
                type: 'image',
                rect: ['161px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc2a',
                display: 'none',
                type: 'rect',
                rect: ['161px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['161px', '195px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc3',
                display: 'none',
                type: 'image',
                rect: ['231px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc3a',
                display: 'none',
                type: 'rect',
                rect: ['231px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['233px', '257px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc4',
                display: 'none',
                type: 'image',
                rect: ['301px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc4a',
                display: 'none',
                type: 'rect',
                rect: ['301px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text9',
                display: 'none',
                type: 'text',
                rect: ['303px', '238px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc5',
                display: 'none',
                type: 'image',
                rect: ['370px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc5a',
                display: 'none',
                type: 'rect',
                rect: ['370px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['372px', '229px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc6',
                display: 'none',
                type: 'image',
                rect: ['440px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc6a',
                display: 'none',
                type: 'rect',
                rect: ['440px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text11',
                display: 'none',
                type: 'text',
                rect: ['442px', '275px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc7',
                display: 'none',
                type: 'image',
                rect: ['511px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc7a',
                display: 'none',
                type: 'rect',
                rect: ['511px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['513px', '253px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'arc8',
                display: 'none',
                type: 'image',
                rect: ['576px', '310px','52px','27px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc8a',
                display: 'none',
                type: 'rect',
                rect: ['576px', '121px','52px','193px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text13',
                display: 'none',
                type: 'text',
                rect: ['578px', '278px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'icons_srednee_region',
                symbolName: 'icons_srednee_region',
                autoPlay: {

                }
            },
            {
                id: 'title_linesCopy',
                symbolName: 'title_lines',
                autoPlay: {

                }
            },
            {
                id: 'title_lines',
                symbolName: 'title_lines',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg_part13}": [
                ["style", "left", '-3245px'],
                ["style", "top", '-1700px']
            ],
            "${_Text8}": [
                ["style", "top", '257px'],
                ["style", "display", 'none'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "height", '21px'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "left", '233px'],
                ["style", "font-size", '20px']
            ],
            "${_right_bg_part13}": [
                ["style", "left", '-628px'],
                ["style", "top", '-1479px']
            ],
            "${_arc8a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '576px'],
                ["style", "display", 'none']
            ],
            "${_right_bg_part14}": [
                ["style", "left", '-378px'],
                ["style", "top", '-1705px']
            ],
            "${_arc1a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '91px'],
                ["style", "display", 'none']
            ],
            "${_arc2a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '161px'],
                ["style", "display", 'none']
            ],
            "${_arc5a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '370px'],
                ["style", "display", 'none']
            ],
            "${_logo}": [
                ["style", "left", '17px'],
                ["style", "top", '13px']
            ],
            "${_logo3}": [
                ["style", "left", '-688px'],
                ["style", "top", '-181px']
            ],
            "${_armenia}": [
                ["style", "left", '276px'],
                ["style", "top", '13px']
            ],
            "${_arc5}": [
                ["style", "display", 'none'],
                ["style", "left", '370px'],
                ["style", "top", '310px']
            ],
            "${_Text9}": [
                ["style", "top", '238px'],
                ["style", "height", '21px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '303px'],
                ["style", "font-size", '20px']
            ],
            "${_arc2}": [
                ["style", "display", 'none'],
                ["style", "left", '161px'],
                ["style", "top", '310px']
            ],
            "${_Text7}": [
                ["style", "top", '195px'],
                ["style", "display", 'none'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "height", '21px'],
                ["style", "font-weight", '700'],
                ["style", "left", '161px'],
                ["style", "font-size", '20px']
            ],
            "${_Text11}": [
                ["style", "top", '275px'],
                ["style", "height", '21px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '442px'],
                ["style", "font-size", '20px']
            ],
            "${_srednee_region}": [
                ["style", "top", '181px'],
                ["style", "opacity", '0'],
                ["style", "left", '510px']
            ],
            "${_arc3}": [
                ["style", "display", 'none'],
                ["style", "left", '231px'],
                ["style", "top", '310px']
            ],
            "${_arc7}": [
                ["style", "display", 'none'],
                ["style", "left", '511px'],
                ["style", "top", '310px']
            ],
            "${_title_linesCopy}": [
                ["style", "top", '47px'],
                ["style", "left", '214px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_arc8}": [
                ["style", "display", 'none'],
                ["style", "left", '576px'],
                ["style", "top", '310px']
            ],
            "${_arc1}": [
                ["style", "display", 'none'],
                ["style", "left", '91px'],
                ["style", "top", '311px']
            ],
            "${_arc7a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '511px'],
                ["style", "display", 'none']
            ],
            "${_arc4}": [
                ["style", "display", 'none'],
                ["style", "left", '301px'],
                ["style", "top", '310px']
            ],
            "${_arc6a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '440px'],
                ["style", "display", 'none']
            ],
            "${_Text13}": [
                ["style", "top", '278px'],
                ["style", "height", '21px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '578px'],
                ["style", "font-size", '20px']
            ],
            "${_Text6}": [
                ["style", "text-align", 'center'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '91px'],
                ["style", "font-size", '20px']
            ],
            "${_arc4a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '301px'],
                ["style", "display", 'none']
            ],
            "${_arc6}": [
                ["style", "display", 'none'],
                ["style", "left", '440px'],
                ["style", "top", '310px']
            ],
            "${_Text12}": [
                ["style", "top", '253px'],
                ["style", "display", 'none'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "height", '21px'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "left", '513px'],
                ["style", "font-size", '20px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "min-width", '240px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1060px'],
                ["style", "max-width", '750px'],
                ["style", "width", '750px']
            ],
            "${_arc3a}": [
                ["style", "top", '310px'],
                ["style", "height", '-2px'],
                ["style", "opacity", '1'],
                ["style", "left", '231px'],
                ["style", "display", 'none']
            ],
            "${_Text10}": [
                ["style", "top", '229px'],
                ["style", "display", 'none'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "height", '21px'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "left", '372px'],
                ["style", "font-size", '20px']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3833,
            autoPlay: true,
            timeline: [
                { id: "eid227", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 2333, duration: 0 },
                { id: "eid235", tween: [ "style", "${_arc7a}", "display", 'block', { fromValue: 'none'}], position: 2833, duration: 0, easing: "easeOutElastic" },
                { id: "eid246", tween: [ "style", "${_arc8}", "display", 'block', { fromValue: 'none'}], position: 3333, duration: 0, easing: "easeOutElastic" },
                { id: "eid247", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 3333, duration: 0 },
                { id: "eid218", tween: [ "style", "${_arc5a}", "height", '54px', { fromValue: '-2px'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid222", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid226", tween: [ "style", "${_arc6}", "display", 'block', { fromValue: 'none'}], position: 2333, duration: 0, easing: "easeOutElastic" },
                { id: "eid236", tween: [ "style", "${_arc7}", "display", 'block', { fromValue: 'none'}], position: 2833, duration: 0, easing: "easeOutElastic" },
                { id: "eid207", tween: [ "style", "${_arc3a}", "height", '27px', { fromValue: '-2px'}], position: 1071, duration: 500, easing: "easeOutElastic" },
                { id: "eid223", tween: [ "style", "${_arc6a}", "height", '8px', { fromValue: '-2px'}], position: 2333, duration: 500, easing: "easeOutElastic" },
                { id: "eid42", tween: [ "style", "${_title_linesCopy}", "top", '47px', { fromValue: '47px'}], position: 750, duration: 0, easing: "easeOutCubic" },
                { id: "eid209", tween: [ "style", "${_arc3a}", "top", '286px', { fromValue: '310px'}], position: 1071, duration: 500, easing: "easeOutElastic" },
                { id: "eid44", tween: [ "style", "${_srednee_region}", "opacity", '1', { fromValue: '0'}], position: 1071, duration: 1639, easing: "easeOutCubic" },
                { id: "eid41", tween: [ "style", "${_title_linesCopy}", "left", '214px', { fromValue: '214px'}], position: 750, duration: 0, easing: "easeOutCubic" },
                { id: "eid225", tween: [ "style", "${_arc6a}", "display", 'block', { fromValue: 'none'}], position: 2333, duration: 0, easing: "easeOutElastic" },
                { id: "eid212", tween: [ "style", "${_arc4a}", "top", '267px', { fromValue: '310px'}], position: 1500, duration: 500, easing: "easeOutElastic" },
                { id: "eid243", tween: [ "style", "${_arc8a}", "height", '4px', { fromValue: '-2px'}], position: 3333, duration: 500, easing: "easeOutElastic" },
                { id: "eid244", tween: [ "style", "${_arc8a}", "top", '309px', { fromValue: '310px'}], position: 3333, duration: 500, easing: "easeOutElastic" },
                { id: "eid219", tween: [ "style", "${_arc5a}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
                { id: "eid208", tween: [ "style", "${_arc3a}", "display", 'block', { fromValue: 'none'}], position: 1071, duration: 0, easing: "easeOutElastic" },
                { id: "eid200", tween: [ "style", "${_arc1a}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutElastic" },
                { id: "eid213", tween: [ "style", "${_arc4a}", "height", '46px', { fromValue: '-2px'}], position: 1500, duration: 500, easing: "easeOutElastic" },
                { id: "eid224", tween: [ "style", "${_arc6a}", "top", '305px', { fromValue: '310px'}], position: 2333, duration: 500, easing: "easeOutElastic" },
                { id: "eid35", tween: [ "transform", "${_title_linesCopy}", "rotateZ", '-180deg', { fromValue: '-180deg'}], position: 750, duration: 0, easing: "easeOutCubic" },
                { id: "eid211", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1071, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid245", tween: [ "style", "${_arc8a}", "display", 'block', { fromValue: 'none'}], position: 3333, duration: 0, easing: "easeOutElastic" },
                { id: "eid220", tween: [ "style", "${_arc5a}", "top", '259px', { fromValue: '310px'}], position: 2000, duration: 500, easing: "easeOutElastic" },
                { id: "eid210", tween: [ "style", "${_arc3}", "display", 'block', { fromValue: 'none'}], position: 1071, duration: 0, easing: "easeOutElastic" },
                { id: "eid215", tween: [ "style", "${_arc4}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutElastic" },
                { id: "eid237", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 2833, duration: 0 },
                { id: "eid214", tween: [ "style", "${_arc4a}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutElastic" },
                { id: "eid198", tween: [ "style", "${_arc1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutElastic" },
                { id: "eid201", tween: [ "style", "${_arc2a}", "top", '224px', { fromValue: '310px'}], position: 750, duration: 500, easing: "easeOutElastic" },
                { id: "eid234", tween: [ "style", "${_arc7a}", "height", '27px', { fromValue: '-2px'}], position: 2833, duration: 500, easing: "easeOutElastic" },
                { id: "eid205", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid197", tween: [ "style", "${_arc1a}", "top", '121px', { fromValue: '310px'}], position: 500, duration: 500, easing: "easeOutElastic" },
                { id: "eid204", tween: [ "style", "${_arc2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutElastic" },
                { id: "eid221", tween: [ "style", "${_arc5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
                { id: "eid202", tween: [ "style", "${_arc2a}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutElastic" },
                { id: "eid12", tween: [ "style", "${_right_bg_part14}", "left", '-649px', { fromValue: '-378px'}], position: 750, duration: 606, easing: "easeOutExpo" },
                { id: "eid206", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid233", tween: [ "style", "${_arc7a}", "top", '286px', { fromValue: '310px'}], position: 2833, duration: 500, easing: "easeOutElastic" },
                { id: "eid195", tween: [ "style", "${_arc1a}", "height", '193px', { fromValue: '-2px'}], position: 500, duration: 500, easing: "easeOutElastic" },
                { id: "eid203", tween: [ "style", "${_arc2a}", "height", '89px', { fromValue: '-2px'}], position: 750, duration: 500, easing: "easeOutElastic" }            ]
        }
    }
},
"title_lines": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '16px', '31px', '2px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1.00)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '8px', '62px', '2px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy5',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '31px', '2px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '0px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '16px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle}": [
                ["style", "top", '8px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '62px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 850,
            autoPlay: true,
            timeline: [
                { id: "eid29", tween: [ "style", "${_RectangleCopy5}", "width", '31px', { fromValue: '0px'}], position: 250, duration: 350, easing: "easeOutCubic" },
                { id: "eid33", tween: [ "style", "${_RectangleCopy3}", "width", '31px', { fromValue: '0px'}], position: 250, duration: 350, easing: "easeOutCubic" },
                { id: "eid31", tween: [ "style", "${_Rectangle}", "width", '62px', { fromValue: '0px'}], position: 500, duration: 350, easing: "easeOutCubic" }            ]
        }
    }
},
"icons_srednee_region": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'population',
                    fill: ['rgba(0,0,0,0)', 'images/population.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['70px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'money',
                    fill: ['rgba(0,0,0,0)', 'images/money.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['137px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'study',
                    fill: ['rgba(0,0,0,0)', 'images/study.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['208px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'public',
                    fill: ['rgba(0,0,0,0)', 'images/public.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['280px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'press',
                    fill: ['rgba(0,0,0,0)', 'images/press.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['350px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'internet',
                    fill: ['rgba(0,0,0,0)', 'images/internet.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['421px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'tecnology',
                    fill: ['rgba(0,0,0,0)', 'images/tecnology.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle3Copy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['486px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'internet_users',
                    fill: ['rgba(0,0,0,0)', 'images/internet_users.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_money}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '70px'],
                ["style", "display", 'none']
            ],
            "${_public}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '210px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle3Copy2}": [
                ["style", "height", '3px'],
                ["style", "top", '24px'],
                ["style", "left", '189px'],
                ["style", "width", '0px']
            ],
            "${_population}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.54041'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0.54041']
            ],
            "${_Rectangle3Copy4}": [
                ["style", "height", '3px'],
                ["style", "top", '24px'],
                ["style", "left", '329px'],
                ["style", "width", '0px']
            ],
            "${_tecnology}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '421px'],
                ["style", "display", 'none']
            ],
            "${_internet}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '350px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle3Copy3}": [
                ["style", "height", '3px'],
                ["style", "top", '24px'],
                ["style", "left", '262px'],
                ["style", "width", '0px']
            ],
            "${_study}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '140px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle3Copy6}": [
                ["style", "height", '3px'],
                ["style", "top", '24px'],
                ["style", "left", '400px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle3}": [
                ["style", "height", '3px'],
                ["style", "top", '24px'],
                ["style", "left", '51px'],
                ["style", "width", '0px']
            ],
            "${_press}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '280px'],
                ["style", "display", 'none']
            ],
            "${_internet_users}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '486px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle3Copy5}": [
                ["style", "height", '3px'],
                ["style", "top", '24px'],
                ["style", "left", '329px'],
                ["style", "width", '0px']
            ],
            "${_Rectangle3Copy}": [
                ["style", "top", '24px'],
                ["style", "height", '3px'],
                ["style", "left", '121px'],
                ["style", "width", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '541px']
            ],
            "${_Rectangle3Copy9}": [
                ["style", "top", '24px'],
                ["style", "height", '3px'],
                ["style", "left", '473px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            labels: {
                "num1": 500
            },
            timeline: [
                { id: "eid163", tween: [ "style", "${_Rectangle3Copy6}", "width", '27px', { fromValue: '0px'}], position: 2906, duration: 250, easing: "easeOutCubic" },
                { id: "eid125", tween: [ "transform", "${_population}", "scaleY", '1', { fromValue: '0.54041'}], position: 156, duration: 500, easing: "easeOutBounce" },
                { id: "eid115", tween: [ "transform", "${_money}", "scaleX", '1', { fromValue: '0.5404'}], position: 561, duration: 515, easing: "easeOutBounce" },
                { id: "eid132", tween: [ "style", "${_Rectangle3}", "width", '27px', { fromValue: '0px'}], position: 406, duration: 250, easing: "easeOutCubic" },
                { id: "eid103", tween: [ "transform", "${_tecnology}", "scaleX", '1', { fromValue: '0.5404'}], position: 2656, duration: 401, easing: "easeOutBounce" },
                { id: "eid174", tween: [ "style", "${_Rectangle3Copy9}", "width", '27px', { fromValue: '0px'}], position: 3057, duration: 246, easing: "easeOutCubic" },
                { id: "eid155", tween: [ "style", "${_internet}", "display", 'block', { fromValue: 'none'}], position: 2280, duration: 0, easing: "easeOutBounce" },
                { id: "eid101", tween: [ "transform", "${_internet_users}", "scaleY", '1', { fromValue: '0.5404'}], position: 3156, duration: 344, easing: "easeOutBounce" },
                { id: "eid123", tween: [ "transform", "${_population}", "scaleX", '1', { fromValue: '0.54041'}], position: 156, duration: 500, easing: "easeOutBounce" },
                { id: "eid99", tween: [ "transform", "${_internet_users}", "scaleX", '1', { fromValue: '0.5404'}], position: 3156, duration: 344, easing: "easeOutBounce" },
                { id: "eid156", tween: [ "style", "${_public}", "display", 'block', { fromValue: 'none'}], position: 1480, duration: 0, easing: "easeOutBounce" },
                { id: "eid111", tween: [ "transform", "${_public}", "scaleX", '1', { fromValue: '0.5404'}], position: 1480, duration: 426, easing: "easeOutBounce" },
                { id: "eid141", tween: [ "style", "${_Rectangle3Copy2}", "left", '189px', { fromValue: '189px'}], position: 1525, duration: 0, easing: "easeOutBounce" },
                { id: "eid159", tween: [ "style", "${_Rectangle3Copy5}", "width", '27px', { fromValue: '0px'}], position: 2508, duration: 220, easing: "easeOutCubic" },
                { id: "eid162", tween: [ "style", "${_Rectangle3Copy6}", "left", '400px', { fromValue: '400px'}], position: 3156, duration: 0, easing: "easeOutBounce" },
                { id: "eid137", tween: [ "style", "${_study}", "display", 'block', { fromValue: 'none'}], position: 1003, duration: 0, easing: "easeOutBounce" },
                { id: "eid113", tween: [ "transform", "${_public}", "scaleY", '1', { fromValue: '0.5404'}], position: 1480, duration: 426, easing: "easeOutBounce" },
                { id: "eid109", tween: [ "transform", "${_internet}", "scaleY", '1', { fromValue: '0.5404'}], position: 2280, duration: 448, easing: "easeOutBounce" },
                { id: "eid140", tween: [ "style", "${_study}", "left", '140px', { fromValue: '140px'}], position: 1385, duration: 0, easing: "easeOutBounce" },
                { id: "eid135", tween: [ "style", "${_population}", "display", 'block', { fromValue: 'none'}], position: 156, duration: 0, easing: "easeOutBounce" },
                { id: "eid119", tween: [ "transform", "${_study}", "scaleX", '1', { fromValue: '0.5404'}], position: 1003, duration: 477, easing: "easeOutBounce" },
                { id: "eid136", tween: [ "style", "${_Rectangle3Copy}", "width", '27px', { fromValue: '0px'}], position: 819, duration: 257, easing: "easeOutCubic" },
                { id: "eid150", tween: [ "style", "${_Rectangle3Copy3}", "width", '27px', { fromValue: '0px'}], position: 1749, duration: 236, easing: "easeOutCubic" },
                { id: "eid134", tween: [ "style", "${_money}", "display", 'block', { fromValue: 'none'}], position: 561, duration: 0, easing: "easeOutBounce" },
                { id: "eid154", tween: [ "style", "${_Rectangle3Copy4}", "width", '27px', { fromValue: '0px'}], position: 2156, duration: 250, easing: "easeOutCubic" },
                { id: "eid97", tween: [ "transform", "${_press}", "scaleY", '1', { fromValue: '0.5404'}], position: 1906, duration: 500, easing: "easeOutBounce" },
                { id: "eid95", tween: [ "transform", "${_press}", "scaleX", '1', { fromValue: '0.5404'}], position: 1906, duration: 500, easing: "easeOutBounce" },
                { id: "eid153", tween: [ "style", "${_Rectangle3Copy4}", "left", '329px', { fromValue: '329px'}], position: 2406, duration: 0, easing: "easeOutBounce" },
                { id: "eid117", tween: [ "transform", "${_money}", "scaleY", '1', { fromValue: '0.5404'}], position: 561, duration: 515, easing: "easeOutBounce" },
                { id: "eid173", tween: [ "style", "${_Rectangle3Copy9}", "left", '473px', { fromValue: '473px'}], position: 3303, duration: 0, easing: "easeOutBounce" },
                { id: "eid121", tween: [ "transform", "${_study}", "scaleY", '1', { fromValue: '0.5404'}], position: 1003, duration: 477, easing: "easeOutBounce" },
                { id: "eid175", tween: [ "style", "${_press}", "display", 'block', { fromValue: 'none'}], position: 1906, duration: 0, easing: "easeOutBounce" },
                { id: "eid144", tween: [ "style", "${_public}", "left", '210px', { fromValue: '210px'}], position: 1906, duration: 0, easing: "easeOutCubic" },
                { id: "eid160", tween: [ "style", "${_tecnology}", "display", 'block', { fromValue: 'none'}], position: 2656, duration: 0, easing: "easeOutBounce" },
                { id: "eid142", tween: [ "style", "${_Rectangle3Copy2}", "width", '27px', { fromValue: '0px'}], position: 1293, duration: 284, easing: "easeOutCubic" },
                { id: "eid164", tween: [ "style", "${_internet_users}", "display", 'block', { fromValue: 'none'}], position: 3156, duration: 0, easing: "easeOutBounce" },
                { id: "eid107", tween: [ "transform", "${_internet}", "scaleX", '1', { fromValue: '0.5404'}], position: 2280, duration: 448, easing: "easeOutBounce" },
                { id: "eid158", tween: [ "style", "${_Rectangle3Copy5}", "left", '329px', { fromValue: '329px'}], position: 2729, duration: 0, easing: "easeOutBounce" },
                { id: "eid105", tween: [ "transform", "${_tecnology}", "scaleY", '1', { fromValue: '0.5404'}], position: 2656, duration: 401, easing: "easeOutBounce" },
                { id: "eid149", tween: [ "style", "${_Rectangle3Copy3}", "left", '262px', { fromValue: '262px'}], position: 1985, duration: 0, easing: "easeOutBounce" },
                { id: "eid139", tween: [ "style", "${_Rectangle3Copy}", "left", '121px', { fromValue: '121px'}], position: 1076, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6482221");
