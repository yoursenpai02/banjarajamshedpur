-- Drop the overly permissive SELECT policy that exposes all customer data
DROP POLICY IF EXISTS "Users can view reservations by contact info" ON public.reservations;

-- Create a restrictive policy - no public SELECT access
-- Reservations can only be viewed by authenticated staff/admin (future implementation)
-- For now, no one can read reservations through the API - staff can use Supabase dashboard
CREATE POLICY "No public read access to reservations"
ON public.reservations
FOR SELECT
USING (false);