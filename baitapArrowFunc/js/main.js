
function dom(selector){
    return document.querySelector(selector);
}

const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

//Hiển thị list color
const displayColor = () =>{
   let html = colorList.reduce((total, item, index) =>{
    return index === 0
    ? total + `<button class="color-button ${item} active"></button>`
    
    : total + `<button class="color-button ${item}"></button>`
    
   },"");

   dom('#colorContainer').innerHTML = html;
}
// Load ra màn hình
displayColor();


let colorEl = document.querySelectorAll('.color-button');

const selectColor = () =>{
    for (let i = 0; i < colorEl.length; i++){
        colorEl[i].addEventListener('click', function () {
            changeColor(colorList[i], i);
        });
    }
};

const colorAddEl = (index) =>{
    for (let i = 0; i < colorEl.length; i++){
        colorEl[i].classList.remove("active");
    }
    colorEl[index].classList.add("active");
};

const changeColor = (colorName, index) => {
colorAddEl(index);
dom('#house').className = `house ${colorName}`;
};

selectColor();