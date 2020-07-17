class UserDetailsPage{
    get userDetailsPageID(){return $('#signup2-page')}
    get userDetailsHeader(){return $('h1')}
    get userVerificationMessage(){return $('p')}
}

export const userDetailsPage= new UserDetailsPage()