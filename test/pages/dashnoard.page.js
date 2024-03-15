class DashboardPage{
    get DashboardPageUrl (){
        return 'https://kasirdemo.belajarqa.com/dashboard'

    }
    async assertDashboardUrl(){
        await expect(browser).toHaveUrl(this.DashboardPageUrl)
    }

}

module.exports = new DashboardPage()