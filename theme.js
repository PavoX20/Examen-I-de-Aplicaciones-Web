let main=document.querySelector("#main");


function changeTheme(num) {
            switch (num) {
                case 1:
                    window.main.style.backgroundImage="url('imagenes/img/fondo1.jpeg')";
                    break;
                case 2:
                    window.main.style.backgroundImage="url('imagenes/img/fondo2.jpg')";
                    break;
                case 3:
                    window.main.style.backgroundImage="url('imagenes/img/fondo3.jpg')";
                    break;
            };
        }



