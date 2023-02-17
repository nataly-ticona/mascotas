let contenedorProductos = document.getElementById("productos");
        let producto = [
            ['./upload/perro.jpg','muletras_para_perro','Muletas para perro',3.4],
            ['./upload/perro.jpg','muletras_para_perro','Muletas para perro',3.5],
            ['./upload/perro.jpg','muletras_para_perro','Muletas para perro',3.6],
            ['./upload/perro.jpg','muletras_para_perro','Muletas para perro',3.7],
            ['./upload/perro.jpg','muletras_para_perro','Muletas para perro',3.8],
            ['./upload/perro.jpg','muletras_para_perro','Muletas para perro',3.9],
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
        