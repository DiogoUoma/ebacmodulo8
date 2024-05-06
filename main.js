function addContact() {
    var name = document.getElementById("nameInput").value;
    var phone = document.getElementById("phoneInput").value;

    var table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = phone;

    // Limpa os campos do formulário após adicionar o contato
    document.getElementById("nameInput").value = "";
    document.getElementById("phoneInput").value = "";
}

// Adiciona um listener para o evento submit do formulário
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Previne o comportamento padrão de atualização da página ao enviar o formulário
    addContact(); // Chama a função para adicionar o contato
});