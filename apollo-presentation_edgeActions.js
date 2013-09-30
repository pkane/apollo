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
                        sym.play("topPanelUp");
                     }                     
                  }
                  else {
                     scrollSeq = 1;
                     if (scrollStore != scrollSeq) {
                         sym.play("topPanelDown");
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
         
         	function update_me() {
         	setTimeout(function(){
         		counter++;
         		update_me();
         	}, 1000);
         	}
         
         	// run code
         	// update_me();	
           // var detection = scrollDetect($('#Stage_coverFlow'));
         
         
        // When ready...
        window.addEventListener("load",function() {
            // Set a timeout...
            setTimeout(function(){
                // Hide the address bar!
                window.scrollTo(0, 1);
            }, 0);
        });          
        
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2151, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2751, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3951, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4551, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4958, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5303, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12255, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12833, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13415, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "swiperight", function(sym, e) {
         sym.play("cardFlowSlideRight");
         sym.getSymbol("mainNav_symbol").play("navIn");

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

   //=========================================================
   
   //Edge symbol: 'myCards_symbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         sym.play("myCardsFlip1");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCardCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("livFull_symbol").play("livFullExpand");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy3}", "click", function(sym, e) {
         sym.play("myCardsFlip2");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCardCopy2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("natsFull_symbol").play("natsFullExpand");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "click", function(sym, e) {
         sym.play("myCardsFlip3");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCard}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("natsFull_symbol").play("natsFullExpand");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3600, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy6}", "click", function(sym, e) {
         sym.play("myCardsFlip1");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy7}", "click", function(sym, e) {
         sym.play("myCardsFlip2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy8}", "click", function(sym, e) {
         sym.play("myCardsFlip2");

      });
      //Edge binding end

   })("myCards_symbol");
   //Edge symbol end:'myCards_symbol'

   //=========================================================
   
   //Edge symbol: 'livFull_symbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_liverpool-full}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("livFull_symbol").play("livFullClose");
         // sym.getComposition().getStage().stop("myCardsFlipBack");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 563, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("livFull_symbol");
   //Edge symbol end:'livFull_symbol'

   //=========================================================
   
   //Edge symbol: 'natsFull_symbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_baseball-full}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("natsFull_symbol").play("natsFullClose");
         // sym.getComposition().getStage().stop("myCardsFlipBack");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 497, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("natsFull_symbol");
   //Edge symbol end:'natsFull_symbol'

   //=========================================================
   
   //Edge symbol: 'cardFlow_symbol'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${__34ArticleCardFull}", "click", function(sym, e) {   
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeIn(function() {
         	sym.play("34ArticleFlipBack");
            $('#Stage_myCards_symbol').fadeIn(function() {         
         		$('#Stage_coverFlow').scrollTop(xLinker);         
            });
         });
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_article-card-fullCopy}", "click", function(sym, e) {   
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeIn(function() {
      		sym.play("ArticleFlipBack");   
         	$('#Stage_myCards_symbol').fadeIn(function() {   		
      		   $('#Stage_coverFlow').scrollTop(xLinker);   		
         	});
         });   
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_videoArticleCardFull}", "click", function(sym, e) {
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeIn(function() {
         	sym.play("videoArticleFlipBack");
      		$('#Stage_myCards_symbol').fadeIn(function() {		   
         		$('#Stage_coverFlow').scrollTop(xLinker);      		   
      		});
         });   	
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_article-card}", "click", function(sym, e) {
      	xLinker = Math.round($('#Stage_cardFlow_symbol2_article-card').offset().top);                           
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeOut(function() {
         	$('#Stage_myCards_symbol').fadeOut(function(){
         		sym.play("ArticleFlip");
         		$('#Stage_coverFlow').scrollTop(0);
         	});	
         });
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_article-3-4-card}", "click", function(sym, e) {
      	xLinker = Math.round($('#Stage_cardFlow_symbol2_article-3-4-card').offset().top);         
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeOut(function() {
         	$('#Stage_myCards_symbol').fadeOut(function(){
         		sym.play("34ArticleFlip");
         		$('#Stage_coverFlow').scrollTop(0);
         	});	
         });
      
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_article-video-card}", "click", function(sym, e) {
      	xLinker = Math.round($('#Stage_cardFlow_symbol2_article-video-card').offset().top);         
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeOut(function() {
         	$('#Stage_myCards_symbol').fadeOut(function(){
         		sym.play("videoArticleFlip");
         		$('#Stage_coverFlow').scrollTop(0);
         	});	
         });
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_article-gallery-card}", "click", function(sym, e) {
      	xLinker = Math.round($('#Stage_cardFlow_symbol2_article-gallery-card').offset().top);                  
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeOut(function() {
         	$('#Stage_myCards_symbol').fadeOut(function(){
         		sym.play("34ArticleFlip");
         		$('#Stage_coverFlow').scrollTop(0);
         	});	
         });
      
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_article-assetless-card}", "click", function(sym, e) {
      	xLinker = Math.round($('#Stage_cardFlow_symbol2_article-assetless-card').offset().top);                           
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeOut(function() {
         	$('#Stage_myCards_symbol').fadeOut(function(){
         		sym.play("34ArticleFlip");
         		$('#Stage_coverFlow').scrollTop(0);
         	});	
         });
      
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_video-card}", "click", function(sym, e) {
      	xLinker = Math.round($('#Stage_video-card').offset().top);
         $('#Stage_cardFlow_symbol2_nonFullCards').fadeOut(function() {
         	$('#Stage_myCards_symbol').fadeOut(function(){
         		sym.play("videoArticleFlip");
         		$('#Stage_coverFlow').scrollTop(0);
         	});	
         }); 
      
      });
            //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 827, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1327, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1927, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2427, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3027, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3527, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end

   })("cardFlow_symbol");
   //Edge symbol end:'cardFlow_symbol'

   //=========================================================
   
   //Edge symbol: 'mainNav_symbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_nav-main2}", "swipeleft", function(sym, e) {
         sym.play("navOut");
         sym.getComposition().getStage().play("cardFlowSlideLeft");v

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1167, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "touchend", function(sym, e) {
         sym.play("navOut");
         sym.getComposition().getStage().play("cardFlowSlideLeft");

      });
      //Edge binding end

   })("mainNav_symbol");
   //Edge symbol end:'mainNav_symbol'

})(jQuery, AdobeEdge, "EDGE-260752881");