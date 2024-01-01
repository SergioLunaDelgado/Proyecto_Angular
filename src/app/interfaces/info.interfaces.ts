/* Con esta interfaz especifico un tipo de formato */
/* El signo de interogación significa que es opcional */

export interface infoPagina {
    title ?: string;
    email ?: string;
    short_name ?: string;
    page_author ?: string;
    facebook ?: string;
    twitter ?: string;
    instagram ?: string;
    pinterest ?: string;
    tumblr ?: string;
    team ?: any[];
}