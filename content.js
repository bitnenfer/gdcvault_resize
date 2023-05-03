const iframes = document.getElementsByTagName('iframe');

for (let iframe of iframes) {
    if (iframe.baseURI.includes('https://gdcvault.com/play')) {
        iframe.width = 960;
        iframe.height = 640;
    }
}

const player = document.getElementById('player');
if (player) {
    const columns = document.getElementsByClassName('right_column');
    if (columns) {
        for (const column of columns) {
            column.classList.remove('right_column');
        }
    }
}