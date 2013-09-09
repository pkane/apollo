/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


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
            id:'archive',
            type:'group',
            rect:['0','-1','1307','2172','auto','auto'],
            c:[
            {
               id:'line',
               type:'rect',
               rect:['26px','57px','95.3%','1px','auto','auto'],
               fill:["rgba(87,87,87,1.00)"],
               stroke:[1,"rgba(0, 0, 0, 0.386719)","none"]
            },
            {
               id:'base',
               type:'rect',
               rect:['1.1%','112px','41.1%','841px','auto','auto'],
               opacity:1,
               fill:["rgba(51,51,51,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'sports',
               type:'image',
               rect:['671px','79px','640px','868px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"sports.png",'0px','0px']
            },
            {
               id:'home',
               type:'image',
               rect:['-15px','79px','640px','868px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
            },
            {
               id:'weather',
               type:'image',
               rect:['-692px','93px','640px','868px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"weather.png",'0px','0px']
            },
            {
               id:'Group',
               type:'group',
               rect:['0','1143px','600','1029','auto','auto'],
               clip:['rect(0px 600pxpx 1029pxpx 0px)'],
               c:[
               {
                  id:'Group2',
                  type:'group',
                  rect:['3','19px','100%','3283px','auto','auto'],
                  c:[
                  {
                     id:'movie-card-copyCopy2',
                     type:'image',
                     rect:['32px','982px','536px','921px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/movie-card-copy.png','0px','0px']
                  },
                  {
                     id:'movie-card-copyCopy',
                     type:'image',
                     rect:['32px','1954px','536px','921px','auto','auto'],
                     fill:["rgba(0,0,0,0)",'cardflow/movie-card-copy.png','0px','0px']
                  },
                  {
                     id:'movie-group',
                     type:'group',
                     rect:['31px','84px','536','921','auto','auto'],
                     c:[
                     {
                        id:'movie-swipe',
                        type:'image',
                        rect:['595px','0px','536px','921px','auto','auto'],
                        fill:["rgba(0,0,0,0)",'cardflow/movie-card-copy.png','0px','0px']
                     },
                     {
                        id:'movie-card-copy',
                        type:'image',
                        rect:['1px','0px','536px','921px','auto','auto'],
                        fill:["rgba(0,0,0,0)",'cardflow/movie-card-copy.png','0px','0px']
                     }]
                  }]
               }]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_weather}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '154px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '814px'],
            ["style", "opacity", '1'],
            ["style", "left", '707px'],
            ["style", "width", '600px']
         ],
         "${_movie-swipe}": [
            ["style", "top", '0px'],
            ["style", "height", '921px'],
            ["style", "left", '595px'],
            ["style", "width", '536px']
         ],
         "${_home}": [
            ["style", "top", '154px'],
            ["style", "display", 'block'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "height", '814px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '600px']
         ],
         "${_movie-group}": [
            ["style", "top", '6px'],
            ["style", "left", '31px'],
            ["style", "overflow", 'visible']
         ],
         "${_line}": [
            ["style", "top", '57px'],
            ["color", "background-color", 'rgba(87,87,87,1)'],
            ["style", "height", '1px'],
            ["style", "right", 'auto'],
            ["style", "left", '26px'],
            ["style", "width", '0%']
         ],
         "${_Group2}": [
            ["style", "overflow-y", ''],
            ["style", "overflow-x", ''],
            ["style", "height", '1029px'],
            ["style", "top", '19px'],
            ["style", "-webkit-overflow-scrolling", ''],
            ["style", "width", '100%']
         ],
         "${_Group}": [
            ["style", "top", '1143px'],
            ["style", "overflow", 'hidden'],
            ["color", "background-color", 'rgba(229,229,229,1)'],
            ["style", "clip", [0,600,1029,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '600px']
         ],
         "${_movie-card-copyCopy}": [
            ["style", "top", '1954px'],
            ["style", "height", '921px'],
            ["style", "left", '32px'],
            ["style", "width", '536px']
         ],
         "${_archive}": [
            ["style", "overflow", 'hidden']
         ],
         "${_sports}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '154px'],
            ["style", "height", '814px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '707px'],
            ["style", "width", '600px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_base}": [
            ["style", "top", '112px'],
            ["color", "background-color", 'rgba(51,51,51,1)'],
            ["style", "height", '841px'],
            ["style", "opacity", '1'],
            ["style", "left", '1.07%'],
            ["style", "width", '89.37%']
         ],
         "${_movie-card-copy}": [
            ["style", "height", '921px'],
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["style", "width", '536px']
         ],
         "${_movie-card-copyCopy2}": [
            ["style", "height", '921px'],
            ["style", "top", '982px'],
            ["style", "left", '32px'],
            ["style", "width", '536px']
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
})(jQuery, AdobeEdge, "EDGE-51334566");
