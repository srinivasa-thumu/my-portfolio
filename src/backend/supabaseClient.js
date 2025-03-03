import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const signInWithGitHub = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      email,
      password
    });
  
    if (error) {
      console.error('GitHub login failed:', error.message);
    } else {
      console.log('GitHub login successful:', data);
    }
  };
