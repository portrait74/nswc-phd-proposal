# Proposal Working Outline

## Working Title

**Reinforcement Learning-Augmented Multi-Model Predictive Guidance for Hypersonic Glide Vehicles**

## Proposing Institution

**California State University, Long Beach (CSULB)**  
Department of Mechanical and Aerospace Engineering

## Target BAA Area

**Topic 2: Hypersonic & Suborbital Research and Validation**

## Core Proposal Concept

CSULB's Department of Mechanical and Aerospace Engineering will develop, extend, and validate reinforcement learning-augmented predictive guidance algorithms for hypersonic glide vehicles operating in dynamic threat environments. The proposed research will build on David Daeyoung Lee's prior work on model-based numerical predictor-corrector guidance (NPCG) and predictive lateral evasive maneuver guidance for avoiding Predicted Intercept Points (PIPs).

The proposed research will address two limitations of purely model-based NPCG: sensitivity to atmospheric, weather-driven, and aerodynamic model uncertainty, and computational burden associated with continuous onboard prediction and correction. The core concept is to use NPCG as a high-fidelity expert under uncertain flight conditions, generate ideal guidance histories across dispersed scenarios, and train a reinforcement learning (RL) agent to reproduce and adapt that guidance behavior using sensor-informed state observations.

The proposed research will focus on enabling hypersonic glide vehicles to perform agile lateral evasive maneuvers against continuously updated intercept threats while maintaining terminal targeting accuracy, reducing sensitivity to model mismatch, and improving real-time guidance feasibility.

## Problem Statement

Hypersonic glide vehicles must maintain accurate terminal targeting while responding to rapidly evolving threat predictions. Existing atmospheric entry guidance research has addressed large, static no-fly zones, but Predicted Intercept Points are smaller, continuously updated, and distributed along the flight path. This creates a fundamentally different guidance problem that requires agile, online decision-making rather than preplanned detours around fixed geographic constraints.

Model-based numerical predictor-corrector guidance provides a powerful approach for accurate atmospheric entry targeting, but its performance depends on the fidelity of the assumed atmospheric, aerodynamic, and vehicle models. When model uncertainty exists, guidance predictions can deviate from the true vehicle response, reducing terminal accuracy or threat-avoidance performance. In addition, repeated onboard trajectory prediction and correction can impose a nontrivial computational burden, especially when guidance must also respond to dynamically updated intercept threats.

There is a need for validated guidance methods that retain the physical interpretability and targeting discipline of NPCG while improving robustness to model uncertainty and reducing real-time computational demands. A multi-model NPCG training environment coupled with an RL guidance agent offers a promising path: the NPCG family can serve as a physics-informed expert policy generator that produces ideal trajectory and correction behavior, while the RL agent can learn adaptive maneuvering behavior from diverse atmospheric, weather, aerodynamic, and vehicle-model conditions.

## Proposed Approach

1. **Baseline Model-Based Guidance Architecture**
   - Establish a baseline numerical predictor-corrector guidance (NPCG) framework for longitudinal range control.
   - Implement predictive lateral bank reversal logic for crossrange and threat-avoidance maneuvering.

2. **Multi-Model NPCG Ensemble**
   - Develop multiple NPCG variants representing different atmospheric, weather-driven, aerodynamic, vehicle, and threat-model assumptions.
   - Generate ideal trajectory, correction, and guidance-response datasets across dispersed environmental and mission conditions.
   - Use the multi-model ensemble to characterize the sensitivity of PIP avoidance and terminal targeting performance to model mismatch.

3. **PIP-Aware Evasive Guidance Extension**
   - Extend the predictive lateral guidance logic to evaluate candidate trajectories against dynamically updated PIPs.
   - Select bank angle signs based on predicted 3D clearance from imminent intercept opportunities while maintaining terminal range accuracy.

4. **RL Guidance Agent Training**
   - Train an RL agent using expert guidance outputs from the multi-model NPCG ensemble and simulated sensor-informed vehicle states.
   - Define reward functions that balance terminal accuracy, PIP clearance, control effort, bank reversal frequency, and computational efficiency.
   - Evaluate whether the trained agent can select guidance actions without requiring full onboard predictor-corrector computation at every guidance cycle.

5. **Robustness and Uncertainty Analysis**
   - Evaluate performance under variations in vehicle properties, atmospheric conditions, threat update timing, guidance cycle rate, and navigation uncertainty.
   - Quantify tradeoffs among PIP clearance, terminal accuracy, maneuver aggressiveness, and time-of-flight variation.

6. **High-Fidelity Simulation and Validation**
   - Develop a simulation campaign using representative hypersonic glide vehicle mission profiles.
   - Validate baseline NPCG, multi-model NPCG, and RL-augmented guidance performance across nominal, dispersed, and maximum-threat scenarios.

7. **Transition-Oriented Assessment**
   - Assess computational feasibility, onboard implementation considerations, and integration pathways with broader GNC architectures.
   - Produce recommendations for future hardware-in-the-loop, digital engineering, or range validation activities.

## Research Objectives

- Advance predictive guidance methods for hypersonic glide vehicles in dynamic threat environments.
- Improve avoidance of continuously updated Predicted Intercept Points without sacrificing terminal targeting performance.
- Reduce sensitivity to atmospheric, aerodynamic, and vehicle-model uncertainty through multi-model training and adaptive policy learning.
- Reduce real-time onboard computational burden relative to continuous full-order predictor-corrector computation.
- Characterize the robustness of RL-augmented PIP-aware lateral evasive guidance under realistic uncertainty and timing constraints.
- Demonstrate computationally efficient adaptive guidance logic suitable for further transition and validation.
- Establish a simulation-based evaluation framework for future NSWC PHD hypersonic guidance research.

