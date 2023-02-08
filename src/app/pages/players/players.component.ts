import { IPlayer } from './../../interface/iplayer';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{

  playersList! : IPlayer[];
  @Output() maxID!: number;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPlayers().subscribe((data:any) => {
      this.playersList = data;
      for (const player of this.playersList) {
        this.maxID = player.id!
      }
      console.log(this.maxID)
    })

  }

}
