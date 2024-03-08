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
  array: String[] = [];
  auxText : String = '';

  checkPalind()
  {
    this.text = this.text.toUpperCase();
    this.auxText = '';
    this.array = this.text.split('');
    for(let i = this.array.length - 1; i >= 0; i--)
    {
      this.auxText = this.auxText.concat(this.array[i].toString());
    }
    console.log(this.text + ' ' + this.auxText);
    if (this.text == this.auxText)
    {
      console.log('É um palindromo!');
    }
    else
    {
      console.log('Não é um palindromo!');
    }
  }
}