let contenedorProductos = document.getElementById("productos");
        let producto = [
            ['./upload/productos/1.jpg','muletras_para_perro','Muletas para perro',3.4],
            ['./upload/productos/2.jpg','muletras_para_perro','Muletas para perro',3.5],
            ['./upload/productos/3.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/4.jpg','muletras_para_perro','Muletas para perro',3.7],
            ['./upload/productos/5.jpg','muletras_para_perro','Muletas para perro',3.8],
            ['./upload/productos/6.jpg','muletras_para_perro','Muletas para perro',3.9],
            ['./upload/productos/7.jpg','muletras_para_perro','Muletas para perro',3.4],
            ['./upload/productos/8.jpg','muletras_para_perro','Muletas para perro',3.5],
            ['./upload/productos/9.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/10.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/11.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/12.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/13.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/14.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/15.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/16.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/17.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/18.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/productos/19.jpg','muletras_para_perro','Muletas para perro',3.6],
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
        