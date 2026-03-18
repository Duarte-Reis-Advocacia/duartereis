
-- Add cover_image_url column
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS cover_image_url text;

-- Create storage bucket for article covers
INSERT INTO storage.buckets (id, name, public)
VALUES ('article-covers', 'article-covers', true)
ON CONFLICT DO NOTHING;

-- Public read access
CREATE POLICY "Imagens públicas"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'article-covers');

-- Admin upload
CREATE POLICY "Admin pode fazer upload"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'article-covers' AND auth.role() = 'authenticated');

-- Admin delete
CREATE POLICY "Admin pode deletar covers"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'article-covers' AND auth.role() = 'authenticated');
