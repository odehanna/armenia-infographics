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
                cursor: ['pointer'],
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
                id: 'arc1',
                type: 'image',
                rect: ['91px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc2',
                type: 'image',
                rect: ['160px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc3',
                type: 'image',
                rect: ['231px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc4',
                type: 'image',
                rect: ['301px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc5',
                type: 'image',
                rect: ['370px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc6',
                type: 'image',
                rect: ['440px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc7',
                type: 'image',
                rect: ['511px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'arc8',
                type: 'image',
                rect: ['576px', '138px','52px','202px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arc.png",'0px','0px']
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['93px', '114px','48px','38px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
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
                id: 'Text8',
                display: 'none',
                type: 'text',
                rect: ['233px', '257px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
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
                id: 'Text10',
                display: 'none',
                type: 'text',
                rect: ['372px', '229px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
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
                id: 'Text12',
                display: 'none',
                type: 'text',
                rect: ['513px', '253px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'Text13',
                display: 'none',
                type: 'text',
                rect: ['578px', '278px','48px','21px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['iceberg, sans-serif', 20, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: 'bg_middle',
                type: 'image',
                rect: ['-2px', '391px','749px','273px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg_middle.png",'0px','0px']
            },
            {
                id: 'bg_middle_right',
                type: 'image',
                rect: ['484px', '392px','260px','273px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg_middle_right.png",'0px','0px']
            },
            {
                id: 'dinamica-stranu',
                type: 'image',
                rect: ['563px', '428px','160px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dinamica-stranu.png",'0px','0px']
            },
            {
                id: 'dinamica-po-regiony',
                type: 'image',
                rect: ['563px', '580px','160px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dinamica-po-regiony.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['571px', '460px','146px','21px','auto', 'auto'],
                fill: ["rgba(24,34,44,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['571px', '608px','146px','21px','auto', 'auto'],
                fill: ["rgba(0,148,202,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'population_wedge1',
                type: 'group',
                rect: ['18px', '423px','100','100','auto', 'auto'],
                clip: ['rect(0px 100px 48.146240234375px 0px)'],
                transform: [[],['-27']],
                c: [
                {
                    id: 'population_pie1',
                    type: 'ellipse',
                    rect: ['0px', '0px','100px','100px','auto', 'auto'],
                    clip: ['rect(0px 100px 48px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(24,34,44,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge2',
                type: 'group',
                rect: ['13px', '415px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-49']],
                c: [
                {
                    id: 'population_pie2',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge1Copy3',
                type: 'group',
                rect: ['276px', '416px','100','100','auto', 'auto'],
                clip: ['rect(0px 100px 48.146240234375px 0px)'],
                transform: [[],['-2']],
                c: [
                {
                    id: 'population_pie1Copy3',
                    type: 'ellipse',
                    rect: ['0px', '0px','100px','100px','auto', 'auto'],
                    clip: ['rect(0px 100px 48px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(24,34,44,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge2Copy3',
                type: 'group',
                rect: ['268px', '412px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-33']],
                c: [
                {
                    id: 'population_pie2Copy3',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge1Copy7',
                type: 'group',
                rect: ['286px', '552px','100','100','auto', 'auto'],
                clip: ['rect(0px 100px 48.146240234375px 0px)'],
                transform: [[],['-41']],
                c: [
                {
                    id: 'population_pie1Copy7',
                    type: 'ellipse',
                    rect: ['0px', '0px','100px','100px','auto', 'auto'],
                    clip: ['rect(0px 100px 48px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(24,34,44,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge2Copy7',
                type: 'group',
                rect: ['275px', '542px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-3']],
                c: [
                {
                    id: 'population_pie2Copy7',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'technology_line1',
                type: 'image',
                rect: ['282px', '531px','57px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"technology_line1.png",'0px','0px']
            },
            {
                id: 'Ellipse',
                display: 'none',
                type: 'ellipse',
                rect: ['435px', '557px','90px','89px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(24,34,44,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'population_wedge2Copy8',
                type: 'group',
                rect: ['419px', '542px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['90'],[],['0.62','0.62']],
                c: [
                {
                    id: 'population_pie2Copy8',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'internet_users_line1',
                type: 'image',
                rect: ['401px', '536px','62px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"internet_users_line1.png",'0px','0px']
            },
            {
                id: 'internet_users',
                display: 'none',
                type: 'image',
                rect: ['437px', '560px','84px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"internet_users.png",'0px','0px'],
                transform: [[],[],[],['0.67857','0.67857']]
            },
            {
                id: 'technology_line2',
                type: 'image',
                rect: ['377px', '589px','43px','63px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"technology_line2.png",'0px','0px']
            },
            {
                id: 'population_wedge1Copy6',
                type: 'group',
                rect: ['37px', '562px','100','100','auto', 'auto'],
                clip: ['rect(0px 100px 48.146240234375px 0px)'],
                transform: [[],['3']],
                c: [
                {
                    id: 'population_pie1Copy6',
                    type: 'ellipse',
                    rect: ['0px', '0px','100px','100px','auto', 'auto'],
                    clip: ['rect(0px 100px 48px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(24,34,44,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge2Copy6',
                type: 'group',
                rect: ['33px', '552px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-85']],
                c: [
                {
                    id: 'population_pie2Copy6',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge1Copy4',
                type: 'group',
                rect: ['436px', '422px','100','100','auto', 'auto'],
                clip: ['rect(0px 100px 48.146240234375px 0px)'],
                transform: [[],['-184']],
                c: [
                {
                    id: 'population_pie1Copy4',
                    type: 'ellipse',
                    rect: ['0px', '0px','100px','100px','auto', 'auto'],
                    clip: ['rect(0px 100px 48px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(24,34,44,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'population_wedge2Copy4',
                type: 'group',
                rect: ['424px', '407px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-214']],
                c: [
                {
                    id: 'population_pie2Copy4',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'public_line2',
                type: 'image',
                rect: ['458px', '475px','98px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"public_line2.png",'0px','0px']
            },
            {
                id: 'study_line1',
                type: 'image',
                rect: ['294px', '406px','53px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"study_line1.png",'0px','0px']
            },
            {
                id: 'money_wedge2',
                type: 'group',
                rect: ['147px', '415px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-3']],
                c: [
                {
                    id: 'money_pie2',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'money_wedge2Copy',
                type: 'group',
                rect: ['150px', '545px','120','120','auto', 'auto'],
                clip: ['rect(0px 120px 57.10205078125px 0px)'],
                transform: [[],['-18']],
                c: [
                {
                    id: 'money_pie2Copy',
                    type: 'ellipse',
                    rect: ['0px', '0px','120px','120px','auto', 'auto'],
                    clip: ['rect(0px 120px 58.036865234375px 0px)'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(0,148,202,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],['157']]
                }]
            },
            {
                id: 'money_line2',
                type: 'image',
                rect: ['154px', '404px','60px','32px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"money_line2.png",'0px','0px']
            },
            {
                id: 'study',
                display: 'none',
                type: 'image',
                rect: ['304px', '444px','55px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"study.png",'0px','0px'],
                transform: [[],[],[],['1.12727','1.12727']]
            },
            {
                id: 'population',
                display: 'none',
                type: 'image',
                rect: ['47px', '444px','55px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"population.png",'0px','0px']
            },
            {
                id: 'tecnology',
                display: 'none',
                type: 'image',
                rect: ['293px', '560px','84px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tecnology.png",'0px','0px'],
                transform: [[],[],[],['0.66666','0.66666']]
            },
            {
                id: 'public',
                display: 'none',
                type: 'image',
                rect: ['455px', '443px','55px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"public.png",'0px','0px'],
                transform: [[],[],[],['1.12727','1.12727']]
            },
            {
                id: 'public_line1',
                type: 'image',
                rect: ['440px', '402px','56px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"public_line1.png",'0px','0px']
            },
            {
                id: 'money',
                display: 'none',
                type: 'image',
                rect: ['184px', '443px','55px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"money.png",'0px','0px'],
                transform: [[],[],[],['1.10909','1.10909']]
            },
            {
                id: 'population_line12',
                type: 'image',
                rect: ['29px', '405px','61px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"population_line1.png",'0px','0px']
            },
            {
                id: 'population_line2',
                type: 'image',
                rect: ['106px', '447px','40px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"population_line2.png",'0px','0px']
            },
            {
                id: 'study_line2',
                type: 'image',
                rect: ['369px', '458px','36px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"study_line2.png",'0px','0px']
            },
            {
                id: 'press',
                display: 'none',
                type: 'image',
                rect: ['57px', '578px','55px','54px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"press.png",'0px','0px'],
                transform: [[],[],[],['1.12727','1.12727']]
            },
            {
                id: 'press_lin1',
                type: 'image',
                rect: ['29px', '530px','55px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"press_lin1.png",'0px','0px']
            },
            {
                id: 'press_line2',
                type: 'image',
                rect: ['118px', '588px','55px','60px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"press_line2.png",'0px','0px']
            },
            {
                id: 'internet',
                display: 'none',
                type: 'image',
                rect: ['171px', '560px','84px','83px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"internet.png",'0px','0px'],
                transform: [[],[],[],['0.66666','0.66666']]
            },
            {
                id: 'internet_line23',
                type: 'image',
                rect: ['189px', '534px','55px','34px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"internet_line2.png",'0px','0px']
            },
            {
                id: 'internet_users_line23',
                type: 'image',
                rect: ['504px', '544px','85px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"internet_users_line2.png",'0px','0px']
            },
            {
                id: 'part3_graph1_left',
                type: 'image',
                rect: ['34px', '680px','80px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1_left.png",'0px','0px']
            },
            {
                id: 'part3_graph1',
                type: 'image',
                rect: ['226px', '680px','171px','28px','auto', 'auto'],
                clip: ['rect(0px 83.63916015625px 28px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1.png",'0px','0px']
            },
            {
                id: 'part3_graph2',
                type: 'image',
                rect: ['226px', '727px','190px','28px','auto', 'auto'],
                clip: ['rect(0px 94.4609375px 28px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2.png",'0px','0px']
            },
            {
                id: 'part3_graph2_left',
                type: 'image',
                rect: ['24px', '727px','92px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2_left.png",'0px','0px']
            },
            {
                id: 'part3_graph1_leftCopy',
                type: 'image',
                rect: ['35px', '770px','80px','28px','auto', 'auto'],
                clip: ['rect(0px 80px 28px 28.62451171875px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1_left.png",'0px','0px']
            },
            {
                id: 'part3_graph12',
                type: 'image',
                rect: ['226px', '769px','171px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1.png",'0px','0px']
            },
            {
                id: 'part3_graph2_leftCopy',
                type: 'image',
                rect: ['25px', '817px','92px','28px','auto', 'auto'],
                clip: ['rect(0px 92px 28px 29.3681640625px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2_left.png",'0px','0px']
            },
            {
                id: 'part3_graph22',
                type: 'image',
                rect: ['226px', '814px','190px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2.png",'0px','0px']
            },
            {
                id: 'part3_graph1_leftCopy4',
                type: 'image',
                rect: ['35px', '860px','80px','28px','auto', 'auto'],
                clip: ['rect(0px 80px 28px 28.62451171875px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1_left.png",'0px','0px']
            },
            {
                id: 'bg_part3',
                type: 'image',
                rect: ['-6px', '649px','750px','410px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg_part3.png",'0px','0px']
            },
            {
                id: 'part3',
                type: 'rect',
                rect: ['86px', '681px','auto','auto','auto', 'auto']
            },
            {
                id: 'line_part3',
                type: 'image',
                rect: ['169px', '666px','8px','375px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"line_part3.png",'0px','0px']
            },
            {
                id: 'part3arcs',
                type: 'rect',
                rect: ['89px', '683','auto','auto','auto', 'auto']
            },
            {
                id: 'Text1_part3',
                display: 'none',
                type: 'text',
                rect: ['258px', '686px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['289px', '688px','auto','auto','auto', 'auto'],
                text: "млн",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text6_part3',
                display: 'none',
                type: 'text',
                rect: ['337px', '775px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy4',
                display: 'none',
                type: 'text',
                rect: ['376px', '777px','auto','auto','auto', 'auto'],
                text: "usa",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text8_part3',
                display: 'none',
                type: 'text',
                rect: ['350px', '820px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy5',
                display: 'none',
                type: 'text',
                rect: ['385px', '822px','auto','auto','auto', 'auto'],
                text: "usa",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text2_part3',
                display: 'none',
                type: 'text',
                rect: ['268px', '733px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'part3_graph12Copy',
                type: 'image',
                rect: ['226px', '860px','171px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1.png",'0px','0px']
            },
            {
                id: 'part3_graph22Copy',
                type: 'image',
                rect: ['226px', '905px','190px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2.png",'0px','0px']
            },
            {
                id: 'part3_graph2_leftCopy4',
                type: 'image',
                rect: ['25px', '907px','92px','28px','auto', 'auto'],
                clip: ['rect(0px 92px 28px 29.3681640625px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2_left.png",'0px','0px']
            },
            {
                id: 'part3_graph1_leftCopy5',
                type: 'image',
                rect: ['35px', '952px','80px','28px','auto', 'auto'],
                clip: ['rect(0px 80px 28px 28.62451171875px)'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1_left.png",'0px','0px']
            },
            {
                id: 'part3_graph12Copy2',
                type: 'image',
                rect: ['226px', '952px','171px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph1.png",'0px','0px']
            },
            {
                id: 'part3_graph22Copy2',
                type: 'image',
                rect: ['226px', '999px','190px','28px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part3_graph2.png",'0px','0px']
            },
            {
                id: 'Text10_part3',
                display: 'none',
                type: 'text',
                rect: ['258px', '866px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy',
                display: 'none',
                type: 'text',
                rect: ['300px', '735px','auto','auto','auto', 'auto'],
                text: "млн",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text3_part3',
                display: 'none',
                type: 'text',
                rect: ['38px', '686px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy2',
                display: 'none',
                type: 'text',
                rect: ['274px', '868px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text14_part3',
                display: 'none',
                type: 'text',
                rect: ['285px', '958px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy13',
                display: 'none',
                type: 'text',
                rect: ['312px', '960px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text17_part3',
                display: 'none',
                type: 'text',
                rect: ['286px', '1006px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy15',
                display: 'none',
                type: 'text',
                rect: ['314px', '1008px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text11_part3',
                display: 'none',
                type: 'text',
                rect: ['258px', '911px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy9',
                display: 'none',
                type: 'text',
                rect: ['274px', '913px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text5_part3',
                display: 'none',
                type: 'text',
                rect: ['28px', '733px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy3',
                display: 'none',
                type: 'text',
                rect: ['45px', '735px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text4Copy10',
                display: 'none',
                type: 'text',
                rect: ['56px', '689px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text12_part3',
                display: 'none',
                type: 'text',
                rect: ['39px', '866px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy11',
                display: 'none',
                type: 'text',
                rect: ['56px', '869px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text13_part3',
                display: 'none',
                type: 'text',
                rect: ['32px', '913px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy12',
                display: 'none',
                type: 'text',
                rect: ['49px', '916px','auto','auto','auto', 'auto'],
                text: "место",
                align: "left",
                font: ['iceberg, sans-serif', 10, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text20_part3',
                display: 'none',
                type: 'text',
                rect: ['44px', '959px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy14',
                display: 'none',
                type: 'text',
                rect: ['62px', '962px','auto','auto','auto', 'auto'],
                text: "балов",
                align: "left",
                font: ['iceberg, sans-serif', 9, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text7_part3',
                display: 'none',
                type: 'text',
                rect: ['63px', '775px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy6',
                display: 'none',
                type: 'text',
                rect: ['77px', '777px','auto','auto','auto', 'auto'],
                text: "%",
                align: "left",
                font: ['iceberg, sans-serif', 12, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'Text9_part3',
                display: 'none',
                type: 'text',
                rect: ['56px', '823px','auto','auto','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['iceberg, sans-serif', 14, "rgba(255,255,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'Text4Copy7',
                display: 'none',
                type: 'text',
                rect: ['72px', '825px','auto','auto','auto', 'auto'],
                text: "%",
                align: "left",
                font: ['iceberg, sans-serif', 12, "rgba(255,255,255,1)", "100", "none", "normal"]
            },
            {
                id: 'ex2',
                display: 'none',
                type: 'image',
                rect: ['14px', '1041','440px','13px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ex.png",'0px','0px']
            },
            {
                id: 'part4',
                type: 'image',
                rect: ['439px', '688px','296px','338px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"part4.png",'0px','0px']
            },
            {
                id: 'www2',
                type: 'image',
                rect: ['604px', '1034px','130px','21px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"www.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'part3',
                symbolName: 'part3'
            },
            {
                id: 'title_linesCopy',
                symbolName: 'title_lines',
                autoPlay: {

                }
            },
            {
                id: 'part3arcs',
                symbolName: 'part3arcs'
            },
            {
                id: 'icons_srednee_region',
                symbolName: 'icons_srednee_region',
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
            "${_Text4Copy13}": [
                ["style", "top", '960px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '312px'],
                ["style", "font-size", '10px']
            ],
            "${_population_wedge2}": [
                ["style", "top", '415px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '-49deg']
            ],
            "${_money_pie2Copy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '120px']
            ],
            "${_part3_graph1_leftCopy5}": [
                ["style", "top", '952px'],
                ["style", "left", '35px'],
                ["style", "clip", [0,80,28,86.98876953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text7_part3}": [
                ["style", "top", '775px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '63px'],
                ["style", "font-size", '14px']
            ],
            "${_Text6Copy}": [
                ["style", "top", '114px'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "display", 'none'],
                ["style", "font-weight", '700'],
                ["style", "left", '93px'],
                ["style", "font-size", '20px']
            ],
            "${_Ellipse}": [
                ["style", "top", '557px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "height", '89px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["style", "left", '435px'],
                ["style", "width", '90px']
            ],
            "${_part3_graph22Copy}": [
                ["style", "top", '905px'],
                ["style", "clip", [0,-3.30859375,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_part3_graph1_leftCopy}": [
                ["style", "top", '770px'],
                ["style", "left", '35px'],
                ["style", "clip", [0,80,28,86.98876953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bg_part3}": [
                ["style", "top", '649px'],
                ["style", "left", '-6px'],
                ["style", "clip", [0,750,-25.80224609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text4Copy6}": [
                ["style", "top", '777px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '77px'],
                ["style", "font-size", '12px']
            ],
            "${_population_wedge1Copy3}": [
                ["style", "top", '416px'],
                ["style", "left", '276px'],
                ["style", "clip", [0,100,48.146240234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '-2deg']
            ],
            "${_population_pie2Copy8}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '120px']
            ],
            "${_Text2_part3}": [
                ["style", "top", '733px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '268px'],
                ["style", "font-size", '14px']
            ],
            "${_line_part3}": [
                ["style", "top", '666px'],
                ["style", "left", '169px'],
                ["style", "clip", [0,8,-1.623291015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text1_part3}": [
                ["style", "top", '686px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '258px'],
                ["style", "font-size", '14px']
            ],
            "${_population_pie2Copy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '120px']
            ],
            "${_population_pie1Copy6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '100px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,100,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '100px']
            ],
            "${_population_wedge1}": [
                ["style", "top", '423px'],
                ["style", "clip", [0,100,48.146240234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '18px'],
                ["transform", "rotateZ", '-27deg']
            ],
            "${_part3_graph22}": [
                ["style", "top", '814px'],
                ["style", "clip", [0,-3.30859375,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_population_wedge2Copy4}": [
                ["style", "top", '407px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '424px'],
                ["transform", "rotateZ", '-214deg']
            ],
            "${_Text3_part3}": [
                ["style", "top", '686px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '38px'],
                ["style", "font-size", '14px']
            ],
            "${_press}": [
                ["style", "top", '578px'],
                ["transform", "scaleY", '0.57407'],
                ["transform", "scaleX", '0.57407'],
                ["style", "left", '57px'],
                ["style", "display", 'none']
            ],
            "${_part3_graph12Copy}": [
                ["style", "top", '860px'],
                ["style", "clip", [0,0.3681640625,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_population_pie1}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '100px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,100,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '100px']
            ],
            "${_public_line2}": [
                ["style", "top", '475px'],
                ["style", "left", '458px'],
                ["style", "clip", [0,-2,43,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text4}": [
                ["style", "top", '688px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '289px'],
                ["style", "font-size", '10px']
            ],
            "${_Text14_part3}": [
                ["style", "top", '958px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '285px'],
                ["style", "font-size", '14px']
            ],
            "${_population_pie1Copy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '100px'],
                ["style", "clip", [0,100,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '100px']
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
                ["style", "top", '138px'],
                ["style", "left", '370px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_internet_users}": [
                ["style", "top", '560px'],
                ["transform", "scaleY", '0.25301'],
                ["transform", "scaleX", '0.25301'],
                ["style", "left", '437px'],
                ["style", "display", 'none']
            ],
            "${_Text4Copy2}": [
                ["style", "top", '868px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '274px'],
                ["style", "font-size", '10px']
            ],
            "${_press_lin1}": [
                ["style", "top", '530px'],
                ["style", "left", '29px'],
                ["style", "clip", [0,55,34,57.36865234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text11_part3}": [
                ["style", "top", '911px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '258px'],
                ["style", "font-size", '14px']
            ],
            "${_Text4Copy14}": [
                ["style", "top", '962px'],
                ["style", "text-decoration", 'none'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '62px'],
                ["style", "font-size", '9px']
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
            "${_bg_middle_right}": [
                ["style", "top", '393px'],
                ["style", "left", '757px']
            ],
            "${_tecnology}": [
                ["style", "top", '560px'],
                ["transform", "scaleY", '0.22805'],
                ["transform", "scaleX", '0.22805'],
                ["style", "left", '293px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '608px'],
                ["style", "clip", [0,146,-1.680419921875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '571px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)']
            ],
            "${_Text20_part3}": [
                ["style", "top", '959px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '44px'],
                ["style", "font-size", '14px']
            ],
            "${_Text6_part3}": [
                ["style", "top", '775px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '337px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle}": [
                ["style", "left", '571px'],
                ["style", "clip", [0,146,-0.649658203125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_money_pie2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '120px']
            ],
            "${_population_wedge2Copy8}": [
                ["style", "top", '542px'],
                ["transform", "scaleY", '0.62'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.62'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '419px']
            ],
            "${_Text4Copy7}": [
                ["style", "top", '825px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '72px'],
                ["style", "font-size", '12px']
            ],
            "${_population_wedge2Copy6}": [
                ["style", "top", '552px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '33px'],
                ["transform", "rotateZ", '-85deg']
            ],
            "${_public}": [
                ["style", "top", '443px'],
                ["transform", "scaleY", '0.57407'],
                ["transform", "scaleX", '0.57407'],
                ["style", "left", '455px'],
                ["style", "display", 'none']
            ],
            "${_population_pie2Copy4}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '120px']
            ],
            "${_part3_graph2_leftCopy4}": [
                ["style", "top", '907px'],
                ["style", "left", '25px'],
                ["style", "clip", [0,92,28,96.97216796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text17_part3}": [
                ["style", "top", '1006px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '286px'],
                ["style", "font-size", '14px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '735px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '300px'],
                ["style", "font-size", '10px']
            ],
            "${_logo}": [
                ["style", "top", '13px'],
                ["style", "left", '17px'],
                ["style", "cursor", 'pointer']
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
            "${_population_wedge1Copy4}": [
                ["style", "top", '422px'],
                ["style", "clip", [0,100,48.146240234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '436px'],
                ["transform", "rotateZ", '-184deg']
            ],
            "${_population_wedge2Copy7}": [
                ["style", "top", '542px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '275px'],
                ["transform", "rotateZ", '-3deg']
            ],
            "${_part3_graph2_leftCopy}": [
                ["style", "top", '817px'],
                ["style", "left", '25px'],
                ["style", "clip", [0,92,28,96.97216796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_population_pie2Copy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "width", '120px']
            ],
            "${_internet_line23}": [
                ["style", "top", '534px'],
                ["style", "left", '189px'],
                ["style", "clip", [0,55,34,58.947265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bg_middle}": [
                ["style", "top", '391px'],
                ["style", "left", '-2px'],
                ["style", "clip", [0,749,-1.226806640625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arc3}": [
                ["style", "top", '138px'],
                ["style", "left", '231px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part3_graph12}": [
                ["style", "top", '769px'],
                ["style", "clip", [0,0.3681640625,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_internet}": [
                ["style", "top", '560px'],
                ["transform", "scaleY", '0.27819'],
                ["transform", "scaleX", '0.27819'],
                ["style", "left", '171px'],
                ["style", "display", 'none']
            ],
            "${_money_wedge2Copy}": [
                ["style", "top", '545px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '150px'],
                ["transform", "rotateZ", '-18deg']
            ],
            "${_internet_users_line23}": [
                ["style", "top", '544px'],
                ["style", "left", '504px'],
                ["style", "clip", [0,-0.7890625,42,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part4}": [
                ["style", "top", '688px'],
                ["style", "clip", [0,-4.83251953125,338,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '439px']
            ],
            "${_Text5_part3}": [
                ["style", "top", '733px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '28px'],
                ["style", "font-size", '14px']
            ],
            "${_public_line1}": [
                ["style", "top", '402px'],
                ["style", "left", '440px'],
                ["style", "clip", [77.6396484375,56,77,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arc6}": [
                ["style", "top", '138px'],
                ["style", "left", '440px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part3arcs}": [
                ["style", "clip", [0,167,-0.207763671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '89px']
            ],
            "${_Text4Copy4}": [
                ["style", "top", '777px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '376px'],
                ["style", "font-size", '10px']
            ],
            "${_study_line1}": [
                ["style", "top", '406px'],
                ["style", "left", '294px'],
                ["style", "clip", [0,53,32,52.794921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_press_line2}": [
                ["style", "top", '588px'],
                ["style", "left", '118px'],
                ["style", "clip", [0,55,-2.105224609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_population_wedge1Copy7}": [
                ["style", "top", '552px'],
                ["style", "clip", [0,100,48.146240234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '286px'],
                ["transform", "rotateZ", '-41deg']
            ],
            "${_www2}": [
                ["style", "top", '1034px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '604px']
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
            "${_population}": [
                ["style", "top", '444px'],
                ["transform", "scaleY", '0.38888'],
                ["transform", "scaleX", '0.38888'],
                ["style", "left", '47px'],
                ["style", "display", 'none']
            ],
            "${_ex2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '14px']
            ],
            "${_Text4Copy15}": [
                ["style", "top", '1008px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '314px'],
                ["style", "font-size", '10px']
            ],
            "${_dinamica-po-regiony}": [
                ["style", "top", '580px'],
                ["style", "opacity", '0'],
                ["style", "left", '563px']
            ],
            "${_arc7}": [
                ["style", "top", '138px'],
                ["style", "left", '511px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part3_graph1_left}": [
                ["style", "top", '680px'],
                ["style", "left", '34px'],
                ["style", "clip", [0,80,28,83.271484375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text12_part3}": [
                ["style", "top", '866px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '39px'],
                ["style", "font-size", '14px']
            ],
            "${_Text13_part3}": [
                ["style", "top", '913px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '32px'],
                ["style", "font-size", '14px']
            ],
            "${_Text4Copy12}": [
                ["style", "top", '916px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '49px'],
                ["style", "font-size", '10px']
            ],
            "${_Text4Copy9}": [
                ["style", "top", '913px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '274px'],
                ["style", "font-size", '10px']
            ],
            "${_Text4Copy11}": [
                ["style", "top", '869px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '56px'],
                ["style", "font-size", '10px']
            ],
            "${_Text4Copy10}": [
                ["style", "top", '689px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '56px'],
                ["style", "font-size", '10px']
            ],
            "${_internet_users_line1}": [
                ["style", "top", '536px'],
                ["style", "left", '401px'],
                ["style", "clip", [0,62,30,64.21044921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_population_wedge2Copy3}": [
                ["style", "top", '412px'],
                ["style", "left", '268px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '-33deg']
            ],
            "${_part3_graph1_leftCopy4}": [
                ["style", "top", '860px'],
                ["style", "left", '35px'],
                ["style", "clip", [0,80,28,86.98876953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arc1}": [
                ["style", "top", '138px'],
                ["style", "left", '91px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part3_graph1}": [
                ["style", "top", '680px'],
                ["style", "clip", [0,-0.7470703125,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_population_line2}": [
                ["style", "top", '447px'],
                ["transform", "skewY", '6deg'],
                ["style", "left", '106px'],
                ["style", "clip", [0,-0.79736328125,43,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_money_line2}": [
                ["style", "top", '404px'],
                ["style", "left", '154px'],
                ["style", "clip", [0,60,32,61.490234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arc8}": [
                ["style", "top", '138px'],
                ["style", "left", '576px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_arc2}": [
                ["style", "top", '138px'],
                ["style", "left", '160px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text9_part3}": [
                ["style", "top", '823px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '56px'],
                ["style", "font-size", '14px']
            ],
            "${_srednee_region}": [
                ["style", "top", '181px'],
                ["style", "opacity", '0'],
                ["style", "left", '510px']
            ],
            "${_money}": [
                ["style", "top", '443px'],
                ["transform", "scaleY", '0.57407'],
                ["transform", "scaleX", '0.57407'],
                ["style", "left", '184px'],
                ["style", "display", 'none']
            ],
            "${_money_wedge2}": [
                ["style", "top", '415px'],
                ["style", "left", '147px'],
                ["style", "clip", [0,120,57.10205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "rotateZ", '-3deg']
            ],
            "${_Text8_part3}": [
                ["style", "top", '820px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '350px'],
                ["style", "font-size", '14px']
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
            "${_population_pie2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '120px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '120px']
            ],
            "${_dinamica-stranu}": [
                ["style", "top", '428px'],
                ["style", "opacity", '0'],
                ["style", "left", '563px']
            ],
            "${_Text10_part3}": [
                ["style", "top", '866px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "left", '258px'],
                ["style", "font-size", '14px']
            ],
            "${_Text6}": [
                ["style", "top", '114px'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '700'],
                ["style", "display", 'none'],
                ["style", "font-family", 'iceberg, sans-serif'],
                ["style", "left", '93px'],
                ["style", "font-size", '20px']
            ],
            "${_Text4Copy5}": [
                ["style", "top", '822px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '385px'],
                ["style", "font-size", '10px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "min-width", '240px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1060px'],
                ["style", "max-width", '750px'],
                ["style", "width", '750px']
            ],
            "${_part3_graph22Copy2}": [
                ["style", "top", '999px'],
                ["style", "clip", [0,-3.30859375,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_bg_part13}": [
                ["style", "left", '-3245px'],
                ["style", "top", '-1700px']
            ],
            "${_study_line2}": [
                ["style", "top", '458px'],
                ["style", "left", '369px'],
                ["style", "clip", [0,-1.88818359375,45,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_title_linesCopy}": [
                ["style", "top", '47px'],
                ["style", "left", '214px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_study}": [
                ["style", "top", '444px'],
                ["transform", "scaleY", '0.40608'],
                ["transform", "scaleX", '0.40608'],
                ["style", "left", '304px'],
                ["style", "display", 'none']
            ],
            "${_technology_line1}": [
                ["style", "top", '531px'],
                ["style", "left", '282px'],
                ["style", "clip", [0,57,32,60], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_technology_line2}": [
                ["style", "top", '589px'],
                ["style", "left", '377px'],
                ["style", "clip", [0,43,-1.210693359375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text4Copy3}": [
                ["style", "top", '735px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '100'],
                ["style", "left", '45px'],
                ["style", "font-size", '10px']
            ],
            "${_part3_graph2_left}": [
                ["style", "top", '727px'],
                ["style", "left", '24px'],
                ["style", "clip", [0,92,28,92.93701171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_population_pie2Copy6}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,148,202,1.00)'],
                ["transform", "rotateZ", '183deg'],
                ["style", "height", '120px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,120,58.036865234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '120px']
            ],
            "${_arc4}": [
                ["style", "top", '138px'],
                ["style", "left", '301px'],
                ["style", "clip", [202.453857421875,52,202,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_part3_graph2}": [
                ["style", "top", '727px'],
                ["style", "left", '226px'],
                ["style", "clip", [0,-1.82177734375,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_population_wedge1Copy6}": [
                ["style", "top", '562px'],
                ["style", "clip", [0,100,48.146240234375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '37px'],
                ["transform", "rotateZ", '3deg']
            ],
            "${_part3}": [
                ["style", "top", '681px'],
                ["style", "left", '86px']
            ],
            "${_right_bg_part14}": [
                ["style", "left", '-378px'],
                ["style", "top", '-1705px']
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
            "${_population_pie1Copy4}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '100px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,100,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '100px']
            ],
            "${_part3_graph12Copy2}": [
                ["style", "top", '952px'],
                ["style", "clip", [0,0.3681640625,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '226px']
            ],
            "${_population_pie1Copy7}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(24,34,44,1.00)'],
                ["transform", "rotateZ", '182deg'],
                ["style", "height", '100px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,100,48,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '100px']
            ],
            "${_population_line12}": [
                ["style", "top", '405px'],
                ["style", "left", '29px'],
                ["style", "clip", [0,61,33,72.99169921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16037,
            autoPlay: true,
            timeline: [
                { id: "eid342", tween: [ "transform", "${_population_line2}", "skewY", '0deg', { fromValue: '6deg'}], position: 4573, duration: 212, easing: "easeOutSine" },
                { id: "eid374", tween: [ "transform", "${_population_pie2Copy4}", "rotateZ", '142deg', { fromValue: '182deg'}], position: 5493, duration: 490, easing: "easeOutBack" },
                { id: "eid322", tween: [ "style", "${_arc2}", "clip", [81.90185546875,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 609, duration: 127, easing: "easeInOutBounce" },
                { id: "eid323", tween: [ "style", "${_arc3}", "clip", [144.171875,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 917, duration: 127, easing: "easeInOutBounce" },
                { id: "eid222", tween: [ "style", "${_Text10}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid370", tween: [ "transform", "${_public}", "scaleX", '1', { fromValue: '0.57407'}], position: 5086, duration: 182, easing: "easeOutBounce" },
                { id: "eid504", tween: [ "style", "${_Text4Copy2}", "display", 'block', { fromValue: 'none'}], position: 14325, duration: 0, easing: "easeOutExpo" },
                { id: "eid303", tween: [ "transform", "${_population_pie1}", "rotateZ", '157deg', { fromValue: '182deg'}], position: 4081, duration: 500, easing: "easeOutSine" },
                { id: "eid548", tween: [ "style", "${_Text20_part3}", "display", 'block', { fromValue: 'none'}], position: 15414, duration: 0, easing: "easeOutExpo" },
                { id: "eid42", tween: [ "style", "${_title_linesCopy}", "top", '47px', { fromValue: '47px'}], position: 750, duration: 0, easing: "easeOutCubic" },
                { id: "eid412", tween: [ "transform", "${_population_pie2Copy7}", "rotateZ", '132deg', { fromValue: '182deg'}], position: 6102, duration: 490, easing: "easeOutBack" },
                { id: "eid547", tween: [ "style", "${_Text4Copy14}", "display", 'block', { fromValue: 'none'}], position: 15414, duration: 0, easing: "easeOutExpo" },
                { id: "eid406", tween: [ "style", "${_internet_line23}", "clip", [0,55,34,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,34,58.947265625]}], position: 6022, duration: 241, easing: "easeOutBack" },
                { id: "eid427", tween: [ "transform", "${_Ellipse}", "scaleY", '1', { fromValue: '0.4'}], position: 6517, duration: 328, easing: "easeOutBounce" },
                { id: "eid518", tween: [ "style", "${_part3_graph1_leftCopy}", "clip", [0,80,28,24.9072265625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,28,86.98876953125]}], position: 12904, duration: 509, easing: "easeOutExpo" },
                { id: "eid399", tween: [ "transform", "${_money_pie2Copy}", "rotateZ", '143deg', { fromValue: '182deg'}], position: 5870, duration: 490, easing: "easeOutBack" },
                { id: "eid211", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1071, duration: 0 },
                { id: "eid526", tween: [ "style", "${_part3_graph1_leftCopy4}", "clip", [0,80,28,0.73193359375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,28,86.98876953125]}], position: 13942, duration: 509, easing: "easeOutExpo" },
                { id: "eid539", tween: [ "style", "${_Text11_part3}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutExpo" },
                { id: "eid503", tween: [ "style", "${_Text3_part3}", "display", 'block', { fromValue: 'none'}], position: 12613, duration: 0, easing: "easeOutExpo" },
                { id: "eid321", tween: [ "style", "${_arc1}", "clip", [0,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 373, duration: 127, easing: "easeInOutBounce" },
                { id: "eid544", tween: [ "style", "${_Text13_part3}", "display", 'block', { fromValue: 'none'}], position: 14765, duration: 0, easing: "easeOutExpo" },
                { id: "eid531", tween: [ "style", "${_Text8_part3}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0, easing: "easeOutExpo" },
                { id: "eid423", tween: [ "style", "${_internet_users}", "display", 'block', { fromValue: 'none'}], position: 6310, duration: 0, easing: "easeOutBack" },
                { id: "eid227", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 2333, duration: 0 },
                { id: "eid364", tween: [ "transform", "${_population_pie2Copy3}", "rotateZ", '142deg', { fromValue: '182deg'}], position: 4942, duration: 490, easing: "easeOutBack" },
                { id: "eid522", tween: [ "style", "${_part3_graph12Copy}", "clip", [0,81.4091796875,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0.3681640625,28,0]}], position: 14017, duration: 509, easing: "easeOutExpo" },
                { id: "eid408", tween: [ "transform", "${_tecnology}", "scaleX", '0.66666', { fromValue: '0.22805'}], position: 5936, duration: 230, easing: "easeOutBounce" },
                { id: "eid490", tween: [ "style", "${_line_part3}", "clip", [0,8,375,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,8,-1.623291015625,0]}], position: 11085, duration: 533, easing: "easeOutQuart" },
                { id: "eid273", tween: [ "style", "${_RectangleCopy}", "clip", [0,146,21,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,146,-1.680419921875,0]}], position: 3000, duration: 500, easing: "easeOutCubic" },
                { id: "eid496", tween: [ "style", "${_part3_graph1}", "clip", [0,83.63916015625,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-0.7470703125,28,0]}], position: 11871, duration: 509, easing: "easeOutExpo" },
                { id: "eid275", tween: [ "style", "${_Rectangle}", "clip", [0,146,21,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,146,-0.649658203125,0]}], position: 3000, duration: 500, easing: "easeOutCubic" },
                { id: "eid237", tween: [ "style", "${_Text12}", "display", 'block', { fromValue: 'none'}], position: 2833, duration: 0 },
                { id: "eid379", tween: [ "style", "${_public_line1}", "clip", [0,56,77,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [77.6396484375,56,77,0]}], position: 5343, duration: 150, easing: "easeOutCirc" },
                { id: "eid431", tween: [ "transform", "${_population_pie2Copy8}", "rotateZ", '0deg', { fromValue: '182deg'}], position: 6783, duration: 490, easing: "easeOutBack" },
                { id: "eid343", tween: [ "transform", "${_money_pie2}", "rotateZ", '95deg', { fromValue: '182deg'}], position: 4581, duration: 490, easing: "easeOutBack" },
                { id: "eid542", tween: [ "style", "${_Text12_part3}", "display", 'block', { fromValue: 'none'}], position: 14346, duration: 0, easing: "easeOutExpo" },
                { id: "eid528", tween: [ "style", "${_Text4Copy4}", "display", 'block', { fromValue: 'none'}], position: 13413, duration: 0, easing: "easeOutExpo" },
                { id: "eid325", tween: [ "style", "${_arc5}", "clip", [117.45703125,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 1881, duration: 127, easing: "easeInOutBounce" },
                { id: "eid372", tween: [ "transform", "${_public}", "scaleY", '1', { fromValue: '0.57407'}], position: 5086, duration: 182, easing: "easeOutBounce" },
                { id: "eid418", tween: [ "style", "${_technology_line2}", "clip", [0,43,63,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,43,-1.210693359375,0]}], position: 6166, duration: 305, easing: "easeOutBack" },
                { id: "eid508", tween: [ "style", "${_part3_graph1_left}", "clip", [0,80,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,28,83.271484375]}], position: 11871, duration: 509, easing: "easeOutExpo" },
                { id: "eid206", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid381", tween: [ "style", "${_public_line2}", "clip", [0,98,43,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-2,43,0]}], position: 5627, duration: 123, easing: "easeOutCirc" },
                { id: "eid336", tween: [ "style", "${_population_line12}", "clip", [0,61,33,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,61,33,72.99169921875]}], position: 4500, duration: 239, easing: "easeOutSine" },
                { id: "eid430", tween: [ "style", "${_internet_users_line1}", "clip", [0,62,30,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,62,30,64.21044921875]}], position: 6735, duration: 197, easing: "easeOutQuint" },
                { id: "eid512", tween: [ "style", "${_part3_graph12}", "clip", [0,171,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0.3681640625,28,0]}], position: 12904, duration: 509, easing: "easeOutExpo" },
                { id: "eid348", tween: [ "transform", "${_money}", "scaleY", '1', { fromValue: '0.57407'}], position: 4510, duration: 102, easing: "easeOutBounce" },
                { id: "eid386", tween: [ "style", "${_press}", "display", 'block', { fromValue: 'none'}], position: 5564, duration: 0, easing: "easeOutCirc" },
                { id: "eid506", tween: [ "style", "${_Text5_part3}", "display", 'block', { fromValue: 'none'}], position: 12904, duration: 0, easing: "easeOutExpo" },
                { id: "eid410", tween: [ "transform", "${_tecnology}", "scaleY", '0.66666', { fromValue: '0.22805'}], position: 5936, duration: 230, easing: "easeOutBounce" },
                { id: "eid525", tween: [ "style", "${_part3_graph2_leftCopy4}", "clip", [0,92,28,0.37158203125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,92,28,96.97216796875]}], position: 14500, duration: 492, easing: "easeOutExpo" },
                { id: "eid346", tween: [ "transform", "${_money}", "scaleX", '1', { fromValue: '0.57407'}], position: 4510, duration: 102, easing: "easeOutBounce" },
                { id: "eid545", tween: [ "style", "${_Text4Copy13}", "display", 'block', { fromValue: 'none'}], position: 15384, duration: 0, easing: "easeOutExpo" },
                { id: "eid422", tween: [ "transform", "${_internet_users}", "scaleY", '0.67857', { fromValue: '0.25301'}], position: 6310, duration: 241, easing: "easeOutBounce" },
                { id: "eid433", tween: [ "style", "${_internet_users_line23}", "clip", [0,85,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-0.7890625,42,0]}], position: 6975, duration: 285, easing: "easeOutBack" },
                { id: "eid557", tween: [ "style", "${_part4}", "clip", [0,296,338,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-4.83251953125,338,0]}], position: 7722, duration: 799, easing: "easeOutExpo" },
                { id: "eid326", tween: [ "style", "${_arc6}", "clip", [160.70849609375,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 2217, duration: 127, easing: "easeInOutBounce" },
                { id: "eid398", tween: [ "style", "${_press_line2}", "clip", [0,55,60,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,-2.105224609375,0]}], position: 5741, duration: 242, easing: "easeOutCubic" },
                { id: "eid538", tween: [ "style", "${_Text4Copy9}", "display", 'block', { fromValue: 'none'}], position: 14750, duration: 0, easing: "easeOutExpo" },
                { id: "eid500", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 12613, duration: 0, easing: "easeOutExpo" },
                { id: "eid368", tween: [ "style", "${_study_line1}", "clip", [0,53,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,53,32,52.794921875]}], position: 5040, duration: 162, easing: "easeOutSine" },
                { id: "eid330", tween: [ "style", "${_arc8}", "clip", [162.549072265625,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 3230, duration: 127, easing: "easeInOutBounce" },
                { id: "eid529", tween: [ "style", "${_Text6_part3}", "display", 'block', { fromValue: 'none'}], position: 13413, duration: 0, easing: "easeOutExpo" },
                { id: "eid354", tween: [ "transform", "${_study}", "scaleX", '1', { fromValue: '0.40608'}], position: 4739, duration: 191, easing: "easeOutBack" },
                { id: "eid551", tween: [ "style", "${_ex2}", "display", 'block', { fromValue: 'none'}], position: 7722, duration: 0, easing: "easeOutExpo" },
                { id: "eid498", tween: [ "style", "${_part3_graph2}", "clip", [0,94.4609375,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-1.82177734375,28,0]}], position: 12412, duration: 492, easing: "easeOutExpo" },
                { id: "eid328", tween: [ "style", "${_arc7}", "clip", [140.15625,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 2739, duration: 127, easing: "easeInOutBounce" },
                { id: "eid524", tween: [ "style", "${_part3_graph12Copy2}", "clip", [0,120.4423828125,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0.3681640625,28,0]}], position: 14991, duration: 509, easing: "easeOutExpo" },
                { id: "eid521", tween: [ "style", "${_part3_graph22Copy}", "clip", [0,81.8056640625,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-3.30859375,28,0]}], position: 14500, duration: 492, easing: "easeOutExpo" },
                { id: "eid377", tween: [ "style", "${_study_line2}", "clip", [0,36,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-1.88818359375,45,0]}], position: 5012, duration: 223, easing: "easeOutBack" },
                { id: "eid216", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid392", tween: [ "transform", "${_population_pie1Copy6}", "rotateZ", '92deg', { fromValue: '182deg'}], position: 5627, duration: 500, easing: "easeOutSine" },
                { id: "eid533", tween: [ "style", "${_Text7_part3}", "display", 'block', { fromValue: 'none'}], position: 13413, duration: 0, easing: "easeOutExpo" },
                { id: "eid257", tween: [ "style", "${_bg_middle_right}", "left", '486px', { fromValue: '757px'}], position: 2250, duration: 583, easing: "easeOutCubic" },
                { id: "eid263", tween: [ "style", "${_dinamica-po-regiony}", "opacity", '1', { fromValue: '0'}], position: 2710, duration: 1040, easing: "easeOutCubic" },
                { id: "eid425", tween: [ "transform", "${_Ellipse}", "scaleX", '1', { fromValue: '0.4'}], position: 6517, duration: 328, easing: "easeOutBounce" },
                { id: "eid428", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 6517, duration: 0, easing: "easeOutBounce" },
                { id: "eid349", tween: [ "style", "${_money}", "display", 'block', { fromValue: 'none'}], position: 4510, duration: 0, easing: "easeOutBack" },
                { id: "eid549", tween: [ "style", "${_Text4Copy15}", "display", 'block', { fromValue: 'none'}], position: 15801, duration: 0, easing: "easeOutExpo" },
                { id: "eid287", tween: [ "transform", "${_population}", "scaleY", '1', { fromValue: '0.38888'}], position: 3571, duration: 510, easing: "easeOutBounce" },
                { id: "eid259", tween: [ "style", "${_bg_middle_right}", "top", '392px', { fromValue: '393px'}], position: 2250, duration: 583, easing: "easeOutCubic" },
                { id: "eid534", tween: [ "style", "${_Text4Copy7}", "display", 'block', { fromValue: 'none'}], position: 13772, duration: 0, easing: "easeOutExpo" },
                { id: "eid261", tween: [ "style", "${_dinamica-stranu}", "opacity", '1', { fromValue: '0'}], position: 2710, duration: 1040, easing: "easeOutCubic" },
                { id: "eid404", tween: [ "style", "${_internet}", "display", 'block', { fromValue: 'none'}], position: 5790, duration: 0, easing: "easeOutBack" },
                { id: "eid253", tween: [ "style", "${_bg_middle}", "clip", [0,749,273,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,749,-1.226806640625,0]}], position: 1660, duration: 673, easing: "easeOutCubic" },
                { id: "eid285", tween: [ "transform", "${_population}", "scaleX", '1', { fromValue: '0.38888'}], position: 3571, duration: 510, easing: "easeOutBounce" },
                { id: "eid247", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 3333, duration: 0 },
                { id: "eid501", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 12904, duration: 0, easing: "easeOutExpo" },
                { id: "eid553", tween: [ "style", "${_ex2}", "opacity", '1', { fromValue: '0'}], position: 7722, duration: 528, easing: "easeOutExpo" },
                { id: "eid340", tween: [ "style", "${_population_line2}", "clip", [0,40,43,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-0.79736328125,43,0]}], position: 4573, duration: 212, easing: "easeOutSine" },
                { id: "eid550", tween: [ "style", "${_Text17_part3}", "display", 'block', { fromValue: 'none'}], position: 15801, duration: 0, easing: "easeOutExpo" },
                { id: "eid396", tween: [ "style", "${_press_lin1}", "clip", [0,55,34,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,55,34,57.36865234375]}], position: 5653, duration: 243, easing: "easeOutCubic" },
                { id: "eid375", tween: [ "transform", "${_population_pie1Copy4}", "rotateZ", '149deg', { fromValue: '182deg'}], position: 5250, duration: 500, easing: "easeOutSine" },
                { id: "eid532", tween: [ "style", "${_Text4Copy6}", "display", 'block', { fromValue: 'none'}], position: 13413, duration: 0, easing: "easeOutExpo" },
                { id: "eid352", tween: [ "style", "${_money_line2}", "clip", [0,60,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,60,32,61.490234375]}], position: 4812, duration: 274, easing: "easeOutSine" },
                { id: "eid365", tween: [ "transform", "${_population_pie1Copy3}", "rotateZ", '149deg', { fromValue: '182deg'}], position: 4673, duration: 500, easing: "easeOutSine" },
                { id: "eid373", tween: [ "style", "${_public}", "display", 'block', { fromValue: 'none'}], position: 5086, duration: 0, easing: "easeOutBack" },
                { id: "eid357", tween: [ "style", "${_study}", "display", 'block', { fromValue: 'none'}], position: 4739, duration: 0, easing: "easeOutBack" },
                { id: "eid546", tween: [ "style", "${_Text14_part3}", "display", 'block', { fromValue: 'none'}], position: 15384, duration: 0, easing: "easeOutExpo" },
                { id: "eid510", tween: [ "style", "${_part3_graph2_left}", "clip", [0,92,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,92,28,92.93701171875]}], position: 12412, duration: 492, easing: "easeOutExpo" },
                { id: "eid442", tween: [ "style", "${_bg_part3}", "clip", [0,750,410,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,750,-25.80224609375,0]}], position: 6966, duration: 1131, easing: "easeOutQuart" },
                { id: "eid44", tween: [ "style", "${_srednee_region}", "opacity", '1', { fromValue: '0'}], position: 1071, duration: 1639, easing: "easeOutCubic" },
                { id: "eid41", tween: [ "style", "${_title_linesCopy}", "left", '214px', { fromValue: '214px'}], position: 750, duration: 0, easing: "easeOutCubic" },
                { id: "eid514", tween: [ "style", "${_part3_graph22}", "clip", [0,190,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-3.30859375,28,0]}], position: 13413, duration: 492, easing: "easeOutExpo" },
                { id: "eid527", tween: [ "style", "${_part3_graph1_leftCopy5}", "clip", [0,80,28,7.41748046875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,80,28,86.98876953125]}], position: 14991, duration: 509, easing: "easeOutExpo" },
                { id: "eid523", tween: [ "style", "${_part3_graph22Copy2}", "clip", [0,126.431640625,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-3.30859375,28,0]}], position: 15545, duration: 492, easing: "easeOutExpo" },
                { id: "eid537", tween: [ "style", "${_Text10_part3}", "display", 'block', { fromValue: 'none'}], position: 14325, duration: 0, easing: "easeOutExpo" },
                { id: "eid324", tween: [ "style", "${_arc4}", "clip", [125.7392578125,52,202,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [202.453857421875,52,202,0]}], position: 1419, duration: 127, easing: "easeInOutBounce" },
                { id: "eid543", tween: [ "style", "${_Text4Copy12}", "display", 'block', { fromValue: 'none'}], position: 14765, duration: 0, easing: "easeOutExpo" },
                { id: "eid499", tween: [ "style", "${_Text1_part3}", "display", 'block', { fromValue: 'none'}], position: 12613, duration: 0, easing: "easeOutExpo" },
                { id: "eid385", tween: [ "transform", "${_press}", "scaleY", '1', { fromValue: '0.57407'}], position: 5564, duration: 194, easing: "easeOutBounce" },
                { id: "eid535", tween: [ "style", "${_Text9_part3}", "display", 'block', { fromValue: 'none'}], position: 13772, duration: 0, easing: "easeOutExpo" },
                { id: "eid288", tween: [ "style", "${_population}", "display", 'block', { fromValue: 'none'}], position: 3571, duration: 0, easing: "easeOutBounce" },
                { id: "eid401", tween: [ "transform", "${_internet}", "scaleX", '0.66666', { fromValue: '0.27819'}], position: 5790, duration: 183, easing: "easeOutBounce" },
                { id: "eid205", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
                { id: "eid540", tween: [ "style", "${_Text4Copy10}", "display", 'block', { fromValue: 'none'}], position: 12613, duration: 0, easing: "easeOutExpo" },
                { id: "eid393", tween: [ "transform", "${_population_pie2Copy6}", "rotateZ", '109deg', { fromValue: '183deg'}], position: 5578, duration: 475, easing: "easeOutBack" },
                { id: "eid413", tween: [ "transform", "${_population_pie1Copy7}", "rotateZ", '129deg', { fromValue: '182deg'}], position: 6201, duration: 500, easing: "easeOutSine" },
                { id: "eid530", tween: [ "style", "${_Text4Copy5}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0, easing: "easeOutExpo" },
                { id: "eid502", tween: [ "style", "${_Text2_part3}", "display", 'block', { fromValue: 'none'}], position: 12904, duration: 0, easing: "easeOutExpo" },
                { id: "eid416", tween: [ "style", "${_technology_line1}", "clip", [0,57,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,57,32,60]}], position: 6360, duration: 278, easing: "easeOutBack" },
                { id: "eid420", tween: [ "transform", "${_internet_users}", "scaleX", '0.67857', { fromValue: '0.25301'}], position: 6310, duration: 241, easing: "easeOutBounce" },
                { id: "eid356", tween: [ "transform", "${_study}", "scaleY", '1', { fromValue: '0.40608'}], position: 4739, duration: 191, easing: "easeOutBack" },
                { id: "eid541", tween: [ "style", "${_Text4Copy11}", "display", 'block', { fromValue: 'none'}], position: 14346, duration: 0, easing: "easeOutExpo" },
                { id: "eid403", tween: [ "transform", "${_internet}", "scaleY", '0.66666', { fromValue: '0.27819'}], position: 5790, duration: 183, easing: "easeOutBounce" },
                { id: "eid411", tween: [ "style", "${_tecnology}", "display", 'block', { fromValue: 'none'}], position: 5936, duration: 0, easing: "easeOutBack" },
                { id: "eid492", tween: [ "style", "${_part3arcs}", "clip", [0,167,342,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,167,-0.207763671875,0]}], position: 11207, duration: 914, easing: "easeOutQuart" },
                { id: "eid520", tween: [ "style", "${_part3_graph2_leftCopy}", "clip", [0,92,28,27.1376953125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,92,28,96.97216796875]}], position: 13413, duration: 492, easing: "easeOutExpo" },
                { id: "eid311", tween: [ "transform", "${_population_pie2}", "rotateZ", '157deg', { fromValue: '182deg'}], position: 4331, duration: 490, easing: "easeOutBack" },
                { id: "eid383", tween: [ "transform", "${_press}", "scaleX", '1', { fromValue: '0.57407'}], position: 5564, duration: 194, easing: "easeOutBounce" },
                { id: "eid35", tween: [ "transform", "${_title_linesCopy}", "rotateZ", '-180deg', { fromValue: '-180deg'}], position: 750, duration: 0, easing: "easeOutCubic" },
                { id: "eid12", tween: [ "style", "${_right_bg_part14}", "left", '-649px', { fromValue: '-378px'}], position: 750, duration: 606, easing: "easeOutExpo" },
                { id: "eid505", tween: [ "style", "${_Text4Copy3}", "display", 'block', { fromValue: 'none'}], position: 12904, duration: 0, easing: "easeOutExpo" }            ]
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
                    rect: ['0px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'population',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/population.png', '0px', '0px']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['69px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'money',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/money.png', '0px', '0px']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['137px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'study',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/study.png', '0px', '0px']
                },
                {
                    rect: ['208px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'public',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/public.png', '0px', '0px']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['279px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'press',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/press.png', '0px', '0px']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['349px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'internet',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/internet.png', '0px', '0px']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['420px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'tecnology',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tecnology.png', '0px', '0px']
                },
                {
                    rect: ['51px', '24px', '27px', '3px', 'auto', 'auto'],
                    id: 'Rectangle3Copy9',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(24,34,44,1)']
                },
                {
                    rect: ['484px', '0px', '55px', '54px', 'auto', 'auto'],
                    id: 'internet_users',
                    type: 'image',
                    display: 'none',
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
                ["style", "left", '69px'],
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
                ["style", "left", '420px'],
                ["style", "display", 'none']
            ],
            "${_internet}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '349px'],
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
                ["style", "left", '139px'],
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
                ["style", "left", '279px'],
                ["style", "display", 'none']
            ],
            "${_internet_users}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.5404'],
                ["transform", "scaleX", '0.5404'],
                ["style", "left", '484px'],
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
                { id: "eid163", tween: [ "style", "${_Rectangle3Copy6}", "width", '27px', { fromValue: '0px'}], position: 2818, duration: 250, easing: "easeOutCubic" },
                { id: "eid125", tween: [ "transform", "${_population}", "scaleY", '0.95771', { fromValue: '0.54041'}], position: 156, duration: 500, easing: "easeOutBounce" },
                { id: "eid115", tween: [ "transform", "${_money}", "scaleX", '0.95771', { fromValue: '0.5404'}], position: 561, duration: 515, easing: "easeOutBounce" },
                { id: "eid132", tween: [ "style", "${_Rectangle3}", "width", '27px', { fromValue: '0px'}], position: 406, duration: 250, easing: "easeOutCubic" },
                { id: "eid103", tween: [ "transform", "${_tecnology}", "scaleX", '0.95771', { fromValue: '0.5404'}], position: 2656, duration: 401, easing: "easeOutBounce" },
                { id: "eid174", tween: [ "style", "${_Rectangle3Copy9}", "width", '27px', { fromValue: '0px'}], position: 3057, duration: 246, easing: "easeOutCubic" },
                { id: "eid155", tween: [ "style", "${_internet}", "display", 'block', { fromValue: 'none'}], position: 2280, duration: 0, easing: "easeOutBounce" },
                { id: "eid101", tween: [ "transform", "${_internet_users}", "scaleY", '0.91539', { fromValue: '0.5404'}], position: 3156, duration: 119, easing: "easeOutCubic" },
                { id: "eid388", tween: [ "transform", "${_internet_users}", "scaleY", '0.95771', { fromValue: '0.91539'}], position: 3275, duration: 225, easing: "easeOutBounce" },
                { id: "eid123", tween: [ "transform", "${_population}", "scaleX", '0.95771', { fromValue: '0.54041'}], position: 156, duration: 500, easing: "easeOutBounce" },
                { id: "eid99", tween: [ "transform", "${_internet_users}", "scaleX", '0.91539', { fromValue: '0.5404'}], position: 3156, duration: 119, easing: "easeOutCubic" },
                { id: "eid387", tween: [ "transform", "${_internet_users}", "scaleX", '0.95771', { fromValue: '0.91539'}], position: 3275, duration: 225, easing: "easeOutBounce" },
                { id: "eid156", tween: [ "style", "${_public}", "display", 'block', { fromValue: 'none'}], position: 1480, duration: 0, easing: "easeOutBounce" },
                { id: "eid111", tween: [ "transform", "${_public}", "scaleX", '0.95771', { fromValue: '0.5404'}], position: 1480, duration: 426, easing: "easeOutBounce" },
                { id: "eid141", tween: [ "style", "${_Rectangle3Copy2}", "left", '189px', { fromValue: '189px'}], position: 1525, duration: 0, easing: "easeOutBounce" },
                { id: "eid139", tween: [ "style", "${_Rectangle3Copy}", "left", '121px', { fromValue: '121px'}], position: 1076, duration: 0, easing: "easeOutBounce" },
                { id: "eid162", tween: [ "style", "${_Rectangle3Copy6}", "left", '400px', { fromValue: '400px'}], position: 3068, duration: 0, easing: "easeOutBounce" },
                { id: "eid137", tween: [ "style", "${_study}", "display", 'block', { fromValue: 'none'}], position: 1003, duration: 0, easing: "easeOutBounce" },
                { id: "eid113", tween: [ "transform", "${_public}", "scaleY", '0.95771', { fromValue: '0.5404'}], position: 1480, duration: 426, easing: "easeOutBounce" },
                { id: "eid109", tween: [ "transform", "${_internet}", "scaleY", '0.95771', { fromValue: '0.5404'}], position: 2280, duration: 448, easing: "easeOutBounce" },
                { id: "eid140", tween: [ "style", "${_study}", "left", '139px', { fromValue: '139px'}], position: 1385, duration: 0, easing: "easeOutBounce" },
                { id: "eid135", tween: [ "style", "${_population}", "display", 'block', { fromValue: 'none'}], position: 156, duration: 0, easing: "easeOutBounce" },
                { id: "eid154", tween: [ "style", "${_Rectangle3Copy4}", "width", '27px', { fromValue: '0px'}], position: 2156, duration: 250, easing: "easeOutCubic" },
                { id: "eid159", tween: [ "style", "${_Rectangle3Copy5}", "width", '27px', { fromValue: '0px'}], position: 2508, duration: 220, easing: "easeOutCubic" },
                { id: "eid150", tween: [ "style", "${_Rectangle3Copy3}", "width", '27px', { fromValue: '0px'}], position: 1749, duration: 236, easing: "easeOutCubic" },
                { id: "eid134", tween: [ "style", "${_money}", "display", 'block', { fromValue: 'none'}], position: 561, duration: 0, easing: "easeOutBounce" },
                { id: "eid136", tween: [ "style", "${_Rectangle3Copy}", "width", '27px', { fromValue: '0px'}], position: 819, duration: 257, easing: "easeOutCubic" },
                { id: "eid97", tween: [ "transform", "${_press}", "scaleY", '0.95771', { fromValue: '0.5404'}], position: 1906, duration: 500, easing: "easeOutBounce" },
                { id: "eid95", tween: [ "transform", "${_press}", "scaleX", '0.95771', { fromValue: '0.5404'}], position: 1906, duration: 500, easing: "easeOutBounce" },
                { id: "eid153", tween: [ "style", "${_Rectangle3Copy4}", "left", '329px', { fromValue: '329px'}], position: 2406, duration: 0, easing: "easeOutBounce" },
                { id: "eid117", tween: [ "transform", "${_money}", "scaleY", '0.95771', { fromValue: '0.5404'}], position: 561, duration: 515, easing: "easeOutBounce" },
                { id: "eid149", tween: [ "style", "${_Rectangle3Copy3}", "left", '262px', { fromValue: '262px'}], position: 1985, duration: 0, easing: "easeOutBounce" },
                { id: "eid121", tween: [ "transform", "${_study}", "scaleY", '0.95771', { fromValue: '0.5404'}], position: 1003, duration: 477, easing: "easeOutBounce" },
                { id: "eid144", tween: [ "style", "${_public}", "left", '210px', { fromValue: '210px'}], position: 1906, duration: 0, easing: "easeOutCubic" },
                { id: "eid175", tween: [ "style", "${_press}", "display", 'block', { fromValue: 'none'}], position: 1906, duration: 0, easing: "easeOutBounce" },
                { id: "eid160", tween: [ "style", "${_tecnology}", "display", 'block', { fromValue: 'none'}], position: 2656, duration: 0, easing: "easeOutBounce" },
                { id: "eid142", tween: [ "style", "${_Rectangle3Copy2}", "width", '27px', { fromValue: '0px'}], position: 1293, duration: 284, easing: "easeOutCubic" },
                { id: "eid164", tween: [ "style", "${_internet_users}", "display", 'block', { fromValue: 'none'}], position: 3156, duration: 0, easing: "easeOutBounce" },
                { id: "eid107", tween: [ "transform", "${_internet}", "scaleX", '0.95771', { fromValue: '0.5404'}], position: 2280, duration: 448, easing: "easeOutBounce" },
                { id: "eid158", tween: [ "style", "${_Rectangle3Copy5}", "left", '329px', { fromValue: '329px'}], position: 2729, duration: 0, easing: "easeOutBounce" },
                { id: "eid105", tween: [ "transform", "${_tecnology}", "scaleY", '0.95771', { fromValue: '0.5404'}], position: 2656, duration: 401, easing: "easeOutBounce" },
                { id: "eid173", tween: [ "style", "${_Rectangle3Copy9}", "left", '473px', { fromValue: '473px'}], position: 3303, duration: 0, easing: "easeOutBounce" },
                { id: "eid119", tween: [ "transform", "${_study}", "scaleX", '0.95771', { fromValue: '0.5404'}], position: 1003, duration: 477, easing: "easeOutBounce" }            ]
        }
    }
},
"part3": {
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
                    rect: ['-5px', '-5px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'tecnology2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/tecnology.png', '0px', '0px']
                },
                {
                    rect: ['-5px', '85px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'internet_users2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/internet_users.png', '0px', '0px']
                },
                {
                    rect: ['-5px', '175px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'press2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/press.png', '0px', '0px']
                },
                {
                    rect: ['-5px', '267px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'internet2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/internet.png', '0px', '0px']
                },
                {
                    rect: ['92px', '-5px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'population2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/population.png', '0px', '0px']
                },
                {
                    rect: ['92px', '84px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'money2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/money.png', '0px', '0px']
                },
                {
                    rect: ['92px', '175px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'study2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/study.png', '0px', '0px']
                },
                {
                    rect: ['89px', '267px', '84px', '83px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.79205', '0.79205']],
                    id: 'public2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/public.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_press2}": [
                ["style", "top", '175px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '-5px'],
                ["style", "display", 'none']
            ],
            "${_study2}": [
                ["style", "top", '175px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '92px'],
                ["style", "display", 'none']
            ],
            "${_tecnology2}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '-5px'],
                ["style", "display", 'none']
            ],
            "${_population2}": [
                ["style", "top", '-5px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '92px'],
                ["style", "display", 'none']
            ],
            "${_money2}": [
                ["style", "top", '84px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '92px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '350px'],
                ["style", "width", '169px']
            ],
            "${_public2}": [
                ["style", "top", '267px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '89px'],
                ["style", "display", 'none']
            ],
            "${_internet2}": [
                ["style", "top", '267px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '-5px'],
                ["style", "display", 'none']
            ],
            "${_internet_users2}": [
                ["style", "top", '85px'],
                ["transform", "scaleY", '0.37556'],
                ["transform", "scaleX", '0.37556'],
                ["style", "left", '-5px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11570,
            autoPlay: true,
            timeline: [
                { id: "eid468", tween: [ "transform", "${_study2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 10574, duration: 553, easing: "easeOutBounce" },
                { id: "eid485", tween: [ "style", "${_study2}", "display", 'block', { fromValue: 'none'}], position: 10574, duration: 0, easing: "easeOutBounce" },
                { id: "eid456", tween: [ "transform", "${_internet2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 9070, duration: 571, easing: "easeOutBounce" },
                { id: "eid464", tween: [ "transform", "${_money2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 10075, duration: 563, easing: "easeOutBounce" },
                { id: "eid486", tween: [ "style", "${_public2}", "display", 'block', { fromValue: 'none'}], position: 11062, duration: 0, easing: "easeOutBounce" },
                { id: "eid481", tween: [ "style", "${_press2}", "display", 'block', { fromValue: 'none'}], position: 8574, duration: 0, easing: "easeOutBounce" },
                { id: "eid448", tween: [ "transform", "${_tecnology2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 7686, duration: 445, easing: "easeOutBounce" },
                { id: "eid466", tween: [ "transform", "${_money2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 10075, duration: 563, easing: "easeOutBounce" },
                { id: "eid478", tween: [ "transform", "${_internet_users2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 8089, duration: 579, easing: "easeOutBounce" },
                { id: "eid470", tween: [ "transform", "${_study2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 10574, duration: 553, easing: "easeOutBounce" },
                { id: "eid484", tween: [ "style", "${_money2}", "display", 'block', { fromValue: 'none'}], position: 10075, duration: 0, easing: "easeOutBounce" },
                { id: "eid458", tween: [ "transform", "${_internet2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 9070, duration: 571, easing: "easeOutBounce" },
                { id: "eid483", tween: [ "style", "${_population2}", "display", 'block', { fromValue: 'none'}], position: 9558, duration: 0, easing: "easeOutBounce" },
                { id: "eid482", tween: [ "style", "${_internet2}", "display", 'block', { fromValue: 'none'}], position: 9070, duration: 0, easing: "easeOutBounce" },
                { id: "eid472", tween: [ "transform", "${_press2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 8574, duration: 571, easing: "easeOutBounce" },
                { id: "eid454", tween: [ "transform", "${_public2}", "scaleY", '0.5529', { fromValue: '0.37556'}], position: 11062, duration: 508, easing: "easeOutBounce" },
                { id: "eid452", tween: [ "transform", "${_public2}", "scaleX", '0.55289', { fromValue: '0.37556'}], position: 11062, duration: 508, easing: "easeOutBounce" },
                { id: "eid460", tween: [ "transform", "${_population2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 9558, duration: 571, easing: "easeOutBounce" },
                { id: "eid480", tween: [ "style", "${_internet_users2}", "display", 'block', { fromValue: 'none'}], position: 8089, duration: 0, easing: "easeOutBounce" },
                { id: "eid479", tween: [ "style", "${_tecnology2}", "display", 'block', { fromValue: 'none'}], position: 7686, duration: 0, easing: "easeOutBounce" },
                { id: "eid450", tween: [ "transform", "${_tecnology2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 7686, duration: 445, easing: "easeOutBounce" },
                { id: "eid474", tween: [ "transform", "${_press2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 8574, duration: 571, easing: "easeOutBounce" },
                { id: "eid462", tween: [ "transform", "${_population2}", "scaleY", '0.58173', { fromValue: '0.37556'}], position: 9558, duration: 571, easing: "easeOutBounce" },
                { id: "eid476", tween: [ "transform", "${_internet_users2}", "scaleX", '0.58173', { fromValue: '0.37556'}], position: 8089, duration: 579, easing: "easeOutBounce" }            ]
        }
    }
},
"part3arcs": {
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
                    id: 'arc_part3',
                    type: 'image',
                    rect: ['0px', '0px', '32px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    id: 'arc_part3Copy',
                    type: 'image',
                    rect: ['0px', '89px', '32px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    id: 'arc_part3Copy2',
                    type: 'image',
                    rect: ['0px', '179px', '32px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    id: 'arc_part3Copy3',
                    type: 'image',
                    rect: ['0px', '271px', '32px', '69px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    rect: ['135px', '0px', '32px', '69px', 'auto', 'auto'],
                    id: 'arc_part3Copy7',
                    transform: [[], ['-180']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    rect: ['134px', '89px', '32px', '69px', 'auto', 'auto'],
                    id: 'arc_part3Copy6',
                    transform: [[], ['-180']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    rect: ['134px', '180px', '32px', '69px', 'auto', 'auto'],
                    id: 'arc_part3Copy5',
                    transform: [[], ['-180']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    rect: ['132px', '273px', '32px', '69px', 'auto', 'auto'],
                    id: 'arc_part3Copy4',
                    transform: [[], ['-180']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/arc_part3.png', '0px', '0px']
                },
                {
                    rect: ['44px', '-2px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'Text',
                    text: '2010г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '-2px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy',
                    text: '2012г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['44px', '58px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy3',
                    text: '2012г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '58px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy2',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['44px', '88px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy7',
                    text: '2012г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '88px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy6',
                    text: '2012г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['44px', '148px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy5',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '148px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy4',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['44px', '179px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy11',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '179px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy10',
                    text: '2012г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['44px', '239px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy9',
                    text: '2014г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '239px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy8',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['44px', '270px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy15',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '270px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy14',
                    text: '2012г',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['97px', '330px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['iceberg, sans-serif', 11, 'rgba(0,0,0,1)', 'bold', 'none', 'normal'],
                    id: 'TextCopy12',
                    text: '2013г',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy14}": [
                ["style", "top", '270px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_TextCopy9}": [
                ["style", "top", '239px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3Copy3}": [
                ["style", "left", '0px'],
                ["style", "top", '271px']
            ],
            "${_arc_part3Copy4}": [
                ["style", "top", '273px'],
                ["style", "left", '132px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_TextCopy15}": [
                ["style", "top", '270px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '342px'],
                ["style", "width", '167px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '179px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '330px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '148px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '58px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${_TextCopy11}": [
                ["style", "top", '179px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '148px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3Copy2}": [
                ["style", "left", '0px'],
                ["style", "top", '179px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '88px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '88px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3Copy6}": [
                ["style", "top", '89px'],
                ["style", "left", '134px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_TextCopy8}": [
                ["style", "top", '239px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_Text}": [
                ["style", "top", '-2px'],
                ["style", "left", '44px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3Copy7}": [
                ["style", "top", '0px'],
                ["style", "left", '135px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_TextCopy2}": [
                ["style", "top", '58px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3Copy5}": [
                ["style", "top", '180px'],
                ["style", "left", '134px'],
                ["transform", "rotateZ", '-180deg']
            ],
            "${_TextCopy}": [
                ["style", "top", '-2px'],
                ["style", "left", '97px'],
                ["style", "font-size", '11px']
            ],
            "${_arc_part3Copy}": [
                ["style", "left", '0px'],
                ["style", "top", '89px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
