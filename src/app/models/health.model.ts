export interface HealthStatus {
  status: string;
  components?: Record<string, any>;
  groups?: string[];
}