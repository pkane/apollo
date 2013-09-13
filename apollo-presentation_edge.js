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
            id:'edgeSwipes',
            type:'group',
            rect:['-6px','-1px','611','1064','auto','auto'],
            c:[
            {
               id:'leftSwipeEle',
               type:'rect',
               rect:['6px','48px','36px','973px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'rightSwipeEle',
               type:'rect',
               rect:['570px','46px','36px','973px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'botSwipeEle',
               type:'rect',
               rect:['2px','1016px','609px','48px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'topSwipeEle',
               type:'rect',
               rect:['0px','0px','600px','48px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
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
                  id:'nonFullCards',
                  type:'group',
                  rect:['0','780','600','4215','auto','auto'],
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
               },
               {
                  id:'liverpoolGameGroup',
                  type:'group',
                  rect:['2','15px','1200','1100','auto','auto'],
                  c:[
                  {
                     id:'Liverpool',
                     type:'image',
                     rect:['1px','6px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Liverpool.png",'0px','0px']
                  },
                  {
                     id:'RectangleFullCardCopy',
                     type:'rect',
                     rect:['1px','4px','594px','460px','auto','auto'],
                     opacity:0,
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  },
                  {
                     id:'Rectangle',
                     type:'rect',
                     rect:['4px','9px','594px','160px','auto','auto'],
                     opacity:0,
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  }]
               },
               {
                  id:'natsGameGroup',
                  type:'group',
                  rect:['2','123px','1200','1100','auto','auto'],
                  c:[
                  {
                     id:'Baseball',
                     type:'image',
                     rect:['1px','54px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Baseball.png",'0px','0px']
                  },
                  {
                     id:'Baseball-normal-color',
                     type:'image',
                     rect:['0','54px','600px','550px','auto','auto'],
                     fill:["rgba(0,0,0,0)",im+"Baseball-normal-color.png",'0px','0px']
                  },
                  {
                     id:'RectangleFullCard',
                     type:'rect',
                     rect:['1px','45px','600px','460px','auto','auto'],
                     opacity:0,
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  },
                  {
                     id:'RectangleCopy',
                     display:'none',
                     type:'rect',
                     rect:['4px','54px','594px','152px','auto','auto'],
                     overflow:'hidden',
                     opacity:0,
                     fill:["rgba(192,192,192,1)"],
                     stroke:[0,"rgba(0,0,0,1)","none"]
                  }]
               },
               {
                  id:'lvpool3Stack',
                  type:'group',
                  rect:['2px','666px','1200','1100','auto','auto'],
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
         "${_botSwipeEle}": [
            ["style", "top", '1016px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '2px'],
            ["style", "width", '609px']
         ],
         "${_article-assetless-card}": [
            ["style", "top", '2454px'],
            ["style", "left", '0px']
         ],
         "${_galleryArticleGroup}": [
            ["style", "top", '1348px'],
            ["transform", "scaleY", '0.5'],
            ["style", "height", '1105px'],
            ["transform", "scaleX", '0.5'],
            ["style", "z-index", '60'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
         "${_videoCardFull}": [
            ["style", "top", '-22px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_liverpoolGameGroup}": [
            ["style", "top", '4px'],
            ["style", "z-index", '25'],
            ["style", "position", 'absolute']
         ],
         "${_leftSwipeEle}": [
            ["style", "top", '48px'],
            ["style", "height", '973px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '36px']
         ],
         "${_Baseball-normal-colorCopy2}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_nats3StackTopRect}": [
            ["style", "top", '54px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '152px']
         ],
         "${_article-gallery-card}": [
            ["style", "top", '1593px'],
            ["style", "left", '0px']
         ],
         "${_galleryArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_assetlessArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_nonFullCards}": [
            ["style", "top", '1441px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
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
            ["style", "top", '-32px'],
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
         "${_natsGameGroup}": [
            ["style", "top", '42px'],
            ["style", "z-index", '50'],
            ["style", "position", 'absolute']
         ],
         "${_rightSwipeEle}": [
            ["style", "top", '46px'],
            ["style", "height", '973px'],
            ["style", "opacity", '0'],
            ["style", "left", '570px'],
            ["style", "width", '36px']
         ],
         "${_topSwipeEle}": [
            ["style", "top", '0px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_nats3StackTop}": [
            ["style", "top", '781px'],
            ["style", "left", '2px'],
            ["style", "z-index", '55'],
            ["style", "position", 'absolute']
         ],
         "${_articleWrap}": [
            ["style", "overflow-y", ''],
            ["style", "display", 'block'],
            ["style", "overflow", 'scroll'],
            ["style", "height", '1064px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "left", '640px']
         ],
         "${_videoArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_collapseEleCopy}": [
            ["style", "top", '504px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_video-card}": [
            ["style", "top", '3022px'],
            ["style", "left", '0px']
         ],
         "${_topPanel}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '111px']
         ],
         "${_myText}": [
            ["style", "text-align", '']
         ],
         "${_BaseballCopy}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
         "${_topPanelGroup}": [
            ["style", "top", '-111px'],
            ["style", "display", 'block']
         ],
         "${_Baseball-normal-colorCopy}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1']
         ],
         "${_nats3StackBot}": [
            ["style", "top", '704px'],
            ["style", "left", '2px'],
            ["style", "z-index", '53'],
            ["style", "position", 'absolute']
         ],
         "${_collapseEleCopy4}": [
            ["style", "top", '456px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
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
         "${_RectangleCopy}": [
            ["style", "top", '54px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '152px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
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
            ["transform", "scaleX", '0.5'],
            ["style", "display", 'block'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "z-index", '60'],
            ["style", "height", '1105px']
         ],
         "${_Rectangle}": [
            ["style", "top", '9px'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "height", '160px']
         ],
         "${_LiverpoolCopy}": [
            ["style", "left", '1px'],
            ["style", "top", '6px']
         ],
         "${_coverFlow}": [
            ["style", "opacity", '1'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "width", '640px'],
            ["style", "top", '19px'],
            ["transform", "scaleY", '1.03714'],
            ["style", "left", '0px'],
            ["style", "height", '1065px'],
            ["style", "overflow-y", 'auto'],
            ["style", "clip", [0,640,1061.388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "overflow-x", 'hidden']
         ],
         "${_videoArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "display", 'none'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "z-index", '60'],
            ["style", "height", '1105px']
         ],
         "${__34ArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleX", '0.5'],
            ["transform", "scaleY", '0.5'],
            ["style", "position", 'absolute'],
            ["style", "display", 'none'],
            ["style", "z-index", '60'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
         ],
         "${_assetlessArticleGroup}": [
            ["style", "top", '1348px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "display", 'block'],
            ["style", "z-index", '60'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
         ],
         "${_Baseball}": [
            ["style", "top", '54px'],
            ["style", "left", '1px']
         ],
         "${_lvpool3Stack}": [
            ["style", "top", '666px'],
            ["style", "z-index", '50'],
            ["style", "position", 'absolute']
         ],
         "${_botPanel}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '111px']
         ],
         "${_article-3-4-card}": [
            ["style", "top", '3025px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_articleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "height", '1105px'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "z-index", '60'],
            ["style", "display", 'none']
         ],
         "${_systemBar}": [
            ["style", "left", '682px'],
            ["style", "display", 'block']
         ],
         "${_edgeSwipes}": [
            ["style", "display", 'block']
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(231,231,231,1.00)'],
            ["style", "min-width", '640px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1064px'],
            ["style", "max-width", 'none'],
            ["style", "width", '320px']
         ],
         "${_collapseEleCopy3}": [
            ["style", "top", '505px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '490px'],
            ["style", "width", '106px']
         ],
         "${_botPanelGroup}": [
            ["style", "top", '1064px'],
            ["style", "display", 'block']
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
         duration: 10430,
         autoPlay: true,
         labels: {
            "Start": 0,
            "ArticleFlip": 500,
            "ArticleFlipBack": 1000,
            "34ArticleFlip": 1600,
            "34ArticleFlipBack": 2100,
            "videoArticleFlip": 2700,
            "videoArticleFlipBack": 3200,
            "myCardsFlip": 3800,
            "myCardsFlipBack": 4900,
            "botPanelUp": 6000,
            "topPanelDown": 6600,
            "botPanelDown": 7200,
            "topPanelUp": 7800,
            "myCardExtend": 8400,
            "myCardCollapse": 8745,
            "natsFullExpand": 9320,
            "natsFullClose": 10000
         },
         timeline: [
            { id: "eid12873", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0, easing: "easeOutCubic" },
            { id: "eid12874", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 3200, duration: 0, easing: "easeOutCubic" },
            { id: "eid13053", tween: [ "style", "${_nonFullCards}", "left", '2px', { fromValue: '0px'}], position: 8400, duration: 307 },
            { id: "eid13065", tween: [ "style", "${_nonFullCards}", "left", '0px', { fromValue: '2px'}], position: 8745, duration: 307 },
            { id: "eid12947", tween: [ "style", "${_liverpoolGameGroup}", "top", '93px', { fromValue: '4px'}], position: 3800, duration: 500, easing: "easeOutCubic" },
            { id: "eid12941", tween: [ "style", "${_liverpoolGameGroup}", "top", '-387px', { fromValue: '93px'}], position: 4900, duration: 500, easing: "easeOutCubic" },
            { id: "eid12942", tween: [ "style", "${_liverpoolGameGroup}", "top", '4px', { fromValue: '-387px'}], position: 5400, duration: 500, easing: "easeOutCubic" },
            { id: "eid12499", tween: [ "transform", "${_articleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12498", tween: [ "transform", "${_articleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12658", tween: [ "style", "${__34ArticleCardFull}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12659", tween: [ "style", "${__34ArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid12869", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12870", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12507", tween: [ "style", "${_articleGroup}", "top", '2px', { fromValue: '602px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12509", tween: [ "style", "${_articleGroup}", "top", '602px', { fromValue: '2px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13055", tween: [ "style", "${_nats3StackBot}", "left", '4px', { fromValue: '2px'}], position: 8400, duration: 307 },
            { id: "eid13070", tween: [ "style", "${_nats3StackBot}", "left", '2px', { fromValue: '4px'}], position: 8745, duration: 307 },
            { id: "eid12450", tween: [ "style", "${_article-card-fullCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12473", tween: [ "style", "${_article-card-fullCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13045", tween: [ "style", "${_topPanelGroup}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid13076", tween: [ "style", "${_RectangleFullCard}", "display", 'block', { fromValue: 'block'}], position: 3800, duration: 0, easing: "easeOutCubic" },
            { id: "eid12564", tween: [ "style", "${_article-card-fullCopy}", "height", '6195px', { fromValue: '3331px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12565", tween: [ "style", "${_article-card-fullCopy}", "height", '3331px', { fromValue: '6195px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12945", tween: [ "style", "${_natsGameGroup}", "z-index", '25', { fromValue: '50'}], position: 3800, duration: 500, easing: "easeOutCubic" },
            { id: "eid12936", tween: [ "style", "${_natsGameGroup}", "z-index", '50', { fromValue: '25'}], position: 4900, duration: 500, easing: "easeOutCubic" },
            { id: "eid13073", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'none'}], position: 3800, duration: 0, easing: "easeOutCubic" },
            { id: "eid13071", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'none'}], position: 4800, duration: 0, easing: "easeOutCubic" },
            { id: "eid13074", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'block'}], position: 4900, duration: 0, easing: "easeOutCubic" },
            { id: "eid13075", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'block'}], position: 5400, duration: 0, easing: "easeOutCubic" },
            { id: "eid13043", tween: [ "style", "${_articleWrap}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid12956", tween: [ "style", "${_botPanelGroup}", "top", '953px', { fromValue: '1064px'}], position: 6000, duration: 500, easing: "easeOutCubic" },
            { id: "eid12958", tween: [ "style", "${_botPanelGroup}", "top", '1064px', { fromValue: '953px'}], position: 7200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12451", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12472", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13027", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13028", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13033", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13034", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13039", tween: [ "style", "${_nonFullCards}", "opacity", '0', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13040", tween: [ "style", "${_nonFullCards}", "opacity", '1', { fromValue: '0'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12652", tween: [ "style", "${__34ArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12653", tween: [ "style", "${__34ArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid13077", tween: [ "style", "${_baseball-full}", "display", 'block', { fromValue: 'none'}], position: 9320, duration: 0, easing: "easeOutCubic" },
            { id: "eid13092", tween: [ "style", "${_baseball-full}", "display", 'block', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeOutCubic" },
            { id: "eid13099", tween: [ "style", "${_baseball-full}", "display", 'none', { fromValue: 'block'}], position: 10430, duration: 0, easing: "easeOutCubic" },
            { id: "eid12493", tween: [ "style", "${_articleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12491", tween: [ "style", "${_articleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12654", tween: [ "style", "${__34ArticleGroup}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12655", tween: [ "style", "${__34ArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid12891", tween: [ "style", "${_article-video-card}", "top", '-32px', { fromValue: '-32px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12660", tween: [ "style", "${__34ArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12661", tween: [ "style", "${__34ArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid13052", tween: [ "style", "${_nonFullCards}", "top", '1441px', { fromValue: '1441px'}], position: 0, duration: 0 },
            { id: "eid13054", tween: [ "style", "${_nonFullCards}", "top", '2420px', { fromValue: '1441px'}], position: 8400, duration: 307 },
            { id: "eid13066", tween: [ "style", "${_nonFullCards}", "top", '1440px', { fromValue: '2420px'}], position: 8745, duration: 307 },
            { id: "eid12953", tween: [ "style", "${_Baseball-normal-color}", "opacity", '0', { fromValue: '1'}], position: 3800, duration: 1000 },
            { id: "eid12955", tween: [ "style", "${_Baseball-normal-color}", "opacity", '1', { fromValue: '0'}], position: 4900, duration: 500 },
            { id: "eid12648", tween: [ "transform", "${__34ArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12649", tween: [ "transform", "${__34ArticleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12889", tween: [ "style", "${_article-card}", "top", '725px', { fromValue: '725px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12865", tween: [ "style", "${_videoArticleGroup}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0, easing: "easeOutCubic" },
            { id: "eid12866", tween: [ "style", "${_videoArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 3200, duration: 0, easing: "easeOutCubic" },
            { id: "eid13044", tween: [ "style", "${_systemBar}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid12452", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12474", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13090", tween: [ "transform", "${_baseball-full}", "scaleY", '1', { fromValue: '0'}], position: 9320, duration: 430, easing: "easeOutCubic" },
            { id: "eid13097", tween: [ "transform", "${_baseball-full}", "scaleY", '0', { fromValue: '1'}], position: 10000, duration: 430, easing: "easeOutCubic" },
            { id: "eid12946", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '50', { fromValue: '25'}], position: 3800, duration: 500, easing: "easeOutCubic" },
            { id: "eid12940", tween: [ "style", "${_liverpoolGameGroup}", "z-index", '25', { fromValue: '50'}], position: 4900, duration: 500, easing: "easeOutCubic" },
            { id: "eid12662", tween: [ "style", "${__34ArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12663", tween: [ "style", "${__34ArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12861", tween: [ "transform", "${_videoArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12862", tween: [ "transform", "${_videoArticleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12489", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12490", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid12863", tween: [ "style", "${_videoArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12864", tween: [ "style", "${_videoArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12500", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12501", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid12664", tween: [ "transform", "${__34ArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12665", tween: [ "transform", "${__34ArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid13056", tween: [ "style", "${_nats3StackBot}", "top", '1187px', { fromValue: '704px'}], position: 8400, duration: 307 },
            { id: "eid13069", tween: [ "style", "${_nats3StackBot}", "top", '703px', { fromValue: '1187px'}], position: 8745, duration: 307 },
            { id: "eid12859", tween: [ "transform", "${_videoArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12860", tween: [ "transform", "${_videoArticleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid13091", tween: [ "style", "${_baseball-full}", "opacity", '1', { fromValue: '0'}], position: 9320, duration: 430, easing: "easeOutCubic" },
            { id: "eid13098", tween: [ "style", "${_baseball-full}", "opacity", '0', { fromValue: '1'}], position: 10000, duration: 430, easing: "easeOutCubic" },
            { id: "eid13058", tween: [ "style", "${_nats3StackTop}", "top", '1760px', { fromValue: '781px'}], position: 8400, duration: 307 },
            { id: "eid13062", tween: [ "style", "${_nats3StackTop}", "top", '780px', { fromValue: '1760px'}], position: 8745, duration: 307 },
            { id: "eid12650", tween: [ "transform", "${__34ArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12651", tween: [ "transform", "${__34ArticleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12875", tween: [ "style", "${_videoArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12876", tween: [ "style", "${_videoArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12890", tween: [ "style", "${_article-3-4-card}", "top", '3025px', { fromValue: '3025px'}], position: 0, duration: 0, easing: "easeOutCubic" },
            { id: "eid12871", tween: [ "style", "${_videoArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12872", tween: [ "style", "${_videoArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12855", tween: [ "style", "${_videoArticleGroup}", "top", '-196px', { fromValue: '602px'}], position: 2700, duration: 40, easing: "easeOutCubic" },
            { id: "eid12856", tween: [ "style", "${_videoArticleGroup}", "top", '3306px', { fromValue: '-196px'}], position: 2740, duration: 60, easing: "easeOutCubic" },
            { id: "eid12857", tween: [ "style", "${_videoArticleGroup}", "top", '2px', { fromValue: '3306px'}], position: 2800, duration: 227, easing: "easeOutCubic" },
            { id: "eid12858", tween: [ "style", "${_videoArticleGroup}", "top", '602px', { fromValue: '2px'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid13089", tween: [ "transform", "${_baseball-full}", "scaleX", '1', { fromValue: '0'}], position: 9320, duration: 430, easing: "easeOutCubic" },
            { id: "eid13096", tween: [ "transform", "${_baseball-full}", "scaleX", '0', { fromValue: '1'}], position: 10000, duration: 430, easing: "easeOutCubic" },
            { id: "eid12656", tween: [ "transform", "${__34ArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12657", tween: [ "transform", "${__34ArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12963", tween: [ "style", "${_topPanelGroup}", "top", '0px', { fromValue: '-111px'}], position: 6000, duration: 500, easing: "easeOutCubic" },
            { id: "eid12964", tween: [ "style", "${_topPanelGroup}", "top", '-111px', { fromValue: '0px'}], position: 7200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12430", tween: [ "style", "${_edgeSwipes}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid12496", tween: [ "transform", "${_articleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12497", tween: [ "transform", "${_articleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid13025", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13026", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13031", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13032", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13037", tween: [ "transform", "${_nonFullCards}", "scaleX", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13038", tween: [ "transform", "${_nonFullCards}", "scaleX", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid13046", tween: [ "style", "${_botPanelGroup}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid13029", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid13030", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid13035", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid13036", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid13041", tween: [ "transform", "${_nonFullCards}", "scaleY", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid13042", tween: [ "transform", "${_nonFullCards}", "scaleY", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12646", tween: [ "style", "${__34ArticleGroup}", "top", '2864px', { fromValue: '602px'}], position: 1600, duration: 40, easing: "easeOutCubic" },
            { id: "eid12691", tween: [ "style", "${__34ArticleGroup}", "top", '3306px', { fromValue: '2864px'}], position: 1640, duration: 60, easing: "easeOutCubic" },
            { id: "eid12690", tween: [ "style", "${__34ArticleGroup}", "top", '2px', { fromValue: '3306px'}], position: 1700, duration: 227, easing: "easeOutCubic" },
            { id: "eid12647", tween: [ "style", "${__34ArticleGroup}", "top", '602px', { fromValue: '2px'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12867", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12868", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12943", tween: [ "style", "${_natsGameGroup}", "top", '-594px', { fromValue: '42px'}], position: 3800, duration: 500, easing: "easeOutCubic" },
            { id: "eid12944", tween: [ "style", "${_natsGameGroup}", "top", '-44px', { fromValue: '-594px'}], position: 4300, duration: 500, easing: "easeOutCubic" },
            { id: "eid12935", tween: [ "style", "${_natsGameGroup}", "top", '46px', { fromValue: '-44px'}], position: 4900, duration: 500, easing: "easeOutCubic" },
            { id: "eid13057", tween: [ "style", "${_nats3StackTop}", "left", '4px', { fromValue: '2px'}], position: 8400, duration: 307 },
            { id: "eid13061", tween: [ "style", "${_nats3StackTop}", "left", '2px', { fromValue: '4px'}], position: 8745, duration: 307 },
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
