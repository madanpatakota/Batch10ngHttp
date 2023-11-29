import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

/*interceptor*/
// who will take the actions

@Injectable()
export class ProjectAPIInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //interceptor which can take every api of the project

    var Auth =
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6Imp3cyJ9.eyJwYXJ0bmVyVXNlcklkIjo5MDQ4NCwiZW1haWwiOiJtYWRhbi5wYXRha290YUBnbWFpbC5jb20iLCJwcmVmaXgiOiIrOTEiLCJwaG9uZSI6IjcyMDQxODUwNjQiLCJlbWFpbFZlcmlmaWVkIjpmYWxzZSwiY291bnRyeUNvZGUiOiJJTiIsInBob25lVmVyaWZpZWQiOnRydWUsImZpcnN0TmFtZSI6Ik1vaGFuIHJlZGR5IiwibGFzdE5hbWUiOiJNYWRhbiIsImlhdCI6MTcwMTIzNjE2NSwiaXNzIjoid3d3LmFiaGlidXMuY29tIiwiYXVkIjoid3d3LmFiaGlidXMuY29tIiwianRpIjoiYWJycy05MDQ4NCIsImV4cCI6MTcwMTI0MzM2NSwic3ViIjoidXNlciJ9.g9EvU9R0q21ZltwmBAG1V7C5Pc2KQdZv84ndMspd0TMVoVEyDPPsYIbemzg7qLVQsnbwsww9pr6xl4RpLVcg5hj5ApOh69IjvP3YveSaFYN8UIG1WE33QUuJIcI3GbBIV4Ep56GPTdARJuK_BCbljeG7ZgShLZ5ECy1-woouPxwgYM9kaHSkgiuLYpdNOKzQqqhtLz1BxnLIHKXBSVg5dH6DvzBz4ZWbVUz5K5--q0O1oNsseOTbgzh2Hg3EtFDikNgouwmNyMAOOKBZy-r6a1s83zjUOjNYLAq7F2_o-T0ooGDl8egq1FqsGFH5ht9BwDPOfqP3wWYgLzr5g-mBbg';

    var updatedheaders = new HttpHeaders({
      Authorzation: Auth,
      MailID      : "madan.patakota@gmail.com"
    });


    var updatedparams = new HttpParams().set("Logo", "M6");


   var cloneRequest =  request.clone( { headers : updatedheaders , params : updatedparams  })
    return next.handle(cloneRequest);
    
  }
}
