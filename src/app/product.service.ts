import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';
import { t } from '@angular/core/src/render3';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'

  constructor(private _http : Http) { }

  getAlbum(id : number) {
    let t = this._http.get(this._albumUrl).map((response) => response.json());
    console.log(t);
    return t;
  }

}
