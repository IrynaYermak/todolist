import { getFromLs } from './local-storage-api';

export const TASKS = getFromLs('tasks') || [];
