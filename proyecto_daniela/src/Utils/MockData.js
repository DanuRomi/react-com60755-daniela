export const products = [
    {
      id: 1,
      name: "Camisa",
      description:
        "Camisa blanca",
      price: 100,
      stock: 10,
      type: 'camisa',
      image: "../public/camisa1.jpeg",
    },
    {
      id: 4,
      name: "Remera",
      description:
        "Remera negra",
      price: 400,
      stock: 40,
      type: 'remera',
      image: "../public/remera1.jpeg",
    },
    {
      id: 7,
      name: "Pantalon",
      description:
        "Pantalón negro",
      price: 700,
      stock: 70,
      type: 'pantalon',
      image: "../public/pantalon1.jpeg",
    },
    {
      id: 25,
      name: "Campera",
      description:
        "Campera",
      price: 2500,
      stock: 250,
      type: 'campera',
      image: "../public/campera1.jpeg",
    },
    {
        id: 2,
        name: "Camisa",
        description:
          "Camisa a rayas",
        price: 100,
        stock: 10,
        type:'camisa',
        image: "../public/camisa2.jpeg",
      },
      {
        id: 3,
        name: "Remera",
        description:
          "Remera verde",
        price: 400,
        stock: 40,
        type: 'remera',
        image: "../public/remera2.jpeg",
      },
      {
        id: 5,
        name: "Pantalon",
        description:
          "Pantalón marron",
        price: 700,
        stock: 70,
        type: 'pantalon',
        image: "../public/pantalon2.jpeg",
      },
      {
        id: 15,
        name: "Campera",
        description:
          "Campera color bordó",
        price: 2500,
        stock: 250,
        type: 'campera',
        image: "../public/campera2.jpeg",
      }
  ];
  
  export const getProducts = () => {

     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
            }, 2000);
        });
  };

  export const getFilteredProducts = (productId) => {

    return new Promise((resolve, reject) => {
   
       setTimeout(() => {
           resolve(products.filter((element) => element.type == productId));
           }, 1000);
       });
 };

  export const getProductoById = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find((element) => element.id == parseInt(id)));
        }, 1000);
    });
  };
  