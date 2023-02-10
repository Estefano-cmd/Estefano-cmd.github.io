var modalInfo = {
    1: {
      title: "Santa Cruz Social Cultural",
      info: `<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./assets/RSU/1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/RSU/2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/RSU/3.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`,
      link: "#",
      github: "https://github.com/Estefano-cmd/ser-frontend"
    },
    2: {
      title: "Web JETS",
      info: `<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./assets/Jets/1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Jets/2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Jets/3.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Jets/4.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Jets/5.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`,
      link: "#",
      github: "https://www.utepsa.edu/jets/"
    },
    3: {
      title: "Web RopaClean",
      info: `<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./assets/Ropaclean/1.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Ropaclean/2.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Ropaclean/3.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Ropaclean/4.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./assets/Ropaclean/5.jpeg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`,
      link: "#",
      github: "https://github.com/Estefano-cmd/RopaClean"
    },
    4: {
      title: "App Adulto Mayor",
      info: `<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./assets/adulto mayor/1.jpeg" class="d-block w-50" alt="..." style="height: 300px; margin-left: 25%;">
        </div>
        <div class="carousel-item">
          <img src="./assets/adulto mayor/2.jpeg" class="d-block w-50" alt="..." style="height: 300px; margin-left: 25%;">
        </div>
        <div class="carousel-item">
          <img src="./assets/adulto mayor/3.jpeg" class="d-block w-50" alt="..." style="height: 300px; margin-left: 25%;">
        </div>
        <div class="carousel-item">
          <img src="./assets/adulto mayor/4.jpeg" class="d-block w-50" alt="..." style="height: 300px; margin-left: 25%;">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`,
      link: "#",
      github: "https://github.com/Estefano-cmd/Adulto_Mayor"
    }
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }