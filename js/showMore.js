const showMore = document.querySelectorAll(".show-more");
const cardContent = document.querySelectorAll(".card-content");


const showMoreText = () => {
  const paragraph = document.createElement("p");
  paragraph.classList.add("card-text");
  
  for (let i = 0; i < showMore.length; i++){
    showMore[i].addEventListener("click", () => {
     showMore[i].classList.toggle("active");
      if(showMore[i].classList.contains("2") && showMore[i].classList.contains("active")) {
        paragraph.innerHTML = `Este proyecto basico, pero efectivo de calculadora.
                Al igual que el proyecto anterior todo fue con las ya mencionadas tecnologias totalmente vanilla.
                Fue interesante realizarlo ya que tuve que pensar en la logica de la calculadora para
                hacerla funcionar de manera correcta. Y siento que a pesar de ser algo basico me puso
                a pensar bastante, y eso es lo que mas me gusto.
                <br>
                <a class="link-project" href="https://cal-cula-dora.netlify.app/" target="_blank">Ver proyecto</a>`
                
                
                cardContent[i].appendChild(paragraph);  
                
      }else if(showMore[i].classList.contains("1") && showMore[i].classList.contains("active")) {
                paragraph.innerHTML = `Lava-Dora es una landing page para un negocio de lavadoras.
                Este proyecto fue realizado con HTML, CSS y JavaScript puro.
                A pesar de que no es un proyecto real, me gusto mucho hacerlo.
                Y me gusto mucho el resultado final, ya que pude aplicar
                los conocimientos adquiridos de HTML, CSS y JavaScript del momento.
                <br>
                <a class="link-project" href="https://lava-dora.netlify.app/" target="_blank">Ver proyecto</a>`
                
                cardContent[i].appendChild(paragraph);
      }else if(showMore[i].classList.contains("3") && showMore[i].classList.contains("active")) {
        paragraph.innerHTML = `To-do list es una lista de tareas que puedes agregar, eliminar y marcar como completadas.
                A pesar de que se puede apreciar las siglas POO, siento que no fue muy inteligente de mi parte
                hacerlo de esta manera, ya que en su momento, al ser uno de los primero proyectos de practica que hice,
                no me daba cuenta de que podía hacerlo de una manera mas eficiente, y termine usando algo que, recalcando que fue algo
                que recien habia aprendido, y que no era el proyecto para aplicar esos conocimientos de manera correcta, termino
                siendo un poco estresante y confuso, pero he aprendido sobre eso, y ahora tengo mas claro que porque algo se pueda hacer
                de una manera, no quiere decir que sea la manera correcta.
                <br>
                <a class="link-project" href="https://samumeza-to-do.netlify.app/" target="_blank">Ver proyecto</a>`
                
                cardContent[i].appendChild(paragraph);
      }else{
        paragraph.remove();
      }       
    });
  }
}

showMoreText();