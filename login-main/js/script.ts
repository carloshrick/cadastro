let existe: boolean = false
let e = 1


function novaAba(url) {
    let win = window.open(url, '_blank');

    if(win)
    win.focus();

  }


//abrir e fechar  menu

let botaoabrir: HTMLAnchorElement | null = document.querySelector('#abre')
let tela: HTMLDialogElement | null = document.querySelector('#criarconta')


function modal(){


    if(botaoabrir && tela){

        botaoabrir.addEventListener("click", function () {

        if(tela)
        tela.showModal();

      });

    }   

}

function fechamod(){


        if(tela){

            tela.close();

          };
    
}  



//contador de usuários
let i: number = 0; 

//ilsta de usúarios

var users = [

    {
        nome:'adm',
        senha:'adm'
      }
    
  ]
  


//registrar os cadastrados
function registra(){

    let nome: HTMLInputElement | null = document.querySelector('#login')
    let senha: HTMLInputElement | null = document.querySelector('#pass')
    let senhaconf: HTMLInputElement | null = document.querySelector('#confsenha')


    console.log(senha?.value)
    if(nome && senha && senhaconf){

        let  pass = senha.value ;
        let  confpass = senhaconf.value ;

        console.log(pass)
    
        if(confpass == pass){



            users[i].nome = nome.value;
            users[i].senha = senha.value;

            console.log(users)

            i = i + 1; //lista de users

            fechamod()


        }


        else{

        console.log("SENHAS NÃO CONFEREM")

        }

        console.log(i)

    }

}

function entrada(){

    let usuario: HTMLInputElement | null = document.querySelector('#usuario');
    let pass: HTMLInputElement | null = document.querySelector('#senha');


    if(usuario && pass){

        let loginuser = usuario.value;
        let  password = pass.value ;

        for(let cont = 0; cont <= i; cont++){

        
            if(users[cont].nome == loginuser && users[cont].senha == password){

            novaAba('./welcome.html');
        }

else if(users[cont].nome != loginuser || users[cont].senha != password){

    let section: HTMLElement | null = document.querySelector('#texto');

                if(section && existe == false){

                existe = true    ;
                let nav: HTMLElement = document.createElement('nav');
                let erro = document.createTextNode('Usuario ou senha incorretos!');

                nav.appendChild(erro);
                section.appendChild(nav);}

                e = e + 1;
               
                if(e == 5){
                    novaAba("./block.html");
                    }

                }

    
    
    




}}}

    



