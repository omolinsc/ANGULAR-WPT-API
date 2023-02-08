import { IPlayer } from './../../interface/iplayer';
import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.scss']
})
export class PlayersDetailsComponent implements OnInit {

  id!: number;
  playerData!: any;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get("id"));
      console.log(this.id)
    });

    this.api.getPlayerById(this.id).subscribe((data:any) => {
      this.playerData = data;
    })
  }
}
