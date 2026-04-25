# ✂️ SalãoSync - Gestão Integrada de Agendamento e Estoque

Este projeto é um protótipo funcional (MVP) de uma aplicação web voltada para a gestão de salões de beleza, integrando o agendamento de clientes com o controle automático de insumos.

## 📌 O Problema
Muitos estabelecimentos de estética sofrem com perdas financeiras devido à falta de sincronia entre a agenda e o estoque. Agendamentos são feitos sem conferir se há produto disponível, resultando em cancelamentos de última hora ou compras de emergência com custos elevados.

## 🚀 A Solução (SalãoSync)
O SalãoSync resolve esse gap através de uma interface integrada:
1.  **Visão do Cliente:** Permite realizar agendamentos selecionando o serviço desejado.
2.  **Visão do Proprietário:** Um dashboard em tempo real que recebe os agendamentos e deduz automaticamente os produtos do estoque (ex: tintas, produtos de progressiva).
3.  **Persistência de Dados:** Utiliza `LocalStorage` para simular um banco de dados, permitindo que as informações sejam mantidas mesmo ao atualizar a página ou trocar de aba.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica das interfaces de Cliente e Administrador.
* **CSS3:** Design responsivo, moderno e uso de Flexbox/Grid para o dashboard.
* **JavaScript (ES6+):** Lógica de negócios, manipulação de DOM e persistência de dados no navegador.
* **Git & GitHub:** Controle de versão e hospedagem do código-fonte.

## ⚙️ Arquitetura de TI Planejada (Escalabilidade)
Para uma versão de produção, a arquitetura prevê:
* **Frontend:** React.js ou Vue.js para uma SPA (Single Page Application).
* **Backend:** Node.js com Express.
* **Banco de Dados:** PostgreSQL (Relacional) para garantir a integridade entre agenda e estoque.
* **Nuvem:** Hospedagem em instâncias AWS (EC2/RDS).
* **Integrações:** API do WhatsApp Business para notificações automáticas de confirmação.

---

### 👥 Desenvolvedores
* **Gabriel Gonçalves**
* **Kaua Moura**

---
*Projeto desenvolvido para a Avaliação 01 da disciplina de Introdução à TI.*
