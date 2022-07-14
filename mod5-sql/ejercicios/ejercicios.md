# Ejercicios basicos

Crear el fichero \_datos.sql y ejecutar:

```shell script
sudo mysql -u rppt -d < datos.sql
```

## Crea una base de datos

```sql
CREATE DATABASE ejemplos_basicos;
```

## Seleccionar una base de datos

```sql
USE ejemplos_basicos;
```

```sql
SELECT nombre, edad FROM clientes ORDER BY nombre DESC;
```

seleccionar de los productos del mas caro al mas barato

```sql
SELECT nombre, precio FROM productos ORDER BY precio DESC;
```

Seleccionar los 3 primeros resultados de la tabla clientes

```sql
SELECT * FROM clientes LIMIT 3;
```

Seleccionar cuantos clientes se llaman Manolo

```sql
SELECT COUNT(*) FROM clientes WHERE nombre='Manolo';
```

Seleccionar cuantos productos hay en la tabla

```sql
SELECT COUNT(*) FROM productos;
```

Seleccionar el producto mas caro de nuestra base de datos

```sql
SELECT MAX(precio) FROM productos;
SELECT MAX(precio) AS 'producto mas caro' FROM productos;
```

Seleccionar el producto mas barato de nuestra base de datos

```sql
SELECT MAX(precio) FROM productos;
SELECT MAX(precio) AS 'producto mas caro' FROM productos;
```

Calcular la media de los salario de los empleados

```sql
SELECT AVG(salario) FROM empleados;
```

edad media de nuestros clientes

```sql
SELECT AVG(edad) FROM clientes;
```

Calcular la media de los salario de los empleados del departamento de FRONTEND

```sql
SELECT AVG(salario) FROM empleados WHERE departamento='frontend';
```

seleccionar los clientes qe su nombre empiezan por M

```sql
SELECT * FROM clientes WHERE nombre LIKE 'M%';
```

seleccionar los clientes qe su nombre terminan por A

```sql
SELECT * FROM clientes WHERE nombre LIKE '%a';
```

selccionar los productos que contengan leche en su descripcion

```sql
SELECT * FROM productos WHERE descripcion LIKE '%leche%';
```
