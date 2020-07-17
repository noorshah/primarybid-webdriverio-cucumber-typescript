class NewsPage {
    get newsPageFeatured(){return $("(//div[contains(@data-testid,'page-body')]//div[contains(@class,'container section-header')]/h4)[1]")}
    get newsPageAllContent(){return $("(//div[contains(@data-testid,'page-body')]//div[contains(@class,'container section-header')]/h4)[2]")}
    get newsPageItems(){return $("div[data-testid='page-body']  a[data-testid='news-data']")}
}

export const newsPage= new NewsPage()