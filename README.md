# Guía Interactiva: Arquitectura Hexagonal (Ports & Adapters)

<div align="center">
  <img src="https://img.shields.io/badge/Status-Production-success?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Stack-React_19_%7C_Vite_%7C_Tailwind-blue?style=for-the-badge" alt="Stack" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</div>

## 📋 Descripción del Proyecto

Esta aplicación es una **Guía de Referencia Técnica Interactiva** diseñada para desmitificar la Arquitectura Hexagonal (Ports and Adapters). A diferencia de la documentación estática tradicional, este proyecto ofrece una experiencia de navegación fluida con ejemplos de código en **Python Moderno** (Type Hints, Dataclasses, SOLID) listos para copiar.

El objetivo es demostrar cómo desacoplar la lógica de negocio (Dominio) de los detalles de infraestructura (Frameworks, BDs), alineado con los principios de diseño de software de alta calidad.

## 🚀 Características Técnicas

*   **Enfoque Educativo:** Desglose paso a paso desde el "Problema del Acoplamiento" hasta la "Inversión de Dependencias".
*   **Stack Moderno:** Construido con React 19, Vite y TailwindCSS para un rendimiento óptimo.
*   **Ejemplos de Grado Militar:** Código Python que utiliza patrones avanzados:
    *   `@dataclass(frozen=True)` para Value Objects inmutables.
    *   Patrón Repository para abstracción de persistencia.
    *   Inyección de Dependencias.
*   **Despliegue Contenerizado:** Arquitectura Docker Multi-Stage optimizada (imagen final < 30MB).

## 🛠️ Instalación y Ejecución Local

### Opción A: Ejecución con Docker (Recomendado)

El proyecto incluye una configuración de producción con Nginx como servidor reverso.

```bash
# 1. Construir y levantar el contenedor
docker-compose up -d --build

# 2. Acceder a la guía
# Abre tu navegador en http://localhost