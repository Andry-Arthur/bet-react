import { createClient } from '@supabase/supabase-js'

const URL = 'https://eqfybjoylogjgblgussi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZnliam95bG9namdibGd1c3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNTAxODYsImV4cCI6MjA0NTgyNjE4Nn0.OeXFEsg5MYPlKja9d2VmyRrTdNpXGSdKv3aeEGBl6B4';

export const supabase = createClient(URL, API_KEY);
