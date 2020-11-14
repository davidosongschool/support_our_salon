

let shopsfound;
let numofshops;

function selectCounty(county) {
$(".contain-salon").addClass('d-none');
$("." + county).removeClass('d-none');
}



function search(county) {

// GET DATA //
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    displayData(JSON.parse(this.responseText), county);

    }
};
// set url based on selected trending item
xhr.open("GET", "assets/database/data.json");
xhr.send();
    
function displayData(data, county) {
    console.log("function called");
    shop = data;
    document.getElementById("container-row").innerHTML = '';
    document.getElementById("resultstotal").innerHTML = '';
    shopsfound = 0;
    numofshops = 0;

    for (i=0; i < shop.shops.length; i++) {
        if (shop.shops[i].County.includes(county)) {
        numofshops++;    
        shopsfound = 1;
        document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-lg-4 contain-salon mt-3 dublin"><a href="' + shop.shops[i].Link + '"><img src="' + shop.shops[i].Image + '" alt="' + shop.shops[i].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[i].Name +  '</div><div class="contain-location d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[i].County +  '</div></span></div></div>' 
    } 
    }

    if (shopsfound != 1){
        document.getElementById("container-row").innerHTML = '<div class="col-12 text-center">Looks like there are no shops in your area yet</div>';
    }


    document.getElementById("resultstotal").innerHTML = county
}
}




// Navigation mobile 

$(".mobile-menu-burger").click(function(){
$(".contain-mobile-menu").toggle("slide", {direction: "left"}, 100);
$(".contain-message").toggle("slide", {direction: "right"}, 100);
});


$(".mobile-menu-link").click(function(){
    $(".contain-mobile-menu").toggle("slide", {direction: "left"}, 100);
    $(".contain-message").toggle("slide", {direction: "right"}, 100);
    });