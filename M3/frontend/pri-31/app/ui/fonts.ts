import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Fira_Code } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
});
export const consolas = Fira_Code({
    weight: '400',
    subsets: ['latin']
});
