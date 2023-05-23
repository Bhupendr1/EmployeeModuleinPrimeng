import { Component } from '@angular/core';

@Component({
  selector: 'app-Dashboard-layout',
  template: `
  <article class="article" >
  <section>
              <app-header></app-header>
  </section>
  <section>
      <main>
          <div class="grid grid-nogutter">
              <div class="col-12">
                  <router-outlet></router-outlet>
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
export class DashboardLayoutComponent {}