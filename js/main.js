function DownloadTxt(str) {
    const blob = new Blob([str],{"type":"text/plain"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const d = new Date();
    const year = d.getFullYear(),
        month = String((d.getMonth() + 1)).padStart(2,"0"),
        date = String(d.getDate()).padStart(2,"0"),
        hours = String(d.getHours()).padStart(2,"0"),
        minutes = String(d.getMinutes()).padStart(2,"0"),
        seconds = String(d.getSeconds()).padStart(2,"0"),
        milliseconds = String(d.getMilliseconds()).padStart(3,"0");
    link.download = `memo${year}${month}${date}${hours}${minutes}${seconds}${milliseconds}.txt`;
    console.log(`${year}/${month}/${date}/${hours}/${minutes}/${seconds}/${milliseconds}`);
    link.click();
    URL.revokeObjectURL(link.href);
}
function OcClickButton(){
    DownloadTxt(document.getElementById("textarea").value);
}