class RegistroCliente {

    get gnombreCliente() {return $('/html/body/app-root/app-registrocliente/div/div[1]/div/input')}
    get gmailCliente() {return $('/html/body/app-root/app-registrocliente/div/div[2]/div/input')}
    get gtelefonoCliente() {return $('/html/body/app-root/app-registrocliente/div/div[3]/div/input')}
    get gpasswordCliente() {return $('/html/body/app-root/app-registrocliente/div/div[4]/div/input')}
    get gbotonRegistro() {return $('/html/body/app-root/app-registrocliente/div/div[6]/button')}
    get gmenuHome() {return $('//*[@id="navbarNavDropdown"]/ul/li[1]/a')}


    async crearCliente(){
        await browser.pause(3000)
        await this.gnombreCliente.setValue('CLIENTE Prueba Test Bebold')
        await this.gmailCliente.setValue('clienteWDIO@mail.com')
        await this.gtelefonoCliente.setValue('3112222222')
        await this.gpasswordCliente.setValue('cwdio2')
        await this.gbotonRegistro.click()
        await browser.pause(3000)
        await this.gmenuHome.click()
        await browser.pause(3000)
        await browser.refresh()
        await browser.pause(1000)
        
        
    }

}

export default new RegistroCliente()