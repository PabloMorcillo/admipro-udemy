import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable , Subscription} from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subscription: Subscription;

  constructor() { 

   

  // this.subscription = this.regresaObservable().subscribe( 
  //     numero => console.log( numero ),
  //     error => console.error('Error en el obs', error),
  //     () => console.log('El observador termino!')
  
  
  // );
  }

  ngOnInit() {
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  //   console.log( "la pagina se va a cerrar")
  // }

  // regresaObservable(): Observable<number>{
  //   return new Observable( observer => {

  //     let contador = 0;

  //     let intervalo = setInterval( () => {

  //       contador += 1;

  //       const salida = {
  //         valor: contador
  //       };

  //         observer.next( salida );

  //         // if ( contador === 3 ){
  //         //   clearInterval( intervalo );
  //         //   observer.complete();
  //         // }

  //         // if ( contador === 2 ){ 
  //         //   // clearInterval( intervalo );         
  //         //   observer.error('Auxilio');
  //         // }

  //     }, 1000 )
  //   }).pipe(
        
  //     map( resp =>  resp.valor ),
  //     filter( (valor, index) => {

  //       if ( (valor % 2 ) === 0 ) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     })
    
  //   ) 

  // }

}
