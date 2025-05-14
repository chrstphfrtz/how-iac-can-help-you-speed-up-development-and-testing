---
marp: true
theme: gaia
---

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

# Speeding Up Development & Testing with Infrastructure as Code and Dev Containers 
## From Zero to Code Faster with Standardized Environments and Automated Setup

---

# The Pain Points of Traditional Setup

- "It works on my machine!"
- Manual installation of SDKs, tools, dependencies
- Version conflicts and dependency hell
- Hours (or days) spent getting a new team member productive
- Difficulty creating consistent environments for testing
- Manual and error-prone test data setup
- Context switching overhead between projects

---

# What is Infrastructure as Code (IaC)?

- Managing and provisioning infrastructure through code instead of manual processes
- Treating your environment setup like application code
- Key Principles:
  - Repeatability: Get the same environment every time
  - Consistency: Everyone uses the exact same setup
  - Version Control: Track changes, rollback, collaborate
  - Automation: Eliminate manual steps

---

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
- **Focus on the desired state**
- **Declarative - Tools handle the "how"**
- **Idempotency**

![bg right:60%](./img/iac.png)

---