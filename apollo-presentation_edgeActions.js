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
              var lastScroll, scrollSeq = -1;
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
        
        	window.setTimeout(function() {
        		sym.play("myCardsIn");
        		sym.getComposition().getStage().getSymbol("COVERFLOW_sym").getSymbol("cardFlow_symbol").getSymbol("nonFullCards_Symbol").play("cardFlowIn");            
        	}, 0);
        
          	window.setTimeout(function() { 
            	sym.play("breakingAlertIn");
         	}, 9000);
        
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "swiperight", function(sym, e) {
         $("#Stage_MAINNAV_sym").fadeIn();
         sym.getSymbol("MAINNAV_sym").play("navIn");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6100, function(sym, e) {
         sym.stop();

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
         sym.getComposition().getStage().getSymbol("FULLCARDS_sym").getSymbol("livFull_symbol").play("livFullExpand");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy3}", "click", function(sym, e) {
         sym.play("myCardsFlip2");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCardCopy2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("FULLCARDS_sym").getSymbol("natsFull_symbol").play("natsFullExpand");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "click", function(sym, e) {
         sym.play("myCardsFlip3");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleFullCard}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("FULLCARDS_sym").getSymbol("natsFull_symbol").play("natsFullExpand");

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
         sym.play("livFullClose");

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
         sym.play("natsFullClose");
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
      
      
      
      
      
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      
      
      
      
      
      
      
      
      
      
      

   })("cardFlow_symbol");
   //Edge symbol end:'cardFlow_symbol'

   //=========================================================
   
   //Edge symbol: 'mainNav_symbol'
   (function(symbolName) {   
      
      
      
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
         // sym.getComposition().getStage().play("cardFlowSlideLeft");
         $("#Stage_MAINNAV_sym").fadeOut();

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_nav-new}", "swipeleft", function(sym, e) {
         sym.play("navOut");
         $("#Stage_MAINNAV_sym").fadeOut();

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${_newsTopicLink}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").$("coverFlow").hide();
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").$("newsCoverFlow").show();
         sym.play("navOut");
         $("#Stage_MAINNAV_sym").fadeOut();
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").getSymbol("newsFlow_symbol").getSymbol("newsCards_Symbol").play("newsFlowIn");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_homeLink}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").$("newsCoverFlow").hide();
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").$("coverFlow").show();
         sym.play("navOut");
         $("#Stage_MAINNAV_sym").fadeOut();
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").play("myCardsIn");
         sym.getComposition().getStage().getSymbol("COVERFLOW_sym").getSymbol("cardFlow_symbol").getSymbol("nonFullCards_Symbol").play("cardFlowIn");

      });
      //Edge binding end

   })("MAINNAV_sym");
   //Edge symbol end:'MAINNAV_sym'

   //=========================================================
   
   //Edge symbol: 'Symbol_articleGroup'
   (function(symbolName) {   
      Symbol.bindElementAction(compId, symbolName, "${_article-card-fullCopy}", "click", function(sym, e) {   
      	sym.play("ArticleFlipBack");	
      	$('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeOut(50);

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

   })("Symbol_articleGroup");
   //Edge symbol end:'Symbol_articleGroup'

   //=========================================================
   
   //Edge symbol: 'Symbol_articleVideoGroup'
   (function(symbolName) {   
      
      Symbol.bindElementAction(compId, symbolName, "${_videoArticleCardFull}", "click", function(sym, e) {
      sym.play("VideoArticleFlipBack");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleVideoGroup').fadeOut();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 433, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 933, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end

   })("Symbol_articleVideoGroup");
   //Edge symbol end:'Symbol_articleVideoGroup'

   //=========================================================
   
   //Edge symbol: 'Symbol_articleAssetlessGroup'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 860, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1360, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Symbol_articleAssetlessGroup");
   //Edge symbol end:'Symbol_articleAssetlessGroup'

   //=========================================================
   
   //Edge symbol: 'Symbol_loader'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         $('#Stage_Symbol_loader').fadeOut();
         sym.stop();

      });
      //Edge binding end

   })("Symbol_loader");
   //Edge symbol end:'Symbol_loader'

   //=========================================================
   
   //Edge symbol: 'cardFlow_symbol_1'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      })("newsFlow_symbol");
   //Edge symbol end:'newsFlow_symbol'

   //=========================================================
   
   //Edge symbol: 'nonFullCards_Symbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_article-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);   

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-3-4-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);   

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-video-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleVideoGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleVideoGroup").play("VideoArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleVideoGroup_articleVideoGroup').scrollTop(0); 

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-gallery-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);   

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-assetless-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);   

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();// insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("nonFullCards_Symbol");
   //Edge symbol end:'nonFullCards_Symbol'

   //=========================================================
   
   //Edge symbol: 'nonFullCards_Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_article-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);   	   	   

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-3-4-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);     

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-video-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleVideoGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleVideoGroup").play("VideoArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleVideoGroup_articleVideoGroup').scrollTop(0); 

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-gallery-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);    	

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_article-assetless-card}", "click", function(sym, e) {
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup').fadeIn();
      sym.getComposition().getStage().getSymbol("ARTICLEFULL_sym").getSymbol("Symbol_articleGroup").play("ArticleFlip");
      $('#Stage_ARTICLEFULL_sym_Symbol_articleGroup_articleGroup').scrollTop(0);    

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("newsCards_Symbol");
   //Edge symbol end:'newsCards_Symbol'

   //=========================================================
   
   //Edge symbol: 'ALERT_sym'
   (function(symbolName) {   
   
   })("ALERT_sym");
   //Edge symbol end:'ALERT_sym'

   //=========================================================
   
   //Edge symbol: 'FULLCARDS_sym'
   (function(symbolName) {   
   
   })("FULLCARDS_sym");
   //Edge symbol end:'FULLCARDS_sym'

   //=========================================================
   
   //Edge symbol: 'COVERFLOW_sym'
   (function(symbolName) {   
   
   })("COVERFLOW_sym");
   //Edge symbol end:'COVERFLOW_sym'

   //=========================================================
   
   //Edge symbol: 'NAVBAR_sym'
   (function(symbolName) {   
   
   })("NAVBAR_sym");
   //Edge symbol end:'NAVBAR_sym'

   //=========================================================
   
   //Edge symbol: 'FULLARTICLE_sym'
   (function(symbolName) {   
   
   })("FULLARTICLE_sym");
   //Edge symbol end:'FULLARTICLE_sym'

   //=========================================================
   
   //Edge symbol: 'ARTICLEFULL_sym'
   (function(symbolName) {   
   
   })("ARTICLEFULL_sym");
   //Edge symbol end:'ARTICLEFULL_sym'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'discoverHeader_sym'
   (function(symbolName) {   
   
   })("discoverHeader_sym");
   //Edge symbol end:'discoverHeader_sym'

   //=========================================================
   
   //Edge symbol: 'topCard_first_sym'
   (function(symbolName) {   
   
   })("discoverTopcard_first_syn");
   //Edge symbol end:'discoverTopcard_first_syn'

   //=========================================================
   
   //Edge symbol: 'discoverTopBG_sym'
   (function(symbolName) {   
   
   })("discoverTopBG_sym");
   //Edge symbol end:'discoverTopBG_sym'

   //=========================================================
   
   //Edge symbol: 'discover'
   (function(symbolName) {   
   
   })("DISCOVER_sym");
   //Edge symbol end:'DISCOVER_sym'

   //=========================================================
   
   //Edge symbol: 'discoverBodyBG_sym'
   (function(symbolName) {   
   
   })("discoverBodyBG_sym");
   //Edge symbol end:'discoverBodyBG_sym'

   //=========================================================
   
   //Edge symbol: 'topCard_second_sym'
   (function(symbolName) {   
   
   })("discoverTopcard_second_sym");
   //Edge symbol end:'discoverTopcard_second_sym'

   //=========================================================
   
   //Edge symbol: 'discoverCard_right_sym'
   (function(symbolName) {   
   
   })("discoverCard_right_sym");
   //Edge symbol end:'discoverCard_right_sym'

   //=========================================================
   
   //Edge symbol: 'dicoverCard_left_sym'
   (function(symbolName) {   
   
   })("dicoverCard_left_sym");
   //Edge symbol end:'dicoverCard_left_sym'

   //=========================================================
   
   //Edge symbol: 'search_sym'
   (function(symbolName) {   
   
   })("mainfrontSearch_sym");
   //Edge symbol end:'mainfrontSearch_sym'

})(jQuery, AdobeEdge, "EDGE-260752881");