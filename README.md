# Taller CI/CD con GitHub Actions

Proyecto de clase mínimo en Node.js para practicar el ciclo completo:

- **Fases I–III (CI):** código + pruebas + workflow `build_and_test` con matriz de versiones.
- **Fase IV (CD):** job `deploy` encadenado con `needs: [build_and_test]`.

## Ejecutar en local

```bash
npm ci
npm test
npm start
```

No hay dependencias externas: se usa el test runner nativo de Node (`node --test`).

## El workflow

El flujo está en [`.github/workflows/ci.yml`](.github/workflows/ci.yml):

| Job | Responsabilidad |
|---|---|
| `build_and_test` | Se ejecuta en Node 20, 22 y 24: `checkout@v4`, `setup-node@v4` (con caché npm), `npm ci` y `npm test`. |
| `deploy` | `checkout@v4` en un runner nuevo y despliegue simulado. Declare `needs: [build_and_test]`, así que **solo arranca si toda la matriz de CI pasó**. |

Se dispara con `push` / `pull_request` sobre `main` o `master`, y también manualmente (*Run workflow*).

## Prueba positiva y negativa (Tarea 12)

1. **Positiva:** haga commit de un cambio; verá `build_and_test` en verde y, justo después, `deploy` ejecutándose.
2. **Negativa:** cambie temporalmente una aserción en `index.test.js` para que falle y haga commit. `build_and_test` fallará y `deploy` aparecerá como **Skipped**. Restaure la prueba después.

## Secretos

Las credenciales reales nunca se escriben en el YAML. Se crean en
**Settings → Secrets and variables → Actions → New repository secret** y se consumen así:

```yaml
env:
  CLOUD_API_TOKEN: ${{ secrets.CLOUD_API_TOKEN }}
```

En el workflow el step aparece comentado porque el despliegue es una simulación.

> En un entorno real añada `if: github.ref == 'refs/heads/main'` al job `deploy` para no desplegar desde ramas de desarrollo.
