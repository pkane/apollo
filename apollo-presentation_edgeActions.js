/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
          
          // yepnope({
          //     nope:['edge_includes/hammerjs/dist/hammer.js'] ,
          //     complete: init
          // });
          
          // function init (){
          
          //     var element = sym.element[0];
          //     var hammer = Hammer(element);
          
          //     hammer.on("swipeup", function(event) {
          //       sym.play("Coverflow");
          //     });          
          // }        
          var scrollStore = -1;
          
          function scrollDetect(thisObj){
              var obj = thisObj;              
              //Keep track of last scroll
              var lastScroll = -1;
              var scrollSeq = -1;
              obj.scroll(function(event){
                  //Sets the current scroll position
                  var st = $(this).scrollTop();
                  //Determines up-or-down scrolling
                  if (st > lastScroll) {
                     scrollSeq = -1;                      
                     if (scrollStore != scrollSeq){
                        //Replace this with your function call for downward-scrolling
                        sym.play("botPanelDown");
                     }                     
                  }
                  else {
                     scrollSeq = 1;
                     //Replace this with your function call for upward-scrolling
                     if (scrollStore != scrollSeq) {
                         sym.play("botPanelUp");
                     }
                  }
                  //Updates scroll position
                  lastScroll = st;
                  scrollStore = scrollSeq;
              });
            }
          
          	window.setTimeout(function() { 
            	sym.play("breakingAlertIn");
         	}, 3000);
         /*
            window.setTimeout(function() { 
            	sym.play("breakingAlertOut");
         	}, 12500);
         */
         	// define function and counter
         	var counter = 1;
         /*
         	function update_me() {
         	setTimeout(function(){
         		counter++;
         		update_me();
         	}, 1000);
         	}
         */
         //	window.onLoad(alert("hey!"));
         
         	// run code
         	update_me();	
         
          // scrollDetect($('#Stage_coverFlow'));
         
         /**
          * Gallery Template
          * To add more items simply duplicate the symbol "large4" in the library and increase the number.
          * Then you can customize the content of the new symbol by double clicking on the symbol in the library.
          * The navigation will be extended automatically.
          **/
         
         
         /**
          * Don't modify the code below.
          */
         
         // Find all large symbols in the library
         var prefix = "panel"; // large1, large2 ... large99
         var index = 1;
         var symbolDefns = sym.getComposition().symbolDefns;
         for (var key in symbolDefns) {
           if (symbolDefns.hasOwnProperty(key) && key.search(new RegExp(prefix+"[0-9]{1,2}"))!=-1 ) {
             var button = sym.createChildSymbol( "button", "navigation" );
             button.setVariable("panelId", key);
             button.$("btnLabel").html(+index++);
             $button = button.getSymbolElement();
             $button.css({float: "left", margin: "0px 0 0px 0px"});
           }
         }
         
         var xLinker;
         
         // Hover effect for buttons
         $(".custom-button").mouseleave(function(evt){$(evt.currentTarget).css({"background-color": "rgba(229, 233, 233,0)"});});
         $(".custom-button").mouseenter(function(evt){$(evt.currentTarget).css({"background-color": "rgb(237, 241, 241)"});});
         $(".custom-button").mousedown(function(evt){$(evt.currentTarget).css({"background-color": "rgb(224,240,250)"});});              

      });
      //Edge binding end
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
    

      

               

      Symbol.bindElementAction(compId, symbolName, "${_article-card}", "click", function(sym, e) {
         sym.play("ArticleFlip");
         setTimeout(function() {
             $('#Stage_coverFlow').scrollTop(0);
             xLinker = Math.round($('#Stage_article-card').offset().top);
         }, 200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-3-4-card}", "click", function(sym, e) {
         sym.play("34ArticleFlip");
         setTimeout(function() {
             $('#Stage_coverFlow').scrollTop(0);
             xLinker = Math.round($('#Stage_article-3-4-card').offset().top);         
         }, 200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-video-card}", "click", function(sym, e) {
         sym.play("ArticleFlip");
         setTimeout(function() {
             $('#Stage_coverFlow').scrollTop(0);
             xLinker = Math.round($('#Stage_article-video-card').offset().top);
         }, 200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-gallery-card}", "click", function(sym, e) {
         sym.play("34ArticleFlip");
         setTimeout(function() {
             $('#Stage_coverFlow').scrollTop(0);
             xLinker = Math.round($('#Stage_article-gallery-card').offset().top);                  
         }, 200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-assetless-card}", "click", function(sym, e) {
         sym.play("34ArticleFlip");
         setTimeout(function() {
             $('#Stage_coverFlow').scrollTop(0);
             xLinker = Math.round($('#Stage_article-assetless-card').offset().top);                           
         }, 200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_video-card}", "click", function(sym, e) {
         sym.play("videoArticleFlip");
         setTimeout(function() {
         $('#Stage_coverFlow').scrollTop(0);
         xLinker = Math.round($('#Stage_video-card').offset().top);                                    
         }, 200);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_leftSwipeEle}", "swiperight", function(sym, e) {
         sym.play("navIn");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-card-full}", "click", function(sym, e) {
         sym.play("ArticleFlipBack");
         $('#Stage_coverFlow').scrollTop(xLinker);

      });
      //Edge binding end      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-card-fullCopy}", "click", function(sym, e) {
         sym.play("ArticleFlipBack");
         $('#Stage_coverFlow').scrollTop(xLinker);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__34ArticleCardFull}", "click", function(sym, e) {
         sym.play("34ArticleFlipBack");
         $('#Stage_coverFlow').scrollTop(xLinker);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2100, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_videoArticleCardFull}", "click", function(sym, e) {
         sym.play("videoArticleFlipBack");
         // $('#Stage_coverFlow').scrollTop(xLinker);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4800, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         sym.play("myCardsFlip");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "click", function(sym, e) {
         sym.play("myCardsFlipBack");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8300, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8707, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lvpool3StackRect}", "click", function(sym, e) {
         sym.play("myCardExtend");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy2}", "click", function(sym, e) {
         sym.play("myCardExtend");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nats3StackTopRect}", "click", function(sym, e) {
         sym.play("myCardExtend");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_collapseEleCopy}", "click", function(sym, e) {
         sym.play("myCardCollapse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_collapseEleCopy3}", "click", function(sym, e) {
         sym.play("myCardCollapse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_collapseEleCopy4}", "click", function(sym, e) {
         sym.play("myCardCollapse");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9052, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCard}", "click", function(sym, e) {
         sym.play("natsFullExpand");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10430, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_baseball-full}", "click", function(sym, e) {
         sym.play("natsFullClose");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11011, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11691, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_liverpool-full}", "click", function(sym, e) {
         sym.play("livFullClose");
         sym.stop("myCardsFlipBack");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCardCopy}", "click", function(sym, e) {
         sym.play("livFullExpand");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16004, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle2}", "click", function(sym, e) {
         sym.stop("ArticleFlip");
         sym.play("ArticleFlip");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rightSwipeEle}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16700, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_offEdgeNav}", "swipeleft", function(sym, e) {
         sym.play("navOut");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'large1'
   (function(symbolName) {   
   
   })("panel1");
   //Edge symbol end:'panel1'

   //=========================================================
   
   //Edge symbol: 'button'
   (function(symbolName) {   
      

   })("button");
   //Edge symbol end:'button'

   //=========================================================
   
   //Edge symbol: 'large1_1'
   (function(symbolName) {   
   
      })("panel2");
   //Edge symbol end:'panel2'

   //=========================================================
   
   //Edge symbol: 'large2_1'
   (function(symbolName) {   
   
      })("panel3");
   //Edge symbol end:'panel3'

})(jQuery, AdobeEdge, "EDGE-260752881");