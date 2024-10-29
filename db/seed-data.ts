interface SeedProduct {
  description: string;
  images: string[];
  stock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'Accesorios' | 'Correas' | 'Carrieles' | 'Bolsos' | 'Maletas' | 'Prendas';

export const seedProducts: SeedProduct[] = [
  {
    description:
      'Esta riñonera en elegante color café combina practicidad y estilo en un diseño compacto y versátil. Confeccionada en cuero resistente, es ideal para quienes buscan un accesorio funcional sin perder sofisticación. Su tono café cálido se adapta fácilmente a cualquier atuendo, mientras que sus detalles y acabados aportan un aspecto clásico y refinado. Con un compartimento principal espacioso y bolsillos adicionales, es perfecta para llevar tus esenciales, como el teléfono, billetera y llaves, de manera segura y organizada. Su correa ajustable garantiza comodidad en todo momento, convirtiéndola en el complemento perfecto tanto para el día a día como para ocasiones especiales.',
    images: ['Canguro Cafe.jpg'],
    stock: 10,
    price: 45000,
    sizes: [],
    slug: 'fanny_pack_brown_unisex',
    type: 'Accesorios',
    title: 'Canguro Café',
    gender: 'unisex',
  },
  {
    description:
      'Esta riñonera de color rojo vibrante es un accesorio práctico y estilizado, perfecto para quienes buscan llevar sus esenciales con comodidad y estilo. Confeccionada en cuero duradero, cuenta con elegantes bandas negras que recorren su diseño, agregando un toque moderno y deportivo. Su compartimento principal es amplio, ideal para guardar desde el teléfono hasta las llaves y la billetera, mientras que los bolsillos adicionales permiten un acceso rápido a objetos más pequeños. Ajustable y fácil de llevar, esta riñonera combina funcionalidad y moda, perfecta para cualquier ocasión, desde un paseo casual hasta una salida deportiva.',
    images: ['Canguro Rojo.jpg'],
    stock: 10,
    price: 45000,
    sizes: [],
    slug: 'fanny_pack_red_unisex',
    type: 'Accesorios',
    title: 'Canguro Rojo',
    gender: 'unisex',
  },
  {
    description:
      'Correa de cuero en color negro con blanco, combinando un estilo clásico con un toque moderno. Su diseño en dos tonos y su hebilla metálica robusta la convierten en un accesorio versátil para diferentes ocasiones.',
    images: ['Correa1.jpg'],
    stock: 15,
    price: 20000,
    sizes: [],
    slug: 'belt_black_and_white_unisex',
    type: 'Accesorios',
    title: 'Correa Negra Con Blanco',
    gender: 'unisex',
  },
  {
    description:
      'Correa de cuero en color negro, simple y elegante, perfecta para un look clásico. Su diseño resistente asegura durabilidad, ideal tanto para el uso diario como para eventos formales.',
    images: ['Correa2.jpg'],
    stock: 15,
    price: 15000,
    sizes: [],
    slug: 'belt_black_unisex',
    type: 'Accesorios',
    title: 'Correa Negra',
    gender: 'unisex',
  },
  {
    description:
      'Correa de cuero en color café marrón, ideal para quienes prefieren un look casual. Con un diseño minimalista y materiales de alta calidad, es perfecta para complementar cualquier atuendo.',
    images: ['Correa3.jpg'],
    stock: 20,
    price: 15000,
    sizes: [],
    slug: 'belt_brown_unisex',
    type: 'Accesorios',
    title: 'Correa Café',
    gender: 'unisex',
  },
  {
    description:
      'Correa de cuero multicolor en tonos blanco, gris, naranja y rojo. Con su diseño colorido y distintivo, es ideal para quienes buscan destacar su estilo con un toque único.',
    images: ['Correa4.jpg'],
    stock: 10,
    price: 20000,
    sizes: [],
    slug: 'belt_multicolor_unisex',
    type: 'Accesorios',
    title: 'Correa Multicolor',
    gender: 'unisex',
  },
  {
    description:
      'Bolso en cuero rojo, ideal para quienes buscan un accesorio sofisticado y funcional. Con un diseño amplio y resistente, es perfecto para llevar todos tus esenciales con estilo.',
    images: ['Bolso Rojo.jpg'],
    stock: 5,
    price: 120000,
    sizes: [],
    slug: 'bag_red_unisex',
    type: 'Bolsos',
    title: 'Bolso Rojo',
    gender: 'unisex',
  },
  {
    description:
      'Bolso en cuero negro y café oscuro, perfecto para un estilo elegante y clásico. Su diseño y materiales de alta calidad lo hacen un accesorio versátil y duradero.',
    images: ['Bolso Oscuro.jpg'],
    stock: 7,
    price: 100000,
    sizes: [],
    slug: 'bag_black_brown_unisex',
    type: 'Bolsos',
    title: 'Bolso Negro y Café',
    gender: 'unisex',
  },
  {
    description:
      'Maleta en cuero color café, diseñada para quienes buscan un accesorio amplio y duradero. Perfecta para llevar todo lo necesario en viajes o actividades diarias.',
    images: ['Maleta Cafe.jpg'],
    stock: 3,
    price: 150000,
    sizes: [],
    slug: 'luggage_brown_unisex',
    type: 'Maletas',
    title: 'Maleta Café',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color negro en talla L, confeccionada en algodón, poliéster y nylon. Perfecta para quienes buscan una prenda cómoda y versátil, adecuada para cualquier ocasión.',
    images: ['Camiseta1-1.jpg', 'Camiseta1-2.jpg'],
    stock: 20,
    price: 45000,
    sizes: ['L'],
    slug: 'tshirt_black_L_unisex',
    type: 'Prendas',
    title: 'Camiseta Negra Talla L',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex en color morado, talla XL, hecha con una mezcla de algodón, poliéster y nylon. Ideal para quienes buscan una prenda cómoda y de estilo moderno.',
    images: ['Camiseta2-1.jpg', 'Camiseta2-2.jpg'],
    stock: 15,
    price: 60000,
    sizes: ['XL'],
    slug: 'tshirt_purple_XL_unisex',
    type: 'Prendas',
    title: 'Camiseta Morada Talla XL',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color blanco en talla XL, confeccionada en algodón, poliéster y nylon. Ideal para quienes buscan una prenda cómoda y versátil, adecuada para cualquier ocasión.',
    images: ['Camiseta3-1.jpg', 'Camiseta3-2.jpg'],
    stock: 10,
    price: 55000,
    sizes: ['XL'],
    slug: 'tshirt_white_XL_unisex',
    type: 'Prendas',
    title: 'Camiseta Blanca Talla XL',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color negro en talla 2XL, hecha con una mezcla de algodón, poliéster y nylon. Ideal para quienes buscan una prenda cómoda y moderna.',
    images: ['Camiseta4-1.jpg', 'Camiseta4-2.jpg'],
    stock: 10,
    price: 60000,
    sizes: ['XXL'],
    slug: 'tshirt_black_2XL_unisex',
    type: 'Prendas',
    title: 'Camiseta Negra Talla 2XL',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color negro en talla XL, hecha en una mezcla de algodón, poliéster y nylon. Perfecta para quienes buscan comodidad y estilo en una prenda básica.',
    images: ['Camiseta5-1.jpg', 'Camiseta5-2.jpg'],
    stock: 10,
    price: 55000,
    sizes: ['XL'],
    slug: 'tshirt_black_XL_unisex',
    type: 'Prendas',
    title: 'Camiseta Negra Talla XL',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color verde aguamarina en talla 2XL, confeccionada en algodón, poliéster y nylon. Un diseño moderno para quienes buscan una prenda única y cómoda.',
    images: ['Camiseta6-1.jpg', 'Camiseta6-2.jpg'],
    stock: 10,
    price: 60000,
    sizes: ['XXL'],
    slug: 'tshirt_aquamarine_green_2XL_unisex',
    type: 'Prendas',
    title: 'Camiseta Verde Aguamarina Talla 2XL',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color blanco en talla XL, hecha con algodón, poliéster y nylon. Ideal para quienes buscan una prenda básica, cómoda y versátil.',
    images: ['Camiseta7-1.jpg', 'Camiseta7-2.jpg'],
    stock: 10,
    price: 55000,
    sizes: ['XL'],
    slug: 'tshirt_white_XL_unisex_2',
    type: 'Prendas',
    title: 'Camiseta Blanca Talla XL',
    gender: 'unisex',
  },
  {
    description:
      'Camiseta unisex de color café en talla XL, hecha en una mezcla de algodón, poliéster y nylon. Perfecta para quienes buscan un toque clásico en su estilo.',
    images: ['Camiseta8.jpg'],
    stock: 10,
    price: 60000,
    sizes: ['XL'],
    slug: 'tshirt_brown_XL_unisex',
    type: 'Prendas',
    title: 'Camiseta Café Talla XL',
    gender: 'unisex',
  },
  {
    description: "Top para mujer en talla única S, confeccionado en tela de algodón de color beige.",
    images: ["Top Mujer Beige.jpg"],
    stock: 10,
    price: 45000,
    sizes: ["S"],
    slug: "top_beige_S_women",
    type: "Prendas",
    title: "Top Beige Talla S",
    gender: "women"
  },
  {
    description: "Top para mujer en talla única S, confeccionado en tela de algodón de color café.",
    images: ["Top Mujer Cafe.jpg"],
    stock: 10,
    price: 45000,
    sizes: ["S"],
    slug: "top_cafe_S_women",
    type: "Prendas",
    title: "Top Café Talla S",
    gender: "women"
  },
  {
    description: "Top para mujer en talla única S, confeccionado en tela de algodón de color negro.",
    images: ["Top Mujer Negro.jpg"],
    stock: 10,
    price: 45000,
    sizes: ["S"],
    slug: "top_negro_S_women",
    type: "Prendas",
    title: "Top Negro Talla S",
    gender: "women"
  },
  {
    description: "Top para mujer en talla única S, confeccionado en tela de algodón de color blanco.",
    images: ["Top Mujer Blanco.jpg"],
    stock: 10,
    price: 45000,
    sizes: ["S"],
    slug: "top_blanco_S_women",
    type: "Prendas",
    title: "Top Blanco Talla S",
    gender: "women"
  },
  {
    description: "Top para mujer en talla única S, confeccionado en tela de lino de color rojo y blanco.",
    images: ["Top Mujer Rojo Blanco.jpg"],
    stock: 10,
    price: 35000,
    sizes: ["S"],
    slug: "top_rojo_blanco_S_women",
    type: "Prendas",
    title: "Top Rojo y Blanco Talla S",
    gender: "women"
  },
  {
    description: "Crop top para mujer en talla única S, confeccionado en tela de lino de color verde.",
    images: ["Croptop Mujer Verde.jpg"],
    stock: 10,
    price: 35000,
    sizes: ["S"],
    slug: "crop_top_verde_S_women",
    type: "Prendas",
    title: "Crop Top Verde Talla S",
    gender: "women"
  },
  {
    description: "Crop top para mujer en talla única S, confeccionado en tela de lino de color gris.",
    images: ["Croptop Mujer Gris.jpg"],
    stock: 10,
    price: 35000,
    sizes: ["S"],
    slug: "crop_top_gris_S_women",
    type: "Prendas",
    title: "Crop Top Gris Talla S",
    gender: "women"
  },
  {
    description: "Crop top para mujer en talla única S, confeccionado en tela de lino de color beige.",
    images: ["Croptop Mujer Beige Lino.jpg"],
    stock: 10,
    price: 35000,
    sizes: ["S"],
    slug: "crop_top_beige_S_women",
    type: "Prendas",
    title: "Crop Top Beige Talla S",
    gender: "women"
  },
  {
    description: "Crop top para mujer en talla única S, confeccionado en tela de rayón de color negro.",
    images: ["Croptop Mujer Negro Rayon.jpg"],
    stock: 10,
    price: 35000,
    sizes: ["S"],
    slug: "crop_top_negro_S_women",
    type: "Prendas",
    title: "Crop Top Negro Talla S",
    gender: "women"
  },
  {
    description: "Crop top para mujer en talla única S, confeccionado en tela de rayón de color café.",
    images: ["Croptop Mujer Cafe Rayon.jpg"],
    stock: 10,
    price: 30000,
    sizes: ["S"],
    slug: "crop_top_cafe_S_women",
    type: "Prendas",
    title: "Crop Top Café Talla S",
    gender: "women"
  },
  {
    description: "Crop top para mujer en talla única S, confeccionado en tela de rayón de color beige.",
    images: ["Croptop Mujer Beige Rayon.jpg"],
    stock: 10,
    price: 30000,
    sizes: ["S"],
    slug: "crop_top_beige_S_rayon_women",
    type: "Prendas",
    title: "Crop Top Beige Talla S",
    gender: "women"
  },
  {
    description: "Gabán para mujer en talla única L, confeccionado en tela de algodón de color miel.",
    images: ["Gaban Mujer Miel Algodon.jpg"],
    stock: 10,
    price: 120000,
    sizes: ["L"],
    slug: "gaban_miel_L_women",
    type: "Prendas",
    title: "Gabán Miel Talla L",
    gender: "women"
  },
  {
    description: "Gabán para mujer en talla única L, confeccionado en tela de algodón de color negro.",
    images: ["Gaban Mujer Negro Algodon.jpg"],
    stock: 10,
    price: 120000,
    sizes: ["L"],
    slug: "gaban_negro_L_women",
    type: "Prendas",
    title: "Gabán Negro Talla L",
    gender: "women"
  },
  {
    description: "Chaqueta ovejera corta para mujer en talla única S, confeccionada en tela de algodón de color rojo con beige.",
    images: ["Chaqueta Mujer Rojo Beige Algodon.jpg"],
    stock: 10,
    price: 80000,
    sizes: ["S"],
    slug: "chaqueta_ovejera_rojo_beige_S_women",
    type: "Prendas",
    title: "Chaqueta Ovejera Roja y Beige Talla S",
    gender: "women"
  },
  {
    description: "Jean oversize con rotos para mujer en talla única L, confeccionado en tela de denim de color azul claro.",
    images: ["Jean Mujer Azul Claro Denim.jpg"],
    stock: 10,
    price: 90000,
    sizes: ["L"],
    slug: "jean_oversize_azul_L_women",
    type: "Prendas",
    title: "Jean Oversize Azul Claro Talla L",
    gender: "women"
  },
  {
    description: "Falda corta para mujer en talla única S, confeccionada en tela de denim de color azul oscuro.",
    images: ["Falda Corta Mujer Azul Oscuro Denim.jpg"],
    stock: 10,
    price: 30000,
    sizes: ["S"],
    slug: "falda_corta_azul_S_women",
    type: "Prendas",
    title: "Falda Corta Azul Oscuro Talla S",
    gender: "women"
  },
  {
    description: "Falda corta para mujer en talla única S, confeccionada en tela de algodón de color beige.",
    images: ["Falda Corta Mujer Beige Denim.jpg"],
    stock: 10,
    price: 30000,
    sizes: ["S"],
    slug: "falda_corta_beige_S_women",
    type: "Prendas",
    title: "Falda Corta Beige Talla S",
    gender: "women"
  },
  {
    description: "Falda corta para mujer en talla única S, confeccionada en tela de algodón de color gris.",
    images: ["Falda Corta Mujer Gris Denim.jpg"],
    stock: 10,
    price: 30000,
    sizes: ["S"],
    slug: "falda_corta_gris_S_women",
    type: "Prendas",
    title: "Falda Corta Gris Talla S",
    gender: "women"
  },
  {
    description: "Pantalón oversize para mujer en talla única S, confeccionado en tela de rayón de color beige.",
    images: ["Pantalon Mujer Beige Rayon.jpg"],
    stock: 10,
    price: 90000,
    sizes: ["S"],
    slug: "pantalon_oversize_beige_S_women",
    type: "Prendas",
    title: "Pantalón Oversize Beige Talla S",
    gender: "women"
  },
];

