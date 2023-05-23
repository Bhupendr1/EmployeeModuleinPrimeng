import { Component } from '@angular/core';

@Component({
    selector: 'app-home-layout',
    template: `
  <article class="article" >
  <section>
      <app-header></app-header>
  </section>
  <section>
      <main>
      <div class="grid grid-nogutter">
      <div class="col-12">
      <app-sidemenu></app-sidemenu>
      </div>
              </div>
      </main>
  </section>
  
  <footer>
  <app-footer></app-footer>
  </footer>
  </article>
  `,
    styles: [`
    .article {
        height: 100vh;
         display: flex;
        flex-direction: column;
    }
    footer {
    margin-top: auto;
    }
    `
    ]
})
export class HomeLayoutComponent { }