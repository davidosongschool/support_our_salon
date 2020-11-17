

let shopsfound;
let numofshops;

let munster = ["Clare", "Cork", "Kerry", "Limerick", "Tipperary", "Waterford"];
let leinster = ["Carlow", "Dublin", "Kildare", "Kilkenny", "Laois", "Longford", "Louth", "Meath", "Offaly", "Westmeath", "Wexford", "Wicklow"];
let ulster = ["Donegal"];
let connacht = ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"];

function selectCounty(county) {
$(".contain-salon").addClass('d-none');
$("." + county).removeClass('d-none');
}


random();


function random(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        randomData(JSON.parse(this.responseText));
    
        }
    };
    // set url based on selected trending item
    xhr.open("GET", "assets/database/data.json");
    xhr.send();

    function randomData(data) {
    shop = data;

    document.getElementById("container-row").innerHTML = '';
    document.getElementById("resultstotal").innerHTML = 'Some of our shops <button class="unstyle-btn" onclick="random()"><i class="fas fa-retweet"></i></button>';



    let max = shop.shops.length -5;
    let min = 0;
    let rand = [];

    // Generate 6 unique random number 
        
    while(rand.length < 6){
    let r = Math.floor(Math.random() * max) + 1;
    if(rand.indexOf(r) === -1) rand.push(r);
    }
    
    console.log(rand);


    document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[rand[0]].Link + '"><img src="' + shop.shops[rand[0]].Image + '" alt="' + shop.shops[rand[0]].Name +'" class="screenshot shadow-sm"></a><div class="col-6 contain-info mt-3 d-inline-block p-0">' + shop.shops[rand[0]].Name +  '</div><div class="col-6 contain-location mt-3 d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[rand[0]].County +  '</div></span></div></div>' 
    document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[rand[1]].Link + '"><img src="' + shop.shops[rand[1]].Image + '" alt="' + shop.shops[rand[1]].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[rand[1]].Name +  '</div><div class="contain-location mt-3 d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[rand[1]].County +  '</div></span></div></div>' 
    document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[rand[2]].Link + '"><img src="' + shop.shops[rand[2]].Image + '" alt="' + shop.shops[rand[2]].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[rand[2]].Name +  '</div><div class="contain-location  mt-3 d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[rand[2]].County +  '</div></span></div></div>' 
    document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[rand[3]].Link + '"><img src="' + shop.shops[rand[3]].Image + '" alt="' + shop.shops[rand[3]].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[rand[3]].Name +  '</div><div class="contain-location mt-3 d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[rand[3]].County +  '</div></span></div></div>' 
    document.getElementById("container-row").innerHTML += '<div class="col-12 d-none d-lg-block col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[rand[4]].Link + '"><img src="' + shop.shops[rand[4]].Image + '" alt="' + shop.shops[rand[4]].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[rand[4]].Name +  '</div><div class=" mt-3 contain-location d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[rand[4]].County +  '</div></span></div></div>' 
    document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 d-none d-lg-block col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[rand[5]].Link + '"><img src="' + shop.shops[rand[5]].Image + '" alt="' + shop.shops[rand[5]].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[rand[5]].Name +  '</div><div class="mt-3 contain-location d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[rand[5]].County +  '</div></span></div></div>' 


}

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
        document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[i].Link + '"><img src="' + shop.shops[i].Image + '" alt="' + shop.shops[i].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[i].Name +  '</div><div class="mt-3 contain-location d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[i].County +  '</div></span></div></div>' 
    } 
    }

    if (shopsfound != 1){
        document.getElementById("container-row").innerHTML = '<div class="col-12 text-center">Looks like there are no shops in your county yet!</div><div class="col-12 mt-4 text-center"><h4>Check out shops in your region!</h4></div>';
        
        // GET PROVINCE COUNTY IS IN
        

        if (county == 'Clare') {
            area = "Munster";
        }
       
        // OUTPUT PROVINCE DATA IF NO SHOP IN COUNTY

        // GET DATA //
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                displayData(JSON.parse(this.responseText), area);

            }
        };
        
        xhr.open("GET", "assets/database/data.json");
        xhr.send();

        function displayData(data, area) {
            console.log("function called");
            shop = data;
            
            document.getElementById("resultstotal").innerHTML = '';
            shopsfound = 0;
            numofshops = 0;

            for (i = 0; i < shop.shops.length; i++) {
                if (shop.shops[i].Area.includes(area)) {
                    numofshops++;
                    shopsfound = 1;
                    document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[i].Link + '"><img src="' + shop.shops[i].Image + '" alt="' + shop.shops[i].Name + '" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[i].Name + '</div><div class="mt-3 contain-location d-inline-block p-0"><div class="county-tag ml-auto">' + shop.shops[i].County + '</div></span></div></div>'
                }
            }

        }


    }


    document.getElementById("resultstotal").innerHTML = county
}
}


function prov(prov){


// GET DATA //
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    displayData(JSON.parse(this.responseText), prov);

    }
};

xhr.open("GET", "assets/database/data.json");
xhr.send();
    
function displayData(data, prov) {
    console.log("function called");
    shop = data;
    document.getElementById("container-row").innerHTML = '';
    document.getElementById("resultstotal").innerHTML = '';
    shopsfound = 0;
    numofshops = 0;

    for (i=0; i < shop.shops.length; i++) {
        if (shop.shops[i].Area.includes(prov)) {
        numofshops++;    
        shopsfound = 1;
        document.getElementById("container-row").innerHTML += '<div class="col-12 col-md-6 col-xl-4 contain-salon mt-3 dublin"><a href="' + shop.shops[i].Link + '"><img src="' + shop.shops[i].Image + '" alt="' + shop.shops[i].Name +'" class="screenshot shadow-sm"></a><div class="contain-info mt-3 d-inline-block p-0">' + shop.shops[i].Name +  '</div><div class="mt-3 contain-location d-inline-block p-0"><div class="county-tag ml-auto">' +  shop.shops[i].County +  '</div></span></div></div>' 
    } 
    }

    if (shopsfound != 1){
        document.getElementById("container-row").innerHTML = '<div class="col-12 text-center">Looks like there are no shops in your area yet</div>';
    }


    document.getElementById("resultstotal").innerHTML = prov
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


    // Province Navigation 

    $(".leinster-menu").click(function(){
        $(".select-main-menu").removeClass("blue-underline");
        $(this).addClass("blue-underline");
    });

    $(".munster-menu").click(function(){
        $(".select-main-menu").removeClass("blue-underline");
        $(this).addClass("blue-underline");
    });
    $(".connacht-menu").click(function(){
        $(".select-main-menu").removeClass("blue-underline");
        $(this).addClass("blue-underline");
    });
    $(".ulster-menu").click(function(){
        $(".select-main-menu").removeClass("blue-underline");
        $(this).addClass("blue-underline");
    });