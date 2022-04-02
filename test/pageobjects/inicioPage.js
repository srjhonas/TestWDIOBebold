
class Inicio{

    get mailUsuario() {return $('//*[@id="MailUsuario"]')}
    get passwordUsuario() {return $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[2]/input')}
    get perfilCliente() {return $('//*[@id="validationDefault04"]/option[2]')}
    get perfilHacedor() {return $('//*[@id="validationDefault04"]/option[3]')}
    get botonInicioSesion() {return $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[4]/button')}
    get botonCrearCliente() {return $('/html/body/app-root/app-inicio/div/div/div[1]/button[1]')}
    get botonCrearHacedor() {return $('/html/body/app-root/app-inicio/div/div/div[1]/button[2]')}

    async accesoUsuario (perfil){

      const tipoUsuario = perfil
        
        if(tipoUsuario == 'Cliente'){
            await browser.pause(3000)
            await this.mailUsuario.setValue('clienteWDIO@mail.com')
            await this.passwordUsuario.setValue('cwdio2')
            //await this.mailUsuario.setValue('george@mail.com')
            //await this.passwordUsuario.setValue('G1234')
            await this.perfilCliente.click()
            await browser.pause(3000)
            await this.botonInicioSesion.click()
            await browser.pause(3000)    
        }else{
            await browser.pause(3000)
            await this.mailUsuario.setValue('hacedorWDIO@mail.com')
            await this.passwordUsuario.setValue('hwdio1')
            //await this.mailUsuario.setValue('andressd@mail.com')
            //await this.passwordUsuario.setValue('Andres123')
            await this.perfilHacedor.click()
            await browser.pause(3000)
            await this.botonInicioSesion.click()
            await browser.pause(3000)
        }
    }

   
                                    
}

export default new Inicio()