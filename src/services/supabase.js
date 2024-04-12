import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vkjzlamplfdddeldtopp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZranpsYW1wbGZkZGRlbGR0b3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5Njk0NDQsImV4cCI6MjAyNzU0NTQ0NH0.CL8iyGcVay_nF48T12-BDxElu2n4fHpYJJtt1tuAK5Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
