function dom(selector){
    return document.querySelector(selector);
}

const heading = dom('.heading');

const hoverText = (...text) =>{
    return text.reduce((result, item)=>{
        return result + `
        
        <span>${item}</span>
        
        ` 
    },"");
};

heading.innerHTML = hoverText(...heading.innerText);