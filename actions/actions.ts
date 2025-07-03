"use server";

import { createClient } from "@supabase/supabase-js";

export async function addToWaitlist(email: string) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error } = await supabase.from("calhacks-12.0-interest-form").insert({ email });

    return { data, error };
}