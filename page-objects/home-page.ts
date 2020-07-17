
 class HomePage {
     
        get aboutUs(){ return $('a[href="/about"]')}
        get faqs(){return $('a[href="/faqs"]')}
        get news(){return $('a[href="/news"]')}
 
    }

export const homePage = new HomePage()