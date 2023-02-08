import { IPlayer } from './../../interface/iplayer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  playersList!: IPlayer[];
  maxID!: number;

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get('http://localhost:3000/players');
  }

  getPlayerById(id:number) {
    return this.http.get('http://localhost:3000/players/'+id);
  }

  postPlayer(player:IPlayer) {
    return this.http.post('http://localhost:3000/players', player)
  }

  editPlayer(id:number, player:IPlayer) {
    return this.http.put('http://localhost:3000/players/'+id, player)
  }

  // setMaxID(){
  //   this.api.getPlayers().subscribe((data:any) => {
  //     this.playersList = data;
  //     for (const player of this.playersList) {
  //       this.maxID = player.id!;
  //     }
  //   })
  //   return this.maxID;
  // }
}
