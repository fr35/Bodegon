const dataProducts = [
    {
        "url": "Rabas",
        "id": 1,
        "nombre": "Rabas",
        "precio": 1600,
        "categoria": "Guarniciones",
        "stock": 12,
        "img": "https://media.istockphoto.com/photos/fried-squid-rings-picture-id1328165756?k=20&m=1328165756&s=612x612&w=0&h=auj3rHHx95YAx3LEqvTgPQk0LpQioKucNquDgHFiugk=",
        "descripción": "Comen 2, pican 3"
    }, 
    {
        "url": "BastonesDeMuzzarella",
        "id": 2,
        "nombre": "Bastones de Muzzarella",
        "precio": 950,
        "categoria": "Guarniciones",
        "stock": 13,
        "img": "https://media.istockphoto.com/photos/breaded-mozzarella-cheese-sticks-with-tomato-basil-sauce-picture-id652704490?k=20&m=652704490&s=612x612&w=0&h=uQjl5xcm6X4zRf3p63FG-7gAgcFcAPqXrIhtLVUDbwY=",
        "descripción": "8 bastones de muzzarella"
    }, 
    {
        "url": "TortillaEspañola",
        "id": 3,
        "promo": 5,
        "nombre": "Tortilla española",
        "precio": 1000,
        "categoria": "Guarniciones",
        "stock": 8,
        "img": "https://media.istockphoto.com/photos/traditional-spanish-omelette-picture-id613773540?k=20&m=613773540&s=612x612&w=0&h=UFSDfFujGQSDoWwfYutJ78KAZn395Gc2vJj9HXWeYxA=",
        "descripción": "Tortilla de papa española para dos"
    }, 
    {
        "url": "LangostinosCrocantes",
        "id": 4,
        "nombre": "Langostinos crocantes",
        "precio": 1300,
        "categoria": "Guarniciones",
        "stock": 13,
        "img": "https://media.istockphoto.com/photos/fried-organic-coconut-shrimp-picture-id186139921?k=20&m=186139921&s=612x612&w=0&h=WBLRNYpyEAw5d2uhSJmMNT2ewhIJCIWbCXdNXUKR1kY=",
        "descripción": "Langostinos apanados con cereales neutros y semillas acompañados de alioli"
    }, 
    {
        "url": "EnsaladaDeRuculaQuesoParmesano",
        "id": 5,
        "nombre": "Ensalada de rúcula y queso parmesano",
        "precio": 670,
        "categoria": "Guarniciones",
        "stock": 20,
        "img": "https://media.istockphoto.com/photos/healthy-vegan-quinoa-spinach-salad-picture-id941131444?k=20&m=941131444&s=612x612&w=0&h=ASAP5d8aw-Hk9jiaImrzShxPhAWZRpWLAO3ZFQlxY4U=",
        "descripción": "Ensalada de rúcula con queso parmesano"
    }, 
    {
        "url": "EnsaladaCaesarPollo",
        "id": 6,
        "nombre": "Ensalada Caesar con pollo",
        "precio": 980,
        "categoria": "Guarniciones",
        "stock": 9,
        "img": "https://media.istockphoto.com/photos/caesar-salad-with-grilled-chicken-and-croutons-of-bread-picture-id1211166166?k=20&m=1211166166&s=612x612&w=0&h=G2Fue_mDglim2P4vuPCQ518TNIfiTxyhmSJWNWllXN4=",
        "descripción": "Mix verdes, croutones, panceta, parmesano, pollo y aderezo Caesar"
    }, 
    {
        "url": "PapasFritas",
        "id": 7,
        "nombre": "Papas fritas",
        "precio": 550,
        "categoria": "Guarniciones",
        "stock": 20,
        "img": "https://media.istockphoto.com/photos/basket-of-french-fries-picture-id614420426?k=20&m=614420426&s=612x612&w=0&h=yj0Bt4zau1kXmy76ddTM0GYseunN3EpK83YVGXk0Fi0=",
        "descripción": "Porcion de papas fritas para compartir"
    }, 
    {
        "url": "BatatasFritas",
        "id": 8,
        "nombre": "Batatas fritas",
        "precio": 590,
        "categoria": "Guarniciones",
        "stock": 15,
        "img": "https://media.istockphoto.com/photos/healthy-baked-orange-sweet-potato-wedges-with-dip-sauce-herbs-salt-picture-id1221209346?k=20&m=1221209346&s=612x612&w=0&h=cDntek55af-G-ryhMnSE-vl98swAJnvO19W5PH-36Bw=",
        "descripción": "Porcion de batatas fritas para compartir"
    }, 
    {
        "url": "PureDePapas",
        "id": 9,
        "nombre": "Pure de papas",
        "precio": 630,
        "categoria": "Guarniciones",
        "stock": 6,
        "img": "https://media.istockphoto.com/photos/mashed-potatoes-in-bowl-isolated-on-white-background-picture-id1043524216?k=20&m=1043524216&s=612x612&w=0&h=e-TQDb2YrMPOaCRRIPyUh_pwMktWUkg1x3U4qLpoCvY=",
        "descripción": "Guarnicion de pure de papas"
    }, 
    {
        "url": "PureDeCalabaza",
        "id": 10,
        "nombre": "Pure de calabaza",
        "precio": 630,
        "categoria": "Guarniciones",
        "stock": 5,
        "img": "https://media.istockphoto.com/photos/pumpkin-and-carrot-soup-with-cream-and-parsley-top-view-picture-id535585200?k=20&m=535585200&s=612x612&w=0&h=_pKFZOsvkTaEDSktSEZXyGgHO3dfvhj4KOCLeBqF0kw=",
        "descripción": "Guarnicion de pure de calabaza"
    }, 
    {
        "url": "EspinacasALaCrema",
        "id": 11,
        "nombre": "Espinacas a la crema",
        "precio": 680,
        "categoria": "Guarniciones",
        "stock": 7,
        "img": "https://media.istockphoto.com/photos/creamy-homemade-creamed-spinach-picture-id842079494?k=20&m=842079494&s=612x612&w=0&h=WjBqLktimxAOYNJ4XmaalFgli0LIz2aS7FTIO_4uBfE=",
        "descripción": "Guarnicion de espinacas a la crema"
    }, 
    {
        "url": "PapasFritasMediaPorcion",
        "id": 12,
        "nombre": "1/2 Papas fritas",
        "precio": 370,
        "categoria": "Guarniciones",
        "stock": 3,
        "img": "https://media.istockphoto.com/photos/basket-of-french-fries-picture-id614420426?k=20&m=614420426&s=612x612&w=0&h=yj0Bt4zau1kXmy76ddTM0GYseunN3EpK83YVGXk0Fi0=",
        "descripción": "Media porcion de papas fritas"
    }, 
    {
        "url": "BatatasFritasMediaPorcion",
        "id": 13,
        "nombre": "1/2 Batatas fritas",
        "precio": 390,
        "categoria": "Guarniciones",
        "stock": 12,
        "img": "https://media.istockphoto.com/photos/healthy-baked-orange-sweet-potato-wedges-with-dip-sauce-herbs-salt-picture-id1221209346?k=20&m=1221209346&s=612x612&w=0&h=cDntek55af-G-ryhMnSE-vl98swAJnvO19W5PH-36Bw=",
        "descripción": "Media porcion de batatas fritas"
    }, 
    {
        "url": "PureDePapasMediaPorcion",
        "id": 14,
        "nombre": "1/2 Pure de papas",
        "precio": 350,
        "categoria": "Drama|Musical|Romance",
        "stock": 1,
        "img": "https://media.istockphoto.com/photos/mashed-potatoes-in-bowl-isolated-on-white-background-picture-id1043524216?k=20&m=1043524216&s=612x612&w=0&h=e-TQDb2YrMPOaCRRIPyUh_pwMktWUkg1x3U4qLpoCvY=",
        "descripción": "Media porcion de pure de papas"
    }, 
    {
        "url": "PureDeCalabazaMediaPorcion",
        "id": 15,
        "nombre": "1/2 Pure de calabaza",
        "precio": 370,
        "categoria": "Guarniciones",
        "stock": 2,
        "img": "https://media.istockphoto.com/photos/pumpkin-and-carrot-soup-with-cream-and-parsley-top-view-picture-id535585200?k=20&m=535585200&s=612x612&w=0&h=_pKFZOsvkTaEDSktSEZXyGgHO3dfvhj4KOCLeBqF0kw=",
        "descripción": "Media porcion de pure de calabaza"
    }, 
    {
        "url": "ParrilladaParaDos",
        "id": 16,
        "promo": 20,
        "nombre": "Parrillada para dos",
        "precio": 3900,
        "categoria": "Parrilla",
        "stock": 7,
        "img": "https://media.istockphoto.com/photos/argentina-barbecue-picture-id471058655?k=20&m=471058655&s=612x612&w=0&h=BnT8UCbJgpzZJBAFKRlQ5EEsslrh-UOemI_AhIRdWsU=",
        "descripción": "Mix de achuras, asado, vacío, chorizo y morcilla. Con guarnición de papas fritas"
    }, 
    {
        "url": "BifeDeChorizo",
        "id": 17,
        "nombre": "Bife de chorizo",
        "precio": 1500,
        "categoria": "Parrilla",
        "stock": 8,
        "img": "https://media.istockphoto.com/photos/sliced-grilled-steak-ribeye-with-herb-butter-picture-id587207508?k=20&m=587207508&s=612x612&w=0&h=P3L-VkPaaOZOQLGXepPvEg5hRNmvaYtmTMGIgK6fghw=",
        "descripción": "Porcion de bife de chorizo"
    }, 
    {
        "url": "BifeDeChorizoMediaPorcion",
        "id": 18,
        "nombre": "1/2 Bife de chorizo",
        "precio": 1200,
        "categoria": "Parrilla",
        "stock": 8,
        "img": "https://media.istockphoto.com/photos/sliced-grilled-steak-ribeye-with-herb-butter-picture-id587207508?k=20&m=587207508&s=612x612&w=0&h=P3L-VkPaaOZOQLGXepPvEg5hRNmvaYtmTMGIgK6fghw=",
        "descripción": "Media porcion de bife de chorizo"
    }, 
    {
        "url": "Asado",
        "id": 19,
        "nombre": "Asado",
        "precio": 1450,
        "categoria": "Parrilla",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/strip-roast-picture-id1227077152?k=20&m=1227077152&s=612x612&w=0&h=owya5OVUY2NVC5DHYInB08ML5CZis1oNtoJHJtTJV6A=",
        "descripción": "Porcion de asado de tira banderita"
    }, 
    {
        "url": "Entraña",
        "id": 20,
        "nombre": "Entraña",
        "precio": 1450,
        "categoria": "Parrilla",
        "stock": 3,
        "img": "https://media.istockphoto.com/photos/entraa-argentina-barbecue-diaphgragm-raw-grill-hot-with-wine-and-picture-id1220120548?k=20&m=1220120548&s=612x612&w=0&h=rsJBBYXv-64ZcmcAklCIQOoBfOfu4lADq0mKv_r_Xpk=",
        "descripción": "Porcion de entraña"
    }, 
    {
        "url": "Bondiola",
        "id": 21,
        "nombre": "Bondiola",
        "precio": 1230,
        "categoria": "Parrilla",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/slow-roasted-st-louis-style-baby-back-pork-ribs-picture-id1221822964?k=20&m=1221822964&s=612x612&w=0&h=A76ywQA1_9TZTTfUg3mVRdwA1ZtPhXWRxNr7H9bBmZk=",
        "descripción": "Porcion de bondiola"
    }, 
    {
        "url": "TablaDeAchuras",
        "id": 22,
        "promo": 10,
        "nombre": "Tabla de achuras",
        "precio": 2300,
        "categoria": "Parrilla",
        "stock": 7,
        "img": "https://media.istockphoto.com/photos/traditional-grilled-argentinian-barbecue-picture-id866371548?k=20&m=866371548&s=612x612&w=0&h=WIa4Hsv7_FB1GeZ1mYSaFhR8_jDgAJ3SPcocmpp7kZ0=",
        "descripción": "Chinchulin, molleja, riñon, chorizo y morcilla"
    }, 
    {
        "url": "PolloGrille",
        "id": 23,
        "nombre": "1/4 Pollo grillé",
        "precio": 920,
        "categoria": "Parrilla",
        "stock": 5,
        "img": "https://media.istockphoto.com/photos/grilled-chicken-fillet-meat-picture-id1223551048?k=20&m=1223551048&s=612x612&w=0&h=XGj2HNXSEQtj3FmWiZYiM7jL3YS4d8aD5HiAypXJ2tM=",
        "descripción": "1/4 pollo grillé"
    }, 
    {
        "url": "Chorizo",
        "id": 24,
        "nombre": "Chorizo",
        "precio": 420,
        "categoria": "Parrilla",
        "stock": 30,
        "img": "https://media.istockphoto.com/photos/chorizo-sausages-with-mustard-picture-id917583610?k=20&m=917583610&s=612x612&w=0&h=nMyEMCnG16Nxu9cN1B3BJfYGPrPCA4Q3LuenD-GVvp0=",
        "descripción": "Chorizo"
    }, 
    {
        "url": "Morcilla",
        "id": 25,
        "nombre": "Morcilla",
        "precio": 350,
        "categoria": "Parrilla",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/spanish-black-pudding-on-flaming-barbecue-grill-picture-id840949508?k=20&m=840949508&s=612x612&w=0&h=-QdA5NzpxvzJWdYJvVDZGh_YXCSXVNdXV_x-xXt4m20=",
        "descripción": "Morcilla"
    }, 
    {
        "url": "Chinchulin",
        "id": 26,
        "nombre": "Chinchulín",
        "precio": 800,
        "categoria": "Parrilla",
        "stock": 6,
        "img": "https://media.istockphoto.com/photos/traditional-grilled-argentinian-barbecue-picture-id866371692?k=20&m=866371692&s=612x612&w=0&h=M3mz99j2u7hlAd4xF2oArBH3TF0uinFVlT_sX7Jqkws=",
        "descripción": "Porcion de chinchulin"
    }, 
    {
        "url": "Molleja",
        "id": 27,
        "promo": 5,
        "nombre": "Molleja",
        "precio": 1800,
        "categoria": "Parrilla",
        "stock": 5,
        "img": "https://media.istockphoto.com/photos/traditional-grilled-argentinian-barbecue-picture-id866371692?k=20&m=866371692&s=612x612&w=0&h=M3mz99j2u7hlAd4xF2oArBH3TF0uinFVlT_sX7Jqkws=",
        "descripción": "https://media.istockphoto.com/photos/traditional-grilled-argentinian-barbecue-picture-id866371692?k=20&m=866371692&s=612x612&w=0&h=M3mz99j2u7hlAd4xF2oArBH3TF0uinFVlT_sX7Jqkws="
    }, 
    {
        "url": "TrioDeÑoquis",
        "id": 28,
        "promo": 10,
        "nombre": "Trío de ñoquis",
        "precio": 1100,
        "categoria": "Pastas",
        "stock": 15,
        "img": "https://media.istockphoto.com/photos/homemade-italian-gnocchi-with-red-sauce-picture-id511095807?k=20&m=511095807&s=612x612&w=0&h=uNwGhggoiVyzgf8VG6uyKEoY530SgWzWl8FYPCQ9cdA=",
        "descripción": "De espinaca, papa y calabaza. Con crema de verdeo, pollo y jamón"
    }, 
    {
        "url": "ÑoquisVerdesGratinados",
        "id": 29,
        "nombre": "Ñoquis verdes gratinados",
        "precio": 1100,
        "categoria": "Pastas",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/gnocchi-with-spinach-and-parmesan-picture-id945594712?k=20&m=945594712&s=612x612&w=0&h=2VHBaVLocYxaVPxHuz9mKl2ghd9PIMLoUGXr2WylO8w=",
        "descripción": "Con salsa 4 quesos, con jamon y champiñones"
    }, 
    {
        "url": "ÑoquisDePapa",
        "id": 30,
        "nombre": "Ñoquis de papa",
        "precio": 800,
        "categoria": "Pastas",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/cheese-gnocchi-with-blue-cheese-sauce-and-galic-picture-id942241014?k=20&m=942241014&s=612x612&w=0&h=zpEUrDJx5oiEWqLw4zlUCKukhMwlPzraTN5HAgRjjaA=",
        "descripción": "Ñoquis de papa con crema"
    }, 
    {
        "url": "RaviolesDeCordero",
        "id": 31,
        "promo": 15,
        "nombre": "Ravioles de cordero",
        "precio": 1400,
        "categoria": "Pastas",
        "stock": 9,
        "img": "https://media.istockphoto.com/photos/homemade-pumpkin-ravioli-with-butter-sauce-picture-id613033942?k=20&m=613033942&s=612x612&w=0&h=tCKJdb2NIuBxgP2WOQ1h1unCL1VHJaUVDaF7tixI3X4=",
        "descripción": "Con crema de hongos secos"
    }, 
    {
        "url": "SorrentinosJamonQueso",
        "id": 32,
        "nombre": "Sorrentinos de jamón y queso",
        "precio": 710,
        "categoria": "Pastas",
        "stock": 2,
        "img": "https://media.istockphoto.com/photos/sorrentinos-with-bolognese-sauce-picture-id1331997115?k=20&m=1331997115&s=612x612&w=0&h=OPrRQ38nbW1X77BV_6JVoHHfdTNQgat_R7K1vm5gnt0=",
        "descripción": "Con salsa bolognesa"
    }, 
    {
        "url": "SorrentinosSalmon",
        "id": 33,
        "promo": 15,
        "nombre": "Sorrentinos de salmon",
        "precio": 1200,
        "categoria": "Pastas",
        "stock": 12,
        "img": "https://media.istockphoto.com/photos/home-sorrentinos-picture-id1134559822?k=20&m=1134559822&s=612x612&w=0&h=CwOzHkdenGSNBrBcll35zXfSDb-R-IvkQbSvUfRgy2c=",
        "descripción": "Con salsa de tomate"
    }, 
    {
        "url": "MilanesaNapolitanaParaDos",
        "id": 34,
        "promo": 25,
        "nombre": "Milanesa Napolitana para dos",
        "precio": 1800,
        "categoria": "Minutas",
        "stock": 5,
        "img": "https://media.istockphoto.com/photos/milanesa-a-la-napolitana-argentina-breaded-beef-cutlet-picture-id1284598634?k=20&m=1284598634&s=612x612&w=0&h=dFnss53JmVhLhEWctURnhL5zhNdFn68y1JvxICFwFi8=",
        "descripción": "De ternera, con salsa de tomate, queso, jamon, acompañada de papas fritas"
    }, 
    {
        "url": "SupremaNapolitanaParaDos",
        "id": 35,
        "promo": 25,
        "nombre": "Suprema Napolitana para dos",
        "precio": 1800,
        "categoria": "Minutas",
        "stock": 4,
        "img": "https://media.istockphoto.com/photos/milanesa-a-la-napolitana-argentina-breaded-beef-cutlet-picture-id1284598634?k=20&m=1284598634&s=612x612&w=0&h=dFnss53JmVhLhEWctURnhL5zhNdFn68y1JvxICFwFi8=",
        "descripción": "De pollo, con salsa de tomate, queso, jamon, acompañada de papas fritas"
    }, 
    {
        "url": "MilanesaNapolitana",
        "id": 36,
        "nombre": "Milanesa Napolitana",
        "precio": 1200,
        "categoria": "Minutas",
        "stock": 9,
        "img": "https://media.istockphoto.com/photos/milanesa-a-la-napolitana-argentina-breaded-beef-cutlet-picture-id1284598634?k=20&m=1284598634&s=612x612&w=0&h=dFnss53JmVhLhEWctURnhL5zhNdFn68y1JvxICFwFi8=",
        "descripción": "De ternera, con salsa de tomate, queso, jamon, acompañada de papas fritas"
    }, 
    {
        "url": "SupremaNapolitana",
        "id": 37,
        "nombre": "Suprema Napolitana",
        "precio": 1200,
        "categoria": "Minutas",
        "stock": 11,
        "img": "https://media.istockphoto.com/photos/milanesa-a-la-napolitana-argentina-breaded-beef-cutlet-picture-id1284598634?k=20&m=1284598634&s=612x612&w=0&h=dFnss53JmVhLhEWctURnhL5zhNdFn68y1JvxICFwFi8=",
        "descripción": "De pollo, con salsa de tomate, queso, jamon, acompañada de papas fritas"
    }, 
    {
        "url": "MilanesaCompleta",
        "id": 38,
        "nombre": "Milanesa Completa",
        "precio": 1350,
        "categoria": "Minutas",
        "stock": 7,
        "img": "https://media.istockphoto.com/photos/milanesa-argentina-argentinian-schnitzel-picture-id1262349249?k=20&m=1262349249&s=612x612&w=0&h=CW29j31Y76Ts81B5ABdlgQQFKg6YuceEKGNrIq3lM3c=",
        "descripción": "Con huevos fritos, acompañada de papas fritas"
    }, 
    {
        "url": "MilanesaDeTernera",
        "id": 39,
        "nombre": "Milanesa de ternera",
        "precio": 1000,
        "categoria": "Minutas",
        "stock": 9,
        "img": "https://media.istockphoto.com/photos/fried-veal-cutlet-milanese-with-lemon-and-french-fries-closeup-on-a-picture-id1057832648?k=20&m=1057832648&s=612x612&w=0&h=jQ3GU9pMviLSa6W584NFljUPb6F6O79QbGXP7jRouVw=",
        "descripción": "Con papas fritas"
    }, 
    {
        "url": "SupremaPollo",
        "id": 40,
        "nombre": "Suprema de pollo",
        "precio": 1000,
        "categoria": "Minutas",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/fried-veal-cutlet-milanese-with-lemon-and-french-fries-closeup-on-a-picture-id1057832648?k=20&m=1057832648&s=612x612&w=0&h=jQ3GU9pMviLSa6W584NFljUPb6F6O79QbGXP7jRouVw=",
        "descripción": "Con papas fritas"
    }, 
    {
        "url": "FiletMerluza",
        "id": 41,
        "nombre": "Filet de merluza romana",
        "precio": 1200,
        "categoria": "Minutas",
        "stock": 5,
        "img": "https://media.istockphoto.com/photos/fish-and-chips-picture-id950368628?k=20&m=950368628&s=612x612&w=0&h=gC1BpsDLUozcxoAqPnGkdD30ekCLlQHnrka2FTif8aQ=",
        "descripción": "Filet de merluza con papas fritas"
    }, 
    {
        "url": "FlanCasero",
        "id": 42,
        "nombre": "Flan casero",
        "precio": 560,
        "categoria": "Postres",
        "stock": 2,
        "img": "https://media.istockphoto.com/photos/pudding-picture-id491517146?k=20&m=491517146&s=612x612&w=0&h=8q7wi0eWNWUzicAdtuxtRYHrxjyJ4JDI5LpB3BsYuDc=",
        "descripción": "Flan casero individual"
    }, 
    {
        "url": "VigilanteMembrillo",
        "id": 43,
        "nombre": "Vigilante de membrillo",
        "precio": 500,
        "categoria": "Postres",
        "stock": 4,
        "img": "https://media.istockphoto.com/photos/guava-candy-with-cheese-from-minas-goiabada-with-cheese-brazilian-picture-id1286773086?k=20&m=1286773086&s=612x612&w=0&h=VJb3-Nva4gHmJaZMaAriYsDbmziB43BakY_Crs5UM08=",
        "descripción": "Queso con dulce de membrillo"
    }, 
    {
        "url": "VigilanteBatata",
        "id": 44,
        "nombre": "Vigilante de batata",
        "precio": 500,
        "categoria": "Postres",
        "stock": 3,
        "img": "https://media.istockphoto.com/photos/cheese-with-jelly-quince-on-tray-picture-id1176097742?k=20&m=1176097742&s=612x612&w=0&h=5opNToNpWlAb8lXV3ItyJqonHEfl85OEHtPBCcjgYV0=",
        "descripción": "Queso con dulce de batata"
    }, 
    {
        "url": "Brownie",
        "id": 45,
        "nombre": "Brownie",
        "precio": 600,
        "categoria": "Postres",
        "stock": 6,
        "img": "https://media.istockphoto.com/photos/homemade-chocolate-brownies-on-a-white-plate-on-a-white-wooden-side-picture-id1167515863?k=20&m=1167515863&s=612x612&w=0&h=Ffwv6DnvTaBzE0-_Y9juFtS8XCm0sk_1jLva_OKCHoA=",
        "descripción": "Con nuez"
    }, 
    {
        "url": "EnsaladaFrutas",
        "id": 46,
        "nombre": "Ensalada de frutas",
        "precio": 550,
        "categoria": "Postres",
        "stock": 6,
        "img": "https://media.istockphoto.com/photos/heallthy-organic-fruit-salad-picture-id511622035?k=20&m=511622035&s=612x612&w=0&h=orK-ebrO0n1zb-U4UwOVlJ2i0vK0zso7ueK3jr08U9U=",
        "descripción": "Mix de frutas"
    }, 
    {
        "url": "PanquequeDulceDeLeche",
        "id": 47,
        "nombre": "Panqueque de dulce de leche",
        "precio": 900,
        "categoria": "Postres",
        "stock": 10,
        "img": "https://media.istockphoto.com/photos/french-crepes-with-caramel-fudge-on-a-spoon-over-picture-id171338296?k=20&m=171338296&s=612x612&w=0&h=szcH_f1jEUsUJQyKQvmNd83KP0B7AZySaz-LDg-hfxc=",
        "descripción": "Panqueque de dulce de leche"
    }, 
    {
        "url": "Tiramisu",
        "id": 48,
        "nombre": "Tiramisu",
        "precio": 750,
        "categoria": "Postres",
        "stock": 12,
        "img": "https://media.istockphoto.com/photos/tiramisu-cake-with-mint-picture-id1248489319?k=20&m=1248489319&s=612x612&w=0&h=iOdWze_FjhSrIUfUIFCL0FhkwPwiCrp9HLsb7PzLsrQ=",
        "descripción": "Tiramisu"
    }, 
    {
        "url": "AguaSinGas",
        "id": 49,
        "nombre": "Agua sin gas 500cc",
        "precio": 350,
        "categoria": "Bebidas",
        "stock": 20,
        "img": "https://media.istockphoto.com/photos/water-in-plastic-bottle-on-isolated-white-background-picture-id1032678242?k=20&m=1032678242&s=612x612&w=0&h=vLA28o-y7YfP6ZlIKUQkWMzwyUEawX18it_UjkiflWo=",
        "descripción": "Agua sin gas 500cc"
    }, 
    {
        "url": "AguaConGas",
        "id": 50,
        "nombre": "Agua con gas 500cc",
        "precio": 350,
        "categoria": "Bebidas",
        "stock": 20,
        "img": "https://media.istockphoto.com/photos/water-in-plastic-bottle-on-isolated-white-background-picture-id1032678242?k=20&m=1032678242&s=612x612&w=0&h=vLA28o-y7YfP6ZlIKUQkWMzwyUEawX18it_UjkiflWo=",
        "descripción": "Agua con gas 500cc"
    }, 
    {
        "url": "CocaCola",
        "id": 51,
        "nombre": "Coca Cola 500cc",
        "precio": 370,
        "categoria": "Bebidas",
        "stock": 15,
        "img": "https://media.istockphoto.com/photos/simple-bottle-of-cola-with-red-cap-on-white-background-picture-id147913101?k=20&m=147913101&s=612x612&w=0&h=ikyqKbguas-dMM_rHTs90iSbo41W5-uoL2_gx9BRlS4=",
        "descripción": "Coca cola 500cc"
    }, 
    {
        "url": "CocaColaZero",
        "id": 52,
        "nombre": "Coca Cola Zero 500cc",
        "precio": 370,
        "categoria": "Bebidas",
        "stock": 9,
        "img": "https://media.istockphoto.com/photos/simple-bottle-of-cola-with-red-cap-on-white-background-picture-id147913101?k=20&m=147913101&s=612x612&w=0&h=ikyqKbguas-dMM_rHTs90iSbo41W5-uoL2_gx9BRlS4=",
        "descripción": "Coca Cola Zero azucares 500cc"
    }, 
    {
        "url": "Fanta",
        "id": 53,
        "nombre": "Fanta 500cc",
        "precio": 370,
        "categoria": "Bebidas",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/orange-carbonated-soft-drink-in-glass-bottle-isolated-picture-id1157815003?k=20&m=1157815003&s=612x612&w=0&h=3EubPxptz5BjOzM2MgXKxLnxOZjPXwZGPlHNd7HrcuM=",
        "descripción": "Fanta 500cc"
    }, 
    {
        "url": "Sprite",
        "id": 54,
        "nombre": "Sprite 500cc",
        "precio": 370,
        "categoria": "Bebidas",
        "stock": 8,
        "img": "https://media.istockphoto.com/photos/bottle-of-soda-with-straw-picture-id137072174?k=20&m=137072174&s=612x612&w=0&h=5mQeUaqRKhYggI5kLX86ZWw5cFT1hm2YaFLos-pGT1w=",
        "descripción": "Sprite 500cc"
    }, 
    {
        "url": "Corona",
        "id": 55,
        "promo": 10,
        "nombre": "Cerveza Corona 330cc",
        "precio": 750,
        "categoria": "Bebidas",
        "stock": 4,
        "img": "https://media.istockphoto.com/photos/pint-picture-id1164593695?k=20&m=1164593695&s=612x612&w=0&h=9HDjoyQM2UFVQFPGEB8lwDhchSJ9kOGUz0_RxmsL-QI=",
        "descripción": "Cerveza rubia Corona 330cc"
    }, 
    {
        "url": "StellaArtois",
        "id": 56,
        "nombre": "Cerveza Stella Artois Lata 473ml",
        "precio": 600,
        "categoria": "Bebidas",
        "stock": 5,
        "img": "https://media.istockphoto.com/photos/beer-can-isolated-on-white-background-picture-id638577576?k=20&m=638577576&s=612x612&w=0&h=SCiA_RzvUYl_MBTHvyb77caZu4v9qvmHLUtFYXkWoeg=",
        "descripción": "Cerveza rubia Stella Artois Lata 473ml"
    }, 
    {
        "url": "Heineken",
        "id": 57,
        "nombre": "Cerveza Heineken Lata 473ml",
        "precio": 600,
        "categoria": "Bebidas",
        "stock": 7,
        "img": "https://media.istockphoto.com/photos/beer-can-isolated-on-white-background-picture-id638577576?k=20&m=638577576&s=612x612&w=0&h=SCiA_RzvUYl_MBTHvyb77caZu4v9qvmHLUtFYXkWoeg=",
        "descripción": "Cerveza rubia Heineken Lata 473ml"
    }, 
    {
        "url": "Imperial",
        "id": 58,
        "nombre": "Cerveza Imperial Lata 473ml",
        "precio": 500,
        "categoria": "Bebidas",
        "stock": 7,
        "img": "https://media.istockphoto.com/photos/beer-can-isolated-on-white-background-picture-id638577576?k=20&m=638577576&s=612x612&w=0&h=SCiA_RzvUYl_MBTHvyb77caZu4v9qvmHLUtFYXkWoeg=",
        "descripción": "Cerveza rubia Imperial Lata 473ml"
    }, 
    {
        "url": "NortonCosechaTardia",
        "id": 59,
        "nombre": "Norton Cosecha Tardia 750cc",
        "precio": 1100,
        "categoria": "Bebidas",
        "stock": 10,
        "img": "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q=",
        "descripción": "Vino blanco dulce"
    }, 
    {
        "url": "AlmaMora",
        "id": 60,
        "promo": 5,
        "nombre": "Alma Mora Malbec",
        "precio": 1200,
        "categoria": "Bebidas",
        "stock": 15,
        "img": "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q=",
        "descripción": "Vino tinto"
    }, 
    {
        "url": "Latitud33",
        "id": 61,
        "nombre": "Latitud 33 cabernet sauvignon",
        "precio": 1150,
        "categoria": "Bebidas",
        "stock": 8,
        "img": "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q=",
        "descripción": "Vino tinto"
    }, 
    {
        "url": "TrapicheAlaris",
        "id": 62,
        "nombre": "Trapiche Alaris dulce cosecha",
        "precio": 900,
        "categoria": "Bebidas",
        "stock": 14,
        "img": "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q=",
        "descripción": "Vino blanco dulce"
    }, 
    {
        "url": "Valmont",
        "id": 63,
        "nombre": "Valmont clasico tinto",
        "precio": 870,
        "categoria": "Bebidas",
        "stock": 2,
        "img": "https://media.istockphoto.com/photos/red-wine-with-property-release-picture-id157405246?k=20&m=157405246&s=612x612&w=0&h=6ZpdTaBPuDJajqXvYAyFDzu588NW7sP-ev8kI1p9p6Q=",
        "descripción": "Vino tinto"
    }
    ]
    export default dataProducts