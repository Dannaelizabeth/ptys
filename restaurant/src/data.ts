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
        desc:'Experience the taste of heaven with our scrumptious pizza menu',
        img:'',
        color:'red',
    },{
        id:2,
        cate:'burgers',
        title:'Juicy Burgers',
        desc:'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
        img:'',
        color:'white'
    },{
        id:3,
        cate:'chicken',
        title:'Crispy Chicken Delights',
        desc:'Savor the crispy and succulent goodness of our chicken dishes.',
        img:'',
        color:'red'
    }

];