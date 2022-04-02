
class HomeCliente {

    get tituloPanelCliente() {return $('/html/body/app-root/app-homecliente/div/h4')}
    get nombrePanelCliente() {return $('/html/body/app-root/app-homecliente/div/div/div/div[1]/h5')}
    get botonRegistrarSolicitud() {return $('/html/body/app-root/app-homecliente/div/button')}
    get tablaSolicitudesCliente() {return $('/html/body/app-root/app-homecliente/div/table')}

    async irRegistroSolicitud(){
        await browser.pause(3000)
        await this.botonRegistrarSolicitud.click()
        await browser.pause(3000)
    }

    async verServicioAceptado(){
        await browser.pause(3000)
        await expect(this.tablaSolicitudesCliente).toHaveTextContaining('Test WDIO Semillero Bebold')
        await expect(this.tablaSolicitudesCliente).toHaveTextContaining('HACEDOR Prueba Test Bebold')
    }

}

export default new HomeCliente()