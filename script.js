<script>

  const popup = document.getElementById("popup");

  function showPopup(){
    popup.style.display = "flex";
  }

  function closePopup(){
    popup.style.display = "none";
  }

  // Mbyll popup kur klikon jashtë
  popup.addEventListener("click", function(e){
    if(e.target === popup){
      closePopup();
    }
  });

  // Forma e kontaktit
  document.getElementById("contactForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mesazhi u dërgua me sukses!");

    this.reset();

  });

  // Forma e biletës
  document.getElementById("ticketForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    alert("Bileta u rezervua me sukses 🎉");

    closePopup();

    this.reset();

  });

</script>