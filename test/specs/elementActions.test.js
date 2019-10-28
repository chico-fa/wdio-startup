const assert = require('assert').strict
internetPage = require('../../pages/internet.page')

describe('Test elements actions', function () {
    it('should click element', () => {
        browser.url('http://the-internet.herokuapp.com')
        internetPage.clickOnLink()
        //assert(browser.getUrl()).equal('http://the-internet.herokuapp.com/abtest')
        assert.strictEqual((browser.getUrl()),('http://the-internet.herokuapp.com/abtest'))
    })

    it('should get text', () => {
        browser.url('http://the-internet.herokuapp.com')
        assert.strictEqual((internetPage.getSpecificElementText(1)),('A/B Testing'))
    })

    it('should click checkbox', () => {
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        assert((internetPage.checkboxes(1)).isSelected())
    })
})