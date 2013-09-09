/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'line',
            type:'rect',
            rect:['26px','56px','95.3%','1px','auto','auto'],
            fill:["rgba(87,87,87,1.00)"],
            stroke:[1,"rgba(0, 0, 0, 0.386719)","none"]
         },
         {
            id:'titleBg',
            type:'rect',
            rect:['29px','28px','219px','42px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgba(0, 0, 0, 0.386719)","none"],
            c:[
            {
               id:'title',
               type:'text',
               rect:['-0.2%','-1px','236px','auto','auto','auto'],
               text:"Your Stuff Gallery",
               align:"left",
               font:['source-sans-pro, sans-serif',30,"rgba(255,255,255,1.00)","300","none",""]
            }]
         },
         {
            id:'navigation',
            type:'rect',
            rect:['2.3%','394px','95.3%','42px','auto','auto'],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[1,"rgba(0, 0, 0, 0.386719)","none"]
         },
         {
            id:'base',
            type:'rect',
            rect:['2.3%','74px','95.3%','320px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'panel1',
               type:'rect',
               rect:['0px','0px','auto','auto','auto','auto']
            }]
         }],
         symbolInstances: [
         {
            id:'panel1',
            symbolName:'panel1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_titleBg}": [
            ["style", "top", '28px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '219px']
         ],
         "${_myText}": [
            ["style", "text-align", '']
         ],
         "${_line}": [
            ["style", "top", '56px'],
            ["color", "background-color", 'rgba(87,87,87,1.00)'],
            ["style", "height", '1px'],
            ["style", "right", 'auto'],
            ["style", "left", '26px'],
            ["style", "width", '0%']
         ],
         "${_panel1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_navigation}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "top", '394px'],
            ["style", "height", '42px'],
            ["style", "border-style", 'none'],
            ["style", "left", '2.33%'],
            ["style", "width", '95.31%']
         ],
         "${_base}": [
            ["style", "top", '74px'],
            ["style", "opacity", '0'],
            ["style", "left", '2.34%'],
            ["style", "width", '95.33%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "min-width", '600px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '550px'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%']
         ],
         "${_title}": [
            ["style", "top", '-84px'],
            ["style", "font-size", '30px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '300'],
            ["color", "color", 'rgba(87,87,87,1.00)'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '-0.16%'],
            ["style", "width", '236px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1497,
         autoPlay: true,
         timeline: [
            { id: "eid645", tween: [ "style", "${_base}", "opacity", '1', { fromValue: '0'}], position: 497, duration: 1000 },
            { id: "eid647", tween: [ "style", "${_title}", "top", '-1px', { fromValue: '-84px'}], position: 0, duration: 700, easing: "swing" },
            { id: "eid1395", tween: [ "style", "${_line}", "width", '95.3%', { fromValue: '0%'}], position: 0, duration: 497 }         ]
      }
   }
},
"panel1": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','320px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'Background',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(223,226,226,1.00)']
   },
   {
      rect: ['0px','128px','100%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal'],
      align: 'center',
      id: 'myText',
      opacity: 0.5,
      text: 'First Panel<br>(more stuff goes here)',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Background}": [
            ["color", "background-color", 'rgba(223,226,226,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '100%'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '320px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_myText}": [
            ["color", "color", 'rgba(10,10,10,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '30px'],
            ["style", "top", '118px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '100%'],
            ["style", "font-weight", '200']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '100%'],
            ["style", "max-width", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1600,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "style", "${_myText}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1600, easing: "easeOutCubic" }         ]
      }
   }
},
"button": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'btnBase',
      stroke: [1,'rgba(0,0,0,0.39)','none'],
      cursor: ['pointer'],
      rect: ['0px','0px','33px','33px','auto','auto'],
      userClass: 'custom-button',
      fill: ['rgba(229,233,233,0.00)'],
      c: [
      {
         type: 'text',
         rect: ['0px','28.6%','31px','22px','auto','auto'],
         align: 'center',
         id: 'btnLabel',
         text: '1',
         textShadow: ['rgba(255,255,255,1.00)',0,1,0],
         font: ['source-sans-pro, sans-serif',14,'rgba(69,69,69,1.00)','600','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btnLabel}": [
            ["subproperty", "textShadow.blur", '0px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(69,69,69,1)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px'],
            ["style", "top", '28.64%'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "height", '22px'],
            ["subproperty", "textShadow.color", 'rgb(255,255,255)'],
            ["style", "width", '31px'],
            ["style", "font-weight", '600']
         ],
         "${_btnBase}": [
            ["color", "background-color", 'rgba(229,233,233,0.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '33px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "height", '33px'],
            ["color", "border-color", 'rgba(0, 0, 0, 0.386719)'],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '33px']
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
"panel2": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','320px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'Background',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(223,226,226,1.00)']
   },
   {
      rect: ['0px','128px','100%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal'],
      align: 'center',
      id: 'myText',
      opacity: 0.5,
      text: 'Second Panel<br>(more stuff goes here)',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_myText}": [
            ["color", "color", 'rgba(10,10,10,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '30px'],
            ["style", "top", '118px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "font-weight", '200'],
            ["style", "width", '100%']
         ],
         "${_myTextCopy2}": [
            ["style", "top", '128px'],
            ["style", "font-size", '30px'],
            ["style", "font-weight", '200'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(10,10,10,1.00)'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "max-width", 'none'],
            ["style", "width", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_Background}": [
            ["color", "background-color", 'rgba(223,226,226,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '100%'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '320px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1600,
         autoPlay: true,
         timeline: [
            { id: "eid1390", tween: [ "style", "${_myText}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1600, easing: "easeOutCubic" }         ]
      }
   }
},
"panel3": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','320px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'Background',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(223,226,226,1.00)']
   },
   {
      rect: ['0px','118px','100%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal'],
      align: 'center',
      id: 'myText',
      opacity: 0.5,
      text: 'Third Panel<br>(more stuff goes here)',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Background}": [
            ["color", "background-color", 'rgba(223,226,226,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "width", '100%'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '320px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_myText}": [
            ["color", "color", 'rgba(10,10,10,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '30px'],
            ["style", "top", '118px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "font-weight", '200'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '100%'],
            ["style", "max-width", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1600,
         autoPlay: true,
         timeline: [
            { id: "eid1391", tween: [ "style", "${_myText}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1600, easing: "easeOutCubic" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-260752881");
