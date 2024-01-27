function downloader(url, cb) {
    // write a dummy impl using setTimeout to show a delay 
    console.log("download started from url");
    setTimeout(() => {
        console.log("download completed");
        const  downloaddata="Dummy Content"
        cb(downloaddata)
    }, 4000);
    
}

function writeFile(data, cb) {
    // write a dummy impl using setTimeout to show a delay 
    setTimeout(() => {
        
    }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay 
     setTimeout(() => {
        
     }, 3000);
}

downloader("www.google.com",(dummyContent)=>{
    console.log(dummyContent)
})