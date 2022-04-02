

class ServiciosAsignados{

    get tituloPage() {return $('/html/body/app-root/app-servicios-asignados/div/h4')}
    get nombreHacedor() {return $('/html/body/app-root/app-servicios-asignados/div/div/div/div[1]/h5')}
    get tablaAsignados() {return $('/html/body/app-root/app-servicios-asignados/div/table/tbody')}
    get NavBarLogOut(){return $('//*[@id="navbarNavDropdown"]/ul/li[4]/a')} 
 
    async verServicioAsignado (){
        await browser.pause(3000)
        await expect(this.tablaAsignados).toHaveTextContaining('Test WDIO Semillero Bebold')
        await browser.pause(3000)
        await this.NavBarLogOut.click()
        await browser.pause(1000)
        await browser.refresh()
    }



}
export default new ServiciosAsignados()