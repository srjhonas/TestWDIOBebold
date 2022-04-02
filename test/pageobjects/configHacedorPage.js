

class ConfigHacedor {

    get NavBarPrefHacedor() {return $('//*[@id="navbarNavDropdown"]/ul/li[2]/a')}
    get tituloPage() {return $('/html/body/app-root/app-servicios-asignados/div/h4')}
    get NavBarLogOut(){return $('//*[@id="navbarNavDropdown"]/ul/li[4]/a')}   
    

    //Tabla Servicios
    get tablaServicios() {return $('/html/body/app-root/app-confighacedor/div[3]/div/div[1]/table')}
    get valorXServicio() {return $('//*[@id="valorXservicio"]')}
    get botonAdicionarServicio() {return $('/html/body/app-root/app-confighacedor/div[3]/div/div[1]/button')}
    get selectServicio() {return $('//*[@id="servicioEscogido"]/option[4]')}
    
    //Tabla Ciudades
    get tablaCiudades() {return $('/html/body/app-root/app-confighacedor/div[3]/div/div[2]/table')}
    get botonAdicionarCiudad() {return $('/html/body/app-root/app-confighacedor/div[3]/div/div[2]/button')}
    get selectDpto() {return $('//*[@id="DeptoEscogido"]/option[17]')}
    get selectCiudad() {return $('//*[@id="CiudadEscogida"]/option[58]')}

    async cargarCiudadyServicio (){
        await browser.pause(3000)
        await this.NavBarPrefHacedor.click()
        await this.selectServicio.click()
        await this.valorXServicio.setValue('45000')
        await this.botonAdicionarServicio.click()
        await browser.pause(3000)
        await expect(this.tablaServicios).toHaveTextContaining('Reparación eléctrica')
        await this.selectDpto.click()
        await browser.pause(1000)
        await this.selectCiudad.click()
        await this.botonAdicionarCiudad.click()
        await browser.pause(3000)
        await expect(this.tablaCiudades).toHaveTextContaining('Madrid')
        await browser.pause(3000)
        await this.NavBarLogOut.click()
        await browser.pause(3000)
        await browser.refresh()
        await browser.pause(1000)
        

    }

    
}

export default new ConfigHacedor()