import { Component } from '@angular/core';
import { consumerMarkDirty } from '@angular/core/primitives/signals';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrl: './palindrome.component.css'
})
export class PalindromeComponent {
  text: String = '';
  message: String = 'Estou só esperando';
  array: String[] = [];
  auxText : String = '';
  img: String = '../assets/img/unknown.png';

  checkPalind()
  {
    if (this.text.trim() != '' && this.text.trim() != ' ')
    {
      this.auxText = '';
      this.array = this.text.split('');
      for(let i = this.array.length - 1; i >= 0; i--)
      {
        this.auxText = this.auxText.concat(this.array[i].toString().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
      }
      console.log(this.text + '|' + this.auxText);
      if (this.text.trim().toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') == this.auxText.trim().toUpperCase())
      {
        console.log('É um palindromo!');
        this.img = '../assets/img/yes.png';
        this.message = 'É um palindromo!';
      }
      else
      {
        console.log('Não é um palindromo!');
        this.img = '../assets/img/no.png';
        this.message = 'Não é um palindromo!';
      }
    }
    else
    {
      this.img = '../assets/img/unknown.png';
      this.message = 'É necessário uma palavra para prosseguir!';
    }
  }
}
