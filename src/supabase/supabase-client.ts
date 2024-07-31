import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbjsuhybtvfubgbooxmp.supabase.co"
const supabaseKeys = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtianN1aHlidHZmdWJnYm9veG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNTg0MzcsImV4cCI6MjAzNzgzNDQzN30.IiShVWbURhuoxmDd646l9OVShbqtpRTtq7wdTc9BHOo"

export const supabase = createClient(supabaseUrl, supabaseKeys)