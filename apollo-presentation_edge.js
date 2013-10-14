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
            id:'systemBar',
            type:'image',
            rect:['682px','0','640px','40px','auto','auto'],
            fill:["rgba(0,0,0,0)",'cardflow/system-bar.png','0px','0px']
         },
         {
            id:'articleWrap',
            type:'group',
            rect:['640px','0','640','6166','auto','auto'],
            c:[
            {
               id:'article-card-full',
               display:'none',
               type:'image',
               rect:['0px','0','640px','6166px','auto','auto'],
               fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
            }]
         },
         {
            id:'coverFlow',
            type:'group',
            rect:['0px','97px','640px','1065px','auto','auto'],
            clip:['rect(0px 640px 1061.388671875px 0px)'],
            transform:[[],[],[],['1','1.03714']],
            c:[
            {
               id:'cardsWrap',
               type:'group',
               rect:['18px','91px','600px','2729px','auto','auto'],
               clip:['rect(-175.99354553222656px 600px 3884.3046875px 0px)'],
               transform:[[],[],[],['1','1.005']],
               c:[
               {
                  id:'lvpool3Stack',
                  display:'none',
                  type:'group',
                  rect:['2px','666px','600px','1100','auto','auto'],
                  c:[
                  {
                     id:'LiverpoolCopy',
                     type:'image',
                     rect:['1px','6px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Liverpool.png",'0px','0px']
                  },
                  {
                     id:'lvpool3StackRect',
                     type:'rect',
                     rect:['4px','9px','594px','160px','auto','auto'],
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  },
                  {
                     id:'collapseEleCopy4',
                     type:'rect',
                     rect:['490px','456px','106px','100px','auto','auto'],
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgb(0, 0, 0)","none"]
                  }]
               },
               {
                  id:'nats3StackBot',
                  display:'none',
                  type:'group',
                  rect:['2','858px','1200','1100','auto','auto'],
                  c:[
                  {
                     id:'BaseballCopy',
                     type:'image',
                     rect:['1px','54px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Baseball.png",'0px','0px']
                  },
                  {
                     id:'Baseball-normal-colorCopy',
                     type:'image',
                     rect:['0','54px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Baseball-normal-color.png",'0px','0px']
                  },
                  {
                     id:'RectangleCopy2',
                     type:'rect',
                     rect:['4px','54px','594px','152px','auto','auto'],
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  },
                  {
                     id:'collapseEleCopy3',
                     type:'rect',
                     rect:['490px','505px','106px','100px','auto','auto'],
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgb(0, 0, 0)","none"]
                  }]
               },
               {
                  id:'nats3StackTop',
                  display:'none',
                  type:'group',
                  rect:['2','1025px','1200','1100','auto','auto'],
                  c:[
                  {
                     id:'BaseballCopy2',
                     type:'image',
                     rect:['1px','54px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Baseball.png",'0px','0px']
                  },
                  {
                     id:'Baseball-normal-colorCopy2',
                     type:'image',
                     rect:['0','54px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Baseball-normal-color.png",'0px','0px']
                  },
                  {
                     id:'nats3StackTopRect',
                     type:'rect',
                     rect:['4px','54px','594px','152px','auto','auto'],
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  },
                  {
                     id:'collapseEleCopy',
                     type:'rect',
                     rect:['490px','504px','106px','100px','auto','auto'],
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgb(0, 0, 0)","none"]
                  }]
               },
               {
                  id:'myCards_symbol',
                  type:'rect',
                  rect:['2','4','auto','auto','auto','auto']
               },
               {
                  id:'cardFlow_symbol2',
                  type:'rect',
                  rect:['2','736','auto','auto','auto','auto']
               }]
            }]
         },
         {
            id:'topPanelGroup',
            type:'group',
            rect:['-1px','-111px','620px','87px','auto','auto'],
            c:[
            {
               id:'headerGroup',
               type:'group',
               rect:['0px','1px','620px','87','auto','auto'],
               c:[
               {
                  id:'header',
                  type:'image',
                  rect:['0px','0px','620px','87px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"header.png",'0px','0px']
               },
               {
                  id:'Text',
                  type:'text',
                  rect:['133px','29px','337px','55px','auto','auto'],
                  text:"Latest",
                  align:"center",
                  font:['Arial, Helvetica, sans-serif',30,"rgba(248,248,248,1.00)","normal","none",""]
               }]
            }]
         },
         {
            id:'Symbol_articleGroup',
            display:'none',
            type:'rect',
            rect:['138','142','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Symbol_articleVideoGroup',
            display:'none',
            type:'rect',
            rect:['138','142','auto','auto','auto','auto']
         },
         {
            id:'natsFull_symbol',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'livFull_symbol',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'mainNav_symbol',
            type:'rect',
            rect:['-137px','0px','auto','auto','auto','auto']
         },
         {
            id:'breakingAlert',
            display:'none',
            type:'group',
            rect:['643px','-4','853','203','auto','auto'],
            c:[
            {
               id:'Rectangle2',
               type:'rect',
               rect:['0px','-1px','640px','152px','auto','auto'],
               fill:["rgba(209,33,33,0.87)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Rectangle2Copy',
               type:'rect',
               rect:['0px','151px','0px','4px','auto','auto'],
               fill:["rgba(209,33,33,0.87)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['35px','22px','292px','14px','auto','auto'],
               text:"breaking news",
               align:"left",
               font:['Arial, Helvetica, sans-serif',24,"rgba(32,32,32,1.00)","normal","none","normal"]
            },
            {
               id:'Text2Copy',
               type:'text',
               rect:['35px','62px','514px','43px','auto','auto'],
               text:"Police: 8-year-old shoots, kills elderly caregiver after playing video game.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',30,"rgba(255,255,255,1.00)","100","none","normal"]
            }]
         },
         {
            id:'Symbol_loader',
            type:'rect',
            rect:['1','2','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'natsFull_symbol',
            symbolName:'natsFull_symbol'
         },
         {
            id:'Symbol_articleVideoGroup',
            symbolName:'Symbol_articleVideoGroup'
         },
         {
            id:'Symbol_loader',
            symbolName:'Symbol_loader'
         },
         {
            id:'livFull_symbol',
            symbolName:'livFull_symbol'
         },
         {
            id:'cardFlow_symbol2',
            symbolName:'cardFlow_symbol'
         },
         {
            id:'Symbol_articleGroup',
            symbolName:'Symbol_articleGroup'
         },
         {
            id:'mainNav_symbol',
            symbolName:'mainNav_symbol'
         },
         {
            id:'myCards_symbol',
            symbolName:'myCards_symbol'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Symbol_articleVideoGroup}": [
            ["style", "display", 'none']
         ],
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
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '100'],
            ["style", "height", '43px'],
            ["style", "width", '514px']
         ],
         "${_Baseball-normal-colorCopy}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(32,32,32,1.00)'],
            ["style", "top", '22px'],
            ["style", "height", '14px']
         ],
         "${_lvpool3StackRect}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '160px']
         ],
         "${_article-card-full}": [
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "z-index", '60'],
            ["style", "left", '0px'],
            ["style", "overflow", 'visible']
         ],
         "${_Baseball-normal-colorCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_cardFlow_symbol2}": [
            ["style", "left", '-8px']
         ],
         "${_nats3StackTop}": [
            ["style", "top", '781px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "z-index", '55'],
            ["style", "width", '600px']
         ],
         "${_articleWrap}": [
            ["style", "overflow", 'hidden'],
            ["style", "height", '1064px'],
            ["style", "opacity", '0'],
            ["style", "left", '640px'],
            ["style", "display", 'block']
         ],
         "${_myText}": [
            ["style", "text-align", '']
         ],
         "${_BaseballCopy}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
         "${_topPanelGroup}": [
            ["style", "top", '-1px'],
            ["style", "display", 'block'],
            ["style", "height", '87px'],
            ["style", "left", '-1px'],
            ["style", "width", '620px']
         ],
         "${_collapseEleCopy4}": [
            ["style", "top", '456px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_nats3StackBot}": [
            ["style", "top", '704px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "z-index", '53'],
            ["style", "width", '600px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_cardsWrap}": [
            ["style", "top", '91px'],
            ["transform", "scaleY", '1.005'],
            ["style", "height", '4110px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '18px'],
            ["style", "clip", [-0.22967222332954407,600.036376953125,7134.64404296875,0.036376953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_LiverpoolCopy}": [
            ["style", "left", '1px'],
            ["style", "top", '6px']
         ],
         "${_coverFlow}": [
            ["transform", "scaleX", '0.96418'],
            ["style", "opacity", '1'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "width", '640px'],
            ["style", "top", '26px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '1065px'],
            ["style", "left", '-10px'],
            ["style", "clip", [0,640,1061.388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "overflow-y", 'auto']
         ],
         "${_BaseballCopy2}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
         "${_lvpool3Stack}": [
            ["style", "top", '666px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "z-index", '50'],
            ["style", "width", '600px']
         ],
         "${_mainNav_symbol}": [
            ["style", "left", '-135px'],
            ["style", "top", '0px']
         ],
         "${_headerGroup}": [
            ["style", "top", '1px'],
            ["style", "left", '0px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '151px'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(209,33,33,0.8672)'],
            ["style", "left", '0px'],
            ["style", "width", '0px']
         ],
         "${_systemBar}": [
            ["style", "left", '682px'],
            ["style", "display", 'block']
         ],
         "${_collapseEleCopy}": [
            ["style", "top", '504px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_header}": [
            ["style", "top", '0px'],
            ["style", "height", '87px'],
            ["color", "background-color", 'rgba(13,152,241,.8)'],
            ["style", "left", '0px'],
            ["style", "width", '620px']
         ],
         "${_nats3StackTopRect}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_breakingAlert}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '643px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(231,231,231,1.00)'],
            ["style", "min-width", '620px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1064px'],
            ["style", "max-width", 'none'],
            ["style", "width", '620px']
         ],
         "${_Text}": [
            ["style", "top", '29px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(248,248,248,1.00)'],
            ["style", "left", '133px'],
            ["style", "font-size", '30px']
         ],
         "${_collapseEleCopy3}": [
            ["style", "top", '505px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
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
         duration: 13416,
         autoPlay: true,
         labels: {
            "Start": 0,
            "topPanelUp": 2251,
            "topPanelDown": 3451,
            "myCardExtend": 4651,
            "myCardCollapse": 4996,
            "breakingAlertIn": 8251,
            "breakingAlertOut": 11951,
            "cardFlowSlideRight": 12333,
            "cardFlowSlideLeft": 12916
         },
         timeline: [
            { id: "eid13272", tween: [ "style", "${_topPanelGroup}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13274", tween: [ "style", "${_topPanelGroup}", "display", 'block', { fromValue: 'block'}], position: 2251, duration: 0, easing: "easeOutCubic" },
            { id: "eid13271", tween: [ "style", "${_topPanelGroup}", "display", 'block', { fromValue: 'block'}], position: 3951, duration: 0, easing: "easeOutCubic" },
            { id: "eid13157", tween: [ "style", "${_nats3StackBot}", "width", '600px', { fromValue: '600px'}], position: 8151, duration: 0 },
            { id: "eid13277", tween: [ "style", "${_topPanelGroup}", "top", '-88px', { fromValue: '-1px'}], position: 2251, duration: 500, easing: "easeOutCubic" },
            { id: "eid13278", tween: [ "style", "${_topPanelGroup}", "top", '-1px', { fromValue: '-88px'}], position: 3451, duration: 500, easing: "easeOutCubic" },
            { id: "eid13498", tween: [ "style", "${_cardFlow_symbol2}", "left", '-8px', { fromValue: '-8px'}], position: 13416, duration: 0 },
            { id: "eid13257", tween: [ "style", "${_coverFlow}", "left", '127px', { fromValue: '-10px'}], position: 12333, duration: 500, easing: "easeOutCubic" },
            { id: "eid13259", tween: [ "style", "${_coverFlow}", "left", '-10px', { fromValue: '127px'}], position: 12916, duration: 500, easing: "easeOutCubic" },
            { id: "eid13055", tween: [ "style", "${_nats3StackBot}", "left", '4px', { fromValue: '2px'}], position: 4651, duration: 307 },
            { id: "eid13070", tween: [ "style", "${_nats3StackBot}", "left", '2px', { fromValue: '4px'}], position: 4996, duration: 307 },
            { id: "eid13056", tween: [ "style", "${_nats3StackBot}", "top", '1187px', { fromValue: '704px'}], position: 4651, duration: 307 },
            { id: "eid13069", tween: [ "style", "${_nats3StackBot}", "top", '703px', { fromValue: '1187px'}], position: 4996, duration: 307 },
            { id: "eid13178", tween: [ "style", "${_nats3StackBot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13179", tween: [ "style", "${_nats3StackTop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13120", tween: [ "style", "${_breakingAlert}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13121", tween: [ "style", "${_breakingAlert}", "display", 'block', { fromValue: 'none'}], position: 8251, duration: 0, easing: "easeOutCubic" },
            { id: "eid13125", tween: [ "style", "${_breakingAlert}", "display", 'block', { fromValue: 'block'}], position: 11951, duration: 0, easing: "easeOutCubic" },
            { id: "eid13156", tween: [ "style", "${_breakingAlert}", "display", 'none', { fromValue: 'block'}], position: 12255, duration: 0 },
            { id: "eid13043", tween: [ "style", "${_articleWrap}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid13504", tween: [ "transform", "${_coverFlow}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid13044", tween: [ "style", "${_systemBar}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid13158", tween: [ "style", "${_nats3StackTop}", "width", '600px', { fromValue: '600px'}], position: 8151, duration: 0 },
            { id: "eid13503", tween: [ "transform", "${_coverFlow}", "scaleX", '0.96418', { fromValue: '0.96418'}], position: 0, duration: 0 },
            { id: "eid13146", tween: [ "style", "${_Rectangle2Copy}", "width", '641px', { fromValue: '0px'}], position: 8834, duration: 2917 },
            { id: "eid12429", tween: [ "style", "${_article-card-full}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12428", tween: [ "style", "${_article-card-full}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0, easing: "easeOutCubic" },
            { id: "eid13144", tween: [ "color", "${_Rectangle2Copy}", "background-color", 'rgba(169,40,46,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(209,33,33,0.8672)'}], position: 8251, duration: 3500 },
            { id: "eid13372", tween: [ "style", "${_Symbol_articleGroup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13176", tween: [ "style", "${_lvpool3Stack}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13123", tween: [ "style", "${_breakingAlert}", "left", '0px', { fromValue: '643px'}], position: 8251, duration: 500, easing: "easeOutCubic" },
            { id: "eid13128", tween: [ "style", "${_breakingAlert}", "left", '643px', { fromValue: '0px'}], position: 11951, duration: 304, easing: "easeOutCubic" },
            { id: "eid13058", tween: [ "style", "${_nats3StackTop}", "top", '1760px', { fromValue: '781px'}], position: 4651, duration: 307 },
            { id: "eid13062", tween: [ "style", "${_nats3StackTop}", "top", '780px', { fromValue: '1760px'}], position: 4996, duration: 307 },
            { id: "eid13488", tween: [ "style", "${_mainNav_symbol}", "left", '-135px', { fromValue: '-135px'}], position: 0, duration: 0 },
            { id: "eid13383", tween: [ "style", "${_Symbol_articleVideoGroup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13124", tween: [ "style", "${_breakingAlert}", "opacity", '1', { fromValue: '0'}], position: 8251, duration: 500, easing: "easeOutCubic" },
            { id: "eid13129", tween: [ "style", "${_breakingAlert}", "opacity", '0', { fromValue: '1'}], position: 11951, duration: 304, easing: "easeOutCubic" },
            { id: "eid13057", tween: [ "style", "${_nats3StackTop}", "left", '4px', { fromValue: '2px'}], position: 4651, duration: 307 },
            { id: "eid13061", tween: [ "style", "${_nats3StackTop}", "left", '2px', { fromValue: '4px'}], position: 4996, duration: 307 },
            { id: "eid13220", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_livFull_symbol}', [] ], ""], position: 0 },
            { id: "eid13227", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_natsFull_symbol}', [] ], ""], position: 0 },
            { id: "eid13253", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mainNav_symbol}', [] ], ""], position: 0 },
            { id: "eid13364", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Symbol_articleGroup}', [] ], ""], position: 0 },
            { id: "eid13382", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Symbol_articleVideoGroup}', [] ], ""], position: 0 }         ]
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
      align: 'center',
      id: 'myText',
      text: 'First Panel<br>(more stuff goes here)',
      opacity: 0.5,
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "height", '523px'],
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
      userClass: 'custom-button',
      rect: ['0px','0px','33px','33px','auto','auto'],
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
            ["style", "font-weight", '600'],
            ["style", "height", '22px'],
            ["subproperty", "textShadow.color", 'rgb(255,255,255)'],
            ["style", "width", '31px'],
            ["style", "font-family", 'source-sans-pro, sans-serif']
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
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '33px'],
            ["color", "border-color", 'rgba(0, 0, 0, 0.386719)'],
            ["style", "left", '0px'],
            ["style", "border-width", '1px']
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
      opacity: 0.5,
      id: 'myText',
      text: 'Second Panel<br>(more stuff goes here)',
      align: 'center',
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
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '100%'],
            ["style", "max-width", 'none']
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
         "${_myTextCopy2}": [
            ["style", "top", '128px'],
            ["style", "width", '100%'],
            ["style", "font-weight", '200'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["color", "color", 'rgba(10,10,10,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '30px']
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
      opacity: 0.5,
      id: 'myText',
      text: 'Third Panel<br>(more stuff goes here)',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "width", '100%'],
            ["style", "font-weight", '200']
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
      rect: ['0px','119px','1200','1100','auto','auto'],
      c: [
      {
         id: 'Baseball',
         type: 'image',
         rect: ['0px','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball.png','0px','0px']
      },
      {
         rect: ['0','54px','600px','550px','auto','auto'],
         overflow: 'hidden',
         id: 'Baseball-normal-color',
         type: 'image',
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
            ["style", "height", '1215px'],
            ["style", "width", '600px']
         ],
         "${_natsGameGroup}": [
            ["style", "top", '117px'],
            ["style", "position", 'absolute'],
            ["style", "left", '0px'],
            ["style", "z-index", '50'],
            ["style", "width", '600px']
         ],
         "${_natsGameGroupCopy}": [
            ["style", "top", '36px'],
            ["style", "position", 'absolute'],
            ["style", "left", '0px'],
            ["style", "z-index", '50'],
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
         "${_RectangleCopy7}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
         ],
         "${_Rectangle}": [
            ["style", "top", '4px'],
            ["style", "height", '160px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
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
         "${_liverpoolGameGroup}": [
            ["style", "top", '0px'],
            ["style", "position", 'absolute'],
            ["transform", "scaleX", '0.99333'],
            ["style", "left", '-2px'],
            ["style", "z-index", '25'],
            ["style", "width", '600px']
         ],
         "${_Baseball}": [
            ["style", "top", '54px'],
            ["style", "left", '0px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
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
            { id: "eid13495", tween: [ "style", "${_liverpoolGameGroup}", "width", '604px', { fromValue: '600px'}], position: 11900, duration: 1516 },
            { id: "eid12947", tween: [ "style", "${_liverpoolGameGroup}", "top", '162px', { fromValue: '0px'}], position: 500, duration: 1000, easing: "easeOutCubic" },
            { id: "eid12941", tween: [ "style", "${_liverpoolGameGroup}", "top", '-391px', { fromValue: '162px'}], position: 1500, duration: 600, easing: "easeOutCubic" },
            { id: "eid12942", tween: [ "style", "${_liverpoolGameGroup}", "top", '83px', { fromValue: '-391px'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13196", tween: [ "style", "${_liverpoolGameGroup}", "top", '-548px', { fromValue: '83px'}], position: 2667, duration: 500, easing: "easeOutCubic" },
            { id: "eid13197", tween: [ "style", "${_liverpoolGameGroup}", "top", '0px', { fromValue: '-548px'}], position: 3167, duration: 500, easing: "easeOutCubic" },
            { id: "eid13226", tween: [ "style", "${_RectangleCopy7}", "opacity", '0', { fromValue: '0'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12946", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '50', { fromValue: '25'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12940", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '35', { fromValue: '50'}], position: 1600, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13494", tween: [ "transform", "${_liverpoolGameGroup}", "scaleX", '0.99333', { fromValue: '0.99333'}], position: 13416, duration: 0 },
            { id: "eid13167", tween: [ "style", "${_natsGameGroupCopy}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13234", tween: [ "style", "${_RectangleFullCard}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13076", tween: [ "style", "${_RectangleFullCard}", "display", 'block', { fromValue: 'none'}], position: 3600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13165", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '25', { fromValue: '50'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13191", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '50', { fromValue: '25'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13204", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '35', { fromValue: '50'}], position: 2600, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13173", tween: [ "style", "${_RectangleFullCardCopy2}", "display", 'block', { fromValue: 'block'}], position: 3800, duration: 0, easing: "easeOutCubic" },
            { id: "eid13501", tween: [ "style", "${_nats-nc}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13502", tween: [ "style", "${_nats-nc}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 1000 },
            { id: "eid13168", tween: [ "style", "${_RectangleCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13171", tween: [ "style", "${_RectangleCopy3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13228", tween: [ "style", "${_RectangleCopy3}", "display", 'none', { fromValue: 'block'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12945", tween: [ "style", "${_natsGameGroup}", "z-index", '25', { fromValue: '50'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13203", tween: [ "style", "${_natsGameGroup}", "z-index", '50', { fromValue: '25'}], position: 2667, duration: 500, easing: "easeOutCubic" },
            { id: "eid13496", tween: [ "style", "${_liverpoolGameGroup}", "left", '-2px', { fromValue: '-2px'}], position: 13416, duration: 0 },
            { id: "eid13160", tween: [ "style", "${_natsGameGroup}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13222", tween: [ "style", "${_RectangleCopy7}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13224", tween: [ "style", "${_RectangleCopy7}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13225", tween: [ "style", "${_RectangleCopy7}", "display", 'none', { fromValue: 'none'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13229", tween: [ "style", "${_RectangleCopy7}", "display", 'block', { fromValue: 'none'}], position: 3600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13172", tween: [ "style", "${_RectangleCopy3}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13113", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13219", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13209", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 3667, duration: 0, easing: "easeOutCubic" },
            { id: "eid13119", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 5900, duration: 0, easing: "easeOutCubic" },
            { id: "eid13162", tween: [ "style", "${_natsGameGroupCopy}", "top", '-598px', { fromValue: '36px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13163", tween: [ "style", "${_natsGameGroupCopy}", "top", '-47px', { fromValue: '-598px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13185", tween: [ "style", "${_natsGameGroupCopy}", "top", '120px', { fromValue: '-47px'}], position: 1500, duration: 1100, easing: "easeOutCubic" },
            { id: "eid13198", tween: [ "style", "${_natsGameGroupCopy}", "top", '-598px', { fromValue: '120px'}], position: 2600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13199", tween: [ "style", "${_natsGameGroupCopy}", "top", '38px', { fromValue: '-598px'}], position: 3100, duration: 500, easing: "easeOutCubic" },
            { id: "eid12953", tween: [ "style", "${_Baseball-normal-color}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13206", tween: [ "style", "${_Baseball-normal-color}", "opacity", '1', { fromValue: '0'}], position: 2600, duration: 1000 },
            { id: "eid12943", tween: [ "style", "${_natsGameGroup}", "top", '-598px', { fromValue: '117px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12944", tween: [ "style", "${_natsGameGroup}", "top", '33px', { fromValue: '-598px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13187", tween: [ "style", "${_natsGameGroup}", "top", '-441px', { fromValue: '33px'}], position: 1500, duration: 600, easing: "easeOutCubic" },
            { id: "eid13188", tween: [ "style", "${_natsGameGroup}", "top", '-47px', { fromValue: '-441px'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13195", tween: [ "style", "${_natsGameGroup}", "top", '120px', { fromValue: '-47px'}], position: 2667, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13231", tween: [ "style", "${_RectangleCopy8}", "display", 'block', { fromValue: 'none'}], position: 1200, duration: 0, easing: "easeOutCubic" },
            { id: "eid13232", tween: [ "style", "${_RectangleCopy8}", "display", 'none', { fromValue: 'block'}], position: 2600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13174", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13193", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 1000 },
            { id: "eid13207", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '0', { fromValue: '1'}], position: 2600, duration: 1000 }         ]
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
         "${_liverpool-full}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '0'],
            ["transform", "scaleY", '0'],
            ["style", "height", '1151px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-3px'],
            ["style", "width", '648px']
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
            { id: "eid13108", tween: [ "style", "${_liverpool-full}", "opacity", '1', { fromValue: '0'}], position: 133, duration: 430, easing: "easeOutCubic" },
            { id: "eid13107", tween: [ "style", "${_liverpool-full}", "opacity", '0', { fromValue: '1'}], position: 813, duration: 430, easing: "easeOutCubic" },
            { id: "eid13106", tween: [ "style", "${_liverpool-full}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13104", tween: [ "style", "${_liverpool-full}", "display", 'block', { fromValue: 'block'}], position: 813, duration: 0, easing: "easeOutCubic" },
            { id: "eid13105", tween: [ "style", "${_liverpool-full}", "display", 'none', { fromValue: 'block'}], position: 1110, duration: 0, easing: "easeOutCubic" }         ]
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
      rect: ['0px','-1px','639px','1134px','auto','auto'],
      id: 'baseball-full',
      type: 'image',
      display: 'none',
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
            ["style", "height", '1134px'],
            ["style", "display", 'none'],
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
      id: 'nonFullCards',
      type: 'group',
      rect: ['-2px','44px','600','4215','auto','auto'],
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
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_article-assetless-card}": [
            ["style", "top", '2454px'],
            ["style", "left", '0px']
         ],
         "${_article-card}": [
            ["style", "top", '725px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_article-video-card}": [
            ["style", "top", '-41px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '4256px'],
            ["style", "width", '620px']
         ],
         "${_nonFullCards}": [
            ["style", "top", '41px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '10px']
         ],
         "${_video-card}": [
            ["style", "top", '3022px'],
            ["style", "left", '0px'],
            ["style", "overflow", 'hidden']
         ],
         "${_article-gallery-card}": [
            ["style", "top", '1593px'],
            ["style", "left", '0px']
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
            "34ArticleFlip": 1600,
            "34ArticleFlipBack": 2100
         },
         timeline: [
            { id: "eid12891", tween: [ "style", "${_article-video-card}", "top", '-41px', { fromValue: '-41px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13029", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13030", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13035", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13036", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13041", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13042", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid13499", tween: [ "style", "${_nonFullCards}", "left", '10px', { fromValue: '10px'}], position: 13416, duration: 0 },
            { id: "eid13052", tween: [ "style", "${_nonFullCards}", "top", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid12890", tween: [ "style", "${_article-3-4-card}", "top", '3026px', { fromValue: '3026px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13025", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13026", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13031", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13032", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13037", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13038", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid13027", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13028", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13033", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13034", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13039", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13040", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12889", tween: [ "style", "${_article-card}", "top", '725px', { fromValue: '725px'}], position: 0, duration: 0, easing: "easeOutCubic" }         ]
      }
   }
},
"mainNav_symbol": {
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
      rect: ['138px','0px','620px','1064px','auto','auto'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "height", '1064px'],
            ["style", "opacity", '0'],
            ["style", "left", '273px'],
            ["style", "width", '486px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1064px'],
            ["style", "width", '136px']
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
            { id: "eid13251", tween: [ "style", "${_nav-main2}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0 },
            { id: "eid13247", tween: [ "style", "${_nav-main2}", "display", 'block', { fromValue: 'block'}], position: 767, duration: 0 },
            { id: "eid13248", tween: [ "style", "${_nav-main2}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0 },
            { id: "eid13254", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13255", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 267, duration: 0, easing: "easeOutCubic" },
            { id: "eid13256", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1167, duration: 0, easing: "easeOutCubic" },
            { id: "eid13262", tween: [ "style", "${_Rectangle}", "left", '273px', { fromValue: '273px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13263", tween: [ "style", "${_Rectangle}", "width", '486px', { fromValue: '486px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13250", tween: [ "style", "${_nav-main2}", "left", '136px', { fromValue: '4px'}], position: 267, duration: 400, easing: "easeOutCubic" },
            { id: "eid13246", tween: [ "style", "${_nav-main2}", "left", '0px', { fromValue: '136px'}], position: 767, duration: 400, easing: "easeOutCubic" }         ]
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
         rect: ['0%','-0.1%','640px','6166px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-card-full.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_article-card-fullCopy}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0%'],
            ["style", "top", '-0.06%'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "z-index", '60'],
            ["style", "display", 'block']
         ],
         "${_articleGroup}": [
            ["transform", "scaleX", '0.5'],
            ["style", "left", '-147px'],
            ["style", "overflow-y", 'auto'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["transform", "scaleY", '0.5'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'block'],
            ["style", "top", '-276px'],
            ["style", "z-index", '60'],
            ["style", "height", '1105px']
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
            { id: "eid12489", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12490", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13267", tween: [ "style", "${_articleGroup}", "display", 'none', { fromValue: 'block'}], position: 1327, duration: 0, easing: "easeOutCubic" },
            { id: "eid12499", tween: [ "transform", "${_articleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12498", tween: [ "transform", "${_articleGroup}", "scaleY", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12493", tween: [ "style", "${_articleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12491", tween: [ "style", "${_articleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12450", tween: [ "style", "${_article-card-fullCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12473", tween: [ "style", "${_article-card-fullCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12507", tween: [ "style", "${_articleGroup}", "top", '-143px', { fromValue: '-276px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12509", tween: [ "style", "${_articleGroup}", "top", '-276px', { fromValue: '-143px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12452", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12474", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12564", tween: [ "style", "${_article-card-fullCopy}", "height", '6195px', { fromValue: '3331px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12565", tween: [ "style", "${_article-card-fullCopy}", "height", '3331px', { fromValue: '6195px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13373", tween: [ "style", "${_articleGroup}", "left", '-147px', { fromValue: '-147px'}], position: 827, duration: 0, easing: "easeOutCubic" },
            { id: "eid12496", tween: [ "transform", "${_articleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12497", tween: [ "transform", "${_articleGroup}", "scaleX", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" }         ]
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
         rect: ['0px','0px','640px','6166px','auto','auto'],
         fill: ['rgba(0,0,0,0)','cardflow/article-card-full.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_articleVideoGroup}": [
            ["transform", "scaleX", '0.5'],
            ["style", "left", '-147px'],
            ["style", "overflow-y", 'auto'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.5'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px'],
            ["style", "top", '86px'],
            ["style", "z-index", '60'],
            ["style", "-webkit-overflow-scrolling", 'touch']
         ],
         "${_videoArticleCardFull}": [
            ["style", "top", '0px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.5']
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
         duration: 933,
         autoPlay: true,
         labels: {
            "VideoArticleFlip": 106,
            "VideoArticleFlipBack": 606
         },
         timeline: [
            { id: "eid13400", tween: [ "style", "${_videoArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13401", tween: [ "style", "${_videoArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13390", tween: [ "style", "${_articleVideoGroup}", "left", '-147px', { fromValue: '-147px'}], position: 433, duration: 0, easing: "easeOutCubic" },
            { id: "eid13386", tween: [ "transform", "${_articleVideoGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13387", tween: [ "transform", "${_articleVideoGroup}", "scaleY", '0', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13405", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13406", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '0', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13388", tween: [ "transform", "${_articleVideoGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13389", tween: [ "transform", "${_articleVideoGroup}", "scaleX", '0', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13391", tween: [ "style", "${_articleVideoGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13392", tween: [ "style", "${_articleVideoGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13393", tween: [ "style", "${_articleVideoGroup}", "display", 'block', { fromValue: 'block'}], position: 106, duration: 0, easing: "easeOutCubic" },
            { id: "eid13394", tween: [ "style", "${_articleVideoGroup}", "display", 'block', { fromValue: 'block'}], position: 606, duration: 0, easing: "easeOutCubic" },
            { id: "eid13395", tween: [ "style", "${_articleVideoGroup}", "display", 'none', { fromValue: 'block'}], position: 933, duration: 0, easing: "easeOutCubic" },
            { id: "eid13396", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13397", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '0', { fromValue: '1'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13402", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 106, duration: 0, easing: "easeOutCubic" },
            { id: "eid13403", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 606, duration: 0, easing: "easeOutCubic" },
            { id: "eid13404", tween: [ "style", "${_videoArticleCardFull}", "display", 'none', { fromValue: 'block'}], position: 933, duration: 0, easing: "easeOutCubic" },
            { id: "eid13384", tween: [ "style", "${_articleVideoGroup}", "top", '-143px', { fromValue: '86px'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13385", tween: [ "style", "${_articleVideoGroup}", "top", '86px', { fromValue: '-143px'}], position: 606, duration: 327, easing: "easeOutCubic" },
            { id: "eid13398", tween: [ "style", "${_videoArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 106, duration: 327, easing: "easeOutCubic" },
            { id: "eid13399", tween: [ "style", "${_videoArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 606, duration: 327, easing: "easeOutCubic" }         ]
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
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.5'],
            ["style", "z-index", '60'],
            ["transform", "scaleX", '0.5'],
            ["style", "height", '1105px'],
            ["style", "left", '-147px'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            { id: "eid13460", tween: [ "transform", "${_assetlessArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 533, duration: 327, easing: "easeOutCubic" },
            { id: "eid13461", tween: [ "transform", "${_assetlessArticleGroup}", "scaleY", '0', { fromValue: '1'}], position: 1033, duration: 327, easing: "easeOutCubic" },
            { id: "eid13466", tween: [ "style", "${_assetlessArticleGroup}", "left", '-147px', { fromValue: '-147px'}], position: 860, duration: 0, easing: "easeOutCubic" },
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
      rect: ['0px','0px','620px','1064px','auto','auto'],
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
         "${_loader}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '1064px'],
            ["style", "width", '620px']
         ],
         "${_logo-usat}": [
            ["style", "top", '424px'],
            ["style", "opacity", '1'],
            ["style", "left", '101px']
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
            { id: "eid13486", tween: [ "color", "${_loader}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid13487", tween: [ "style", "${_logo-usat}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000 },
            { id: "eid13482", tween: [ "style", "${_loader}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }         ]
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
