# Proyect Integrador Final

Desarrollo de un *Sistema de Gestión Compras* para manejar información de Proveedores, Productos y Órdenes de compra.

## Ejecutar localmente

Pasos necesarios para correr el proyecto localmente

- Crear una base de datos llamada

```sql
  CREATE DATABASE IntegradorEspina;
```

- Ejecutar el servidor de Angular (*puerto 4200*)

```bash
  ng start -o
```

- Ejecutar el servidor de Java (*puerto 8080*)

- Los create e inserts se ejecutan automaticamente la primera vez que se ejecuta Spring, una vez ejecutado Spring por primera vez, desactivar la `spring.sql.init.mode=always` a `=never` en application.properties, así no repetir los inserts base.


## API Reference Example

#### Obtener todos los productos

```http
  GET /producto
```

#### Obtener un producto

```http
  GET /producto/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Integer` |  ID del Producto a buscar |

//Esta lógica aplica para todas las listas

## Desarrollado por

Este proyecto fue desarrollado por: Espina Fernando
