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
                  id:'video-card',
                  type:'image',
                  rect:['0px','3056px','600px','655px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'cardflow/video-card.png','0px','0px']
               },
               {
                  id:'article-assetless-card',
                  type:'image',
                  rect:['0px','2488px','600px','548px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'cardflow/article-assetless-card.png','0px','0px']
               },
               {
                  id:'article-gallery-card',
                  type:'image',
                  rect:['0px','1627px','600px','848px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'cardflow/article-gallery-card.png','0px','0px']
               },
               {
                  id:'article-video-card',
                  type:'image',
                  rect:['0px','2px','600px','736px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'cardflow/article-video-card.png','0px','0px']
               },
               {
                  id:'article-3-4-card',
                  type:'image',
                  rect:['0px','3059px','600px','987px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'cardflow/article-3-4-card.png','0px','0px']
               },
               {
                  id:'article-card',
                  type:'image',
                  rect:['0px','759px','600px','848px','auto','auto'],
                  fill:["rgba(0,0,0,0)",'cardflow/article-card.png','0px','0px']
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
                  rect:['-20','602','640','3331px','auto','auto'],
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
                  rect:['-20','602','640','3331px','auto','auto'],
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
                  rect:['-20','602','640','3331px','auto','auto'],
                  c:[
                  {
                     id:'videoCardFull',
                     type:'image',
                     rect:['0px','-22px','640px','6166px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/article-card-full.png','0px','0px']
                  }]
               }]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__34ArticleCardFull}": [
            ["style", "top", '-22px'],
            ["style", "height", '3331px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_articleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
         ],
         "${_article-assetless-card}": [
            ["style", "top", '2488px'],
            ["style", "left", '0px']
         ],
         "${_galleryArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
         ],
         "${_botSwipeEle}": [
            ["style", "top", '1016px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '2px'],
            ["style", "width", '609px']
         ],
         "${_video-card}": [
            ["style", "top", '3056px'],
            ["style", "left", '0px']
         ],
         "${_myText}": [
            ["style", "text-align", '']
         ],
         "${_article-3-4-card}": [
            ["style", "top", '3059px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
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
         "${_article-card-full}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "overflow", 'visible']
         ],
         "${_videoGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
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
         "${_leftSwipeEle}": [
            ["style", "top", '48px'],
            ["style", "height", '973px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '36px']
         ],
         "${_coverFlow}": [
            ["style", "opacity", '1'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "width", '640px'],
            ["style", "top", '19px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1.03714'],
            ["style", "overflow", 'scroll'],
            ["style", "height", '1065px'],
            ["style", "overflow-y", 'auto'],
            ["style", "clip", [0,640,1061.388671875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "overflow-x", '']
         ],
         "${_Group4}": [
            ["style", "top", '21px'],
            ["transform", "scaleY", '1.005'],
            ["style", "height", '4110px'],
            ["style", "left", '18px'],
            ["style", "clip", [-0.22967222332954407,600.036376953125,7134.64404296875,0.036376953125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_article-gallery-card}": [
            ["style", "top", '1627px'],
            ["style", "left", '0px']
         ],
         "${__34ArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'none'],
            ["style", "height", '1105px'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '0.5']
         ],
         "${_rightSwipeEle}": [
            ["style", "top", '46px'],
            ["style", "height", '973px'],
            ["style", "opacity", '0'],
            ["style", "left", '570px'],
            ["style", "width", '36px']
         ],
         "${_article-card-fullCopy}": [
            ["style", "top", '-22px'],
            ["transform", "scaleX", '0.5'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '3331px']
         ],
         "${_article-card}": [
            ["style", "top", '759px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_assetlessArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["style", "display", 'block'],
            ["transform", "scaleX", '0.5'],
            ["style", "clip", [0,640,2322.8190917969,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
         ],
         "${_article-video-card}": [
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_videoArticleGroup}": [
            ["style", "top", '602px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "display", 'none'],
            ["style", "clip", [0,640,2322.819091796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '1105px']
         ],
         "${_systemBar}": [
            ["style", "left", '682px']
         ],
         "${_edgeSwipes}": [
            ["style", "display", 'block']
         ],
         "${_topSwipeEle}": [
            ["style", "top", '0px'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(231,231,231,1.00)'],
            ["style", "min-width", '640px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1064px'],
            ["style", "max-width", 'none'],
            ["style", "width", '320px']
         ],
         "${_articleWrap}": [
            ["style", "overflow-y", ''],
            ["style", "overflow", 'scroll'],
            ["style", "height", '1064px'],
            ["style", "opacity", '0'],
            ["style", "-webkit-overflow-scrolling", 'touch'],
            ["style", "left", '640px']
         ],
         "${_videoArticleCardFull}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "top", '-22px'],
            ["transform", "scaleY", '0.5'],
            ["style", "overflow", 'visible'],
            ["style", "height", '3331px'],
            ["style", "display", 'none']
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
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3700,
         autoPlay: true,
         labels: {
            "Start": 0,
            "ArticleFlip": 500,
            "ArticleFlipBack": 1000,
            "34ArticleFlip": 1600,
            "34ArticleFlipBack": 2100,
            "videoArticleFlip": 2700,
            "videoArticleFlipBack": 3200
         },
         timeline: [
            { id: "eid12873", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0, easing: "easeOutCubic" },
            { id: "eid12874", tween: [ "style", "${_videoArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 3200, duration: 0, easing: "easeOutCubic" },
            { id: "eid12444", tween: [ "transform", "${_article-card}", "scaleY", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12471", tween: [ "transform", "${_article-card}", "scaleY", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid12499", tween: [ "transform", "${_articleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12498", tween: [ "transform", "${_articleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12676", tween: [ "transform", "${_article-3-4-card}", "scaleY", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid12677", tween: [ "transform", "${_article-3-4-card}", "scaleY", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid12869", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12870", tween: [ "transform", "${_videoArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12849", tween: [ "transform", "${_article-video-card}", "scaleX", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid12850", tween: [ "transform", "${_article-video-card}", "scaleX", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12450", tween: [ "style", "${_article-card-fullCopy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12473", tween: [ "style", "${_article-card-fullCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12564", tween: [ "style", "${_article-card-fullCopy}", "height", '6195px', { fromValue: '3331px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12565", tween: [ "style", "${_article-card-fullCopy}", "height", '3331px', { fromValue: '6195px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12451", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12472", tween: [ "transform", "${_article-card-fullCopy}", "scaleX", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12652", tween: [ "style", "${__34ArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12653", tween: [ "style", "${__34ArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12493", tween: [ "style", "${_articleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12491", tween: [ "style", "${_articleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12851", tween: [ "style", "${_article-video-card}", "opacity", '0', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid12852", tween: [ "style", "${_article-video-card}", "opacity", '1', { fromValue: '0'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12660", tween: [ "style", "${__34ArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12661", tween: [ "style", "${__34ArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12507", tween: [ "style", "${_articleGroup}", "top", '2px', { fromValue: '602px'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12509", tween: [ "style", "${_articleGroup}", "top", '602px', { fromValue: '2px'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12445", tween: [ "style", "${_article-card}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12470", tween: [ "style", "${_article-card}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutCubic" },
            { id: "eid12648", tween: [ "transform", "${__34ArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12649", tween: [ "transform", "${__34ArticleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12672", tween: [ "transform", "${_article-3-4-card}", "scaleX", '0.5', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid12673", tween: [ "transform", "${_article-3-4-card}", "scaleX", '1', { fromValue: '0.5'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid12646", tween: [ "style", "${__34ArticleGroup}", "top", '2864px', { fromValue: '602px'}], position: 1600, duration: 40, easing: "easeOutCubic" },
            { id: "eid12691", tween: [ "style", "${__34ArticleGroup}", "top", '3306px', { fromValue: '2864px'}], position: 1640, duration: 60, easing: "easeOutCubic" },
            { id: "eid12690", tween: [ "style", "${__34ArticleGroup}", "top", '2px', { fromValue: '3306px'}], position: 1700, duration: 227, easing: "easeOutCubic" },
            { id: "eid12647", tween: [ "style", "${__34ArticleGroup}", "top", '602px', { fromValue: '2px'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12875", tween: [ "style", "${_videoArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12876", tween: [ "style", "${_videoArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12500", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12501", tween: [ "style", "${_article-card-fullCopy}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid12867", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12868", tween: [ "transform", "${_videoArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12865", tween: [ "style", "${_videoArticleGroup}", "display", 'block', { fromValue: 'none'}], position: 2700, duration: 0, easing: "easeOutCubic" },
            { id: "eid12866", tween: [ "style", "${_videoArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 3200, duration: 0, easing: "easeOutCubic" },
            { id: "eid12662", tween: [ "style", "${__34ArticleCardFull}", "height", '6195px', { fromValue: '3331px'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12663", tween: [ "style", "${__34ArticleCardFull}", "height", '3331px', { fromValue: '6195px'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12861", tween: [ "transform", "${_videoArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12862", tween: [ "transform", "${_videoArticleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12863", tween: [ "style", "${_videoArticleGroup}", "clip", [0,640,6193.529296875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,2322.819091796875,0]}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12864", tween: [ "style", "${_videoArticleGroup}", "clip", [0,640,2727.899169921875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,640,6193.529296875,0]}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12853", tween: [ "transform", "${_article-video-card}", "scaleY", '0.5', { fromValue: '1'}], position: 2700, duration: 500, easing: "easeOutCubic" },
            { id: "eid12854", tween: [ "transform", "${_article-video-card}", "scaleY", '1', { fromValue: '0.5'}], position: 3200, duration: 500, easing: "easeOutCubic" },
            { id: "eid12664", tween: [ "transform", "${__34ArticleCardFull}", "scaleX", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12665", tween: [ "transform", "${__34ArticleCardFull}", "scaleX", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12859", tween: [ "transform", "${_videoArticleGroup}", "scaleY", '1', { fromValue: '0.5'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12860", tween: [ "transform", "${_videoArticleGroup}", "scaleY", '0.5', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12650", tween: [ "transform", "${__34ArticleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12651", tween: [ "transform", "${__34ArticleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12658", tween: [ "style", "${__34ArticleCardFull}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12659", tween: [ "style", "${__34ArticleCardFull}", "display", 'block', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid12871", tween: [ "style", "${_videoArticleCardFull}", "opacity", '1', { fromValue: '0'}], position: 2700, duration: 327, easing: "easeOutCubic" },
            { id: "eid12872", tween: [ "style", "${_videoArticleCardFull}", "opacity", '0', { fromValue: '1'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12855", tween: [ "style", "${_videoArticleGroup}", "top", '-196px', { fromValue: '602px'}], position: 2700, duration: 40, easing: "easeOutCubic" },
            { id: "eid12856", tween: [ "style", "${_videoArticleGroup}", "top", '3306px', { fromValue: '-196px'}], position: 2740, duration: 60, easing: "easeOutCubic" },
            { id: "eid12857", tween: [ "style", "${_videoArticleGroup}", "top", '2px', { fromValue: '3306px'}], position: 2800, duration: 227, easing: "easeOutCubic" },
            { id: "eid12858", tween: [ "style", "${_videoArticleGroup}", "top", '602px', { fromValue: '2px'}], position: 3200, duration: 327, easing: "easeOutCubic" },
            { id: "eid12656", tween: [ "transform", "${__34ArticleCardFull}", "scaleY", '1', { fromValue: '0.5'}], position: 1600, duration: 327, easing: "easeOutCubic" },
            { id: "eid12657", tween: [ "transform", "${__34ArticleCardFull}", "scaleY", '0.5', { fromValue: '1'}], position: 2100, duration: 327, easing: "easeOutCubic" },
            { id: "eid12496", tween: [ "transform", "${_articleGroup}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12497", tween: [ "transform", "${_articleGroup}", "scaleX", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12489", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" },
            { id: "eid12490", tween: [ "style", "${_articleGroup}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCubic" },
            { id: "eid12674", tween: [ "style", "${_article-3-4-card}", "opacity", '0', { fromValue: '1'}], position: 1600, duration: 500, easing: "easeOutCubic" },
            { id: "eid12675", tween: [ "style", "${_article-3-4-card}", "opacity", '1', { fromValue: '0'}], position: 2100, duration: 500, easing: "easeOutCubic" },
            { id: "eid12452", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 327, easing: "easeOutCubic" },
            { id: "eid12474", tween: [ "transform", "${_article-card-fullCopy}", "scaleY", '0.5', { fromValue: '1'}], position: 1000, duration: 327, easing: "easeOutCubic" },
            { id: "eid12654", tween: [ "style", "${__34ArticleGroup}", "display", 'block', { fromValue: 'none'}], position: 1600, duration: 0, easing: "easeOutCubic" },
            { id: "eid12655", tween: [ "style", "${__34ArticleGroup}", "display", 'block', { fromValue: 'block'}], position: 2100, duration: 0, easing: "easeOutCubic" },
            { id: "eid12430", tween: [ "style", "${_edgeSwipes}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid12443", tween: [ "transform", "${_article-card}", "scaleX", '0.5', { fromValue: '1'}], position: 500, duration: 500, easing: "easeOutCubic" },
            { id: "eid12469", tween: [ "transform", "${_article-card}", "scaleX", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutCubic" },
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
