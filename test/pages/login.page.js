class loginPage{
    get emailInput (){
        return $('//*[@type="email"]')
    }
    get passwordInput (){
        return $('#password')
    }
    get loginButton (){
        return $('//*[@type="submit"]')
    }
    get errorMsg (){
        return $('.chakra-alert')
    }

    get profileButton (){
        return $('#menu-button-6')
    }

    get logoutButton (){
        return $('#menu-list-6-menuitem-4')
    }

    async login(email,password){
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage)
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }

    async logout(){
        await this.profileButton.click()
        await this.loginButton.click()

    }
  
}
module.exports = new loginPage();