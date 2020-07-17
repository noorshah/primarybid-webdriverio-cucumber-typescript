import {After,Status} from 'cucumber'

After(async function (scenarioResult) {
    if (scenarioResult.result.status == Status.FAILED) {
        this.params.attach(browser.getUrl())
        this.params.attach(browser.saveScreenshot(`../screesnhots/${scenarioResult.pickle}`))
    }
})