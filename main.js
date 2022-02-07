var a = document.querySelectorAll('button');

a.forEach(function(element, index){
    
    var cart = {};
    element.onclick = function(){
        var infoProduct = element.parentElement;
        var img = infoProduct.children[0].src;
        var price = parseInt(infoProduct.children[1].children[0].innerText);
        var name = infoProduct.children[1].children[1].innerText;
        
        cart['anh']= img;
        cart['gia']= price;
        cart['ten']= name;
    }
    

});

function addProduct(element){

}