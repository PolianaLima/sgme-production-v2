import { Roboto, Noto_Sans_Georgian } from 'next/font/google';

export const font_body = Roboto({
    weight: ['400', '700', '500'], // peso da fonte
    style: ['normal'], // estilo da fonte, italic/normal
    subsets: ['latin'], // escolhe o subset, diminui o tamanho do arquivo
    variable: '--font-body', // define uma css variable
    display: 'swap', // mostra a fonte de backup enquanto a principal carrega
});

export const font_title =Noto_Sans_Georgian ({
    weight: ['400', '700', '500'], // peso da fonte
    style: ['normal'], // estilo da fonte, italic/normal
    subsets: ['latin'], // escolhe o subset, diminui o tamanho do arquivo
    variable: '--font-title', // define uma css variable
    display: 'swap', // mostra a fonte de backup enquanto a principal carrega
})