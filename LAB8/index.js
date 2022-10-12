$(".calculator").click(function(){
   var cal= $(".input").val()
    var obj={}
    for(x=0;x<cal.length;x++){
        var chart=cal.charAt(x)
        obj[chart]=(isNaN(obj[chart])) ? 1 : obj[chart]+1
    }
    $(".chart").append(Object.keys(obj));
    $(".res").append(Object.values(obj));
})
//oliver
  $(".clear").click(function(){
    $("#input").empty();
});
