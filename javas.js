function f1(color){

    console.log("function is called"+" value of the varibale is : "+color)
    i = document.getElementById('img');
    switch (color)
    {
    case 1:
        {
            i.src = "https://imgd.aeplcdn.com/600x337/n/zi8pqsa_1477511.jpg?q=75";
            break;
        }

    
    case 2:
        {
            i.src= "https://imgd.aeplcdn.com/600x337/n/zn6pqsa_1477519.jpg?q=75";
            break;
        }
    
    
    case 3:
        {

            i.src ="https://imgd.aeplcdn.com/600x337/n/zyqpqsa_1477521.jpg?q=75";
            break;
        }
    

    default:
        {
            i.style.cssText = "https://imgd.aeplcdn.com/600x337/n/zyqpqsa_1477521.jpg?q=75";
        break;
        }
        
}
}
function cart(){
    c = document.getElementsByTagName('input')[0];
    c.value="Your Item is Added successfully"
}