import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  frinds: string[] = ['AbdAllah', 'Baha', 'Alla', 'Glal'];
  constructor() {}
}
