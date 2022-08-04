const dataPizzas = [
    {
        "id": 1,
        "nombre": "Karena Arnson",
        "price": 1733,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 15
    }, 
    {
        "id": 2,
        "nombre": "Nataline Warrior",
        "price": 846,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 12
    }, 
    {
        "id": 3,
        "nombre": "Pauli Shipton",
        "price": 1851,
        "img": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "stock": 1
    }, 
    {
        "id": 4,
        "nombre": "Sergio Roderham",
        "price": 1800,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 15
    }, 
    {
        "id": 5,
        "nombre": "Augie Klimkov",
        "price": 1688,
        "img": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "stock": 14
    }, 
    {
        "id": 6,
        "nombre": "Binnie Heaselgrave",
        "price": 1682,
        "img": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "stock": 4
    }, 
    {
        "id": 7,
        "nombre": "Chrystal Flynn",
        "price": 1542,
        "img": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "stock": 4
    }, 
    {
        "id": 8,
        "nombre": "Thea Van Arsdall",
        "price": 988,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 5
    }, 
    {
        "id": 9,
        "nombre": "Alexandra Doonican",
        "price": 1922,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 15
    }, 
    {
        "id": 10,
        "nombre": "Domenico Happer",
        "price": 1994,
        "img": "http://dummyimage.com/200x200.png/ff4444/ffffff",
        "stock": 9
    }, 
    {
        "id": 11,
        "nombre": "Desdemona Wiles",
        "price": 1029,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 13
    }, 
    {
        "id": 12,
        "nombre": "Chloris Inker",
        "price": 1974,
        "img": "http://dummyimage.com/200x200.png/5fa2dd/ffffff",
        "stock": 5
    }, 
    {
        "id": 13,
        "nombre": "Giavani Veck",
        "price": 1244,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 4
    }, 
    {
        "id": 14,
        "nombre": "Guthry Ciccotto",
        "price": 1719,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 12
    }, 
    {
        "id": 15,
        "nombre": "Mariam Oleszkiewicz",
        "price": 1842,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 14
    }, 
    {
        "id": 16,
        "nombre": "Jasmin Rupke",
        "price": 1082,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 14
    }, 
    {
        "id": 17,
        "nombre": "Roldan Dreye",
        "price": 1209,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 2
    }, 
    {
        "id": 18,
        "nombre": "Aidan Hiddersley",
        "price": 1372,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 1
    }, 
    {
        "id": 19,
        "nombre": "Luci Arrigo",
        "price": 1526,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 10
    }, 
    {
        "id": 20,
        "nombre": "Alina Farnall",
        "price": 1173,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 13
    }, 
    {
        "id": 21,
        "nombre": "Immanuel Joules",
        "price": 1219,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 5
    }, 
    {
        "id": 22,
        "nombre": "Hollie Tesimon",
        "price": 1815,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 6
    }, 
    {
        "id": 23,
        "nombre": "Faustine Riddock",
        "price": 1324,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 14
    }, 
    {
        "id": 24,
        "nombre": "Tedda Champneys",
        "price": 1481,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 11
    }, 
    {
        "id": 25,
        "nombre": "Wilmette McGrale",
        "price": 1956,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 11
    }, 
    {
        "id": 26,
        "nombre": "Nettle Vallerine",
        "price": 1688,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 4
    }, 
    {
        "id": 27,
        "nombre": "Derk Dixey",
        "price": 1136,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 8
    }, 
    {
        "id": 28,
        "nombre": "Drucill Thying",
        "price": 1209,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 9
    }, 
    {
        "id": 29,
        "nombre": "Sherwood Oxbie",
        "price": 1341,
        "img": "http://dummyimage.com/200x200.png/cc0000/ffffff",
        "stock": 9
    }, 
    {
        "id": 30,
        "nombre": "Demetrius Gaylord",
        "price": 1785,
        "img": "http://dummyimage.com/200x200.png/dddddd/000000",
        "stock": 11
    }
]
export default dataPizzas