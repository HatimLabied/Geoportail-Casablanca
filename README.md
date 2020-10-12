# Geoportail-Casablanca
The Géoportail is a public Web portal providing access to research and visualization services for geographic or geolocated data. Its main purpose is to publish the geographic reference data for the entire territory of Casablanca.

The Geoportal will give the user the possibility of filtering searches by date and by topic.
In the Geoserver, there are 4 stored themes:

• Spatial mapping and town planning.

• Oceanography and coastline: (telecommunications, town planning: buildings, roads, infrastructures, sanitation, etc.). Oceanography.

• Natural resources: (geology, forest, water, etc.).

• Others (sea fishing, topographic map, terrain model, altitude, OS map, point cloud, etc.).

o Visualization: the user will see the result of his search according to the area of interest he will draw or the layer he wishes to download.

o Extraction by area of interest.

o Contact the administrator: the user can contact the administrator if he wishes to download a layer.

![0](https://user-images.githubusercontent.com/60801374/95662505-c6b83580-0b37-11eb-8b26-283306c6f7bd.png)

## Table of content

- [Installation](#installation)
    - [Geoserver](#Geoserver)
    - [postgres](#postgres)
    - [Xamp-PHP](#Xamp)
- [Requirements](#typo3-setup)
    - [Ext.js](#extension)
    - [Geoext.js](#database)
    - [Openlayers](#database)
- [Page setup](#page-setup)
    - [Voir layers](#upload-the-page-tree-file)
    - [connexion](#go-to-the-import-view)
    - [télécharger Data](#import-the-uploaded-page-tree-file)

## Installation

This document is for the old openlayrs  **2.13.1 Openaleyrs**.

- Stable release: 2.13 (Opernalayers 9/10 LTS)
- LTS release: 2.13.4 (openlayers 7/8/9 LTS)

### Geoserver

GeoServer is an open source, open source computer server written in Java that allows users to share and modify geographic data. Designed for interoperability, it publishes data from all major sources of spatial d'ata using open standards.

•in this project I worked with GeoServer 2.15.1
 
### postgres


PostgreSQL is a relational and object database management system (RDBMS). It is a free tool available under the terms of a BSD-type license.
This system competes with other database management systems, whether free (like MariaDB and Firebird), or proprietary (like Oracle, MySQL, Sybase, DB2, Informix and Microsoft SQL Server). Like the free Apache and Linux projects, PostgreSQL is not controlled by a single company, but is founded on a global community of developers and companies.

•All versions postgres of are supported

### Xamp

XAMPP is a set of software for setting up a local Web server, an FTP server and an e-mail server. It is a distribution of free software (X (cross) Apache MariaDB Perl PHP) offering a good flexibility of use, known for its simple and fast installation. Thus, it is within the reach of a large number of people since it does not require special knowledge and also works on the most common operating systems.
 
 •All versions Xamp of are supported

## Requirements
to start the project :
firt you've to download all the libraries 
         Ext.js/Geoext.js/Openlayers
### Ext.js

Ext is a JavaScript library for building interactive web applications. It was originally an extension to Yahoo's YUI JavaScript library. Ext can now be used with the Prototype, jQuery libraries or even on its own.

• in this project I worked with Ext-4.2.1

### Geoext.js
GeoExt is Open Source and enables building desktop-like GIS applications through the web. It is a JavaScript framework that combines the GIS functionality of OpenLayers with the user interface savvy of the ExtJS library provided by Sencha.

Version 3 of GeoExt is the successor to the GeoExt 2.x-series and is built atop the newest official installments of its base libraries; OpenLayers (v3.x and v4.x) and ExtJS 6.

We are trying hard to keep up with developments on both our parent libraries. The current state of GeoExt is compatible with ExtJS 6.2.0 and OpenLayers 4.6.5. This state is released as GeoExt v3.2.0.


| OpenLayers        | ExtJS      | GeoExt |
| ------|-----|-----|
| 3.20.1 	| 6.2.0 	| 3.0.0	|
| 3.20.1 / 4.3.x	| 6.2.0 	| 3.1.0	|
| 4.6.5	| 6.2.0 	| 3.2.0 	|


•in this project I worked with Geoext2-2.1.0

### Openlayers
OpenLayers est un logiciel libre, publié sous licence BSD. Il constitue une bibliothèque de fonctions JavaScript assurant un noyau de fonctionnalités orienté vers la mise en place d'applications clientes Web présentées fluides.


 •  in this project I worked with OpenLayers-2.13.1

![first](https://user-images.githubusercontent.com/60801374/95662576-30384400-0b38-11eb-8941-911b7888cee3.png)


![layer](https://user-images.githubusercontent.com/60801374/95662592-49d98b80-0b38-11eb-8335-6cd6845b9bd1.png)

![second](https://user-images.githubusercontent.com/60801374/95662679-0b909c00-0b39-11eb-8630-25195965d346.png)


![3](https://user-images.githubusercontent.com/60801374/95662717-675b2500-0b39-11eb-8473-7064765fba96.png)
