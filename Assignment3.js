function downloader(url, cb) {
    // write a dummy impl using setTimeout to show a delay 
    console.log("download started from url");
    setTimeout(() => {
        console.log("download completed");
        const  downloaddata="Dummy Content"
        cb(downloaddata)
    }, 4000);
    
}

function filewrite(data, cb) {
    // write a dummy impl using setTimeout to show a delay 
    console.log("writing start start to save");
    setTimeout(() => {
        console.log(" writing completed");
        const  filename="dummy.txt"
        cb(filename)
    }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay 
        console.log("start upload file : "+fileName+"newurl : "+newUrl);
     setTimeout(() => {
        const uploadStatus =" sucess full";
        cb(uploadStatus)
     }, 3000);
}

downloader("www.google.com",(dummyContent)=>{
    console.log(dummyContent)
    filewrite("fileWrite",(filedata)=>{
        console.log(filedata);
        uploadFile(filedata,"drive.google.com",(uploadData)=>{
            console.log(uploadData);
        })
    })
})