import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacter } from '../shared/character.interface';
import { HttpService } from '../shared/http-service.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characterId: any;
  characterDetails$: Observable<ICharacter> | undefined;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = this.route.snapshot.paramMap.get('id');
      this.characterId = id;
      console.log('characterID', this.characterId);

    })

    this.characterDetails$ = this.http.getCharacterDetails(this.characterId);
  }
}
