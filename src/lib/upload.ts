import { createClient } from '@supabase/supabase-js';
export async function uploadProductImage(image: File) {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

	const supabase = createClient(supabaseUrl, supabaseKey);

	const data = await supabase.storage.from('productImage').upload(`${image.name}_${Date.now()}`, image);

	const dataUrl = await supabase.storage.from('productImage').getPublicUrl(data.data?.path!);

	return dataUrl.data.publicUrl;
}
