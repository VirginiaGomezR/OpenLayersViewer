# OpenLayers Viewer

- [Instalación](#instalación)
- [Descripción](#descripción)
- [Proceso de desarrollo](#proceso-de-desarrollo)
- [Funcionalidades](#funcionalidades)

## Instalación

1. Clonar el repositorio en tu ordenador

```
$ git clone https://github.com/VirginiaGomezR/OpenLayersViewer.git
```

2. Instalar dependencias

```
$ npm install
```

3. Arrancar en modo desarrollo:

```
$ npm start
```

## Descripción

Visor que muestra una capa base (OpenStreetMap) y una capa vectorial (GeoJSON) con información de los paises del mundo.
Con el botón podemos cambiar el estilo de la capa vectorial. A través del evento hover del ratón se visualiza el nombre del país y el continente al que pertenece.
Los cambios de estilo son almacenados en la cache del navegador.

## Proceso de desarrollo

Para dibujar el mapa he elegido la librería de webmapping Openlayers ya que es la que mejor conocía.
Instalé ol package para optimizar el desarrollo, siguiendo las recomendaciones de la [documentación de Openlayers](https://openlayers.org/en/latest/doc/tutorials/bundle.html).
El diseño está basado en visores sencillos como el de la [Comunidad de Madrid](https://idem.madrid.org/visor/?&ZONE=430000,4485000,8).

## Funcionalidades

1. Cambio de estilo capa vectorial
2. Visualización de información con evento hover
3. Guardar configuración

### 1. Cambio de estilo capa vectorial

Un botón nos permite cambiar el color del relleno y trazado de la capa vectorial. Se han definido dos estilos diferentes (Estilo A y Estilo B).

### 2. Visualización de información con evento hover

Al pasar el ratón por la capa vectorial se visualiza el nombre del país y el continente mediante un popup. La fuente de información procede de un archivo GeoJSON que hemos importado.
Si pasamos el cursor fuera de la capa vectorial (océano) este popup desaparece ya que no hay información.

### 3. Guardar configuración

Se recoge y guarda la acción del usuario por medio de getlocalStorage y setlocalStorage respectivamente.

---

Desarrollo y diseño: Virginia Gómez Rodríguez
