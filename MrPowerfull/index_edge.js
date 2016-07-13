/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['open-sans, sans-serif']='<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>';
    fonts['kg_all_of_meregular']='<link rel=\"stylesheet\" href=\"fonts/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'intro',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'STARTpage',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                autoplay: 'autoplay',
                source: ['media/STARTpage.mp3'],
                preload: 'auto'
            }],
            symbolInstances: [
            {
                id: 'intro',
                symbolName: 'intro',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '960px'],
                ["style", "height", '640px'],
                ["style", "overflow", 'hidden']
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
},
"faster": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'background_color',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(64,98,107,1.00)']
                },
                {
                    font: ['open-sans, sans-serif', 39, 'rgba(255,231,0,1.00)', '700', 'none solid rgb(255, 255, 255)', 'normal'],
                    type: 'text',
                    id: 'level',
                    text: 'Level up',
                    align: 'center',
                    rect: ['0px', '296px', '960px', '47px', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 36, 'rgba(255,231,0,1.00)', '700', 'none solid rgb(255, 255, 255)', 'normal'],
                    type: 'text',
                    id: 'wave',
                    text: 'Level 1',
                    align: 'center',
                    rect: ['0px', '351px', '960px', '47px', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'faster',
                    text: 'Faster!',
                    rect: ['193px', '91px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy',
                    text: 'Faster!',
                    rect: ['317px', '460px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy2',
                    text: 'Faster!',
                    rect: ['-188px', '-178px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy3',
                    text: 'Faster!',
                    rect: ['301px', '11px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy4',
                    text: 'Faster!',
                    rect: ['287px', '11px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy5',
                    text: 'Faster!',
                    rect: ['301px', '11px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy6',
                    text: 'Faster!',
                    rect: ['301px', '11px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    transform: [[0, 0], [], [], ['0.79', '0.79']],
                    type: 'text',
                    align: 'center',
                    id: 'fasterCopy7',
                    text: 'Faster!',
                    rect: ['301px', '11px', '308px', '101px', 'auto', 'auto'],
                    font: ['open-sans, sans-serif', 86, 'rgba(255,255,255,1)', '800', 'none solid rgb(255, 255, 255)', 'normal']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    autoplay: 'autoplay',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/LOOPmoment.mp3'],
                    id: 'LOOPmoment',
                    preload: 'auto',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_background_color}": [
                ["color", "background-color", 'rgba(64,98,107,1.00)']
            ],
            "${_fasterCopy6}": [
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "font-size", '86px'],
                ["transform", "scaleY", '0.61'],
                ["style", "width", '308px'],
                ["style", "height", '101px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '455.46px 61.18px'],
                ["style", "font-weight", '800']
            ],
            "${_fasterCopy4}": [
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "font-size", '86px'],
                ["transform", "scaleY", '0.61'],
                ["style", "width", '308px'],
                ["style", "height", '101px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '441px 61.18px'],
                ["style", "font-weight", '800']
            ],
            "${_fasterCopy}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "width", '1300px'],
                ["transform", "scaleY", '0.61'],
                ["style", "font-size", '400px'],
                ["style", "height", '452px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '471.4512px 510.8276px'],
                ["style", "font-weight", '800']
            ],
            "${_fasterCopy7}": [
                ["transform", "rotateZ", '-38deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "width", '308px'],
                ["transform", "scaleY", '0.61'],
                ["style", "font-size", '86px'],
                ["style", "height", '101px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '455.46px 61.18px'],
                ["style", "font-weight", '800']
            ],
            "${_fasterCopy3}": [
                ["transform", "rotateZ", '43deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "width", '736px'],
                ["transform", "scaleY", '0.61'],
                ["style", "font-size", '268px'],
                ["style", "height", '310px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '455.46px 61.18px'],
                ["style", "font-weight", '800']
            ],
            "${_fasterCopy5}": [
                ["transform", "rotateZ", '-6deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "width", '308px'],
                ["transform", "scaleY", '0.61'],
                ["style", "font-size", '86px'],
                ["style", "height", '101px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '455.46px 61.18px'],
                ["style", "font-weight", '800']
            ],
            "${_wave}": [
                ["style", "top", '351px'],
                ["style", "font-weight", '700'],
                ["style", "height", '47px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["color", "color", 'rgba(255,231,0,1.00)'],
                ["style", "font-size", '36px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '640px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_faster}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "font-size", '168px'],
                ["transform", "scaleY", '0.61'],
                ["style", "height", '225px'],
                ["motion", "location", '509.435546875px 203.42087769752px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '633px'],
                ["style", "font-weight", '800']
            ],
            "${_level}": [
                ["style", "top", '296px'],
                ["style", "height", '47px'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(255,231,0,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif']
            ],
            "${_fasterCopy2}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.61'],
                ["style", "opacity", '0'],
                ["style", "font-size", '400px'],
                ["transform", "scaleY", '0.61'],
                ["style", "width", '1287px'],
                ["style", "height", '479px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["motion", "location", '455.457px 61.1836px'],
                ["style", "font-weight", '800']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4890,
            autoPlay: true,
            timeline: [
                { id: "eid1190", tween: [ "transform", "${_faster}", "scaleY", '1', { fromValue: '0.61'}], position: 374, duration: 626, easing: "easeOutElastic" },
                { id: "eid1244", tween: [ "style", "${_fasterCopy4}", "opacity", '1', { fromValue: '0'}], position: 2355, duration: 139, easing: "easeOutElastic" },
                { id: "eid1645", tween: [ "style", "${_fasterCopy2}", "height", '479px', { fromValue: '479px'}], position: 2490, duration: 0, easing: "easeOutElastic" },
                { id: "eid1650", tween: [ "style", "${_fasterCopy3}", "height", '310px', { fromValue: '310px'}], position: 2659, duration: 0, easing: "easeOutElastic" },
                { id: "eid1193", tween: [ "transform", "${_fasterCopy}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 1750, duration: 457, easing: "easeOutElastic" },
                { id: "eid1222", tween: [ "transform", "${_fasterCopy6}", "scaleX", '18.78', { fromValue: '0.61'}], position: 2543, duration: 457, easing: "easeOutElastic" },
                { id: "eid78", tween: [ "transform", "${_faster}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 375, duration: 625, easing: "easeOutElastic" },
                { id: "eid1219", tween: [ "transform", "${_fasterCopy5}", "scaleY", '5.97', { fromValue: '0.61'}], position: 2490, duration: 457, easing: "easeOutElastic" },
                { id: "eid1226", tween: [ "transform", "${_fasterCopy7}", "scaleX", '18.78', { fromValue: '0.61'}], position: 2538, duration: 457, easing: "easeOutBounce" },
                { id: "eid1191", tween: [ "transform", "${_fasterCopy}", "scaleX", '1', { fromValue: '0.61'}], position: 1750, duration: 457, easing: "easeOutElastic" },
                { id: "eid1216", tween: [ "transform", "${_fasterCopy4}", "rotateZ", '-6deg', { fromValue: '-6deg'}], position: 1153, duration: 0, easing: "easeOutSine" },
                { id: "eid1205", tween: [ "transform", "${_fasterCopy3}", "scaleY", '2.63', { fromValue: '0.61'}], position: 2207, duration: 457, easing: "easeOutElastic" },
                { id: "eid1209", tween: [ "transform", "${_fasterCopy3}", "rotateZ", '43deg', { fromValue: '43deg'}], position: 1153, duration: 0, easing: "easeOutSine" },
                { id: "eid1218", tween: [ "transform", "${_fasterCopy5}", "scaleX", '5.97', { fromValue: '0.61'}], position: 2490, duration: 457, easing: "easeOutElastic" },
                { id: "eid1204", tween: [ "transform", "${_fasterCopy3}", "scaleX", '2.63', { fromValue: '0.61'}], position: 2207, duration: 457, easing: "easeOutElastic" },
                { id: "eid1638", tween: [ "style", "${_fasterCopy}", "font-size", '400px', { fromValue: '400px'}], position: 2207, duration: 0, easing: "easeOutElastic" },
                { id: "eid1649", tween: [ "style", "${_fasterCopy3}", "font-size", '268px', { fromValue: '268px'}], position: 2659, duration: 0, easing: "easeOutElastic" },
                { id: "eid1655", tween: [ "motion", "${_faster}", [[509.44, 203.42, 0, 0],[509.44, 203.42, 0, 0]]], position: 1000, duration: 0, easing: "easeOutElastic" },
                { id: "eid1639", tween: [ "motion", "${_fasterCopy}", [[471.45, 510.83, 0, 0],[470.59, 511.81, 0, 0]]], position: 1750, duration: 457, easing: "easeOutElastic" },
                { id: "eid1211", tween: [ "motion", "${_fasterCopy4}", [[441, 61.18, 0, 0],[510.52, 290.56, 0, 0]]], position: 2355, duration: 457, easing: "easeOutElastic" },
                { id: "eid1227", tween: [ "motion", "${_fasterCopy7}", [[455.46, 61.18, 0, 0],[1389.92, -806.47, 0, 0]]], position: 2538, duration: 457, easing: "easeOutBounce" },
                { id: "eid1198", tween: [ "transform", "${_fasterCopy2}", "scaleX", '1', { fromValue: '0.61'}], position: 2033, duration: 457, easing: "easeOutElastic" },
                { id: "eid1189", tween: [ "transform", "${_faster}", "scaleX", '1', { fromValue: '0.61'}], position: 374, duration: 626, easing: "easeOutElastic" },
                { id: "eid1223", tween: [ "motion", "${_fasterCopy6}", [[455.46, 61.18, 0, 0],[578.77, -6.37, 0, 0]]], position: 2543, duration: 457, easing: "easeOutElastic" },
                { id: "eid1199", tween: [ "transform", "${_fasterCopy2}", "scaleY", '1', { fromValue: '0.61'}], position: 2033, duration: 457, easing: "easeOutElastic" },
                { id: "eid1657", tween: [ "transform", "${_fasterCopy7}", "rotateZ", '-38deg', { fromValue: '-38deg'}], position: 2947, duration: 0, easing: "easeOutBounce" },
                { id: "eid1232", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 2836, duration: 159, easing: "easeOutSine" },
                { id: "eid1641", tween: [ "style", "${_fasterCopy}", "width", '1300px', { fromValue: '1300px'}], position: 2207, duration: 0, easing: "easeOutElastic" },
                { id: "eid1237", tween: [ "style", "${_fasterCopy6}", "opacity", '1', { fromValue: '0'}], position: 2538, duration: 169, easing: "easeOutElastic" },
                { id: "eid1246", tween: [ "style", "${_fasterCopy3}", "opacity", '1', { fromValue: '0'}], position: 2207, duration: 83, easing: "easeOutElastic" },
                { id: "eid1200", tween: [ "transform", "${_fasterCopy2}", "rotateZ", '13deg', { fromValue: '0deg'}], position: 2033, duration: 457, easing: "easeOutElastic" },
                { id: "eid1248", tween: [ "style", "${_fasterCopy2}", "opacity", '1', { fromValue: '0'}], position: 2033, duration: 97, easing: "easeOutElastic" },
                { id: "eid1242", tween: [ "style", "${_fasterCopy5}", "opacity", '1', { fromValue: '0'}], position: 2490, duration: 135, easing: "easeOutElastic" },
                { id: "eid1651", tween: [ "style", "${_fasterCopy3}", "width", '736px', { fromValue: '736px'}], position: 2659, duration: 0, easing: "easeOutElastic" },
                { id: "eid1228", tween: [ "transform", "${_fasterCopy7}", "scaleY", '18.78', { fromValue: '0.61'}], position: 2538, duration: 457, easing: "easeOutBounce" },
                { id: "eid1235", tween: [ "style", "${_fasterCopy7}", "opacity", '1', { fromValue: '0'}], position: 2490, duration: 169, easing: "easeOutBounce" },
                { id: "eid1250", tween: [ "style", "${_fasterCopy}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 97, easing: "easeOutElastic" },
                { id: "eid1647", tween: [ "motion", "${_fasterCopy2}", [[455.46, 61.18, 0, 0],[454.88, 61.12, 0, 0]]], position: 2033, duration: 457, easing: "easeOutElastic" },
                { id: "eid1646", tween: [ "style", "${_fasterCopy2}", "width", '1287px', { fromValue: '1287px'}], position: 2490, duration: 0, easing: "easeOutElastic" },
                { id: "eid1640", tween: [ "style", "${_fasterCopy}", "height", '452px', { fromValue: '452px'}], position: 2207, duration: 0, easing: "easeOutElastic" },
                { id: "eid1225", tween: [ "transform", "${_fasterCopy6}", "rotateZ", '-38deg', { fromValue: '-6deg'}], position: 2543, duration: 457, easing: "easeOutElastic" },
                { id: "eid1635", tween: [ "style", "${_faster}", "font-size", '168px', { fromValue: '168px'}], position: 1000, duration: 0 },
                { id: "eid1252", tween: [ "style", "${_faster}", "opacity", '1', { fromValue: '0'}], position: 374, duration: 173, easing: "easeOutElastic" },
                { id: "eid1192", tween: [ "transform", "${_fasterCopy}", "scaleY", '1', { fromValue: '0.61'}], position: 1750, duration: 457, easing: "easeOutElastic" },
                { id: "eid1212", tween: [ "transform", "${_fasterCopy4}", "scaleY", '5.35', { fromValue: '0.61'}], position: 2355, duration: 457, easing: "easeOutElastic" },
                { id: "eid1210", tween: [ "transform", "${_fasterCopy4}", "scaleX", '5.35', { fromValue: '0.61'}], position: 2355, duration: 457, easing: "easeOutElastic" },
                { id: "eid1654", tween: [ "style", "${_faster}", "width", '633px', { fromValue: '633px'}], position: 1000, duration: 0, easing: "easeOutElastic" },
                { id: "eid1221", tween: [ "transform", "${_fasterCopy5}", "rotateZ", '-38deg', { fromValue: '-6deg'}], position: 2490, duration: 457, easing: "easeOutElastic" },
                { id: "eid1224", tween: [ "transform", "${_fasterCopy6}", "scaleY", '18.78', { fromValue: '0.61'}], position: 2543, duration: 457, easing: "easeOutElastic" },
                { id: "eid1653", tween: [ "style", "${_faster}", "height", '225px', { fromValue: '225px'}], position: 1000, duration: 0, easing: "easeOutElastic" },
                { id: "eid1207", tween: [ "motion", "${_fasterCopy3}", [[455.46, 61.18, 0, 0],[577.35, 425.48, 0, 0]]], position: 2207, duration: 457, easing: "easeOutElastic" },
                { id: "eid1217", tween: [ "motion", "${_fasterCopy5}", [[455.46, 61.18, 0, 0],[480.16, 134.13, 0, 0]]], position: 2490, duration: 457, easing: "easeOutElastic" },
                { id: "eid1642", tween: [ "style", "${_fasterCopy2}", "font-size", '400px', { fromValue: '400px'}], position: 2490, duration: 0, easing: "easeOutElastic" }            ]
        }
    }
},
"win": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(23,175,37,1.00)']
                },
                {
                    id: 'win_1',
                    type: 'image',
                    rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/win_1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.23', '1.23']],
                    id: 'win_char',
                    type: 'image',
                    rect: ['25px', '51px', '331px', '599px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/win_char.png', '0px', '0px']
                },
                {
                    autoplay: 'autoplay',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/WINsound.mp3'],
                    id: 'WINsound',
                    preload: 'auto',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_win_char}": [
                ["style", "top", '51px'],
                ["transform", "scaleX", '1.23'],
                ["transform", "scaleY", '1.23'],
                ["style", "left", '25px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5690,
            autoPlay: true,
            timeline: [
                { id: "eid1322", tween: [ "transform", "${_win_char}", "scaleX", '1', { fromValue: '1.23'}], position: 0, duration: 2000, easing: "easeOutQuad" },
                { id: "eid1323", tween: [ "transform", "${_win_char}", "scaleY", '1', { fromValue: '1.23'}], position: 0, duration: 2000, easing: "easeOutQuad" }            ]
        }
    }
},
"game_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'protestgame-v2',
                    type: 'image',
                    rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/protestgame-v2.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'timebar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '15px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0.00)'],
                    c: [
                    {
                        userClass: 'bar_line1',
                        rect: ['0px', '0px', '100%', '15px', 'auto', 'auto'],
                        id: 'timebar2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,221,0,1.00)']
                    }]
                },
                {
                    id: 'game_1_p1',
                    type: 'rect',
                    rect: ['29', '46', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'game_1_p2',
                    type: 'rect',
                    rect: ['325', '80', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'game_1_p3',
                    type: 'rect',
                    rect: ['510', '155', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'game_1_p4',
                    type: 'rect',
                    rect: ['796', '111', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0.54)'],
                    c: [
                    {
                        font: ['open-sans, sans-serif', 39, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        type: 'text',
                        align: 'center',
                        id: 'Text8',
                        text: 'START',
                        cursor: ['pointer'],
                        rect: ['404px', '497px', '151px', '41px', 'auto', 'auto']
                    },
                    {
                        font: ['open-sans, sans-serif', 39, 'rgba(255,231,0,1.00)', '700', 'none', 'normal'],
                        type: 'text',
                        align: 'center',
                        id: 'Text8Copy2',
                        text: 'CLICK ON THE BANNERS',
                        cursor: ['pointer'],
                        rect: ['213px', '432px', '533px', '41px', 'auto', 'auto']
                    },
                    {
                        font: ['open-sans, sans-serif', 126, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        type: 'text',
                        align: 'center',
                        id: 'Text8Copy',
                        text: 'CENSOR<br> THE PROTEST',
                        cursor: ['pointer'],
                        rect: ['51px', '95px', '857px', '337px', 'auto', 'auto']
                    }]
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/good_changeofbanners.mp3'],
                    id: 'good_changeofbanners',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/fault_changeofbanners.mp3'],
                    id: 'fault_changeofbanners',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/angry_protest.mp3'],
                    id: 'angry_protest',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            {
                id: 'game_1_p4',
                symbolName: 'game_1_p4',
                autoPlay: {

               }
            },
            {
                id: 'game_1_p1',
                symbolName: 'game_1_p1',
                autoPlay: {

               }
            },
            {
                id: 'game_1_p3',
                symbolName: 'game_1_p3',
                autoPlay: {

               }
            },
            {
                id: 'game_1_p2',
                symbolName: 'game_1_p2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_timebar2}": [
                ["style", "top", '0px'],
                ["style", "height", '15px'],
                ["color", "background-color", 'rgba(255,221,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_timebar}": [
                ["style", "top", '0px'],
                ["style", "height", '15px'],
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '960px']
            ],
            "${_Text8}": [
                ["style", "top", '497px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '404px'],
                ["style", "font-weight", '700'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '151px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.54)']
            ],
            "${_Text8Copy}": [
                ["style", "top", '95px'],
                ["style", "width", '857px'],
                ["style", "left", '51px'],
                ["style", "font-weight", 'bold'],
                ["style", "height", '337px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '126px']
            ],
            "${_Text8Copy2}": [
                ["style", "top", '432px'],
                ["style", "font-weight", '700'],
                ["style", "left", '213px'],
                ["color", "color", 'rgba(255,231,0,1.00)'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '533px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"game_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'radiogame2',
                    type: 'image',
                    rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/radiogame2.jpg', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'group',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(51,196,248,0.00)'],
                    c: [
                    {
                        id: 'game_2_Symbol_1',
                        type: 'rect',
                        rect: ['288', '395', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'game_2_mouth',
                        type: 'rect',
                        rect: ['1026px', '208px', 'auto', 'auto', 'auto', 'auto'],
                        userClass: 'circle0001'
                    },
                    {
                        id: 'game_2_mouth2',
                        type: 'rect',
                        rect: ['1219px', '197px', 'auto', 'auto', 'auto', 'auto'],
                        userClass: 'circle0002'
                    },
                    {
                        id: 'game_2_mouth3',
                        type: 'rect',
                        rect: ['1632px', '197px', 'auto', 'auto', 'auto', 'auto'],
                        userClass: 'circle0003'
                    },
                    {
                        type: 'rect',
                        id: 'container',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                        fill: ['rgba(51,196,248,0.00)']
                    },
                    {
                        type: 'rect',
                        id: 'timebar',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '960px', '15px', 'auto', 'auto'],
                        fill: ['rgba(51,196,248,0)'],
                        c: [
                        {
                            userClass: 'bar_line2',
                            rect: ['0px', '0px', '100%', '15px', 'auto', 'auto'],
                            id: 'timebar2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,225,0,1.00)']
                        }]
                    }]
                },
                {
                    type: 'rect',
                    id: 'background',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(26,26,26,0.57)'],
                    c: [
                    {
                        font: ['open-sans, sans-serif', 39, 'rgba(255,255,255,1)', '900', 'none', 'normal'],
                        type: 'text',
                        id: 'Text9',
                        text: 'START',
                        align: 'center',
                        rect: ['391px', '518px', '178px', '42px', 'auto', 'auto']
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 138, 'rgba(255,255,255,1)', '700', 'none', 'normal'],
                        type: 'text',
                        id: 'Text',
                        text: 'SHUT THEM UP',
                        align: 'center',
                        rect: ['54px', '107px', '865px', '297px', 'auto', 'auto']
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 39, 'rgba(255,231,0,1.00)', '700', 'none', 'normal'],
                        type: 'text',
                        id: 'TextCopy',
                        text: 'CLICK TO THROW',
                        align: 'center',
                        rect: ['281px', '437px', '397px', '48px', 'auto', 'auto']
                    }]
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/fullmouth.mp3'],
                    id: 'fullmouth',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/shoot.mp3'],
                    id: 'shoot',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/voiceover1_freedomofspeech.mp3'],
                    id: 'voiceover1_freedomofspeech',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/voiceover2_wewanttobefree.mp3'],
                    id: 'voiceover2_wewanttobefree',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/voiceover3_censorship.mp3'],
                    id: 'voiceover3_censorship',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            {
                id: 'game_2_mouth3',
                symbolName: 'game_2_mouth3',
                autoPlay: {

               }
            },
            {
                id: 'game_2_mouth',
                symbolName: 'game_2_mouth',
                autoPlay: {

               }
            },
            {
                id: 'game_2_Symbol_1',
                symbolName: 'game_2_Symbol_1',
                autoPlay: {

               }
            },
            {
                id: 'game_2_mouth2',
                symbolName: 'game_2_mouth2',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_game_2_mouth3}": [
                ["style", "left", '1632px'],
                ["style", "top", '197px']
            ],
            "${_background}": [
                ["color", "background-color", 'rgba(26,26,26,0.57)']
            ],
            "${_group}": [
                ["color", "background-color", 'rgba(51,196,248,0.00)']
            ],
            "${_timebar2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,225,0,1.00)']
            ],
            "${_game_2_mouth2}": [
                ["style", "left", '1219px'],
                ["style", "top", '197px']
            ],
            "${_game_2_mouth}": [
                ["style", "left", '1026px'],
                ["style", "top", '208px']
            ],
            "${_timebar}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text9}": [
                ["style", "top", '518px'],
                ["style", "font-weight", '900'],
                ["style", "height", '42px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "left", '391px'],
                ["style", "width", '178px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(51,196,248,0.00)']
            ],
            "${_TextCopy}": [
                ["style", "top", '437px'],
                ["style", "font-size", '39px'],
                ["style", "height", '48px'],
                ["color", "color", 'rgba(255,231,0,1.00)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '281px'],
                ["style", "width", '397px']
            ],
            "${_Text}": [
                ["style", "font-weight", '700'],
                ["style", "font-size", '138px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"intro_game_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle10',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    autoplay: 'autoplay',
                    rect: ['0', '50px', '960', '540', 'auto', 'auto'],
                    source: ['media/INTROminigame1.mp4'],
                    id: 'INTROminigame1',
                    preload: 'auto',
                    type: 'video',
                    tag: 'video'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_INTROminigame1}": [
                ["style", "top", '50px']
            ],
            "${_Rectangle10}": [
                ["style", "height", '640px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"lose": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(248,51,77,1.00)']
                },
                {
                    id: 'stressbar',
                    type: 'rect',
                    rect: ['739', '46', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'image',
                    id: 'loose1',
                    rect: ['100px', '0', '1134px', '640px', 'auto', 'auto'],
                    clip: ['rect(0px 380.47607421875px 640px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/loose1.png', '0px', '0px']
                },
                {
                    autoplay: 'autoplay',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/LOSEsound.mp3'],
                    id: 'LOSEsound',
                    preload: 'auto',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            {
                id: 'stressbar',
                symbolName: 'stressbar',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_loose1}": [
                ["transform", "scaleY", '1.15999'],
                ["transform", "scaleX", '1.15999'],
                ["style", "clip", [0,380.47607421875,640,5.63623046875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [-377,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11253,
            autoPlay: true,
            timeline: [
                { id: "eid183", tween: [ "style", "${_loose1}", "background-position", [-377,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-377,0]}], position: 0, duration: 0 },
                { id: "eid185", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-379,0]}], position: 500, duration: 0 },
                { id: "eid186", tween: [ "style", "${_loose1}", "background-position", [-377,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 750, duration: 0 },
                { id: "eid188", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-377,0]}], position: 1000, duration: 0 },
                { id: "eid187", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 1250, duration: 0 },
                { id: "eid189", tween: [ "style", "${_loose1}", "background-position", [-377,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 1500, duration: 0 },
                { id: "eid190", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-377,0]}], position: 1750, duration: 0 },
                { id: "eid191", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 2000, duration: 0 },
                { id: "eid192", tween: [ "style", "${_loose1}", "background-position", [-377,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 2250, duration: 0 },
                { id: "eid193", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-377,0]}], position: 2500, duration: 0 },
                { id: "eid194", tween: [ "style", "${_loose1}", "background-position", [-755,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-755,0]}], position: 2750, duration: 0 },
                { id: "eid1318", tween: [ "transform", "${_loose1}", "scaleX", '1', { fromValue: '1.15999'}], position: 0, duration: 2000, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "style", "${_loose1}", "clip", [0,380.47607421875,640,5.63623046875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,380.47607421875,640,5.63623046875]}], position: 3000, duration: 0 },
                { id: "eid1319", tween: [ "transform", "${_loose1}", "scaleY", '1', { fromValue: '1.15999'}], position: 0, duration: 2000, easing: "easeOutQuad" }            ]
        }
    }
},
"end": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '1px', '960px', '640px', 'auto', 'auto'],
                    id: 'Rectangle4',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1)']
                },
                {
                    preload: 'auto',
                    rect: ['0px', '50px', '960', '540', 'auto', 'auto'],
                    source: ['media/DIEdieDictator.mp4'],
                    id: 'DIEdieDictator',
                    type: 'video',
                    tag: 'video'
                },
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0', '0', '960', '640', 'auto', 'auto'],
                    c: [
                    {
                        id: '_32',
                        type: 'image',
                        rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/3.jpg', '0px', '0px']
                    },
                    {
                        type: 'text',
                        rect: ['81px', '180px', '457px', '140px', 'auto', 'auto'],
                        id: 'Text2Copy',
                        text: 'MR<br>POWERFUL',
                        align: 'center',
                        font: ['open-sans, sans-serif', 54, 'rgba(255,255,255,1)', '900', 'none', 'normal']
                    },
                    {
                        rect: ['226px', '343px', '167px', '83px', 'auto', 'auto'],
                        id: 'playagain',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/playagain.png', '0px', '0px']
                    },
                    {
                        rect: ['206px', '426px', '208px', '103px', 'auto', 'auto'],
                        id: 'newpowers',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/unlockchar.png', '0px', '0px']
                    }]
                },
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['0', '0', '1920', '743', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0', '0', '1920px', '640px', 'auto', 'auto'],
                        id: 'amnestyoffice22',
                        type: 'image',
                        clip: ['rect(0px 958.32568359375px 640px 0px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amnestyoffice22.jpg', '0px', '0px']
                    },
                    {
                        rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(0,0,0,0.43)']
                    },
                    {
                        type: 'text',
                        rect: ['99px', '557px', '762px', '66px', 'auto', 'auto'],
                        align: 'center',
                        id: 'perspective',
                        text: 'YOU HAVE CHANGED PERSPECTIVE',
                        textShadow: ['rgba(0,0,0,0.50)', 3, 3, 3],
                        font: ['open-sans, sans-serif', 53, 'rgba(255,255,255,1)', '700', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['99px', '557px', '762px', '66px', 'auto', 'auto'],
                        align: 'center',
                        id: 'pressure',
                        text: 'AS AMNESTY INTERNATIONAL YOU CAN PRESSURE THE HUMAN RIGHTS VIOLATORS ',
                        textShadow: ['rgba(0,0,0,0.50)', 3, 3, 3],
                        font: ['open-sans, sans-serif', 53, 'rgba(255,255,255,1)', '700', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['99px', '557px', '762px', '66px', 'auto', 'auto'],
                        align: 'center',
                        id: 'notgame',
                        text: 'YOU ARE NOW JUST ONE MORE CLICK AWAY TO MAKE A REAL DIFFERENCE',
                        textShadow: ['rgba(0,0,0,0.50)', 3, 3, 3],
                        font: ['open-sans, sans-serif', 53, 'rgba(255,255,255,1)', '700', 'none', 'normal']
                    },
                    {
                        type: 'text',
                        rect: ['99px', '557px', '762px', '66px', 'auto', 'auto'],
                        align: 'center',
                        id: 'you_can',
                        text: 'JOIN AMNESTYS FIGHT FOR HUMAN RIGHTS',
                        textShadow: ['rgba(0,0,0,0.50)', 3, 3, 3],
                        font: ['open-sans, sans-serif', 53, 'rgba(255,255,255,1)', '700', 'none', 'normal']
                    },
                    {
                        rect: ['718px', '526px', '167px', '83px', 'auto', 'auto'],
                        id: 'SHARE',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/SHARE.png', '0px', '0px']
                    },
                    {
                        rect: ['498px', '526px', '167px', '83px', 'auto', 'auto'],
                        id: 'LETTER',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/LETTER.png', '0px', '0px']
                    },
                    {
                        rect: ['300px', '526px', '167px', '83px', 'auto', 'auto'],
                        id: 'PETITION',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/PETITION.png', '0px', '0px']
                    },
                    {
                        rect: ['81px', '526px', '167px', '83px', 'auto', 'auto'],
                        id: 'DONATE',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/DONATE.png', '0px', '0px']
                    },
                    {
                        rect: ['16px', '17px', '71px', '65px', 'auto', 'auto'],
                        id: 'back',
                        type: 'image',
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/back.png', '0px', '0px']
                    }]
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/ENDsound.mp3'],
                    id: 'ENDsound',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_DONATE}": [
                ["style", "top", '660px'],
                ["style", "height", '83px'],
                ["style", "left", '81px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '167px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.43)']
            ],
            "${_Text2Copy}": [
                ["style", "top", '180px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "height", '140px'],
                ["style", "font-weight", '900'],
                ["style", "left", '81px'],
                ["style", "font-size", '54px']
            ],
            "${_notgame}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '98px'],
                ["style", "width", '762px'],
                ["style", "top", '219px'],
                ["style", "font-size", '51px'],
                ["style", "opacity", '0'],
                ["style", "height", '249px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
                ["style", "font-weight", '700']
            ],
            "${_pressure}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '48px'],
                ["style", "width", '862px'],
                ["style", "top", '174px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '63px'],
                ["style", "height", '338px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
                ["style", "font-weight", '700']
            ],
            "${_SHARE}": [
                ["style", "top", '660px'],
                ["style", "height", '83px'],
                ["style", "left", '718px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '167px']
            ],
            "${_DIEdieDictator}": [
                ["style", "top", '50px'],
                ["style", "left", '0px']
            ],
            "${__32}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_back}": [
                ["style", "top", '17px'],
                ["style", "height", '65px'],
                ["style", "left", '16px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '71px']
            ],
            "${_PETITION}": [
                ["style", "top", '660px'],
                ["style", "height", '83px'],
                ["style", "left", '300px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '167px']
            ],
            "${_perspective}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '98px'],
                ["style", "width", '762px'],
                ["style", "top", '83px'],
                ["style", "font-size", '51px'],
                ["style", "opacity", '0'],
                ["style", "height", '476px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
                ["style", "font-weight", '700']
            ],
            "${_newpowers}": [
                ["style", "top", '426px'],
                ["style", "height", '103px'],
                ["style", "left", '206px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '208px']
            ],
            "${_LETTER}": [
                ["style", "top", '660px'],
                ["style", "height", '83px'],
                ["style", "left", '498px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '167px']
            ],
            "${_amnestyoffice22}": [
                ["style", "clip", [0,958.32568359375,640,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_playagain}": [
                ["style", "top", '343px'],
                ["style", "left", '226px'],
                ["style", "cursor", 'pointer']
            ],
            "${_you_can}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '960px'],
                ["style", "top", '278px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '62px'],
                ["style", "height", '130px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.50)'],
                ["style", "font-weight", '700']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30489,
            autoPlay: true,
            labels: {
                "ending": 4750,
                "new_char": 5500
            },
            timeline: [
                { id: "eid1562", tween: [ "style", "${_perspective}", "left", '98px', { fromValue: '98px'}], position: 5061, duration: 0 },
                { id: "eid875", tween: [ "style", "${_LETTER}", "top", '526px', { fromValue: '660px'}], position: 16750, duration: 250, easing: "easeOutBack" },
                { id: "eid1405", tween: [ "style", "${_you_can}", "left", '-1px', { fromValue: '0px'}], position: 16250, duration: 750, easing: "easeOutQuad" },
                { id: "eid1559", tween: [ "style", "${_perspective}", "font-size", '118px', { fromValue: '51px'}], position: 5061, duration: 0 },
                { id: "eid866", tween: [ "style", "${_DONATE}", "left", '81px', { fromValue: '81px'}], position: 17028, duration: 0 },
                { id: "eid825", tween: [ "style", "${_amnestyoffice22}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6250, duration: 0 },
                { id: "eid826", tween: [ "style", "${_amnestyoffice22}", "background-position", [-960,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6500, duration: 0 },
                { id: "eid827", tween: [ "style", "${_amnestyoffice22}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-960,0]}], position: 6750, duration: 0 },
                { id: "eid845", tween: [ "style", "${_you_can}", "opacity", '1', { fromValue: '0'}], position: 16250, duration: 397 },
                { id: "eid1853", tween: [ "style", "${_notgame}", "height", '249px', { fromValue: '249px'}], position: 13000, duration: 0 },
                { id: "eid876", tween: [ "style", "${_SHARE}", "top", '526px', { fromValue: '660px'}], position: 16750, duration: 250, easing: "easeOutBack" },
                { id: "eid868", tween: [ "style", "${_LETTER}", "left", '498px', { fromValue: '498px'}], position: 17000, duration: 0 },
                { id: "eid837", tween: [ "style", "${_pressure}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 250 },
                { id: "eid834", tween: [ "style", "${_pressure}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 250 },
                { id: "eid1854", tween: [ "style", "${_notgame}", "top", '219px', { fromValue: '219px'}], position: 13000, duration: 0 },
                { id: "eid1871", tween: [ "style", "${_perspective}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 250 },
                { id: "eid832", tween: [ "style", "${_perspective}", "opacity", '0', { fromValue: '1'}], position: 8250, duration: 250 },
                { id: "eid877", tween: [ "style", "${_PETITION}", "top", '526px', { fromValue: '660px'}], position: 16750, duration: 250, easing: "easeOutBack" },
                { id: "eid1574", tween: [ "style", "${_notgame}", "font-size", '58px', { fromValue: '51px'}], position: 3500, duration: 9500 },
                { id: "eid1404", tween: [ "style", "${_you_can}", "top", '258px', { fromValue: '278px'}], position: 16250, duration: 750, easing: "easeOutQuad" },
                { id: "eid872", tween: [ "style", "${_SHARE}", "left", '718px', { fromValue: '718px'}], position: 17000, duration: 0 },
                { id: "eid1588", tween: [ "style", "${_you_can}", "font-size", '64px', { fromValue: '62px'}], position: 16250, duration: 750 },
                { id: "eid865", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0.000000'}], position: 6500, duration: 250 },
                { id: "eid1403", tween: [ "style", "${_you_can}", "height", '169px', { fromValue: '130px'}], position: 16250, duration: 750, easing: "easeOutQuad" },
                { id: "eid841", tween: [ "style", "${_notgame}", "opacity", '1', { fromValue: '0'}], position: 12750, duration: 250 },
                { id: "eid842", tween: [ "style", "${_notgame}", "opacity", '0', { fromValue: '1'}], position: 16000, duration: 250 },
                { id: "eid1563", tween: [ "style", "${_perspective}", "height", '476px', { fromValue: '476px'}], position: 5061, duration: 0 },
                { id: "eid874", tween: [ "style", "${_DONATE}", "top", '526px', { fromValue: '660px'}], position: 16750, duration: 278, easing: "easeOutBack" },
                { id: "eid870", tween: [ "style", "${_PETITION}", "left", '300px', { fromValue: '300px'}], position: 17000, duration: 0 },
                { id: "eid1561", tween: [ "style", "${_perspective}", "top", '83px', { fromValue: '83px'}], position: 5061, duration: 0 },
                { id: "eid858", tween: [ "style", "${_you_can}", "width", '960px', { fromValue: '960px'}], position: 16250, duration: 0 },
                { id: "eid1586", tween: [ "style", "${_notgame}", "left", '98px', { fromValue: '98px'}], position: 13000, duration: 0 },
                { id: "eid1594", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_ENDsound}', [] ], ""], position: 5500 }            ]
        }
    }
},
"intro": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    preload: 'auto',
                    rect: ['0', '50px', '960', '540', 'auto', 'auto'],
                    source: ['media/INTROgame.mp4'],
                    id: 'INTROgame',
                    type: 'video',
                    tag: 'video'
                },
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0', '0', '960', '640', 'auto', 'auto'],
                    c: [
                    {
                        id: 'beginpage',
                        type: 'image',
                        rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/beginpage.jpg', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'play',
                        rect: ['226px', '394px', '167px', '82px', 'auto', 'auto'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0)', 'images/play.png', '0px', '0px']
                    },
                    {
                        font: ['open-sans, sans-serif', 54, 'rgba(255,255,255,1)', '900', 'none', 'normal'],
                        type: 'text',
                        id: 'Text2',
                        text: 'MR<br>POWERFUL',
                        align: 'center',
                        rect: ['81px', '203px', '457px', '140px', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_play}": [
                ["style", "top", '394px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '226px']
            ],
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_INTROgame}": [
                ["style", "top", '50px']
            ],
            "${_Text2}": [
                ["style", "top", '203px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "height", '140px'],
                ["style", "font-weight", '900'],
                ["style", "left", '81px'],
                ["style", "font-size", '54px']
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
},
"game_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'paperkiller_main',
                    type: 'image',
                    rect: ['0', '0', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/paperkiller_main.jpg', '0px', '0px']
                },
                {
                    userClass: 'container',
                    rect: ['253px', '0px', '475px', '770px', 'auto', 'auto'],
                    id: 'container',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(244,147,19,0.00)'],
                    c: [
                    {
                        userClass: 'paper',
                        rect: ['18px', '4px', '440px', '350px', 'auto', 'auto'],
                        id: 'brief',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,147,19,0)'],
                        c: [
                        {
                            id: 'game_3_arms',
                            type: 'rect',
                            rect: ['-50', '-490', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'paperkiller_paper',
                            type: 'image',
                            rect: ['0px', '0', '438px', '502px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/paperkiller_paper.png', '0px', '0px']
                        },
                        {
                            id: 'shredder_text',
                            type: 'image',
                            rect: ['49px', '31px', '354px', '339px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/shredder_text.png', '0px', '0px']
                        },
                        {
                            id: 'game_3_thumbs',
                            type: 'rect',
                            rect: ['-50', '-490', 'auto', 'auto', 'auto', 'auto']
                        }]
                    },
                    {
                        userClass: 'goodwall',
                        rect: ['25px', '640px', '460px', '50px', 'auto', 'auto'],
                        id: 'exit',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,147,19,0)']
                    },
                    {
                        userClass: 'badwall',
                        rect: ['468px', '270px', '60px', '470px', 'auto', 'auto'],
                        id: 'side_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,147,19,0)']
                    },
                    {
                        userClass: 'badwall',
                        rect: ['-40px', '270px', '45px', '470px', 'auto', 'auto'],
                        id: 'side_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(244,147,19,0)']
                    },
                    {
                        type: 'rect',
                        id: 'voorkant',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['13px', '415px', '460px', '380px', 'auto', 'auto'],
                        fill: ['rgba(244,147,19,0.00)'],
                        c: [
                        {
                            id: 'game_3_case',
                            type: 'rect',
                            rect: ['-58', '-65', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'hidden',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-20px', '105px', '485px', '120px', 'auto', 'auto'],
                            fill: ['rgba(244,147,19,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'brief2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['20px', '-515px', '440px', '500px', 'auto', 'auto'],
                                fill: ['rgba(244,147,19,0.00)'],
                                c: [
                                {
                                    id: 'shredded',
                                    type: 'image',
                                    rect: ['0px', '0px', '440px', '500px', 'auto', 'auto'],
                                    fill: ['rgba(0,0,0,0)', 'images/shredded.png', '0px', '0px']
                                }]
                            }]
                        }]
                    }]
                },
                {
                    id: 'game_3_win',
                    type: 'rect',
                    rect: ['0', '370', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'timebar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '15px', 'auto', 'auto'],
                    fill: ['rgba(244,147,19,0.00)'],
                    c: [
                    {
                        userClass: 'bar_line3',
                        rect: ['0px', '0px', '100%', '15px', 'auto', 'auto'],
                        id: 'timebar2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,225,0,1.00)']
                    }]
                },
                {
                    type: 'rect',
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    fill: ['rgba(26,26,26,0.57)'],
                    c: [
                    {
                        font: ['open-sans, sans-serif', 43, 'rgba(255,255,255,1.00)', '800', 'none', ''],
                        type: 'text',
                        id: 'Text',
                        text: 'START',
                        align: 'center',
                        rect: ['408px', '521px', '143px', '59px', 'auto', 'auto']
                    },
                    {
                        font: ['open-sans, sans-serif', 43, 'rgba(255,231,0,1.00)', '800', 'none', ''],
                        type: 'text',
                        id: 'TextCopy2',
                        text: 'DRAG THE PAPER DOWN',
                        align: 'center',
                        rect: ['198px', '436px', '586px', '59px', 'auto', 'auto']
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 149, 'rgba(255,255,255,1.00)', 'bold', 'none', 'normal'],
                        type: 'text',
                        id: 'Text2',
                        text: 'SHRED THE PETITION',
                        align: 'center',
                        rect: ['45px', '90px', '870px', '321px', 'auto', 'auto']
                    }]
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/shreddingpaper_long.mp3'],
                    id: 'shreddingpaper_long',
                    type: 'audio',
                    tag: 'audio'
                },
                {
                    preload: 'auto',
                    rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                    source: ['media/jammedpaper.mp3'],
                    id: 'jammedpaper',
                    type: 'audio',
                    tag: 'audio'
                }
            ],
            symbolInstances: [
            {
                id: 'game_3_win',
                symbolName: 'game_3_win',
                autoPlay: {

               }
            },
            {
                id: 'game_3_case',
                symbolName: 'game_3_case',
                autoPlay: {

               }
            },
            {
                id: 'game_3_thumbs',
                symbolName: 'game_3_thumbs',
                autoPlay: {

               }
            },
            {
                id: 'game_3_arms',
                symbolName: 'game_3_arms',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_side_2}": [
                ["style", "top", '270px'],
                ["style", "height", '470px'],
                ["style", "left", '468px'],
                ["style", "width", '60px']
            ],
            "${_shredder_text}": [
                ["style", "left", '49px'],
                ["style", "top", '31px']
            ],
            "${_Text2}": [
                ["style", "top", '90px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-size", '149px']
            ],
            "${_timebar2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,225,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '15px']
            ],
            "${_TextCopy2}": [
                ["color", "color", 'rgba(255,231,0,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '198px'],
                ["style", "width", '586px'],
                ["style", "top", '436px'],
                ["style", "text-align", 'center'],
                ["style", "height", '59px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '43px']
            ],
            "${_container}": [
                ["color", "background-color", 'rgba(244,147,19,0.00)'],
                ["style", "height", '770px'],
                ["style", "left", '253px'],
                ["style", "width", '475px']
            ],
            "${_exit}": [
                ["style", "top", '640px'],
                ["style", "height", '50px'],
                ["style", "left", '25px'],
                ["style", "width", '460px']
            ],
            "${_side_1}": [
                ["style", "height", '470px'],
                ["style", "top", '270px'],
                ["style", "left", '-40px'],
                ["style", "width", '45px']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '408px'],
                ["style", "width", '143px'],
                ["style", "top", '521px'],
                ["style", "text-align", 'center'],
                ["style", "height", '59px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '43px']
            ],
            "${_voorkant}": [
                ["color", "background-color", 'rgba(244,147,19,0.00)'],
                ["style", "height", '380px'],
                ["style", "top", '415px'],
                ["style", "left", '13px'],
                ["style", "width", '460px']
            ],
            "${_Rectangle3}": [
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(26,26,26,0.57)']
            ],
            "${_hidden}": [
                ["style", "top", '105px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '120px'],
                ["color", "background-color", 'rgba(244,147,19,0.00)'],
                ["style", "left", '-20px'],
                ["style", "width", '485px']
            ],
            "${_timebar}": [
                ["style", "height", '15px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(244,147,19,0.00)']
            ],
            "${_brief2}": [
                ["color", "background-color", 'rgba(244,147,19,0.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '500px'],
                ["style", "top", '-515px'],
                ["style", "left", '20px'],
                ["style", "width", '440px']
            ],
            "${_shredded}": [
                ["style", "height", '500px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '440px']
            ],
            "${_paperkiller_paper}": [
                ["style", "left", '0px']
            ],
            "${_brief}": [
                ["style", "top", '4px'],
                ["style", "height", '350px'],
                ["style", "left", '18px'],
                ["style", "width", '440px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"intro_game_2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    autoplay: 'autoplay',
                    rect: ['0', '50px', '960', '540', 'auto', 'auto'],
                    source: ['media/INTROminigame2.mp4'],
                    id: 'INTROminigame2',
                    preload: 'auto',
                    type: 'video',
                    tag: 'video'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_INTROminigame2}": [
                ["style", "top", '50px']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8811,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"intro_game_3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '960px', '640px', 'auto', 'auto'],
                    id: 'Rectangle6Copy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    autoplay: 'autoplay',
                    rect: ['0', '50px', '960', '540', 'auto', 'auto'],
                    source: ['media/INTROminigame3.mp4'],
                    id: 'INTROminigame3',
                    preload: 'auto',
                    type: 'video',
                    tag: 'video'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_INTROminigame3}": [
                ["style", "top", '50px']
            ],
            "${_Rectangle6Copy}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6592,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"stressbar": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    font: ['open-sans, sans-serif', 27, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'Text',
                    text: 'NERVOUS',
                    align: 'right',
                    rect: ['-221px', '381px', '215px', '35px', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 27, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'TextCopy',
                    text: 'STRESSED',
                    align: 'right',
                    rect: ['-221px', '381px', '215px', '35px', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 27, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'TextCopy2',
                    text: 'PANIC',
                    align: 'right',
                    rect: ['-221px', '381px', '215px', '35px', 'auto', 'auto']
                },
                {
                    font: ['open-sans, sans-serif', 27, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                    type: 'text',
                    id: 'TextCopy3',
                    text: 'MENTAL BREAKDOWN',
                    align: 'right',
                    rect: ['-221px', '381px', '245px', '35px', 'auto', 'auto']
                },
                {
                    id: 'strs1',
                    type: 'image',
                    rect: ['-160px', '-24px', '388px', '583px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/strs1.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'main_bar',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['14px', '14px', '30px', '520px', 'auto', 'auto'],
                    fill: ['rgba(244,147,19,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'bar_4',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '390px', '100%', '130px', 'auto', 'auto'],
                        fill: ['rgba(149,189,136,1.00)']
                    },
                    {
                        type: 'rect',
                        id: 'bar_3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '260px', '100%', '130px', 'auto', 'auto'],
                        fill: ['rgba(255,207,101,1.00)']
                    },
                    {
                        type: 'rect',
                        id: 'bar_2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '130px', '100%', '130px', 'auto', 'auto'],
                        fill: ['rgba(225,144,83,1.00)']
                    },
                    {
                        type: 'rect',
                        id: 'bar_1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['0px', '0px', '100%', '130px', 'auto', 'auto'],
                        fill: ['rgba(198,16,57,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_strs1}": [
                ["style", "height", '583px'],
                ["style", "top", '-24px'],
                ["style", "left", '-160px'],
                ["style", "width", '388px']
            ],
            "${_TextCopy2}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-115px'],
                ["style", "width", '215px'],
                ["style", "top", '126px'],
                ["style", "text-align", 'right'],
                ["style", "height", '35px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '25px'],
                ["style", "font-weight", '700']
            ],
            "${_TextCopy}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-115px'],
                ["style", "font-size", '25px'],
                ["style", "top", '256px'],
                ["style", "text-align", 'right'],
                ["style", "height", '35px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '215px'],
                ["style", "font-weight", '700']
            ],
            "${_Text}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-115px'],
                ["style", "width", '215px'],
                ["style", "top", '385px'],
                ["style", "text-align", 'right'],
                ["style", "height", '35px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "font-size", '25px'],
                ["style", "font-weight", '700']
            ],
            "${_TextCopy3}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-115px'],
                ["style", "font-size", '25px'],
                ["style", "top", '-3px'],
                ["style", "text-align", 'right'],
                ["style", "height", '35px'],
                ["style", "font-family", 'open-sans, sans-serif'],
                ["style", "width", '292px'],
                ["style", "font-weight", '700']
            ],
            "${_main_bar}": [
                ["style", "height", '520px'],
                ["style", "top", '14px'],
                ["style", "left", '14px'],
                ["style", "width", '30px']
            ],
            "${symbolSelector}": [
                ["style", "height", '548px'],
                ["style", "width", '58px']
            ],
            "${_bar_2}": [
                ["style", "top", '260px'],
                ["style", "height", '0px'],
                ["color", "background-color", 'rgba(225,144,83,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_bar_4}": [
                ["style", "top", '520px'],
                ["style", "height", '0px'],
                ["color", "background-color", 'rgba(149,189,136,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_bar_3}": [
                ["style", "top", '390px'],
                ["style", "height", '0px'],
                ["color", "background-color", 'rgba(255,207,101,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_bar_1}": [
                ["style", "top", '130px'],
                ["style", "height", '0px'],
                ["color", "background-color", 'rgba(198,16,57,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            labels: {
                "stage_1": 0,
                "stage_2": 1500,
                "stage_3": 3000,
                "stage_4": 4500
            },
            timeline: [
                { id: "eid94", tween: [ "style", "${_bar_4}", "height", '130px', { fromValue: '0px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid101", tween: [ "style", "${_bar_3}", "top", '260px', { fromValue: '390px'}], position: 1500, duration: 1500, easing: "easeOutBack" },
                { id: "eid1782", tween: [ "color", "${_TextCopy}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid1783", tween: [ "color", "${_TextCopy}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4500, duration: 0 },
                { id: "eid104", tween: [ "style", "${_bar_2}", "width", '100%', { fromValue: '100%'}], position: 4500, duration: 0, easing: "easeOutSine" },
                { id: "eid1546", tween: [ "style", "${_TextCopy2}", "top", '126px', { fromValue: '126px'}], position: 4378, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "style", "${_bar_1}", "height", '130px', { fromValue: '0px'}], position: 4500, duration: 1500, easing: "easeOutBack" },
                { id: "eid1162", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeOutElastic" },
                { id: "eid1396", tween: [ "style", "${_TextCopy3}", "font-size", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_bar_4}", "width", '100%', { fromValue: '100%'}], position: 1500, duration: 0, easing: "easeOutSine" },
                { id: "eid1780", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid1781", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4500, duration: 0 },
                { id: "eid1171", tween: [ "style", "${_TextCopy2}", "left", '-241px', { fromValue: '-115px'}], position: 4000, duration: 378, easing: "easeOutElastic" },
                { id: "eid1165", tween: [ "style", "${_TextCopy}", "left", '-241px', { fromValue: '-115px'}], position: 2500, duration: 378, easing: "easeOutElastic" },
                { id: "eid1393", tween: [ "style", "${_TextCopy2}", "font-size", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid1172", tween: [ "style", "${_TextCopy3}", "top", '-3px', { fromValue: '-3px'}], position: 5878, duration: 0, easing: "easeOutElastic" },
                { id: "eid1161", tween: [ "style", "${_Text}", "left", '-241px', { fromValue: '-115px'}], position: 1000, duration: 378, easing: "easeOutElastic" },
                { id: "eid1170", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 250, easing: "easeOutElastic" },
                { id: "eid108", tween: [ "style", "${_bar_1}", "left", '0px', { fromValue: '0px'}], position: 6000, duration: 0, easing: "easeOutSine" },
                { id: "eid1174", tween: [ "style", "${_TextCopy3}", "left", '-316px', { fromValue: '-115px'}], position: 5500, duration: 378, easing: "easeOutElastic" },
                { id: "eid1394", tween: [ "style", "${_TextCopy}", "font-size", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid1173", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 250, easing: "easeOutElastic" },
                { id: "eid1168", tween: [ "style", "${_TextCopy}", "top", '256px', { fromValue: '256px'}], position: 2878, duration: 0, easing: "easeOutElastic" },
                { id: "eid1164", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 250, easing: "easeOutElastic" },
                { id: "eid96", tween: [ "style", "${_bar_3}", "left", '0px', { fromValue: '0px'}], position: 3000, duration: 0, easing: "easeOutSine" },
                { id: "eid95", tween: [ "style", "${_bar_4}", "top", '390px', { fromValue: '520px'}], position: 0, duration: 1500, easing: "easeOutBack" },
                { id: "eid90", tween: [ "style", "${_bar_4}", "left", '0px', { fromValue: '0px'}], position: 1500, duration: 0, easing: "easeOutSine" },
                { id: "eid1784", tween: [ "color", "${_TextCopy3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid1785", tween: [ "color", "${_TextCopy3}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4500, duration: 0 },
                { id: "eid1549", tween: [ "style", "${_Text}", "top", '385px', { fromValue: '385px'}], position: 1378, duration: 0, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_bar_3}", "height", '130px', { fromValue: '0px'}], position: 1500, duration: 1500, easing: "easeOutBack" },
                { id: "eid113", tween: [ "style", "${_bar_1}", "top", '0px', { fromValue: '130px'}], position: 4500, duration: 1500, easing: "easeOutBack" },
                { id: "eid106", tween: [ "style", "${_bar_2}", "height", '130px', { fromValue: '0px'}], position: 3000, duration: 1500, easing: "easeOutBack" },
                { id: "eid98", tween: [ "style", "${_bar_3}", "width", '100%', { fromValue: '100%'}], position: 3000, duration: 0, easing: "easeOutSine" },
                { id: "eid107", tween: [ "style", "${_bar_2}", "top", '130px', { fromValue: '260px'}], position: 3000, duration: 1500, easing: "easeOutBack" },
                { id: "eid1395", tween: [ "style", "${_Text}", "font-size", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_bar_1}", "width", '100%', { fromValue: '100%'}], position: 6000, duration: 0, easing: "easeOutSine" },
                { id: "eid1545", tween: [ "style", "${_TextCopy3}", "width", '292px', { fromValue: '292px'}], position: 5878, duration: 0, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_bar_2}", "left", '0px', { fromValue: '0px'}], position: 4500, duration: 0, easing: "easeOutSine" },
                { id: "eid1778", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
                { id: "eid1779", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 4500, duration: 0 }            ]
        }
    }
},
"game_2_mouth": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '140px', '70px', 'auto', 'auto'],
                    fill: ['rgba(51,196,248,0)']
                },
                {
                    type: 'image',
                    id: 'sprite_mouth2',
                    rect: ['-6px', '-35px', '500px', '139px', 'auto', 'auto'],
                    clip: ['rect(0px 162.60205078125px 139px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_mouth2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_mouth2}": [
                ["style", "top", '-35px'],
                ["style", "left", '-6px'],
                ["style", "height", '139px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,162.60205078125,139,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '500px']
            ],
            "${_Rectangle}": [
                ["style", "height", '70px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '140px']
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "fill": 750
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_sprite_mouth2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_sprite_mouth2}", "background-position", [-170,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_sprite_mouth2}", "background-position", [-345,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-170,0]}], position: 750, duration: 0 }            ]
        }
    }
},
"game_2_mouth2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '140px', '70px', 'auto', 'auto'],
                    fill: ['rgba(51,196,248,0)']
                },
                {
                    type: 'image',
                    id: 'sprite_mouth2',
                    rect: ['-6px', '-35px', '500px', '139px', 'auto', 'auto'],
                    clip: ['rect(0px 162.60205078125px 139px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_mouth2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_mouth2}": [
                ["style", "top", '-35px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '139px'],
                ["style", "clip", [0,162.60205078125,139,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-6px'],
                ["style", "width", '500px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '70px'],
                ["style", "left", '0px'],
                ["style", "width", '140px']
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "fill": 750
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_sprite_mouth2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_sprite_mouth2}", "background-position", [-170,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_sprite_mouth2}", "background-position", [-345,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-170,0]}], position: 750, duration: 0 }            ]
        }
    }
},
"game_2_mouth3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '140px', '70px', 'auto', 'auto'],
                    fill: ['rgba(51,196,248,0)']
                },
                {
                    type: 'image',
                    id: 'sprite_mouth2',
                    rect: ['-6px', '-35px', '500px', '139px', 'auto', 'auto'],
                    clip: ['rect(0px 162.60205078125px 139px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/sprite_mouth2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_sprite_mouth2}": [
                ["style", "top", '-35px'],
                ["style", "clip", [0,162.60205078125,139,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '139px'],
                ["style", "left", '-6px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '500px']
            ],
            "${_Rectangle}": [
                ["style", "height", '70px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '140px']
            ],
            "${symbolSelector}": [
                ["style", "height", '70px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "fill": 750
            },
            timeline: [
                { id: "eid4", tween: [ "style", "${_sprite_mouth2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_sprite_mouth2}", "background-position", [-170,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 250, duration: 0 },
                { id: "eid6", tween: [ "style", "${_sprite_mouth2}", "background-position", [-345,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-170,0]}], position: 750, duration: 0 }            ]
        }
    }
},
"game_2_Symbol_1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'tracker',
                    rect: ['208px', '-505px', '25px', '750px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    transform: [[0, 0], ['60']],
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'Rectangle2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['9px', '585px', '9px', '165px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0.00)']
                    },
                    {
                        id: 'arrow',
                        type: 'image',
                        rect: ['-20px', '540px', '64px', '148px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/arrow3.png', '0px', '0px']
                    }]
                },
                {
                    id: 'prop_total',
                    type: 'image',
                    rect: ['161px', '125px', '119px', '117px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/prop_total4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_prop_total}": [
                ["style", "left", '161px'],
                ["style", "top", '125px']
            ],
            "${symbolSelector}": [
                ["style", "height", '245px'],
                ["style", "width", '443px']
            ],
            "${_arrow}": [
                ["style", "left", '-20px'],
                ["style", "top", '540px']
            ],
            "${_Rectangle}": [
                ["style", "top", '-505px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '60deg'],
                ["style", "height", '750px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '208px'],
                ["style", "width", '25px']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '165px'],
                ["style", "left", '9px'],
                ["style", "top", '585px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "transform", "${_Rectangle}", "rotateZ", '-60deg', { fromValue: '60deg'}], position: 0, duration: 2000 },
                { id: "eid22", tween: [ "transform", "${_Rectangle}", "rotateZ", '60deg', { fromValue: '-60deg'}], position: 2000, duration: 2000 }            ]
        }
    }
},
"game_2_prop": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    userClass: 'tracker',
                    rect: ['0px', '0px', '25px', '750px', 'auto', 'auto'],
                    id: 'line',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(126,102,185,0.00)'],
                    c: [
                    {
                        userClass: 'circle001',
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        rect: ['315px', '634px', '40px', '40px', 'auto', 'auto'],
                        id: 'trow',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(208,94,94,1.00)'],
                        c: [
                        {
                            id: 'prop_trow',
                            type: 'image',
                            rect: ['-38px', '-42px', '117px', '123px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/prop_trow.png', '0px', '0px']
                        }]
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_line}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(126,102,185,0.00)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '750px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '25px']
            ],
            "${_trow}": [
                ["color", "background-color", 'rgba(208,94,94,0.00)'],
                ["style", "height", '40px'],
                ["style", "top", '710px'],
                ["style", "left", '-7px'],
                ["style", "width", '40px']
            ],
            "${_prop_trow}": [
                ["style", "left", '-38px'],
                ["style", "top", '-42px']
            ],
            "${symbolSelector}": [
                ["style", "height", '750px'],
                ["style", "width", '27px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid114", tween: [ "color", "${_trow}", "background-color", 'rgba(208,94,94,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(208,94,94,0.00)'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_trow}", "top", '-400px', { fromValue: '710px'}], position: 0, duration: 1250 }            ]
        }
    }
},
"game_3_case": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'Group',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '565px', '290px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'snip_7_3',
                        type: 'image',
                        rect: ['18px', '-19px', '22px', '16px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/snip_72.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['120']],
                        id: 'snip_7_2',
                        type: 'image',
                        rect: ['109px', '-47px', '22px', '16px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/snip_72.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['261']],
                        id: 'snip_7_1',
                        type: 'image',
                        rect: ['58px', '-39px', '22px', '16px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/snip_72.png', '0px', '0px']
                    },
                    {
                        id: 'snip_7_3Copy',
                        type: 'image',
                        rect: ['430px', '-30px', '22px', '16px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/snip_72.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['120']],
                        id: 'snip_7_2Copy',
                        type: 'image',
                        rect: ['528px', '-24px', '22px', '16px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/snip_72.png', '0px', '0px']
                    },
                    {
                        transform: [[0, 0], ['261']],
                        id: 'snip_7_1Copy',
                        type: 'image',
                        rect: ['479px', '-27px', '22px', '16px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/snip_72.png', '0px', '0px']
                    },
                    {
                        id: 'paperkiller_case',
                        type: 'image',
                        rect: ['0', '0', '564px', '291px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/paperkiller_case2.png', '0px', '0px']
                    },
                    {
                        rect: ['48px', '155px', '467px', '18px', 'auto', 'auto'],
                        borderRadius: ['10px', '10px', '10px', '10px'],
                        id: 'top',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(50,76,87,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_top}": [
                ["color", "background-color", 'rgba(50,76,87,1.00)'],
                ["style", "top", '155px'],
                ["style", "left", '48px'],
                ["style", "width", '467px']
            ],
            "${_snip_7_1Copy}": [
                ["style", "top", '21px'],
                ["style", "opacity", '1'],
                ["style", "left", '476px'],
                ["transform", "rotateZ", '261deg']
            ],
            "${_snip_7_3}": [
                ["style", "top", '37px'],
                ["style", "opacity", '1'],
                ["style", "left", '40px']
            ],
            "${_Group}": [
                ["style", "top", '0px'],
                ["style", "height", '290px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '565px']
            ],
            "${_snip_7_1}": [
                ["style", "top", '17px'],
                ["style", "opacity", '1'],
                ["style", "left", '73px'],
                ["transform", "rotateZ", '261deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '290px'],
                ["style", "width", '565px']
            ],
            "${_snip_7_2}": [
                ["style", "top", '17px'],
                ["style", "opacity", '1'],
                ["style", "left", '85px'],
                ["transform", "rotateZ", '120deg']
            ],
            "${_snip_7_3Copy}": [
                ["style", "top", '17px'],
                ["style", "opacity", '1'],
                ["style", "left", '418px']
            ],
            "${_snip_7_2Copy}": [
                ["style", "top", '45px'],
                ["style", "opacity", '1'],
                ["style", "left", '521px'],
                ["transform", "rotateZ", '120deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid56", tween: [ "style", "${_snip_7_1Copy}", "top", '-27px', { fromValue: '21px'}], position: 0, duration: 250 },
                { id: "eid412", tween: [ "style", "${_snip_7_1Copy}", "opacity", '0', { fromValue: '1'}], position: 230, duration: 20 },
                { id: "eid50", tween: [ "style", "${_snip_7_3}", "top", '-19px', { fromValue: '37px'}], position: 0, duration: 250 },
                { id: "eid46", tween: [ "style", "${_snip_7_1}", "left", '58px', { fromValue: '73px'}], position: 0, duration: 250 },
                { id: "eid414", tween: [ "style", "${_snip_7_3Copy}", "opacity", '0', { fromValue: '1'}], position: 230, duration: 20 },
                { id: "eid413", tween: [ "style", "${_snip_7_3}", "opacity", '0', { fromValue: '1'}], position: 230, duration: 20 },
                { id: "eid51", tween: [ "style", "${_snip_7_3}", "left", '18px', { fromValue: '40px'}], position: 0, duration: 250 },
                { id: "eid54", tween: [ "style", "${_snip_7_2Copy}", "top", '-24px', { fromValue: '45px'}], position: 0, duration: 250 },
                { id: "eid49", tween: [ "style", "${_snip_7_2}", "left", '109px', { fromValue: '85px'}], position: 0, duration: 250 },
                { id: "eid52", tween: [ "style", "${_snip_7_3Copy}", "left", '430px', { fromValue: '418px'}], position: 0, duration: 250 },
                { id: "eid415", tween: [ "style", "${_snip_7_1}", "opacity", '0', { fromValue: '1'}], position: 230, duration: 20 },
                { id: "eid411", tween: [ "style", "${_snip_7_2Copy}", "opacity", '0', { fromValue: '1'}], position: 230, duration: 20 },
                { id: "eid416", tween: [ "style", "${_snip_7_2}", "opacity", '0', { fromValue: '1'}], position: 230, duration: 20 },
                { id: "eid55", tween: [ "style", "${_snip_7_2Copy}", "left", '528px', { fromValue: '521px'}], position: 0, duration: 250 },
                { id: "eid47", tween: [ "style", "${_snip_7_1}", "top", '-39px', { fromValue: '17px'}], position: 0, duration: 250 },
                { id: "eid53", tween: [ "style", "${_snip_7_3Copy}", "top", '-30px', { fromValue: '17px'}], position: 0, duration: 250 },
                { id: "eid48", tween: [ "style", "${_snip_7_2}", "top", '-47px', { fromValue: '17px'}], position: 0, duration: 250 },
                { id: "eid57", tween: [ "style", "${_snip_7_1Copy}", "left", '479px', { fromValue: '476px'}], position: 0, duration: 250 }            ]
        }
    }
},
"game_3_arms": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'arms',
                    type: 'image',
                    rect: ['0px', '0px', '613px', '544px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/arms.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '544px'],
                ["style", "width", '613px']
            ],
            "${_arms}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid60", tween: [ "style", "${_arms}", "top", '-600px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"game_3_thumbs": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'thumbs',
                    type: 'image',
                    rect: ['0px', '0px', '613px', '544px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/thumbs.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '544px'],
                ["style", "width", '613px']
            ],
            "${_thumbs}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid61", tween: [ "style", "${_thumbs}", "top", '-600px', { fromValue: '0px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"game_3_win": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
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
                    id: 'snip_5',
                    rect: ['258px', '332px', '83px', '106px', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/snip_54.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'snip_4',
                    rect: ['602px', '329px', '130px', '136px', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/snip_44.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'snip_3',
                    rect: ['755px', '332px', '77px', '65px', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/snip_34.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'snip_2',
                    rect: ['59px', '332px', '199px', '168px', 'auto', 'auto'],
                    autoOrient: 'true',
                    fill: ['rgba(0,0,0,0)', 'images/snip_23.png', '0px', '0px']
                },
                {
                    id: 'snip_1',
                    type: 'image',
                    rect: ['340px', '332px', '153px', '251px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/snip_12.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_snip_5}": [
                ["motion", "location", '299.5px 385px']
            ],
            "${_snip_3}": [
                ["motion", "location", '793.5px 364.5px']
            ],
            "${symbolSelector}": [
                ["style", "height", '270px'],
                ["style", "width", '960px']
            ],
            "${_snip_4}": [
                ["motion", "location", '667px 397px']
            ],
            "${_snip_2}": [
                ["motion", "location", '158.5px 416px']
            ],
            "${_snip_1}": [
                ["motion", "location", '416.5px 457.5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid70", tween: [ "motion", "${_snip_2}", [[158.5, 416, 0, 0],[199.94, 224.78, -23.65, -258.02, -25.2, -275],[125.9, 60.3, 0, 0]]], position: 0, duration: 1000 },
                { id: "eid67", tween: [ "motion", "${_snip_4}", [[667, 397, 0, 0],[616.13, 219.99, 17.98, -195.23, 24.51, -266.13],[696.01, 81.98, 0, 0]]], position: 0, duration: 1000 },
                { id: "eid69", tween: [ "motion", "${_snip_1}", [[416.5, 457.5, 0, 0],[383.9, 101.8, 0, 0]]], position: 0, duration: 1000 },
                { id: "eid71", tween: [ "motion", "${_snip_5}", [[299.5, 385, 0, 0],[322.16, 201.38, -24.06, -193.45, -28.62, -230.04],[266.51, 81.98, 0, 0]]], position: 0, duration: 1000 },
                { id: "eid68", tween: [ "motion", "${_snip_3}", [[793.5, 364.5, 0, 0],[778.22, 153.53, 41.5, -254.36, 39.72, -243.42],[847.67, 32.48, 0, 0]]], position: 0, duration: 1000 }            ]
        }
    }
},
"game_1_p1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'text_container',
                    type: 'group',
                    rect: ['43', '0', '159', '229', 'auto', 'auto'],
                    c: [
                    {
                        id: 'p2_top2',
                        type: 'image',
                        rect: ['0px', '0', '159px', '229px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p2_top2.png', '0px', '0px']
                    },
                    {
                        type: 'rect',
                        rect: ['1px', '4px', '157px', '124px', 'auto', 'auto'],
                        id: 'click_area',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(234,77,77,0)'],
                        c: [
                        {
                            font: ['kg_all_of_meregular', 26, 'rgba(66,56,42,1.00)', '800', 'none', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text2',
                            text: 'EQUAL RIGHTS!',
                            rect: ['6px', '29px', '146px', '72px', 'auto', 'auto'],
                            userClass: 'text'
                        }]
                    }]
                },
                {
                    id: 'p2_main2',
                    type: 'image',
                    rect: ['59px', '119', '127px', '429px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p2_main2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_p2_main2}": [
                ["style", "left", '59px']
            ],
            "${_p2_top2}": [
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '548px'],
                ["style", "width", '245px']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(66,56,42,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '6px'],
                ["style", "font-size", '26px'],
                ["style", "top", '29px'],
                ["style", "text-align", 'center'],
                ["style", "height", '72px'],
                ["style", "font-family", 'kg_all_of_meregular'],
                ["style", "width", '146px']
            ],
            "${_text_container}": [
                ["style", "top", '4px'],
                ["transform", "rotateZ", '-5deg'],
                ["style", "height", '229px'],
                ["style", "left", '35px'],
                ["style", "width", '159px']
            ],
            "${_click_area}": [
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid122", tween: [ "style", "${_text_container}", "left", '43px', { fromValue: '35px'}], position: 0, duration: 1000 },
                { id: "eid125", tween: [ "style", "${_text_container}", "left", '46px', { fromValue: '43px'}], position: 1000, duration: 1000 },
                { id: "eid133", tween: [ "style", "${_text_container}", "left", '35px', { fromValue: '46px'}], position: 2000, duration: 1000 },
                { id: "eid120", tween: [ "style", "${_text_container}", "height", '229px', { fromValue: '229px'}], position: 1000, duration: 0 },
                { id: "eid119", tween: [ "style", "${_text_container}", "width", '159px', { fromValue: '159px'}], position: 1000, duration: 0 },
                { id: "eid121", tween: [ "transform", "${_text_container}", "rotateZ", '0deg', { fromValue: '-5deg'}], position: 0, duration: 1000 },
                { id: "eid124", tween: [ "transform", "${_text_container}", "rotateZ", '1deg', { fromValue: '0deg'}], position: 1000, duration: 1000 },
                { id: "eid134", tween: [ "transform", "${_text_container}", "rotateZ", '-5deg', { fromValue: '1deg'}], position: 2000, duration: 1000 },
                { id: "eid123", tween: [ "style", "${_text_container}", "top", '3px', { fromValue: '4px'}], position: 0, duration: 1000 },
                { id: "eid126", tween: [ "style", "${_text_container}", "top", '1px', { fromValue: '3px'}], position: 1000, duration: 1000 },
                { id: "eid135", tween: [ "style", "${_text_container}", "top", '4px', { fromValue: '1px'}], position: 2000, duration: 1000 }            ]
        }
    }
},
"game_1_p2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'p3_main22',
                    type: 'image',
                    rect: ['-3px', '220px', '87px', '317px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p3_main22.png', '0px', '0px']
                },
                {
                    id: 'p3_right22',
                    type: 'image',
                    rect: ['61px', '249px', '50px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p3_right22.png', '0px', '0px']
                },
                {
                    id: 'arm_left',
                    type: 'group',
                    rect: ['-51', '13', '200', '308', 'auto', 'auto'],
                    c: [
                    {
                        id: 'p3_left',
                        type: 'image',
                        rect: ['15px', '228px', '55px', '80px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p3_left22.png', '0px', '0px']
                    },
                    {
                        id: 'p3_top',
                        type: 'image',
                        rect: ['0px', '0px', '200px', '256px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p3_top342.png', '0px', '0px']
                    },
                    {
                        type: 'rect',
                        rect: ['0px', '0px', '200px', '130px', 'auto', 'auto'],
                        id: 'click_area',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(0,0,0,0.00)'],
                        c: [
                        {
                            font: ['kg_all_of_meregular', 20, 'rgba(66,56,42,1.00)', '800', 'none', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text3',
                            text: 'FREEDOM',
                            rect: ['0px', '53px', '200px', '51px', 'auto', 'auto'],
                            userClass: 'text2'
                        }]
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_p3_main22}": [
                ["style", "top", '220px'],
                ["style", "left", '-3px']
            ],
            "${_Text3}": [
                ["style", "top", '53px'],
                ["color", "color", 'rgba(66,56,42,1.00)'],
                ["style", "height", '51px'],
                ["style", "font-family", 'kg_all_of_meregular'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '537px'],
                ["style", "width", '80px']
            ],
            "${_p3_top}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_arm_left}": [
                ["style", "top", '13px'],
                ["style", "left", '-51px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_p3_left}": [
                ["style", "left", '15px'],
                ["style", "top", '228px']
            ],
            "${_p3_right22}": [
                ["style", "-webkit-transform-origin", [17.59,88.64], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.59,88.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.59,88.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.59,88.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.59,88.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17.59,88.64],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '249px'],
                ["style", "left", '61px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_click_area}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "height", '130px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["style", "width", '200px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid141", tween: [ "style", "${_arm_left}", "top", '10px', { fromValue: '13px'}], position: 0, duration: 1000 },
                { id: "eid144", tween: [ "style", "${_arm_left}", "top", '16px', { fromValue: '10px'}], position: 1000, duration: 1000 },
                { id: "eid146", tween: [ "style", "${_arm_left}", "top", '13px', { fromValue: '16px'}], position: 2000, duration: 1000 },
                { id: "eid139", tween: [ "transform", "${_arm_left}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid142", tween: [ "transform", "${_arm_left}", "rotateZ", '5deg', { fromValue: '-6deg'}], position: 1000, duration: 1000 },
                { id: "eid147", tween: [ "transform", "${_arm_left}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 2000, duration: 1000 },
                { id: "eid148", tween: [ "style", "${_p3_right22}", "left", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "transform", "${_p3_right22}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid154", tween: [ "transform", "${_p3_right22}", "rotateZ", '6deg', { fromValue: '-8deg'}], position: 1000, duration: 1000 },
                { id: "eid155", tween: [ "transform", "${_p3_right22}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 2000, duration: 1000 },
                { id: "eid140", tween: [ "style", "${_arm_left}", "left", '-66px', { fromValue: '-51px'}], position: 0, duration: 1000 },
                { id: "eid143", tween: [ "style", "${_arm_left}", "left", '-39px', { fromValue: '-66px'}], position: 1000, duration: 1000 },
                { id: "eid145", tween: [ "style", "${_arm_left}", "left", '-51px', { fromValue: '-39px'}], position: 2000, duration: 1000 },
                { id: "eid152", tween: [ "style", "${_p3_right22}", "-webkit-transform-origin", [17.59,88.64], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.59,88.64]}], position: 0, duration: 0 },
                { id: "eid1942", tween: [ "style", "${_p3_right22}", "-moz-transform-origin", [17.59,88.64], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.59,88.64]}], position: 0, duration: 0 },
                { id: "eid1943", tween: [ "style", "${_p3_right22}", "-ms-transform-origin", [17.59,88.64], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.59,88.64]}], position: 0, duration: 0 },
                { id: "eid1944", tween: [ "style", "${_p3_right22}", "msTransformOrigin", [17.59,88.64], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.59,88.64]}], position: 0, duration: 0 },
                { id: "eid1945", tween: [ "style", "${_p3_right22}", "-o-transform-origin", [17.59,88.64], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.59,88.64]}], position: 0, duration: 0 },
                { id: "eid1946", tween: [ "style", "${_p3_right22}", "transform-origin", [17.59,88.64], { valueTemplate: '@@0@@% @@1@@%', fromValue: [17.59,88.64]}], position: 0, duration: 0 },
                { id: "eid149", tween: [ "style", "${_p3_right22}", "top", '249px', { fromValue: '249px'}], position: 0, duration: 0 }            ]
        }
    }
},
"game_1_p3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'p4_main2',
                    type: 'image',
                    rect: ['111px', '126px', '199px', '329px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p4_main2.png', '0px', '0px']
                },
                {
                    id: 'arm',
                    type: 'group',
                    rect: ['85', '221', '44', '55', 'auto', 'auto'],
                    c: [
                    {
                        id: 'upperarm',
                        type: 'group',
                        rect: ['-68', '-223', '103', '279', 'auto', 'auto'],
                        c: [
                        {
                            id: 'p4_upperarm2',
                            type: 'image',
                            rect: ['0px', '0px', '103px', '279px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/p4_upperarm2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '2px', '103px', '117px', 'auto', 'auto'],
                            id: 'click_area',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: ['pointer'],
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                font: ['kg_all_of_meregular', 30, 'rgba(66,56,42,1.00)', '800', 'none', 'normal'],
                                type: 'text',
                                align: 'center',
                                id: 'Text5',
                                text: 'NO!',
                                rect: ['13px', '45px', '77px', '27px', 'auto', 'auto'],
                                userClass: 'text3'
                            }]
                        }]
                    },
                    {
                        id: 'p4_arm2',
                        type: 'image',
                        rect: ['0px', '0px', '44px', '55px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p4_arm2.png', '0px', '0px']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_p4_arm2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_p4_main2}": [
                ["style", "left", '111px'],
                ["style", "top", '126px']
            ],
            "${symbolSelector}": [
                ["style", "height", '455px'],
                ["style", "width", '170px']
            ],
            "${_arm}": [
                ["transform", "rotateZ", '0deg']
            ],
            "${_p4_upperarm2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text5}": [
                ["style", "top", '45px'],
                ["style", "font-size", '30px'],
                ["color", "color", 'rgba(66,56,42,1.00)'],
                ["style", "height", '27px'],
                ["style", "font-family", 'kg_all_of_meregular'],
                ["style", "left", '13px'],
                ["style", "width", '77px']
            ],
            "${_click_area}": [
                ["style", "top", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid157", tween: [ "transform", "${_arm}", "rotateZ", '6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid158", tween: [ "transform", "${_arm}", "rotateZ", '-9deg', { fromValue: '6deg'}], position: 1000, duration: 1000 },
                { id: "eid159", tween: [ "transform", "${_arm}", "rotateZ", '0deg', { fromValue: '-9deg'}], position: 2000, duration: 1000 }            ]
        }
    }
},
"game_1_p4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'p5_main2',
                    type: 'image',
                    rect: ['2px', '171px', '95px', '299px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/p5_main2.png', '0px', '0px']
                },
                {
                    id: 'arm_right',
                    type: 'group',
                    rect: ['79', '217', '59', '74', 'auto', 'auto'],
                    c: [
                    {
                        id: 'p5_right2',
                        type: 'image',
                        rect: ['0px', '0px', '59px', '74px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p5_right2.png', '0px', '0px']
                    }]
                },
                {
                    id: 'arm_left',
                    type: 'group',
                    rect: ['-56px', '4px', '211', '293', 'auto', 'auto'],
                    c: [
                    {
                        id: 'p5_left2',
                        type: 'image',
                        rect: ['20px', '229px', '54px', '64px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p5_left2.png', '0px', '0px']
                    },
                    {
                        id: 'p5_top2',
                        type: 'image',
                        rect: ['0px', '0px', '211px', '247px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/p5_top2.png', '0px', '0px']
                    },
                    {
                        type: 'rect',
                        rect: ['0px', '8px', '211px', '130px', 'auto', 'auto'],
                        id: 'click_area',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        cursor: ['pointer'],
                        fill: ['rgba(234,77,77,0.00)'],
                        c: [
                        {
                            font: ['kg_all_of_meregular', 21, 'rgba(66,56,42,1.00)', '800', 'none', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text6',
                            text: 'NO DICTATOR!',
                            rect: ['5px', '51px', '201px', '24px', 'auto', 'auto'],
                            userClass: 'text4'
                        }]
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_arm_left}": [
                ["style", "-webkit-transform-origin", [34.57,94.72], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [34.57,94.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [34.57,94.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [34.57,94.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [34.57,94.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [34.57,94.72],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_arm_right}": [
                ["style", "-webkit-transform-origin", [9.89,78.98], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [9.89,78.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [9.89,78.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [9.89,78.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [9.89,78.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [9.89,78.98],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_p5_top2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Text6}": [
                ["style", "top", '51px'],
                ["color", "color", 'rgba(66,56,42,1.00)'],
                ["style", "height", '24px'],
                ["style", "font-family", 'kg_all_of_meregular'],
                ["style", "left", '5px'],
                ["style", "font-size", '21px']
            ],
            "${_p5_main2}": [
                ["style", "left", '2px'],
                ["style", "top", '171px']
            ],
            "${symbolSelector}": [
                ["style", "height", '496px'],
                ["style", "width", '100px']
            ],
            "${_click_area}": [
                ["style", "top", '8px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(234,77,77,0.00)']
            ],
            "${_p5_right2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_p5_left2}": [
                ["style", "left", '20px'],
                ["style", "top", '229px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: true,
            timeline: [
                { id: "eid165", tween: [ "transform", "${_arm_right}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid166", tween: [ "transform", "${_arm_right}", "rotateZ", '8deg', { fromValue: '-10deg'}], position: 1000, duration: 1000 },
                { id: "eid167", tween: [ "transform", "${_arm_right}", "rotateZ", '0deg', { fromValue: '8deg'}], position: 2000, duration: 1000 },
                { id: "eid161", tween: [ "transform", "${_arm_left}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
                { id: "eid162", tween: [ "transform", "${_arm_left}", "rotateZ", '6deg', { fromValue: '-6deg'}], position: 1000, duration: 1000 },
                { id: "eid163", tween: [ "transform", "${_arm_left}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 2000, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-4125913");
