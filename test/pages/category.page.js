class categoryPage{
    get categoryButton (){
        return $('//*[@href="/categories"]')
    }
    get addButton (){
        return $('//*[@href="/categories/create"]')
    }
    get nameInput (){
        return $('#nama')
    }
    get descriptionInput (){
        return $('#deskripsi')
    }
    get saveButton (){
        return $('button=simpan')
    }

    get addedCategory (){
        return $('//*[@role="gridcell"]')
    }

    async directCategoryPage(){
        await this.categoryButton.click()
        await this.addButton.click()
    }
 
    async addCategory(name,description){
        await this.nameInput.setValue(name)
        await this.descriptionInput.setValue(description)
        await this.saveButton.click()
    }

    async assertAddedCategory(categoryname){
        await expect(this.addedCategory).toHaveTextContaining(categoryname)
    }


}
module.exports = new categoryPage()