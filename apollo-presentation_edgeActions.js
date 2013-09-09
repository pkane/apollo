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
         sym.play("CardFlip");
         // $('#Stage_coverFlow').scrollTop(0);
         // xLinker = Math.round($('#Stage_article-card').offset().top);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-3-4-card}", "click", function(sym, e) {
         sym.play("34ArticleFlip");
         $('#Stage_coverFlow').scrollTop(0);
         //window.setTimeOut($('#Stage_coverFlow').scrollTop(0) , 50);
         xLinker = Math.round($('#Stage_article-3-4-card').offset().top);         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-video-card}", "click", function(sym, e) {
         sym.play("34ArticleFlip");
         $('#Stage_coverFlow').scrollTop(0);
         xLinker = Math.round($('#Stage_article-video-card').offset().top);                  

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-gallery-card}", "click", function(sym, e) {
         sym.play("FlipBack");        
         // $('#Stage_coverFlow').scrollTop(0);
         // xLinker = Math.round($('#Stage_article-gallery-card').offset().top);                  

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-assetless-card}", "click", function(sym, e) {
         sym.play("FlipBack");
         // $('#Stage_coverFlow').scrollTop(0);
         // xLinker = Math.round($('#Stage_article-assetless-card').offset().top);                           

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_video-card}", "click", function(sym, e) {
         sym.play("videoArticleFlip");
         // window.setTimeOut(50);
         $('#Stage_coverFlow').scrollTop(0);
         xLinker = Math.round($('#Stage_video-card').offset().top);                                    

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_leftSwipeEle}", "swiperight", function(sym, e) {
         sym.play("ArticleSlideOut");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-card-full}", "click", function(sym, e) {
         sym.play("ArticleSlideOut");
         // $('#Stage_coverFlow').scrollTop(xLinker);

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
         sym.play("FlipBack");
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