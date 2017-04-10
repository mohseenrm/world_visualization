/**
 * Created by Nagarchith Balaji on 4/1/2017.
 */


var obj = new Object();
obj.year = 1970;
obj.fsi  = true;
obj.gdp  = false;
obj.inf  = false;
obj.gini  = false;
obj.popu  = false;
obj.emp  = false;
obj.res  = false;

/*$('#range').on("change", function() {
    $('.output').val(this.value );
    obj.year = this.value;
    PostData()
    // alert(obj.year)
}).trigger("change");*/



$(".slider")

    .slider({
        min: 1970,
        max: 2014,
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
    clicked = $(this).data('index');
     //alert(clicked)
     if(clicked == 0 ){
         obj.fsi  = true;
         obj.gdp  = false;
         obj.inf  = false;
         obj.gini  = false;
         obj.popu  = false;
         obj.emp  = false;
         obj.res  = false;
         document.getElementById("GDP").checked = false;
         document.getElementById("Inf").checked = false;
         document.getElementById("Gini").checked = false;
         document.getElementById("cheap").checked = false;
         document.getElementById("Emp").checked = false;
         document.getElementById("Reserve").checked = false;
         PostData()
     }
    if(clicked == 1 ){
        obj.fsi  = false;
        obj.gdp  = true;
        obj.inf  = false;
        obj.gini  = false;
        obj.popu  = false;
        obj.emp  = false;
        obj.res  = false;
        document.getElementById("FSI").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Gini").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        PostData()
    }
    if(clicked == 2 ){
        obj.fsi  = false;
        obj.gdp  = false;
        obj.inf  = true;
        obj.gini  = false;
        obj.popu  = false;
        obj.emp  = false;
        obj.res  = false;
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Gini").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        PostData()
    }
    if(clicked == 3 ){
        obj.fsi  = false;
        obj.gdp  = false;
        obj.inf  = false;
        obj.gini  = true;
        obj.popu  = false;
        obj.emp  = false;
        obj.res  = false;
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        PostData()
    }
    if(clicked == 4 ){
        obj.fsi  = false;
        obj.gdp  = false;
        obj.inf  = false;
        obj.gini  = false;
        obj.popu  = true;
        obj.emp  = false;
        obj.res  = false;
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Gini").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        PostData()
    }
    if(clicked == 5 ){
        obj.fsi  = false;
        obj.gdp  = false;
        obj.inf  = false;
        obj.gini  = false;
        obj.popu  = false;
        obj.emp  = true;
        obj.res  = false;
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Gini").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Reserve").checked = false;
        PostData()
    }
    if(clicked == 6 ){
        obj.fsi  = false;
        obj.gdp  = false;
        obj.inf  = false;
        obj.gini  = false;
        obj.popu  = false;
        obj.emp  = false;
        obj.res  = true;
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Gini").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Inf").checked = false;
        PostData()
    }

});

function PostData(){
   // $.post("https://localhost:9001/main",JSON.stringify(obj),"","json");

    // Or this
    // var bad = JSON.stringify(obj) + " 0\r\n";
    // var x = new XMLHttpRequest();
    // x.open("POST", "http://localhost:6379");
    // x.send(bad);

    $.ajax({
        type: 'POST',
        url: "https://localhost:9001/main",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(obj)
    })
        .done(function( msg ) {
            alert( "Data Saved: " + msg );
        });

}
