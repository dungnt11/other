$(document).ready(() => {
   const flag = confirm("Có muốn download hình không anh zai?");
    if (flag) {
        const wrapper = $('.separator');
        let listLink = [];
        Array.from(wrapper).forEach(item => {
            for(let img of item.children) {
                listLink.push(img.href);
            }
        });
        listLink.forEach(item => {
            var link = document.createElement('a');
            link.href = item;
            link.target = "_blank";
            link.download = Math.random() + '.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } 
}) 
