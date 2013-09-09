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
         /**
          * Tab panel Template
          * To add more items simply duplicate the symbol "content3" in the library and increase the number.
          * Then you can customize the content of the new symbol by double clicking on the symbol in the library.
          * The tab navigation will be extended automatically. 
          * You can set the labels of the tabs in the config section below.
         
          * Note: When the stage width is too small to display all the tabs, additional tabs will be automatically hidden
         
          **/
         
         /**
          * Add your label names here
          */
         sym.setVariable("labels", {
         	content1: "Custom Label",
         	content2: "Another Label",
         	content3: "Third Label"
         // For example, duplicate "content3" and name it "content4". Remove the "//" before "content4" below and add the name for the new tab.	
         // content4: "Fourth Label"	
         });
         
         
         
         /**
          * Don't modify the code below.
          */
         
         // Clear initial state
         sym.getSymbol("tab").deleteSymbol();
         
         // Find all large symbols in the library
         var prefix = "content"; // content1, content2 ... content99
         var allTabs = [];
         var symbolDefns = sym.getComposition().symbolDefns;
         for (var key in symbolDefns) {
           if (symbolDefns.hasOwnProperty(key) && key.search(new RegExp(prefix+"[0-9]{1,2}"))!=-1 ) {
             var tab = sym.createChildSymbol( "tab", "navigation" );
             tab.setVariable("contentId", key);
             sym.getVariable("firstTab") ? null : sym.setVariable("firstTab", tab);
             allTabs.push(tab);
             tab.$("btnLabel").html( sym.getVariable("labels")[key] || "undefined" );
             $tabEl = tab.getSymbolElement();
             $tabEl.data("sym", tab);
             $tabEl.css({float: "left", margin: "0 -1px 15px 0"});
             $tabEl.click(function(evt){
             	var tabSym = $(evt.currentTarget).data("sym");
             	$.each(allTabs, function(index,item) {
             		if (item != tabSym) { item.stop("normal"); item.setVariable("active", false); }
             	});
             	var $content = sym.$("content").empty();
             	sym.createChildSymbol(tabSym.getVariable("contentId"), "content");
             });
           }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Initially activate first Tab
         var firstTab = sym.getVariable("firstTab");
         firstTab.stop("active");
         firstTab.setVariable("active", true);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'content1'
   (function(symbolName) {   
   
   })("content1");
   //Edge symbol end:'content1'

   //=========================================================
   
   //Edge symbol: 'tab'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Register handler for mouse events to switch between states
         var el = sym.getSymbolElement();
         el.mouseenter(function(evt){ if (!sym.getVariable("active")) sym.stop("over");});
         el.mouseleave(function(evt){ if (!sym.getVariable("active")) sym.stop("normal");});
         el.mousedown(function(evt){ if (!sym.getVariable("active")) sym.stop("down");});
         el.click(function(evt){ sym.stop("active"); sym.setVariable("active", true); });

      });
      //Edge binding end

   })("tab");
   //Edge symbol end:'tab'

   //=========================================================
   
   //Edge symbol: 'content1_1'
   (function(symbolName) {   
   
      })("content2");
   //Edge symbol end:'content2'

   //=========================================================
   
   //Edge symbol: 'content2_1'
   (function(symbolName) {   
   
      })("content3");
   //Edge symbol end:'content3'

})(jQuery, AdobeEdge, "EDGE-50109628");