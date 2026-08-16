//footer//
let resortName = "Nature Nest Resort";
document.getElementById("resortName").innerText = resortName;
let resortDescription = "Experience luxury, comfort, and nature in one perfect destination."
document.getElementById("resortDescription").innerText = resortDescription;
// button //
let bookButton = document.getElementById("bookNow");
bookButton.addEventListener("click",function(){
let message = "Thank you for choosing Nature Nest Resort!";
alert(message);
})

let exploreButton =document.getElementById("exploreNow");
exploreButton.addEventListener("click",function () {
    let exploreMessage = "Discover the beauty, comfort, and unforgettable experiences at Nature Nest Resort."
    alert(exploreMessage);
})
//feature//
let features = [    
    "Luxury Bedroom",
    "Seaside Haven",
    "Fine Dining",
    "Relaxing Spa"
];
// console.log(features[0]);
// console.log(features[1]);
// console.log(features[2]);
// console.log(features[3]);
// let outPut = "";
let featuresList = document.getElementById("featuresList");
for (let i = 0; i < features.length; i++) {
    console.log(featuresList.innerHTML += "<li>" + features[i] + "</li>");
}
//links//
let links=[
    "Home",
    "About Us",
    "Features",
    "Contact"
]
//contact us//
let contact = [
     "Dubai, UAE",
    "+971 XX XXX XXXX",
    "info@naturenestresort.com"
]