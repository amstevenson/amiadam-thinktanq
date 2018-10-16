window.setTimeout(function() {
    window.location.href = "match"
}, 5000);

/*
(function ($) {
   var count = 0
   var interval = 5000
   var maxTries = 12

   // Call our main endpoint via ajax
   // This kicks off the call to deed api
   $.ajax({
     dataType: 'json',
     method: 'POST',
     cache: false,
     data: {
       // empty for now
     },
     //url: 'match',
     //timeout: interval * maxTries, // Make it wait for the full duration
     //success: function (data) {
     //  if (data.error) {
     //    window.location.href = "match"
     //  }
     //}
   })

   // Function to check the status of the request periodically
   function getProcessingResult () {
     count++

     // Call our checking endpoint via ajax
     $.ajax({
       dataType: 'json',
       method: 'GET',
       cache: false,
       // url: 'get-processing-result',
       //success: function (data) {
         // If it's ready, redirect, otherwise go round again
       //  if (data.result) {
           window.location.href = 'match'
       //  }
         // If error occurs redirect to error page
       //  if (data.error) {
       //    window.location = data.redirect
       //  }
       //}
     })

     if (count < maxTries) {
       setTimeout(checkDeedIsSigned, interval)
     } else {
       window.location.href = 'no-match'
     }
   }

   // Every 5 seconds check again
   setTimeout(getProcessingResult, interval)
 })(window.jQuery)
*/