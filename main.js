document.addEventListener("DOMContentLoaded", function() {

    const card_anime = document.querySelector(".card_anime");
    const card_musica = document.querySelector(".card_musica");
    const card_series = document.querySelector(".card_series");

    const content_musica = document.getElementById("content_musica");
    const content_anime = document.getElementById("content_anime");
    const content_series = document.getElementById("content_series");
    

    card_anime.addEventListener('mouseover',() => {
        card_musica.classList.add("card_mini");
        card_series.classList.add("card_mini");
        card_anime.classList.add("card_hover");
        content_anime.classList.remove("hidden");
    })

    card_anime.addEventListener('mouseleave', () =>{
        card_anime.classList.remove("card_hover")
        card_musica.classList.remove("card_mini");
        card_series.classList.remove("card_mini");
        content_anime.classList.add("hidden");
    })

    card_musica.addEventListener('mouseover', () => {
        card_musica.classList.add("card_hover");
        card_series.classList.add("card_mini");
        card_anime.classList.add("card_mini");
        content_musica.classList.remove("hidden");
    })

    card_musica.addEventListener('mouseleave', () =>{
        card_anime.classList.remove("card_mini")
        card_musica.classList.remove("card_hover");
        card_series.classList.remove("card_mini");
        content_musica.classList.add("hidden");
    })

    card_series.addEventListener('mouseover', () => {
        card_anime.classList.add("card_mini");
        card_musica.classList.add("card_mini");
        card_series.classList.add("card_hover");
        content_series.classList.remove("hidden");
    })

    card_series.addEventListener('mouseleave', () =>{
        card_anime.classList.remove("card_mini")
        card_musica.classList.remove("card_mini");
        card_series.classList.remove("card_hover");
        content_series.classList.add("hidden");
    })

  });