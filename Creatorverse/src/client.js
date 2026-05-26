import { createClient } from '@supabase/supabase-js'

const URL = 'https://jsbpluaqcwkmndqfbajl.supabase.co/rest/v1/'
const API_KEY = 'sb_publishable_Sr967aYIrXtvvEuOp7u1Ew_cWo0Bg3a'

export const supabase = createClient(URL, API_KEY)