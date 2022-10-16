const data = [
    {
      id: 1,
      title: "Court Vision Low",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ca941236-2a66-47d6-8949-318225a4e6a7/court-vision-low-zapatillas-NFB8Zb.png",
      price: 74,
      expired: true,
      detail: "Men's Shoe",
      stock: 99,
      category: "man",
    },
    {
      id: 2,
      title: "Air Force 1 '07 ",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/13545718-2eb3-4a8c-9bb9-32b5b8c0a376/air-force-1-07-zapatillas-Hx43wp.png",
      price: 80,
      expired: true,
      detail: "Women's Shoe",
      stock: 99,
      category: "women",
    },
    {
      id: 3,
      title: "Blazer Low '77 Vintage",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fca59736-ff84-4797-9e64-0978d3b43731/blazer-low-77-vintage-zapatillas-qhV3wL.png",
      price: 90,
      expired: true,
      detail: "Women's Shoe",
      stock: 99,
      category: "women",
    },
    {
      id: 4,
      title: "Air Max 90 G",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2c12c7bc-7b4a-4289-b262-4bacf77801bc/air-max-90-g-zapatillas-de-golf-sqQCLC.png",
      price: 110,
      expired: true,
      detail: "Men's Shoe",
      stock: 99,
      category: "man",
    },
    {
      id: 5,
      title: "Air Max Plus",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/air-max-plus-shoes-CrzK8K.png",
      price: 180,
      expired: false,
      detail: "Men's-Shoe",
      stock: 99,
      category: "man",
    },
    {
      id: 6,
      title: "Air Max SC",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/5c3af11d-057c-493e-ad91-a9916be5645e/air-max-sc-shoes-fdzWNV.png",
      price: 59,
      expired: true,
      detail: "Women's Shoe",
      stock: 99,
      category: "women",
    },
    {
        id: 7,
        title: "Phantom GT2 Elite FG",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/908505e3-6a1a-4cf8-b7a5-5b20981168de/phantom-gt2-elite-fg-football-boot-CbSK2V.png",
        price: 260,
        expired: true,
        detail:"Firm-Ground Football Boot",
        stock: 99,
        category: "football",
    },
    {
        id: 8,
        title: "Zoom Mercurial Vapor ",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/32971aae-cdb6-45c1-9972-dd3803006658/zoom-mercurial-vapor-15-elite-fg-football-boot-zlzSkD.png",
        price: 280,
        expired: true,
        detail:"Firm-Ground Football Boot",
        stock: 99,
        category: "football",
    },
    {
        id: 9,
        title: "Air Max TW",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1db44a18-c0bf-4bf8-8181-c7e179c8f31d/air-max-tw-shoes-V29NNn.png",
        price: 160,
        expired: true,
        detail:"Men's Shoe",
        stock: 99,
        category: "man",
    },
    {
        id: 10,
        title: "Air Max Terrascape 97",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bee0364a-908b-479c-a3de-0966148faa45/air-max-terrascape-97-shoes-Trbm6k.png",
        price: 190,
        expired: true,
        detail:"Men's Shoe",
        stock: 99,
        category: "man",
    },
    {
        id: 11,
        title: "Air Jordan 1 Mid SE",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/86f61394-9929-4f2b-97c1-bc4f53304331/air-jordan-1-mid-se-shoes-qgbNsW.png",
        price: 140,
        expired: true,
        detail:"Women's Shoe",
        stock: 99,
        category: "women",
    },
    {
        id: 12,
        title: "Tiempo Legend 9 Elite ",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/830d2ce1-2166-4777-ac99-acddd3639e82/tiempo-legend-9-elite-fg-football-boots-fFqX06.png",
        price: 230,
        expired: true,
        detail:"Firm-Ground Football Boot",
        stock: 99,
        category: "football",
    },
    {
        id: 13,
        title: "Dunk High Up",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/79a8baeb-9890-4de5-a7fd-f326b01b474e/dunk-high-up-shoes-84tWL2.png",
        price: 230,
        expired: true,
        detail:"Women's Shoe",
        stock: 99,
        category: "women",
    },

  ];
  
  export function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 300);
    });
  }
  
  export function getOneProduct(idParams) {
    return new Promise((resolve) => {
      let productReq = data.find((item) => {
        return item.id === Number(idParams);
      });
      setTimeout(() => resolve(productReq), 300);
    });
  }
  
  export function getProductsByCategory(idCategoryParams) {
    return new Promise((resolve) => {
      let arrayFilterProducts = data.filter(
        (item) => item.category === idCategoryParams
      );
      setTimeout(() => resolve(arrayFilterProducts), 300);
    });
  }