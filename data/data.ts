interface Review {
  reviewId: number;
  gameName: string;
  gamePlatform: string[];
  gameRating: number;
  gameReview: string;
  gameImage?: string;
  createdAt: string;
  updatedAt: string;
  author: string;
}

interface New {
  newId: number;
  newTitle: string;
  newDescription: string;
  newImage?: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

interface Guide {
  gameName: string;
  body: string;
  gamePlatform: string[];
  achievements: number;
  createdAt: string;
  updatedAt: string;
  gameImage?: string;
}

const REVIEWS: Review[] = [
  {
    reviewId: 1,
    gameName: 'The Legend of Zelda: Breath of the Wild',
    gamePlatform: ['Nintendo Switch', 'Wii U'],
    gameRating: 9.3,
    gameReview: 'This game is amazing! It is the best game I have ever played.',
    gameImage: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    author: 'John Doe'
  },
  {
    reviewId: 2,
    gameName: 'Elden Ring',
    gamePlatform: ['PlayStation 5', 'Xbox Series X', 'PC'],
    gameRating: 9.1,
    gameReview: 'Con una increíble jugabilidad Soulslike, Elden Ring es una maravilla que desafía a los jugadores.',
    createdAt: '2024-01-23T00:00:00.000Z',
    updatedAt: '2024-01-23T00:00:00.000Z',
    author: 'John Doe'
    },
    {
      reviewId: 3,
      gameName: 'Ghost of Tsushima',
      gamePlatform: ['PlayStation 4', 'PlayStation 5'],
      gameRating: 9.6,
      gameReview: 'Un fascinante viaje a través del Japón feudal, con una narrativa convincente y combates densos.',
      createdAt: '2024-01-23T00:00:00.000Z',
      updatedAt: '2024-01-23T00:00:00.000Z',
      author: 'John Doe',
      gameImage: 'https://assetsio.reedpopcdn.com/ghost-of-tsushima-review-a-likeable-if-clunky-hollywood-blockbuster-1594727460287.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
    },
    {
      reviewId: 4,
      gameName: 'Super Mario Odyssey',
      gamePlatform: ['Nintendo Switch'],
      gameRating: 8.8,
      gameReview: 'Una aventura emocionante e innovadora dentro del universo de Mario.',
      createdAt: '2024-01-24T00:00:00.000Z',
      updatedAt: '2024-01-24T00:00:00.000Z',
      author: 'John Doe',
      gameImage: 'https://placeholder.com/placeholder.jpg'
    },
    {
      reviewId: 5,
      gameName: 'Cyberpunk 2077',
      gamePlatform: ['PlayStation 4', 'PlayStation 5', 'PC', 'Xbox One', 'Xbox Series X'],
      gameRating: 7,
      gameReview: 'El juego brinda una experiencia inmersiva, a pesar de algunos problemas técnicos.',
      createdAt: '2024-01-24T00:00:00.000Z',
      updatedAt: '2024-01-24T00:00:00.000Z',
      author: 'John Doe',
      gameImage: 'https://placeholder.com/placeholder.jpg'
    },
    {
      reviewId: 6,
      gameName: 'Among Us',
      gamePlatform: ['PC', 'iOS', 'Android', 'Nintendo Switch'],
      gameRating: 8.2,
      gameReview: 'Un juego divertido y desafiante, excelente para jugar con amigos.',
      createdAt: '2024-01-24T00:00:00.000Z',
      updatedAt: '2024-01-24T00:00:00.000Z',
      author: 'John Doe',
      gameImage: 'https://placeholder.com/placeholder.jpg'
    },
  {
    reviewId: 7,
    gameName: 'Star Wars Jedi: Fallen Order',
    gamePlatform: ['PlayStation 4', 'Xbox One', 'PC'],
    gameRating: 9.7,
    gameReview: 'El mejor juego de Star Wars de la última década.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://cdn1.epicgames.com/e509c16d53714b13ba8e393966507255/offer/jedi-fallen-orderWide-1920x1080-28eae371dbae080e2fc0df646fa42917.jpg'
  },
  {
    reviewId: 8,
    gameName: 'Doom Eternal',
    gamePlatform: ['PlayStation 4', 'javascript', 'Xbox One', 'PC', 'Nintendo Switch'],
    gameRating: 9,
    gameReview: 'Una secuela intensa, llena de acción y desafíos implacables.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 9,
    gameName: 'Red Dead Redemption II',
    gamePlatform: ['PlayStation 4', 'Xbox One', 'PC'],
    gameRating: 7.8,
    gameReview: 'Una experiencia inmersiva con una narrativa profunda y emocionante.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://i.blogs.es/169695/red0/1366_2000.jpg'
  },
  {
    reviewId: 10,
    gameName: 'God of War',
    gamePlatform: ['PlayStation'],
    gameRating: 9.5,
    gameReview: 'Un reinicio impresionante de la franquicia con una narrativa madura y jugabilidad exquisita.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png'
  },
  {
    reviewId: 11,
    gameName: 'The Witcher 3: Wild Hunt',
    gamePlatform: ['PlayStation 4', 'Xbox One', 'PC', 'Nintendo Switch'],
    gameRating: 9.3,
    gameReview: 'Un juego de rol brillante y envolvente, lleno de historia rica y jugabilidad emocionante.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0914/TvcIHkYqqln1RGbaFqBeuFp6.jpg'
  },
  {
    reviewId: 12,
    gameName: 'Uncharted 4: A Thief\'s End',
    gamePlatform: ['PlayStation 4'],
    gameRating: 8.2,
    gameReview: 'La conclusión perfecta para la saga de Nathan Drake, un juego realmente emocionante.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 13,
    gameName: 'Overwatch',
    gamePlatform: ['PlayStation 4', 'Xbox One', 'PC', 'Nintendo Switch'],
    gameRating: 7.9,
    gameReview: 'Una experiencia multijugador competitiva y equilibrada con gran variedad de personajes y estrategias.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 14,
    gameName: 'Dark Souls III',
    gamePlatform: ['PlayStation 4', 'Xbox One', 'PC'],
    gameRating: 9,
    gameReview: 'El juego más refinado de la trilogía, un desafío que vale la pena para cualquier fan de los RPGs.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 15,
    gameName: 'Final Fantasy VII Remake',
    gamePlatform: ['PlayStation 4'],
    gameRating: 8.7,
    gameReview: 'Un remake emocionante y estético de un clásico querido, ofrece una experiencia completamente nueva.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 16,
    gameName: 'The Last of Us: Part II',
    gamePlatform: ['PlayStation 4'],
    gameRating: 9,
    gameReview: 'Una secuela emocionalmente desafiante y narrativamente ambiciosa, este juego supera su predecesor en casi todos los aspectos.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 17,
    gameName: 'Hades',
    gamePlatform: ['PC', 'Nintendo Switch'],
    gameRating: 6.6,
    gameReview: 'Un roguelike adictivo y desafiante con narrativa profundamente entrelazada y jugabilidad emocionante.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 18,
    gameName: 'Genshin Impact',
    gamePlatform: ['PC', 'Playstation', 'iOS', 'Android'],
    gameRating: 7.2,
    gameReview: 'Un gacha RPG de mundo abierto con hermosos gráficos, música envolvente y jugabilidad adictiva.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 19,
    gameName: 'Hollow Knight',
    gamePlatform: ['PC', 'Playstation', 'Xbox One', 'Nintendo Switch'],
    gameRating: 5.8,
    gameReview: 'Un metroidvania atmosférico con un mundo elaborado, combate desafiante y una narrativa desgarradora.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 20,
    gameName: 'Death Stranding',
    gamePlatform: ['Playstation', 'PC'],
    gameRating: 8,
    gameReview: 'Una experiencia única y polarizante, Death Stranding es innovador pero puede ser divisivo para muchos jugadores.',
    createdAt: '2024-01-24T00:00:00.000Z',
    updatedAt: '2024-01-24T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://placeholder.com/placeholder.jpg'
  },
  {
    reviewId: 21,
    gameName: 'Call of Duty: Modern Warfare III',
    gamePlatform: ['Playstation', 'Xbox', 'PC'],
    gameRating: 8.7,
    gameReview: 'El mejor juego de la saga Modern Warfare, con una campaña emocionante y un multijugador adictivo.',
    createdAt: '2024-01-25T00:00:00.000Z',
    updatedAt: '2024-01-25T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://i0.wp.com/xxboxnews.blob.core.windows.net/prod/sites/4/SECONDARY_KA_16_9_BRANDED_083123-Copy-f576af011ceabf3e9dda.jpg?resize=1200%2C675&ssl=1',
  },
  {
    reviewId: 22,
    gameName: 'Gears 5',
    gamePlatform: ['Xbox', 'PC'],
    gameRating: 8.8,
    gameReview: 'Una secuela sólida, con una campaña emocionante y un multijugador divertido.',
    createdAt: '2024-01-25T00:00:00.000Z',
    updatedAt: '2024-01-25T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg?t=1684425784',
  },
  {
    reviewId: 23,
    gameName: 'Starfield',
    gamePlatform: ['Playstation', 'Xbox', 'PC'],
    gameRating: 9,
    gameReview: 'Un juego de rol de ciencia ficción, con una historia profunda y jugabilidad emocionante.',
    createdAt: '2024-01-25T00:00:00.000Z',
    updatedAt: '2024-01-25T00:00:00.000Z',
    author: 'John Doe',
    gameImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg?t=1700075960',
  }
];

const NEWS: New[] = [
  {
    newId: 1,
    newTitle: 'The Witcher 3: Wild Hunt',
    newDescription: 'The Witcher 3: Wild Hunt es un videojuego de rol desarrollado y publicado por CD Projekt RED.​ Basado en la serie de novelas del brujo Geralt de Rivia, del escritor polaco Andrzej Sapkowski.',
    author: 'John Doe',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
  },
  {
    newId: 2,
    newTitle: 'Cyberpunk 2077: A New Perspective',
    newDescription: 'Cyberpunk 2077, otro juego de rol aclamado por la crítica de CD Projekt RED, ofrece una perspectiva única en un universo futurista distópico.',
    author: 'Jane Doe',
    createdAt: '2021-02-01T00:00:00.000Z',
    updatedAt: '2021-02-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
  },
  {
    newId: 3,
    newTitle: 'Andrzej Sapkowski: The Mastermind Behind The Witcher',
    newDescription: 'Perfil del autor polaco Andrzej Sapkowski, creador de la amada serie de libros The Witcher.',
    author: 'John Doe',
    createdAt: '2021-03-01T00:00:00.000Z',
    updatedAt: '2021-03-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Andrzej_Sapkowski_2016.jpg'
  },
  {
    newId: 4,
    newTitle: 'The Evolution of RPGs in Video Games',
    newDescription: 'Análisis de la evolución de los videojuegos de rol (RPG), con énfasis en los títulos populares como The Witcher y Cyberpunk 2077.',
    author: 'Jane Doe',
    createdAt: '2021-04-01T00:00:00.000Z',
    updatedAt: '2021-04-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Andrzej_Sapkowski_2016.jpg'
  },
  {
    newId: 5,
    newTitle: 'The Art of World Building in The Witcher 3',
    newDescription: 'An examination of the extensive world building in The Witcher 3, one of the most immersive worlds in gaming history.',
    author: 'John Doe',
    createdAt: '2021-05-01T00:00:00.000Z',
    updatedAt: '2021-05-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
  },
  {
    newId: 6,
    newTitle: 'The Storytelling Genius of CD Projekt RED',
    newDescription: 'Insights into the storytelling techniques and plot development of CD Projekt RED, the developers behind The Witcher and Cyberpunk 2077.',
    author: 'Jane Doe',
    createdAt: '2021-06-01T00:00:00.000Z',
    updatedAt: '2021-06-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
  },
  {
    newId: 7,
    newTitle: 'Roleplaying Complexity in The Witcher 3',
    newDescription: 'Discussion of the complex choice systems and their effects on gameplay in RPGs, specifically focusing on The Witcher 3.',
    author: 'John Doe',
    createdAt: '2021-07-01T00:00:00.000Z',
    updatedAt: '2021-07-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
  },
  {
    newId: 8,
    newTitle: 'Game Music Spotlight: The Witcher 3',
    newDescription: 'Giving praise to the memorable and immersive soundtrack of The Witcher 3: Wild Hunt, and its contribution to the overall gaming experience.',
    author: 'Jane Doe',
    createdAt: '2021-08-01T00:00:00.000Z',
    updatedAt: '2021-08-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
  },
  {
    newId: 9,
    newTitle: 'CD Projekt RED: Journey to Success',
    newDescription: 'A look into the journey of game developing company CD Projekt RED, their successes, failures and notable milestones.',
    author: 'John Doe',
    createdAt: '2021-09-01T00:00:00.000Z',
    updatedAt: '2021-09-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
  },
  {
    newId: 10,
    newTitle: 'Understanding The Witcher Universe',
    newDescription: 'Comprehensive guide to the expansive universe of The Witcher, helping newcomers understand the world and its key elements.',
    author: 'Jane Doe',
    createdAt: '2021-10-01T00:00:00.000Z',
    updatedAt: '2021-10-01T00:00:00.000Z',
    newImage: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
  },
];

const GUIDES: Guide[] = [
  {
    gameName: 'The Witcher 3: Wild Hunt',
    gamePlatform: ['PlayStation', 'Xbox', 'PC', 'Nintendo Switch'],
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    achievements: 50,
    gameImage: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    body: `
    # Guía para pasar 'The Legend of Zelda: Breath of the Wild'

    ## Logro 1: ¡Primera Espada!

    Después de despertar en el 'Santuario de la Resurrección', dirigete al 'Templo del Tiempo'. 

    1. Sal del santuario.
    2. Enfrentate a los enemigos basicos para familiarizarte con el combate.
    3. Dirígete al 'Templo del Tiempo'.
    4. Allí encontrarás la espada.

    ## Logro 2: Santuarios de la Meseta

    Completa los cuatro santuarios en la Meseta de los Albores. 

    1. En la Meseta de los Albores, encontrarás cuatro santuarios.
    2. Resuelve los acertijos en cada santuario.
    3. Derrota al Guardián dentro de cada santuario para obtener recompensas especiales.

    ### Santuario de Oman Au
    ### Santuario de Ja Baij
    ### Santuario de Owa Daim
    ### Santuario de Keh Namut

    ## Logro 3: Pararrayos

    Equipate con el pararrayos localizado en la región de Faron. 

    1. Enfrentate a una serie de enemigos en el Bosque de Faron.
    2. Encuentra el pararrayos.
    3. Acopla el pararrayos a tu equipo como arma principal.

    ## Logro 4: Derrota al Jefe Final

    Finalmente, derrota al Jefe Final localizado en el Castillo de Hyrule. 

    1. Dirígete al Castillo de Hyrule.
    2. Enfrenta y derrota a los Guardias del Castillo.
    3. Llega a la sala donde se encuentra el Jefe Final.
    4. Utiliza la estrategia que has aprendido para derrotarlo.

    Esperamos que esta guía haya sido útil en tu aventura. Recuerda, la práctica hace al maestro.`
  },
  {
    gameName: 'Dragons: Scorching Sky',
    gamePlatform: ['PlayStation', 'Xbox', 'PC'],
    createdAt: '2022-09-01T00:00:00.000Z',
    updatedAt: '2023-11-01T00:00:00.000Z',
    achievements: 200,
    gameImage: 'https://th.bing.com/th/id/OIG4.dj.bQEg__n7H2NS459gU?pid=ImgGn',
    body: `
    # Guía para completar 'Dragons: Scorching Sky'
    
    ## Logro 1: Descubre la Chispa del Dragón
    
    1. Inicia tu aventura en el 'Valle Ardiente'.
    2. Combate contra los primeros dragones para ganar experiencia.
    3. Encuentra la 'Chispa del Dragón' oculta en una cueva secreta.
    
    ## Logro 2: Defiende el Nido
    
    1. Cuando llegues al 'Nido Sagrado', se activará una oleada de enemigos.
    2. Defiende el nido y protege a los dragones recién nacidos.
    
    ## Logro 3: Domina el Cielo
    
    1. Vuela por el 'Desfiladero Viento Sur' sin chocar contra ninguna pared.
    2. Enfréntate en combate aéreo contra el 'Lord de las Ventiscas'.
    
    ## Logro 4: Derrota al Tirano de Fuego
    
    1. Intrusión al 'Palacio de Lava'.
    2. Enfrenta y vence al 'Tirano de Fuego' para lograr la paz en el reino.`
  },
  {
    gameName: 'Enshadowed: Layers of Fear',
    gamePlatform: ['PlayStation', 'Xbox', 'PC'],
    createdAt: '2022-04-20T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    achievements: 40,
    gameImage: 'https://cdn.akamai.steamstatic.com/steam/apps/1946700/capsule_616x353.jpg?t=1698655056',
    body: 
    `
    # Guía para completar 'Enshadowed: Layers of Fear'
    
    ## Logro 1: Escape de la Oscuridad
    
    1. Despierta en la 'Mansión de la Locura'.
    2. Resuelve el primer acertijo para salir del primer piso.
    3. Llega al jardín exterior antes que el fantasma te alcance.
    
    ## Logro 2: Descubre la Verdad
    
    1. En el sótano, encuentra el diario oculto.
    2. Enciende todas las velas para revelar el mensaje secreto en el diario.
    
    ## Logro 3: Derrota a la Sombra
    
    1. Encuentra el espejo mágico en el ático de la mansión.
    2. Usa el espejo para reflejar la luz y derrotar a la sombra.
    
    ## Logro 4: Libera tu Mente
    
    1. Resuelve el acertijo final en el laberinto de espejos.
    2. Alcanza la máxima meditación y escapa de la mansión para siempre.
    `
  },
  {
    gameName: 'Raspberry Raiders',
    gamePlatform: ['Nintendo Switch'],
    createdAt: '2023-06-14T00:00:00.000Z',
    updatedAt: '2023-12-31T00:00:00.000Z',
    achievements: 100,
    gameImage: 'https://th.bing.com/th/id/OIG4.VkguFlJTzIni1eEwjy0g?pid=ImgGn',
    body: `
    # Guía para completar 'Raspberry Raiders'
    
    ## Logro 1: Acechanze al Azucarero
    
    1. Comienza tu aventura en el 'Bosque de Frutas'.
    2. Derrota a los primeros enemigos, las 'Hormigas Ácidas'.
    3. Encuentra y derrota al 'Azucarero Assasin'.
    
    ## Logro 2: Domina el Licuado
    
    1. Atraviesa el 'Río de Jugo'.
    2. Recoge todas las frutas y combina los ingredientes para hacer un 'Licuado de Poder'.
    
    ## Logro 3: Rey de las Moras Azules
    
    1. Llega a la 'Montaña Mora'.
    2. Completa el desafío de recolección y conviértete en el 'Rey de las Moras Azules'.
    
    ## Logro 4: Final del Jugo
    
    1. Conduce por el 'Camino de Caramelo'.
    2. Enfrenta y derrota al 
    Jefe de Gelatina' para liberar la región de su pegajoso reinado.
    `
  },
  {
    gameName: 'Gladiators: The Immortal Clash',
    gamePlatform: ['PC', 'PlayStation', 'Xbox'],
    createdAt: '2023-03-10T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
    achievements: 120,
    gameImage: 'https://play-lh.googleusercontent.com/0hVOjcjvzsV7tNI86CYsx73iGRJ0dNJ2Fp6x6anmP6e_Xu3ElOCBA7HgDm0e-kaOONc',
    body: 
    `
    # Guía para completar 'Gladiators: The Immortal Clash'
    
    ## Logro 1: Entra en la Arena
    
    1. Crea tu gladiador y entra en la Arena.
    2. Derrota a tus primeros oponentes y demuestra tu valía.
    
    ## Logro 2: Obtén la Espada de Marte
    
    1. Completa las tareas del patrocinador 'Marte'.
    2. Se te otorgará la 'Espada de Marte' como recompensa.
    
    ## Logro 3: Domina el León
    
    1. Supera el desafío del León en la Arena.
    2. Entrena a tu león y hazlo tu compañero de batalla.
    
    ## Logro 4: Conviértete en el Campeón
    
    1. Derrota a todos los demás gladiadores en la Gran Batalla.
    2. Alzate como el Campeón Inmortal de la Arena.
    `
  },
  {
    gameName: 'Cybernetica: Rise of the Robots',
    gamePlatform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    createdAt: '2021-11-11T00:00:00.000Z',
    updatedAt: '2023-10-30T00:00:00.000Z',
    achievements: 80,
    gameImage: 'https://cdn.neopangea.com/images/projects/rise_of_robots/robots-hero/Smithsonian_RiseOfTheRobots_01.jpg',
    body: 
    `
    # Guía para completar 'Cybernetica: Rise of the Robots'
    
    ## Logro 1: Primer Paso en el Futuro
    
    1. Comienza tu vida en Ciudad Neón.
    2. Personaliza tu robot y supera la primera misión.
    
    ## Logro 2: Hackea el Sistema
    
    1. Infiltra el sistema del Gobierno Central.
    2. Resuelve los acertijos del código y hackea el sistema.
    
    ## Logro 3: Constructor Supremo
    
    1. Recolecta todos los recursos necesarios.
    2. Construye el Robot definitivo en tu laboratorio.
    
    ## Logro 4: Liberación de la Ciudad Neón
    
    1. Enfrenta a las fuerzas del Gobierno Central.
    2. Libera la Ciudad Neón de su control.`
  }
]

export const topGames = REVIEWS.sort((a, b) => b.gameRating - a.gameRating).slice(0, 5);
export const lastFourNews = NEWS.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 4);
export const lastThreegames = REVIEWS.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 3);
export const lastFiveGuides = GUIDES.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);