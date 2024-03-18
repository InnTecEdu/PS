import time
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By

navegador = webdriver.Chrome("./chromedriver_win32/chromedriver.exe")

archivo = pd.read_excel("./pines-tabla.xlsx")

for row,datos in archivo.iterrows():
    nombre = datos['nombre']
    colegio = datos['colegio']
    ciudad = datos['ciudad']
    matematicas = datos['matematicas']
    lenguaje = datos['lenguaje']
    sociales = datos['sociales']
    naturales = datos['naturales']
    ingles = datos['ingles']
    acertadas = datos['acertadas']

    # entrar a sie y dar click en activa tu pin
    time.sleep(1)
    navegador.get(f'https://informes10-291bibt2n-innovacions-projects.vercel.app/')
    time.sleep(2)

    # Insertar datos en el formulario
    navegador.find_element(By.NAME, "nombre").send_keys(nombre)

    navegador.find_element(By.NAME, "colegio").send_keys(colegio)

    navegador.find_element(By.NAME, "ciudad").send_keys(ciudad)

    navegador.find_element(By.NAME, "matematicas").send_keys(matematicas)

    navegador.find_element(By.NAME, "lenguaje").send_keys(lenguaje)

    navegador.find_element(By.NAME, "sociales").send_keys(sociales)

    navegador.find_element(By.NAME, "naturales").send_keys(naturales)

    navegador.find_element(By.NAME, "ingles").send_keys(ingles)
    time.sleep(1)
    navegador.find_element(By.NAME, "acertadas").send_keys(acertadas)
    time.sleep(1)

    navegador.find_element(By.NAME, "decil").click()
    time.sleep(1)
    navegador.find_element(By.NAME, "imprimir").click()
    time.sleep(2)
navegador.close()