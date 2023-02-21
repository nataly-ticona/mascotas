let contenedorProductos = document.getElementById("productos");
        let producto = [
            ['./upload/productos/1.jpg','perfil_producto','Comida liquida para perro',3.4],
            ['./upload/productos/2.jpg','perfil_producto','Plato de comida para perro',3.5],
            ['./upload/productos/3.jpg','perfil_producto','Plato de comida para perro nervioso',3.6],
            ['./upload/productos/4.jpg','perfil_producto','Cepillo para perro',3.7],
            ['./upload/productos/5.jpg','perfil_producto','Silla de ruedas para perro',3.8],
            ['./upload/productos/6.jpg','perfil_producto','Jarabe para para perro',3.9],
            ['./upload/productos/7.jpg','perfil_producto','Dulces de cacahuete para perro',3.4],
            ['./upload/productos/8.jpg','perfil_producto','Barritas dentales para perro',3.5],
            ['./upload/productos/9.jpg','perfil_producto','Limpiador de oidos para perro',3.6],
            ['./upload/productos/10.jpg','perfil_producto','Limpiador de oidos para perro',3.6],
            ['./upload/productos/11.jpg','perfil_producto','Cepillos dentales + pasta dental  para perro',3.6],
            ['./upload/productos/12.jpg','perfil_producto','Bolsitas para perro',3.6],
            ['./upload/productos/13.jpg','perfil_producto','Pañales para perro',3.6],
            ['./upload/productos/14.jpg','perfil_producto','Suplementos para perros mayores',3.6],
            ['./upload/productos/15.jpg','perfil_producto','Chaqueta para perro',3.6],
            ['./upload/productos/16.jpg','perfil_producto','Chaqueta para perro',3.6],
            ['./upload/productos/17.jpg','perfil_producto','Bolsa transporte para perro',3.6],
            ['./upload/productos/18.jpg','perfil_producto','Funda de coche para perro',3.6],
            ['./upload/productos/19.jpg','perfil_producto','Collar para perro',3.6],
            ['./upload/productos/1.jpg','perfil_producto','Comida liquida para perro',3.4],
            ['./upload/productos/2.jpg','perfil_producto','Plato de comida para perro',3.5],
            ['./upload/productos/3.jpg','perfil_producto','Plato de comida para perro nervioso',3.6],
            ['./upload/productos/4.jpg','perfil_producto','Cepillo para perro',3.7],
            ['./upload/productos/5.jpg','perfil_producto','Silla de ruedas para perro',3.8],
            ['./upload/productos/6.jpg','perfil_producto','Jarabe para para perro',3.9],
            ['./upload/productos/7.jpg','perfil_producto','Dulces de cacahuete para perro',3.4],
            ['./upload/productos/8.jpg','perfil_producto','Barritas dentales para perro',3.5],
            ['./upload/productos/9.jpg','perfil_producto','Limpiador de oidos para perro',3.6],
            ['./upload/productos/10.jpg','perfil_producto','Limpiador de oidos para perro',3.6],
            ['./upload/productos/11.jpg','perfil_producto','Cepillos dentales + pasta dental  para perro',3.6],
            ['./upload/productos/12.jpg','perfil_producto','Bolsitas para perro',3.6],
            ['./upload/productos/13.jpg','perfil_producto','Pañales para perro',3.6],
            ['./upload/productos/14.jpg','perfil_producto','Suplementos para perros mayores',3.6],
            ['./upload/productos/15.jpg','perfil_producto','Chaqueta para perro',3.6],
            ['./upload/productos/16.jpg','perfil_producto','Chaqueta para perro',3.6],
            ['./upload/productos/17.jpg','perfil_producto','Bolsa transporte para perro',3.6],
            ['./upload/productos/18.jpg','perfil_producto','Funda de coche para perro',3.6],
            ['./upload/productos/19.jpg','perfil_producto','Collar para perro',3.6],
            ['./upload/productos/1.jpg','perfil_producto','Comida liquida para perro',3.4],
            ['./upload/productos/2.jpg','perfil_producto','Plato de comida para perro',3.5],
            ['./upload/productos/3.jpg','perfil_producto','Plato de comida para perro nervioso',3.6],
            ['./upload/productos/4.jpg','perfil_producto','Cepillo para perro',3.7],
            ['./upload/productos/5.jpg','perfil_producto','Silla de ruedas para perro',3.8],
            ['./upload/productos/6.jpg','perfil_producto','Jarabe para para perro',3.9],
            ['./upload/productos/7.jpg','perfil_producto','Dulces de cacahuete para perro',3.4],
            ['./upload/productos/8.jpg','perfil_producto','Barritas dentales para perro',3.5],
            ['./upload/productos/9.jpg','perfil_producto','Limpiador de oidos para perro',3.6],
            ['./upload/productos/10.jpg','perfil_producto','Limpiador de oidos para perro',3.6],
            ['./upload/productos/11.jpg','perfil_producto','Cepillos dentales + pasta dental  para perro',3.6],
            ['./upload/productos/12.jpg','perfil_producto','Bolsitas para perro',3.6],
            ['./upload/productos/13.jpg','perfil_producto','Pañales para perro',3.6],
            ['./upload/productos/14.jpg','perfil_producto','Suplementos para perros mayores',3.6],
            ['./upload/productos/15.jpg','perfil_producto','Chaqueta para perro',3.6],
            ['./upload/productos/16.jpg','perfil_producto','Chaqueta para perro',3.6],
            ['./upload/productos/17.jpg','perfil_producto','Bolsa transporte para perro',3.6],
            ['./upload/productos/18.jpg','perfil_producto','Funda de coche para perro',3.6],
            ['./upload/productos/19.jpg','perfil_producto','Collar para perro',3.6],
        ]

        let contenido;
        for (let i = 0; i < producto.length; i++) {
            contenido="";
            for (let j = 0; j < producto[i].length; j++) {
                contenido=
            `<div class="producto-especifico">
                <a href='./${producto[i][1]}.html' >     
                    <img src="${producto[i][0]}" alt="${producto[i][1]}">
                </a>     
                <p>${producto[i][2]}</p>  
                <p>€${producto[i][3]}</p>
              </div>`;   
            }
            contenedorProductos.innerHTML+=contenido;
        }
        contenedorProductos.innerHTML+="<br>";
        