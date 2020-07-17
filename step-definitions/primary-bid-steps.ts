import {Given, When, Then} from 'cucumber'
import {homePage} from '../page-objects/home-page'
import {aboutUsPage} from '../page-objects/abouts-us-page'
import {faqsPage} from '../page-objects/faqs-page'
import {username,password,url} from '../support/environment'
import { newsPage } from '../page-objects/news-page';

Given('I am on Primary Bid home page', function () {
    browser.url(`https://${username}:${password}@${url}`)
  })


Then('I should be able to go to About us Page', async function () {
    homePage.aboutUs.click()
    expect(browser).toHaveTitle('PrimaryBid.com | About Us, Our Mission')
    expect(aboutUsPage.aboutUsHeading).toHaveText('About Us')
})


Then('I should be able to navigate to FAQs page', function () {
    homePage.faqs.click()
    expect(browser).toHaveTitle('PrimaryBid.com | Invest in new Share Offerings from listed companies')
})

Then('I should be able to see FAQS about Primary Bid', function () {
    expect(faqsPage.faqsHeading).toHaveText('Frequently Asked Questions')
})

Then('I should be able to navigate to News page', function () {
    homePage.news.click()
    expect(browser).toHaveTitle('PrimaryBid | News')
})

Then('I should be able to see latest news about Primary Bid', function () {
    expect(newsPage.newsPageHeaders).toBeDisplayed()
    expect(newsPage.newsPageHeaders).toHaveTextContaining('Featured Content')
    expect(newsPage.newsPageItems).toBeClickable()
})

Then('I should be able to sign up to Primary Bid', function () {
    
})