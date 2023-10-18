
    function renderBanner(m) {
        let container = document.getElementById("container")
        container.innerHTML += `
    <div class="principal">

    <div class="lulu">
        <div class="interior">

    <div class="titulolulu">
    <h1> <strong> ${m.titulo}</strong> </h1> 
    <h5> ${m.rating}</h5>
</div>



<div class="contenido">
    <p> ${m.descripcion1} </p> &nbsp;
    <p> ${m.descripcion2} </p>
</div>



<div class="btn">
   <button class="botoncitoplay"> <img src="./iconos/baseline_play_arrow_white_48dp.png" class="play"> <strong> Play </strong></button>
    <button class="botoncitosave"> <strong> Save </strong><img src="./iconos/baseline_bookmark_border_white_48dp.png" class="save"> </button>
    <h4> ${m.edad}</h4> 
</div>

</div>
        </div>

        
    </div>

`
}

renderBanner(movies)