## Expected Deliverables

- Baseline NPCG and predictive lateral guidance simulation framework
- Multi-model NPCG ensemble and dispersed trajectory dataset
- PIP-aware evasive maneuver guidance algorithm
- RL guidance agent trained on multi-model NPCG outputs and sensor-informed state data
- Robustness and sensitivity analysis report
- Simulation validation dataset and performance assessment
- Transition roadmap for future GNC integration and validation activities

## Evaluation Metrics

- Minimum 3D clearance from active PIPs
- Terminal range and crossrange accuracy
- Bank reversal timing and maneuver lead time
- Time-of-flight variation relative to baseline guidance
- Computational cost per guidance cycle
- RL policy inference time relative to full NPCG update time
- Performance degradation under model mismatch
- Robustness under atmospheric, navigation, and threat-update uncertainties

## Draft Public-Sector Style Summary

본 제안은 California State University, Long Beach (CSULB) Mechanical and Aerospace Engineering 학과를 제안기관으로 하여, 극초음속 활공체(Hypersonic Glide Vehicle)의 동적 위협 회피 및 예측 유도기술을 고도화하는 것을 목표로 한다. 제안 기술은 David Daeyoung Lee가 수행한 model-based numerical predictor-corrector guidance(NPCG) 및 Predicted Intercept Point(PIP) 회피 기반 예측 횡방향 기동 유도법을 핵심 선행기술로 활용한다.

기존 NPCG 방식은 물리 기반 예측과 보정을 통해 높은 종말 정확도를 제공할 수 있으나, 대기·날씨·공력 모델의 불확실성이 존재할 경우 예측 정확도가 저하될 수 있으며, 지속적인 궤적 예측·보정 과정으로 인해 탑재 컴퓨터의 계산부하가 증가할 수 있다. 본 연구의 핵심은 이러한 불확실성 조건을 가정한 상태에서 NPCG를 활용해 이상적인 guidance history와 보정 명령을 생성하고, 이를 expert data로 활용하여 reinforcement learning(RL) agent를 학습시키는 것이다. 학습된 agent는 센서 데이터와 비행 상태에 따라 NPCG의 물리 기반 유도 특성을 근사하면서도 더 빠르게 적응적 유도 명령을 산출하는 것을 목표로 한다.

이를 통해 본 연구는 물리 기반 NPCG의 신뢰성과 RL 기반 적응성 및 계산 효율성을 결합한 새로운 극초음속 유도 프레임워크를 제시한다. 연구 결과는 실시간 동적 위협 회피, 모델 불확실성 대응, guidance, navigation, and control(GNC) 기술 고도화, 향후 탑재 구현 및 검증 활동에 기여할 것으로 기대된다.

## Draft English Executive Summary

California State University, Long Beach (CSULB), through the Department of Mechanical and Aerospace Engineering, proposes to develop and validate reinforcement learning-augmented multi-model predictive guidance algorithms for hypersonic glide vehicles operating in dynamic threat environments. The proposed research directly supports the NSWC PHD interest in hypersonic development, guidance, navigation and control systems optimized for hypersonic flight, computational modeling, and validation of advanced hypersonic technologies.

The proposed effort builds on prior CSULB-led research by David Daeyoung Lee on model-based numerical predictor-corrector guidance and predictive lateral evasive maneuver guidance for hypersonic glide vehicles capable of avoiding Predicted Intercept Points (PIPs). Unlike conventional no-fly-zone avoidance problems, PIPs are small, continuously updated, and distributed along the vehicle's flight path. This creates a need for online guidance logic that can rapidly evaluate candidate maneuvers, maximize clearance from imminent intercept opportunities, and preserve terminal targeting performance.

Although model-based numerical predictor-corrector guidance can provide accurate entry targeting, it can be sensitive to atmospheric, weather-driven, aerodynamic, and vehicle-model uncertainty. It may also require substantial onboard computation because the guidance computer must repeatedly predict and correct future trajectories during flight. This research will address these limitations by developing multiple NPCG models under different uncertainty assumptions, using NPCG to generate ideal expert guidance behavior, and using those results to train a reinforcement learning agent. The trained RL agent will use sensor-informed state data to perform adaptive guidance actions, seeking to preserve the targeting discipline of physics-based NPCG while improving robustness and real-time computational feasibility.

The research will evaluate baseline NPCG, multi-model NPCG, and RL-augmented guidance through high-fidelity numerical simulation, robustness analysis, and representative dynamic threat scenarios. The expected outcome is a validated adaptive guidance research framework, performance characterization, and transition roadmap to support future NSWC PHD hypersonic GNC research and validation activities.

## Open Items for David

- Confirm PI title and contact information
- Confirm whether the attached paper is published, submitted, or in preparation
- Add citation details for the PIP avoidance paper
- Identify available codebase, simulation tools, and vehicle models from the paper
- Define candidate RL observation space, action space, and reward terms
- Identify candidate atmospheric and aerodynamic uncertainty models for the multi-model NPCG ensemble
- Preferred research duration and rough budget range
- Whether the final submission should be drafted in English only or Korean planning plus English final proposal
- Any teaming partners, naval domain experts, or data access assumptions
