var existe = false;
var e = 1;
function novaAba(url) {
    var win = window.open(url, '_blank');
    if (win)
        win.focus();
}
//abrir e fechar  menu
var botaoabrir = document.querySelector('#abre');
var tela = document.querySelector('#criarconta');
function modal() {
    if (botaoabrir && tela) {
        botaoabrir.addEventListener("click", function () {
            if (tela)
                tela.showModal();
        });
    }
}
function fechamod() {
    if (tela) {
        tela.close();
    }
    ;
}
//contador de usuários
var i = 0;
//ilsta de usúarios
var users = [
    {
        nome: 'adm',
        senha: 'adm'
    }
];
//registrar os cadastrados
function registra() {
    var nome = document.querySelector('#login');
    var senha = document.querySelector('#pass');
    var senhaconf = document.querySelector('#confsenha');
    console.log(senha === null || senha === void 0 ? void 0 : senha.value);
    if (nome && senha && senhaconf) {
        var pass = senha.value;
        var confpass = senhaconf.value;
        console.log(pass);
        if (confpass == pass) {
            users[i].nome = nome.value;
            users[i].senha = senha.value;
            console.log(users);
            i = i + 1; //lista de users
            fechamod();
        }
        else {
            console.log("SENHAS NÃO CONFEREM");
        }
        console.log(i);
    }
}
function entrada() {
    var usuario = document.querySelector('#usuario');
    var pass = document.querySelector('#senha');
    if (usuario && pass) {
        var loginuser = usuario.value;
        var password = pass.value;
        for (var cont = 0; cont <= i; cont++) {
            if (users[cont].nome == loginuser && users[cont].senha == password) {
                novaAba('./welcome.html');
            }
            else if (users[cont].nome != loginuser || users[cont].senha != password) {
                var section = document.querySelector('#texto');
                if (section && existe == false) {
                    existe = true;
                    var nav = document.createElement('nav');
                    var erro = document.createTextNode('Usuario ou senha incorretos!');
                    nav.appendChild(erro);
                    section.appendChild(nav);
                }
                e = e + 1;
                if (e == 5) {
                    novaAba("./block.html");
                }
            }
        }
    }
}
