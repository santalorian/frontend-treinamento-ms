// src/app/services/user.service.ts
import { Injectable }      from '@angular/core';
import { HttpClient }      from '@angular/common/http';
import { Observable }      from 'rxjs';
import { User }            from '../models/user.model';
import { HealthStatus }    from '../models/health.model';
import { environment }     from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /** Chama o Actuator /health e retorna o JSON completo */
  health(): Observable<HealthStatus> {
    return this.http.get<HealthStatus>(`${this.baseUrl}/health`);
  }

  /** Cria um usuário */
  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/usuario/salvar`, user);
  }

  /** Lista todos */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/usuario/buscar`);
  }

  /** Busca por ID */
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/usuario/buscar/${id}`);
  }

  /** Atualiza */
  update(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/usuario/alterar/${id}`, user);
  }

  /** Deleta */
  delete(id: string): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/usuario/deletar/${id}`
    );
  }
}