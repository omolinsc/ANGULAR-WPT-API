import { Router } from '@angular/router';
import { IPlayer } from './../../interface/iplayer';
import { ApiService } from './../../shared/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit{

  playerForm!: FormGroup;
  player!: IPlayer;
  maxID!: number;
  submited: boolean = false;

  constructor(private form: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {

    console.log(this.maxID)

    this.api.getPlayers().subscribe((data:any) => {
      for (const player of data) {
        this.maxID = player.id!
      }
      console.log(this.maxID)
    })

    this.playerForm = this.form.group({
      id: [{value: (this.maxID + 1), disabled: true}, Validators.required],
      name: ["", [Validators.required, Validators.minLength(4)]],
      nickname: ["", [Validators.required]],
      points: ["", [Validators.required]],
      position: ["", [Validators.required]],
      birthPlace: ["", [Validators.required]],
      country: ["", [Validators.required]],
      birthDate: ["", [Validators.required]],
      height: ["", [Validators.required, Validators.max(2.5), Validators.min(1)]],
      photo: ["", [Validators.required]]
    })

    this.playerForm.valueChanges.subscribe((data) => {
      this.player = data;
    })
  }

  addPlayer(){
    this.submited = true;
    if(this.playerForm.valid){
      let newPlayer: IPlayer = this.player;
      this.api.postPlayer(newPlayer).subscribe((response) => {
        console.log(response);
        this.playerForm.reset();
        this.submited = false;
        this.route.navigate(["/players"]);
      })
    }
  }

}


// this.playerForm = this.form.group({
//   id: [{value: this.maxID + 1, disabled: true}, Validators.required],
//   name: ["", [Validators.required, Validators.minLength(4)]],
//   nickname: "",
//   points: "",
//   position: ["drive", "rev??s"],
//   birthPlace: ["", [Validators.required]],
//   country: ["", [Validators.required]],
//   birthDate: ["", [Validators.required]],
//   height: ["", [Validators.required, Validators.max(2.5), Validators.min(1)]],
//   photo: ["", [Validators.required]]
// })