window.addEventListener('load', () =>{
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------VALIDACIONES DEL FORMULARIO -------//    
    
    form.title.focus();

        const $ = (id) => document.getElementById(id);

        $('title').addEventListener('blur', () => {
            if(!$('title').value.trim()){
                $('title').classList.add('is-invalid')
                $('error-title').innerHTML = 'El campo titulo no puede estar vacío'
            }else{
                $('title').classList.remove('is-invalid')
                $('title').classList.add('is-valid')
                $('error-title').innerHTML = null
                form.rating.focus()
            }
        })

        $('rating').addEventListener('blur', () => {
       
            switch (true) {
                case !$('rating').value.trim():
                    $('rating').classList.add('is-invalid')    
                    $('error-rating').innerHTML = 'El campo calificación no puede estar vacío'
                    break;
                case $('rating').value.trim() < 0 || $('rating').value.trim() > 10.0 :
                    $('rating').classList.add('is-invalid')    
                    $('error-rating').innerText = 'El campo calificación no puede ser menor a cero ni mayor a 10'
                    break;
                default:
                    $('rating').classList.remove('is-invalid')
                    $('rating').classList.add('is-valid')
                    $('error-rating').innerText = null
                    form.awards.focus();
                    break;
            }
        })

        $('awards').addEventListener('blur', () => {
       
            switch (true) {
                case !$('awards').value.trim():
                    $('awards').classList.add('is-invalid')    
                    $('error-awards').innerHTML = 'El campo premios no puede estar vacío'
                    break;
                case $('awards').value.trim() < 0 || $('awards').value.trim() > 10 :
                    $('awards').classList.add('is-invalid')    
                    $('error-awards').innerText = 'El campo premios no puede ser menor a cero ni mayor a 10'
                    break;
                default:
                    $('awards').classList.remove('is-invalid')
                    $('awards').classList.add('is-valid')
                    $('error-awards').innerText = null
                    form.release_date.focus();
                    break;
            }
        })

        $('release_date').addEventListener('blur', () => {
            if(!$('release_date').value.trim()){
                $('release_date').classList.add('is-invalid')
                $('error-release_date').innerHTML = 'El campo fecha de creación no puede estar vacío'
            }else{
                $('release_date').classList.remove('is-invalid')
                $('release_date').classList.add('is-valid')
                $('error-release_date').innerHTML = null
                form.length.focus()
            }
        })
    
        $('length').addEventListener('blur', () => {
       
            switch (true) {
                case !$('length').value.trim():
                    $('length').classList.add('is-invalid')    
                    $('error-length').innerHTML = 'El campo duración no puede estar vacío'
                    break;
                case $('length').value.trim() < 60 || $('length').value.trim() > 360 :
                    $('length').classList.add('is-invalid')    
                    $('error-length').innerText = 'El campo duración no puede ser menor a 60 ni mayor a 360 minutos'
                    break;
                default:
                    $('length').classList.remove('is-invalid')
                    $('length').classList.add('is-valid')
                    $('error-length').innerText = null
                    form.genre_id.focus();
                    break;
            }
        })

        $('genre_id').addEventListener('blur', () => {
            if(!$('genre_id').value.trim()){
                $('genre_id').classList.add('is-invalid')
                $('error-genre_id').innerHTML = 'El campo género no puede estar vacío'
            }else{
                $('genre_id').classList.remove('is-invalid')
                $('genre_id').classList.add('is-valid')
                $('error-genre_id').innerHTML = null
            }
        })

        

      $('form').addEventListener('submit', e => {
        e.preventDefault();
    
        let elemnetosForm = $('form').elements;
        let error = false;
    
        for (let i = 0; i < elemnetosForm.length - 1; i++) {
            
            if(!elemnetosForm[i].value){
                elemnetosForm[i].classList.add('is-invalid')
                $('errores').innerHTML = 'Los campos señalados son obligatorios';
                $('errores').classList.add('alert-warning');
                error = true
            }
        }
    
        if(!error){
            $('form').submit()
            alert('La película se guardó satisfactoriamente')
        }
       
    })
})
