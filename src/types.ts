export type JobStatus = 'pending' | 'in-progress' | 'completed' | 'failed';

export interface Job {
  id: string;
  status: JobStatus;
  url: string;
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  result?: any;
  error?: string;
}
