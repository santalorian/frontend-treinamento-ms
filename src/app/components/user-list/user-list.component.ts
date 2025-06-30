import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { UserService }       from '../../services/user.service';
import { User }              from '../../models/user.model';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(
    private svc: UserService,
    private router: Router
  ) {}
  ngOnInit() { this.load(); }
  load() { this.svc.getAll().subscribe(data => this.users = data); }
  delete(u: User) {
    if (!confirm(`Deletar ${u.username}?`)) return;
    this.svc.delete(u.id!).subscribe(() => this.load());
  }
  edit(u: User) { this.router.navigate(['/edit', u.id]); }
}