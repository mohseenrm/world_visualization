/**
 * Created by Nagarchith Balaji on 4/1/2017.
 */


var obj = new Object();
obj.year = 1970;
obj.filter="FSI";

var c_id,c_val;

var year_data = new Object();
year_data ={
    "2008":"In September, Wall Street experiences what many experts label as the biggest economic disaster since the Great Depression. It\'s fueled by an ongoing, multi-billion-dollar mortgage crisis. Lehman Brothers collapses. AIG, American International Group, the country\'s largest insurance company, files for bankruptcy despite a $85 billion bailout. Washington Mutual is sold to JP Morgan Chase. In October, President Bush signs a $700 billion rescue plan for the banks.<\/p><p> In December, Bush signs a $17.4 billion rescue package for ailing auto makers General Motors and Chrysler. The Big Three CEOs blame their problems on the growing global economic crisis, but critics charge they were too slow to produce fuel-efficient cars.<\/p>",
    '1970':'U.S. President Richard Nixon orders an invasion of Cambodia, widening the war in Vietnam. In protest, millions march across the U.S. University campuses are shut down by student strikes. Four protestors at Kent State University in Ohio are killed by National Guard troops. The U.S. Senate repeals the Gulf of Tonkin resolution that had given Presidents Johnson and Nixon sweeping powers in the Vietnam War. The Beatles break up. Egyptian president Gamal Abdel-Nassar dies. Anwar Sadat becomes president.',
    '1973':'The 1973 oil crisis began in October 1973 when the members of the Organization of Arab Petroleum Exporting Countries proclaimed an oil embargo. The embargo occurred in response to United States\' support for Israel during the Yom Kippur War. By the end of the embargo in March 1974, the price of oil had risen from US $3 per barrel to nearly $12 globally; US prices were significantly higher. The embargo caused an oil crisis, or "shock", with many short- and long-term effects on global politics and the global economy.[3]It was later called the "first oil shock", followed by the 1979 oil crisis, termed the "second oil shock."',
    '1987':'In finance, Black Monday refers to Monday, October 19, 1987, when stock markets around the world crashed, shedding a huge value in a very short time. The crash began in Hong Kong and spread west to Europe, hitting the United States after other markets had already declined by a significant margin. The Dow Jones Industrial Average (DJIA) fell exactly 508 points to 1,738.74 (22.61%).In Australia and New Zealand, the 1987 crash is also referred to as "Black Tuesday" because of the time zone difference.',
    '1991':'By 1985, India had started having balance of payments problems. By the end of 1990, it was in a serious economic crisis. The government was close to default, its central bank had refused new credit and foreign exchange reserves had been reduced to such a point that India could barely finance three weeks’ worth of imports which led the Indian government to airlift national gold reserves as a pledge to the International Monetary Fund (IMF) in exchange for a loan to cover balance of payment debts'
};

// To assign color
const getColumn = ( field ) => {
    switch( field ){
        case 'GDP':
            return 'gdp_us';
        case 'FSI':
            return 'fsi';
        case 'INF':
            return 'inflation';
        case 'POP':
            return 'populationgrowth';
        case 'EMP':
            return 'employmentratio';
        case 'RES':
            return 'reserves';
        case 'FDI':
            return 'fdi';
        case 'TRA':
            return 'trade';
        default:
            return 'fsi';
    };
}


// Get the modal
var modal = document.getElementById('myModal');



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




