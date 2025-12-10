/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // Manual sidebar structure for the Physical AI & Humanoid Robotics book
  bookSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      items: ['intro'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 1: Robotic Nervous System',
      items: [
        'module-1-robotic-nervous-system/spec',
        'module-1-robotic-nervous-system/1.1-from-digital-ai-to-physical-world',
        'module-1-robotic-nervous-system/1.2-ros-2-core-concepts',
        'module-1-robotic-nervous-system/1.3-python-rclpy',
        'module-1-robotic-nervous-system/1.4-urdf-xacro-humanoids',
        'module-1-robotic-nervous-system/1.5-launch-files-debugging',
        'module-1-robotic-nervous-system/1.6-walking-controller-project',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin',
      items: [
        'module-2-digital-twin/spec',
        'module-2-digital-twin/2.1-gazebo-classic-setup',
        'module-2-digital-twin/2.2-adding-real-sensors',
        'module-2-digital-twin/2.3-physics-tuning',
        'module-2-digital-twin/2.4-unity-photorealistic-visualization',
        'module-2-digital-twin/2.5-project-digital-twin-kitchen-apartment',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3: AI Robot Brain - NVIDIA Isaac',
      items: [
        'module-3-ai-robot-brain-nvidia-isaac/spec',
        'module-3-ai-robot-brain-nvidia-isaac/3.1-isaac-sim-installation',
        'module-3-ai-robot-brain-nvidia-isaac/3.2-synthetic-data-generation',
        'module-3-ai-robot-brain-nvidia-isaac/3.3-isaac-ros-gems-deep-dive',
        'module-3-ai-robot-brain-nvidia-isaac/3.4-nav2-stack-bipedal-humanoids',
        'module-3-ai-robot-brain-nvidia-isaac/3.5-sim-to-real-perception-transfer',
        'module-3-ai-robot-brain-nvidia-isaac/3.6-project-full-perception-navigation-pipeline',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action',
      items: [
        'module-4-vision-language-action/spec',
        'module-4-vision-language-action/4.1-whisper-cpp-speech-to-text',
        'module-4-vision-language-action/4.2-local-llm-cognitive-planning',
        'module-4-vision-language-action/4.3-open-source-vla-models',
        'module-4-vision-language-action/4.4-end-to-end-voice-text-llm-action',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Capstone & Appendices',
      items: [
        'capstone-project',
        'references',
        'troubleshooting',
        'appendices/setup-guide',
        'appendices/ros2-cheatsheet',
        'appendices/jetson-optimization',
      ],
      collapsed: false,
    },
  ],
};
