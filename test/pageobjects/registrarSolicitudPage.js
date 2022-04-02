

class SolicitudServicio{

    get gdireccion() {return $('/html/body/app-root/app-solicitarservicio/div/div[3]/div/div[1]/div/input')}
    get gbarrio() {return $('/html/body/app-root/app-solicitarservicio/div/div[3]/div/div[2]/div/input')}
    get gservicioSolicitado() {return $('//*[@id="ServicioSelected"]/option[4]')} 
    get gvalorOfrecido() {return $('/html/body/app-root/app-solicitarservicio/div/div[4]/div/div[2]/div/input')}
    get gobservaciones() {return $('/html/body/app-root/app-solicitarservicio/div/div[5]/textarea')}
    get gbotonSolicitarServicio() {return $('/html/body/app-root/app-solicitarservicio/div/button')}
    get gdepartamento() {return $('//*[@id="DeptoSelected"]/option[17]')} 
    get gciudad() {return $('//*[@id="CiudadSelected"]/option[58]')} 

    get Logoff() {return $('//*[@id="navbarNavDropdown"]/ul/li[3]/a')} 

    async crearSolServicio (){
        await browser.pause(3000)
        await this.gdepartamento.click()
        await browser.pause(3000)
        await this.gciudad.click()
        await this.gdireccion.setValue('Calle 1A Sur # 53A - 04')
        await browser.pause(1000)
        await this.gbarrio.setValue('Galan Camelia')
        await browser.pause(1000)
        await this.gservicioSolicitado.click()
        await browser.pause(1000)
        await this.gvalorOfrecido.setValue('70000')
        await browser.pause(1000)
        await this.gobservaciones.setValue('Test WDIO Semillero Bebold')
        await browser.pause(1000)
        await this.gbotonSolicitarServicio.click()
        await browser.pause(6000)
        await this.Logoff.click()
        await browser.pause(1000)
        await browser.refresh()

    }

}

export default new SolicitudServicio()