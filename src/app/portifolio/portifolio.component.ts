import { Component, OnInit } from '@angular/core';
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
  dataIcon = 'cib:adobe';

  note = "html ou Linguagem de Marcação de Hipertexto é uma linguagem de marcação utilizada na construção de páginas na Web.";
  stateProgress = 'html';
  
  constructor() { }

  ngOnInit(): void {
  }
  // toggle(){

    
  //   this.stateProgress = 'inactive';
  // }

  ichange (name:string,level:string,icon:string){
    this.iconName = icon;
    this.progressStatus = level+"!";
    this.itenSkill = name.toUpperCase();
    //this.stateProgress = this.stateProgress === 'html' ? 'inactive' : 'html';
    switch (name) {
      case 'html5':
        this.stateProgress = 'html';
        this.note = "html ou Linguagem de Marcação de Hipertexto é uma linguagem de marcação utilizada na construção de páginas na Web.";
 
        break;
    
      case 'css3':
        this.stateProgress = 'css';
        this.note ="O css ou Cascading Style Sheets, é um mecanismo para adicionar estilo a um documento web, com o css não existe pagina que eu não consiga fazer.";
        break;
    
      case 'bootstrap':
        this.stateProgress = 'bootstrap';
        this.note ="Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end";
        break;

      case 'angular':
        this.stateProgress = 'angular';
        this.note ="Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.";
        break;
    
      case 'react-native':
        this.stateProgress = 'react';
        this.note ="React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.";
        break;
      
      case 'javascript':
        this.stateProgress = 'js';
        this.note ="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.";
        break;
    
      case 'typescript':
        this.stateProgress = 'ts';
        this.note ="TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. ";
        break;

      case 'php':
        this.stateProgress = 'php';
        this.note ="PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.";
        break;

      case 'nodejs':
        this.stateProgress = 'node';
        this.note ="Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.";
        break;
    
      case 'adobe':
        this.stateProgress = 'adobe';
        this.note ="Os programas da adobe centra-se historicamente na criação de produtos de software de multimídia e criatividade, aprendi a trabalhar com quase todos, os principais são o Photoshop, Illustrator, Premier, Xd e Afeter effects";
        break;
      
      case 'mysql':
        this.stateProgress = 'sql';
        this.note ="O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. ";
        break;
    
      case 'github':
        this.stateProgress = 'git';
        this.note ="GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. ";
        break;
    }
  }
}
