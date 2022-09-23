function DownloadTxt(str) {
    const blob = new Blob([str],{"type":"text/plain"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const d = new Date();
    const year = d.getFullYear(),
        month = ( '00' + (d.getMonth() + 1)).slice(-2),
        date = ( '00' + d.getDate()).slice(-2),
        hours = ( '00' + d.getHours()).slice(-2),
        minutes = ( '00' + d.getMinutes()).slice(-2),
        seconds = ( '00' + d.getSeconds()).slice(-2),
        milliseconds = ( '000' + d.getMilliseconds()).slice(-3);
    link.download = `memo${year}${month}${date}${hours}${minutes}${seconds}${milliseconds}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
}
function OcClickButton(){
    DownloadTxt(document.getElementById("textarea").value);
}