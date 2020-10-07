var mqtt=require('mqtt');
const puppeteer = require('puppeteer');
var topic="Fiware/Test1";
var status="close";

options={
    clientId:"mqttjs01",
    username:"user",
    password:"pass",
    clean:true};

var client  = mqtt.connect("mqtt://192.168.00.00",options);
console.log("connected flag" + client.connected);

client.on('message',function(topic, message, packet){
    console.log(topic);
    if(topic=="Test/Test1")
    {
        console.log("topic1 " + topic);

        (async () => {

            status="open";
            const browser = await puppeteer.launch({"executablePath":"/usr/bin/chromium-browser","headless":false,args: ['--start-fullscreen'],defaultViewport: null});
            const page = await browser.newPage();
            //await page.setViewport({ width: 1920, height: 1080 });
            await page.goto('https://www.google.com/');
            setTimeout(() => { browser.close(); }, 180000);
        })();
    }

    if(topic=="Test/Test2")
    {
        console.log("topic2 " + topic);

        (async () => {

            status="open";
            const browser = await puppeteer.launch({"executablePath":"/usr/bin/chromium-browser","headless":false,args: ['--start-fullscreen'],defaultViewport: null});
            const page = await browser.newPage();
            //await page.setViewport({ width: 1920, height: 1080 });
            await page.goto('https://www.google.com/');
            setTimeout(() => { browser.close(); }, 180000);
        })();
    }

    if(topic=="Tets/Test3")
    {

        (async () => {

            status="open";
            const browser = await puppeteer.launch({"executablePath":"/usr/bin/chromium-browser","headless":false,args: ['--start-fullscreen'],defaultViewport: null});
            const page = await browser.newPage();
            //await page.setViewport({ width: 1920, height: 1080 });
            await page.goto('https://www.google.com/');
            setTimeout(() => { browser.close(); }, 180000);
        })();
    }
});


client.on("connect",function(){	
    console.log("connected  "+ client.connected);    
})
client.subscribe(topic,{qos:0});