$(".slider")

    .slider({
        min: 1970,
        max: 2014,
        step: 1,
        slide: function( event, ui ) {
            //$( "#year_selected" ).val( ui.value);
            obj.year=ui.value;
            switch (ui.value){
                case 2000:
                    var str='<video  loop autoplay><source src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/6/15/16/anigif_enhanced-buzz-5196-1339793944-0.gif?output-format=mp4" type="video/mp4"/></video>';
                    document.getElementById("year_info").innerHTML=str;
                    modal.style.display="block";
                    break;
                case 2008:
                    var str='<video width="100%" loop autoplay><source src="images/event2008.mp4" type="video/mp4"/></video>';
                    document.getElementById("year_info").innerHTML=str;
                    modal.style.display="block";
                    break;
                    //https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/6/15/17/anigif_enhanced-buzz-23421-1339794637-3.gif?output-format=mp4
                case 1970:
                    document.getElementById("year_info").innerHTML=year_data["1970"];
                    modal.style.display="block";
                    break;
                case 1973:
                    document.getElementById("year_info").innerHTML=year_data["1973"];
                    modal.style.display="block";
                    break;
                case 1989:
                    var str='<video  loop autoplay><source src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web03/2012/6/15/17/anigif_enhanced-buzz-5301-1339794593-7.gif?output-format=mp4" type="video/mp4"/></video>';
                    document.getElementById("year_info").innerHTML=str;
                    modal.style.display="block";
                    break;
                case 1990:
                    var str='<video  loop autoplay><source src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/6/15/17/anigif_enhanced-buzz-23421-1339794637-3.gif?output-format=mp4" type="video/mp4"/></video>';
                    document.getElementById("year_info").innerHTML=str;
                    modal.style.display="block";
                    break;
                case 1991:
                    document.getElementById("year_info").innerHTML=year_data["1991"];
                    modal.style.display="block";
                    break;

            }
            /*if(ui.value==2008){
                document.getElementById("year_info").innerHTML=year_data["2008"];
                modal.style.display="block";
            }*/

            PostData();
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
         obj.filter="FSI";
         document.getElementById("GDP").checked = false;
         document.getElementById("Inf").checked = false;
         document.getElementById("FDI").checked = false;
         document.getElementById("cheap").checked = false;
         document.getElementById("Emp").checked = false;
         document.getElementById("Reserve").checked = false;
         PostData()
     }
    if(clicked == 1 ){
        obj.filter="GDP";
        document.getElementById("FSI").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("FDI").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        document.getElementById("Trade").checked = false;
        PostData()
    }
    if(clicked == 2 ){
        obj.filter="INF";
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("FDI").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        document.getElementById("Trade").checked = false;
        PostData()
    }
    if(clicked == 3 ){
        obj.filter="TRA";
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        document.getElementById("FDI").checked = false;
        PostData()
    }
    if(clicked == 4 ){
        obj.filter="POP";
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("FDI").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Reserve").checked = false;
        document.getElementById("Trade").checked = false;
        PostData()
    }
    if(clicked == 5 ){
        obj.filter="EMP";
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("FDI").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Reserve").checked = false;
        document.getElementById("Trade").checked = false;
        PostData()
    }
    if(clicked == 6 ){
        obj.filter="RES";
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("FDI").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Trade").checked = false;
        PostData()
    }
    if(clicked == 7 ){
        obj.filter="FDI";
        document.getElementById("FSI").checked = false;
        document.getElementById("GDP").checked = false;
        document.getElementById("Reserve").checked = false;
        document.getElementById("cheap").checked = false;
        document.getElementById("Emp").checked = false;
        document.getElementById("Inf").checked = false;
        document.getElementById("Trade").checked = false;
        PostData()
    }
});

// Render color to map from post request
function Render_Map(data) {
    col = getColumn(obj.filter).concat('_');

    console.log(data);
    for(var i = 0; i < data.length; i++) {
        var country = undefined;
        var val = data[i];
        console.log(val.countrycode);
        console.log(val.countryname);

        //TODO: Error handling
        country = document.getElementById(val.countrycode);
        c_id=Object.keys(val)[1];
        c_val=Object.values(val)[1];
        console.log("key 1 is: "+Object.keys(val)[1]);
        console.log("value  is: "+Object.values(val)[1]);
        document.getElementsByTagName("path")[i].setAttribute("class","tooltip");

        if( country === undefined || country === null )
            continue;

        country.style.fill = val.color;
    }
    document.getElementById('NA').style.fill=val.color;
    document.getElementById('CI').style.fill=val.color;

}



$( "#svgContainer" ).click(function( event ) {
    var ip=document.getElementsByTagName(event.target.nodeName);
    console.log(event.target.id);


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
        url: "http://localhost:9001/main",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(obj),
        success: function( msg ) {
            console.log( msg );
            Render_Map(msg.data);
        }
    });
}