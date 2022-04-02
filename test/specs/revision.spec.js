
import * as url from '../../utils/HelperURL.json'
import RegistroHacedor from '../pageobjects/registrarHacedorPage'
import Inicio from '../pageobjects/inicioPage'
import ConfigHacedor from '../pageobjects/configHacedorPage'
import RegistroCliente from '../pageobjects/registrarClientePage'
import HomeCliente from '../pageobjects/homeClientePage'
import SolicitudServicio from '../pageobjects/registrarSolicitudPage'
import HomeHacedor from '../pageobjects/homeHacedorPage'
import ServiciosAsignados from '../pageobjects/serviciosAsignadosPage'


describe('Test Login', () => {

    before('Launch Application', async () => {
        await browser.url('http://localhost:4200/Home')
        await browser.maximizeWindow()
       
    } )

    it('Alerta campos sin diligenciar', async () =>{
       const InputBoxUser = await $('#MailUsuario')
       InputBoxUser.setValue('blrisu@hotmail.com') 
       await browser.pause(3000)
       const InputBoxPass = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[2]/input')
       InputBoxPass.setValue('123') 
       await browser.pause(3000)
       const ButtonLogin = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[4]/button')
       await ButtonLogin.click()
       await browser.pause(10000)
       const alerta = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[4]/div')  
       await expect(alerta).toHaveTextContaining('Por favor diligencie todos los campos')
     

    } 
    )

    it('Alerta Usuario o PSW errado', async () =>{
        const InputBoxUser = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[1]/input')
        InputBoxUser.setValue('blrisu@hotmail.com') 
        await browser.pause(3000)
        const InputBoxPass = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[2]/input')
        InputBoxPass.setValue('123') 
        await browser.pause(3000)
        const SelectPerfil = await $('//*[@id="validationDefault04"]/option[2]')
        await SelectPerfil.click()
        await browser.pause(3000)
        const ButtonLogin = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[4]/button')
        await ButtonLogin.click()
        await browser.pause(2000)
        const alerta = await $('/html/body/app-root/app-inicio/div/div/div[2]/div/div/div/div/div/div[4]/div')  
        await expect(alerta).toHaveTextContaining('Usuario o Password Incorrecto')
       
 
     } 
     ) 

     it('Proceso de Creacion de un Hacedor', async () => {
        const irCrearHacedor = await $('//*[@id="navbarNavDropdown"]/ul/li[3]/a')
        await irCrearHacedor.click()
        await browser.pause(2000)
        await RegistroHacedor.crearHacedor()
      
     }) 

    it('Acceso Hacedor', async () => {
        await browser.pause(2000)
        await Inicio.accesoUsuario('Hacedor')
        await browser.pause(2000)
       
     })

     it('Config Servicios', async () => {
        await browser.pause(2000)
        await ConfigHacedor.cargarCiudadyServicio()
        await browser.pause(2000)
        
     })
      
     it('Proceso crear Cliente', async () => {
        const irCrearCliente = await $('//*[@id="navbarNavDropdown"]/ul/li[2]/a')
        await irCrearCliente.click()
        await browser.pause(2000)
        await RegistroCliente.crearCliente()
        await browser.pause(2000)        
     }) 

     it('Acceso Cliente y registro de solicitud', async () => {
        await browser.pause(2000)
        await Inicio.accesoUsuario('Cliente')
        await HomeCliente.irRegistroSolicitud()
        await SolicitudServicio.crearSolServicio()
        await browser.pause(2000)
        
     }) 

     it('Acceso Hacedor y aceptar solicitud', async () => {
        await browser.pause(2000)
        await Inicio.accesoUsuario('Hacedor')
        await HomeHacedor.AceptarSolicitud()
        await browser.pause(2000)
        await ServiciosAsignados.verServicioAsignado()
        await browser.pause(2000)
        
     })

     it('Acceso Cliente para ver servicio aceptado', async () => {
        await browser.pause(2000)
        await Inicio.accesoUsuario('Cliente')
        await HomeCliente.verServicioAceptado()
        await browser.pause(2000)
        
     })
  


    after( async () => {
        await browser.deleteSession()
    })

 })