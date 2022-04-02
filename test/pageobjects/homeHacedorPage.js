
class HomeHacedor{

    get tituloPageMuro() {return $('/html/body/app-root/app-murohacedor/div/h4')}
    get nombreHacedorMuro() {return $('/html/body/app-root/app-murohacedor/div/div/div/div[1]/h5')}
    get tablaMuro() {return $('/html/body/app-root/app-murohacedor/div/table/tbody')} 
    get botonAceptarSolicitud() {return $('/html/body/app-root/app-murohacedor/div/table/tbody/tr[1]/td[7]/button')}
    get goServiciosAsignados() {return $('//*[@id="navbarNavDropdown"]/ul/li[3]/a')}

    async AceptarSolicitud (){
        await browser.pause(3000)
        await expect(this.tituloPageMuro).toHaveTextContaining('Panel Hacedor - Muro de Solicitudes')
        await expect(this.nombreHacedorMuro).toHaveTextContaining('HACEDOR Prueba Test Bebold')
        await expect(this.tablaMuro).toHaveTextContaining('Test WDIO Semillero Bebold')
        await this.botonAceptarSolicitud.click()
        await browser.pause(6000)
        await this.goServiciosAsignados.click()
        await browser.pause(1000)
    }
   

}

export default new HomeHacedor()