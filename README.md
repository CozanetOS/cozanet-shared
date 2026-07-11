# Cozanet OS: Shared Types, Schemas, and Utilities SDK

[![CozanetOS Core](https://img.shields.io/badge/OS-AI--native-blueviolet.svg)](#)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](#)

The foundational TypeScript types, JSON schemas, cryptographic helpers, and standardized error-handling classes shared by all CozanetOS engines.

---

## 🌌 Overview

The `cozanet-shared` SDK is the blueprint of CozanetOS. It defines the message formats, structural types, and standard utilities that enforce predictable behavior and clean communication across all decoupled modules.

Developed specifically for **CozanetOS**—the world's first AI-native operating system—this module runs as an autonomous microservice, continuously communicating with neighboring engines to deliver frictionless operational efficiency.

---

## ✨ Core Capabilities

- TypeScript types and interfaces shared across all engines
- JSON schemas for all message envelopes, entities, configs
- **Shared constants**: engine IDs, event names, capability flags
- **Utility functions**: date formatting, string manipulation, crypto helpers
- **SDK**: `@cozanet/shared` npm package imported by all engines
- **Config schemas**: validated configuration definitions
- **Error types**: standardized error codes and messages
- **Logger**: shared structured logging utility
- **Versioning**: semantic version constants
- **Test fixtures**: shared mock data for testing

---

## 🛠️ System Architecture

This engine operates as a decoupled service under the orchestration of CozanetOS. It leverages message queues and secure IPC channels to coordinate operations with low-latency responsiveness.

```
       ┌────────────────────────────────────────────────────────┐
       │                 CozanetOS Core Engine                  │
       └──────────────────────────┬─────────────────────────────┘
                                  │ (Secure IPC / Events)
                                  ▼
       ┌────────────────────────────────────────────────────────┐
       │             COZANET-SHARED (This Module)          │
       └──────────────────────────┬─────────────────────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
   Capabilities Layer                             State Persistence
   (Core Logic & Routines)                        (Cache / Local DB)
```

---

## 🔗 Integration Ecosystem

`cozanet-shared` is deeply integrated with:

- Every CozanetOS engine (serves as the core compile-time and runtime dependency to guarantee type safety and network protocol compatibility across all repositories)

---

## 🚀 Quick-Start Guide

Get up and running with the development environment in just a few steps.

### Prerequisites

- Node.js (v18 or higher)
- Rust Toolchain (if compiling native bindings)
- Docker (optional, for localized testing)

### Installation

Clone and install dependencies within the monorepo context or as a standalone module:

```bash
git clone https://github.com/CozanetOS/cozanet-shared.git
cd cozanet-shared
npm install
```

### Running Development Server

To boot the module with hot-reloading and development-level logging:

```bash
npm run dev
```

### Running Tests

Execute the unit and integration suite to verify performance standards:

```bash
npm test
```

---

## 📄 License

This repository is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
