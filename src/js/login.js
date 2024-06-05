document.getElementById('login-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('input-email').value;
    var senha = document.getElementById('input-senha').value;

    
    var emailCorreto = "usuario@gmail.com";
    var senhaCorreta = "senha123";

    if (email === emailCorreto && senha === senhaCorreta) {
        alert("Login aprovado");
    } else {
        alert("Email ou senha incorretos.");
    }
});