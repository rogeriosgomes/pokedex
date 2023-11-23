import { Component, OnInit } from '@angular/core';

import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameFilter = '';
  selectedPkm = 0;
  get pokemonList(){
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    })
  }

  get pkmSprite(){
    const number = ('000' + this.selectedPkm['number']).slice(-3);   // ('000' + this.selectedPkm).slice(-3);
    // console.log(number);
    // console.log(this.selectedPkm['number']);
    return "//serebii.net/sunmoon/pokemon/"+number+".png";
  }
  

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit() {
    this.pokeapi.listAll();
  }
  
  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}