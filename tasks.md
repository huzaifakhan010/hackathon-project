---
description: "Task list for Physical AI & Humanoid Robotics Book Project"
---

# Tasks: Physical AI & Humanoid Robotics – Hands-On Guide to Building Voice-Controlled Humanoids (2025 Capstone Edition)

**Input**: Design documents from `/docs/` modules 1-4
**Prerequisites**: spec.md files from all 4 modules, constitution.md for standards

**Tests**: The project includes validation tasks for code examples, performance metrics, and deployment verification.

**Organization**: Tasks are grouped by user story (module) to enable independent implementation and testing of each module.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story/module this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Documentation**: `docs/` for all module content
- **Code Examples**: `examples/` for all code snippets
- **Docusaurus Config**: `docusaurus.config.js`, `package.json`
- **Assets**: `static/` for images, videos, and other assets

<!--
  ============================================================================
  IMPORTANT: The tasks below are based on the four module specifications:
  - Module 1: Robotic Nervous System
  - Module 2: Digital Twin
  - Module 3: AI Robot Brain - NVIDIA Isaac
  - Module 4: Vision-Language-Action
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Docusaurus project initialization and basic structure for the book

- [X] T001 Create Docusaurus v3 project structure for the book
- [X] T002 Configure GitHub Pages deployment settings in docusaurus.config.js
- [X] T003 [P] Set up basic book navigation and sidebar structure
- [X] T004 Initialize package.json with required dependencies for Docusaurus v3
- [X] T005 Create initial README and project documentation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Configure Docusaurus theme and styling to match book requirements
- [X] T007 [P] Set up basic MDX components for technical documentation
- [X] T008 [P] Configure citation and reference system (APA 7th edition)
- [X] T009 Create basic layout for consistent chapter structure across all modules
- [X] T010 Set up automated build and validation scripts
- [X] T011 Configure image optimization and asset management for 15+ screenshots per chapter
- [X] T012 Set up video embedding system for 3 YouTube shorts per chapter
- [X] T013 Create template system for consistent performance and cost tables

**Checkpoint**: Foundation ready - module implementation can now begin in parallel

---

## Phase 3: Module 1 - Robotic Nervous System (Priority: P1) 🎯 MVP

**Goal**: Transform a ROS 2 beginner into someone who can make a real Unitree G1/Go2 walk using only Python + rclpy

**Independent Test**: Student can make a real Unitree Go2 walk 2 meters in a straight line using only the code from this module

### Implementation for Module 1

- [X] T014 [P] [US1] Create Chapter 1.1: From Digital AI to Physical World in docs/01-module-1-robotic-nervous-system/1.1-from-digital-ai-to-physical-world.mdx
- [X] T015 [P] [US1] Create Chapter 1.2: ROS 2 Core Concepts in docs/01-module-1-robotic-nervous-system/1.2-ros-2-core-concepts.mdx
- [X] T016 [P] [US1] Create Chapter 1.3: Python rclpy in docs/01-module-1-robotic-nervous-system/1.3-python-rclpy.mdx
- [X] T017 [P] [US1] Create Chapter 1.4: URDF + Xacro for Humanoids in docs/01-module-1-robotic-nervous-system/1.4-urdf-xacro-humanoids.mdx
- [X] T018 [US1] Create Chapter 1.5: Launch Files and Real-Robot Debugging in docs/01-module-1-robotic-nervous-system/1.5-launch-files-debugging.mdx
- [X] T019 [US1] Create Chapter 1.6: Open-Source Walking Controller Project in docs/01-module-1-robotic-nervous-system/1.6-walking-controller-project.mdx
- [X] T020 [P] [US1] Create launch files for Chapter 1.2 examples in examples/module1/chapter2/
- [X] T021 [P] [US1] Create Python rclpy examples for Chapter 1.3 in examples/module1/chapter3/
- [X] T022 [P] [US1] Create URDF/Xacro models for Unitree G1/Go2 in examples/module1/chapter4/
- [X] T023 [US1] Create launch files for Chapter 1.5 examples in examples/module1/chapter5/
- [X] T024 [US1] Create complete walking controller for Chapter 1.6 in examples/module1/chapter6/
- [X] T025 [P] [US1] Add performance tables (Latency/CPU) to each Chapter 1 file
- [X] T026 [P] [US1] Add cost tables ($0 for this module) to each Chapter 1 file
- [ ] T027 [P] [US1] Add 15+ screenshots to each Chapter 1 file
- [ ] T028 [P] [US1] Add 3 YouTube shorts embeds to each Chapter 1 file
- [X] T029 [US1] Add Sim-to-Real Gap callouts in Chapters 1.5 and 1.6
- [X] T030 [US1] Validate all URDF/Xacro files pass check_urdf and xacro --inorder

