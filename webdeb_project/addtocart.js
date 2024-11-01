const product = [
    {
        id: 0,
        image: 'img1.jpg',
        title: 'Neem Facewash',
        price: 120,
    },
    {
        id: 1,
        image: 'img2.jpg',
        title: 'Colgate',
        price: 60,
    },
    {
        id: 2,
        image: '3.jpg',
        title: 'Aspirin 81mg',
        price: 230,
    },
    {
        id: 3,
        image: '4.jpg',
        title: 'Paracetamol',
        price: 160,
    },
    {
        id: 4,
        image: '5.jpg',
        title: 'IBUPROFEN 200mg',
        price: 1000,
    },
    {
        id: 5,
        image: '6.jpg',
        title: 'Omeprazole capsules',
        price: 100,
    },{
        id: 6,
        image: '7.jpg',
        title: 'Amoxicillin 500mg',
        price: 75,
    },
    {
        id: 7,
        image: '8.jpg',
        title: 'Simvastatin tablets 80mg',
        price: 175,
    },
    {
        id: 8,
        image: '9.jpg',
        title: 'Metformin 500',
        price: 30,
    },
    {
        id: 9,
        image: '10.jpg',
        title: 'Aerosol Inhaler 8.5',
        price: 350,
    },
    {
        id: 10,
        image: '11.jpg',
        title: 'ENO',
        price: 135,
    },
    {
        id: 11,
        image: '12.jpg',
        title: 'Saridon',
        price: 36,
    },
    {
        id: 12,
        image: '13.jpg',
        title: 'Dr. Ortho oil',
        price: 265,
    },
    {
        id: 13,
        image: '14.jpg',
        title: 'Betadine',
        price: 78,
    },
    {
        id: 14,
        image: '15.jpg',
        title: 'Dabur Chyawanprash',
        price: 225,
    },
    {
        id: 15,
        image: '16.jpg',
        title: 'Suthol Antiseptic liquid',
        price: 50,
    },
    {
        id: 16,
        image: '17.jpg',
        title: 'Boroline Cream',
        price: 40,
    },
    {
        id: 17,
        image: '18.jpg',
        title: 'Lifebuoy',
        price: 30,
    },
    {
        id: 18,
        image: '19.jpg',
        title: 'Stayfree Secure',
        price: 40,
    },
    {
        id: 19,
        image: '20.jpg',
        title: 'Pepsodent Toothbrush',
        price: 16,
    },
    {
        id: 20,
        image: '21.jpg',
        title: 'Odomos',
        price: 51,
    },
    {
        id: 21,
        image: '22.jpg',
        title: 'Odonil Air freshner',
        price: 65,
    },
    {
        id: 22,
        image: '23.jpg',
        title: 'Gillette Mach3',
        price: 354,
    },
    {
        id: 23,
        image: '24.jpg',
        title: 'Lizol floor cleaner',
        price: 101,
    },
    {
        id: 24,
        image: '25.jpg',
        title: 'Good night Gold flash',
        price: 65,
    }];
    const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
    }).join('')
    
    var cart =[];
    
    function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
    }
    function delElement(a){
    cart.splice(a, 1);
    displaycart();
    }
    
    function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:15px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
    
    
    }
    let carts= document.getElementById('carts');
    let sidebox = document.getElementById('sidebox');
    let mine = document.getElementById('mine');
    
    carts.addEventListener('click', function(){
        sidebox.style.display = 'block';
    })
    mine.addEventListener('click', function(){
        sidebox.style.display = 'none';
    })
    var preloader = document.getElementById("loading");
    function myFunction(){
        preloader.style.display = 'none';
    };
    