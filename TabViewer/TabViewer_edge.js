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
            id:'navigation',
            type:'rect',
            rect:['20px','20px','94%','50px','auto','auto'],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'tab',
               type:'rect',
               rect:['0','0px','auto','auto','auto','auto']
            }]
         },
         {
            id:'content',
            type:'rect',
            rect:['20px','69px','94%','400px','auto','auto'],
            fill:["rgba(223,223,223,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'content1',
               type:'rect',
               rect:['0px','0px','auto','auto','auto','auto']
            }]
         }],
         symbolInstances: [
         {
            id:'tab',
            symbolName:'tab'
         },
         {
            id:'content1',
            symbolName:'content1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(58,63,66,1.00)'],
            ["style", "min-width", '480px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '500px'],
            ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
            ["style", "width", '100%']
         ],
         "${_navigation}": [
            ["style", "top", '20px'],
            ["style", "height", '50px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '20px'],
            ["style", "width", '94%']
         ],
         "${_content1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_content}": [
            ["style", "top", '69px'],
            ["style", "height", '400px'],
            ["color", "background-color", 'rgba(223,223,223,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '94%']
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
            { id: "eid46", tween: [ "style", "${_content1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
},
"content1": {
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
      type: 'rect',
      id: 'base',
      stroke: [1,'rgba(49,47,49,1.00)','solid'],
      rect: ['0px','0px','99.7%','398px','auto','auto'],
      fill: ['rgba(248,248,248,1.00)']
   },
   {
      type: 'rect',
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['20px','57px','3.8%','2px','auto','auto'],
      fill: ['rgba(26,105,255,1.00)']
   },
   {
      font: ['source-sans-pro, sans-serif',24,'rgba(39,141,223,1.00)','100','none',''],
      id: 'body',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      type: 'text',
      rect: ['50px','133px','85%','246px','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',48,'rgba(39,141,223,1.00)','100','none',''],
      id: 'title',
      text: 'Title #1',
      type: 'text',
      rect: ['50px','45px','85%','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_line}": [
            ["style", "top", '120px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(39,141,223,1.00)'],
            ["style", "left", '50px'],
            ["style", "width", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '100%'],
            ["style", "min-width", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_base}": [
            ["color", "background-color", 'rgba(248,248,248,1.00)'],
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgba(49,47,49,1.00)'],
            ["style", "height", '398px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '99.7%']
         ],
         "${_body}": [
            ["color", "color", 'rgba(119,119,119,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '50px'],
            ["style", "font-size", '24px'],
            ["style", "top", '143px'],
            ["style", "height", '246px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '85%'],
            ["style", "opacity", '0']
         ],
         "${_title}": [
            ["style", "top", '45px'],
            ["style", "font-size", '48px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '100'],
            ["color", "color", 'rgba(39,141,223,1.00)'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '60px'],
            ["style", "width", '85%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_line}", "top", '120px', { fromValue: '120px'}], position: 750, duration: 0 },
            { id: "eid33", tween: [ "style", "${_line}", "width", '86%', { fromValue: '0%'}], position: 750, duration: 1250, easing: "easeOutCubic" },
            { id: "eid41", tween: [ "style", "${_body}", "top", '133px', { fromValue: '143px'}], position: 250, duration: 500, easing: "easeOutCubic" },
            { id: "eid35", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid37", tween: [ "style", "${_title}", "left", '50px', { fromValue: '60px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid39", tween: [ "style", "${_body}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCubic" },
            { id: "eid28", tween: [ "style", "${_line}", "left", '50px', { fromValue: '50px'}], position: 750, duration: 0 }         ]
      }
   }
},
"tab": {
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
      type: 'rect',
      borderRadius: ['3px 3px','3px 3px','0px','0px'],
      id: 'btnBase',
      stroke: [1,'rgba(0,0,0,0.39)','solid'],
      cursor: ['pointer'],
      rect: ['0px','auto','98.6%','48px','auto','0px'],
      fill: ['rgba(229,233,233,1.00)'],
      userClass: 'custom-button',
      boxShadow: ['inset',1,1,0,0,'rgba(255,255,255,1.00)'],
      c: [
      {
         type: 'text',
         rect: ['13px','17.3%','82%','18px','auto','auto'],
         id: 'btnLabel',
         opacity: 0.6,
         align: 'left',
         text: 'Tab',
         textShadow: ['rgba(0,0,0,0.69)',0,-1,0],
         font: ['source-sans-pro, sans-serif',14,'rgba(69,69,69,1.00)','600','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btnLabel}": [
            ["color", "color", 'rgba(197,199,199,1.00)'],
            ["subproperty", "textShadow.offsetV", '-1px'],
            ["style", "left", '13px'],
            ["style", "font-size", '14px'],
            ["style", "top", '17.29%'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'left'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,0.69)'],
            ["style", "height", '18px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '82.01%'],
            ["style", "font-weight", '600']
         ],
         "${_btnBase}": [
            ["subproperty", "boxShadow.inset", 'inset'],
            ["style", "opacity", '0.6'],
            ["style", "cursor", 'pointer'],
            ["subproperty", "boxShadow.offsetV", '1px'],
            ["subproperty", "boxShadow.offsetH", '1px'],
            ["color", "background-color", 'rgba(89,91,91,1.00)'],
            ["style", "border-top-left-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["subproperty", "boxShadow.blur", '16px'],
            ["style", "bottom", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [3,3], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '98.58%'],
            ["style", "top", 'auto'],
            ["color", "border-color", 'rgba(49,47,49,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.00)'],
            ["style", "height", '33px'],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.spread", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '140px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         labels: {
            "normal": 0,
            "over": 1000,
            "active": 2000,
            "down": 3000
         },
         timeline: [
            { id: "eid14", tween: [ "style", "${_btnBase}", "opacity", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_btnBase}", "opacity", '1', { fromValue: '0.6'}], position: 1000, duration: 0 },
            { id: "eid60", tween: [ "color", "${_btnLabel}", "color", 'rgba(197,199,199,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(197,199,199,1.00)'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "color", "${_btnLabel}", "color", 'rgba(197,199,199,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(197,199,199,1.00)'}], position: 1000, duration: 0 },
            { id: "eid63", tween: [ "color", "${_btnLabel}", "color", 'rgba(93,193,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(197,199,199,1.00)'}], position: 2000, duration: 0 },
            { id: "eid64", tween: [ "color", "${_btnLabel}", "color", 'rgba(197,199,199,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(93,193,255,1.00)'}], position: 3000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_btnBase}", "bottom", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_btnBase}", "bottom", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid56", tween: [ "color", "${_btnBase}", "border-color", 'rgba(49,47,49,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(49,47,49,1.00)'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "color", "${_btnBase}", "border-color", 'rgba(0,0,0,0.39)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(49,47,49,1.00)'}], position: 1000, duration: 0 },
            { id: "eid79", tween: [ "subproperty", "${_btnBase}", "boxShadow.spread", '1px', { fromValue: '1px'}], position: 3000, duration: 0 },
            { id: "eid81", tween: [ "subproperty", "${_btnBase}", "boxShadow.color", 'rgba(0,0,0,0.00)', { fromValue: 'rgba(0,0,0,0.00)'}], position: 2000, duration: 0 },
            { id: "eid82", tween: [ "subproperty", "${_btnBase}", "boxShadow.color", 'rgba(0,0,0,0.18)', { fromValue: 'rgba(0,0,0,0.00)'}], position: 3000, duration: 0 },
            { id: "eid71", tween: [ "style", "${_btnBase}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "subproperty", "${_btnBase}", "boxShadow.blur", '16px', { fromValue: '16px'}], position: 3000, duration: 0 },
            { id: "eid58", tween: [ "color", "${_btnBase}", "background-color", 'rgba(89,91,91,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(89,91,91,1.00)'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "color", "${_btnBase}", "background-color", 'rgba(69,69,69,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(89,91,91,1.00)'}], position: 1000, duration: 0 },
            { id: "eid9", tween: [ "color", "${_btnBase}", "background-color", 'rgba(64,65,65,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(237,241,241,1.00)'}], position: 2000, duration: 0 }         ]
      }
   }
},
"content2": {
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
      type: 'rect',
      id: 'base',
      stroke: [1,'rgba(49,47,49,1.00)','solid'],
      rect: ['0px','0px','99.7%','398px','auto','auto'],
      fill: ['rgba(248,248,248,1.00)']
   },
   {
      type: 'rect',
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['20px','57px','3.8%','2px','auto','auto'],
      fill: ['rgba(26,105,255,1.00)']
   },
   {
      font: ['source-sans-pro, sans-serif',24,'rgba(39,141,223,1.00)','100','none',''],
      id: 'body',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      type: 'text',
      rect: ['50px','133px','85%','246px','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',48,'rgba(39,141,223,1.00)','100','none',''],
      id: 'title',
      text: 'Title #2',
      type: 'text',
      rect: ['50px','45px','85%','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_line}": [
            ["style", "top", '120px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(39,141,223,1.00)'],
            ["style", "left", '50px'],
            ["style", "width", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_base}": [
            ["color", "background-color", 'rgba(248,248,248,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '398px'],
            ["color", "border-color", 'rgba(49,47,49,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "width", '99.7%']
         ],
         "${_body}": [
            ["color", "color", 'rgba(119,119,119,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '50px'],
            ["style", "font-size", '24px'],
            ["style", "top", '143px'],
            ["style", "height", '246px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "opacity", '0'],
            ["style", "width", '85%']
         ],
         "${_title}": [
            ["style", "top", '45px'],
            ["style", "width", '85%'],
            ["style", "opacity", '0'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["color", "color", 'rgba(39,141,223,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '60px'],
            ["style", "font-size", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid26", tween: [ "style", "${_line}", "top", '120px', { fromValue: '120px'}], position: 750, duration: 0 },
            { id: "eid33", tween: [ "style", "${_line}", "width", '86%', { fromValue: '0%'}], position: 750, duration: 1250, easing: "easeOutCubic" },
            { id: "eid41", tween: [ "style", "${_body}", "top", '133px', { fromValue: '143px'}], position: 250, duration: 500, easing: "easeOutCubic" },
            { id: "eid28", tween: [ "style", "${_line}", "left", '50px', { fromValue: '50px'}], position: 750, duration: 0 },
            { id: "eid39", tween: [ "style", "${_body}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCubic" },
            { id: "eid37", tween: [ "style", "${_title}", "left", '50px', { fromValue: '60px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid35", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCubic" }         ]
      }
   }
},
"content3": {
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
      type: 'rect',
      id: 'base',
      stroke: [1,'rgba(49,47,49,1.00)','solid'],
      rect: ['0px','0px','99.7%','398px','auto','auto'],
      fill: ['rgba(248,248,248,1.00)']
   },
   {
      type: 'rect',
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['20px','57px','3.8%','2px','auto','auto'],
      fill: ['rgba(26,105,255,1.00)']
   },
   {
      font: ['source-sans-pro, sans-serif',24,'rgba(39,141,223,1.00)','100','none',''],
      id: 'body',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      type: 'text',
      rect: ['50px','133px','85%','246px','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',48,'rgba(39,141,223,1.00)','100','none',''],
      id: 'title',
      text: 'Title #3',
      type: 'text',
      rect: ['50px','45px','85%','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_line}": [
            ["style", "top", '120px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(39,141,223,1.00)'],
            ["style", "left", '50px'],
            ["style", "width", '0%']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_base}": [
            ["color", "background-color", 'rgba(248,248,248,1.00)'],
            ["style", "top", '0px'],
            ["style", "border-width", '1px'],
            ["color", "border-color", 'rgba(49,47,49,1.00)'],
            ["style", "height", '398px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '99.7%']
         ],
         "${_body}": [
            ["color", "color", 'rgba(119,119,119,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '50px'],
            ["style", "font-size", '24px'],
            ["style", "top", '143px'],
            ["style", "height", '246px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '85%'],
            ["style", "opacity", '0']
         ],
         "${_title}": [
            ["style", "top", '45px'],
            ["style", "font-size", '48px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '100'],
            ["color", "color", 'rgba(39,141,223,1.00)'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "left", '60px'],
            ["style", "width", '85%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid35", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid26", tween: [ "style", "${_line}", "top", '120px', { fromValue: '120px'}], position: 750, duration: 0 },
            { id: "eid33", tween: [ "style", "${_line}", "width", '86%', { fromValue: '0%'}], position: 750, duration: 1250, easing: "easeOutCubic" },
            { id: "eid41", tween: [ "style", "${_body}", "top", '133px', { fromValue: '143px'}], position: 250, duration: 500, easing: "easeOutCubic" },
            { id: "eid37", tween: [ "style", "${_title}", "left", '50px', { fromValue: '60px'}], position: 0, duration: 500, easing: "easeOutCubic" },
            { id: "eid39", tween: [ "style", "${_body}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCubic" },
            { id: "eid28", tween: [ "style", "${_line}", "left", '50px', { fromValue: '50px'}], position: 750, duration: 0 },
            { id: "eid45", tween: [ "color", "${_body}", "color", 'rgba(119,119,119,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(119,119,119,1.00)'}], position: 758, duration: 0, easing: "easeOutCubic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-50109628");
