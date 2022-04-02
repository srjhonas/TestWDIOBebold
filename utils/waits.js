export const delayEnable = async (time) => {
    await browser.pause(time)
}
/**
*@param {elemento} elementId
*@param {espera} time 
*
*/

export const waitClickable = async (elementId,time) => {
    await elementId.waitForClickable({timeout: time})
}