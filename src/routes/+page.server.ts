import { Hello } from '$lib/server/HelloEntity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

    let hello = new Hello();
    return {hello: JSON.parse(JSON.stringify(hello))};
};