**Checkpoint**: At this point, Module 1 should be fully functional and testable independently

---

## Phase 4: Module 2 - Digital Twin (Priority: P2)

**Goal**: Student spawns a physics-accurate humanoid in Gazebo with LiDAR + Depth + IMU streaming perfect data at ≥ 50 Hz

**Independent Test**: `ros2 launch kitchen_apartment spawn_humanoid.launch.py` → perfect sensor data visible in RViz2 in ≤ 30 seconds

### Implementation for Module 2

- [ ] T031 [P] [US2] Create Chapter 2.1: Gazebo Classic 11 Setup in docs/02-module-2-digital-twin/2.1-gazebo-classic-setup.mdx
- [ ] T032 [P] [US2] Create Chapter 2.2: Adding Real Sensors in docs/02-module-2-digital-twin/2.2-adding-real-sensors.mdx
- [ ] T033 [P] [US2] Create Chapter 2.3: Physics Tuning for Unitree Robots in docs/02-module-2-digital-twin/2.3-physics-tuning-unitree.mdx
- [ ] T034 [US2] Create Chapter 2.4: Unity Photorealistic Visualization in docs/02-module-2-digital-twin/2.4-unity-visualization.mdx
- [ ] T035 [US2] Create Chapter 2.5: Digital Twin Kitchen Apartment Project in docs/02-module-2-digital-twin/2.5-kitchen-apartment-project.mdx
- [ ] T036 [P] [US2] Create Gazebo world files for Chapter 2.1 in examples/module2/chapter1/
- [ ] T037 [P] [US2] Create sensor configuration files for Chapter 2.2 in examples/module2/chapter2/
- [ ] T038 [P] [US2] Create physics parameter files for Chapter 2.3 in examples/module2/chapter3/
- [ ] T039 [US2] Create Unity integration files for Chapter 2.4 in examples/module2/chapter4/
- [ ] T040 [US2] Create complete kitchen apartment environment for Chapter 2.5 in examples/module2/chapter5/
- [ ] T041 [P] [US2] Add performance tables (loading time, sensor frequency) to each Chapter 2 file
- [ ] T042 [P] [US2] Add cost tables to each Chapter 2 file
- [ ] T043 [P] [US2] Add 15+ screenshots to each Chapter 2 file
- [ ] T044 [P] [US2] Add 3 YouTube shorts embeds to each Chapter 2 file
- [ ] T045 [US2] Validate all .world files load in < 8s and are < 500KB
- [ ] T046 [US2] Verify sensor data streams at ≥ 50 Hz as specified

**Checkpoint**: At this point, Module 2 should be fully functional and testable independently

---

## Phase 5: Module 3 - AI Robot Brain - NVIDIA Isaac (Priority: P3)

**Goal**: Deploy hardware-accelerated VSLAM + segmentation + Nav2 on Jetson Orin Nano with end-to-end perception latency < 80 ms

**Independent Test**: Green VSLAM tracking in a real office using only RealSense D435i + Jetson Orin Nano

### Implementation for Module 3

- [ ] T047 [P] [US3] Create Chapter 3.1: Isaac Sim 2025 Installation in docs/03-module-3-ai-robot-brain-nvidia-isaac/3.1-isaac-sim-installation.mdx
- [ ] T048 [P] [US3] Create Chapter 3.2: Synthetic Data Generation in docs/03-module-3-ai-robot-brain-nvidia-isaac/3.2-synthetic-data-generation.mdx
- [ ] T049 [P] [US3] Create Chapter 3.3: Isaac ROS GEMs Deep Dive in docs/03-module-3-ai-robot-brain-nvidia-isaac/3.3-isaac-ros-gems.mdx
- [ ] T050 [US3] Create Chapter 3.4: Nav2 for Bipedal Humanoids in docs/03-module-3-ai-robot-brain-nvidia-isaac/3.4-nav2-bipedal-humanoids.mdx
- [ ] T051 [US3] Create Chapter 3.5: Sim-to-Real Perception Transfer in docs/03-module-3-ai-robot-brain-nvidia-isaac/3.5-sim-to-real-transfer.mdx
- [ ] T052 [US3] Create Chapter 3.6: Full Perception Pipeline Project in docs/03-module-3-ai-robot-brain-nvidia-isaac/3.6-full-perception-pipeline.mdx
- [ ] T053 [P] [US3] Create Isaac Sim examples for Chapter 3.1 in examples/module3/chapter1/
- [ ] T054 [P] [US3] Create synthetic data generation scripts for Chapter 3.2 in examples/module3/chapter2/
- [ ] T055 [P] [US3] Create Isaac ROS GEMs configuration files for Chapter 3.3 in examples/module3/chapter3/
- [ ] T056 [US3] Create Nav2 configuration files for Chapter 3.4 in examples/module3/chapter4/
- [ ] T057 [US3] Create complete perception pipeline for Chapter 3.6 in examples/module3/chapter6/
- [ ] T058 [P] [US3] Add performance tables (latency, frequency) to each Chapter 3 file
- [ ] T059 [P] [US3] Add cost tables to each Chapter 3 file
- [ ] T060 [P] [US3] Add 15+ screenshots to each Chapter 3 file
- [ ] T061 [P] [US3] Add 3 YouTube shorts embeds to each Chapter 3 file
- [ ] T062 [US3] Include exact nvpmodel and jetson_clocks commands in each Chapter 3 file
- [ ] T063 [US3] Verify Isaac ROS GEMs run ≥ 15 Hz on Jetson Orin Nano
- [ ] T064 [US3] Validate end-to-end perception latency < 80 ms

