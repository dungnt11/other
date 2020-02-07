/*
 * @author Nguyen Dung 
 * @create 07/02/2020
 */
!(() => {
  const toDataURL = (url) => {
    return fetch(url).then((response) => {
      return response.blob();
    }).then(blob => {
      return URL.createObjectURL(blob);
    });
  }

  const download = async (url, nameFile) => {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = nameFile;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  /** Create button **/
  const btn = document.createElement('button');
  btn.innerText = "DOWNLOAD ↓";
  btn.id = 'downloadBTN';
  $('body').append(btn);
  btn.style.cssText = `
    position: fixed;
    left: 1%;
    top: 94%;
    border: none;
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556e 78%, #2f0255 100%);
    width: 150px;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    box-shadow: 4px 4px 7px #48454cb3;`;
    btn.onclick = async () => {
      let imgList = [];
      (Array.from($('.separator'))).forEach(item => {
        Array.from(item.querySelectorAll('img')).forEach(img => imgList.push(img.src))
      });
      for (const item of imgList) {
        if (/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(item)) {
          await download(item, item.slice(item.lastIndexOf('/') + 1));
        }
      }
  };  
})();
