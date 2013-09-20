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
            rect:['0px','19px','640px','1065px','auto','auto'],
            clip:['rect(0px 640px 1061.388671875px 0px)'],
            transform:[[],[],[],['1','1.03714']],
            c:[
            {
               id:'Group4',
               type:'group',
               rect:['18px','13px','600px','2729px','auto','auto'],
               clip:['rect(-175.99354553222656px 600px 3884.3046875px 0px)'],
               transform:[],
               c:[
               {
                  id:'myCards_symbol',
                  type:'rect',
                  rect:['2','4','auto','auto','auto','auto']
               },
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
                  id:'_34ArticleGroup',
                  display:'none',
                  type:'group',
                  rect:['-20px','602px','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'_34ArticleCardFull',
                     display:'none',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               },
               {
                  id:'articleGroup',
                  display:'none',
                  type:'group',
                  rect:['-20','602','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'article-card-fullCopy',
                     display:'none',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               },
               {
                  id:'videoArticleGroup',
                  display:'none',
                  type:'group',
                  rect:['-20','602','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'videoArticleCardFull',
                     display:'none',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               },
               {
                  id:'galleryArticleGroup',
                  type:'group',
                  rect:['-20','1348px','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'galleryArticleCardFull',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               },
               {
                  id:'assetlessArticleGroup',
                  type:'group',
                  rect:['-20','1348px','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'assetlessArticleCardFull',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               },
               {
                  id:'videoGroup',
                  type:'group',
                  rect:['-20','1348px','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'videoCardFull',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               },
               {
                  id:'nonFullCards',
                  type:'group',
                  rect:['0px','780px','600','4215','auto','auto'],
                  c:[
                  {
                     id:'video-card',
                     type:'image',
                     rect:['0px','3022px','600px','655px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/video-card.png','0px','0px']
                  },
                  {
                     id:'article-assetless-card',
                     type:'image',
                     rect:['0px','2454px','600px','548px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-assetless-card.png','0px','0px']
                  },
                  {
                     id:'article-gallery-card',
                     type:'image',
                     rect:['0px','1593px','600px','848px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-gallery-card.png','0px','0px']
                  },
                  {
                     id:'article-video-card',
                     type:'image',
                     rect:['0px','-32px','600px','736px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-video-card.png','0px','0px']
                  },
                  {
                     id:'article-3-4-card',
                     type:'image',
                     rect:['0px','3025px','600px','987px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-3-4-card.png','0px','0px']
                  },
                  {
                     id:'article-card',
                     type:'image',
                     rect:['0px','725px','600px','848px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card.png','0px','0px']
                  }]
               }]
            }]
         },
         {
            id:'baseball-full',
            display:'none',
            type:'image',
            rect:['0px','-1px','639px','1134px','auto','auto'],
            fill:["rgba(0,0,0,0)",'cardflow/baseball-full.png','0px','0px']
         },
         {
            id:'liverpool-full',
            display:'none',
            type:'image',
            rect:['-3px','0px','648px','1151px','auto','auto'],
            fill:["rgba(0,0,0,0)",'cardflow/liverpool-full.png','0px','0px']
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
            id:'leftSwipeEle',
            type:'rect',
            rect:['0px','47px','130px','973px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'rightSwipeEle',
            type:'rect',
            rect:['510px','45px','130px','973px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['0.98','0.98']]
         },
         {
            id:'offEdgeNav',
            type:'rect',
            rect:['-538px','0px','534px','1064px','auto','auto'],
            fill:["rgba(89,89,89,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'botPanelGroup',
            type:'group',
            rect:['1','1064','640','111','auto','auto'],
            c:[
            {
               id:'botPanel',
               type:'rect',
               rect:['0px','0px','640px','111px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'topPanelGroup',
            type:'group',
            rect:['1','-111','640','111','auto','auto'],
            c:[
            {
               id:'topPanel',
               type:'rect',
               rect:['0px','0px','640px','111px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         }],
         symbolInstances: [
         {
            id:'myCards_symbol',
            symbolName:'myCards_symbol'
         }
         ]
      },
   states: {
      "Base State": {
         "${__34ArticleCardFull}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '-22px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "z-index", '60'],
            ["style", "height", '3331px']
         ],
         "${_Baseball-normal-colorCopy}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_galleryArticleGroup}": [
            ["style", "top", '1348px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'block'],
            ["style", "height", '1105px'],
            ["style", "z-index", '60'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '0.5']
         ],
         "${_lvpool3StackRect}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '160px']
         ],
         "${_article-gallery-card}": [
            ["style", "top", '1593px'],
            ["style", "left", '0px']
         ],
         "${__34ArticleGroup}": [
            ["style", "top", '602px'],
            ["style", "height", '1105px'],
            ["transform", "scaleY", '0.5'],
            ["style", "position", 'absolute'],
            ["transform", "scaleX", '0.5'],
            ["style", "z-index", '60'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'none']
         ],
         "${_article-card}": [
            ["style", "top", '725px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_Group4}": [
            ["style", "top", '21px'],
            ["transform", "scaleY", '1.005'],
            ["style", "height", '4110px'],
            ["style", "left", '18px'],
            ["style", "clip", [-0.22967222332954407,600.036376953125,7134.64404296875,0.036376953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_articleWrap}": [
            ["style", "overflow", 'hidden'],
            ["style", "height", '1064px'],
            ["style", "opacity", '0'],
            ["style", "left", '640px'],
            ["style", "display", 'block']
         ],
         "${_BaseballCopy}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
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
         "${_nats3StackBot}": [
            ["style", "top", '704px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "z-index", '53'],
            ["style", "width", '600px']
         ],
         "${_assetlessArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.5']
         ],
         "${_LiverpoolCopy}": [
            ["style", "left", '1px'],
            ["style", "top", '6px']
         ],
         "${_coverFlow}": [
            ["style", "opacity", '1'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "width", '640px'],
            ["style", "overflow-y", 'auto'],
            ["transform", "scaleY", '1.03714'],
            ["style", "height", '1065px'],
            ["style", "left", '-10px'],
            ["style", "clip", [0,640,1061.388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "top", '10px']
         ],
         "${_assetlessArticleGroup}": [
            ["style", "top", '1348px'],
            ["transform", "scaleY", '0.5'],
            ["style", "height", '1105px'],
            ["transform", "scaleX", '0.5'],
            ["style", "z-index", '60'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'block']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '151px'],
            ["style", "height", '4px'],
            ["color", "background-color", 'rgba(209,33,33,0.8672)'],
            ["style", "left", '0px'],
            ["style", "width", '0px']
         ],
         "${_offEdgeNav}": [
            ["color", "background-color", 'rgba(89,89,89,1.00)'],
            ["style", "display", 'block'],
            ["style", "overflow", 'visible'],
            ["style", "height", '1064px'],
            ["style", "top", '-1px'],
            ["style", "left", '-540px'],
            ["style", "width", '534px']
         ],
         "${_article-card-fullCopy}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '-22px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "z-index", '60'],
            ["style", "display", 'none']
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
         "${_botPanelGroup}": [
            ["style", "top", '1064px'],
            ["style", "display", 'block']
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
            ["style", "height", '43px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "font-style", 'normal'],
            ["style", "width", '514px']
         ],
         "${_collapseEleCopy3}": [
            ["style", "top", '505px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_video-card}": [
            ["style", "top", '3022px'],
            ["style", "left", '0px']
         ],
         "${_collapseEleCopy}": [
            ["style", "top", '504px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_videoCardFull}": [
            ["style", "top", '-22px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.5']
         ],
         "${_leftSwipeEle}": [
            ["style", "top", '47px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '973px'],
            ["style", "opacity", '0'],
            ["style", "left", '0'],
            ["style", "width", '130px']
         ],
         "${_nonFullCards}": [
            ["style", "top", '777px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '2px']
         ],
         "${_article-video-card}": [
            ["style", "top", '-32px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_nats3StackTop}": [
            ["style", "top", '781px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '2px'],
            ["style", "z-index", '55'],
            ["style", "width", '600px']
         ],
         "${_article-3-4-card}": [
            ["style", "top", '3025px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_videoArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.5']
         ],
         "${_article-assetless-card}": [
            ["style", "top", '2454px'],
            ["style", "left", '0px']
         ],
         "${_galleryArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.5']
         ],
         "${_topPanel}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '111px']
         ],
         "${_myText}": [
            ["style", "text-align", '']
         ],
         "${_videoArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "height", '1105px'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "z-index", '60'],
            ["style", "display", 'none']
         ],
         "${_topPanelGroup}": [
            ["style", "top", '-111px'],
            ["style", "display", 'block']
         ],
         "${_articleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'none'],
            ["style", "height", '1105px'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "z-index", '60'],
            ["transform", "scaleX", '0.5']
         ],
         "${_Baseball-normal-colorCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_collapseEleCopy4}": [
            ["style", "top", '456px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_videoGroup}": [
            ["style", "top", '1348px'],
            ["transform", "scaleY", '0.5'],
            ["style", "height", '1105px'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "z-index", '60'],
            ["style", "display", 'block']
         ],
         "${_botPanel}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '111px']
         ],
         "${_Text2}": [
            ["style", "top", '22px'],
            ["style", "height", '14px'],
            ["color", "color", 'rgba(32,32,32,1.00)']
         ],
         "${_lvpool3Stack}": [
            ["style", "top", '666px'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "z-index", '50'],
            ["style", "width", '600px']
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
         ],
         "${_article-card-full}": [
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "z-index", '60'],
            ["style", "overflow", 'visible']
         ],
         "${_systemBar}": [
            ["style", "left", '682px'],
            ["style", "display", 'block']
         ],
         "${_nats3StackTopRect}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_rightSwipeEle}": [
            ["style", "top", '45px'],
            ["style", "height", '973px'],
            ["transform", "scaleY", '0.98'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.98'],
            ["style", "opacity", '0'],
            ["style", "right", '0'],
            ["style", "width", '130px']
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
         duration: 17200,
         autoPlay: true,
         labels: {
            "Start": 0,
            "ArticleFlip": 500,
            "ArticleFlipBack": 1000,
            "34ArticleFlip": 1600,
            "34ArticleFlipBack": 2100,
            "videoArticleFlip": 2700,
            "videoArticleFlipBack": 3200,
            "botPanelUp": 6000,
            "topPanelDown": 6600,
            "botPanelDown": 7200,
            "topPanelUp": 7800,
            "myCardExtend": 8400,
            "myCardCollapse": 8745,
            "natsFullExpand": 9320,
            "natsFullClose": 10000,
            "livFullExpand": 10581,
            "livFullClose": 11261,
            "breakingAlertIn": 12000,
            "breakingAlertOut": 15700,
            "navIn": 16200,
            "navOut": 16700
         },
         timeline: [
            { id: "eid12963", tween: [ "style", "${_topPanelGroup}", "top", '0px', { fromValue: '-111px'}], position: 6000, duration: 500, easing: "easeOutCubic" },
            { id: "eid12964", tween: [ "style", "${_topPanelGroup}", "top", '-111px', { fromValue: '0px'}], position: 7200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12450", tween: [ "style", "${_article-card-fullCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12473", tween: [ "style", "${_article-card-fullCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13178", tween: [ "style", "${_nats3StackBot}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12891", tween: [ "style", "${_article-video-card}", "top", '-32px', { fromValue: '-32px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13153", tween: [ "style", "${_offEdgeNav}", "display", 'block', { fromValue: 'none'}], position: 16200, duration: 0 },
            { id: "eid13154", tween: [ "style", "${_offEdgeNav}", "display", 'block', { fromValue: 'block'}], position: 16700, duration: 0 },
            { id: "eid13155", tween: [ "style", "${_offEdgeNav}", "display", 'block', { fromValue: 'block'}], position: 17100, duration: 0 },
            { id: "eid12652", tween: [ "style", "${__34ArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12653", tween: [ "style", "${__34ArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid13077", tween: [ "style", "${_baseball-full}", "display", 'block', { fromValue: 'none'}], position: 9320, duration: 0, easing: "easeOutCubic" },
            { id: "eid13092", tween: [ "style", "${_baseball-full}", "display", 'block', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13099", tween: [ "style", "${_baseball-full}", "display", 'none', { fromValue: 'block'}], position: 10430, duration: 0, easing: "easeOutCubic" },
            { id: "eid12493", tween: [ "style", "${_articleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12491", tween: [ "style", "${_articleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13144", tween: [ "color", "${_Rectangle2Copy}", "background-color", 'rgba(169,40,46,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(209,33,33,0.8672)'}], position: 12000, duration: 3500 },
            { id: "eid12507", tween: [ "style", "${_articleGroup}", "top", '2px', { fromValue: '602px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12509", tween: [ "style", "${_articleGroup}", "top", '602px', { fromValue: '2px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13124", tween: [ "style", "${_breakingAlert}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13129", tween: [ "style", "${_breakingAlert}", "opacity", '0', { fromValue: '1'}], position: 15700, duration: 304, easing: "easeOutCubic" },
            { id: "eid12648", tween: [ "transform", "${__34ArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12649", tween: [ "transform", "${__34ArticleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12865", tween: [ "style", "${_videoArticleGroup}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0, easing: "easeOutCubic" },
            { id: "eid12866", tween: [ "style", "${_videoArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 3200, duration: 0, easing: "easeOutCubic" },
            { id: "eid13044", tween: [ "style", "${_systemBar}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid12500", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12501", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid12861", tween: [ "transform", "${_videoArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12862", tween: [ "transform", "${_videoArticleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12664", tween: [ "transform", "${__34ArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12665", tween: [ "transform", "${__34ArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid13056", tween: [ "style", "${_nats3StackBot}", "top", '1187px', { fromValue: '704px'}], position: 8400, duration: 307 },
            { id: "eid13069", tween: [ "style", "${_nats3StackBot}", "top", '703px', { fromValue: '1187px'}], position: 8745, duration: 307 },
            { id: "eid13179", tween: [ "style", "${_nats3StackTop}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13183", tween: [ "style", "${_offEdgeNav}", "top", '-1px', { fromValue: '-1px'}], position: 4749, duration: 0, easing: "easeOutCubic" },
            { id: "eid13089", tween: [ "transform", "${_baseball-full}", "scaleX", '1', { fromValue: '0'}], position: 9320, duration: 430, easing: "easeOutCubic" },
            { id: "eid13096", tween: [ "transform", "${_baseball-full}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 430, easing: "easeOutCubic" },
            { id: "eid12656", tween: [ "transform", "${__34ArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12657", tween: [ "transform", "${__34ArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12889", tween: [ "style", "${_article-card}", "top", '725px', { fromValue: '725px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13046", tween: [ "style", "${_botPanelGroup}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid12890", tween: [ "style", "${_article-3-4-card}", "top", '3025px', { fromValue: '3025px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13029", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13030", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13035", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13036", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13041", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13042", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12867", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12868", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12654", tween: [ "style", "${__34ArticleGroup}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12655", tween: [ "style", "${__34ArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid12871", tween: [ "style", "${_videoArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12872", tween: [ "style", "${_videoArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid13157", tween: [ "style", "${_nats3StackBot}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid12873", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0, easing: "easeOutCubic" },
            { id: "eid12874", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 3200, duration: 0, easing: "easeOutCubic" },
            { id: "eid12489", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12490", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid12499", tween: [ "transform", "${_articleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12498", tween: [ "transform", "${_articleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12875", tween: [ "style", "${_videoArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12876", tween: [ "style", "${_videoArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12869", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12870", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12863", tween: [ "style", "${_videoArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12864", tween: [ "style", "${_videoArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid13055", tween: [ "style", "${_nats3StackBot}", "left", '4px', { fromValue: '2px'}], position: 8400, duration: 307 },
            { id: "eid13070", tween: [ "style", "${_nats3StackBot}", "left", '2px', { fromValue: '4px'}], position: 8745, duration: 307 },
            { id: "eid12452", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12474", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13108", tween: [ "style", "${_liverpool-full}", "opacity", '1', { fromValue: '0'}], position: 10581, duration: 430, easing: "easeOutCubic" },
            { id: "eid13107", tween: [ "style", "${_liverpool-full}", "opacity", '0', { fromValue: '1'}], position: 11261, duration: 430, easing: "easeOutCubic" },
            { id: "eid13123", tween: [ "style", "${_breakingAlert}", "left", '0px', { fromValue: '643px'}], position: 12000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13128", tween: [ "style", "${_breakingAlert}", "left", '643px', { fromValue: '0px'}], position: 15700, duration: 304, easing: "easeOutCubic" },
            { id: "eid12564", tween: [ "style", "${_article-card-fullCopy}", "height", '6195px', { fromValue: '3331px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12565", tween: [ "style", "${_article-card-fullCopy}", "height", '3331px', { fromValue: '6195px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12660", tween: [ "style", "${__34ArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12661", tween: [ "style", "${__34ArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12662", tween: [ "style", "${__34ArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12663", tween: [ "style", "${__34ArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12451", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12472", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12646", tween: [ "style", "${__34ArticleGroup}", "top", '2864px', { fromValue: '602px'}], position: 1600, duration: 40, easing: "easeOutCubic" },
            { id: "eid12691", tween: [ "style", "${__34ArticleGroup}", "top", '3306px', { fromValue: '2864px'}], position: 1640, duration: 60, easing: "easeOutCubic" },
            { id: "eid12690", tween: [ "style", "${__34ArticleGroup}", "top", '2px', { fromValue: '3306px'}], position: 1700, duration: 227, easing: "easeOutCubic" },
            { id: "eid12647", tween: [ "style", "${__34ArticleGroup}", "top", '602px', { fromValue: '2px'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid13158", tween: [ "style", "${_nats3StackTop}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13027", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13028", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13033", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13034", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13039", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13040", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12956", tween: [ "style", "${_botPanelGroup}", "top", '953px', { fromValue: '1064px'}], position: 6000, duration: 500, easing: "easeOutCubic" },
            { id: "eid12958", tween: [ "style", "${_botPanelGroup}", "top", '1064px', { fromValue: '953px'}], position: 7200, duration: 500, easing: "easeOutCubic" },
            { id: "eid13110", tween: [ "transform", "${_liverpool-full}", "scaleY", '1', { fromValue: '0'}], position: 10581, duration: 430, easing: "easeOutCubic" },
            { id: "eid13109", tween: [ "transform", "${_liverpool-full}", "scaleY", '0', { fromValue: '1'}], position: 11261, duration: 430, easing: "easeOutCubic" },
            { id: "eid13106", tween: [ "style", "${_liverpool-full}", "display", 'block', { fromValue: 'none'}], position: 10581, duration: 0, easing: "easeOutCubic" },
            { id: "eid13104", tween: [ "style", "${_liverpool-full}", "display", 'block', { fromValue: 'block'}], position: 11261, duration: 0, easing: "easeOutCubic" },
            { id: "eid13105", tween: [ "style", "${_liverpool-full}", "display", 'none', { fromValue: 'block'}], position: 11691, duration: 0, easing: "easeOutCubic" },
            { id: "eid13052", tween: [ "style", "${_nonFullCards}", "top", '777px', { fromValue: '777px'}], position: 0, duration: 0 },
            { id: "eid13057", tween: [ "style", "${_nats3StackTop}", "left", '4px', { fromValue: '2px'}], position: 8400, duration: 307 },
            { id: "eid13061", tween: [ "style", "${_nats3StackTop}", "left", '2px', { fromValue: '4px'}], position: 8745, duration: 307 },
            { id: "eid13045", tween: [ "style", "${_topPanelGroup}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid12496", tween: [ "transform", "${_articleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12497", tween: [ "transform", "${_articleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13090", tween: [ "transform", "${_baseball-full}", "scaleY", '1', { fromValue: '0'}], position: 9320, duration: 430, easing: "easeOutCubic" },
            { id: "eid13097", tween: [ "transform", "${_baseball-full}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 430, easing: "easeOutCubic" },
            { id: "eid13182", tween: [ "style", "${_offEdgeNav}", "left", '-538px', { fromValue: '-540px'}], position: 4749, duration: 11451, easing: "easeOutCubic" },
            { id: "eid13149", tween: [ "style", "${_offEdgeNav}", "left", '-4px', { fromValue: '-538px'}], position: 16200, duration: 300 },
            { id: "eid13151", tween: [ "style", "${_offEdgeNav}", "left", '-538px', { fromValue: '-4px'}], position: 16700, duration: 400 },
            { id: "eid13120", tween: [ "style", "${_breakingAlert}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13121", tween: [ "style", "${_breakingAlert}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13125", tween: [ "style", "${_breakingAlert}", "display", 'block', { fromValue: 'block'}], position: 15700, duration: 0, easing: "easeOutCubic" },
            { id: "eid13156", tween: [ "style", "${_breakingAlert}", "display", 'none', { fromValue: 'block'}], position: 16004, duration: 0 },
            { id: "eid12859", tween: [ "transform", "${_videoArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12860", tween: [ "transform", "${_videoArticleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid13091", tween: [ "style", "${_baseball-full}", "opacity", '1', { fromValue: '0'}], position: 9320, duration: 430, easing: "easeOutCubic" },
            { id: "eid13098", tween: [ "style", "${_baseball-full}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 430, easing: "easeOutCubic" },
            { id: "eid12650", tween: [ "transform", "${__34ArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12651", tween: [ "transform", "${__34ArticleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12658", tween: [ "style", "${__34ArticleCardFull}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12659", tween: [ "style", "${__34ArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid13058", tween: [ "style", "${_nats3StackTop}", "top", '1760px', { fromValue: '781px'}], position: 8400, duration: 307 },
            { id: "eid13062", tween: [ "style", "${_nats3StackTop}", "top", '780px', { fromValue: '1760px'}], position: 8745, duration: 307 },
            { id: "eid12855", tween: [ "style", "${_videoArticleGroup}", "top", '-196px', { fromValue: '602px'}], position: 2700, duration: 40, easing: "easeOutCubic" },
            { id: "eid12856", tween: [ "style", "${_videoArticleGroup}", "top", '3306px', { fromValue: '-196px'}], position: 2740, duration: 60, easing: "easeOutCubic" },
            { id: "eid12857", tween: [ "style", "${_videoArticleGroup}", "top", '2px', { fromValue: '3306px'}], position: 2800, duration: 227, easing: "easeOutCubic" },
            { id: "eid12858", tween: [ "style", "${_videoArticleGroup}", "top", '602px', { fromValue: '2px'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid13043", tween: [ "style", "${_articleWrap}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid13112", tween: [ "transform", "${_liverpool-full}", "scaleX", '1', { fromValue: '0'}], position: 10581, duration: 430, easing: "easeOutCubic" },
            { id: "eid13111", tween: [ "transform", "${_liverpool-full}", "scaleX", '0', { fromValue: '1'}], position: 11261, duration: 430, easing: "easeOutCubic" },
            { id: "eid13146", tween: [ "style", "${_Rectangle2Copy}", "width", '641px', { fromValue: '0px'}], position: 12583, duration: 2917 },
            { id: "eid13025", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13026", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13031", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13032", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13037", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13038", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid13176", tween: [ "style", "${_lvpool3Stack}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12429", tween: [ "style", "${_article-card-full}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12428", tween: [ "style", "${_article-card-full}", "display", 'none', { fromValue: 'block'}], position: 400, duration: 0, easing: "easeOutCubic" }         ]
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
         rect: ['0px','28.6%','31px','22px','auto','auto'],
         font: ['source-sans-pro, sans-serif',14,'rgba(69,69,69,1.00)','600','none','normal'],
         align: 'center',
         id: 'btnLabel',
         text: '1',
         textShadow: ['rgba(255,255,255,1.00)',0,1,0],
         type: 'text'
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
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["style", "width", '31px'],
            ["subproperty", "textShadow.color", 'rgb(255,255,255)']
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
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal'],
      type: 'text',
      text: 'Second Panel<br>(more stuff goes here)',
      id: 'myText',
      opacity: 0.5,
      align: 'center',
      rect: ['0px','128px','100%','auto','auto','auto']
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
      font: ['source-sans-pro, sans-serif',30,'rgba(10,10,10,1.00)','200','none','normal'],
      type: 'text',
      text: 'Third Panel<br>(more stuff goes here)',
      id: 'myText',
      opacity: 0.5,
      align: 'center',
      rect: ['0px','118px','100%','auto','auto','auto']
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
   resizeInstances: false,
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
         rect: ['1px','6px','600px','550px','auto','auto'],
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
         rect: ['1px','54px','600px','550px','auto','auto'],
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
         id: 'RectangleCopy3',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
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
         rect: ['1px','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball.png','0px','0px']
      },
      {
         id: 'Baseball-normal-color',
         type: 'image',
         rect: ['0','54px','600px','550px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/Baseball-normal-color.png','0px','0px']
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
         "${symbolSelector}": [
            ["style", "height", '1217px'],
            ["style", "width", '601px']
         ],
         "${_Baseball}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
         "${_natsGameGroup}": [
            ["style", "top", '117px'],
            ["style", "position", 'absolute'],
            ["style", "left", '0px'],
            ["style", "z-index", '50'],
            ["style", "width", '600px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
         ],
         "${_Baseball-normal-color}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_Liverpool}": [
            ["style", "left", '1px'],
            ["style", "top", '6px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
         ],
         "${_natsGameGroupCopy}": [
            ["style", "top", '36px'],
            ["style", "position", 'absolute'],
            ["style", "left", '0px'],
            ["style", "z-index", '50'],
            ["style", "width", '600px']
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
         "${_Rectangle}": [
            ["style", "top", '4px'],
            ["style", "height", '160px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'block']
         ],
         "${_liverpoolGameGroup}": [
            ["style", "top", '0px'],
            ["style", "position", 'absolute'],
            ["style", "left", '0px'],
            ["style", "z-index", '25'],
            ["style", "width", '600px']
         ],
         "${_BaseballCopy3}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11900,
         autoPlay: true,
         labels: {
            "myCardsFlip1": 500,
            "myCardsFlip2": 1600
         },
         timeline: [
            { id: "eid13115", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13071", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13074", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'block'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13075", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid13159", tween: [ "style", "${_liverpoolGameGroup}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid12947", tween: [ "style", "${_liverpoolGameGroup}", "top", '162px', { fromValue: '0px'}], position: 500, duration: 1000, easing: "easeOutCubic" },
            { id: "eid12941", tween: [ "style", "${_liverpoolGameGroup}", "top", '-391px', { fromValue: '162px'}], position: 1500, duration: 600, easing: "easeOutCubic" },
            { id: "eid12942", tween: [ "style", "${_liverpoolGameGroup}", "top", '83px', { fromValue: '-391px'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13174", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13193", tween: [ "style", "${_Baseball-normal-colorCopy3}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 1000 },
            { id: "eid12946", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '50', { fromValue: '25'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12940", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '35', { fromValue: '50'}], position: 1600, duration: 1000, easing: "easeOutCubic" },
            { id: "eid13167", tween: [ "style", "${_natsGameGroupCopy}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13076", tween: [ "style", "${_RectangleFullCard}", "display", 'block', { fromValue: 'block'}], position: 3800, duration: 0, easing: "easeOutCubic" },
            { id: "eid13165", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '25', { fromValue: '50'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13191", tween: [ "style", "${_natsGameGroupCopy}", "z-index", '50', { fromValue: '25'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13173", tween: [ "style", "${_RectangleFullCardCopy2}", "display", 'block', { fromValue: 'block'}], position: 3800, duration: 0, easing: "easeOutCubic" },
            { id: "eid13168", tween: [ "style", "${_RectangleCopy3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid13169", tween: [ "style", "${_RectangleCopy3}", "display", 'block', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutCubic" },
            { id: "eid13170", tween: [ "style", "${_RectangleCopy3}", "display", 'block', { fromValue: 'block'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid13171", tween: [ "style", "${_RectangleCopy3}", "display", 'none', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid12945", tween: [ "style", "${_natsGameGroup}", "z-index", '25', { fromValue: '50'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13160", tween: [ "style", "${_natsGameGroup}", "width", '600px', { fromValue: '600px'}], position: 11900, duration: 0 },
            { id: "eid13117", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 1100, duration: 0, easing: "easeOutCubic" },
            { id: "eid13119", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 5900, duration: 0, easing: "easeOutCubic" },
            { id: "eid12943", tween: [ "style", "${_natsGameGroup}", "top", '-598px', { fromValue: '117px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12944", tween: [ "style", "${_natsGameGroup}", "top", '32px', { fromValue: '-598px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13187", tween: [ "style", "${_natsGameGroup}", "top", '-441px', { fromValue: '112px'}], position: 1500, duration: 600, easing: "easeOutCubic" },
            { id: "eid13188", tween: [ "style", "${_natsGameGroup}", "top", '-50px', { fromValue: '-441px'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid12953", tween: [ "style", "${_Baseball-normal-color}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000 },
            { id: "eid13162", tween: [ "style", "${_natsGameGroupCopy}", "top", '-598px', { fromValue: '36px'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13163", tween: [ "style", "${_natsGameGroupCopy}", "top", '-50px', { fromValue: '-598px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13185", tween: [ "style", "${_natsGameGroupCopy}", "top", '120px', { fromValue: '-50px'}], position: 1500, duration: 1100, easing: "easeOutCubic" },
            { id: "eid13113", tween: [ "style", "${_RectangleCopy}", "opacity", '0', { fromValue: '0'}], position: 1820, duration: 0, easing: "easeOutCubic" },
            { id: "eid13172", tween: [ "style", "${_RectangleCopy3}", "opacity", '0', { fromValue: '0'}], position: 1820, duration: 0, easing: "easeOutCubic" }         ]
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
