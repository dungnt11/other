/*
 * @author Nguyen Dung 
 * @create 07/02/2020
 */
!!(() => {
   /**
    * (c)https://stackoverflow.com/questions/17527713/force-browser-to-download-image-files-on-click
    */
   const forceDownload = (url, fileName) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
   }
     let imgList = [];
      (Array.from($('.separator'))).forEach(item => {
          Array.from(item.querySelectorAll('img')).forEach(img => imgList.push(img.src))
      });
     imgList.forEach(item => {
          setInterval(() => {
            forceDownload(item, Math.random() + '.jpg');
         }, 0); 
      });
})();
