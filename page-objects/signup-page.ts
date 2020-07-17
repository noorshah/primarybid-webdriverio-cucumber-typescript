class SignUpPage {

    get signUpHeader(){ return $('div.top-border-teal h2')}
    get emailAddress(){return $('input[name=email]')}
    get password(){return $('input[name=password]')}
    get repeatPassword(){ return $('input[name=confirmPassword]')}
    get signUp(){return $('button[type=submit]')}

    signUpToPrimaryBid(){
        const password=this.randomString()
        this.emailAddress.setValue(`${this.randomString()}@gmail.com`)
        this.password.setValue(password)
        this.repeatPassword.setValue(password)
        this.signUp.click()
    }

    randomString(){
        return Math.random().toString(36).substring(2, 15)
    }

}
export const signUpPage= new SignUpPage()