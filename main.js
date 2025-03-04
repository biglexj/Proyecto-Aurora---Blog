import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kreyggpdpzsepwlxivky.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZXlnZ3BkcHpzZXB3bHhpdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3MzA3OTIsImV4cCI6MjA0ODMwNjc5Mn0.CS2f2JfedIIuKyRX8RDUClwoCKG0NWsTYU8byBnMlX0'

const supabase = createClient(supabaseUrl, supabaseAnonKey)