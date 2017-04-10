/**
 * Created by Nagarchith Balaji on 4/1/2017.
 */


var obj = new Object();
obj.year = 1961;
obj.filt1  = true;
obj.filt2  = false;
obj.filt3  = false;

/*$('#range').on("change", function() {
    $('.output').val(this.value );
    obj.year = this.value;
    PostData()
    // alert(obj.year)
}).trigger("change");*/



$(".slider")

    .slider({
        min: 1960,
        max: 2016,
        step: 1,
        slide: function( event, ui ) {
            //$( "#year_selected" ).val( ui.value);
            obj.year=ui.value;
            //alert(obj.year);

        }
    })

    .slider("pips", {
        rest: "label",
        step: 4
    })

    .slider("float");

$('input[type=checkbox]').change(function(){
    counter = 0;
    clicked = $(this).data('index');
    // alert(clicked)
     if(clicked == 0 ){
         obj.filt1=true;
         obj.filt2=false;
         obj.filt3=false;
         document.getElementById("fast").checked = false;
         document.getElementById("quality").checked = false;
         PostData()
     }
    if(clicked == 1 ){
        obj.filt1=false;
        obj.filt2=true;
        obj.filt3=false;
        document.getElementById("cheap").checked = false;
        document.getElementById("quality").checked = false;
        PostData()
    }
    if(clicked == 2 ){
        obj.filt1=false;
        obj.filt2=false;
        obj.filt3=true;
        document.getElementById("fast").checked = false;
        document.getElementById("cheap").checked = false;
        PostData()
    }

});

function PostData(){
    $post("https://localhost:port//",JSON.stringify(obj),"","json");

    // Or this
    // var bad = JSON.stringify(obj) + " 0\r\n";
    // var x = new XMLHttpRequest();
    // x.open("POST", "http://localhost:6379");
    // x.send(bad);
}
