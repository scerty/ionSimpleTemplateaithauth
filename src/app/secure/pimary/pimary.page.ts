import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-pimary',
  templateUrl: './pimary.page.html',
  styleUrls: ['./pimary.page.scss'],
})
export class PimaryPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private apiService: AuthService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  logout() {
    this.apiService.logout();
  }
}
