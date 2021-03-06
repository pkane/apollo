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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'COVERFLOW_sym',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'ARTICLEFULL_sym',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'NAVBAR_sym',
            type:'rect',
            rect:['-1px','-3px','auto','auto','auto','auto'],
            transform:[[],[],[],['1','0.97031']]
         },
         {
            id:'FULLCARDS_sym',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'MAINNAV_sym',
            display:'none',
            type:'rect',
            rect:['-137px','0px','auto','auto','auto','auto']
         },
         {
            id:'ALERT_sym',
            type:'rect',
            rect:['643','-5','auto','auto','auto','auto']
         },
         {
            id:'LOADER_sym',
            type:'rect',
            rect:['10px','38px','auto','auto','auto','auto'],
            transform:[[],[],[],['1.03226','1.07106']]
         },
         {
            id:'DISCOVER_sym',
            display:'none',
            type:'rect',
            rect:['-10px','-120px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.96875','0.96875']]
         }],
         symbolInstances: [
         {
            id:'DISCOVER_sym',
            symbolName:'DISCOVER_sym'
         },
         {
            id:'NAVBAR_sym',
            symbolName:'NAVBAR_sym'
         },
         {
            id:'LOADER_sym',
            symbolName:'Symbol_loader'
         },
         {
            id:'ALERT_sym',
            symbolName:'ALERT_sym'
         },
         {
            id:'MAINNAV_sym',
            symbolName:'MAINNAV_sym'
         },
         {
            id:'FULLCARDS_sym',
            symbolName:'FULLCARDS_sym'
         },
         {
            id:'COVERFLOW_sym',
            symbolName:'COVERFLOW_sym'
         },
         {
            id:'ARTICLEFULL_sym',
            symbolName:'ARTICLEFULL_sym'
         }
         ]
      },
   states: {
      "Base State": {
         "${_MAINNAV_sym}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform", 'none'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_DISCOVER_sym}": [
            ["style", "top", '-120px'],
            ["transform", "scaleY", '0.96875'],
            ["transform", "scaleX", '0.96875'],
            ["style", "left", '-10px'],
            ["style", "display", 'none']
         ],
         "${_myText}": [
            ["style", "text-align", '']
         ],
         "${_NAVBAR_sym}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '-1px'],
            ["transform", "scaleY", '0.97031'],
            ["style", "top", '-3px']
         ],
         "${_ARTICLEFULL_sym}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(231,231,231,1.00)'],
            ["style", "min-width", '620px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1136px'],
            ["style", "max-width", 'none'],
            ["style", "width", '640px']
         ],
         "${_COVERFLOW_sym}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${_LOADER_sym}": [
            ["style", "top", '38px'],
            ["transform", "scaleY", '1.07106'],
            ["style", "display", 'block'],
            ["style", "left", '10px'],
            ["transform", "scaleX", '1.03226']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12255,
         autoPlay: true,
         labels: {
            "Start": 0,
            "topPanelUp": 2251,
            "topPanelDown": 3451,
            "myCardExtend": 4651,
            "myCardCollapse": 4996,
            "myCardsIn": 5600,
            "breakingAlertIn": 8251,
            "breakingAlertOut": 11951
         },
         timeline: [
            { id: "eid14393", tween: [ "style", "${_ARTICLEFULL_sym}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid14378", tween: [ "style", "${_MAINNAV_sym}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid14379", tween: [ "style", "${_MAINNAV_sym}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid14351", tween: [ "style", "${_LOADER_sym}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutCubic" },
            { id: "eid14392", tween: [ "style", "${_DISCOVER_sym}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid14347", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_NAVBAR_sym}', [] ], ""], position: 0 },
            { id: "eid14348", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_FULLCARDS_sym}', [] ], ""], position: 0 },
            { id: "eid14349", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_COVERFLOW_sym}', [] ], ""], position: 0 }         ]
      }
   }
},
"panel1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','523px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'Background',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(223,226,226,1.00)']
   },
   {
      type: 'text',
      rect: ['0px','128px','100%','auto','auto','auto'],
      text: 'First Panel<br>(more stuff goes here)',
      id: 'myText',
      opacity: 0.5,
      align: 'center',
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal']
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
            ["style", "height", '523px'],
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
            ["subproperty", "textShadow.color", 'rgb(255,255,255)'],
            ["style", "height", '22px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
      text: 'Second Panel<br>(more stuff goes here)',
      opacity: 0.5,
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
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
      text: 'Third Panel<br>(more stuff goes here)',
      opacity: 0.5,
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
},
"myCards_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      id: 'liverpoolGameGroup',
      type: 'group',
      rect: ['0px','11px','1200','1100','auto','auto'],
      c: [
      {
         id: 'Liverpool',
         type: 'image',
         rect: ['0px','6px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Liverpool.png','0px','0px']
      },
      {
         rect: ['1px','4px','594px','460px','auto','auto'],
         id: 'RectangleFullCardCopy',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['4px','4px','594px','160px','auto','auto'],
         id: 'Rectangle',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['4px','4px','594px','160px','auto','auto'],
         id: 'RectangleCopy6',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      }]
   },
   {
      id: 'natsGameGroupCopy',
      type: 'group',
      rect: ['0px','119px','1200','1100','auto','auto'],
      c: [
      {
         id: 'BaseballCopy3',
         type: 'image',
         rect: ['0px','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball.png','0px','0px']
      },
      {
         id: 'Baseball-normal-colorCopy3',
         type: 'image',
         rect: ['0','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball-normal-color.png','0px','0px']
      },
      {
         rect: ['1px','45px','600px','460px','auto','auto'],
         id: 'RectangleFullCardCopy2',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['4px','54px','594px','152px','auto','auto'],
         type: 'rect',
         id: 'RectangleCopy3',
         stroke: [0,'rgba(0,0,0,1)','none'],
         display: 'none',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['4px','54px','594px','152px','auto','auto'],
         type: 'rect',
         id: 'RectangleCopy7',
         stroke: [0,'rgba(0,0,0,1)','none'],
         display: 'none',
         fill: ['rgba(192,192,192,1)']
      }]
   },
   {
      id: 'natsGameGroup',
      type: 'group',
      rect: ['0px','119px','1200','1100px','auto','auto'],
      c: [
      {
         id: 'Baseball',
         type: 'image',
         rect: ['0px','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball.png','0px','0px']
      },
      {
         id: 'Baseball-normal-color',
         type: 'image',
         rect: ['0','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball-normal-color.png','0px','0px']
      },
      {
         id: 'nats-nc',
         type: 'image',
         rect: ['0','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball-normal-color2.png','0px','0px']
      },
      {
         rect: ['1px','45px','600px','460px','auto','auto'],
         id: 'RectangleFullCard',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['4px','54px','594px','152px','auto','auto'],
         id: 'RectangleCopy',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1)']
      },
      {
         rect: ['4px','54px','594px','152px','auto','auto'],
         type: 'rect',
         id: 'RectangleCopy8',
         stroke: [0,'rgba(0,0,0,1)','none'],
         display: 'none',
         fill: ['rgba(192,192,192,1)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleFullCard}": [
            ["style", "top", '45px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '1px'],
            ["style", "width", '600px']
         ],
         "${_Baseball-normal-color}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1'],
            ["style", "overflow", 'hidden']
         ],
         "${_Liverpool}": [
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_nats-nc}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '1256px'],
            ["style", "width", '620px']
         ],
         "${_natsGameGroup}": [
            ["style", "top", '117px'],
            ["style", "position", 'absolute'],
            ["style", "z-index", '50'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_natsGameGroupCopy}": [
            ["style", "top", '36px'],
            ["style", "position", 'absolute'],
            ["style", "z-index", '50'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_BaseballCopy3}": [
            ["style", "top", '54px'],
            ["style", "left", '0px']
         ],
         "${_RectangleCopy6}": [
            ["style", "top", '4px'],
            ["style", "height", '160px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy7}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
         ],
         "${_RectangleCopy8}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
         ],
         "${_Baseball-normal-colorCopy3}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_RectangleFullCardCopy}": [
            ["style", "top", '4px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '1px'],
            ["style", "width", '594px']
         ],
         "${_RectangleFullCardCopy2}": [
            ["style", "top", '45px'],
            ["style", "display", 'block'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '1px'],
            ["style", "width", '600px']
         ],
         "${_Baseball}": [
            ["style", "top", '54px'],
            ["style", "left", '0px']
         ],
         "${_liverpoolGameGroup}": [
            ["style", "top", '0px'],
            ["style", "position", 'absolute'],
            ["transform", "scaleX", '0.99333'],
            ["style", "z-index", '25'],
            ["style", "left", '-2px'],
            ["style", "width", '604px']
         ],
         "${_Rectangle}": [
            ["style", "top", '4px'],
            ["style", "height", '160px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13416,
         autoPlay: true,
         labels: {
            "myCardsFlip1": 500,
            "myCardsFlip2": 1600,
            "myCardsFlip3": 2667
         },
         timeline: [
            { id: "eid13115", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13071", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13074", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'none'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13235", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'block'}], position: 3600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13216", tween: [ "style", "${_RectangleCopy6}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13217", tween: [ "style", "${_RectangleCopy6}", "display", 'block', { fromValue: 'none'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13218", tween: [ "style", "${_RectangleCopy6}", "display", 'block', { fromValue: 'block'}], position: 5900, duration: 0, easing: "easeOutCubic" },
            { id: "eid13495", tween: [ "style", "${_liverpoolGameGroup}", "width", '604px', { fromValue: '604px'}], position: 11900, duration: 1516 },
            { id: "eid12947", tween: [ "style", "${_liverpoolGameGroup}", "top", '162px', { fromValue: '0px'}], position: 500, duration: 1000, easing: "easeOutCubic" },
            { id: "eid12941", tween: [ "style", "${_liverpoolGameGroup}", "top", '-391px', { fromValue: '162px'}], position: 1500, duration: 600, easing: "easeOutCubic" },
            { id: "eid12942", tween: [ "style", "${_liverpoolGameGroup}", "top", '83px', { fromValue: '-391px'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13196", tween: [ "style", "${_liverpoolGameGroup}", "top", '-548px', { fromValue: '83px'}], position: 2667, duration: 500, easing: "easeOutCubic" },
            { id: "eid13197", tween: [ "style", "${_liverpoolGameGroup}", "top", '0px', { fromValue: '-548px'}], position: 3167, duration: 500, easing: "easeOutCubic" },
            { id: "eid13174", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13193", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 1000 },
            { id: "eid13207", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '0', { fromValue: '1'}], position: 2600, duration: 1000 },
            { id: "eid12946", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '50', { fromValue: '25'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12940", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '35', { fromValue: '50'}], position: 1600, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13494", tween: [ "transform", "${_liverpoolGameGroup}", "scaleX", '0.99333', { fromValue: '0.99333'}], position: 13416, duration: 0 },
            { id: "eid13167", tween: [ "style", "${_natsGameGroupCopy}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13234", tween: [ "style", "${_RectangleFullCard}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13076", tween: [ "style", "${_RectangleFullCard}", "display", 'block', { fromValue: 'none'}], position: 3600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13165", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '25', { fromValue: '50'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13191", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '50', { fromValue: '25'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13204", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '35', { fromValue: '50'}], position: 2600, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13501", tween: [ "style", "${_nats-nc}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13502", tween: [ "style", "${_nats-nc}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 1000 },
            { id: "eid13168", tween: [ "style", "${_RectangleCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13171", tween: [ "style", "${_RectangleCopy3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13228", tween: [ "style", "${_RectangleCopy3}", "display", 'none', { fromValue: 'block'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12945", tween: [ "style", "${_natsGameGroup}", "z-index", '25', { fromValue: '50'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13203", tween: [ "style", "${_natsGameGroup}", "z-index", '50', { fromValue: '25'}], position: 2667, duration: 500, easing: "easeOutCubic" },
            { id: "eid13226", tween: [ "style", "${_RectangleCopy7}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13160", tween: [ "style", "${_natsGameGroup}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13222", tween: [ "style", "${_RectangleCopy7}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13224", tween: [ "style", "${_RectangleCopy7}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13225", tween: [ "style", "${_RectangleCopy7}", "display", 'none', { fromValue: 'none'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13229", tween: [ "style", "${_RectangleCopy7}", "display", 'block', { fromValue: 'none'}], position: 3600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13231", tween: [ "style", "${_RectangleCopy8}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0, easing: "easeOutCubic" },
            { id: "eid13232", tween: [ "style", "${_RectangleCopy8}", "display", 'none', { fromValue: 'block'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12943", tween: [ "style", "${_natsGameGroup}", "top", '-598px', { fromValue: '117px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12944", tween: [ "style", "${_natsGameGroup}", "top", '33px', { fromValue: '-598px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13187", tween: [ "style", "${_natsGameGroup}", "top", '-441px', { fromValue: '33px'}], position: 1500, duration: 600, easing: "easeOutCubic" },
            { id: "eid13188", tween: [ "style", "${_natsGameGroup}", "top", '-47px', { fromValue: '-441px'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13195", tween: [ "style", "${_natsGameGroup}", "top", '120px', { fromValue: '-47px'}], position: 2667, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13113", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13219", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13209", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 3667, duration: 0, easing: "easeOutCubic" },
            { id: "eid13119", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 5900, duration: 0, easing: "easeOutCubic" },
            { id: "eid13172", tween: [ "style", "${_RectangleCopy3}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12953", tween: [ "style", "${_Baseball-normal-color}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13206", tween: [ "style", "${_Baseball-normal-color}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 1000 },
            { id: "eid13162", tween: [ "style", "${_natsGameGroupCopy}", "top", '-598px', { fromValue: '36px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13163", tween: [ "style", "${_natsGameGroupCopy}", "top", '-47px', { fromValue: '-598px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13185", tween: [ "style", "${_natsGameGroupCopy}", "top", '120px', { fromValue: '-47px'}], position: 1500, duration: 1100, easing: "easeOutCubic" },
            { id: "eid13198", tween: [ "style", "${_natsGameGroupCopy}", "top", '-598px', { fromValue: '120px'}], position: 2600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13199", tween: [ "style", "${_natsGameGroupCopy}", "top", '38px', { fromValue: '-598px'}], position: 3100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13496", tween: [ "style", "${_liverpoolGameGroup}", "left", '-2px', { fromValue: '-2px'}], position: 13416, duration: 0 },
            { id: "eid13173", tween: [ "style", "${_RectangleFullCardCopy2}", "display", 'block', { fromValue: 'block'}], position: 3800, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
},
"livFull_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-3px','0px','648px','1151px','auto','auto'],
      id: 'liverpool-full',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','cardflow/liverpool-full.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_liverpool-full}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '0'],
            ["transform", "scaleY", '0'],
            ["style", "display", 'none'],
            ["style", "height", '1151px'],
            ["style", "opacity", '0'],
            ["style", "left", '-3px'],
            ["style", "width", '648px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1243,
         autoPlay: true,
         labels: {
            "livFullExpand": 133,
            "livFullClose": 813
         },
         timeline: [
            { id: "eid13110", tween: [ "transform", "${_liverpool-full}", "scaleY", '1', { fromValue: '0'}], position: 133, duration: 430, easing: "easeOutCubic" },
            { id: "eid13109", tween: [ "transform", "${_liverpool-full}", "scaleY", '0', { fromValue: '1'}], position: 813, duration: 430, easing: "easeOutCubic" },
            { id: "eid13112", tween: [ "transform", "${_liverpool-full}", "scaleX", '1', { fromValue: '0'}], position: 133, duration: 430, easing: "easeOutCubic" },
            { id: "eid13111", tween: [ "transform", "${_liverpool-full}", "scaleX", '0', { fromValue: '1'}], position: 813, duration: 430, easing: "easeOutCubic" },
            { id: "eid13106", tween: [ "style", "${_liverpool-full}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13104", tween: [ "style", "${_liverpool-full}", "display", 'block', { fromValue: 'block'}], position: 813, duration: 0, easing: "easeOutCubic" },
            { id: "eid13105", tween: [ "style", "${_liverpool-full}", "display", 'none', { fromValue: 'block'}], position: 1110, duration: 0, easing: "easeOutCubic" },
            { id: "eid13108", tween: [ "style", "${_liverpool-full}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 430, easing: "easeOutCubic" },
            { id: "eid13107", tween: [ "style", "${_liverpool-full}", "opacity", '0', { fromValue: '1'}], position: 813, duration: 430, easing: "easeOutCubic" }         ]
      }
   }
},
"natsFull_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      display: 'none',
      rect: ['0px','-1px','639px','1134px','auto','auto'],
      id: 'baseball-full',
      fill: ['rgba(0,0,0,0)','cardflow/baseball-full.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_baseball-full}": [
            ["style", "top", '-1px'],
            ["transform", "scaleX", '0'],
            ["transform", "scaleY", '0'],
            ["style", "display", 'none'],
            ["style", "height", '1134px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '639px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1110,
         autoPlay: true,
         labels: {
            "natsFullExpand": 67,
            "natsFullClose": 680
         },
         timeline: [
            { id: "eid13091", tween: [ "style", "${_baseball-full}", "opacity", '1', { fromValue: '0'}], position: 67, duration: 430, easing: "easeOutCubic" },
            { id: "eid13098", tween: [ "style", "${_baseball-full}", "opacity", '0', { fromValue: '1'}], position: 680, duration: 430, easing: "easeOutCubic" },
            { id: "eid13077", tween: [ "style", "${_baseball-full}", "display", 'block', { fromValue: 'none'}], position: 67, duration: 0, easing: "easeOutCubic" },
            { id: "eid13092", tween: [ "style", "${_baseball-full}", "display", 'block', { fromValue: 'block'}], position: 680, duration: 0, easing: "easeOutCubic" },
            { id: "eid13099", tween: [ "style", "${_baseball-full}", "display", 'none', { fromValue: 'block'}], position: 1110, duration: 0, easing: "easeOutCubic" },
            { id: "eid13090", tween: [ "transform", "${_baseball-full}", "scaleY", '1', { fromValue: '0'}], position: 67, duration: 430, easing: "easeOutCubic" },
            { id: "eid13097", tween: [ "transform", "${_baseball-full}", "scaleY", '0', { fromValue: '1'}], position: 680, duration: 430, easing: "easeOutCubic" },
            { id: "eid13089", tween: [ "transform", "${_baseball-full}", "scaleX", '1', { fromValue: '0'}], position: 67, duration: 430, easing: "easeOutCubic" },
            { id: "eid13096", tween: [ "transform", "${_baseball-full}", "scaleX", '0', { fromValue: '1'}], position: 680, duration: 430, easing: "easeOutCubic" }         ]
      }
   }
},
"cardFlow_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'nonFullCards_Symbol',
      type: 'rect',
      transform: [],
      rect: ['10px','71px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'nonFullCards_Symbol',
      symbolName: 'nonFullCards_Symbol'
   }   ]
   },
   states: {
      "Base State": {
         "${_nonFullCards_Symbol}": [
            ["style", "top", '71px'],
            ["style", "left", '10px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '4256px'],
            ["style", "width", '620px']
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
"MAINNAV_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','132px','1030px','auto','auto'],
      id: 'nav-main2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/nav-main2.png','0px','0px']
   },
   {
      rect: ['135px','0px','540px','30px','auto','auto'],
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(0,172,129,1.00)']
   },
   {
      rect: ['-418px','0px','574px','1136px','auto','auto'],
      id: 'nav-new',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/nav-new.png','0px','0px']
   },
   {
      rect: ['138px','0px','620px','1064px','auto','auto'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['135px','626px','559px','84px','auto','auto'],
      type: 'rect',
      id: 'newsTopicLink',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['135px','535px','559px','84px','auto','auto'],
      type: 'rect',
      id: 'homeLink',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(0,172,129,1.00)'],
            ["style", "height", '30px'],
            ["style", "display", 'none'],
            ["style", "left", '-418px'],
            ["style", "width", '540px']
         ],
         "${_homeLink}": [
            ["style", "top", '535px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-414px'],
            ["style", "width", '559px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1136px'],
            ["style", "width", '662px']
         ],
         "${_nav-main2}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '1030px'],
            ["style", "display", 'none'],
            ["style", "left", '4px'],
            ["style", "width", '132px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '1136px'],
            ["style", "opacity", '0'],
            ["style", "left", '674px'],
            ["style", "width", '87px']
         ],
         "${_newsTopicLink}": [
            ["style", "top", '626px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-414px'],
            ["style", "width", '559px']
         ],
         "${_nav-new}": [
            ["style", "top", '0px'],
            ["style", "height", '1136px'],
            ["style", "display", 'none'],
            ["style", "left", '-414px'],
            ["style", "width", '574px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1167,
         autoPlay: true,
         labels: {
            "navIn": 267,
            "navOut": 767
         },
         timeline: [
            { id: "eid13236", tween: [ "style", "${_nav-main2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13523", tween: [ "style", "${_nav-new}", "left", '0px', { fromValue: '-414px'}], position: 267, duration: 400, easing: "easeOutCubic" },
            { id: "eid13524", tween: [ "style", "${_nav-new}", "left", '-418px', { fromValue: '0px'}], position: 767, duration: 400, easing: "easeOutCubic" },
            { id: "eid13525", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
            { id: "eid13532", tween: [ "style", "${_Rectangle3}", "display", 'block', { fromValue: 'block'}], position: 767, duration: 0 },
            { id: "eid13527", tween: [ "style", "${_Rectangle3}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0 },
            { id: "eid13263", tween: [ "style", "${_Rectangle}", "width", '87px', { fromValue: '87px'}], position: 267, duration: 0, easing: "easeOutCubic" },
            { id: "eid13537", tween: [ "style", "${_Rectangle}", "height", '1136px', { fromValue: '1136px'}], position: 667, duration: 0, easing: "easeOutCubic" },
            { id: "eid13629", tween: [ "style", "${_newsTopicLink}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
            { id: "eid13630", tween: [ "style", "${_newsTopicLink}", "display", 'block', { fromValue: 'block'}], position: 767, duration: 0 },
            { id: "eid13631", tween: [ "style", "${_newsTopicLink}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0 },
            { id: "eid13520", tween: [ "style", "${_nav-new}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
            { id: "eid13521", tween: [ "style", "${_nav-new}", "display", 'block', { fromValue: 'block'}], position: 767, duration: 0 },
            { id: "eid13522", tween: [ "style", "${_nav-new}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0 },
            { id: "eid14342", tween: [ "style", "${_homeLink}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
            { id: "eid14343", tween: [ "style", "${_homeLink}", "display", 'block', { fromValue: 'block'}], position: 767, duration: 0 },
            { id: "eid14344", tween: [ "style", "${_homeLink}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0 },
            { id: "eid13528", tween: [ "style", "${_Rectangle3}", "left", '0px', { fromValue: '-418px'}], position: 267, duration: 400, easing: "easeOutCubic" },
            { id: "eid13536", tween: [ "style", "${_Rectangle3}", "left", '-418px', { fromValue: '0px'}], position: 767, duration: 400, easing: "easeOutCubic" },
            { id: "eid14345", tween: [ "style", "${_homeLink}", "left", '0px', { fromValue: '-414px'}], position: 267, duration: 400, easing: "easeOutCubic" },
            { id: "eid14346", tween: [ "style", "${_homeLink}", "left", '-414px', { fromValue: '0px'}], position: 767, duration: 400, easing: "easeOutCubic" },
            { id: "eid14376", tween: [ "style", "${_Rectangle}", "left", '560px', { fromValue: '674px'}], position: 267, duration: 400, easing: "easeOutCubic" },
            { id: "eid13254", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 267, duration: 0, easing: "easeOutCubic" },
            { id: "eid13255", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 667, duration: 0, easing: "easeOutCubic" },
            { id: "eid13256", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0, easing: "easeOutCubic" },
            { id: "eid13627", tween: [ "style", "${_newsTopicLink}", "left", '0px', { fromValue: '-414px'}], position: 267, duration: 400, easing: "easeOutCubic" },
            { id: "eid13634", tween: [ "style", "${_newsTopicLink}", "left", '-414px', { fromValue: '0px'}], position: 767, duration: 400, easing: "easeOutCubic" }         ]
      }
   }
},
"Symbol_articleGroup": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'articleGroup',
      type: 'group',
      rect: ['-160px','-276px','640','3331px','auto','auto'],
      c: [
      {
         id: 'article-card-fullCopy',
         type: 'image',
         rect: ['0%','4.5%','640px','6166px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-card-full.png','0px','0px']
      }]
   },
   {
      rect: ['-147px','-143px','640px','54px','auto','auto'],
      type: 'rect',
      id: 'articleFullTopBarBG',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(231,231,231,1.00)']
   },
   {
      rect: ['-147px','-143px','640px','54px','auto','auto'],
      type: 'rect',
      id: 'articleFullTopBar',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(15,152,240,0.80)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_articleFullTopBarBG}": [
            ["style", "top", '-143px'],
            ["color", "background-color", 'rgba(231,231,231,1.00)'],
            ["style", "left", '-147px'],
            ["style", "position", 'fixed'],
            ["style", "height", '54px'],
            ["style", "display", 'none'],
            ["style", "z-index", '100'],
            ["style", "width", '640px']
         ],
         "${_articleGroup}": [
            ["transform", "scaleX", '0.5'],
            ["style", "left", '-138px'],
            ["style", "top", '-276px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.5'],
            ["style", "z-index", '60'],
            ["style", "height", '1105px'],
            ["style", "overflow-y", 'auto'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "-webkit-overflow-scrolling", 'touch']
         ],
         "${symbolSelector}": [
            ["style", "height", '1238px'],
            ["style", "width", '320px']
         ],
         "${_articleFullTopBar}": [
            ["style", "top", '-143px'],
            ["color", "background-color", 'rgba(15,152,240,0.80)'],
            ["style", "left", '-147px'],
            ["style", "position", 'fixed'],
            ["style", "height", '54px'],
            ["style", "display", 'none'],
            ["style", "z-index", '101'],
            ["style", "width", '640px']
         ],
         "${_article-card-fullCopy}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "top", '4.45%'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "z-index", '60'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1327,
         autoPlay: true,
         labels: {
            "ArticleFlip": 500,
            "ArticleFlipBack": 1000
         },
         timeline: [
            { id: "eid12451", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12472", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13365", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12500", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12501", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13270", tween: [ "style", "${_article-card-fullCopy}", "display", 'none', { fromValue: 'block'}], position: 1327, duration: 0, easing: "easeOutCubic" },
            { id: "eid13366", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12489", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 827, duration: 0, easing: "easeOutCubic" },
            { id: "eid12490", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13267", tween: [ "style", "${_articleGroup}", "display", 'none', { fromValue: 'block'}], position: 1327, duration: 0, easing: "easeOutCubic" },
            { id: "eid13509", tween: [ "style", "${_articleFullTopBarBG}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13510", tween: [ "style", "${_articleFullTopBarBG}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid12493", tween: [ "style", "${_articleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12491", tween: [ "style", "${_articleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12499", tween: [ "transform", "${_articleGroup}", "scaleY", '1.02805', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12498", tween: [ "transform", "${_articleGroup}", "scaleY", '0', { fromValue: '1.02805'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13508", tween: [ "style", "${_articleFullTopBar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13511", tween: [ "style", "${_articleFullTopBar}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid12450", tween: [ "style", "${_article-card-fullCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12473", tween: [ "style", "${_article-card-fullCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12507", tween: [ "style", "${_articleGroup}", "top", '-127px', { fromValue: '-276px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12509", tween: [ "style", "${_articleGroup}", "top", '-276px', { fromValue: '-127px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12496", tween: [ "transform", "${_articleGroup}", "scaleX", '1.02805', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12497", tween: [ "transform", "${_articleGroup}", "scaleX", '0', { fromValue: '1.02805'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12564", tween: [ "style", "${_article-card-fullCopy}", "height", '6195px', { fromValue: '3331px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12565", tween: [ "style", "${_article-card-fullCopy}", "height", '3331px', { fromValue: '6195px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13373", tween: [ "style", "${_articleGroup}", "left", '-138px', { fromValue: '-138px'}], position: 827, duration: 0, easing: "easeOutCubic" },
            { id: "eid12452", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12474", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" }         ]
      }
   }
},
"Symbol_articleVideoGroup": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'articleVideoGroup',
      type: 'group',
      rect: ['-160px','-276px','640','3331px','auto','auto'],
      c: [
      {
         id: 'videoArticleCardFull',
         type: 'image',
         rect: ['0px','54px','640px','6166px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-card-full.png','0px','0px']
      }]
   },
   {
      rect: ['-147px','-143px','640px','54px','auto','auto'],
      type: 'rect',
      id: 'articleFullTopBar',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(15,152,240,0.80)']
   },
   {
      rect: ['-147px','-143px','640px','54px','auto','auto'],
      type: 'rect',
      id: 'articleFullTopBarBG',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(231,231,231,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_articleFullTopBarBG}": [
            ["color", "background-color", 'rgba(231,231,231,1)'],
            ["style", "top", '-143px'],
            ["style", "z-index", '100'],
            ["style", "position", 'fixed'],
            ["style", "display", 'none'],
            ["style", "height", '54px'],
            ["style", "left", '-147px'],
            ["style", "width", '640px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1238px'],
            ["style", "width", '320px']
         ],
         "${_articleFullTopBar}": [
            ["color", "background-color", 'rgba(15,152,240,0.7969)'],
            ["style", "top", '-143px'],
            ["style", "z-index", '101'],
            ["style", "position", 'fixed'],
            ["style", "display", 'none'],
            ["style", "height", '54px'],
            ["style", "left", '-147px'],
            ["style", "width", '640px']
         ],
         "${_articleVideoGroup}": [
            ["transform", "scaleX", '0.5'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "top", '86px'],
            ["style", "left", '-138px'],
            ["transform", "scaleY", '0.5'],
            ["style", "z-index", '60'],
            ["style", "height", '1105px'],
            ["style", "overflow-y", 'auto'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'block']
         ],
         "${_videoArticleCardFull}": [
            ["style", "top", '54px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.5']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 933,
         autoPlay: true,
         labels: {
            "VideoArticleFlip": 106,
            "VideoArticleFlipBack": 606
         },
         timeline: [
            { id: "eid13400", tween: [ "style", "${_videoArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14372", tween: [ "style", "${_videoArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13390", tween: [ "style", "${_articleVideoGroup}", "left", '-138px', { fromValue: '-138px'}], position: 433, duration: 0, easing: "easeOutCubic" },
            { id: "eid14359", tween: [ "style", "${_articleVideoGroup}", "left", '-147px', { fromValue: '-138px'}], position: 606, duration: 0, easing: "easeOutCubic" },
            { id: "eid13512", tween: [ "style", "${_articleFullTopBarBG}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13514", tween: [ "style", "${_articleFullTopBarBG}", "display", 'block', { fromValue: 'none'}], position: 433, duration: 0 },
            { id: "eid14389", tween: [ "style", "${_articleFullTopBarBG}", "display", 'none', { fromValue: 'block'}], position: 933, duration: 0 },
            { id: "eid13386", tween: [ "transform", "${_articleVideoGroup}", "scaleY", '1.02805', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14370", tween: [ "transform", "${_articleVideoGroup}", "scaleY", '0.5', { fromValue: '1.02805'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13405", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14374", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13388", tween: [ "transform", "${_articleVideoGroup}", "scaleX", '1.02805', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14368", tween: [ "transform", "${_articleVideoGroup}", "scaleX", '0.5', { fromValue: '1.02805'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13391", tween: [ "style", "${_articleVideoGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14369", tween: [ "style", "${_articleVideoGroup}", "clip", [0,640,2322.819091796875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13393", tween: [ "style", "${_articleVideoGroup}", "display", 'block', { fromValue: 'block'}], position: 106, duration: 0, easing: "easeOutCubic" },
            { id: "eid14358", tween: [ "style", "${_articleVideoGroup}", "display", 'none', { fromValue: 'block'}], position: 933, duration: 0, easing: "easeOutCubic" },
            { id: "eid13396", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14373", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13513", tween: [ "style", "${_articleFullTopBar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13515", tween: [ "style", "${_articleFullTopBar}", "display", 'block', { fromValue: 'none'}], position: 433, duration: 0 },
            { id: "eid14390", tween: [ "style", "${_articleFullTopBar}", "display", 'none', { fromValue: 'block'}], position: 933, duration: 0 },
            { id: "eid13384", tween: [ "style", "${_articleVideoGroup}", "top", '-127px', { fromValue: '86px'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14367", tween: [ "style", "${_articleVideoGroup}", "top", '86px', { fromValue: '-127px'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13402", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 106, duration: 0, easing: "easeOutCubic" },
            { id: "eid14363", tween: [ "style", "${_videoArticleCardFull}", "display", 'none', { fromValue: 'block'}], position: 933, duration: 0, easing: "easeOutCubic" },
            { id: "eid13398", tween: [ "style", "${_videoArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid14371", tween: [ "style", "${_videoArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 606, duration: 327, easing: "easeOutCubic" }         ]
      }
   }
},
"Symbol_articleAssetlessGroup": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'assetlessArticleGroup',
      type: 'group',
      rect: ['-160px','-276px','640','3331px','auto','auto'],
      c: [
      {
         id: 'assetlessArticleCardFull',
         type: 'image',
         rect: ['0px','-22px','640px','6166px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-card-full.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_assetlessArticleCardFull}": [
            ["style", "top", '-22px'],
            ["transform", "scaleX", '0.5'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '3331px']
         ],
         "${_assetlessArticleGroup}": [
            ["style", "top", '-276px'],
            ["style", "left", '-147px'],
            ["transform", "scaleY", '0.5'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '0.5'],
            ["style", "height", '1105px'],
            ["style", "z-index", '60'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '1238px'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1360,
         autoPlay: true,
         labels: {
            "ArticleFlip": 533,
            "ArticleFlipBack": 1033
         },
         timeline: [
            { id: "eid13462", tween: [ "transform", "${_assetlessArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13463", tween: [ "transform", "${_assetlessArticleGroup}", "scaleX", '0', { fromValue: '1'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13470", tween: [ "transform", "${_assetlessArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13471", tween: [ "transform", "${_assetlessArticleCardFull}", "scaleY", '0', { fromValue: '1'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13464", tween: [ "style", "${_assetlessArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13465", tween: [ "style", "${_assetlessArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13458", tween: [ "style", "${_assetlessArticleGroup}", "top", '-143px', { fromValue: '-276px'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13459", tween: [ "style", "${_assetlessArticleGroup}", "top", '-276px', { fromValue: '-143px'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13479", tween: [ "transform", "${_assetlessArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13480", tween: [ "transform", "${_assetlessArticleCardFull}", "scaleX", '0', { fromValue: '1'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13467", tween: [ "style", "${_assetlessArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeOutCubic" },
            { id: "eid13468", tween: [ "style", "${_assetlessArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 1033, duration: 0, easing: "easeOutCubic" },
            { id: "eid13469", tween: [ "style", "${_assetlessArticleGroup}", "display", 'none', { fromValue: 'block'}], position: 1360, duration: 0, easing: "easeOutCubic" },
            { id: "eid13475", tween: [ "style", "${_assetlessArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13476", tween: [ "style", "${_assetlessArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13477", tween: [ "style", "${_assetlessArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13478", tween: [ "style", "${_assetlessArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13466", tween: [ "style", "${_assetlessArticleGroup}", "left", '-147px', { fromValue: '-147px'}], position: 860, duration: 0, easing: "easeOutCubic" },
            { id: "eid13460", tween: [ "transform", "${_assetlessArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13461", tween: [ "transform", "${_assetlessArticleGroup}", "scaleY", '0', { fromValue: '1'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13472", tween: [ "style", "${_assetlessArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 533, duration: 0, easing: "easeOutCubic" },
            { id: "eid13473", tween: [ "style", "${_assetlessArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 1033, duration: 0, easing: "easeOutCubic" },
            { id: "eid13474", tween: [ "style", "${_assetlessArticleCardFull}", "display", 'none', { fromValue: 'block'}], position: 1360, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
},
"Symbol_loader": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','620px','1104px','auto','auto'],
      id: 'loader',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'logo-usat',
      type: 'image',
      rect: ['101px','424px','417px','216px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/logo-usat.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_logo-usat}": [
            ["style", "top", '424px'],
            ["style", "opacity", '1'],
            ["style", "left", '101px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '1064px'],
            ["style", "width", '620px']
         ],
         "${_loader}": [
            ["style", "top", '0px'],
            ["style", "height", '1104px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
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
            { id: "eid13481", tween: [ "style", "${_loader}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid13482", tween: [ "style", "${_loader}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid14350", tween: [ "style", "${_logo-usat}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13487", tween: [ "style", "${_logo-usat}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid13486", tween: [ "color", "${_loader}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"newsFlow_symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'newsCards_Symbol',
      type: 'rect',
      transform: [],
      rect: ['10px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'newsCards_Symbol',
      symbolName: 'newsCards_Symbol'
   }   ]
   },
   states: {
      "Base State": {
         "${_newsCards_Symbol}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '4256px'],
            ["style", "width", '620px']
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
"nonFullCards_Symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'nonFullCards',
      type: 'group',
      rect: ['-12px','44px','600px','4215','auto','auto'],
      c: [
      {
         id: 'video-card',
         type: 'image',
         rect: ['0px','3022px','600px','655px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/video-card.png','0px','0px']
      },
      {
         id: 'article-assetless-card',
         type: 'image',
         rect: ['0px','2454px','600px','548px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-assetless-card.png','0px','0px']
      },
      {
         id: 'article-gallery-card',
         type: 'image',
         rect: ['0px','1593px','600px','848px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-gallery-card.png','0px','0px']
      },
      {
         id: 'article-video-card',
         type: 'image',
         rect: ['0px','-32px','600px','736px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-video-card.png','0px','0px']
      },
      {
         id: 'article-3-4-card',
         type: 'image',
         rect: ['0px','3025px','600px','987px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-3-4-card.png','0px','0px']
      },
      {
         id: 'article-card',
         type: 'image',
         rect: ['0px','725px','600px','848px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-card.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_article-3-4-card}": [
            ["style", "top", '3026px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${_nonFullCards}": [
            ["style", "top", '41px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_article-card}": [
            ["style", "top", '725px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${_article-video-card}": [
            ["style", "top", '-41px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '4256px'],
            ["style", "width", '600px']
         ],
         "${_video-card}": [
            ["style", "top", '3022px'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_article-gallery-card}": [
            ["style", "top", '1593px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_article-assetless-card}": [
            ["style", "top", '2454px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13416,
         autoPlay: true,
         labels: {
            "cardFlowIn": 400
         },
         timeline: [
            { id: "eid14304", tween: [ "style", "${_article-gallery-card}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14314", tween: [ "style", "${_article-gallery-card}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
            { id: "eid14281", tween: [ "style", "${_article-gallery-card}", "display", 'none', { fromValue: 'none'}], position: 1400, duration: 0 },
            { id: "eid14282", tween: [ "style", "${_article-gallery-card}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0 },
            { id: "eid14336", tween: [ "style", "${_article-3-4-card}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid14269", tween: [ "style", "${_article-3-4-card}", "opacity", '0', { fromValue: '1'}], position: 2400, duration: 0 },
            { id: "eid14270", tween: [ "style", "${_article-3-4-card}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 300 },
            { id: "eid14305", tween: [ "style", "${_article-assetless-card}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14315", tween: [ "style", "${_article-assetless-card}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
            { id: "eid14283", tween: [ "style", "${_article-assetless-card}", "display", 'none', { fromValue: 'none'}], position: 1900, duration: 0 },
            { id: "eid14284", tween: [ "style", "${_article-assetless-card}", "display", 'block', { fromValue: 'none'}], position: 2100, duration: 0 },
            { id: "eid14277", tween: [ "style", "${_article-gallery-card}", "top", '1834px', { fromValue: '1593px'}], position: 1400, duration: 200 },
            { id: "eid14278", tween: [ "style", "${_article-gallery-card}", "top", '1593px', { fromValue: '1834px'}], position: 1600, duration: 300 },
            { id: "eid14338", tween: [ "style", "${_article-gallery-card}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid14279", tween: [ "style", "${_article-gallery-card}", "opacity", '0', { fromValue: '1'}], position: 1400, duration: 0 },
            { id: "eid14280", tween: [ "style", "${_article-gallery-card}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 300 },
            { id: "eid14267", tween: [ "style", "${_article-3-4-card}", "top", '3267px', { fromValue: '3026px'}], position: 2400, duration: 200 },
            { id: "eid14268", tween: [ "style", "${_article-3-4-card}", "top", '3026px', { fromValue: '3267px'}], position: 2600, duration: 300 },
            { id: "eid14339", tween: [ "style", "${_article-assetless-card}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid14285", tween: [ "style", "${_article-assetless-card}", "opacity", '0', { fromValue: '1'}], position: 1900, duration: 0 },
            { id: "eid14286", tween: [ "style", "${_article-assetless-card}", "opacity", '1', { fromValue: '0'}], position: 2100, duration: 300 },
            { id: "eid14301", tween: [ "style", "${_article-card}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14311", tween: [ "style", "${_article-card}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
            { id: "eid14261", tween: [ "style", "${_article-card}", "display", 'none', { fromValue: 'none'}], position: 900, duration: 0 },
            { id: "eid14262", tween: [ "style", "${_article-card}", "display", 'block', { fromValue: 'none'}], position: 1100, duration: 0 },
            { id: "eid14337", tween: [ "style", "${_article-video-card}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid14340", tween: [ "style", "${_article-video-card}", "opacity", '1', { fromValue: '1'}], position: 600, duration: 0 },
            { id: "eid14341", tween: [ "style", "${_article-video-card}", "opacity", '1', { fromValue: '1'}], position: 900, duration: 0 },
            { id: "eid13499", tween: [ "style", "${_nonFullCards}", "left", '0px', { fromValue: '0px'}], position: 13416, duration: 0 },
            { id: "eid14287", tween: [ "style", "${_article-assetless-card}", "top", '2695px', { fromValue: '2454px'}], position: 1900, duration: 200 },
            { id: "eid14288", tween: [ "style", "${_article-assetless-card}", "top", '2454px', { fromValue: '2695px'}], position: 2100, duration: 300 },
            { id: "eid14273", tween: [ "style", "${_article-video-card}", "top", '200px', { fromValue: '-41px'}], position: 400, duration: 200 },
            { id: "eid14274", tween: [ "style", "${_article-video-card}", "top", '-41px', { fromValue: '200px'}], position: 600, duration: 300 },
            { id: "eid13052", tween: [ "style", "${_nonFullCards}", "top", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid14302", tween: [ "style", "${_article-3-4-card}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14312", tween: [ "style", "${_article-3-4-card}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
            { id: "eid14271", tween: [ "style", "${_article-3-4-card}", "display", 'none', { fromValue: 'none'}], position: 2400, duration: 0 },
            { id: "eid14272", tween: [ "style", "${_article-3-4-card}", "display", 'block', { fromValue: 'none'}], position: 2600, duration: 0 },
            { id: "eid14335", tween: [ "style", "${_article-card}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid14263", tween: [ "style", "${_article-card}", "opacity", '0', { fromValue: '1'}], position: 900, duration: 0 },
            { id: "eid14264", tween: [ "style", "${_article-card}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 300 },
            { id: "eid14303", tween: [ "style", "${_article-video-card}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14313", tween: [ "style", "${_article-video-card}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0 },
            { id: "eid14276", tween: [ "style", "${_article-video-card}", "display", 'block', { fromValue: 'none'}], position: 600, duration: 0 },
            { id: "eid14265", tween: [ "style", "${_article-card}", "top", '966px', { fromValue: '725px'}], position: 900, duration: 200 },
            { id: "eid14266", tween: [ "style", "${_article-card}", "top", '725px', { fromValue: '966px'}], position: 1100, duration: 300 }         ]
      }
   }
},
"newsCards_Symbol": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'nonFullCards',
      type: 'group',
      rect: ['0px','44px','600','4215','auto','auto'],
      c: [
      {
         id: 'video-card',
         type: 'image',
         rect: ['0px','3022px','600px','655px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/video-card.png','0px','0px']
      },
      {
         rect: ['0px','2454px','600px','548px','auto','auto'],
         id: 'article-assetless-card',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','cardflow/article-assetless-card.png','0px','0px']
      },
      {
         rect: ['0px','1593px','600px','848px','auto','auto'],
         id: 'article-gallery-card',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','cardflow/article-gallery-card.png','0px','0px']
      },
      {
         rect: ['0px','-32px','600px','736px','auto','auto'],
         id: 'article-video-card',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','cardflow/article-video-card.png','0px','0px']
      },
      {
         rect: ['0px','3025px','600px','987px','auto','auto'],
         id: 'article-3-4-card',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','cardflow/article-3-4-card.png','0px','0px']
      },
      {
         rect: ['0px','725px','600px','848px','auto','auto'],
         id: 'article-card',
         type: 'image',
         display: 'none',
         fill: ['rgba(0,0,0,0)','cardflow/article-card.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_video-card}": [
            ["style", "top", '3022px'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_article-3-4-card}": [
            ["style", "top", '3026px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_article-gallery-card}": [
            ["style", "top", '1593px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '4256px'],
            ["style", "width", '600px']
         ],
         "${_article-assetless-card}": [
            ["style", "top", '2454px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_article-card}": [
            ["style", "top", '725px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_nonFullCards}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_article-video-card}": [
            ["style", "top", '-41px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2900,
         autoPlay: true,
         labels: {
            "newsFlowIn": 400
         },
         timeline: [
            { id: "eid12891", tween: [ "style", "${_article-video-card}", "top", '-41px', { fromValue: '-41px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13678", tween: [ "style", "${_article-video-card}", "top", '200px', { fromValue: '-41px'}], position: 400, duration: 200 },
            { id: "eid13679", tween: [ "style", "${_article-video-card}", "top", '-41px', { fromValue: '200px'}], position: 600, duration: 300 },
            { id: "eid13692", tween: [ "style", "${_article-assetless-card}", "top", '2695px', { fromValue: '2454px'}], position: 1900, duration: 200 },
            { id: "eid13693", tween: [ "style", "${_article-assetless-card}", "top", '2454px', { fromValue: '2695px'}], position: 2100, duration: 300 },
            { id: "eid13668", tween: [ "style", "${_article-card}", "opacity", '0', { fromValue: '0'}], position: 900, duration: 0 },
            { id: "eid13669", tween: [ "style", "${_article-card}", "opacity", '1', { fromValue: '0'}], position: 1100, duration: 300 },
            { id: "eid12890", tween: [ "style", "${_article-3-4-card}", "top", '3026px', { fromValue: '3026px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13672", tween: [ "style", "${_article-3-4-card}", "top", '3267px', { fromValue: '3026px'}], position: 2400, duration: 200 },
            { id: "eid13673", tween: [ "style", "${_article-3-4-card}", "top", '3026px', { fromValue: '3267px'}], position: 2600, duration: 300 },
            { id: "eid13686", tween: [ "style", "${_article-gallery-card}", "display", 'none', { fromValue: 'none'}], position: 1400, duration: 0 },
            { id: "eid13687", tween: [ "style", "${_article-gallery-card}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0 },
            { id: "eid13666", tween: [ "style", "${_article-card}", "display", 'none', { fromValue: 'none'}], position: 900, duration: 0 },
            { id: "eid13667", tween: [ "style", "${_article-card}", "display", 'block', { fromValue: 'none'}], position: 1100, duration: 0 },
            { id: "eid13680", tween: [ "style", "${_article-video-card}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 300 },
            { id: "eid13682", tween: [ "style", "${_article-gallery-card}", "top", '1834px', { fromValue: '1593px'}], position: 1400, duration: 200 },
            { id: "eid13683", tween: [ "style", "${_article-gallery-card}", "top", '1593px', { fromValue: '1834px'}], position: 1600, duration: 300 },
            { id: "eid13690", tween: [ "style", "${_article-assetless-card}", "opacity", '0', { fromValue: '0'}], position: 1900, duration: 0 },
            { id: "eid13691", tween: [ "style", "${_article-assetless-card}", "opacity", '1', { fromValue: '0'}], position: 2100, duration: 300 },
            { id: "eid13674", tween: [ "style", "${_article-3-4-card}", "opacity", '0', { fromValue: '0'}], position: 2400, duration: 0 },
            { id: "eid13675", tween: [ "style", "${_article-3-4-card}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 300 },
            { id: "eid13688", tween: [ "style", "${_article-assetless-card}", "display", 'none', { fromValue: 'none'}], position: 1900, duration: 0 },
            { id: "eid13689", tween: [ "style", "${_article-assetless-card}", "display", 'block', { fromValue: 'none'}], position: 2100, duration: 0 },
            { id: "eid13676", tween: [ "style", "${_article-3-4-card}", "display", 'none', { fromValue: 'none'}], position: 2400, duration: 0 },
            { id: "eid13677", tween: [ "style", "${_article-3-4-card}", "display", 'block', { fromValue: 'none'}], position: 2600, duration: 0 },
            { id: "eid13684", tween: [ "style", "${_article-gallery-card}", "opacity", '0', { fromValue: '0'}], position: 1400, duration: 0 },
            { id: "eid13685", tween: [ "style", "${_article-gallery-card}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 300 },
            { id: "eid13681", tween: [ "style", "${_article-video-card}", "display", 'block', { fromValue: 'none'}], position: 600, duration: 0 },
            { id: "eid12889", tween: [ "style", "${_article-card}", "top", '725px', { fromValue: '725px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13670", tween: [ "style", "${_article-card}", "top", '966px', { fromValue: '725px'}], position: 900, duration: 200 },
            { id: "eid13671", tween: [ "style", "${_article-card}", "top", '725px', { fromValue: '966px'}], position: 1100, duration: 300 }         ]
      }
   }
},
"ALERT_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'group',
      display: 'none',
      id: 'breakingAlert',
      rect: ['0px','1px','853','203','auto','auto'],
      c: [
      {
         type: 'rect',
         id: 'Rectangle2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','-1px','640px','152px','auto','auto'],
         fill: ['rgba(209,33,33,0.87)']
      },
      {
         type: 'rect',
         id: 'Rectangle2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         rect: ['0px','151px','0px','4px','auto','auto'],
         fill: ['rgba(209,33,33,0.87)']
      },
      {
         type: 'text',
         rect: ['35px','22px','292px','14px','auto','auto'],
         id: 'Text2',
         text: 'breaking news',
         align: 'left',
         font: ['Arial, Helvetica, sans-serif',24,'rgba(32,32,32,1.00)','normal','none','normal']
      },
      {
         type: 'text',
         rect: ['35px','62px','514px','43px','auto','auto'],
         id: 'Text2Copy',
         text: 'Police: 8-year-old shoots, kills elderly caregiver after playing video game.',
         align: 'left',
         font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1.00)','100','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '-1px'],
            ["style", "height", '152px'],
            ["color", "background-color", 'rgba(209,33,33,0.87)'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '62px'],
            ["style", "font-size", '30px'],
            ["style", "height", '43px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "font-style", 'normal'],
            ["style", "width", '514px']
         ],
         "${symbolSelector}": [
            ["style", "height", '204px'],
            ["style", "width", '853px']
         ],
         "${_breakingAlert}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '1px']
         ],
         "${_Text2}": [
            ["style", "top", '22px'],
            ["style", "height", '14px'],
            ["color", "color", 'rgba(32,32,32,1.00)']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '151px'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(209,33,33,0.8672)'],
            ["style", "left", '0px'],
            ["style", "width", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12255,
         autoPlay: true,
         timeline: [
            { id: "eid13120", tween: [ "style", "${_breakingAlert}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13121", tween: [ "style", "${_breakingAlert}", "display", 'block', { fromValue: 'none'}], position: 8251, duration: 0, easing: "easeOutCubic" },
            { id: "eid13125", tween: [ "style", "${_breakingAlert}", "display", 'block', { fromValue: 'block'}], position: 11951, duration: 0, easing: "easeOutCubic" },
            { id: "eid13156", tween: [ "style", "${_breakingAlert}", "display", 'none', { fromValue: 'block'}], position: 12255, duration: 0 },
            { id: "eid13124", tween: [ "style", "${_breakingAlert}", "opacity", '1', { fromValue: '0'}], position: 8251, duration: 500, easing: "easeOutCubic" },
            { id: "eid13129", tween: [ "style", "${_breakingAlert}", "opacity", '0', { fromValue: '1'}], position: 11951, duration: 304, easing: "easeOutCubic" },
            { id: "eid13123", tween: [ "style", "${_breakingAlert}", "left", '-643px', { fromValue: '0px'}], position: 8251, duration: 500, easing: "easeOutCubic" },
            { id: "eid13128", tween: [ "style", "${_breakingAlert}", "left", '0px', { fromValue: '-643px'}], position: 11951, duration: 304, easing: "easeOutCubic" },
            { id: "eid13146", tween: [ "style", "${_Rectangle2Copy}", "width", '641px', { fromValue: '0px'}], position: 8834, duration: 2917 },
            { id: "eid13144", tween: [ "color", "${_Rectangle2Copy}", "background-color", 'rgba(169,40,46,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(209,33,33,0.8672)'}], position: 8251, duration: 3500 }         ]
      }
   }
},
"FULLCARDS_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'fullCards_group',
      type: 'group',
      rect: ['0px','0px','0','0','auto','auto'],
      c: [
      {
         id: 'natsFull_symbol',
         type: 'rect',
         rect: ['0','0','auto','auto','auto','auto']
      },
      {
         id: 'livFull_symbol',
         type: 'rect',
         rect: ['0','0','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'natsFull_symbol',
      symbolName: 'natsFull_symbol'
   },
   {
      id: 'livFull_symbol',
      symbolName: 'livFull_symbol'
   }   ]
   },
   states: {
      "Base State": {
         "${_fullCards_group}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
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
            { id: "eid13220", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_livFull_symbol}', [] ], ""], position: 0 },
            { id: "eid13227", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_natsFull_symbol}', [] ], ""], position: 0 }         ]
      }
   }
},
"COVERFLOW_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['11px','88px','640px','1065px','auto','auto'],
      id: 'newsCoverFlow',
      transform: [[],[],[],['1','1.03714']],
      clip: ['rect(0px 640px 1061.388671875px 0px)'],
      type: 'group',
      c: [
      {
         rect: ['20px','130px','620px','4247px','auto','auto'],
         id: 'newsWrap',
         type: 'group',
         transform: [[],[],[],['1','1.005']],
         c: [
         {
            id: 'newsFlow_symbol',
            type: 'rect',
            transform: [],
            rect: ['-40px','-18px','auto','auto','auto','auto']
         }]
      }]
   },
   {
      rect: ['11px','56px','640px','1065px','auto','auto'],
      id: 'coverFlow',
      transform: [[],[],[],['1','1.03714']],
      clip: ['rect(0px 640pxpx 1065pxpx 0px)'],
      type: 'group',
      c: [
      {
         rect: ['20px','120px','620px','4247px','auto','auto'],
         id: 'cardsWrap',
         type: 'group',
         transform: [[],[],[],['1','1.005']],
         c: [
         {
            rect: ['2px','666px','600px','1100','auto','auto'],
            id: 'lvpool3Stack',
            display: 'none',
            type: 'group',
            c: [
            {
               id: 'LiverpoolCopy',
               type: 'image',
               rect: ['1px','6px','600px','550px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Liverpool.png','0px','0px']
            },
            {
               rect: ['4px','9px','594px','160px','auto','auto'],
               id: 'lvpool3StackRect',
               stroke: [0,'rgba(0,0,0,1)','none'],
               type: 'rect',
               fill: ['rgba(192,192,192,1)']
            },
            {
               rect: ['490px','456px','106px','100px','auto','auto'],
               id: 'collapseEleCopy4',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(192,192,192,1)']
            }]
         },
         {
            rect: ['2','858px','1200','1100','auto','auto'],
            id: 'nats3StackBot',
            display: 'none',
            type: 'group',
            c: [
            {
               id: 'BaseballCopy',
               type: 'image',
               rect: ['1px','54px','600px','550px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Baseball.png','0px','0px']
            },
            {
               id: 'Baseball-normal-colorCopy',
               type: 'image',
               rect: ['0','54px','600px','550px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Baseball-normal-color.png','0px','0px']
            },
            {
               rect: ['4px','54px','594px','152px','auto','auto'],
               id: 'RectangleCopy2',
               stroke: [0,'rgba(0,0,0,1)','none'],
               type: 'rect',
               fill: ['rgba(192,192,192,1)']
            },
            {
               rect: ['490px','505px','106px','100px','auto','auto'],
               id: 'collapseEleCopy3',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(192,192,192,1)']
            }]
         },
         {
            rect: ['2','1025px','1200','1100','auto','auto'],
            id: 'nats3StackTop',
            display: 'none',
            type: 'group',
            c: [
            {
               id: 'BaseballCopy2',
               type: 'image',
               rect: ['1px','54px','600px','550px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Baseball.png','0px','0px']
            },
            {
               id: 'Baseball-normal-colorCopy2',
               type: 'image',
               rect: ['0','54px','600px','550px','auto','auto'],
               fill: ['rgba(0,0,0,0)','images/Baseball-normal-color.png','0px','0px']
            },
            {
               rect: ['4px','54px','594px','152px','auto','auto'],
               id: 'nats3StackTopRect',
               stroke: [0,'rgba(0,0,0,1)','none'],
               type: 'rect',
               fill: ['rgba(192,192,192,1)']
            },
            {
               rect: ['490px','504px','106px','100px','auto','auto'],
               id: 'collapseEleCopy',
               stroke: [0,'rgb(0, 0, 0)','none'],
               type: 'rect',
               fill: ['rgba(192,192,192,1)']
            }]
         },
         {
            id: 'myCards_symbol',
            type: 'rect',
            rect: ['-10px','-23px','600px','1297px','auto','auto']
         },
         {
            id: 'cardFlow_symbol',
            type: 'rect',
            transform: [],
            rect: ['2','658px','auto','auto','auto','auto']
         }]
      }]
   }],
   symbolInstances: [
   {
      id: 'myCards_symbol',
      symbolName: 'myCards_symbol'
   },
   {
      id: 'newsFlow_symbol',
      symbolName: 'newsFlow_symbol'
   },
   {
      id: 'cardFlow_symbol',
      symbolName: 'cardFlow_symbol'
   }   ]
   },
   states: {
      "Base State": {
         "${_BaseballCopy}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
         "${_collapseEleCopy3}": [
            ["style", "top", '505px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_myCards_symbol}": [
            ["style", "top", '-18px'],
            ["style", "height", '1297px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '-10px'],
            ["style", "width", '600px']
         ],
         "${_newsFlow_symbol}": [
            ["style", "top", '-18px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '-20px']
         ],
         "${_nats3StackBot}": [
            ["style", "top", '704px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "z-index", '53'],
            ["style", "width", '600px']
         ],
         "${_collapseEleCopy}": [
            ["style", "top", '504px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_cardsWrap}": [
            ["style", "top", '120px'],
            ["transform", "scaleY", '1.005'],
            ["style", "height", '4247px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '20px'],
            ["style", "width", '620px']
         ],
         "${_LiverpoolCopy}": [
            ["style", "left", '1px'],
            ["style", "top", '6px']
         ],
         "${_Baseball-normal-colorCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_newsWrap}": [
            ["style", "top", '130px'],
            ["transform", "scaleY", '1.005'],
            ["style", "height", '4247px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '20px'],
            ["style", "width", '620px']
         ],
         "${_cardFlow_symbol}": [
            ["style", "top", '658px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '-20px']
         ],
         "${_collapseEleCopy4}": [
            ["style", "top", '456px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_lvpool3Stack}": [
            ["style", "top", '666px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "z-index", '50'],
            ["style", "width", '600px']
         ],
         "${_coverFlow}": [
            ["transform", "scaleX", '1.03286'],
            ["style", "opacity", '1'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "width", '640px'],
            ["style", "top", '56px'],
            ["transform", "scaleY", '1.03286'],
            ["style", "height", '1065px'],
            ["style", "left", '11px'],
            ["style", "clip", [0,640,1065,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "overflow-y", 'auto']
         ],
         "${_lvpool3StackRect}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '160px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_nats3StackTopRect}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_newsCoverFlow}": [
            ["transform", "scaleX", '1.03286'],
            ["style", "opacity", '1'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "width", '640px'],
            ["style", "overflow-y", 'auto'],
            ["transform", "scaleY", '1.03286'],
            ["style", "height", '1065px'],
            ["style", "top", '88px'],
            ["style", "clip", [0,640,1061.388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '11px']
         ],
         "${_nats3StackTop}": [
            ["style", "top", '781px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "z-index", '55'],
            ["style", "width", '600px']
         ],
         "${symbolSelector}": [
            ["style", "height", '5501px'],
            ["style", "width", '640px']
         ],
         "${_Baseball-normal-colorCopy}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_BaseballCopy2}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13416,
         autoPlay: true,
         labels: {
            "myCardsIn": 5600
         },
         timeline: [
            { id: "eid13157", tween: [ "style", "${_nats3StackBot}", "width", '600px', { fromValue: '600px'}], position: 8151, duration: 0 },
            { id: "eid13498", tween: [ "style", "${_cardFlow_symbol}", "left", '-20px', { fromValue: '-20px'}], position: 13416, duration: 0 },
            { id: "eid14382", tween: [ "style", "${_newsFlow_symbol}", "left", '-20px', { fromValue: '-20px'}], position: 0, duration: 0 },
            { id: "eid14320", tween: [ "style", "${_myCards_symbol}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid14317", tween: [ "style", "${_myCards_symbol}", "display", 'none', { fromValue: 'block'}], position: 5467, duration: 0 },
            { id: "eid14297", tween: [ "style", "${_myCards_symbol}", "display", 'block', { fromValue: 'none'}], position: 5600, duration: 0 },
            { id: "eid13056", tween: [ "style", "${_nats3StackBot}", "top", '1187px', { fromValue: '704px'}], position: 4651, duration: 307 },
            { id: "eid13069", tween: [ "style", "${_nats3StackBot}", "top", '703px', { fromValue: '1187px'}], position: 4996, duration: 307 },
            { id: "eid13178", tween: [ "style", "${_nats3StackBot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13179", tween: [ "style", "${_nats3StackTop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid14300", tween: [ "style", "${_myCards_symbol}", "top", '-23px', { fromValue: '-18px'}], position: 5600, duration: 500 },
            { id: "eid13058", tween: [ "style", "${_nats3StackTop}", "top", '1760px', { fromValue: '781px'}], position: 4651, duration: 307 },
            { id: "eid13062", tween: [ "style", "${_nats3StackTop}", "top", '780px', { fromValue: '1760px'}], position: 4996, duration: 307 },
            { id: "eid14353", tween: [ "transform", "${_newsCoverFlow}", "scaleY", '1.03286', { fromValue: '1.03286'}], position: 0, duration: 0 },
            { id: "eid13158", tween: [ "style", "${_nats3StackTop}", "width", '600px', { fromValue: '600px'}], position: 8151, duration: 0 },
            { id: "eid13503", tween: [ "transform", "${_coverFlow}", "scaleX", '1.03286', { fromValue: '1.03286'}], position: 0, duration: 0 },
            { id: "eid14334", tween: [ "style", "${_myCards_symbol}", "opacity", '1', { fromValue: '1'}], position: 5467, duration: 0 },
            { id: "eid14333", tween: [ "style", "${_myCards_symbol}", "opacity", '1', { fromValue: '0'}], position: 5600, duration: 500 },
            { id: "eid13176", tween: [ "style", "${_lvpool3Stack}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13504", tween: [ "transform", "${_coverFlow}", "scaleY", '1.03286', { fromValue: '1.03286'}], position: 0, duration: 0 },
            { id: "eid13055", tween: [ "style", "${_nats3StackBot}", "left", '4px', { fromValue: '2px'}], position: 4651, duration: 307 },
            { id: "eid13070", tween: [ "style", "${_nats3StackBot}", "left", '2px', { fromValue: '4px'}], position: 4996, duration: 307 },
            { id: "eid14352", tween: [ "transform", "${_newsCoverFlow}", "scaleX", '1.03286', { fromValue: '1.03286'}], position: 0, duration: 0 },
            { id: "eid13057", tween: [ "style", "${_nats3StackTop}", "left", '4px', { fromValue: '2px'}], position: 4651, duration: 307 },
            { id: "eid13061", tween: [ "style", "${_nats3StackTop}", "left", '2px', { fromValue: '4px'}], position: 4996, duration: 307 }         ]
      }
   }
},
"NAVBAR_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'topPanelGroup',
      type: 'group',
      rect: ['0px','-110px','620px','87px','auto','auto'],
      c: [
      {
         id: 'headerGroup',
         type: 'group',
         rect: ['0px','1px','620px','87','auto','auto'],
         c: [
         {
            id: 'header',
            type: 'image',
            rect: ['1px','28px','640px','90px','auto','auto'],
            fill: ['rgba(0,0,0,0)','images/header.png','0px','0px']
         },
         {
            type: 'rect',
            id: 'Rectangle',
            stroke: [0,'rgba(0,0,0,1)','none'],
            rect: ['1px','0px','640px','29px','auto','auto'],
            fill: ['rgba(15,152,240,0.80)']
         },
         {
            rect: ['133px','54px','337px','55px','auto','auto'],
            font: ['Arial, Helvetica, sans-serif',30,'rgba(248,248,248,1.00)','normal','none',''],
            id: 'Text',
            text: 'Latest',
            align: 'center',
            type: 'text'
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_headerGroup}": [
            ["style", "top", '1px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["style", "top", '54px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(248,248,248,1.00)'],
            ["style", "left", '133px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '640px']
         ],
         "${_topPanelGroup}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '87px'],
            ["style", "left", '0px'],
            ["style", "width", '620px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(15,152,240,0.80)'],
            ["style", "height", '29px'],
            ["style", "top", '0px'],
            ["style", "width", '640px']
         ],
         "${_header}": [
            ["style", "top", '28px'],
            ["style", "height", '90px'],
            ["color", "background-color", 'rgba(13,152,241,.8)'],
            ["style", "left", '1px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3951,
         autoPlay: true,
         timeline: [
            { id: "eid13277", tween: [ "style", "${_topPanelGroup}", "top", '-87px', { fromValue: '0px'}], position: 2251, duration: 500, easing: "easeOutCubic" },
            { id: "eid13278", tween: [ "style", "${_topPanelGroup}", "top", '0px', { fromValue: '-87px'}], position: 3451, duration: 500, easing: "easeOutCubic" },
            { id: "eid13272", tween: [ "style", "${_topPanelGroup}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13274", tween: [ "style", "${_topPanelGroup}", "display", 'block', { fromValue: 'block'}], position: 2251, duration: 0, easing: "easeOutCubic" },
            { id: "eid13271", tween: [ "style", "${_topPanelGroup}", "display", 'block', { fromValue: 'block'}], position: 3951, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
},
"FULLARTICLE_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'articleWrap',
      type: 'group',
      rect: ['0px','0px','640','6166','auto','auto'],
      c: [
      {
         type: 'image',
         display: 'none',
         rect: ['0px','0','640px','6166px','auto','auto'],
         id: 'article-card-full',
         fill: ['rgba(0,0,0,0)','cardflow/article-card-full.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_articleWrap}": [
            ["style", "top", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1064px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_article-card-full}": [
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "z-index", '60'],
            ["style", "left", '0px'],
            ["style", "overflow", 'visible']
         ],
         "${symbolSelector}": [
            ["style", "height", '6166px'],
            ["style", "width", '640px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3700,
         autoPlay: true,
         timeline: [
            { id: "eid13043", tween: [ "style", "${_articleWrap}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid12429", tween: [ "style", "${_article-card-full}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12428", tween: [ "style", "${_article-card-full}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
},
"ARTICLEFULL_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['138','142','auto','auto','auto','auto'],
      id: 'Symbol_articleGroup',
      transform: [],
      display: 'none',
      type: 'rect'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['138','142','auto','auto','auto','auto'],
      id: 'Symbol_articleVideoGroup'
   }],
   symbolInstances: [
   {
      id: 'Symbol_articleVideoGroup',
      symbolName: 'Symbol_articleVideoGroup'
   },
   {
      id: 'Symbol_articleGroup',
      symbolName: 'Symbol_articleGroup'
   }   ]
   },
   states: {
      "Base State": {
         "${_Symbol_articleVideoGroup}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '1238px'],
            ["style", "width", '320px']
         ],
         "${_Symbol_articleGroup}": [
            ["style", "display", 'none']
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
            { id: "eid14385", tween: [ "style", "${_Symbol_articleVideoGroup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid14386", tween: [ "style", "${_Symbol_articleGroup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid14388", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Symbol_articleGroup}', [] ], ""], position: 0 },
            { id: "eid14387", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Symbol_articleVideoGroup}', [] ], ""], position: 0 }         ]
      }
   }
},
"dicoverCard_left_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Card_Left_sym',
      type: 'group',
      rect: ['0px','0px','293','429','auto','auto'],
      c: [
      {
         rect: ['0px','0px','293px','429px','auto','auto'],
         id: 'Rectangle13',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['10px','11px','272px','208px','auto','auto'],
         id: 'Rectangle14',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      },
      {
         rect: ['226px','17px','48px','48px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['238px','19px','auto','auto','auto','auto'],
         id: 'Text',
         text: '+',
         align: 'left',
         font: ['Arial, Helvetica, sans-serif',40,'rgba(107,107,107,1)','300','none','normal']
      },
      {
         rect: ['20px','259px','152px','21px','auto','auto'],
         id: 'Rectangle16',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      },
      {
         rect: ['20px','296px','200px','18px','auto','auto'],
         id: 'Rectangle17',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','325px','224px','18px','auto','auto'],
         id: 'Rectangle17Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','353px','208px','18px','auto','auto'],
         id: 'Rectangle17Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','383px','200px','18px','auto','auto'],
         id: 'Rectangle17Copy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','232px','120px','18px','auto','auto'],
         id: 'Rectangle15',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle17}": [
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "left", '20px'],
            ["style", "top", '296px']
         ],
         "${_Rectangle17Copy}": [
            ["style", "top", '325px'],
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '224px']
         ],
         "${_Card_Left_sym}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle16}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '20px'],
            ["style", "top", '259px']
         ],
         "${_Rectangle15}": [
            ["style", "top", '232px'],
            ["style", "height", '18px'],
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '120px']
         ],
         "${_Rectangle17Copy3}": [
            ["style", "top", '383px'],
            ["style", "left", '20px'],
            ["color", "background-color", 'rgba(232,230,230,1.00)']
         ],
         "${_Text}": [
            ["style", "top", '19px'],
            ["style", "left", '238px'],
            ["style", "font-size", '40px']
         ],
         "${symbolSelector}": [
            ["style", "height", '429px'],
            ["style", "width", '293px']
         ],
         "${_Rectangle14}": [
            ["style", "top", '11px'],
            ["style", "left", '10px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_Rectangle13}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '226px'],
            ["style", "top", '17px']
         ],
         "${_Rectangle17Copy2}": [
            ["style", "top", '353px'],
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '208px']
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
"discoverTopcard_first_syn": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Left_Category_Pic',
      type: 'group',
      rect: ['0px','0px','222','268','auto','auto'],
      c: [
      {
         rect: ['0px','0px','222px','268px','auto','auto'],
         id: 'Rectangle4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['12px','9px','200px','200px','auto','auto'],
         id: 'Rectangle7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(148,148,148,1.00)']
      },
      {
         rect: ['21px','228px','89px','21px','auto','auto'],
         id: 'Rectangle8',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      },
      {
         rect: ['122px','228px','66px','21px','auto','auto'],
         id: 'Rectangle8Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7}": [
            ["style", "top", '9px'],
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(148,148,148,1.00)'],
            ["style", "left", '12px'],
            ["style", "width", '200px']
         ],
         "${symbolSelector}": [
            ["style", "height", '268px'],
            ["style", "width", '222px']
         ],
         "${_Rectangle8Copy}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "top", '228px'],
            ["style", "left", '122px'],
            ["style", "width", '66px']
         ],
         "${_Left_Category_Pic}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle4}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '268px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '222px']
         ],
         "${_Rectangle8}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '21px'],
            ["style", "top", '228px']
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
"discoverTopBG_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','640px','382px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(221,220,220,1.00)']
   },
   {
      rect: ['20px','33px','152px','28px','auto','auto'],
      id: 'Rectangle9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1.00)']
   },
   {
      rect: ['533px','36px','89px','28px','auto','auto'],
      id: 'Rectangle9Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(237,237,237,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle9}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '20px'],
            ["style", "top", '33px']
         ],
         "${_Rectangle3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(221,220,220,1.00)']
         ],
         "${_Rectangle9Copy}": [
            ["color", "background-color", 'rgba(237,237,237,1)'],
            ["style", "top", '36px'],
            ["style", "left", '533px'],
            ["style", "width", '89px']
         ],
         "${symbolSelector}": [
            ["style", "height", '382px'],
            ["style", "width", '640px']
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
"DISCOVER_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['2px','0px','640px','5136px','auto','auto'],
      id: 'discover',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/discover.png','0px','0px']
   },
   {
      id: 'discoverTopBG_sym',
      type: 'rect',
      rect: ['0','216','auto','auto','auto','auto']
   },
   {
      id: 'topCard_first_sym',
      type: 'rect',
      rect: ['19','308','auto','auto','auto','auto']
   },
   {
      id: 'topCard_second_sym',
      type: 'rect',
      rect: ['251','308','auto','auto','auto','auto']
   },
   {
      id: 'topCard_second_symCopy',
      type: 'rect',
      rect: ['251','308','auto','auto','auto','auto']
   },
   {
      id: 'discoverBodyBG_sym',
      type: 'rect',
      rect: ['0','598','auto','auto','auto','auto']
   },
   {
      id: 'discoverHeader_sym',
      type: 'rect',
      rect: ['0','41','auto','auto','auto','auto']
   },
   {
      id: 'search_sym',
      type: 'rect',
      rect: ['0','127','auto','auto','auto','auto']
   },
   {
      id: 'dicoverCard_left_sym',
      type: 'rect',
      rect: ['21','689','auto','auto','auto','auto']
   },
   {
      id: 'discoverCard_right_sym',
      type: 'rect',
      rect: ['326','688','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'discoverHeader_sym',
      symbolName: 'discoverHeader_sym'
   },
   {
      id: 'discoverTopBG_sym',
      symbolName: 'discoverTopBG_sym'
   },
   {
      id: 'discoverBodyBG_sym',
      symbolName: 'discoverBodyBG_sym'
   },
   {
      id: 'topCard_second_sym',
      symbolName: 'discoverTopcard_second_sym'
   },
   {
      id: 'discoverCard_right_sym',
      symbolName: 'discoverCard_right_sym'
   },
   {
      id: 'topCard_second_symCopy',
      symbolName: 'discoverTopcard_second_sym'
   },
   {
      id: 'topCard_first_sym',
      symbolName: 'discoverTopcard_first_syn'
   },
   {
      id: 'dicoverCard_left_sym',
      symbolName: 'dicoverCard_left_sym'
   },
   {
      id: 'search_sym',
      symbolName: 'mainfrontSearch_sym'
   }   ]
   },
   states: {
      "Base State": {
         "${_topCard_second_symCopy}": [
            ["style", "left", '484px']
         ],
         "${_discoverTopBG_sym}": [
            ["style", "top", '217px']
         ],
         "${symbolSelector}": [
            ["style", "height", '5136px'],
            ["style", "width", '640px']
         ],
         "${_topCard_first_sym}": [
            ["style", "left", '21px']
         ],
         "${_discover}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '2px'],
            ["style", "display", 'none']
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
            { id: "eid38", tween: [ "style", "${_discoverTopBG_sym}", "top", '217px', { fromValue: '217px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_discover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_topCard_first_sym}", "left", '21px', { fromValue: '21px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_topCard_second_symCopy}", "left", '484px', { fromValue: '484px'}], position: 0, duration: 0 }         ]
      }
   }
},
"discoverBodyBG_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','640px','538px','auto','auto'],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(237,237,237,1.00)']
   },
   {
      rect: ['18px','29px','66px','28px','auto','auto'],
      id: 'Rectangle12',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1.00)']
   },
   {
      rect: ['91px','29px','152px','28px','auto','auto'],
      id: 'Rectangle12Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '538px'],
            ["style", "width", '640px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "height", '538px'],
            ["color", "background-color", 'rgba(237,237,237,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle12}": [
            ["style", "top", '29px'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_Rectangle12Copy}": [
            ["style", "top", '29px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '91px'],
            ["style", "width", '152px']
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
"discoverTopcard_second_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Left_Category_PicCopy2',
      type: 'group',
      rect: ['0px','0px','222','268','auto','auto'],
      c: [
      {
         rect: ['0px','0px','222px','268px','auto','auto'],
         id: 'Rectangle4Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['12px','9px','200px','200px','auto','auto'],
         id: 'Rectangle7Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(148,148,148,1.00)']
      },
      {
         rect: ['21px','228px','89px','21px','auto','auto'],
         id: 'Rectangle8Copy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle7Copy2}": [
            ["style", "top", '9px'],
            ["style", "height", '200px'],
            ["color", "background-color", 'rgba(148,148,148,1.00)'],
            ["style", "left", '12px'],
            ["style", "width", '200px']
         ],
         "${symbolSelector}": [
            ["style", "height", '268px'],
            ["style", "width", '222px']
         ],
         "${_Left_Category_PicCopy2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle4Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '268px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '222px']
         ],
         "${_Rectangle8Copy5}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '21px'],
            ["style", "top", '228px']
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
"discoverCard_right_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Card_Right_sym',
      type: 'group',
      rect: ['0px','0px','293','429px','auto','auto'],
      c: [
      {
         rect: ['0px','0px','293px','590px','auto','auto'],
         id: 'Rectangle13Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['10px','11px','272px','369px','auto','auto'],
         id: 'Rectangle14Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      },
      {
         rect: ['226px','17px','48px','48px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         type: 'text',
         rect: ['238px','19px','auto','auto','auto','auto'],
         id: 'TextCopy',
         text: '+',
         align: 'left',
         font: ['Arial, Helvetica, sans-serif',40,'rgba(107,107,107,1)','300','none','normal']
      },
      {
         rect: ['20px','393px','120px','18px','auto','auto'],
         id: 'Rectangle15Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','424px','152px','21px','auto','auto'],
         id: 'Rectangle16Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(192,192,192,1.00)']
      },
      {
         rect: ['20px','461px','200px','18px','auto','auto'],
         id: 'Rectangle17Copy7',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','490px','224px','18px','auto','auto'],
         id: 'Rectangle17Copy6',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','518px','208px','18px','auto','auto'],
         id: 'Rectangle17Copy5',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      },
      {
         rect: ['20px','548px','200px','18px','auto','auto'],
         id: 'Rectangle17Copy4',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(232,230,230,1.00)']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle17Copy7}": [
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "left", '20px'],
            ["style", "top", '461px']
         ],
         "${_Rectangle13Copy}": [
            ["style", "height", '590px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Card_Right_sym}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle17Copy4}": [
            ["style", "top", '548px'],
            ["style", "left", '20px'],
            ["color", "background-color", 'rgba(232,230,230,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '590px'],
            ["style", "width", '293px']
         ],
         "${_Rectangle14Copy}": [
            ["style", "height", '369px'],
            ["style", "top", '11px'],
            ["style", "left", '10px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '226px'],
            ["style", "top", '17px']
         ],
         "${_Rectangle17Copy6}": [
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "top", '490px'],
            ["style", "left", '20px'],
            ["style", "width", '224px']
         ],
         "${_Rectangle17Copy5}": [
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "top", '518px'],
            ["style", "left", '20px'],
            ["style", "width", '208px']
         ],
         "${_Rectangle16Copy}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '20px'],
            ["style", "top", '424px']
         ],
         "${_TextCopy}": [
            ["style", "top", '19px'],
            ["style", "left", '238px'],
            ["style", "font-size", '40px']
         ],
         "${_Rectangle15Copy}": [
            ["style", "top", '393px'],
            ["style", "height", '18px'],
            ["color", "background-color", 'rgba(232,230,230,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '120px']
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
"mainfrontSearch_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','640px','90px','auto','auto'],
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1.00)']
   },
   {
      rect: ['20px','17px','598px','59px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '20px'],
            ["style", "top", '17px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '90px'],
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '640px']
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
"discoverHeader_sym": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','640px','90px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1.00)']
   },
   {
      rect: ['252px','30px','140px','28px','auto','auto'],
      id: 'Rectangle10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['41px','41px','36px','6px','auto','auto'],
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['41px','31px','36px','6px','auto','auto'],
      id: 'Rectangle11Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['41px','51px','36px','6px','auto','auto'],
      id: 'Rectangle11Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '640px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '640px']
         ],
         "${_Rectangle11}": [
            ["style", "top", '41px'],
            ["style", "left", '41px']
         ],
         "${_Rectangle10}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '252px'],
            ["style", "top", '30px']
         ],
         "${_Rectangle11Copy2}": [
            ["style", "top", '31px'],
            ["style", "left", '41px']
         ],
         "${_Rectangle11Copy}": [
            ["style", "top", '51px'],
            ["style", "left", '41px']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-260752881");
