import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UserFormComponent implements OnInit {
  user: User = { username: '', password: '', department: '', active: true };
  isEdit = false;
  constructor(
    private svc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    console.log('UserFormComponent carregado');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.svc.getById(id).subscribe(u => this.user = u);
    }
  }
  save() {
    console.log('Botão salvar clicado', this.user);
    const op = this.isEdit
      ? this.svc.update(this.user.id!, this.user)
      : this.svc.create(this.user);
    op.subscribe(() => this.router.navigate(['/']));
  }
  cancel() {
    this.router.navigate(['/']);
  }
}