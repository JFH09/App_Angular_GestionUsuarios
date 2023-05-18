import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { UsuarioActions } from './usuario.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable()
export class UsuarioEffects {

  loadUsuarios$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UsuarioActions.loadUsuarios),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.obtenerUsuarios().pipe(
          map(data => UsuarioActions.loadUsuariosSuccess({ data })),
          catchError(error => of(UsuarioActions.loadUsuariosFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  private obtenerUsuarios(): Observable<any>{
    return this.httpClient.get(`${environment.desarrolloURL}datosUsuariosProvisional.json`)
  }
}
