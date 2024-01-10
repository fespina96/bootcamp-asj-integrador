--1

SELECT p.name AS Producto,
       c.name AS 'Categoría',
       s.name AS Proveedor,
       s.code AS 'Código Proveedor',
       p.price AS Precio
FROM products p
JOIN suppliers s ON p.supplier_id = s.id
JOIN product_categories c ON p.product_category_id = c.id;

--2

SELECT p.name AS Producto,
       c.name AS 'Categoría',
       s.name AS Proveedor,
       s.code AS 'Código Proveedor',
       p.price AS Precio,
       ISNULL(p.image_url, '-') AS Imagen
FROM products p
JOIN suppliers s ON p.supplier_id = s.id
JOIN product_categories c ON p.product_category_id = c.id;

--3

SELECT p.name,
       p.supplier_id,
       p.product_category_id,
       p.description,
       p.price,
       p.image_url
FROM products p
WHERE p.id = 2;

--4

SELECT su.name AS Proveedor
FROM suppliers su
WHERE su.phone LIKE '+54 351%'
  OR su.state_id IN
    (SELECT TOP 3 st.id
     FROM suppliers s
     JOIN states st ON st.id = s.state_id
     GROUP BY st.id
     ORDER BY COUNT(s.id) DESC);

--5

SELECT s.code'Código Proveedor',
       s.name 'Proveedor',
       c.name AS 'Categoría',
       s.logo_image_url AS 'Logo'
FROM suppliers s
JOIN supplier_categories c ON s.supplier_category_id = c.id
WHERE s.deleted_at IS NULL
ORDER BY s.name ASC,
         s.code ASC,
         s.created_at ASC;

--6

SELECT TOP 1 s.name,
           s.code,
           s.logo_image_url,
           s.website,
           s.email,
           s.phone,
           s.contact_name,
           s.contact_surname,
           s.contact_email,
           s.contact_phone
FROM suppliers s
JOIN orders o ON s.id = o.supplier_id
GROUP BY s.name,
            s.code,
            s.logo_image_url,
            s.website,
            s.email,
            s.phone,
            s.contact_name,
            s.contact_surname,
            s.contact_email,
            s.contact_phone
ORDER BY COUNT(o.id) DESC;

--7

SELECT o.emision_date AS 'Fecha de emisión',
       o.id AS 'Número de orden',
       s.name AS 'Proveedor',
       s.code AS 'Código Proveedor',
       SUM(ppo.quantity) AS 'Cantidad de productos'
FROM orders o
JOIN products_per_order ppo ON o.id = ppo.order_id
JOIN suppliers s ON o.supplier_id = s.id
GROUP BY o.emision_date,
         o.id,
         s.name,
         s.code;

--8

SELECT o.emision_date AS 'Fecha de emisión',
       o.id AS 'Número de orden',
       s.name AS 'Proveedor',
       s.code AS 'Código Proveedor',
       SUM(ppo.quantity) AS 'Cantidad de productos',
       os.name AS 'Estado',
       o.total AS 'Total orden'
FROM orders o
JOIN products_per_order ppo ON o.id = ppo.order_id
JOIN suppliers s ON o.supplier_id = s.id
JOIN order_states os ON o.order_state_id = os.id
GROUP BY o.emision_date,
         o.id,
         s.name,
         s.code,
         os.name,
         o.total;

--9

SELECT p.sku_code AS 'Código SKU',
       p.name AS 'Producto',
       ppo.quantity AS 'Cantidad',
       o.total AS 'Total'
FROM orders o
JOIN products_per_order ppo ON ppo.order_id = o.id
JOIN products p ON p.id = ppo.product_id
WHERE o.supplier_id = 3;

--10

UPDATE orders
SET order_state_id = 3,
    updated_at = GETDATE()
WHERE id = 4;

----11
--DELETE FROM products
--WHERE id = 1;