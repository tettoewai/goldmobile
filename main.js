let categories = document.getElementsByClassName("categories")[0];
let main = document.querySelector(".main");
let slider = document.querySelector(".slider");
let floatingMenu = document.querySelector('.floatingMenu');
let firstDiv = document.querySelector(".firstDiv");
let secondDiv = document.querySelector(".secondDiv");
let thirdDiv = document.querySelector(".thirdDiv");
let arrowContainer = document.querySelector(".arrowContainer");
let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let modelOnTitle = document.querySelector("span");
let head1 = document.querySelector(".head1");
let redmiDiv = document.querySelector(".redmiDiv");
let huaweiDiv = document.querySelector(".huaweiDiv");
let samsungDiv = document.querySelector(".samsungDiv");
let oppoDiv = document.querySelector(".oppoDiv");
let vivoDiv = document.querySelector(".vivoDiv");
let button = document.querySelector(".button");
let singlePhoneStatusDiv = document.querySelector(".singlePhoneStatus");
let searchStatus= document.querySelector('.searchStatus');
let searchStatus1 = document.querySelector(".searchStatus1");
let resultStatusContainer = document.querySelector(".resultStatusContainer");
let menu = ["Xiaomi","Huawei","Samsung","Oppo","Vivo"];
resultStatusContainer.style.display='none';
for(let i = 0; i < menu.length; i++){
    let tabContainer = document.createElement("div");
    tabContainer.classList.add("model");
    tabContainer.id = i+"a";
    tabContainer.append(menu[i]);
    categories.append(tabContainer);
    slider.style.width = tabContainer.offsetWidth + "px" ;
    main.classList.add("redmi");
    huaweiDiv.style.display="none";
    samsungDiv.style.display="none";
    oppoDiv.style.display="none";
    vivoDiv.style.display="none";
    tabContainer.addEventListener("click",()=>{
    let tabWidth = tabContainer.offsetWidth;
    slider.style.width = tabWidth + "px";
    let tabContainerLeft = tabContainer.offsetLeft;
    slider.style.transform = `translateX(${tabContainerLeft}px)`
    phoneFun(tabContainer.id);
    arrowStyle(i);
    })
  }