**Checkpoint**: At this point, Module 3 should be fully functional and testable independently

---

## Phase 6: Module 4 - Vision-Language-Action (Priority: P4)

**Goal**: Build a complete "Alexa, clean the table" pipeline that runs end-to-end on Jetson Orin Nano + RealSense in ≤ 1.8 seconds using only open-source 2025 models

**Independent Test**: Reader says "Pick up the red cup" → humanoid walks, grasps cup, places it in sink with ≥ 80% success rate (simulation or real robot)

### Implementation for Module 4

- [ ] T065 [P] [US4] Create Chapter 4.1: Whisper.cpp Speech-to-Text in docs/04-module-4-vision-language-action/4.1-whisper-speech-to-text.mdx
- [ ] T066 [P] [US4] Create Chapter 4.2: Local LLM Cognitive Planning in docs/04-module-4-vision-language-action/4.2-local-llm-cognitive-planning.mdx
- [ ] T067 [P] [US4] Create Chapter 4.3: Open-Source VLA Models in docs/04-module-4-vision-language-action/4.3-open-source-vla-models.mdx
- [ ] T068 [US4] Create Chapter 4.4: End-to-End Voice-Action Pipeline in docs/04-module-4-vision-language-action/4.4-end-to-end-pipeline.mdx
- [ ] T069 [P] [US4] Create Whisper.cpp integration code for Chapter 4.1 in examples/module4/chapter1/
- [ ] T070 [P] [US4] Create LangGraph cognitive planning code for Chapter 4.2 in examples/module4/chapter2/
- [ ] T071 [P] [US4] Create VLA model integration code for Chapter 4.3 in examples/module4/chapter3/
- [ ] T072 [US4] Create complete end-to-end pipeline for Chapter 4.4 in examples/module4/chapter4/
- [ ] T073 [P] [US4] Add full latency budget tables to each Chapter 4 file
- [ ] T074 [P] [US4] Add cost tables to each Chapter 4 file
- [ ] T075 [P] [US4] Add 15+ screenshots to each Chapter 4 file
- [ ] T076 [P] [US4] Add 3 YouTube shorts embeds to each Chapter 4 file
- [ ] T077 [US4] Implement safety watchdog + fallback for LLM hallucinations
- [ ] T078 [US4] Verify all models are ≤ 7B parameters as required
- [ ] T079 [US4] Validate total pipeline latency ≤ 1.8 seconds
- [ ] T080 [US4] Validate success rate ≥ 80% for object manipulation tasks
- [ ] T081 [US4] Ensure NO OpenAI API keys (all local/open-source)

**Checkpoint**: At this point, Module 4 should be fully functional and testable independently

---

## Phase 7: Capstone Integration (Priority: P5)

**Goal**: Integrate all modules into a complete voice-controlled humanoid system

**Independent Test**: Complete end-to-end system that takes voice commands and executes complex robot behaviors

### Implementation for Capstone

