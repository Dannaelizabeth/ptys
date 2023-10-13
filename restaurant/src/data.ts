
type Product ={
    id:number,
    title:string,
    desc?:string,
    img?:string,
    price:number,
    options?:{title:string, additionalPrice:number}[];
};

type Products = Product[];


export const pizzas : Products=[
    {
        id:1,
        title:'Margherita Pizza',
        desc:'A classic pizza topped with fresh tomatoes, mozzarella, and basil.',
        price:15.00,
        img:'/images/p1.png',
        options:[
            {title:'Small', additionalPrice:0,},
            {title:'Medium', additionalPrice:8,},
            {title:'Large', additionalPrice:10,}
        ],
    },{
        id:2,
        title:'Pepperoni Pizza',
        desc:'A crowd-favorite pizza loaded with pepperoni slices and melted cheese.',
        img:'/images/p2.png',
        price:12.00,
        options:[
            {title:'Small',additionalPrice:0},
            {title:'Medium', additionalPrice:4},
            {title:'Large', additionalPrice:6},
        ]
    },{
        id:3,
        title:'Vegetarian Pizza',
        desc:'',
        img:'/images/p3.png',
        price:13.55,
        options:[
            {title:'Small', additionalPrice:0},
            {title:'Medium', additionalPrice:5},
            {title:'Large', additionalPrice:8}
        ],
    },{
        id:4,
        title:'Hawaiian Pizza',
        desc:'',
        img:'/images/p5.png',
        price:20.00,
        options:[
            {title:'Small', additionalPrice:0},
            {title:'Medium', additionalPrice:2},
            {title:'Large', additionalPrice:4},
        ],
    },{
        id:5,
        title:'BBQ Pizza',
        desc:'A tangy BBQ sauce topped with grilled chicken and melted cheese.',
        img:'/images/p6.png',
        price:18.00,
        options:[
            {title:'Small', additionalPrice:0},
            {title:'Medium', additionalPrice:2},
            {title:'Large', additionalPrice:4},
        ],
    },{
        id:6,
        title:'Supreme Pizza',
        desc:'A pizza loaded with all your favorite toppings for the ultimate taste.',
        img:'/images/p4.png',
        price:25.00,
        options:[
            {title:'Small', additionalPrice:0},
            {title:'Medium', additionalPrice:4},
            {title:'Large', additionalPrice:8}
        ]
    }

]
export const singleProduct : Product={
    id:1,
    title:'Margherita Pizza',
    desc:'A classic pizza topped with fresh tomatoes, mozzarella, and basil.',
    price:15.00,
    img:'/images/p1.png',
    options:[
        {title:'Small', additionalPrice:5,},
        {title:'Medium', additionalPrice:8,},
        {title:'Large', additionalPrice:10,}
    ],

}


type Menu={
    id:number;
    cate:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;

}[];

export const menu: Menu =[
    {
        id:1,
        cate:'pizza',
        title:'Delicious Pizzas',
        desc:'Experience the taste of heaven with our scrumptious pizza ',
        img:'/images/1.png',
        color:'red',
    },{
        id:2,
        cate:'burgers',
        title:'Juicy Burgers',
        desc:'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings.',
        img:'/images/2.png',
        color:'white'
    },{
        id:3,
        cate:'chicken',
        title:'Crispy Chicken',
        desc:'Savor the crispy and succulent goodness of our chicken dishes.',
        img:'/images/3.png',
        color:'red'
    }

];