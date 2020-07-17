import {Then} from 'cucumber'
import {newsPage} from '../page-objects/news-page'

Then('I should be able to filter All content by webinar', function () {
    newsPage.filterContentbyWebinar()
    expect(newsPage.allContentNewsItems).toHaveAttributeContaining('href','/webinar/')
    expect(newsPage.allContentNewsItems).toHaveTextContaining('Webinar')
})