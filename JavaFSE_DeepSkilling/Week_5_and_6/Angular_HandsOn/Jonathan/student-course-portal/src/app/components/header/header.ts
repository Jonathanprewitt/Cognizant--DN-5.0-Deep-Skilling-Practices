import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // <-- Add it to the imports array here
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header { }
