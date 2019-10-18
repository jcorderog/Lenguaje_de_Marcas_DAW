# LM_U1_T2_1920:Validación_con_XML_Schema_y_DTD

### EJERCICIO1 (ej1.xml,ej1.dtd,e1.xsd)

Realizar un DTD y el XML Schema que validen el siguiente XML.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<iceCreamShop>
 <iceCream manufacture="2015-01-30">
  <chocolate>250</chocolate>
 </iceCream>
 <iceCream manufacture="2015-01-30">
  <strawberry>500</strawberry>
 </iceCream>
</iceCreamShop>
``` 

### EJERCICIO 2 (ej2.xml,ej2.dtd,e2.xsd)

Realizar un DTD y el XML Schema que validen el siguiente XML.

```xml
<?xml version="1.0" encoding="UTF-8"?
<students>
 <student dni="11111111A">
  <name>Juan Andrés</name>
  <address>
    <street>Avenida de la Fuente</street>
    <number>6</number>
    <city>Dos Hermanas</city>
    <province>Sevilla</province>
  </address>
  <phone>954556677</phone>
 </student>
 <student dni="22222222B">
  <name>Jose Sanchez</name>
  <address>
    <street>Calle Ancha</street>
    <number>3</number>
    <city>Santa Fe</city>
    <province>Granada</province>
  </address>
  <address>
    <street>Calle Mayor</street>
    <number>33</number>
    <city>Alcalá de Guadaira</city>
    <province>Sevilla</province>
  </address>
  <phone>955550000</phone>
 </student>
</students>
```

### EJERCICIO 3 (e31.xml,ej3.dtd,e3.xsd)

Realizar un DTD y el XML Schema que validen el siguiente XML.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beatles>
    <beatle link="http://www.paulmccartney.com">
        <name>
            <firstname>Paul</firstname>
            <lastname>McCartney</lastname>
        </name>
    </beatle>
    <beatle link="http://www.johnlennon.com">
        <name>
            <firstname>John</firstname>
            <lastname>Lennon</lastname>
        </name>
    </beatle>
    <beatle link="http://www.georgeharrison.com">
        <name>
            <firstname>George</firstname>
            <lastname>Harrison</lastname>
        </name>
    </beatle>
    <beatle link="http://www.ringostarr.com">
        <name>
            <firstname>Ringo</firstname>
            <lastname>Starr</lastname>
        </name>
    </beatle>
    <beatle link="http://www.webucator.com" real="no">
        <name>
            <firstname>Nat</firstname>
            <lastname>Dunn</lastname>
        </name>
    </beatle>
</beatles>
```