- [ ] T082 [P] Create Welcome chapter introducing the complete book in docs/welcome.mdx
- [ ] T083 [P] Create comprehensive introduction chapter in docs/introduction.mdx
- [ ] T084 [P] Create project setup guide integrating all module prerequisites in docs/setup.mdx
- [ ] T085 [P] Create capstone project chapter integrating all modules in docs/capstone-project.mdx
- [ ] T086 [P] Create references.mdx with APA 7th edition citations for all sources
- [ ] T087 [P] Create troubleshooting guide combining issues from all modules in docs/troubleshooting.mdx
- [ ] T088 [P] Create appendices with quick reference guides in docs/appendices/
- [ ] T089 Integrate all modules into a single cohesive pipeline
- [ ] T090 Test complete voice-to-action pipeline across all modules
- [ ] T091 Validate total system meets ≤ 1.8s latency requirement
- [ ] T092 Validate ≥ 80% success rate for complete system

**Checkpoint**: Complete book with integrated modules should be fully functional

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple modules and final deployment

- [ ] T093 [P] Update navigation and sidebar to include all modules and chapters
- [ ] T094 [P] Implement consistent styling across all modules
- [ ] T095 [P] Add cross-references between related chapters across modules
- [ ] T096 [P] Optimize all images and assets for web performance
- [ ] T097 [P] Add search functionality and improve accessibility
- [ ] T098 [P] Create mobile-responsive design adjustments
- [ ] T099 [P] Add code syntax highlighting for all technical examples
- [ ] T100 [P] Implement proper error handling and fallbacks across all chapters
- [ ] T101 [P] Add additional unit tests and validation scripts
- [ ] T102 [P] Run plagiarism check on all content (Copyleaks < 1%)
- [ ] T103 [P] Update all citations to APA 7th edition format
- [ ] T104 [P] Add accessibility descriptions for all images and diagrams
- [ ] T105 [P] Final review and fact-checking against official documentation
- [ ] T106 [P] Create deployment scripts for GitHub Pages
- [ ] T107 [P] Test complete Docusaurus build and GitHub Pages deployment
- [ ] T108 Run final validation of all acceptance criteria

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all modules
- **Modules (Phase 3-6)**: All depend on Foundational phase completion
  - Modules can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3 → P4)
- **Capstone (Phase 7)**: Depends on all modules being complete
- **Polish (Final Phase)**: Depends on all desired modules and capstone being complete

### Module Dependencies

- **Module 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other modules
- **Module 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with Module 1 but should be independently testable
- **Module 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with Module 1/2 but should be independently testable
- **Module 4 (P4)**: Can start after Foundational (Phase 2) - May integrate with Module 1/2/3 but should be independently testable
- **Capstone (P5)**: Depends on all modules being complete

### Within Each Module

- Core implementation before integration
- Each module complete before moving to next priority
- All code examples tested and validated
- Performance metrics verified

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all modules can start in parallel (if team capacity allows)
- All models within a module marked [P] can run in parallel
- Different modules can be worked on in parallel by different team members

---

## Parallel Example: Module 1

```bash
# Launch all chapters for Module 1 together:
Task: "Create Chapter 1.1: From Digital AI to Physical World in docs/01-module-1-robotic-nervous-system/1.1-from-digital-ai-to-physical-world.mdx"
Task: "Create Chapter 1.2: ROS 2 Core Concepts in docs/01-module-1-robotic-nervous-system/1.2-ros-2-core-concepts.mdx"
Task: "Create Chapter 1.3: Python rclpy in docs/01-module-1-robotic-nervous-system/1.3-python-rclpy.mdx"
Task: "Create Chapter 1.4: URDF + Xacro for Humanoids in docs/01-module-1-robotic-nervous-system/1.4-urdf-xacro-humanoids.mdx"

# Launch all code examples for Module 1 together:
Task: "Create launch files for Chapter 1.2 examples in examples/module1/chapter2/"
Task: "Create Python rclpy examples for Chapter 1.3 in examples/module1/chapter3/"
Task: "Create URDF/Xacro models for Unitree G1/Go2 in examples/module1/chapter4/"
```

---

## Implementation Strategy

### MVP First (Module 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all modules)
3. Complete Phase 3: Module 1
4. **STOP and VALIDATE**: Test Module 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add Module 1 → Test independently → Deploy/Demo (MVP!)
3. Add Module 2 → Test independently → Deploy/Demo
4. Add Module 3 → Test independently → Deploy/Demo
5. Add Module 4 → Test independently → Deploy/Demo
6. Add Capstone → Integrate all → Deploy/Demo
7. Each module adds value without breaking previous modules

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: Module 1
   - Developer B: Module 2
   - Developer C: Module 3
   - Developer D: Module 4
3. Modules complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [US#] label maps task to specific module for traceability
- Each module should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate module independently
- Ensure all content follows APA 7th edition citation format
- Verify all code examples are copy-pasteable and tested
- Confirm all performance requirements are met for each module