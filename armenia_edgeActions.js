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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12613, function(sym, e) {
         var counter_delay = 0;
         var max_count =2969;
         var present_count = 2600;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text1_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text1_part3").html(2969);
           clearInterval(timer);
         }
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12904, function(sym, e) {
         var counter_delay = 0;
         var max_count =2976;
         var present_count = 2600;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text2_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text2_part3").html(2976);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12621, function(sym, e) {
         var counter_delay = 0;
         var max_count =72;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text3_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text3_part3").html(72);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12911, function(sym, e) {
         var counter_delay = 0;
         var max_count =74;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text5_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text5_part3").html(74);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13413, function(sym, e) {
         var counter_delay = 0;
         var max_count =7890;
         var present_count = 7700;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text6_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text6_part3").html(7890);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13426, function(sym, e) {
         var counter_delay = 0;
         var max_count =39;
         var present_count = 0;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text7_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text7_part3").html(39);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         var counter_delay = 0;
         var max_count =8140;
         var present_count = 7900;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text8_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text8_part3").html(8150);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13772, function(sym, e) {
         var counter_delay = 0;
         var max_count =46;
         var present_count = 0;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text9_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text9_part3").html(46);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14325, function(sym, e) {
         var counter_delay = 0;
         var max_count =87;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text10_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text10_part3").html(87);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14750, function(sym, e) {
         var counter_delay = 0;
         var max_count =87;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text11_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text11_part3").html(87);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14346, function(sym, e) {
         var counter_delay = 0;
         var max_count =84;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text12_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text12_part3").html(87);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14765, function(sym, e) {
         var counter_delay = 0;
         var max_count =78;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text13_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text13_part3").html(78);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15384, function(sym, e) {
         var counter_delay = 0;
         var max_count =114;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text14_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text14_part3").html(114);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15801, function(sym, e) {
         var counter_delay = 0;
         var max_count =116;
         var present_count = 20;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text17_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text17_part3").html(116);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15414, function(sym, e) {
         var counter_delay = 0;
         var max_count =29;
         var present_count = 1;
         var timer = window.setInterval(stepUp,counter_delay);
         function stepUp(){
         present_count++;
         // Change the text of an element
         sym.$("Text20_part3").html(present_count);
         if(present_count==max_count)
         {
           sym.$("Text20_part3").html(29);
           clearInterval(timer);
         }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_www2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.digital.report", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.digital.report", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
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

   //=========================================================
   
   //Edge symbol: 'part3'
   (function(symbolName) {   
   
   })("part3");
   //Edge symbol end:'part3'

   //=========================================================
   
   //Edge symbol: 'part3arcs'
   (function(symbolName) {   
   
   })("part3arcs");
   //Edge symbol end:'part3arcs'

})(jQuery, AdobeEdge, "EDGE-6482221");