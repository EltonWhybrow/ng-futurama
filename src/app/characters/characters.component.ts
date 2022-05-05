import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacter } from '../shared/character.interface';
import { HttpService } from '../shared/http-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  showCharacters$: Observable<ICharacter[]> | undefined;

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.showCharacters$ = this.httpService.getCharacters();
  }

  getCharacterDetails(userId: number) {
    this.router.navigate(['/character-details', userId]);
  }

}
