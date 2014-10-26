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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         var counter_delay = 0;
         var max_count = 25463;
         var present_count = 25400;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text6").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text6").html(25463);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         var counter_delay = 0;
         var max_count =10648;
         var present_count = 10500;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text7").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text7").html(10648);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1071, function(sym, e) {
         var counter_delay = 0;
         var max_count =90;
         var present_count = 40;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text8").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text8").html(90);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         var counter_delay = 0;
         var max_count =120;
         var present_count = 70;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text9").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text9").html(120);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         var counter_delay = 0;
         var max_count =123;
         var present_count = 40;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text10").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text10").html(123);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2333, function(sym, e) {
         var counter_delay = 0;
         var max_count =48;
         var present_count = 10;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text11").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text11").html(48);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2833, function(sym, e) {
         var counter_delay = 0;
         var max_count =64;
         var present_count = 10;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text12").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text12").html(64);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3333, function(sym, e) {
         var counter_delay = 0;
         var max_count =44;
         var present_count = 10;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text13").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text13").html(44);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'title_lines'
   (function(symbolName) {   
   
   })("title_lines");
   //Edge symbol end:'title_lines'

   //=========================================================
   
   //Edge symbol: 'icons_srednee_region'
   (function(symbolName) {   
   
   })("icons_srednee_region");
   //Edge symbol end:'icons_srednee_region'

})(jQuery, AdobeEdge, "EDGE-6482221");