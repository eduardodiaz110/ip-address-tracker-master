    var ip = "73.181.106.19";
    var api_key = "at_3Z7JE0lsQZ3ufCHiceuwXz3Jw5oca";
    $(function () {
       $.ajax({
           url: "https://geo.ipify.org/api/v1",
           data: {apiKey: api_key, ipAddress: ip},
           success: function(data) {
               $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
           }
       });
    });