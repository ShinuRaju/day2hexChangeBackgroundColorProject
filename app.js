let btn = Array.from( document.getElementsByTagName('button') );
let body = Array.from(document.getElementsByTagName('body'));
let h1 = Array.from( document.getElementsByTagName('h1') ) ;

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}


btn.forEach((eachElement) => {
    eachElement.addEventListener('click', () => {
       let color = ['#'];
       for (let i = 0; i < 6; i++) {
           color.push(hexArray[randomNumber(5, hexArray.length)]);       
       } 
      
      
     h1.forEach((eachElement) =>{
            eachElement.textContent = color.join('');
     })
     
     body.forEach((eachElement)=>{
            eachElement.style.backgroundColor = color.join('');
     })
      
    });
});
