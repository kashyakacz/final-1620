
const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

/*Function to update cart once img clocked on */
function cart(albums){
    for(const alb of albums){
        if(alb.name === document.getElementById("Album 1")){
            document.getElementsByClassName("cart-row")[0].textContent = alb 
            alb.incart = true
        }
        if(alb.name === document.getElementById("Album 2")){
            document.getElementsByClassName("cart-row")[0].textContent = alb 
            alb.incart = true
        }
        if(alb.name === document.getElementById("Album 3")){
            document.getElementsByClassName("cart-row")[0].textContent = alb
            alb.incart = true 
        }
        if(alb.name === document.getElementById("Album 4")){
            document.getElementsByClassName("cart-row")[0].textContent = alb 
            alb.incart = true
        }

        
    }

}

function status(albums){
    for(const alb in albums){
        if(alb.inCart === true){
            alert("ALready in cart")
        }
    }

}

  