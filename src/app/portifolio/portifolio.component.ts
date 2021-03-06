import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss'],
  animations:[
    trigger('state',[
      state('inactive',style({
        width:'0px',
      })),
      state('html',style({
        width:'95%',
      })),
      state('css',style({
        width:'90%',
      })),
      state('bootstrap',style({
        width:'90%',
      })),
      state('angular',style({
        width:'90%',
      })),
      state('react',style({
        width:'40%',
      })),
      state('js',style({
        width:'80%',
      })),
      state('ts',style({
        width:'70%',
      })),
      state('php',style({
        width:'90%',
      })),
      state('node',style({
        width:'70%',
      })),
      state('adobe',style({
        width:'98%',
      })),
      state('sql',style({
        width:'65%',
      })),
      state('git',style({
        width:'80%',
      })),

      transition('* => html', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'95%'})
      ]))),
      transition('* => css', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'90%'})
      ]))),
      transition('* => bootstrap', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'90%'})
      ]))),
      transition('* => angular', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'90%'})
      ]))),
      transition('* => react', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'40%'})
      ]))),
      transition('* => js', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'80%'})
      ]))),
      transition('* => ts', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'70%'})
      ]))),
      transition('* => php', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'90%'})
      ]))),
      transition('* => node', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'70%'})
      ]))),
      transition('* => adobe', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'98%'})
      ]))),
      transition('* => sql', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'75%'})
      ]))),
      transition('* => git', animate('0.3s ease-in', keyframes([
        style({width:'0px'}),
        style({width:'80%'})
      ]))),
      transition('html => inactive', animate('3s ease-out'))
    ])
  ]
})
export class PortifolioComponent implements OnInit {
  title = 'portifolio';
  showFiller = false;
  itenSkill = "HTML5";
  progressStatus = "MASTER!";
  iconName = 'fab fa-html5';

 
  note = "html ou Linguagem de Marca????o de Hipertexto ?? uma linguagem de marca????o utilizada na constru????o de p??ginas na Web.";
  stateProgress = 'html';
  

  constructor() { }



  ngOnInit(): void {


  }
  move = false;
  move2 = false;
  move3 = false;
  move4 = false;
  @HostListener("document:scroll")
  scrollfunction(){

    if (document.documentElement.scrollTop < 400) {
      if(document.documentElement.scrollTop > 0){
        
        this.move = true;
        
      }
    }
    else{
      this.move = false
    }
    
    if (document.documentElement.scrollTop < 1100) {
      
      if(document.documentElement.scrollTop > 400){
        this.move2 = true;
      }
    }
    else{
      this.move2 = false
    }

    if (document.documentElement.scrollTop < 2100) {
      
      if(document.documentElement.scrollTop > 1200){
        this.move3 = true;
      }
    }
    else{
      this.move3 = false
    }

    if (document.documentElement.scrollTop < 3200) {
      
      if(document.documentElement.scrollTop > 2100){
        this.move4 = true;
      }
    }
    else{
      this.move4 = false
    }

    }


  ichange (name:string,level:string,icon:string){
    this.iconName = icon;
    this.progressStatus = level+"!";
    this.itenSkill = name.toUpperCase();
    
    //this.stateProgress = this.stateProgress === 'html' ? 'inactive' : 'html';


        
        
        switch (name) {
        case 'typescript':
          this.stateProgress = 'ts';
          this.note ="TypeScript ?? um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. ";
          break;

        case 'adobe':
         
          this.stateProgress = 'adobe';
          this.note ="Os programas da adobe centra-se historicamente na cria????o de produtos de software de multim??dia e criatividade, aprendi a trabalhar com quase todos, os principais s??o o Photoshop, Illustrator, Premier, Xd e Afeter effects";
          break;
        
        case 'mysql':
          

          this.stateProgress = 'sql';
          this.note ="O MySQL ?? um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. ";
          break;
      
        case 'html5':
          this.stateProgress = 'html';
          this.note = "html ou Linguagem de Marca????o de Hipertexto ?? uma linguagem de marca????o utilizada na constru????o de p??ginas na Web.";
   
          break;
      
        case 'css3':
          this.stateProgress = 'css';
          this.note ="O css ou Cascading Style Sheets, ?? um mecanismo para adicionar estilo a um documento web, com o css n??o existe pagina que eu n??o consiga fazer.";
          break;
      
        case 'bootstrap':
          this.stateProgress = 'bootstrap';
          this.note ="Bootstrap ?? um framework web com c??digo-fonte aberto para desenvolvimento de componentes de interface e front-end";
          break;
  
        case 'angular':
          this.stateProgress = 'angular';
          this.note ="Angular ?? uma plataforma e framework para constru????o da interface de aplica????es usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.";
          break;
      
        case 'react-native':
          this.stateProgress = 'react';
          this.note ="React Native ?? uma biblioteca Javascript criada pelo Facebook. ?? usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.";
          break;
        
        case 'javascript':
          this.stateProgress = 'js';
          this.note ="JavaScript ?? uma linguagem de programa????o interpretada estruturada, de script em alto n??vel com tipagem din??mica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript ?? uma das tr??s principais tecnologias da World Wide Web.";
          break;
      
  
        case 'php':
          this.stateProgress = 'php';
          this.note ="PHP ?? uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplica????es presentes e atuantes no lado do servidor, capazes de gerar conte??do din??mico na World Wide Web.";
          break;
  
        case 'nodejs':
          this.stateProgress = 'node';
          this.note ="Node.js ?? um software de c??digo aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execu????o de c??digos JavaScript fora de um navegador web.";
          break;
      
        case 'github':
          this.stateProgress = 'git';
          this.note ="GitHub ?? uma plataforma de hospedagem de c??digo-fonte e arquivos com controle de vers??o usando o Git. Ele permite que programadores, utilit??rios ou qualquer usu??rio cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. ";
          break;
      }
    
  }
}
