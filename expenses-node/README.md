## Expenses NodeJS

Creando la carpeta de la aplicación.

```bash
mkdir expenses-app && cd expenses-app
```

Inicializar el proyecto.

```bash
npm init
```

Creando el archivo del servidor.

```bash
touch serve.js
```

Instalando dependencias.

```bash
npm install --save express body-parser mongoose
```

### Controladores

Creando el directorio.

```bash
mkdir controllers
```

Creando el archivo controlador.

```bash
touch controllers/expense.controller.js
```

### Modelos

Creando el directorio.

```bash
mkdir models
```

Creando el archivo de modelo.

```bash
touch controllers/expense.model.js
```

### Rutas

Creando el archivo de rutas.

```bash
mkdir expense.route.js
```

### Estructura 

```
│   app.js
│   package-lock.json
│   package.json
├───controllers
│       expense.controller.js
├───models
│       expense.model.js
├───postman
│       API Expenses.postman_collection.json
└───routes
        expense.route.js
```

