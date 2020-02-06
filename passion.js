/*
 * @author Nguyen Dung 
 * @create 07/02/2020
 */
!(async () => {
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
  }

  let imgList = [];
  (Array.from($('.separator'))).forEach(item => {
    Array.from(item.querySelectorAll('img')).forEach(img => imgList.push(img.src))
  });
  for (const item of imgList) {
    if (/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(item)) {
      await download(item, item.slice(item.lastIndexOf('/') + 1));
    }
  }
})();
