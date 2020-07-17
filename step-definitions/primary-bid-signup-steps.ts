import {Given,When,Then } from 'cucumber'
import {username,password,url} from '../support/environment'
import { homePage } from '../page-objects/home-page';
import { signUpPage } from '../page-objects/signup-page';
import { sign } from 'crypto';

Given('I am on sign up page', function () {
    browser.url(`https://${username}:${password}@${url}`)
    homePage.signUp.click()
    expect(signUpPage.signUpHeader).toBeDisplayed()
})

Given('I enter email address in wromg format', function () {
   signUpPage.emailAddress.setValue('test')
   signUpPage.signUp.click()
})

Then('I should see the user details page', function () {

})

Then('I should get error message {string}', function (errorMessage) {
    expect(signUpPage.emailError.getText()).toEqual(errorMessage)
})

When('I enter passwords that dont match', function () {

    signUpPage.password.setValue('test123')
    signUpPage.repeatPassword.setValue('test456')
    signUpPage.signUp.click()
})

Then('I should get the error {string}', function (errorMessage) {
 
    expect(signUpPage.passwordError.getText()).toEqual(errorMessage)
})