let phoneFun=(num)=>{
  if(num==="0a"){
    main.classList.add("redmi");
    main.classList.remove("huawei");
    main.classList.remove("samsung");
    main.classList.remove("oppo");
    main.classList.remove("vivo");
    redmiDiv.style.display= "flex";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.innerHTML="XIAOMI";
  }else if(num==="1a"){
    main.classList.add("huawei");
    main.classList.remove("redmi");
    main.classList.remove("samsung");
    main.classList.remove("oppo");
    main.classList.remove("vivo");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="flex";
    modelOnTitle.innerHTML="";
    modelOnTitle.innerHTML="HUAWEI";
  }else if(num==="2a"){
    main.classList.add("samsung");
    main.classList.remove("huawei");
    main.classList.remove("redmi");
    main.classList.remove("oppo");
    main.classList.remove("vivo");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "flex";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.innerHTML="SAMSUNG";
  }else if(num==="3a"){
    main.classList.add("oppo");
    main.classList.remove("huawei");
    main.classList.remove("samsung");
    main.classList.remove("redmi");
    main.classList.remove("vivo");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "flex";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.innerHTML="OPPO";
  }else if(num==="4a"){
    main.classList.add("vivo");
    main.classList.remove("huawei");
    main.classList.remove("samsung");
    main.classList.remove("oppo");
    main.classList.remove("redmi");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "flex";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.innerHTML="VIVO";
  }
}
let redmiObject = [
    {model: "Redmi Note 11SE",link :"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-11se.jpg",id : "0"},
    {model: "Redmi Note10 5G",link:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10-5g.jpg",id : "1"},
    {model: "Xiaomi 12S Pro",link:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s-pro.jpg",id : "2"},
    {model: "Redmi K30 5G",link: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k30-5g.jpg",id : "3"},
    {model: "Redmi K40",link:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40.jpg",id : "4"},
    {model: "Redmi K40 Pro",link: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k40-pro.jpg",id : "5"},
    {model: "Redmi K50",link: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-k50.jpg",id : "6"},
];
let huaweiOject = [
    {model: "Huawei Y6p",link:"https://fdn2.gsmarena.com/vv/bigpic/huawei-y6p.jpg",id : "7"},
    {model: "Huawei Pocket S",link:"https://fdn2.gsmarena.com/vv/bigpic/huawei-pocket-s.jpg",id : "8"},
    {model: "Huawei Nova Y61",link:"https://fdn2.gsmarena.com/vv/bigpic/huawei-nova-y61.jpg",id : "9"},
    {model: "Huawei Matepad C5e",link:"https://fdn2.gsmarena.com/vv/bigpic/huawei-matepad-se.jpg",id : "10"},
    {model: "Huawei Mate Xs2",link:"https://fdn2.gsmarena.com/vv/bigpic/huawei-mate-xs-2.jpg",id : "11"}
]
let samsungObject = [
    {model: "Samsung Galaxy A14 5G",link: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a14-5g.jpg",id : "12"},
    {model: "Samsung Galaxy Z Flip4",link: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip4-5g.jpg",id : "13"},
    {model: "Samsung Galaxy Z Fold3 5G",link: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold3-5g.jpg",id : "14"},
    {model: "Samsung Galaxy Tab S8+",link: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s8-plus.jpg",id : "15"},
    {model: "Samsung Galaxy S22 Ultra 5G",link: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg",id : "16"},
    {model: "Samsung Galaxy Z Flip3 5G",link: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip3-5g.jpg",id : "17"}
]
let oppoObject = [
    {model: "Oppo A78",link: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a56s.jpg",id : "18"},
    {model: "Oppo Find N2 Flip",link: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg",id : "19"},
    {model: "Oppo A77s",link: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a77s.jpg",id : "20"},
    {model: "Oppo A1 Pro",link: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1-pro.jpg",id : "21"},
    {model: "Oppo Reno8 5G",link: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-4g.jpg",id : "22"},
    {model: "Oppo Reno8 Pro+",link: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro-.jpg",id : "23"}
]
let vivoObject = [
    {model: "Vivo Y55s (2023)",link:"https://fdn2.gsmarena.com/vv/bigpic/vivo-y55-5g.jpg",id : "24"},
    {model: "Vivo iQOO 11",link:"https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo11.jpg",id : "25"},
    {model: "Vivo S60 Pro",link:"https://fdn2.gsmarena.com/vv/bigpic/vivo-s16-pro.jpg",id : "26"},
    {model: "Vivo X Fold+",link:"https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold-plus.jpg",id : "27"},
    {model: "Vivo X80 Lite",link:"https://fdn2.gsmarena.com/vv/bigpic/vivo-v25.jpg",id : "28"},
    {model: "Vivo Y75s",link:"https://fdn2.gsmarena.com/vv/bigpic/vivo-y75s.jpg",id : "29"}
]
let phonelistFun= (phoneListObject,container)=>{
  for( let i = 0; i < phoneListObject.length; i++){
    let phoneList= document.createElement("div");
    phoneList.classList.add("phoneList");
    container.append(phoneList);
    let item = document.createElement("div");
    item.classList.add("item");
    item.classList.add(phoneListObject[i].model.replaceAll(" ","_"))
    phoneList.append(item);
    let phoneImg = document.createElement("img");
    phoneImg.classList.add("phoneImg");
    let phoneStatus = document.createElement("div");
    phoneStatus.classList.add("phoneStatus");
    item.append(phoneImg,phoneStatus);
    phoneImg.src = phoneListObject[i].link;
    phoneStatus.append(phoneListObject[i].model);
    leftArrow.style.opacity = "0";
  }
}
phonelistFun(redmiObject,redmiDiv);
phonelistFun(huaweiOject,huaweiDiv);
phonelistFun(samsungObject,samsungDiv);
phonelistFun(oppoObject,oppoDiv);
phonelistFun(vivoObject,vivoDiv);

let menuContainer = document.querySelector(".menuContainer");
menuContainer.addEventListener("click",()=>{
  floatingMenu.style.display = 'block';
  floatingMenu.innerHTML="";
  if(menuContainer.classList.contains('openedMenu')){
    menuHide();
  }else{
    for (let i = 0; i < menu.length; i++) {
      let floatingContainer = document.createElement("div");
      floatingContainer.classList.add("floatingContainer");
      let menuButtom = document.createElement('div');
      menuButtom.classList.add('menuButtom');
      menuButtom.append(menu[i]);
      menuButtom.id = i ;
      floatingContainer.append(menuButtom);
      floatingMenu.append(floatingContainer);
      menuContainer.classList.add('openedMenu');
      menuButtom.addEventListener('click',()=>{
        main.style.display= 'flex';
        resultStatusContainer.style.display='none';
        arrowContainer.style.display='flex';
        backKeyDiv.style.display='none';
        allItemFun('flex');
        arrowStyle(i);
        menuHide();
        phoneFun(i+"a");
      })
    }
    secondDiv.style.opacity = 0;
    firstDiv.style.transform = "rotate(45deg) translate(4px,6px)"
    thirdDiv.style.transform = "rotate(-45deg) translate(4px,-6px)"
  }
})
leftArrow.addEventListener("click",()=>{
  if (main.classList.contains("vivo")){
    let nextTab = document.getElementById("3a");
    sliderOnArrow(nextTab);
    rightArrow.style.opacity="1";
    main.classList.remove("vivo");
    main.classList.add("oppo");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "flex";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.append("OPPO");
  }else if (main.classList.contains("oppo")){
    let nextTab = document.getElementById("2a");
    sliderOnArrow(nextTab);
    rightArrow.style.opacity="1";
    main.classList.remove("oppo");
    main.classList.add("samsung");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "flex";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.append("SAMSUNG");
  }else if (main.classList.contains("samsung")){
    let nextTab = document.getElementById("1a");
    sliderOnArrow(nextTab);
    rightArrow.style.opacity="1";
    main.classList.remove("samsung");
    main.classList.add("huawei");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="flex";
    modelOnTitle.innerHTML="";
    modelOnTitle.append("HUAWEI");
  }else if (main.classList.contains("huawei")){
    main.classList.remove("huawei");
    main.classList.add("redmi");
    let nextTab = document.getElementById("0a");
    sliderOnArrow(nextTab);
    rightArrow.style.opacity="1";
    leftArrow.style.opacity="0";
    main.classList.remove("huawei");
    modelOnTitle.innerHTML="";
    redmiDiv.style.display= "flex";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.append("REDMI");
  }
})
rightArrow.addEventListener("click",()=>{
  if(main.classList.contains("redmi")){
    let nextTab = document.getElementById("1a");
    sliderOnArrow(nextTab);
    leftArrow.style.opacity="1";
    main.classList.remove("redmi");
    main.classList.add("huawei");
    modelOnTitle.innerHTML="";
    modelOnTitle.append("HUAWEI");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="flex";
  }else if(main.classList.contains("huawei")){
    let nextTab = document.getElementById("2a");
    sliderOnArrow(nextTab);
    leftArrow.style.opacity="1";
    main.classList.remove("huawei");
    main.classList.add("samsung");
    modelOnTitle.innerHTML="";
    modelOnTitle.append("SAMSUNG");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "flex";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
  }else if(main.classList.contains("samsung")){
    let nextTab = document.getElementById("3a");
    sliderOnArrow(nextTab);
    leftArrow.style.opacity="1";
    main.classList.remove("samsung");
    main.classList.add("oppo");
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "flex";
    vivoDiv.style.display= "none";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.append("OPPO");
  }else if(main.classList.contains("oppo")){
    let nextTab = document.getElementById("4a");
    sliderOnArrow(nextTab);
    leftArrow.style.opacity="1";
    rightArrow.style.opacity="0";
    main.classList.remove("oppo");
    main.classList.add("vivo")
    redmiDiv.style.display= "none";
    samsungDiv.style.display= "none";
    oppoDiv.style.display= "none";
    vivoDiv.style.display= "flex";
    huaweiDiv.style.display="none";
    modelOnTitle.innerHTML="";
    modelOnTitle.append("VIVO");
  }
})

let arrowStyle = (i) =>{
  if(i===0){
    leftArrow.style.opacity="0";
    rightArrow.style.opacity="1";
  } else if(i===1){
    leftArrow.style.opacity="1";
    rightArrow.style.opacity="1";
  } else if(i===2){
    leftArrow.style.opacity="1";
    rightArrow.style.opacity="1";
  }else if(i===3){
    leftArrow.style.opacity="1";
    rightArrow.style.opacity="1";
  }else if(i===4){
    leftArrow.style.opacity="1";
    rightArrow.style.opacity="0";
  }
}
let sliderOnArrow = (nextTab)=>{
  let nextTabWidth = nextTab.offsetWidth;
  let nextTabLeft = nextTab.offsetLeft;
  slider.style.width = nextTabWidth;
  slider.style.transform = `translatex(${nextTabLeft}px)`;
}
let menuHide = ()=>{
  floatingMenu.style.display='none';
  secondDiv.style.opacity = 1;
  firstDiv.style.transform = "none"
  thirdDiv.style.transform = "none"
  menuContainer.classList.remove('openedMenu');
}
let redmiNote125g = {
  releasedDate:" 2023, January 11",version:"Android 12, MIUI 13",Storage:"128GB (microSD ရသည်။)",ram: "4/6GB",
chipSet: "Snapdragon 4 Gen 1",batteryCapacity: "5000mAH",displaySize: "6.67 Inches",
network: "GSM / HSPA / LTE / 5G",announced: "2022, October 27",dateStatus: "Available. Released 2023, January 11",
weight: "188 g", sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",displayType: "Samsung AMOLED, 120Hz, 1200 nits (peak)",
displaySize: "6.67 inches, 107.4 cm²",chipSet: "Qualcomm SM4375 Snapdragon 4 Gen 1 (6 nm)",
gpu: "Adreno 619",cardSlotMemory: "microSDXC (uses shared SIM slot)", internalMemory: "128GB 4GB RAM/128GB 6GB RAM",
mainCamera1: "48 MP, f/1.8, (wide)",mainCamera2: "PDAF 8 MP, f/2.2, (ultrawide)", mainCamera3: "2 MP, f/2.4, (macro)", mainCameraVideo: "1080p@30fps",
selfieCamera: "13 MP, f/2.5, (wide)",selfieCameraVideo: "1080p@30fps",loudSpeaker: "Yes",jack: "Yes",
usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass",
batterytype: "Li-Po 5000 mAh, non-removable", batteryCharging: "33W wired, 50% in 22 min (advertised)",color: "Frosted Green, Matte Black, Mystique Blue",
price: "520000ကျပ်(Second Hand(all Accessories))"
}
let redminote105g= {
  releasedDate:"2021, April 28",version:"Android 11, MIUI 12",Storage:"128GB (microSD ရသည်။)",ram: "8GB",
chipSet: "Dimensity 700",batteryCapacity: "5000mAH",displaySize: "6.5 Inches",
network: "GSM / HSPA / LTE / 5G",announced: "2021, March 04",dateStatus: "Available. Released 2021, April 28",
weight: "190 g", sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",displayType: "IPS LCD, 90Hz, 400 nits (typ), 500 nits (HBM)",
displaySize: "6.5 inches, 102.0 cm²",chipSet: "Mediatek MT6833 Dimensity 700 (7 nm)",
gpu: "Mali-G57 MC2",cardSlotMemory: "microSDXC (uses shared SIM slot)", internalMemory: "128GB 8GB RAM",
mainCamera1: "48 MP, f/1.8, 26mm (wide), 1/2.0 inches, 0.8µm, PDAF",mainCamera2: "2 MP, f/2.4, (macro)", mainCamera3: "2 MP, f/2.4, (depth)", mainCameraVideo: "1080p@30fps",
selfieCamera: "8 MP, f/2.0, (wide)",selfieCameraVideo: "1080p@30fps",loudSpeaker: "Yes",jack: "Yes",
usb: "USB Type-C 2.0", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass",
batterytype: "Li-Po 5000 mAh, non-removable", batteryCharging: "18W wired",color: "Chrome Silver, Graphite Gray, Nighttime Blue, Aurora Green",
price: "390000ကျပ်(Second Hand(all Accessories))"
}
let redmik305g= {
  releasedDate:"2020, January 07",version:"Android 11, MIUI 12",Storage:"64GB/128GB/256GB (microSD မရပါ။)",ram: "6-8GB",
chipSet: "Snapdragon 765G 5G",batteryCapacity: "4500mAH",displaySize: "6.67 Inches",
network: "GSM / HSPA / LTE / 5G",announced: "2019, December 10",dateStatus: "Available. Released 2020, January 07",
weight: "208 g", sim: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",displayType: "IPS LCD, 120Hz, HDR10",
displaySize: "6.67 inches, 107.4 cm²",chipSet: "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
gpu: "Adreno 620",cardSlotMemory: "No", internalMemory: "64GB 6GB RAM / 128GB 6GB RAM / 128GB 8GB RAM / 256GB 8GB RAM",
mainCamera1: "64 MP, f/1.9, 26mm (wide), 1/1.72 inches, 0.8µm, PDAF",mainCamera2: "8 MP, f/2.2, 13mm (ultrawide), 1/4.0 inches, 1.12µm",mainCamera3: "5 MP, f/2.4, (macro), mainCamera4: 5 MP, f/2.4, (macro)",mainCameraVideo: "4K@30fps, 1080p@30/120fps, 720p@960fps; gyro-EIS",
selfieCamera: "20 MP, f/2.2, 27mm (wide), 1/3.4 inches, 0.8µm ,2 MP, f/2.4, 1/5 inches, 1.75µm, depth sensor",selfieCameraVideo: "1080p@30fps",loudSpeaker: "Yes",jack: "Yes",
usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass",
batterytype: "Li-Po 4500 mAh, non-removable", batteryCharging: "30W wired, 100% in 57 min (advertised)",color: "Blue, Red, Purple, White",
price: "375000ကျပ်(Second Hand(all Accessories))"
}
let xiaomi12spro = {
  releasedDate:"2022, July 07",version:"Android 11, MIUI 13",Storage:"256GB (microSD မရပါ။)",ram: "8GB",
chipSet: "Snapdragon 8+ Gen 1",batteryCapacity: "4600mAH",displaySize: "6.73 Inches",
network: "GSM / CDMA / HSPA / EVDO / LTE / 5G",announced: "2022, July 04",dateStatus: "Available. Released 2022, July 07",
weight: "203 g / 204 g", sim: "Dual SIM (Nano-SIM, dual stand-by)",displayType: "LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 1000 nits (HBM), 1500 nits (peak)",
displaySize: "6.5 inches, 102.0 cm²",chipSet: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
gpu: "Adreno 730",cardSlotMemory: "No", internalMemory: "256GB 8GB RAM",
mainCamera1: "50 MP, f/1.9, 24mm (wide), 1/1.28 inches, 1.22µm, Dual Pixel PDAF, OIS",mainCamera2: "50 MP, f/1.9, 50mm (telephoto), PDAF, 2x optical zoom", mainCamera3: "50 MP, f/2.2, 115˚ (ultrawide)",
mainCameraVideo: "8K@24fps (HDR), 4K@30/60fps (HDR10+), 1080p@30/120/240/960fps, 720p@1920fps, gyro-EIS",
selfieCamera: "32 MP, f/2.5, 26mm (wide), 0.7µm",selfieCameraVideo: "1080p@30/60fps, 720p@120fps, HDR10+",loudSpeaker: "Yes, with stereo speakers",jack: "NO",
usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
batterytype: "Li-Po 4600 mAh, non-removable", batteryCharging: "120W wired, PD3.0, QC4, 100% in 19 min (advertised),50W wireless, 100% in 42 min (advertised),10W reverse wireless",color: "Gray, White, Purple, Green",
price: "1750000ကျပ်(Second Hand(all Accessories))"
}
let redmik40 = {
  releasedDate:"Released 2021, March 04",version:"Android 11, MIUI 12",Storage:"128GB (microSD မရပါ။)",ram: "8GB",
chipSet: "Snapdragon 870 5G",batteryCapacity: "4520mAh",displaySize: "6.67 Inches",
network: "GSM / CDMA / HSPA / CDMA2000 / LTE / 5G",announced: "2021, February 25",dateStatus: "Available. Released 2021, March 04",
weight: "196 g", sim: "Dual SIM (Nano-SIM, dual stand-by)",displayType: "Super AMOLED, 120Hz, HDR10+, 1300 nits (peak)",
displaySize: "6.67 inches, 107.4 cm²",chipSet: "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
gpu: "Adreno 650",cardSlotMemory: "No", internalMemory: "128GB 8GB RAM",
mainCamera1: "48 MP, f/1.8, 26mm (wide), 1/2 inches, 0.8µm, PDAF",mainCamera2: "8 MP, f/2.2, 119˚ (ultrawide)", mainCamera3: "5 MP, f/2.4, 50mm (macro), 1/5.0 inches, 1.12µm",
mainCameraVideo: "4K@30fps, 1080p@30/60/120/240/960fps, gyro-EIS",
selfieCamera: "20 MP, f/2.5, (wide), 1/3.4 inches, 0.8µm",selfieCameraVideo: "1080p@30fps, 720p@120fps",loudSpeaker: "Yes, with stereo speakers",jack: "NO",
usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, color spectrum",
batterytype: "Li-Po 4520 mAh, non-removable", batteryCharging: "33W wired, PD3.0, QC3, 100% in 52 min (advertised)",color: "Black, White, Aurora",
price: "625000ကျပ်(Second Hand(all Accessories))"
}
let redmik40pro = {
  releasedDate:"Released 2021, March 04",version:"Android 11, MIUI 12",Storage:"128GB/256GB(microSD မရပါ။)",ram: "6/12GB",
chipSet: "Snapdragon 888 5G",batteryCapacity: "4520mAh",displaySize: "6.67 Inches",
network: "GSM / CDMA / HSPA / CDMA2000 / LTE / 5G",announced: "2021, February 25",dateStatus: "Available. Released 2021, March 04",
weight: "196 g", sim: "Dual SIM (Nano-SIM, dual stand-by)  IP53, dust and splash resistant",displayType: "Super AMOLED, 120Hz, HDR10+, 1300 nits (peak)",
displaySize: "6.67 inches, 107.4 cm²",chipSet: "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
gpu: "Adreno 660",cardSlotMemory: "No", internalMemory: "128GB 6GB RAM / 128GB 8GB RAM/256GB 8GB RAM / 256GB 12GB RAM",
mainCamera1: "64 MP, f/1.9, 26mm (wide), 1/1.7 inches, 0.8µm, PDAF",mainCamera2: "8 MP, f/2.2, 119˚ (ultrawide)", mainCamera3: "5 MP, f/2.4, 50mm (macro), 1/5.0 inches, 1.12µm",
mainCameraVideo: "8K@30fps, 4K@30/60fps, 1080p@30/60/120/240/960fps, gyro-EIS, HDR10+",
selfieCamera: "20 MP, f/2.5, (wide), 1/3.4 inches, 0.8µm",selfieCameraVideo: "1080p@30fps, 720p@120fps",loudSpeaker: "Yes, with stereo speakers",jack: "NO",
usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, color spectrum, barometer",
batterytype: "Li-Po 4520 mAh, non-removable", batteryCharging: "33W wired, PD3.0, QC3, 100% in 52 min (advertised)",color: "Black, White, Aurora",
price: "760000ကျပ်(Second Hand(all Accessories))"
}
let redmik50= {
   releasedDate: "Released 2022, March 22", version: "Android 12, MIUI 13", Storage: "128GB/256GB/512GB(microSD မရပါ။)", ram: "8/12GB",
   chipSet: "Dimensity 8100", batteryCapacity: "5500mAh", displaySize: "6.67 Inches",
   network: "GSM / CDMA / HSPA / CDMA2000 / LTE / 5G", announced: "2022, March 17", dateStatus: "Available. Released 2022, March 22",
   weight: "201 g", sim: "Dual SIM(Nano - SIM, dual stand - by) IP53, dust and splash resistant", displayType: "OLED, 120Hz, Dolby Vision, HDR10+, 1200 nits (peak)",
   displaySize: "6.67 inches, 107.4 cm²", chipSet: "Mediatek Dimensity 8100 (5 nm)",
   gpu: "Mali-G610", cardSlotMemory: "No", internalMemory: "128GB 8GB RAM / 256GB 8GB RAM / 256GB 12GB RAM / 512GB 12GB RAM",
   mainCamera1: "48 MP, (wide), 1/2 inches, 0.8µm, PDAF, OIS", mainCamera2: "48 MP, (wide), 1/2 inches, 0.8µm, PDAF, OIS", mainCamera3: "2 MP, f/2.4, (macro)",
   mainCameraVideo: "4K@30fps, 1080p@30/60/120fps, 720p@960fps; gyro-EIS",
   selfieCamera: "20 MP, (wide)", selfieCameraVideo: "1080p@30/120fps", loudSpeaker: "Yes, with stereo speakers", jack: "NO",
   usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, color spectrum, barometer",
   batterytype: "Li-Po 4520 mAh, non-removable", batteryCharging: "33W wired, PD3.0, QC3, 100% in 52 min (advertised)", color: "Black, White, Aurora",
   price: "760000ကျပ်(Second Hand(all Accessories))"
}
let samsungGalaxyZFold35G = {
  releasedDate: "Released 2021, August 27", version: "Android 11, up to Android 13, One UI 5.1", Storage: "256GB/512GB storage(microSD မရပါ။)", ram: "12GB",
   chipSet: "Snapdragon 888 5G", batteryCapacity: "4400mAh", displaySize: "7.6 Inches",
   network: "GSM / CDMA / HSPA / EVDO / LTE / 5G", announced: "2021, August 11", dateStatus: "Available. Released 2021, August 27",
   weight: "271 g", sim: "Nano-SIM and eSIM", displayType: "Foldable Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (peak)",
   displaySize: "7.6 inches, 179.9 cm²", chipSet: "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
   gpu: "Adreno 660", cardSlotMemory: "No", internalMemory: "256GB 12GB RAM / 512GB 12GB RAM",
   mainCamera1: "12 MP, f/1.8, 26mm (wide), 1/1.76 inches, 1.8µm, Dual Pixel PDAF, OIS", mainCamera2: "12 MP, f/2.4, 52mm (telephoto), 1/3.6 inches, 1.0µm, PDAF, OIS, 2x optical zoom", mainCamera3: "12 MP, f/2.2, 123˚, 12mm (ultrawide), 1.12µm",
   mainCameraVideo: "4K@60fps, 1080p@60/240fps (gyro-EIS), 720p@960fps (gyro-EIS), HDR10+",
   selfieCamera: "4 MP, f/1.8, 2.0µm, under display", selfieCameraVideo: "4K@30fps, 1080p@30fps, gyro-EIS", loudSpeaker: "Yes, with stereo speakers", jack: "NO",
   usb: "USB Type-C 3.2", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, barometer",
   batterytype: "Li-Po 4400 mAh, non-removable", batteryCharging: "25W wired 11W wireless 4.5W reverse wireless", color: "Phantom Black, Phantom Silver, Phantom Green, Thom Browne Edition, Wooyoungmi Edition",
   price: "2250000ကျပ်(Second Hand(all Accessories))"
}
let  huaweiy6p = {
  releasedDate: "Released 2020, May 06", version: "Android 10, EMUI 10.1", Storage: "32GB/64GB storage, microSDXC", ram: "8GB",
   chipSet: "Helio P22", batteryCapacity: "5000mAh", displaySize: "7.3 Inches",
   network: "GSM / HSPA / LTE", announced: "2020, May 05", dateStatus: "Available. Released 2020, May 06",
   weight: "185 g", sim: "Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)", displayType: "IPS LCD",
   displaySize: "6.3 inches, 95.8 cm²", chipSet: "Mediatek MT6762R Helio P22 (12 nm)",
   gpu: "PowerVR GE8320", cardSlotMemory: "No", internalMemory: "32GB 3GB RAM / 64GB 3GB RAM / 64GB 4GB RAM",
   mainCamera1: "13 MP, f/1.8, (wide), PDAF", mainCamera2: "5 MP, f/2.2, 120˚ (ultrawide)", mainCamera3: "2 MP, f/2.4, (depth)",
   mainCameraVideo: "1080p@30fps",selfieCamera: "8 MP, f/2.0, (wide)", selfieCameraVideo: "1080p@30fps", loudSpeaker: "Yes", jack: "Yes",
   usb: "microUSB 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, barometer",
   batterytype: "Li-Po 5000 mAh, non-removable", batteryCharging: "10W wired", color: "Phantom Purple, Emerald Green, Midnight Black",
   price: "255000ကျပ်(Second Hand(all Accessories))"
}
let redminote11se = {
  releasedDate: "Released 2022, May 31", version: "Android 11, MIUI 12.5", Storage: "128GB storage(microSD မရပါ။)", ram: "4GB",
   chipSet: "Dimensity 700", batteryCapacity: "5000mAh", displaySize: "6.5 Inches",
   network: "GSM / CDMA / HSPA / EVDO / LTE / 5G", announced: "2022, May 24", dateStatus: "Available. Released 2022, May 31",
   weight: "190 g", sim: "Dual SIM (Nano-SIM, dual stand-by)", displayType: "IPS LCD, 90Hz, 400 nits (typ)",
   displaySize: "6.5 inches, 102.0 cm²", chipSet: "Mediatek MT6833 Dimensity 700 (7 nm)",
   gpu: "Mali-G57 MC2", cardSlotMemory: "No", internalMemory: "128 GB 8GB RAM",
   mainCamera1: "48 MP, f/1.8, (wide), 1/2.0 inches, 0.8µm, PDAF", mainCamera2: "2 MP, f/2.4, (macro)", mainCamera3: "--",
   mainCameraVideo: "1080p@30fps",selfieCamera: "8 MP, f/2.0, (wide), 1/4.0 inches, 1.12µm", selfieCameraVideo: "1080p@30fps", loudSpeaker: "Yes", jack: "Yes",
   usb: "USB Type-C 2.0, OTG", sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass",
   batterytype: "Li-Po 5000 mAh, non-removable", batteryCharging: "18W wired", color: "	Blue, Black",
   price: "415000ကျပ်"
}
let singlePhoneClickFun = ()=>{;
  let xiaomi12sproDiv = document.querySelector(".Xiaomi_12S_Pro");
  let redmik305gDiv = document.querySelector(".Redmi_K30_5G")
  let redminote105gdiv = document.querySelector(".Redmi_Note10_5G");
  let redmik40div = document.querySelector(".Redmi_K40");
  let redmik40proDiv = document.querySelector(".Redmi_K40_Pro")
  let redmik50Div = document.querySelector(".Redmi_K50");
  let samsungGalaxyZFold35GDiv = document.querySelector(".Samsung_Galaxy_Z_Fold3_5G");
  let huaweiy6pDiv = document.querySelector(".Huawei_Y6p")
  let redminote11sediv = document.querySelector(".Redmi_Note_11SE")
  
  redminote11sediv.addEventListener("click",()=>{
   resultStatusContainer.style.display = 'none';
   searchResult.innerHTML ='';
   singlePhoneFun(redminote11se,redmiObject,0);
 })
  redminote105gdiv.addEventListener("click", () => {
     resultStatusContainer.style.display = 'none';
     searchResult.innerHTML = '';
     singlePhoneFun(redminote105g, redmiObject, 1);
  })
  xiaomi12sproDiv.addEventListener("click", () => {
     searchResult.innerHTML = '';
     resultStatusContainer.style.display = 'none';
     singlePhoneFun(xiaomi12spro, redmiObject, 2);
  })
  redmik305gDiv.addEventListener("click", () => {
     searchResult.innerHTML = '';
     resultStatusContainer.style.display = 'none';
     singlePhoneFun(redmik305g, redmiObject, 3)
  })
  redmik40div.addEventListener("click", () => {
     searchResult.innerHTML = '';
     resultStatusContainer.style.display = 'none';
     singlePhoneFun(redmik40, redmiObject, 4);
  })
  redmik40proDiv.addEventListener("click", () => {
     searchResult.innerHTML = '';
     resultStatusContainer.style.display = 'none';
     singlePhoneFun(redmik40pro, redmiObject, 5);
  })
  redmik50Div.addEventListener("click",()=>{
      resultStatusContainer.style.display = 'none';
     searchResult.innerHTML ='';
     singlePhoneFun(redmik50, redmiObject, 6);
  })
  samsungGalaxyZFold35GDiv.addEventListener("click",()=>{
   resultStatusContainer.style.display = 'none';
   searchResult.innerHTML ='';
   singlePhoneFun(samsungGalaxyZFold35G,samsungObject, 2);
 })
 huaweiy6pDiv.addEventListener("click",()=>{
   resultStatusContainer.style.display = 'none';
   searchResult.innerHTML ='';
   singlePhoneFun(huaweiy6p,huaweiOject,0);
 })
}

let backKey = document.querySelector(".backKey");
let backKeyDiv = document.querySelector(".backKeyDiv");
let modelOnTitle1 = document.querySelector(".modelOnTitle1");
let status = document.querySelector(".status");
let singlePhoneFun = (phoneModel,object,num)=>{
  main.style.display="none";
  modelOnTitle1.innerHTML="";
  modelOnTitle1.append(object[num].model.toUpperCase())
  backKeyDiv.style.display= "block";
  arrowContainer.style.display="none";
  head1.style.display="none";
  status.innerHTML=`
    <div class="singlePhoneStatus">
      <div class="phoneNane">${object[num].model}</div>
      <div class="phoneStatusContainer">
        <div class="phoneImgContainer">
        <img class="phoneImage" src="${object[num].link}">
        </div>
        <div class="singlePhoneStatus1">
          <div class = "part1">
            <span>=> Released Date:${phoneModel.releasedDate}</span>
            <span class ="version">=> Version: ${phoneModel.version}</span>
            <span>=> RAM: ${phoneModel.ram}</span>
          </div>
          <div class = "part2">
            <span>=> Storage: ${phoneModel.Storage}</span>
            <span>=> Battery Capacity: ${phoneModel.batteryCapacity}</span>
            <span class= "displaySize">=>Display Size: ${phoneModel.displaySize}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="otherData">
        <div class= "status">
          <div class = "mainStatus">NETWORK</div>
          <div class = "mainStatus1 itemstatus">
            <div class = "miniStatus">Technology</div>
            <div class = "singleStatus">${phoneModel.network}</div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">LANUCH</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">announced</div>
              <div class = "singleStatus">${phoneModel.announced}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">status</div>
              <div class = "singleStatus">Available. Released ${phoneModel.releasedDate}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">BODY</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Weight</div>
              <div class = "singleStatus">${phoneModel.weight}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">SIM</div>
              <div class = "singleStatus">${phoneModel.sim}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">DISPLAY</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Type</div>
              <div class = "singleStatus">${phoneModel.displayType}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Size</div>
              <div class = "singleStatus">${phoneModel.displaySize}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">PLATFORM</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">OS</div>
              <div class = "singleStatus">${phoneModel.version}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Chipset</div>
              <div class = "singleStatus">${phoneModel.chipSet}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">GPU</div>
              <div class = "singleStatus">${phoneModel.gpu}</div>
            </div>
          </div>
        </div>  
        <div class= "status">
          <div class = "mainStatus">MEMORY</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Card slot</div>
              <div class = "singleStatus">${phoneModel.cardSlotMemory}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Internal</div>
              <div class = "singleStatus">${phoneModel.internalMemory}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">MAIN CAMERA</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus"></div>
              <div class = "singleStatus">${phoneModel.mainCamera1}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
            <div class = "miniStatus"></div>
              <div class = "singleStatus">${phoneModel.mainCamera2}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
            <div class = "miniStatus"></div>
              <div class = "singleStatus">${phoneModel.mainCamera3}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
            <div class = "miniStatus">Video</div>
              <div class = "singleStatus">${phoneModel.mainCameraVideo}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">SELFIE CAMERA</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus"></div>
              <div class = "singleStatus">${phoneModel.selfieCamera}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Video</div>
              <div class = "singleStatus">${phoneModel.selfieCameraVideo}</div>
            </div>
          </div>
        </div> 
        <div class= "status">
          <div class = "mainStatus">SOUND</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Loudspeaker</div>
              <div class = "singleStatus">${phoneModel.loudSpeaker}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">3.5mm jack</div>
              <div class = "singleStatus">${phoneModel.jack}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">COMMS</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">USB</div>
              <div class = "singleStatus">${phoneModel.usb}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">FEATURES</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Sensors</div>
              <div class = "singleStatus">${phoneModel.sensors}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">BATTERY</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Type</div>
              <div class = "singleStatus">${phoneModel.batterytype}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Charging</div>
              <div class = "singleStatus">${phoneModel.batteryCharging}</div>
            </div>
          </div>
        </div>
        <div class= "status">
          <div class = "mainStatus">MISC</div>
          <div class = "columnStatus">
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Colors</div>
              <div class = "singleStatus">${phoneModel.color}</div>
            </div>
            <div class = "mainStatus1 itemstatus">
              <div class = "miniStatus">Price</div>
              <div class = "singleStatus">${phoneModel.price}</div>
            </div>
          </div>
        </div>
    </div>
  `
}

let tabContainer = document.querySelector(".model");
backKey.addEventListener("click",()=>{
  allItemFun('flex');
  if (main.classList.contains('redmi')) {
  phoneFun("0a");
  } else if (main.classList.contains('huawei')) {
     phoneFun("1a");
  } else if (main.classList.contains('samsung')) {
     phoneFun("2a");
  } else if (main.classList.contains('oppo')) {
     phoneFun("3a");
  } else if (main.classList.contains('vivo')) {
     phoneFun("4a");
  }
  resultStatusContainer.style.display="none";
  status.innerHTML="";
  backKeyDiv.style.display= "none";
  arrowContainer.style.display="flex";
  head1.style.display="block";
  modelOnTitle1.innerHTML="";
  modelOnTitle1.append(menu[0].toUpperCase())
  main.style.display="flex";
})
let allObject = [...redmiObject,...huaweiOject,...samsungObject,...oppoObject,...vivoObject];
let search = document.querySelector(".search");
let searchResult = document.querySelector(".searchResult");
let filteredModel = [];

search.addEventListener("keyup",(event)=>{
  let searchText = event.target.value;
  searchResult.innerHTML="";
  let filteredModel = allObject.filter((models)=>{
    return models.model.toLowerCase().includes(searchText.toLowerCase());
  })
  if (searchText===" ") {
    return;
  }
  if(searchText.length===0){
    return;
  }
  if (
    event.key === "Enter"
  ) {
    keyFun(event.key,filteredModel,searchText);
    return;
  }
  if (filteredModel.length>0){
    for (let i = 0; i < filteredModel.length; i++) {
      let filteredItem = document.createElement("div");
      filteredItem.classList.add("filteredItem");
      filteredItem.id = filteredModel[i].id;
      filteredItem.classList.add(filteredModel[i].model.replaceAll(" ","_"));

      let filteredName = document.createElement("div");
      filteredName.classList.add("filteredName");
      filteredName.append(filteredModel[i].model);

      let filteredImage = document.createElement("img");
      filteredImage.classList.add("filteredImage");
      filteredImage.src= filteredModel[i].link;

      filteredItem.append(filteredName,filteredImage);
      searchResult.append(filteredItem);
    }
    singlePhoneClickFun();
  }
  if (
    event.key === "ArrowDown" ||
    event.key === "ArrowUp" 
  ) {
    keyFun(event.key,filteredModel,searchText);
  }
})

let itemList = document.querySelectorAll('.item');
let indexToSelect = -1;
let keyFun = (key,filteredModel,searchText)=>{
  if (key === "ArrowDown") {
    indexToSelect += 1;
  }else if (key === "ArrowUp"){
    indexToSelect -= 1;
  }else if (key==="Enter") {
     main.style.display="";
     status.innerHTML='';
    if (searchText === "") {
      return;
    }
    
    if (searchText === ' ') {
      return;
    }
    modelOnTitle.innerHTML= '';
    resultStatusContainer.style.display='flex';
    backKeyDiv.style.display='flex';
    searchStatus.innerHTML='';
    arrowContainer.style.display='none';
    allItemFun("none");
    if (filteredModel.length===0) {
      searchStatus1.style.display='none';
      allItemFun('none')
      searchStatus.append(`No Result For  "${searchText}"`);
      return;
    }
    allItemDisplay("flex");
    for (var i= 0; i< filteredModel.length; i++) {
       resultDivClass = filteredModel[i].model.replaceAll(' ','_');
       let resultDivList = document.getElementsByClassName(resultDivClass);
       for(let i= 0;i<resultDivList.length;i++){
          let resultDiv= resultDivList[i];
          resultDiv.style.display='flex';
       }
    }
    head1.style.display='none'
    searchStatus1.style.display='flex';
    searchStatus.innerHTML=`The Result For "${searchText}"`;
    searchStatus1.innerHTML=`Result Count: ${filteredModel.length}`;
    event.target.value='';
  }
}
let allItemFun = (display)=>{
   for (var i = 0; i < itemList.length; i++) {
      let itemDiv = itemList[i];
      itemDiv.style.display = display;
   }
}
let allItemDisplay = (display) => {
   redmiDiv.style.display = display;
   huaweiDiv.style.display = display;
   samsungDiv.style.display = display;
   oppoDiv.style.display = display;
   vivoDiv.style.display = display;
}
search.addEventListener('change',(event)=>{
   searchResult.innerHTML='';
})

singlePhoneClickFun();
let head= document.querySelector('.head');
let head2 = document.querySelector('.head2')
let mode = document.querySelector('.mode');
let sliderMode = document.querySelector('.sliderMode');
mode.addEventListener('click',()=>{
   if (mode.classList.contains("clicked")) {
      modeFun('white','black')
      sliderMode.style.backgroundColor='black';
      sliderMode.style.transform= 'translateX(0%)';
      mode.classList.remove('clicked');
   }else{
   modeFun('black','white')
   sliderMode.style.backgroundColor='white';
   mode.classList.add('clicked');
   sliderMode.style.transform= 'translateX(95%)';
   }
})
let filteredName = document.querySelector('.filteredName');
let topDiv = document.querySelector('.topDiv')
let backButton = document.querySelector('.Button')
let modeFun = (modeColor,opposite)=>{
   body.style.backgroundColor= modeColor;
   body.style.color = opposite;
   topDiv.style.backgroundColor = modeColor;
   topDiv.style.color= opposite;
   head.style.backgroundColor= modeColor;
   head.style.color= opposite;
   head1.style.backgroundColor= modeColor;
   head1.style.color= opposite;
   categories.style.backgroundColor= modeColor;
   categories.style.color= opposite;
   mode.style.border = `1px solid ${opposite}`;
   sliderMode.style.border = `1px solid ${opposite}`;
   backKeyDiv.style.backgroundColor= modeColor;
   button.style.backgroundColor= modeColor;
   button.style.border = `1px solid ${opposite}`;
   floatingMenu.style.backgroundColor= modeColor;
   floatingMenu.style.color= opposite;
   search.style.backgroundColor= modeColor;
   search.style.color= opposite;
}