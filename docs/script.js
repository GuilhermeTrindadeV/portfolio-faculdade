document.addEventListener("DOMContentLoaded", function () {
  // Só aplica o efeito se o h1 for exatamente "Meu Portfólio"
    const titulo = document.querySelector("header h1");
    const textoOriginal = titulo?.textContent.trim();

    if (textoOriginal === "Meu Portfólio") {
        const texto = "Meu Portfólio";
        let i = 0;
        titulo.textContent = "";

    function digitar() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, 150);
        }
        }

        digitar();
    }

  // Mensagem de boas-vindas (só 1 vez)
    if (!localStorage.getItem("visitou")) {
        setTimeout(() => {
        alert("Bem-vindo ao meu portfólio pessoal!");
        localStorage.setItem("visitou", true);
        }, 800);
    }
});
