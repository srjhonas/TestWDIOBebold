

class RegistroHacedor{
                                  
    get gnombreHacedor() {return $('/html/body/app-root/app-registrohacedor/div/div[1]/div/input')}
    get gmailHacedor() {return $('/html/body/app-root/app-registrohacedor/div/div[2]/div/input')}
    get gtelefonoHacedor() {return $('/html/body/app-root/app-registrohacedor/div/div[3]/div/input')}
    get gpasswordHacedor() {return $('/html/body/app-root/app-registrohacedor/div/div[4]/div/input')}
    get gbotonRegistro() {return $('/html/body/app-root/app-registrohacedor/div/div[6]/button')}
    get gmenuHome() {return $('//*[@id="navbarNavDropdown"]/ul/li[1]/a')}

    async crearHacedor(){
        await browser.pause(3000)
        await this.gnombreHacedor.setValue('HACEDOR Prueba Test Bebold')       
        await this.gmailHacedor.setValue('hacedorWDIO@mail.com')        
        await this.gtelefonoHacedor.setValue('3009999999')
        await this.gpasswordHacedor.setValue('hwdio1')
        await this.gbotonRegistro.click()
        await browser.pause(4000)
        await this.gmenuHome.click()
        await browser.pause(3000)
        await browser.refresh()
        
    }

}

export default new RegistroHacedor()